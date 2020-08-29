import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfor, SearchInforTitle, SearchInforSwitch, SearchInforItem } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { actionCreator as loginActionCreator } from '../../pages/login/store';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const { focus, list, login, handleFocus, handleUnFocus, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? <NavItem className='right' onClick={logout}>退出</NavItem> : <Link to='/login'><NavItem className='right'>登陆</NavItem></Link>
                    }
                    <NavItem className='right'><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focus} 
                            timeout={200} 
                            classNames="slide"
                        >
                            <NavSearch 
                                placeholder='搜索' 
                                className={focus ? 'focused' : ''}
                                onFocus={() => {handleFocus(list)}}
                                onBlur={handleUnFocus}
                                >
                            </NavSearch>
                        </CSSTransition>
                        <span className={focus ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe610;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='write'>
                            <span className="iconfont">&#xe708;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    getListArea() {
        const { focus, list, page, totalPage, mouseIn, handleMouseIn, handleMouseOut, handleClick } = this.props
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++ ) {
                if (i <= newList.length - 1) {
                    pageList.push(
                        <SearchInforItem key={newList[i]}>{newList[i]}</SearchInforItem>
                    )
                }
            }
        }

        if (focus || mouseIn) {
            return (
                <SearchInfor onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                    <SearchInforTitle>
                        热门搜索
                        <SearchInforSwitch onClick={() => {handleClick(page, totalPage, this.spinIcon)}}>
                            <span ref={(icon) => {this.spinIcon=icon}} className="iconfont spin">&#xe851;</span>换一批</SearchInforSwitch>
                    </SearchInforTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfor>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focus: state.get('header').get('focus'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        mouseIn: state.get('header').get('mouseIn'),
        login: state.get('login').get('login')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreator.getList());
            }
            dispatch(actionCreator.changeFocus())
        },
        handleUnFocus() {
            dispatch(actionCreator.changeUnFocus())
        },
        handleMouseIn() {
            dispatch(actionCreator.changeMouseIn())
        },
        handleMouseOut() {
            dispatch(actionCreator.changeMouseOut())
        },
        handleClick(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
            
            if (page < totalPage) {
                dispatch(actionCreator.changePage(page+1))
            } else {
                dispatch(actionCreator.changePage(1))
            } 
        },
        logout() {
            dispatch(loginActionCreator.dataLogout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);