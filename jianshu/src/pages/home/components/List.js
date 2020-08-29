import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, IconLeftList, LoadMore }  from '../style';
import { actionCreator } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, loadMore, pageNumber } = this.props;
        return (
            <div>
                {
                list.map((item, index) => (
                    <Link key={index} to={'./detail/'+ item.get('id')}>            
                        <ListItem>
                            <img className='listPic' src={item.get('imgUrl')} alt='图片'/>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='description'>{item.get('description')}</p>
                                <IconLeftList>
                                    <span className="list iconfont">&#xe61e;</span>
                                    <span className="num iconfont">{item.get('dialogue')}</span>
                                    <span className="list iconfont">&#xe60b;</span>
                                    <span className="num iconfont">{item.get('love')}</span>
                                </IconLeftList>
                            </ListInfo>
                        </ListItem>
                    </Link> 
                )
            )}
            <LoadMore onClick={() => {loadMore(pageNumber)}}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','list']),
    pageNumber: state.getIn(['home','pageNumber'])
});

const mapDispatch = (dispatch) => ({
    loadMore(pageNumber) {
        dispatch(actionCreator.loadMoreData(pageNumber))
    }
});

export default connect(mapStateToProps, mapDispatch)(List);