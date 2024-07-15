import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  width: 100%;
  /* topo | direita | inferior | esquerda */
  margin: 40px 0 16px 0;

  button {
    display: none;
  }
`
export const SearchFormContainerContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }
  span {
    font-size: 14px;
    color: ${(props) => props.theme['base-span']};
  }
`
export const SearchFormInput = styled.input`
  width: 100%;
  flex: 1;
  border: 0;
  height: 50px;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  margin-top: 12px;
  padding: 1rem;
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.blue};
    transition: border 0.2s;
  }
  &:active {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
