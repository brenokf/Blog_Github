import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PostInfo } from '../../components/PostInfo'
import { PostContainer, PostContent } from './styles'
import { useContext } from 'react'
import { GithubBlogContext } from '../../context/GithubBlogContext'
export function Post() {
  const { postSelected } = useContext(GithubBlogContext)
  return (
    <PostContainer>
      <PostInfo />
      <PostContent>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  style={dark}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {postSelected.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
