import {
  SearchFormContainer,
  SearchFormContainerContent,
  SearchFormInput,
} from './styles'

export const PublishSearch = () => {
  return (
    <SearchFormContainer>
      <SearchFormContainerContent>
        <p>Publicações</p>
        <span>6 publicações</span>
      </SearchFormContainerContent>
      <SearchFormInput type="text" placeholder="Buscar Conteúdo" />
    </SearchFormContainer>
  )
}
