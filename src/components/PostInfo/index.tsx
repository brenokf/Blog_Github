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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoActions>
        <span>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </span>
        <span>
          Ver Github <FontAwesomeIcon icon={faUpRightFromSquare} />
        </span>
      </PostInfoActions>
      <h1>JavaScript data types and data structures</h1>
      <PostShowProfileStatistics>
        <span>
          <FontAwesomeIcon icon={faGithub} /> cameronwill
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} /> Há 1 dia
        </span>
        <span>
          {' '}
          <FontAwesomeIcon icon={faComment} /> 100 comentários
        </span>
      </PostShowProfileStatistics>
    </PostInfoContainer>
  )
}
