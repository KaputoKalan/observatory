import React from 'react';
import PropTypes from 'prop-types';
import TextInput, { proptypes as textInputPropTypes } from '../textinput';
import styled from 'styled-components';
import Text from '../text';
import { ReactComponent as WarningSVG } from './images/warning.svg'
import Icon from '../icon';

const errorFocus = (theme) => {

    return `
    border-color: ${theme.red600};

:focus{
    box-shadow: 0 0 0 3px rgba(197, 48, 48, 0.5);;
    outline: 0;

}
`};

const Input = styled(TextInput)`
${({ error, theme }) => error && errorFocus(theme)}
`


/**
 * 
 *  when adding leading and trailing content, adjust the padding in the x-axis using tailwind to move
 * the input to fit the content you are adding 
 */
const FieldInput = ({ label, leadingText, tailwind, leadingTailwind, trailingContent, className, error,
    helpText, inputTailWind, cornerHelpText, placeholder, type, leadingIcon, trailingIcon, variant
}) => {

    const isDarkVariant = (variant === 'dark')

    return (


        <div className={`${tailwind} ${className}`}>
            {(label || cornerHelpText) &&
                < div className='w-full flex justify-between mb-2'>
                    <label
                        className={`flex flex-col text-gray-700 text-sm leading-6 font-semibold`}
                    >{label}
                    </label>

                    <Text
                        type='text-small'
                        tailwind='' >{cornerHelpText}</Text>
                </div>
            }
            <div className='flex items-center relative'>
                {leadingIcon &&
                    <Icon
                        color
                        hasBackground={false}
                        tailwind='ml-1 text-gray-500 absolute p-3'
                        src={leadingIcon}
                    />
                }

                <span className={`absolute text-gray-600 sm:text-sm sm:leading-5 ${leadingTailwind}`}>
                    {leadingText}
                </span>

                <Input
                    focus
                    variant={variant}
                    placeholder={placeholder}
                    type={type}
                    error={error}
                    tailwind={`${leadingText && 'pl-0'} ${leadingIcon && 'pl-12'}
                     ${ (trailingIcon || error) && 'pr-10'} w-full
                      ${error ? 'text-red-900 ' +
                            (!isDarkVariant && ' border-red-300 border-px focus:border-red-300') :
                            (!isDarkVariant && 'focus:border-blue-300')} 
                       ${!isDarkVariant && 'focus:shadow-outline'} ${inputTailWind}  `}
                />


                {trailingContent}

                {(trailingIcon || error) &&
                    <Icon
                        color
                        hasBackground={false}
                        tailwind={`p-3 ${error ? 'text-red-600' : 'text-gray-500'} 
                             ml-1 absolute right-0`}
                        src={error ? <WarningSVG /> : trailingIcon}
                    />
                }


            </div>

            {
                helpText &&
                <Text
                    color
                    tailwind={`mt-2 ${error ? 'text-red-600' : 'text-gray-700'} `}
                    type='text-small'>{helpText}</Text>
            }

        </div >
    );
};

FieldInput.defaultProps = {
    error: false,
}
FieldInput.propTypes = {
    leadingIcon: PropTypes.object,
    trailingIcon: PropTypes.object,
    cornerHelpText: PropTypes.string,
    inputTailWind: PropTypes.string,
    helpText: PropTypes.string,
    trailingContent: PropTypes.object,
    leadingTailwind: PropTypes.string,
    leadingText: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    ...textInputPropTypes,
};

export default FieldInput;