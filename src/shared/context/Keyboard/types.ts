export enum KeyboardActions {
  CLICK = 'CLICK',
  SELECT = 'SELECT',
  SHIFT = 'SHIFT'
}

export type KKeyType = { value: number | string, name: string, active: boolean, cb?: () => void }
export type ControlKeysType = 'ArrowLeft' | 'ArrowRight' | 'Enter'
export type KeyboardType = { numPad: KKeyType[], control: KKeyType[] }

export interface KeyboardStateType {
  clickedKey: KKeyType | null;
  selectedKey: KKeyType;
  keyboard: KeyboardType;
}

export interface KeyboardContextType {
  clicked: KKeyType | null;
  selected: KKeyType;
  keyboard: KeyboardType;
  onPressKey: (key: KKeyType) => void;
  onShiftKey: (to: number) => void;
  getKeyByName: (name: string) => KKeyType;
}

export interface KeyboardClickActionType {
  type: KeyboardActions.CLICK;
  payload: KKeyType | null;
}

export interface KeyboardSelectActionType {
  type: KeyboardActions.SELECT;
  payload: KKeyType;
}

export interface NumPadShiftActionType {
  type: KeyboardActions.SHIFT;
  payload: KeyboardType;
}

export type KeyboardActionsType =
  KeyboardClickActionType |
  KeyboardSelectActionType |
  NumPadShiftActionType