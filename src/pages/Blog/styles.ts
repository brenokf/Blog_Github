import styled from 'styled-components'

export const BlogContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  gap: 32px;
  /* topo | direita | inferior | esquerda */
  margin: 40px 288px 200px 288px;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-bottom: 200px;
  /* padding: 0 1.5rem; */
`
export const CardPostContainer = styled.div`
  display: flex;
  pointer-events: all;
  cursor: pointer;
  flex-direction: column;
  width: 48.5%;
  height: 260px;
  border-radius: 10px;
  padding: 40px;
  gap: 20px;
  background-color: ${(props) => props.theme['base-post']};

  &:hover {
    transition:
      border 0.2s,
      color 0.2s;
    border: 2px solid ${(props) => props.theme['base-label']};
  }
  color: ${(props) => props.theme['base-span']};
  p {
    font-size: 16px;
    color: ${(props) => props.theme['base-span']};
  }
`
export const CardPostTitle = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-between;

  h1 {
    width: 283px;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    font-size: 14px;
    padding-top: 3px;
    color: ${(props) => props.theme['base-span']};
  }
`
