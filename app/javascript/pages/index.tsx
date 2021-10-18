import Post from '@/components/post'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React, { Children, useMemo } from 'react'

interface IndexProps {
  posts?: {
    id: string
    title: string
    body: string
    created_at: string
    updated_at: string
  }[]
}

export function Index({ posts = [] }: IndexProps) {
  const postsList = useMemo(
    () =>
      !!posts?.length &&
      Children.toArray(
        posts.map((post) => (
          <Grid item xs={12}>
            <Post {...post} />
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
