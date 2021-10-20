import { useDelete } from '..'

export function useLogout() {
  const props = useDelete('/auth/logout')

  return props
}

export default useLogout
