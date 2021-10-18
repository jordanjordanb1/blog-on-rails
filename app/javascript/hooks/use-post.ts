import Axios from '@axios'
import type { AxiosError, AxiosRequestConfig } from 'axios'
import React, { useState } from 'react'

export function usePost<T, E>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<AxiosError<E, E>>()
  const [loading, setLoading] = useState(false)

  const execute = async (values: T) => {
    setLoading(true)

    try {
      const { data } = await Axios.post<T>(url, values, options)

      setData(data)
    } catch (error) {
      setError(error as AxiosError<E, E>)

      throw error
    } finally {
      setLoading(false)
    }
  }

  return {
    execute,
    data,
    error,
    loading,
  }
}

export default usePost
