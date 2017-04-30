/*eslint-env browser */
'use strict';

console.log('loaded main.js');
console.log(`Promise:${typeof Promise}` );

const $id=document.getElementById.bind(document);

const LoadedDocument = new Promise((resolve) => {
  console.log(`Doc readyState:${document.readyState}`);

  if (document.readyState !== "loading") {
      console.log(`Doc readyState:${document.readyState}`);
      resolve();
  } else {
    document.addEventListener('DOMContentLoaded', resolve);
  }
});

LoadedDocument.then(()=>{
  console.log('LoadedDoccument');
  const disp = $id('disp');
  fetch('sample.data').then((data) =>{
      return data.text();
  }).then((datatext)=> {
      disp.innerHTML=datatext;
  })
  disp.innerHTML='<p>縦書き<b>日本語</b>です。</p>' + `
  <p>
  １２３４５６７８９０
  １２３４５６７８９０
  １２３４５６７８９０
  １２３４５６７８９０
  １２３４５６７８９０
  </p>
  `;
});
