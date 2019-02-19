/**
 *
 * ListVedios
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectlistVedios from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Alert, Button } from 'reactstrap';
import matchSorter from 'match-sorter'

import { getDataAction } from "./actions";
import makeSelectListVedios from "./selectors";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";



/* eslint-disable react/prefer-stateless-function */
export class ListVedios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // we are fetching videos listfrom backend api by callling the action
    this.props.getDataAction();
  }

  renderTable = () => {
    const { vedios_list } = this.props.listVedios;
    // console.log(vedios_list);
    return <ReactTable
      data={vedios_list}
      filterable
      columns={[
     
        {
          columns: [
            {
              Header: "Date",
              accessor: "date",
              filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["date"] }),
                  filterAll: true
            },
            
            {
              Header: "USD/CAD",
              accessor: "rates.CAD",
            },
            
            {
              Header: "USD/AUD",
              accessor: "rates.AUD",
            },
            {
              Header: "USD/EUR",
              accessor: "rates.EUR",
            },
            {
              Header: "USD/GBP",
              accessor: "rates.GBP",
            },

          ]
        }
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />

  }


  render() {
    return (
      <div>
        <Alert color="secondary">
          <span>
            Last updated at: {(this.props.recent_data && this.props.recent_data.date) ? this.props.recent_data.date : this.state.current_date}
          </span>
          <span style={{position:'absolute', right:'40px'}}>
          Current USD/CAD rate is {(this.props.recent_data && this.props.recent_data.rates)? this.props.recent_data.rates.CAD : '' }
          </span>
        </Alert>
        <Button color="primary" onClick={this.handleRefresh} >Refresh</Button>

        {this.renderTable()}

      </div>
    );
  }
}

ListVedios.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listVedios: makeSelectListVedios(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getDataAction: () => dispatch(getDataAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'listVedios', reducer });
const withSaga = injectSaga({ key: 'listVedios', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ListVedios);
