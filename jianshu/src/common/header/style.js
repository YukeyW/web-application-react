import style from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = style.div `
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = style.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = style.nav `
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
    height: 100%;
    width: 945px;
`;

export const NavItem = style.div `
    padding: 15px;
    font-size: 17px;
    line-height: 26px;
    color: #333;
    &.active {
        color: #ea6f5a;
    }
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    } 
`;

export const SearchWrapper = style.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        bottom: 5px;
        right: 5px;
        border-radius: 15px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const SearchInfor = style.div`
    position: absolute;
    left: 0px;
    top: 56px;
    width:240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: white;
`;

export const SearchInforTitle = style.div`
    z-index: 1;
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInforSwitch = style.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        margin-right: 2px;
        font-size: 12px;
        display: block;
        float: left;
        transition: all .2s ease-in;
        tranform-origin: center center;
    }
`;

export const SearchInforItem = style.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    margin-bottom: 15px;
    margin-right: 10px;
    color: #787878;
    border-radius: 3px;
    border: 1px solid #ddd;
`;


export const NavSearch = style.input`
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
    width: 160px;
    height: 38px;
    border-radius: 19px;
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 0px 40px 0px 20px;
    font-size: 14px;
    background: #eee;
    margin-left: 20px;
    margin-top: 9px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`;

export const Addition = style.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = style.div`
    float: right;
    margin-top: 9px;
    font-size: 14px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ea6f5a;
    margin-right: 20px;
    padding: 0px 20px;
    &.reg {
        color: #ea6f5a;
    }
    &.write {
        color: #fff;
        background: #ea6f5a
    }  
`;
