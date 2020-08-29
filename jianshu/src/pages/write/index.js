import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends Component {
    render() {
        if (this.props.login) {
            return (
                <div>写文章</div>
            )
        } else {
            return <Redirect to='/login'/>
        }
    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login'])
});

export default connect(mapStateToProps, null)(Write);