import Post from '@/components/post'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React, { Children, useMemo } from 'react'
import type { DefaultProps, User } from '../setup'

interface IndexProps extends DefaultProps {
  posts?: {
    id: string
    title: string
    body: string
    user: User
    user_id: string
    created_at: string
    updated_at: string
  }[]
}

export function Index({ posts = [], user, isLoggedIn }: IndexProps) {
  const postsList = useMemo(
    () =>
      !!posts?.length &&
      Children.toArray(
        posts.map((post) => (
          <Grid item xs={12}>
            <Post post={post} user={user} isLoggedIn={isLoggedIn} />
          </Grid>
        ))
      ),
    [posts]
  )

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Posts
      </Typography>

      <Divider sx={{ marginBottom: 4 }} />

      <Grid container rowSpacing={2}>
        {!!posts?.length ? (
          postsList
        ) : (
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              NO POSTS
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default Index
