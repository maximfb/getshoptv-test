import {
  KeyboardActions,
  KeyboardActionsType,
  KeyboardStateType,
} from '@/shared/context/Keyboard/types.ts';

const reducer = (state: KeyboardStateType, { type, payload }: KeyboardActionsType) => {
  switch (type) {
    case KeyboardActions.CLICK:
      return {
        ...state,
        clickedKey: payload,
      };
    case KeyboardActions.SELECT:
      return {
        ...state,
        selectedKey: payload,
      };
    case KeyboardActions.SHIFT:
      return {
        ...state,
        keyboard: payload,
      };
    default:
      return state;
  }
};

export default reducer;