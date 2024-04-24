import _ from 'lodash';

console.log(_.camelCase('Paecel Bundler Test!!'));

const imgEl = document.querySelector('img');
imgEl.setAttribute('src','./img/bg.jpg');

// autoprefixer - 접두사를 자동으로 설정
// - npm i postcss autoprefixer -D
// postcss : css를 일반환경보다 좀 더 편리하게 사용할 수 있도록 설정하는 환경

// rc -> Runtime Configuration

// .bable
// 2015년 기준 버전이 es6문법
// 최신 문법으로 작성된 코드를 이전 문법에서도 동일하게 적용될 수 있도록 컴파일
// npm i -D @babel/core @babel/preser-env

async function test() {
  const promise = Promise.resolve(123);
  console.log(await promise);
};
test();

// 만약 RepernceError Runtime 발생 시
// npm i -D @babel/plugin-transform-runtime

// cli -> Command Line Interface