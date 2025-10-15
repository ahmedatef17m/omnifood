const header=document.querySelector('.header');
const navEl=document.querySelector('.btn-mobile-nav')
navEl.addEventListener('click',function(){
header.classList.toggle('nav-open');
})
const navlinks=document.querySelectorAll('.main-nav-link');
navlinks.forEach(link =>
  link.addEventListener('click', function () {
header.classList.remove('nav-open');
  }))


// sticy
const sectionheroEl=document.querySelector(".section-hero");
const obs=new IntersectionObserver(function(entries){
const ent=entries[0];
if(ent.isIntersecting === false){
     document.body.classList.add('sticky')
}
   
if(!ent.isIntersecting === false){
     document.body.classList.remove('sticky')
}
   
},{
root:null,
threshold:0,
rootMargin:'-80px'
})
obs.observe(sectionheroEl);
