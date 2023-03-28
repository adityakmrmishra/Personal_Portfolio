let ani_js = document.querySelectorAll('.ani');


const aniInView = (e, i=0)=>{
    const eTop = e.getBoundingClientRect().top;
    return(
        eTop <= (window.innerHeight || document.documentElement.clientHeight)/i
    )
}

const aniOutOfView = (e)=>{
    const eTop = e.getBoundingClientRect().top;

    return(
        eTop > window.innerHeight || document.documentElement.clientHeight
    )
}

window.addEventListener('scroll',()=>{
    ani_js.forEach(element =>{
        if (aniInView(element,i =2.2)) {
            element.classList.add('ani_jss');
            element.classList.remove('ani_jsss');
        }
        else if (aniOutOfView(element)){
            element.classList.remove('ani_jss');
            element.classList.add('ani_jsss');
        }
    });
})

window.addEventListener('scroll',()=>{
    console.log(ani_js[0].getBoundingClientRect().top);

})
window.addEventListener('scroll',()=>{
    console.log(document.documentElement.clientHeight);

})


let left_scroll = document.getElementById('left_scroll_p');
let right_scroll = document.getElementById('right_scroll_p');
let project_cards = document.getElementById('project_cards');

left_scroll.addEventListener('click', ()=>{
    project_cards.scrollLeft -= 355;
})

right_scroll.addEventListener('click', ()=>{
    project_cards.scrollLeft += 355;
})