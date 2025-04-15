// إدارة حالة المصادقة
let isAuthenticated = false;

// عناصر واجهة المستخدم
const authButtons = document.querySelector('.auth-buttons');
const userMenu = document.createElement('div');
userMenu.className = 'user-menu';
userMenu.style.display = 'none';

// عناصر قائمة المستخدم
const userGreeting = document.createElement('span');
userGreeting.className = 'user-greeting';
const logoutBtn = document.createElement('button');
logoutBtn.className = 'btn';
logoutBtn.textContent = 'تسجيل الخروج';

userMenu.appendChild(userGreeting);
userMenu.appendChild(logoutBtn);
authButtons.parentNode.insertBefore(userMenu, authButtons.nextSibling);

// تسجيل الخروج
logoutBtn.addEventListener('click', () => {
    isAuthenticated = false;
    authButtons.style.display = 'flex';
    userMenu.style.display = 'none';
    localStorage.removeItem('authToken');
    alert('تم تسجيل الخروج بنجاح');
});

// التحقق من حالة المصادقة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        // هنا يمكنك إضافة تحقق من صحة الرمز مع الخادم
        isAuthenticated = true;
        authButtons.style.display = 'none';
        userMenu.style.display = 'block';
        userGreeting.textContent = 'مرحباً بك!';
    }
});

// تحسين تجربة المستخدم في نماذج المصادقة
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.createElement('div');
loginError.className = 'error-message';
loginForm.appendChild(loginError);

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // التحقق من صحة الإدخال
    if (!loginEmail.value || !loginPassword.value) {
        loginError.textContent = 'يرجى ملء جميع الحقول';
        loginError.classList.add('show');
        return;
    }
    
    // محاكاة طلب API
    try {
        // في تطبيق حقيقي، ستكون هذه استدعاء لـ API
        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: loginEmail.value,
        //         password: loginPassword.value
        //     })
        // });
        
        // const data = await response.json();
        
        // محاكاة الاستجابة الناجحة
        const mockResponse = {
            success: true,
            token: 'mock-auth-token',
            user: {
                name: 'المستخدم'
            }
        };
        
        if (mockResponse.success) {
            localStorage.setItem('authToken', mockResponse.token);
            isAuthenticated = true;
            authButtons.style.display = 'none';
            userMenu.style.display = 'block';
            userGreeting.textContent = `مرحباً ${mockResponse.user.name}`;
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            loginForm.reset();
            loginError.classList.remove('show');
        } else {
            loginError.textContent = 'البريد الإلكتروني أو كلمة المر