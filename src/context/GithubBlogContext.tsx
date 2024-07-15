import axios from 'axios'
import React, { createContext, useEffect, useState, useCallback } from 'react'

interface BlogProps {
  searchText: string
  username: string
  repo: string
}

interface Post {
  id?: number
  title: string
  updated_at: string
  body: string
  html_url: string
  total_count: number
  comments?: string
}

interface User {
  name: string
  bio: string
  avatar_url: string
  followers: number
  company: string
  login: string
  html_url: string
}
interface GithubBlogContextType {
  user: User
  posts: Post[]
  postSelected: Post
  handleSubmitFindUserByGithub: (username: string) => Promise<void>
  handleFindAllPostsByText: (props: BlogProps) => Promise<void>
  handleFindPost: (post: Post) => void
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

interface GithubBlogProviderProps {
  children: React.ReactNode
}

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState<Post[]>([])
  const handleSubmitFindUserByGithub = useCallback(async (username: string) => {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    setUser(response.data)
  }, [])
  const handleFindAllPostsByText = useCallback(
    async ({ searchText, username, repo }: BlogProps) => {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${searchText}%20repo:${username}/${repo}`,
      )
      const data = response.data
      setPosts(data.items)
    },
    [],
  )
  const [postSelected, setPostSelected] = useState({} as Post)
  const handleFindPost = (post: Post) => {
    setPostSelected(post)
  }
  useEffect(() => {
    handleSubmitFindUserByGithub('brenokf')
  }, [handleSubmitFindUserByGithub])

  return (
    <GithubBlogContext.Provider
      value={{
        user,
        posts,
        postSelected,
        handleSubmitFindUserByGithub,
        handleFindAllPostsByText,
        handleFindPost,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  )
}
