import { Action } from '@ngrx/store';
import { isType } from 'typescript-fsa';

import { AppStore } from '$shared';
import { UIStoreActions } from './ui.actions';

// Define initial store state : State.main
const initialState: AppStore.Ui = {
  saveState: null,
  modal: null,
  multiScreen: false,
  sidebarOpen: false,
  carousel: [
    {
      name: 'Top 5 CSS',
      active: true,
      duration: 8,
      img: 'assets/img/sb-top.jpg'
    },
    {
      name: "Todays Xfers & Talk",
      active: true,
      duration: 8,
      img: 'assets/img/sb-today.jpg'
    },
    {
      name: 'Goals',
      active: true,
      duration: 8,
      img: 'assets/img/sb-goals.jpg'
    },
    {
      name: 'Total Transfers Today',
      active: true,
      duration: 8,
      img: 'assets/img/sb-total-today.jpg'
    },
  ],
  tabsActive: {},
};

export function UIReducer(state = initialState, action: Action) {
  // console.log('UI REDUCER:', action);

  if (isType(action, UIStoreActions.REHYDRATE)) {
    state = { ...initialState, ...action.payload };
  }

  if (isType(action, UIStoreActions.MODAL_OPEN)) {
    state.modal = { ...action.payload };
  }

  if (isType(action, UIStoreActions.MODAL_UNLOAD)) {
    state.modal = null;
  }

  if (isType(action, UIStoreActions.CAROUSEL_CHANGE)) {
    console.log(action.payload)
    state.carousel = [ ...action.payload ];
  }

  if (isType(action, UIStoreActions.SIDEBAR_TOGGLE)) {
    state.sidebarOpen = action.payload;
  }

  if (isType(action, UIStoreActions.TAB_CHANGE)) {
    state.tabsActive[action.payload.tabInstanceId] = action.payload.tabId;
  }

  if (isType(action, UIStoreActions.MULTISCREEN_TOGGLE)) {
    state.multiScreen = action.payload !== null ? action.payload : !state.multiScreen;
  }

  // If the action namespace is the UI store and NOT the rehydrate action
  if (action.type && action.type.split('/')[0] === 'ui' && !isType(action, UIStoreActions.REHYDRATE)) {
    const saveState = { ...state };
    delete saveState.saveState;
    state.saveState = JSON.parse(JSON.stringify(saveState));
  }

  // console.log('UI STATE: ', JSON.parse(JSON.stringify(state)));
  return state;
}
