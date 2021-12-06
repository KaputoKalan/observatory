import React from 'react';
import PropTypes from 'prop-types';
import useFadeAnimParent from '../../hooks/useFadeAnim/useFadeAnimParent';
import Content from './content';


const Notification = (props) => {
    const { isShown } = props

    const { render, stopRender } = useFadeAnimParent(isShown);

    return (
        render &&
        <Content
            stopRender={stopRender}
            {...props}
            className={props.className}
        />
    );
};

Notification.defaultProps = {
    isShown: false,
    variant: 'condensed'
}
Notification.propTypes = {
    icon: PropTypes.object,
    onCloseComplete: PropTypes.func,
    variant: PropTypes.oneOf(['simple', 'condensed', 'action-below','avatar','split','button-below']),
    title: PropTypes.string,
    content: PropTypes.string,
    onPositiveClick: PropTypes.func,
    onNegativeClick: PropTypes.func,
    positiveText: PropTypes.string,
    negativeText: PropTypes.string,
    avatar: PropTypes.string,

};

export default Notification;