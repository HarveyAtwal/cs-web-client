import { toast as reactToastify } from 'react-toastify';
import _ from 'lodash';

const toast = _.extend({}, reactToastify, {
  error: function error(content, options) {
    return reactToastify.error(content, {
        position: toast.POSITION.TOP_CENTER,
        className: "toast toast--error",
       ...options,
     })
  },
  success: function error(content, options) {
    return reactToastify.error(content, {
      position: toast.POSITION.TOP_CENTER,
      className: "toast toast--success",
      ...options,
    })
  }
})

export {
  toast
}
