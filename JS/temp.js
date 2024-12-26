let drop =document.querySelector(".dropdown");
let com= document.querySelector(".productcard");


drop.addEventListener('mouseenter',()=>{
    com.style.display = 'flex';
})

drop.addEventListener('mouseout',()=>{
    com.style.display='none'
})

    const displayDiv = document.getElementsByClassName('info');
    const navLinks = document.querySelectorAll('.nlink');

function setActiveLink(clickedLink) {
  navLinks.forEach(link => link.classList.remove('active'));
  clickedLink.classList.add('active');
    //Same way we can replace respective text content in side by container  when cliked on these .
}

navLinks.forEach(link => {
    link.addEventListener('click', () => setActiveLink(link));
});

document.addEventListener('DOMContentLoaded', () => {
    navLinks[0].classList.add('active');
});



document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll(".gsign");
    divs.forEach(div => {
        div.addEventListener('click', () => {
            divs.forEach(d => d.textContent = '>');      
            div.textContent = 'v';
            //Same way we can show respective text content when cliked on these .
        });
      });
    });













// showpa.addEventListener('click',()=>{
// })



    // document.addEventListener('DOMContentLoaded',()=>{
    //     showpara.style.textDecoration='underline';
    // })
