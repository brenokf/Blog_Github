import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog/index'
import { Post } from './pages/Post/index'
import { DefaultLayout } from './layout/DefaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
