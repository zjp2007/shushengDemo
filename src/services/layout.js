import request from '../utils/request';


export async function getLayoutDataFuc() {
  return request('/api/getLayoutDataFuc');
}
