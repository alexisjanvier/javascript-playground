import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.label`
    display: flex,
    flex-direction: column,
    position: relative,
    margin-bottom: 1rem,
    `;

const Label = styled.label`
    position: absolute,
    left: 0,
    top: 0.5rem,
    cursor: text,
    font-size: 75%,
    opacity: 1,
    transition: all .2s,
`;

export const TextField = ({ label, name, id, placeholder = '', ...props }) => {
    const finalId = id || name;

    return (
        <Container>
            <input
                id={finalId}
                name={name}
                placeholder={placeholder}
                {...props}
            />
            <Label htmlFor={finalId}>{label}</Label>
        </Container>
    );
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
};
