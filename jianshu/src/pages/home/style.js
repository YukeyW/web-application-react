import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-top: 30px;
    margin-left: 15px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
    margin-top: 30px;
    margin-left: 15px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0px 10px 0px;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height:  32px;
    line-height: 32px;
    margin-left: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .picture {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
`;

export const ListItem = styled.div`
    width: 625px;
    overflow: hidden;
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid #dcdcdc;
    .listPic {
        float: right;
        width: 150px;
        height: 100px;
    }
`;

export const ListInfo = styled.div`
    width: 458px;
    float: left;
    .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
        line-height: 1.2;
    }
    .description {
        font-size: 13px;
        color: #999999;
        line-height: 15px;
    }
`;

export const LoadMore = styled.div`
    margin: 20px 0;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const IconLeftList = styled.div`
    padding: 10px 0px 0px 0px;
    color: #999999;
    .list {
        margin: 0 5px 0 5px;
    }
    .num {
        margin: 0 5px 0 0;
    }
`;

export const RecommendWrapper = styled.div`
    width: 280px;
`;

export const RecommendItem = styled.div`
    height: 50px;
    margin: 0 0 6px 0;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WriteWrapper = styled.div`
    width: 280px;
    margin-top: 20px;
`;

export const WriteTitile = styled.div`
    color: #969696;
    font-size: 14px;
    margin-bottom: 10px;
`;

export const WriteSwitch = styled.div`
    float: right;
    .spin {
        margin-right: 2px;
        font-size: 12px;
    }
`;

export const WriteItem = styled.div`
    width: 280px;
    height: 53px;
    margin: 15px 0 15px 0;
    .listPic {
        float: left;
        border-radius: 50%;
        width: 48px;
        height: 48px;
    }
    .three {
        float: right;
        font-size:13px;
        color: green;
        padding: 10px 10px;
    }
`;

export const Sentence = styled.div`
    float: left;
    height: 48px;
    margin: 0px 10px 0 10px;
    .one {
        font-size: 14px;
        line-height: 20px;
    }
    .two {
        font-size: 12px;
        padding: 10px 0px;
        color: #969696;
    }
`;

export const ToTop = styled.div`
    position: fixed;
    width: 50px;
    height: 50px;
    right: 50px;
    bottom: 50px;
    border: 1px solid #dcdcdc;
    border-radius: 25px;
    line-height: 50px;
    text-align: center;
`;



