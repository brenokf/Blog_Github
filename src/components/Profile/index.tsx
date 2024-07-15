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
import { useContext } from 'react'
import { GithubBlogContext } from '../../context/GithubBlogContext'

export const Profile = () => {
  const { user } = useContext(GithubBlogContext)

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <ProfileInfo>
        <ProfileInfoTitle>
          <h1>{user?.name}</h1>
          <div>
            <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
            </a>
          </div>
        </ProfileInfoTitle>
        <p>{user?.bio}</p>
        <ProfileInfoIndications>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" /> {user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} size="lg" /> {user?.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} size="lg" /> {user?.followers}{' '}
            seguidores
          </span>
        </ProfileInfoIndications>
      </ProfileInfo>
    </ProfileContainer>
  )
}
