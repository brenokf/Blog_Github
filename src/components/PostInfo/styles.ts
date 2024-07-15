import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: 168px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  gap: 10px;
  /* margin: 40px 288px 200px 288px;
  margin: 0 auto; */
  margin-top: -5rem;
  flex: 1;
  padding: 32px;
  h1 {
    font-size: 24px;
    color: ${(props) => props.theme['base-title']};
  }
`
export const PostInfoActions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  pointer-events: all;
  cursor: pointer;
  a {
    font-size: 14px;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    &:hover {
      transition: 0.1s;
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`
export const PostShowProfileStatistics = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  span {
    padding-right: 32px;
    color: ${(props) => props.theme['base-subtitle']};
  }
  svg {
    padding-right: 3px;
    color: ${(props) => props.theme['base-label']};
  }
`
