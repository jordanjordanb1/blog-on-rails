import { useDeletePost } from '@/hooks/posts'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { red } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React, { memo, MouseEventHandler, useMemo, useState } from 'react'
import EditPostModal from '../modals/edit-post'

interface PostProps {
  id: string
  title: string
  body: string
  created_at: string
  updated_at: string
}

export const Post = memo(({ id, title, body, created_at }: PostProps) => {
  const [open, setOpen] = useState(false)
  const { execute, loading } = useDeletePost(id)
  const link = `/posts/${id}`
  const created = new Date(created_at)
  const createdDate = created.toLocaleDateString()
  const createdTime = created.toLocaleTimeString()

  const truncatedBody = useMemo(
    () => (body?.length > 200 ? `${body.slice(0, 200)}...` : body),
    [body]
  )

  const handleDelete: MouseEventHandler = async (e) => {
    e.preventDefault()

    try {
      await execute()

      location.href = '/'
    } catch (e) {
      alert('An error occured while deleting post')
    }
  }

  const toggleModal: MouseEventHandler = (e) => {
    e.preventDefault()

    setOpen((prev) => !prev)
  }

  return (
    <>
      <EditPostModal
        open={open}
        handleClose={toggleModal}
        post={{ id, title, body }}
      />

      <Button fullWidth href={link} disableTouchRipple>
        <Card elevation={2} sx={{ width: '100%' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography gutterBottom variant="body1" color="text.secondary">
              {truncatedBody}
            </Typography>

            <Typography variant="overline" fontStyle="italic">
              Posted: {createdDate} @ {createdTime}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={link}>
              VIEW POST
            </Button>

            <Box flexGrow={1} />

            <IconButton onClick={toggleModal}>
              <EditIcon />
            </IconButton>

            <StyledIconButton onClick={handleDelete} disabled={loading}>
              <DeleteIcon />
            </StyledIconButton>
          </CardActions>
        </Card>
      </Button>
    </>
  )
})

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    color: red[500],
  },
}))

export default Post
