import React, { PureComponent } from 'react';
import { DetailWrapper, Header } from './style';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { withRouter } from 'react-router-dom';

class Detail extends PureComponent {
    render() {
        const { title, description } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <div dangerouslySetInnerHTML={{__html:description}} />
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDate(this.props.match.params.id);
    }
}

const mapDispatch = (dispatch) => ({
    getDate(id) {
        dispatch(actionCreator.initData(id))
    }
});

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    description: state.getIn(['detail', 'content'])
});

export default connect(mapStateToProps, mapDispatch)(withRouter(Detail));