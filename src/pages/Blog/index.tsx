import axios from 'axios'
import { Profile } from '../../components/Profile'
import { PublishSearch } from '../../components/PublishSearch'
import {
  BlogContainer,
  CardPostContainer,
  CardPostContent,
  CardPostTitle,
} from './styles'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'
import { GithubBlogContext } from '../../context/GithubBlogContext'

export function Blog() {
  const { posts, handleFindPost } = useContext(GithubBlogContext)
  console.log(posts)
  return (
    <div>
      <BlogContainer>
        <Profile />
        <PublishSearch />
        {posts.map((post) => {
          return (
            <CardPostContainer
              key={post.id}
              onClick={() => {
                handleFindPost(post)
              }}
            >
              <Link to="/post" key={post.id}>
                <CardPostContent>
                  <CardPostTitle>
                    <h1>{post.title}</h1>
                    <span>
                      {formatDistanceToNow(new Date(post.updated_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </CardPostTitle>
                  <ReactMarkdown
                    components={{
                      code(props) {
                        const { children, className, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                          <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            style={dark}
                            customStyle={{
                              width: '100%',
                              overflowWrap:
                                'break-word' /* Garante que o texto se quebre corretamente */,
                              wordWrap: 'break-word',
                              boxSizing: 'border-box',
                            }}
                            {...rest}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...rest}>
                            {children}
                          </code>
                        )
                      },
                    }}
                  >
                    {post.body}
                  </ReactMarkdown>
                </CardPostContent>
              </Link>
            </CardPostContainer>
          )
        })}
      </BlogContainer>
    </div>
  )
}
