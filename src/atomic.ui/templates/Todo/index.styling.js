import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyling = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Architects+Daughter');  
  background-color: #0f0802;
  background-image: url(https://www.transparenttextures.com/patterns/leather.png);
  margin: 0;
`;

export const TemplateStyling = styled.div`
  font-family: 'Architects Daughter';
  position: relative;
  margin: 0 10%;
  width: 80%;
  height: 100%;
  background-color: #c9c920;
  background-image: url(https://www.transparenttextures.com/patterns/notebook.png);
`;

export const ContainerStyling = styled.div`
  position: relative;
  width: 100%;
  padding-top: 20px;
`;
