import React, { PureComponent } from 'react';
import  { WriteWrapper, WriteTitile, WriteSwitch, WriteItem, Sentence } from '../style';
import { connect } from 'react-redux';

class Write extends PureComponent {
    render() {
        const {list} = this.props;
        return (
            <WriteWrapper>
                <WriteTitile> 
                    推荐作者
                    <WriteSwitch>
                        <span className="iconfont spin">&#xe851;</span>
                        换一换
                    </WriteSwitch>
                </WriteTitile>
                {
                    list.map((item) => (
                        <WriteItem key={item.get('id')}>
                            <img className='listPic' src={item.get('imgUrl')} alt='图片'/>
                            <Sentence>
                                <span className='one'>{item.get('title')}</span>
                                <p className='two'>{item.get('description')}</p>
                            </Sentence>
                            <span className='three'>+关注</span>
                        </WriteItem>
                    ))
                }
            </WriteWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'writeList'])
});

export default connect(mapStateToProps, null)(Write);
