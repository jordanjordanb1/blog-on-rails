import Axios from '@axios'
import type { AxiosError, AxiosRequestConfig } from 'axios'
import React, { useState } from 'react'

export function useDelete<T>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(false)

  const execute = async () => {
    setLoading(true)

    try {
      const { data } = await Axios.delete<T>(url, options)

      setData(data)
    } catch (error) {
      setError(error as AxiosError)
    }

    setLoading(false)
  }

  return {
    execute,
    data,
    error,
    loading,
  }
}

export default useDelete
