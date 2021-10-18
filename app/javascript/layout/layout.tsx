import Navbar from '@/components/navbar'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import React, { memo } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      <StyledContainer>{children}</StyledContainer>
    </>
  )
})

const StyledContainer = styled(Container)({
  paddingTop: 20,
  paddingBottom: 20,
})

export default Layout
