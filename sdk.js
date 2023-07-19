var body = document.getElementsByTagName('body');
var div = document.createElement('div');
var aTag = document.createElement('a');
var imgTag = document.createElement('img');
var button = document.createElement('button');
button.innerText = 'Close';
var h2 = document.createElement('h2');
var p = document.createElement('p');
var image = document.createElement('img');

const divStyle = {
    position: 'relative',
    border: '1px solid red',
    width: '200px',
    height: '300px'
}

const buttonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
}
Object.entries(buttonStyle).forEach(item=>{
    button.style[item[0]] = item[1];
})

button.addEventListener('click', (e)=>{
e.preventDefault();
closeAd();
})

function closeAd(){
aTag.style.visibility = 'hidden';
button.style.visibility = 'hidden';
};
async function loadResource(){
    const data = await fetch('https://641d5a371a68dc9e461c8a37.mockapi.io/api/v1/ative');
    const resource = await data.json();
    console.log(resource);
    h2.innerHTML = resource[0].workspace;
    p.innerHTML = resource[0].currentPlan;
    image.setAttribute('src', resource[0].currentPlan);
    aTag.appendChild(h2);
    aTag.appendChild(p);
    aTag.appendChild(image);
    div.appendChild(aTag);
    div.appendChild(button);
    const list = Object.entries(divStyle);
    console.log("list",list)
    list.forEach(item=>{
        div.style[item[0]] = item[1];
    })
    document.body.appendChild(div);
}
console.log(document.readyState);
window.onload = (event)=>{
    console.log({div,body});
     loadResource();
}