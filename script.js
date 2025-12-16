// This simulates a database for the Hackathon Demo
const db = {
    users: [
        {
            username: "khizer",
            password: "Khizer@2025!", // In a real app, hash this!
            fullName: "Mian Muhammad Khizer Shah",
            rollNo: "AWKU-CS-2025-001",
            dept: "Computer Science",
            stats: { attendance: 88, cgpa: 3.5, nextClass: "Web Engineering (10:00 AM)" },
            courses: [
                { code: "CS301", name: "Web Engineering", grade: "A" },
                { code: "CS302", name: "Artificial Intelligence", grade: "B+" }
            ]
        },
        {
            username: "ihtisham",
            password: "Ihtisham@2025!",
            fullName: "Muhammad Ihtisham",
            rollNo: "AWKU-CS-2025-002",
            dept: "Computer Science",
            stats: { attendance: 92, cgpa: 3.8, nextClass: "Data Structures (11:30 AM)" },
            courses: [
                { code: "CS301", name: "Web Engineering", grade: "A-" },
                { code: "MATH201", name: "Linear Algebra", grade: "A" }
            ]
        }
    ],
    announcements: [
        { id: 1, title: "Hackathon Submission Deadline", date: "16 Dec", content: "Submissions close at 10:00 AM sharp." },
        { id: 2, title: "Winter Break Notification", date: "20 Dec", content: "Campus closes for winter break from Dec 24." }
    ]
};

