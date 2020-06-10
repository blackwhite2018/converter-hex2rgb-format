import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FormConvert.css';

const FormConvert = ({ rgbColor, setBackgroundColor }) => {
    const [hexColor, setHexColor] = useState('#9921ff');

    const convertHexTwoRgbColor = hex => {
        const rgbArray = [];
        hex.replace(/[0-9a-f]{2,2}/gi, letter => {
            rgbArray.push(parseInt(+`0x${letter}`, 10))
        });
        return `rgb(${rgbArray.join(', ')})`;
    };

    const handleChange = ({ target: { value } }) => {
        if (value.length === 4 || value.length === 7) {
            if (/^#[0-9a-f]{3,3}$/i.test(value)) {
                setBackgroundColor(convertHexTwoRgbColor(value.replace(/([0-9a-f])/gi, '$1$1')));
            } else if (/^#[0-9a-f]{6,6}$/i.test(value)) {
                setBackgroundColor(convertHexTwoRgbColor(value));
            } else {
                setBackgroundColor('Ошибка!');
            }
        }
        setHexColor(value);
    };

    return (
        <form className="form">
            <input
                className="form__input"
                onChange={handleChange}
                value={hexColor}
            />
            <p className="form__text" style={{ backgroundColor: hexColor }}>{rgbColor}</p>
        </form>
    );
};

FormConvert.propTypes = {
    props: PropTypes.shape({
        rgbColor: PropTypes.string.isRequired,
        convertHexTwoRgbColor: PropTypes.func.isRequired
    })
};

export default FormConvert;

