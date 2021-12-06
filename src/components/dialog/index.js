import React from 'react';
import PropTypes from 'prop-types';
import Content from './content';
import useFadeAnimParent from '../../hooks/useFadeAnim/useFadeAnimParent';

const Dialog = (props) => {
const {isShown} = props

    const {render,stopRender} = useFadeAnimParent(isShown);

    return (
        render &&
        <Content
            stopRender={stopRender}
            {...props}
            className={props.className}
        />
    );
};

Dialog.defaultProps = {
    isShown: false,
    variant: 'simple',
    shouldCloseOnOverlayClick: true,
    confirmText: "Confirm",
    cancelText: "Cancel",
    showDismiss: true,
}

Dialog.propTypes = {
    variant: PropTypes.oneOf(['simple', 'simple-gray', 'action', 'double-action','absolute']),
    onCloseComplete: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,


};

export default Dialog;