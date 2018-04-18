import React from 'react'
import { translate } from 'react-polyglot';

import Divider from 'ui/components/divider';
import Portal from 'ui/components/portal';
import Button from 'ui/components/button';
import Text from 'ui/components/text';
import Icon from 'ui/components/icon';
import './styles.scss'

class Modal extends React.Component {

  static defaultProps = {
    title: false,
    actionLabel: false,
    hasFooter: false,
    onActionClick: () => {},
    onClose: () => {}
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  renderHeader() {
    const { title, onClose } = this.props;

    return (
      <div className="modal__header">
        <div className="modal__header-content p--2">
          <Text className="modal__header-text" theme="h3">{title}</Text>
          <Icon onClick={onClose} type="close" />
        </div>
        <Divider/>
      </div>
    )
  }

  renderBody() {
    return (
      <div className="modal__body">
        {this.props.children}
      </div>
    )
  }

  renderFooter() {
    const { props } = this;
    const { onClose, onActionClick, actionLabel, actionSaving } = props;

    return (
      <div className="modal__footer">
        <Divider/>
        <div className="clearfix p--2">
          <div className="right">
            <Button label={props.t("general.cancel")}
              theme="tertiary"
              onClick={onClose} />
            <Button label={actionLabel || props.t("general.save")}
              className="ml"
              disabled={actionSaving}
              loading={actionSaving}
              onClick={onActionClick} />
          </div>
        </div>
      </div>
    )
  }

  renderModal() {
    const { hasFooter } = this.props;

    return (
      <div className="modal__content" onClick={this.handleStopPropagation}>
        {this.renderHeader()}
        {this.renderBody()}
        {hasFooter && this.renderFooter()}
      </div>
    )
  }

  render() {
    const { onClose } = this.props;

    return (
      <Portal>
        <div className="overlay"/>
        <div className="modal animated pulse" onClick={onClose}>
          {this.renderModal()}
        </div>
      </Portal>
    )
  }

  handleStopPropagation = (e) => {
    e.stopPropagation();
  }

  handleKeyPress = (e) => {
    // escape key
    if(e.keyCode === 27) {
      this.props.onClose();
    }
  }
}

export default translate()(Modal)
