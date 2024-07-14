import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PostInfo } from '../../components/PostInfo'
import { PostContainer, PostContent } from './styles'

const markdownText = `
## Exemplo de Código

Aqui está um exemplo de código JavaScript com 5 linhas que define e utiliza uma função de multiplicação:

~~~javascript
// Função que retorna o produto de dois números
function multiplica(a, b) {
    return a * b;
}

console.log(multiplica(4, 5)); // Saída: 20
~~~
`

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <PostContent>
        <ReactMarkdown
          children={markdownText}
          components={{
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag="div"
                  style={dark}
                  {...rest}
                />
              ) : (
                <code className={className} {...rest}>
                  {children}
                </code>
              )
            },
          }}
        />
      </PostContent>
    </PostContainer>
  )
}
