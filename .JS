const cards = [...document.querySelectorAll('.card img')];
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const closeBtn = document.getElementById('lbClose');
let idx = -1;

function openLightbox(i){
    idx = i;
    const img = cards[idx];
    lbImg.src = img.dataset.full || img.src;
    lightbox.classList.add('open');
}
function closeLightbox(){
    lightbox.classList.remove('open');
    lbImg.src = '';
}

document.querySelectorAll('.view-btn').forEach((btn, i)=>{
    btn.addEventListener('click', ()=> openLightbox(i));
});
cards.forEach((img, i)=>{
    img.addEventListener('click', ()=> openLightbox(i));
});
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e=>{
    if(e.target===lightbox) closeLightbox();
});