import { useContext, useEffect } from 'react'
import {
  SearchFormContainer,
  SearchFormContainerContent,
  SearchFormInput,
} from './styles'
import { GithubBlogContext } from '../../context/GithubBlogContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z
    .string()
    .regex(
      /^[A-Za-zÀ-ÿ\s]+$/,
      'A Busca Deve ter Apenas Palavras e espaços, o Github não aceita busca por caracteres ',
    ),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>
export const PublishSearch = () => {
  const { posts, handleFindAllPostsByText } = useContext(GithubBlogContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSubmitFindByQuery(data: SearchFormInputs) {
    await handleFindAllPostsByText({
      searchText: `${data.query}`,
      username: 'brenokf',
      repo: 'Blog_Github',
    })
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitFindByQuery)}>
      <SearchFormContainerContent>
        <p>Publicações</p>
        <span>{posts.length} publicações</span>
      </SearchFormContainerContent>
      <SearchFormInput
        type="text"
        placeholder="Buscar Conteúdo"
        {...register('query')}
      />
      {errors.query && <p>{errors.query.message}</p>}
      <button type="submit">Buscar</button>
    </SearchFormContainer>
  )
}
