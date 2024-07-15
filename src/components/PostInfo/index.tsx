import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUpRightFromSquare,
  faCalendarDay,
  faComment,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PostInfoActions,
  PostInfoContainer,
  PostShowProfileStatistics,
} from './styles'
import { Link } from 'react-router-dom'
import { GithubBlogContext } from '../../context/GithubBlogContext'
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PostInfo() {
  const { user, postSelected } = useContext(GithubBlogContext)
  return (
    <PostInfoContainer>
      <PostInfoActions>
        <a>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
        </a>
        <a
          href={postSelected.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Github <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </PostInfoActions>
      <h1>{postSelected.title}</h1>
      <PostShowProfileStatistics>
        <span>
          <FontAwesomeIcon icon={faGithub} /> {user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />{' '}
          {formatDistanceToNow(new Date(postSelected.updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <span>
          {' '}
          <FontAwesomeIcon icon={faComment} /> {postSelected.comments}{' '}
          comentários
        </span>
      </PostShowProfileStatistics>
    </PostInfoContainer>
  )
}
