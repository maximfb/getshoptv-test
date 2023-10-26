import { FC, useEffect, useMemo, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import * as Api from '@/shared/api';
import { isValid } from '@/shared/utils';
import { useKeyboard } from '@/shared/hooks/useKeyboard.tsx';
import { FormData } from './types.ts';

import { Input } from '@/shared/ui/Input';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Button } from '@/shared/ui/Button';
import { NumPad } from '@/entities/NumPad';

import styles from './PromoForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { KKeyType } from '@/shared/context/Keyboard/types.ts';

const defaultValues: FormData = {
  number: '',
  check: false
};

export const PromoForm: FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    getValues,
    watch,
    reset,
    setFocus
  } = useForm<FormData>({ defaultValues });
  const registerWithMask = useHookFormMask(register);
  const { clicked, onShiftKey, onPressKey, getKeyByName } = useKeyboard();
  const navigation = useNavigate();

  const timer = useRef<ReturnType<typeof setTimeout>>();
  const acceptPhoneBtn = useMemo<KKeyType>(() => getKeyByName('Подтвердить номер'), [ onShiftKey ]);

  useEffect(() => setFocus('number'), []);
  useEffect(() => setInputPhone(), [ onPressKey ]);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      navigation('/');
    }, 10000);
  }, [ watch([ 'number', 'check' ]), onPressKey ]);

  // Send form while enter click
  useEffect(() => {
    if (clicked?.name === 'Подтвердить номер')
      handleSubmit(submitHandler);
  }, [ onPressKey ]);

  // Submitting
  const submitHandler: SubmitHandler<FormData> = async (data) => {
    try {
      Api.numverify.checkPhone(data.number)
        .then(({ valid }) => {
          if (valid) {
            alert(JSON.stringify(data));
            reset();
            clearErrors();
            setFocus('number');
          } else {
            setError('number', { message: 'Неверно введён номер' });
          }
        })
        .catch(err => {
          throw Error(`Error while phone validation: ${ err.message }`);
        });
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  // Write phone
  const setInputPhone = () => {
    let value = getValues('number');
    if (clicked && clicked?.value !== -1 && !isValid().phoneLengthRu(value)) {
      value += clicked?.value;
    } else if (value.length && clicked?.value === -1) {
      value = value.slice(0, -1);
    }
    setValue('number', value);
    clearErrors('number');
  };

  return (
    <form onSubmit={ handleSubmit(submitHandler) } className={ styles.form }>
      <h1>Введите ваш номер<br/>мобильного телефона</h1>
      <Input
        { ...registerWithMask(
          'number',
          [ '+7(999)999-99-99' ],
          { required: true },
        ) }
        id={ 'number' }
        type={ 'tel' }
        placeholder={ '+7(___)___-__-__' }
        error={ errors.number }
        mix={ styles.number }
      />
      <p>и с Вами свяжется наш менеждер для дальнейшей консультации</p>

      <NumPad/>

      <Checkbox
        { ...register('check', { required: true }) }
        error={ errors.check }
        label={ 'Согласие на обработку персональных данных' }
        id={ 'check' }
      />

      { errors.number && <span className={ styles.error }>{ errors.number.message }</span> }

      <Button
        type={ 'submit' }
        key={ acceptPhoneBtn.name }
        mix={ [ styles.button, acceptPhoneBtn.active ? styles.button__active : '' ] }
        onClick={ () => onPressKey(acceptPhoneBtn) }
        disabled={ !isValid().phoneLengthRu(getValues('number')) }
      >
        { acceptPhoneBtn.name }
      </Button>

    </form>
  );
};
