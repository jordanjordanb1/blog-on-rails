import Navbar from '@/components/navbar'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import React, { memo } from 'react'
import type { User } from '../setup'

interface LayoutProps {
  user: User
  isLoggedIn: boolean
  children: React.ReactNode
}

export const Layout = memo(({ children, user, isLoggedIn }: LayoutProps) => {
  return (
    <>
      <Navbar user={user} isLoggedIn={isLoggedIn} />

      <StyledContainer>{children}</StyledContainer>
    </>
  )
})

const StyledContainer = styled(Container)({
  paddingTop: 20,
  paddingBottom: 20,
})

export default Layout
