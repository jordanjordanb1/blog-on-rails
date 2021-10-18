import React from 'react'
import { usePatch } from '../use-patch'

export function useUpdatePost<T, E>(id: string) {
  const values = usePatch<T, E>(`/api/v1/posts/${id}`)

  return values
}

export default useUpdatePost
