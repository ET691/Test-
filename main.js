// التنقل السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// إظهار/إخفاء النوافذ المنبثقة
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const startPawnBtn = document.getElementById('startPawnBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const pawnModal = document.getElementById('pawnModal');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const closeModals = document.querySelectorAll('.close-modal');

// فتح نافذة تسجيل الدخول
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// فتح نافذة التسجيل
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// فتح نافذة بدء الرهن
startPawnBtn.addEventListener('click', () => {
    pawnModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// الانتقال من تسجيل الدخول إلى التسجيل
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

// الانتقال من التسجيل إلى تسجيل الدخول
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// إغلاق النوافذ المنبثقة
closeModals.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// إغلاق النافذة عند النقر خارجها
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// التأكد من تطابق كلمات المرور في نموذج التسجيل
const registerForm = document.getElementById('registerForm');
const registerPassword = document.getElementById('registerPassword');
const registerConfirmPassword = document.getElementById('registerConfirmPassword');
const confirmPasswordError = document.createElement('div');
confirmPasswordError.className = 'error-message';
confirmPasswordError.textContent = 'كلمات المرور غير متطابقة';
registerConfirmPassword.parentNode.appendChild(confirmPasswordError);

registerConfirmPassword.addEventListener('input', () => {
    if (registerPassword.value !== registerConfirmPassword.value) {
        registerConfirmPassword.classList.add('error');
        confirmPasswordError.classList.add('show');
    } else {
        registerConfirmPassword.classList.remove('error');
        confirmPasswordError.classList.remove('show');
    }
});

// إرسال نموذج التسجيل
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (registerPassword.value !== registerConfirmPassword.value) {
        registerConfirmPassword.classList.add('error');
        confirmPasswordError.classList.add('show');
        return;
    }
    
    // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
    alert('تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.');
    registerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    registerForm.reset();
});

// إرسال نموذج تسجيل الدخول
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
    alert('تم تسجيل الدخول بنجاح!');
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    loginForm.reset();
});

// إرسال نموذج بدء الرهن
const pawnForm = document.getElementById('pawnForm');
pawnForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // هنا يمكنك إضافة كود إرسال البيانات إلى الخادم
    alert('تم تقديم طلب الرهن بنجاح! سنقوم بالاتصال بك لتأكيد التفاصيل.');
    pawnModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    pawnForm.reset();
});

// إظهار زر "ابدأ عملية الرهن" عند التمرير لأسفل
window.addEventListener('scroll', () => {
    const startPawnBtn = document.getElementById('startPawnBtn');
    if (window.scrollY > 300) {
        startPawnBtn.style.display = 'inline-block';
    } else {
        startPawnBtn.style.display = 'none';
    }
});