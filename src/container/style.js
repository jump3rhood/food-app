
import Styled, { css } from 'styled-components'
var BREAKPOINTS = {
    DISPLAY: 1750,
    DESKTOP: 1450, // x_large  
    LAPTOP: '992px', // large
    TABLET: '767px', // medium
    PHABLET: '576px',
    MOBILE: '575px',// small
    S_MOBILE: '350px' // x_small
}
export const responsive = Object.keys(BREAKPOINTS).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label]}) {
      ${css(...args)}
    }
  `;
    return acc;
}, {});

export const PageContainer = Styled.div`
    background: url('../Images/banner-bg2.jpg');
    .container{
        background: url('../Images/banner-bg2.jpg');
        /* padding-top: 100px; */
        /* height: 100vh; */
    }
    .custom-card{
        margin:  20px;
        border-radius: 10px;
    }
    .item-image{
        width: 140px;
        border-radius: 3px;
        height: 104px;
    }
    .item-price{
        color:#0692d6;
        
    }
    .modal-item-title{
        margin-top: 10px;
        margin-bottom:5px
    }
`
