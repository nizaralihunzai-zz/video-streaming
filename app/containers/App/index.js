/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListVideos from 'containers/ListVideos/Loadable';
import VideoDetail from 'containers/VideoDetail/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Navbar from 'components/Navbar';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListVideos} />
        <Route path="/video-detail" component={VideoDetail} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
