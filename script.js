document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Modal Functionality
    const loginBtn = document.querySelector('.login-btn');
    const registerBtn = document.querySelector('.register-btn');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const tournamentModal = document.getElementById('tournamentModal');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // Open modals
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    });
    
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    });
    
    // Close modals
    closeModals.forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            tournamentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal || e.target === registerModal || e.target === tournamentModal) {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            tournamentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality will be implemented with backend integration');
        this.reset();
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registration functionality will be implemented with backend integration');
        this.reset();
        registerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Tournament Data
    const tournaments = [
        {
            id: 1,
            title: "Daily Free Roll",
            type: "free",
            category: "daily",
            date: "Today, 3:00 PM",
            prize: "₹5,000",
            entries: 128,
            maxEntries: 256,
            banner: "tournament1.jpg",
            description: "Join our daily free tournament with a chance to win cash prizes!",
            prizeStructure: [
                { position: "1st", prize: "₹2,000" },
                { position: "2nd", prize: "₹1,500" },
                { position: "3rd", prize: "₹1,000" },
                { position: "4th", prize: "₹500" }
            ],
            rules: [
                "Best of 3 games",
                "Single elimination bracket",
                "5 minute time limit per turn"
            ]
        },
        {
            id: 2,
            title: "Weekly Championship",
            type: "paid",
            category: "weekly",
            date: "Saturday, 2:00 PM",
            entryFee: "₹100",
            prize: "₹25,000",
            entries: 84,
            maxEntries: 128,
            banner: "tournament2.jpg",
            description: "Weekly championship with bigger prizes and tougher competition.",
            prizeStructure: [
                { position: "1st", prize: "₹10,000" },
                { position: "2nd", prize: "₹7,000" },
                { position: "3rd", prize: "₹5,000" },
                { position: "4th-8th", prize: "₹1,000" }
            ],
            rules: [
                "Best of 5 games",
                "Double elimination bracket",
                "3 minute time limit per turn"
            ]
        },
        {
            id: 3,
            title: "Beginner's Luck",
            type: "free",
            category: "daily",
            date: "Tomorrow, 6:00 PM",
            prize: "₹3,000",
            entries: 56,
            maxEntries: 128,
            banner: "tournament3.jpg",
            description: "Special tournament for players with less than 10 tournament wins.",
            prizeStructure: [
                { position: "1st", prize: "₹1,500" },
                { position: "2nd", prize: "₹1,000" },
                { position: "3rd", prize: "₹500" }
            ],
            rules: [
                "Best of 3 games",
                "Single elimination bracket",
                "5 minute time limit per turn",
                "Maximum 10 tournament wins to enter"
            ]
        },
        {
            id: 4,
            title: "Premium Showdown",
            type: "paid",
            category: "weekly",
            date: "Sunday, 4:00 PM",
            entryFee: "₹250",
            prize: "₹50,000",
            entries: 42,
            maxEntries: 64,
            banner: "tournament4.jpg",
            description: "High stakes tournament for experienced players only.",
            prizeStructure: [
                { position: "1st", prize: "₹25,000" },
                { position: "2nd", prize: "₹15,000" },
                { position: "3rd", prize: "₹7,000" },
                { position: "4th", prize: "₹3,000" }
            ],
            rules: [
