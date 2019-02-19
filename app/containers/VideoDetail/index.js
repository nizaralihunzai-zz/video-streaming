/**
 *
 * VideoDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVideoDetail from './selectors';
import reducer from './reducer';
  import saga from './saga';
import messages from './messages';
// import ReactPlayer from 'react-player';
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
      this.setState(state, ()=>{
        // console.log(this.state);
      } );
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.title}</title>
          <meta name="description" content={this.state.description} />
        </Helmet>

           <Link to="/" /> 

          <ReactHLS url={this.state.url}  />
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

const mapStateToProps = createStructuredSelector({
  videoDetail: makeSelectVideoDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoDetail', reducer });
const withSaga = injectSaga({ key: 'videoDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoDetail);
