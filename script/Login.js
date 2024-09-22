let token = '';

        const userGreeting = document.getElementById('userGreeting');
        const logoutBtn = document.getElementById('logoutBtn');

        // Modal elements
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');

        function showModal(modal) {
            modal.style.display = 'block';
        }

        function hideModal(modal) {
            modal.style.display = 'none';
        }

        document.addEventListener('DOMContentLoaded', function () {
            const loginModal = document.getElementById('loginModal');
            const registerModal = document.getElementById('registerModal');
        
            function showModal(modal) {
                modal.style.display = 'block';
            }
        
            function hideModal(modal) {
                modal.style.display = 'none';
            }
        
            document.getElementById('loginBtn').addEventListener('click', () => showModal(loginModal));
            document.getElementById('registerBtn').addEventListener('click', () => showModal(registerModal));
        
            document.getElementById('closeLogin').onclick = () => hideModal(loginModal);
            document.getElementById('closeRegister').onclick = () => hideModal(registerModal);
        
            window.onclick = function(event) {
                if (event.target === loginModal) hideModal(loginModal);
                if (event.target === registerModal) hideModal(registerModal);
            };
        });
        

        // Logout functionality
        logoutBtn.addEventListener('click', () => {
            token = '';
            userGreeting.textContent = '';
            logoutBtn.classList.add('hidden');
        });

        document.getElementById('loginBtn').addEventListener('click', () => showModal(loginModal));
        document.getElementById('registerBtn').addEventListener('click', () => showModal(registerModal));

        document.getElementById('registerForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            alert(await response.text());
            hideModal(registerModal);
        });

        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
                token = token; // Store token in a variable for use
                userGreeting.textContent = `Welcome, ${username}!`;
                userGreeting.classList.remove('hidden');
                logoutBtn.classList.remove('hidden');
                hideModal(loginModal);
            } else {
                alert('Invalid credentials');
            }
        });

        // Check for token on page load
        window.onload = () => {
            token = localStorage.getItem('token');
            if (token) {
                const decoded = JSON.parse(atob(token.split('.')[1]));
                userGreeting.textContent = `Welcome, ${decoded.username}!`;
                userGreeting.classList.remove('hidden');
                logoutBtn.classList.remove('hidden');
            }
        };

        // Close modal if user clicks outside of it
        window.onclick = function(event) {
            if (event.target === loginModal) {
                hideModal(loginModal);
            }
            if (event.target === registerModal) {
                hideModal(registerModal);
            }
        }