import React from 'react'
import { useDelete } from '../use-delete'

export function useDeletePost(id: string) {
  const values = useDelete(`/api/v1/posts/${id}`)

  return values
}

export default useDeletePost
