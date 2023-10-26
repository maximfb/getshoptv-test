import { createContext, ReactNode, useReducer } from 'react';
// @ts-ignore
import useKeypress from 'react-use-keypress';
import reducer from '@/shared/context/Keyboard/reducer.ts';
import {
  ControlKeysType,
  KKeyType,
  KeyboardActions,
  KeyboardStateType,
  KeyboardContextType
} from '@/shared/context/Keyboard/types.ts';

const initialState: KeyboardStateType = {
  clickedKey: null,
  selectedKey: { value: 1, name: '1', active: true },
  keyboard: {
    numPad: [
      { value: 1, name: '1', active: true },
      { value: 2, name: '2', active: false },
      { value: 3, name: '3', active: false },
      { value: 4, name: '4', active: false },
      { value: 5, name: '5', active: false },
      { value: 6, name: '6', active: false },
      { value: 7, name: '7', active: false },
      { value: 8, name: '8', active: false },
      { value: 9, name: '9', active: false },
      { value: -1, name: 'Стереть', active: false },
      { value: 0, name: '0', active: false }
    ],
    control: [
      { value: '', name: 'Подтвердить номер', active: false, cb: () => console.log('Подтвердить номер') },
      { value: '', name: 'Закрыть', active: false, cb: () => console.log('Закрыть') }
    ]
  }
};
const controlKeys = [ 'ArrowLeft', 'ArrowRight', 'Enter' ] as ControlKeysType[];

export const KeyboardContext = createContext<KeyboardContextType | null>(null);

export const KeyboardProvider = ({ children }: { children: ReactNode }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  useKeypress(controlKeys, (event: KeyboardEvent) => {
    dispatch({ type: KeyboardActions.CLICK, payload: null });
    switch (event.key as ControlKeysType) {
      case 'ArrowLeft':
        return shiftLeftHandler();
      case 'ArrowRight':
        return shiftRightHandler();
      case 'Enter':
        return enterHandler();
    }
  });

  const clickHandler = (key: KKeyType) => {
    dispatch({ type: KeyboardActions.CLICK, payload: key });
  };

  const getKeyByName = (name: string): KKeyType => {
    const key = state.keyboard.numPad.concat(state.keyboard.control)
      .find(key => key.name === name)

    if (!key)
       throw Error(`Button with ${ name } name is undefined`);

    return key
  };

  const shiftHandler = (to: number) => {
    const kb = [ ...state.keyboard.numPad, ...state.keyboard.control ];
    const activeIndex = kb.findIndex((key: KKeyType) => key.active);
    const newIndex = (activeIndex + to + kb.length) % kb.length;
    const updatedNumPad = {
      numPad: state.keyboard.numPad.map((el, i) => ({
        ...el,
        active: newIndex === i
      })),
      control: state.keyboard.control.map((el, i) => ({
        ...el,
        active: newIndex === i + (kb.length - state.keyboard.control.length)
      })),
    };
    dispatch({ type: KeyboardActions.SHIFT, payload: updatedNumPad });
    dispatch({ type: KeyboardActions.SELECT, payload: kb[newIndex] });
  };

  const shiftLeftHandler = () => shiftHandler(-1);
  const shiftRightHandler = () => shiftHandler(1);
  const enterHandler = () => clickHandler(state.selectedKey);

  const value: KeyboardContextType = {
    clicked: state.clickedKey,
    selected: state.selectedKey,
    keyboard: state.keyboard,
    onPressKey: clickHandler,
    onShiftKey: shiftHandler,
    getKeyByName: getKeyByName
  };

  return <KeyboardContext.Provider value={ value }>{ children }</KeyboardContext.Provider>;
};