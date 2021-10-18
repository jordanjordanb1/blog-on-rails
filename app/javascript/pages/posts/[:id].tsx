import EditPostModal from '@/components/modals/edit-post'
import { useDeletePost } from '@/hooks/posts'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { red } from '@mui/material/colors'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React, { MouseEventHandler, useState } from 'react'

interface ViewPostByIdProps {
  post: {
    id: string
    title: string
    body: string
    created_at: string
    updated_at: string
  }
}

export function ViewPostById({ post }: ViewPostByIdProps) {
  const [open, setOpen] = useState(false)
  const { execute, loading } = useDeletePost(post.id)
  const created = new Date(post.created_at)
  const updated = new Date(post.updated_at)
  const createdDate = created.toLocaleDateString()
  const createdTime = created.toLocaleTimeString()
  const updatedDate = updated.toLocaleDateString()
  const updatedTime = updated.toLocaleTimeString()

  const handleDelete: MouseEventHandler = async (e) => {
    e.preventDefault()

    try {
      await execute()

      location.href = '/'
    } catch (e) {
      alert('An error occured while deleting post')
    }
  }

  const toggleModal = () => setOpen((prev) => !prev)

  return (
    <>
      <EditPostModal
        open={open}
        handleClose={toggleModal}
        post={{ id: post.id, title: post.title, body: post.body }}
      />

      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1">
            {post?.title}
          </Typography>

          <Typography variant="subtitle2" fontStyle="italic">
            Posted: {createdDate} @ {createdTime}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" paragraph>
            {post?.body}
          </Typography>
        </Grid>

        <Grid container item xs={12} alignItems="center">
          <Grid item xs={12} md={true}>
            <Typography variant="subtitle2" fontStyle="italic">
              Updated: {updatedDate} @ {updatedTime}
            </Typography>
          </Grid>

          <Grid item xs={12} md="auto">
            <IconButton onClick={toggleModal}>
              <EditIcon />
            </IconButton>

            <StyledIconButton onClick={handleDelete} disabled={loading}>
              <DeleteIcon />
            </StyledIconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    color: red[500],
  },
}))

export default ViewPostById
