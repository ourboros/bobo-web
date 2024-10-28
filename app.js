let listBg = document.querySelectorAll('.bg');
let dragon = document.querySelector('.dragon');
let listTab = document.querySelectorAll('.tab');
let portfolio = document.querySelectorAll(".portfolio")
let titleBanner = document.querySelector('.banner h1');
window.addEventListener("scroll", (event) => {
    /*scrollY is the web scrollbar position (pixel)*/
    let top = this.scrollY;
    let dragonOpacity = Math.min(top / 300, 1); 
    listBg.forEach((bg, index) => {
        if(index != 0 && index != 8){
            bg.style.transform = `translateY(${(top*index/2)}px)`;
        }else if(index == 0){
            bg.style.transform = `translateY(${(top/3)}px)`;
        }
    })

    dragon.style.opacity = dragonOpacity; 
    dragon.style.transform = `translateY(${top}px)`;
    titleBanner.style.transform = `translateY(${(top*4/2)}px)`;


    listTab.forEach(tab =>{
        if(tab.offsetTop - top < 550){
            tab.classList.add('active');
        }else{
            tab.classList.remove('active');
        }
    })
    portfolio.forEach(tab =>{
        if(tab.offsetTop - top < 550){
            tab.classList.add('active');
        }else{
            tab.classList.remove('active');
        }
    })
});  
let items = document.querySelectorAll('.special-skill .skill');
let active = 2;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.opacity = stt > 2 ? 0 : 0.1;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.opacity = stt > 2 ? 0 : 0.1;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}
document.querySelectorAll('a[data-tab]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 防止預設跳轉行為

        // 取得data-tab屬性，並以此來查找對應的區塊
        const targetId = this.getAttribute('data-tab');
        const targetElement = document.getElementById(targetId);

        // 使用scrollIntoView讓頁面滑動到指定區塊
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});