import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  height: 212px;
  width: 100%;
  margin-top: -5rem;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  gap: 20px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  img {
    width: 148px;
    height: 148px;
    border-radius: 10px;
    object-fit: cover;
  }
  p {
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const ProfileInfo = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`
export const ProfileInfoTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    pointer-events: all;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.blue};
  }
  span:hover {
    transition: 0.1s;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
  svg {
    margin-left: 0.5rem;
    color: ${(props) => props.theme.blue};
  }
`
export const ProfileInfoIndications = styled.div`
  display: flex;
  align-items: left;
  flex-direction: row;
  gap: 24px;
  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
  svg {
    margin-right: 0.3rem;
    color: ${(props) => props.theme['base-label']};
  }
`
