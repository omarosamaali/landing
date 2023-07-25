const nav_links = document.querySelector(".nav-links");
const menuOpen = document.querySelector("#menu-btn-open");
const menuClose = document.querySelector("#menu-btn-close");
menuOpen.onclick=()=> toggler()
menuClose.onclick=()=> toggler()
function toggler(){
    nav_links.classList.toggle('active');
    menuOpen.classList.toggle('close');
    menuClose.classList.toggle('open');
}

const hideBTn = document.getElementById("hide-btn");
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    // حساب الموضع الحالي للصفحة
    const currentScrollPos = window.pageYOffset;
    // إخفاء العنصر إذا تم التمرير إلى الأسفل
    if (prevScrollpos > currentScrollPos) {

        hideBTn.style.display = "block";
    } else {
        hideBTn.style.display = "none";
    }
    // تحديث القيمة السابقة للتمرير
    prevScrollpos = currentScrollPos;
}
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
