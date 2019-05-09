import styled from 'styled-components';

export const ButtonStyling = styled.button`
  display: inline-block;
  outline: none;
  padding: 6px 12px;
  color: #fff;
  font-family: 'Architects Daughter';
  background-color: #337ab7;
  border-color: #2e6da4;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    color: #fff;
    background-color: #286090;
    border-color: #204d74;
  }

  &::active:focus {
    color: #fff;
    background-color: #286090;
    border-color: #122b40;
  }
`;
