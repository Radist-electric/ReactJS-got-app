import React, {Component} from 'react';
import styled from 'styled-components';
import img404 from './error404.png';
import img408 from './error408.jpg';
import img410 from './error410.jpg';
import imgDefault from './errorDefault.jpg';
import imgFatal from './errorFatal.jpg';

const ErrorBlock = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    img {
        max-height: 250px;
        max-width: 100%;
    }
    span {
        display: block;
        margin-top: 5px;
        height: 35px;
        width: 100%;
        background-color: #051218;
        border-radius: 5px;
        line-height: 35px;
        color: #fff
    }
`

export default class  ErrorMessage extends Component {

    render() {
        const {typeError} = this.props;
        let imgName, errText;
        switch(typeError) {
            case 'fatal': {
                imgName = imgFatal;
                errText = 'Something is going wrong';
                break;
            }
            case '404': {
                imgName = img404;
                errText = `Server could not find what was requested (error ${typeError})`;
                break;
            }
            case '408': {
                imgName = img408;
                errText = `Request timeout (error ${typeError})`;
                break;
            }
            case '410': {
                imgName = img410;
                errText = `Resourse is removed (error ${typeError})`;
                break;
            }
            default: {
                imgName = imgDefault;
                errText = `Error ${typeError}`;
                break;
            }
        }
        return (
            <ErrorBlock>
                <img src={imgName} alt='Error'></img>
                <span>{errText}</span>
            </ErrorBlock>
        )
    }
}


// const ErrorMessage = ({typeError}) => {
//     const showErrorFatal = (typeError ==="fatal") ? <ErrorFatal/> : null;
//     const showError404 = (typeError ==="404") ? <Error404/> : null;
//     return (
//         <ErrorBlock>
//             {showErrorFatal}
//             {showError404}
//         </ErrorBlock>
//     )
// }
// const ErrorFatal = () => {
//     return (
//         <>
//         <img src={imgFatal} alt='FatalError'></img>
//         <span>Something's going wrong</span>
//         </>
//     )
// }
// const Error404 = () => {
//     return (
//         <>
//         <img src={img404} alt='Error'></img>
//         <span>Server couldn't find what was requested (error 404)</span>
//         </>
//     )
// }

// export default ErrorMessage;