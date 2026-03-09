// function click_button_1(){
//     const a = document.getElementById('one').addEventListener('mousedown')
//     a.style.backgroundColor = 'black'
// }
// function click_button_2(){
//     const a = document.getElementById('one')
//     a.style.backgroundColor = 'gray'
// }

// function changeColor1(){
//     const a = document.querySelectorAll('.math_2');
//     a.forEach(a => {
//         a.addEventListener('mousedown', () =>{
//             a.classList.add('held');
//         });

//         a.addEventListener('mouseup' , ()=>{
//             a.classList.remove('held');
//         });
//     });
// }
// function get_1(){
//     const a = document.createElement('get1');
//     a.textContent = '1';
//     a.style.fontSize = '20px';
//     document.getElementById('div_1').appendChild(a);
    
// }

// function get_2(){
//     const a = document.createElement('get2');
//     a.textContent = '2';
//     a.style.fontSize = '20px';
//     document.getElementById('div_1').appendChild(a)
// }

// function get_add(){
//     const a = document.createElement('getadd');
//     a.textContent = '+';
//     a.style.fontSize = '20px';
//     document.getElementById('div_1').appendChild(a)
// }

let display = document.getElementById('display');
function appendValue(value){
    display.value += value;
}
function clearDisplay(){
    display.value = '';
}
function backspace(){
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
    
}
