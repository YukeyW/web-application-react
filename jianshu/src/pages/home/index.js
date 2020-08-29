import React, { PureComponent } from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, ToTop } from './style';
import { actionCreator } from './store';
import { connect } from 'react-redux';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5000/73fb106b57565c1d79d1a4fb359d77d716aef438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"></img>
                    <Topic></Topic>
                    <List></List> 
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll ? <ToTop onClick={this.scrollUp}>置顶</ToTop>: null
                }
                
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.addData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    scrollUp() {
        window.scrollTo(0,0);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    addData() {
        dispatch(actionCreator.dispatchData())
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreator.changeScroll(true))
        } else {
            dispatch(actionCreator.changeScroll(false))
        }
    }
});

export default connect(mapState, mapDispatch)(Home);