import { useLogout } from '@/hooks/auth'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { memo, useState } from 'react'
import type { User } from '../../setup'
import NewPostModal from '../modals/new-post'

interface NavbarProps {
  user: User
  isLoggedIn: boolean
}

export const Navbar = memo(({ user, isLoggedIn }: NavbarProps) => {
  const { execute, loading } = useLogout()
  const [open, setOpen] = useState(false)

  const toggleNewPostModal = () => setOpen((prev) => !prev)

  const handleLogout = async () => {
    await execute()

    location.href = '/'
  }

  return (
    <>
      <NewPostModal open={open} handleClose={toggleNewPostModal} />

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container disableGutters>
            <Toolbar>
              <Typography
                variant="h5"
                component={Button}
                color="inherit"
                href="/"
              >
                Blog
              </Typography>

              <Box sx={{ width: 50 }} />

              <Box flexGrow={1}>
                <Button color="inherit" href="/">
                  HOME
                </Button>
              </Box>

              {isLoggedIn ? (
                <>
                  <Box m="0 10px 0 0">
                    <Typography
                      variant="body1"
                      component="div"
                      paragraph
                      color="inherit"
                      sx={{ marginBottom: 0 }}
                    >
                      Signed in as {user.name.split(' ')[0]}
                    </Typography>
                  </Box>

                  <Box m="0 5px">|</Box>

                  <Box>
                    <Button
                      color="inherit"
                      startIcon={<AddIcon />}
                      onClick={toggleNewPostModal}
                      disabled={loading}
                    >
                      NEW POST
                    </Button>
                  </Box>

                  <Box m="0 5px">|</Box>

                  <Box>
                    <Button
                      color="inherit"
                      onClick={handleLogout}
                      disabled={loading}
                    >
                      LOG OUT
                    </Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box>
                    <Button color="inherit" href="/register">
                      REGISTER
                    </Button>
                  </Box>

                  <Box>
                    <Button color="inherit" href="/login">
                      LOG IN
                    </Button>
                  </Box>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
})

export default Navbar
