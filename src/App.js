import React from 'react'

import { Grid } from '@material-ui/core'

import { SearchBar, VideoList, VideoDetail } from './components'

import youtube from './api/youtube'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('THE SURGEONS - Twyse & Klinton')
  }

  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDZ1UeLa4kILKY7azNIvs21xaqHLjM29tQ'
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const { selectedVideo, videos } = this.state
    return (
      <Grid style={{ justifyContent: 'center' }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* This is where SearchBar component will go */}
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* This is where VideoDetail component will go */}
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* This is where VideoList component will go */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App
