let string = ""

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // console.log(e.target.innerHTML);
        if(e.target.innerHTML == '='){
            let ans = eval(string);
            document.querySelector('.answer').innerHTML=ans;
            document.querySelector('.type').innerHTML=string;

            // History
            const newHistory = document.createElement('div');
            newHistory.classList.add('history');
            newHistory.innerHTML = `
            <div class="icon">
            <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <div class="history-calculation">
            <div class="que">${string}</div>
            <div class="ans">
                ${ans}
                <span>=</span>
            </div>
            </div>`
            string=ans;
            document.querySelector('.right').appendChild(newHistory);
        }
        else if(e.target.innerHTML == 'AC'){
                string="";
                document.querySelector('.answer').innerHTML="";
                document.querySelector('.type').innerHTML="";
            }
            else if(e.target.innerHTML == 'ESC'){
                string = string.substring(0,string.length-1)
                document.querySelector('.answer').innerHTML=string;
            }
            else{
                string = string+ e.target.innerHTML;
                document.querySelector('.answer').innerHTML=string;
            }

        
    })
})










let day= document.querySelector('#day')
let night= document.querySelector('#night')
let modes= document.querySelectorAll('.mode-icon')
Array.from(modes).forEach((mode)=>{
    mode.addEventListener('click', (e)=>{
        e.preventDefault();
        //let night= document.querySelector('.night')
        //console.log(e.target.getAttribute('id'));
        if(e.target.getAttribute('id') == "day"){
            //console.log(".....Day.....");
            e.target.style.color = '#fff';
            night.style.color = 'grey'
            //console.log(document.body.style.color);
            document.body.style.background = '#EFEFEF'
            document.querySelector('.right').style.color = '#22252D'
            
        }
        else{
            //console.log(".....Night.....");
            e.target.style.color = '#fff';
            day.style.color = 'grey'
            document.body.style.background = '#515966'
            document.querySelector('.right').style.color = '#fff'
        }
    })
    
})
