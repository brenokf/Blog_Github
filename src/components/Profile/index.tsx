import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import {
  ProfileContainer,
  ProfileInfo,
  ProfileInfoIndications,
  ProfileInfoTitle,
} from './styles'

export const Profile = () => {
  return (
    <ProfileContainer>
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20230614/pngtree-young-man-in-sunglasses-is-wearing-neon-colors-image_2931162.jpg"
        alt=""
      />
      <ProfileInfo>
        <ProfileInfoTitle>
          <h1>Albert Thonpson</h1>
          <div>
            <span>
              GITHUB
              <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
            </span>
          </div>
        </ProfileInfoTitle>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileInfoIndications>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" /> cameronwl
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} size="lg" /> Rockseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} size="lg" /> 32 seguidores
          </span>
        </ProfileInfoIndications>
      </ProfileInfo>
    </ProfileContainer>
  )
}
