import styled from 'styled-components';

export const ButtonContainerStyling = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DeleteButton = styled.button`
  -webkit-appearance: button;
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
  display: inline-block;
  padding: 6px 12px;
  margin: 0 0 0 3px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
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

  &:active:hover,
  &:active {
    color: #fff;
    background-color: #ac2925;
    border-color: #761c19;
  }

  &:focus,
  &:active:focus {
    outline: 0;
  }
`;

export const EditButton = styled.button`
  -webkit-appearance: button;
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  display: inline-block;
  padding: 6px 12px;
  margin: 0 3px 0 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
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

  &:active:hover,
  &:active {
    color: #fff;
    background-color: #398439;
    border-color: #255625;
  }
  &:focus,
  &:active:focus {
    outline: 0;
  }
`;
