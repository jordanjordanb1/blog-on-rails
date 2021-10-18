import React from 'react'
import { usePost } from '../use-post'

export function useCreatePost<T, E>() {
  const values = usePost<T, E>(`/api/v1/posts`)

  return values
}

export default useCreatePost
