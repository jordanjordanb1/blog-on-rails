import { useCreatePost } from '@/hooks/posts'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import React, {
  ChangeEventHandler,
  Children,
  memo,
  useMemo,
  useState,
} from 'react'

interface NewPostModalProps {
  open: boolean
  handleClose(): void
}

const NewPostModal = memo<NewPostModalProps>(({ open, handleClose }) => {
  const { execute, loading, error } = useCreatePost<
    { title: string; body: string },
    { message: string }
  >()
  const [post, setPost] = useState({
    title: '',
    body: '',
  })
  const [errors, setErrors] = useState({
    title: '',
    body: '',
  })

  const apiErrors = useMemo(() => {
    const errorMessage = error?.response?.data?.message.split(', ')

    if (!!errorMessage?.length) {
      return Children.toArray(
        errorMessage.map((message) => <Alert severity="error">{message}</Alert>)
      )
    }

    return
  }, [error])

  const updatePostValues: ChangeEventHandler<HTMLInputElement> = (e) => {
    const field = e.target.name
    const value = e.target.value

    setPost((prev) => ({
      ...prev,
      [`${field}`]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [`${field}`]: !value ? `Post ${field} cannot be blank` : '',
    }))
  }

  const handleSubmit = async () => {
    if (!errors.title && !errors.body) {
      await execute(post)

      location.reload()
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen
      TransitionComponent={Slide}
    >
      <DialogTitle>Create Post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill in the required information to create a new post.
        </DialogContentText>

        <br />

        <Stack spacing={1}>{apiErrors}</Stack>

        <br />

        <TextField
          autoFocus
          margin="dense"
          id="title"
          name="title"
          label="Post Title"
          type="text"
          fullWidth
          variant="outlined"
          onChange={updatePostValues}
          value={post.title}
          disabled={loading}
          error={!!errors.title}
          helperText={errors.title}
        />

        <TextField
          margin="dense"
          id="body"
          name="body"
          label="Post Body"
          fullWidth
          variant="outlined"
          multiline
          rows={10}
          onChange={updatePostValues}
          value={post.body}
          disabled={loading}
          error={!!errors.body}
          helperText={errors.body}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="warning" disabled={loading}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="success"
          disabled={
            loading ||
            !post.body ||
            !post.title ||
            !!errors.body ||
            !!errors.title
          }
        >
          Post
        </Button>
      </DialogActions>
    </Dialog>
  )
})

export default NewPostModal
