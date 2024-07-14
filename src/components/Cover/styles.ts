import styled from 'styled-components'

export const CoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 296px;
  width: 100%;
  top: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-size: cover;
`
export const Logo = styled.img`
  margin-top: -5rem;
`
export const CircleRight = styled.div`
  position: absolute;
  width: 236px;
  height: 236px;
  top: -96px;
  left: -130px;
  background: #14589c;
  z-index: -1;
  border-radius: 50%;
  -webkit-filter: blur(400px);
`

export const RetangleCenter = styled.div`
  position: absolute;
  width: 891px;
  height: 52px;
  top: 235px;
  left: 24.5%;
  background: #14589c;
  z-index: -1;
  -webkit-filter: blur(212px);
`

export const CircleLeft = styled.div`
  position: absolute;
  width: 155.25px;
  height: 155.25px;
  top: -52.14px;
  left: 90.5%;
  border-radius: 50%;
  rotate: -15deg;
  background: #14589c;
  z-index: -1;
  -webkit-filter: blur(368px);
`
