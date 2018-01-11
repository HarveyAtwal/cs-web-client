import { toast as reactToastify } from 'react-toastify';
import _ from 'lodash';

const toast = _.extend({}, reactToastify, {
  error: function error(content, options) {
    return reactToastify.error(content, { ...options, className: "toast toast--error" })
  },
})

export {
  toast
}