import './styles.css';
const refs ={
    body: document.getElementsByTagName('body')[0]
}
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let changeColor=()=>{
    let index1 = randomIntegerFromInterval(0, 5)
    refs.body.style.backgroundColor=colors[index1]
  } 
let boolean;
let t;
const bodySwitcher=(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName==='BUTTON'){
        if(e.target.dataset.action==='start'){
            //boolean = true
            t=setInterval(changeColor, 1000)
        } 
        else if(e.target.dataset.action==='stop'){
            //boolean=false
            clearInterval(t)
        }
    }
}
refs.body.addEventListener('click', bodySwitcher)