function slider(){let sl=document.querySelector('.islide');

sl.style.transition="transform 10s linear 1s";
sl.style.transform="translateX(898px)";}
let cat_1=document.getElementById('cat_bf');
let cat_2=document.getElementById('cat_fb');
let cat_3=document.getElementById('cat_bb');
[cat_1,cat_2,cat_3].forEach((element,index)=>{
let title=element.getAttribute('title')
let c=document.createElement('div');
c.setAttribute('class',"cat_i");
let ih='';
for(let i=0;i<4;i++)
{ih+=`<div ><img  src="https://source.unsplash.com/200x200/?${title+','+(index+1)+i}" ><div class="cat_p" >Get 20% on ${title} Grab Now!</div></div>`;}
c.innerHTML=ih;
element.appendChild(c);
})
