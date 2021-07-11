import { isPlainObject, isString } from 'lodash';
import { Api } from '../../api';

export default class ZhyxApi extends Api {
  setup() {
    this.apisauce.addRequestTransform(request => {
      if (request.method === 'post' && isString(request.data)) {
        request.headers['Content-Type'] = 'application/json';
      }
      if ((request.method === 'post' || request.method === 'put') && isPlainObject(request.data)) {
        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
    });
  }
}
