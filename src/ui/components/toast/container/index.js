import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { ToastContainer, style } from 'react-toastify';
import { translate } from 'react-polyglot';
import * as errorActions from 'stores/error';

import { toast } from 'ui/components/toast'
import './styles.scss';

class ErrorContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    const { errors } = nextProps;

    if(errors.length) {
      this.showToastErrors(errors);
    }
  }

  showToastErrors(errors) {
    const { props } = this;
    for(let i = 0; i < errors.length; i++) {
      const error = errors[i];
      const msg = error.il8n ? props.t(error.il8n) : error.message;

      if(!error.silent) {        
        toast.error(msg, {
          onOpen: () => { props.errorShown(error) }
        });
      }
    }
  }

  render() {
    const { props } = this;
    return (
      <div>
        <ToastContainer
          autoClose={5000}
          className="toast-container"
          bodyClassName="toast-container__body"
          progressClassName="toast-container__progress" />
        {props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ errors: state.errors });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(errorActions, dispatch)
}

export default translate()(connect(mapStateToProps, mapDispatchToProps)(ErrorContainer))


style({
  width: "700",
  colorDefault: "#fff",
  colorInfo: "#3498db",
  colorSuccess: "#07bc0c",
  colorWarning: "#f1c40f",
  colorError: "#e74c3c",
  colorProgressDefault: "linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55)",
  mobile: "only screen and (max-width : 480px)",
  fontFamily: "sans-serif",
  zIndex: 9999,
  TOP_LEFT: {
    top: '1em',
    left: '1em'
  },
  TOP_CENTER: {
    top: '1em',
    transform: 'translateX(-50%)',
    marginLeft: '0',
    left: '50%'
  },
  TOP_RIGHT: {
    top: '1em',
    right: '1em'
  },
  BOTTOM_LEFT: {
    bottom: '1em',
    left: '1em'
  },
  BOTTOM_CENTER: {
    bottom: '1em',
    marginLeft: `-${700/2}px`,
    left: '50%'
  },
  BOTTOM_RIGHT: {
    bottom: '1em',
    right: '1em'
  }
});
