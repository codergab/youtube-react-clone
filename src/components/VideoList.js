import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import VideoItem from './VideoItem'

export default function VideoList({ videos, onVideoSelect }) {
  const videosList = videos.map((video, i) => (
    <VideoItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
  ))

  return (
    <Grid container spacing={10}>
      {videosList}
    </Grid>
  )
}
