var v="hh";
const pgli=document.querySelector(".para1")
const gadhi=document.querySelector(".prep")

// newc=pgli.cloneNode("k")
// for(let i=0; i<3; i++)
// {   
//     // debugger
//         newc.innerText=i;
//         console.log(newc)
//         pgli.appendChild(newc)
        
//     }



for(let i=0; i<3; i++)
     {  const newc=pgli.cloneNode("k")
            // debugger
            newc.innerText=i;
            console.log(newc)
            pgli.appendChild(newc)
                
        }