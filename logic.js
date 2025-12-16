// --- LOGIC: Handle Login & Dashboard ---


const loginScreen = document.getElementById('login-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const loginForm = document.getElementById('login-form');


// 1. Handle Login Submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userIn = document.getElementById('username').value;
    const passIn = document.getElementById('password').value;
    attemptLogin(userIn, passIn);
});


// 2. Login Function
function attemptLogin(username, password) {
    // Find user in our "Database" (data.js)
    const user = db.users.find(u => u.username === username && u.password === password);


    if (user) {
        loadDashboard(user);
    } else {
        alert("Invalid credentials! Try the Demo buttons.");
    }
}


// 3. Demo Button Helper (For Judges)
function demoLogin(username) {
    const user = db.users.find(u => u.username === username);
    if (user) {
        // Auto-fill fields just for visual effect
        document.getElementById('username').value = user.username;
        document.getElementById('password').value = user.password;
        // Log them in
        loadDashboard(user);
    }
}


// 4. Render Dashboard
function loadDashboard(user) {
    // Hide login, show dashboard
    loginScreen.classList.add('hidden');
    dashboardScreen.classList.remove('hidden');


    // Fill Header
    document.getElementById('user-display').innerText = `${user.fullName} (${user.rollNo})`;
   
    // Fill Stats
    document.getElementById('stat-attendance').innerText = user.stats.attendance;
    document.getElementById('stat-cgpa').innerText = user.stats.cgpa;
    document.getElementById('stat-next').innerText = user.stats.nextClass;


    // Fill Courses Table
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = user.courses.map(c => `
        <tr class="border-b">
            <td class="px-4 py-3 font-medium text-gray-900">${c.code}</td>
            <td class="px-4 py-3">${c.name}</td>
            <td class="px-4 py-3 text-awkuRed font-bold">${c.grade}</td>
        </tr>
    `).join('');


    // Fill Announcements
    const noticeList = document.getElementById('announcement-list');
    noticeList.innerHTML = db.announcements.map(a => `
        <div class="p-4 hover:bg-gray-50">
            <div class="text-xs text-gray-400 mb-1">${a.date}</div>
            <h4 class="text-sm font-bold text-gray-800">${a.title}</h4>
            <p class="text-xs text-gray-600 mt-1">${a.content}</p>
        </div>
    `).join('');
}


// 5. Logout
function logout() {
    location.reload(); // Simple reload resets the "app"
}

