
let style = document.querySelector("#style")
let html = document.querySelector("#html")

let str = `
/* 我要展示画个太极两仪
 * 无极生太极 
 * 首先准备一个div
 */
#effect{
    box-shadow: 0 0 3px black;
    width: 200px;
    height: 200px;
}
/* 将它变成一个圆 */
#effect{
    border-radius:50%;
}
/* 太极生两仪 
 * 一黑一百
 */
#effect{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 画两个小球 */
#effect::before{
    content:"";
    display:block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    position: absolute;
    top:0;
    left:50%;
    transform: translateX(-50%);
}
#effect::after{
    content:"";
    display:block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    position: absolute;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
}
/* 太极两仪画完了 */
`

let str2 = ''
let n = 0

console.log(str.length)

let step = ()=>{
    if(n >= str.length)
        return
    if(str[n] === '\n'){
        str2 += '<br>'
    }else if(str[n] === ' '){
        str2 += '&nbsp;'
    }else{
        str2 += str[n];
    }
    // console.log(str)
    html.innerHTML = str2
    style.innerHTML = str.substring(0,n+1)
    window.scrollTo(0,100000)
    html.scrollTo(0,100000)
    n = n + 1
    setTimeout(()=>{
        step()
    },10)
}

step()

