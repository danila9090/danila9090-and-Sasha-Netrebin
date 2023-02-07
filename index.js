// ---------------------------------------------------------------247
// ------------------------------------------------------------1
// let elem = document.querySelector('#elem');
// let text = document.querySelector('#text');
//  elem.addEventListener('click', function() {
//  	console.log(text.textContent);
//     });

// -----------------------------------------------------------------2
// let elem = document.querySelector('#elem');
//  let text = document.querySelector('#text');
//  elem.addEventListener('click', function() {
//   	console.log(text.textContent);
//    elem.addEventListener('click', function() {
//  	console.log('1');
//  });
//      });

// -----------------------------------------------------------------------3
// let text1 = document.querySelector('#text1');
// let text2 = document.querySelector('#text2');
//  let elem1 = document.querySelector('#elem1');
//  elem1.addEventListener('click', function() {
//   	console.log(Number(text1.textContent) + Number(text2.textContent)); 
//     });
// ---------------------------------------------------------------------------4
// let text1 = document.querySelector('#text1');
// let text2 = document.querySelector('#text2');
// let text3 = document.querySelector('#text3');
//  let elem1 = document.querySelector('#elem1');
//  elem1.addEventListener('click', function() {
//   	console.log(Number(text1.textContent) + Number(text2.textContent) + Number(text3.textContent)); 
//     });

// --------------------------------------------------------------------5
// let elem1 = document.querySelector('#elem1');
//   elem1.addEventListener('click', function() {
// let text1 = document.querySelector('#text1');
// console.log(text1.textContent + 1)
// });
// elem1.innerHTML = '<i>2</i>';

// ---------------------------------------------------------------------------6
//  let elem1 = document.querySelector('#elem1');
//    elem1.addEventListener('click', function() {
//  let text1 = document.querySelector('#text1');
//  console.log(text1.textContent + "!")
//  });
//  elem1.innerHTML = '<i>2</i>';


// ---------------------------------------------------------------------------248

// ------------------------------------------------------------------------------1
let elem = document.querySelector('#elem');
let text = document.querySelector('#text');
 elem.addEventListener('click', function() {
 	console.log(elem.innerHTML);
    });
    elem.innerHTML = '<i>!!!</i>';