import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 1200px;
  margin: 40px 288px 200px 288px;
  margin: 0 auto;
`
export const PostContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  gap: 30px;
  padding: 32px;
  color: ${(props) => props.theme['base-text']};
  pre {
    width: 100% !important;
    border-radius: 2px;
  }

  pre div {
    border: none !important;
    box-shadow: none !important;
    background-color: ${(props) => props.theme['base-post']} !important;
    border-radius: 2px;
  }
`
