import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
export default function VideoItem({ video, onVideoSelect }) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper
          onClick={() => onVideoSelect(video)}
          elevation={3}
          style={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }}
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            style={{ marginRight: '20px' }}
            alt="thumbnail"
          />
          <Typography variant="subtitle2">
            <b>{video.snippet.title}</b>
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}
