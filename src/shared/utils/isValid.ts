import { phoneLenRegExp, phoneMaskRegExp } from '@/shared/consts/regExp.ts';

export function isValid() {
  return {
    phoneRu: (value: string) => {
      return !!value.match(phoneMaskRegExp);
    },
    phoneLengthRu: (value: string) => {
      return !!value.match(phoneLenRegExp);
    }
  };
}