import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Label = styled.label`
font-size: var(--small-size);
color: var(--snow-color);
margin: 0;
`;

const Input = styled.input`
font-family: 'Roboto';
font-weight: bold;
font-size: var(--xlarge-size);
width: 100%;
background: transparent;
color: var(--nobel-color);
padding: .3rem 0;
border: none;
border-bottom: 1px var(--nobel-color) solid;
transition: all .1s linear;

&:focus {
  outline: none;
  border-bottom-color: var(--snow-color);
}
`;

const SearchInput = ({ label, placeholder, value, onChange }) => (
  <Container>
    <Label>{label}</Label>
    <Input
      placeholder={placeholder}
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </Container>
);

export default SearchInput;
