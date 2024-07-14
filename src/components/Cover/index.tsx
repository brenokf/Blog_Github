import LogoPhoto from '../../assets/Logo.svg'
import EffectLeft from '../../assets/effect_left.svg'
import EffectRight from '../../assets/effect_right.svg'
import {
  CoverContainer,
  CircleRight,
  CircleLeft,
  RetangleCenter,
  Logo,
} from './styles'
export const Cover = () => {
  return (
    <CoverContainer>
      <CircleRight />
      <img src={EffectLeft} alt="" />
      <RetangleCenter />
      <Logo src={LogoPhoto} alt="" />
      <CircleLeft />
      <img src={EffectRight} alt="" />
    </CoverContainer>
  )
}
