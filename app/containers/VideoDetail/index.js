/**
 *
 * VideoDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ReactHLS from 'react-hls';

/* eslint-disable react/prefer-stateless-function */
export class VideoDetail extends React.Component {
 
  constructor(props){
    super(props);
    this.state={
      url:null,
      title:null,
      description:null,
    }
  }

  componentDidMount(){
    if(this.props.location && this.props.location.state){
      const {state} = this.props.location;
      this.setState(state);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description} />
        </Helmet>
          
          <Link to="/" > 
            Go Back
          </Link> 
          <hr/>
          <ReactHLS 
            url={this.state.url}  
            height={450}
            width={650}
          />
          <br />
          <h3> {this.state.title} </h3>
          <p> {this.state.description} </p>

      </div>
    );
  }
}

VideoDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default VideoDetail;
