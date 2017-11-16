import {getLayoutDataFuc} from '../services/layout';

export default {
  namespace: 'layout',
  state: {
    layout:null
  },
  effects: {
    *getLayoutData(_, {call, put}){
      const data = yield call(getLayoutDataFuc);
      yield put({type: 'save', plyload:{layout:data.layout}})
    }
  },
  reducers: {
    save(state, {plyload}) {
      return {...state, ...plyload}
    }
  }
};
