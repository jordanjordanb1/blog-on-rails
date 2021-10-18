import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { memo, useState } from 'react'
import NewPostModal from '../modals/new-post'

interface NavbarProps {}

export const Navbar = memo(({}: NavbarProps) => {
  const [open, setOpen] = useState(false)

  const toggleNewPostModal = () => setOpen((prev) => !prev)

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

              <Box>
                <Button
                  color="inherit"
                  startIcon={<AddIcon />}
                  onClick={toggleNewPostModal}
                >
                  NEW POST
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
})

export default Navbar
