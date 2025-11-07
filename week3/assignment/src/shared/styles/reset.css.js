import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('* ', {
  // 페이지의 모든 HTML 요소
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased', // 글자가 부드러워 보이도록(Chrome, Safari)
  MozOsxFontSmoothing: 'grayscale', // 글자가 선명하게 보이도록(Firefox Mac)
});

globalStyle('ul, ol', {
  listStyle: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
  border: 'none',
  background: 'none',
  outline: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: 'inherit',
  fontSize: 'inherit',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('#root', {
  // #root: React의 진입점이 되는 index.html의 div 요소
  isolation: 'isolate',
  // #root 요소를 독립적인 Stacking Context로 만듦 -> #root 내부의 z-index 계산이 예측 가능해짐
});
