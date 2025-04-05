/* ==================== MENÜ GÖSTER/GİZLE (MOBİL) ==================== */
// Mobil menü butonu ve menü elemanlarını seç
// Butona tıklandığında menüye 'show-menu' class'ı ekle/kaldır

/* ==================== AKTİF LİNK VURGULAMA ==================== */
// Sayfa scroll edildiğinde, görünürdeki section'a göre ilgili navigasyon linkine 'active-link' class'ı ekle
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // Header yüksekliğini hesaba kat
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


/* ==================== HEADER ARKA PLAN DEĞİŞİMİ (SCROLL) ==================== */
// Sayfa aşağı kaydırıldığında header'a 'scrolled' class'ı ekle
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scrolled'); else header.classList.remove('scrolled');
}
window.addEventListener('scroll', scrollHeader);


/* ==================== SLIDER İNİTİALİZE (Örn: Swiper.js) ==================== */
// Eğer Swiper.js kullanılıyorsa:
/*
var swiper = new Swiper(".swiper-container", {
    cssMode: true, // Performans için
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000, // 5 saniyede bir değişir
        disableOnInteraction: false,
    },
    mousewheel: false, // Fare tekerleği ile geçişi kapat
    keyboard: true, // Klavye ile geçişi aç
});
*/

/* ==================== YUKARI KAYDIR BUTONU GÖSTER/GİZLE ==================== */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* ==================== FOOTER YIL GÜNCELLEME ==================== */
// Footer'daki telif hakkı yılı otomatik güncellensin
document.getElementById('year').textContent = new Date().getFullYear();

/* ==================== (İSTEĞE BAĞLI) DARK MODE ==================== */
// Tema değiştirme butonu ve body elementine class ekleme/kaldırma

/* ==================== (İSTEĞE BAĞLI) ANİMASYONLAR (ScrollReveal vb.) ==================== */
// Sayfa kaydırıldıkça elemanların görünür olması için animasyon kütüphanesi kullanımı

/* ==================== SLIDER İNİTİALİZE (Örn: Swiper.js) ==================== */
// Swiper'ı başlatmak için bu kodu kullanın (yorum satırlarını kaldırın)

var swiper = new Swiper(".swiper-container", { // HTML'deki .swiper-container sınıfını hedefliyoruz
    cssMode: true, // Daha iyi performans için (isteğe bağlı)
    loop: true,    // Sonsuz döngü
    navigation: {
      nextEl: ".swiper-button-next", // Sonraki buton sınıfı
      prevEl: ".swiper-button-prev", // Önceki buton sınıfı
    },
    pagination: {
      el: ".swiper-pagination", // Sayfalama noktalarının sınıfı
      clickable: true,          // Noktalara tıklanabilirlik
    },
    autoplay: {
        delay: 5000,                 // Slaytlar arası bekleme süresi (5 saniye)
        disableOnInteraction: false, // Kullanıcı etkileşiminden sonra autoplay dursun mu? (false = durmasın)
    },
    // mousewheel: true, // Fare tekerleği ile kontrol (isteğe bağlı)
    keyboard: true,   // Klavye okları ile kontrol (isteğe bağlı)
});
