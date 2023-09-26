import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getListCategories } from '../../../services/category.service';
import { getNewRelease } from '../../../services/album.service';
import { getFeaturedPlaylist } from '../../../services/playlist.service';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };

    this.getCategories = this.getCategories.bind(this);
    this.getReleases = this.getReleases.bind(this);
    this.getPlaylists = this.getPlaylists.bind(this);
  }

  componentDidMount() {
    void this.getCategories();
    void this.getReleases();
    void this.getPlaylists();
  }

  getCategories = async () => {
    this.setState({
      categories: await getListCategories(),
    });
  };

  getReleases = async () => {
    this.setState({
      newReleases: await getNewRelease(),
    });
  };

  getPlaylists = async () => {
    this.setState({
      playlists: await getFeaturedPlaylist(),
    });
  };

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
