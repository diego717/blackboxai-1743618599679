// Initialize localStorage with sample data if empty
function initializeData() {
    if (!localStorage.getItem('users')) {
        const users = [
            {
                id: 'USR-001',
                name: 'Administrador',
                email: 'admin@reparatech.com',
                password: 'admin123',
                role: 'admin',
                phone: '+1 234 567 8900',
                createdAt: '2023-01-15'
            }
        ];
        localStorage.setItem('users', JSON.stringify(users));
    }

    if (!localStorage.getItem('equipment')) {
        const equipment = [
            {
                id: 'EQ-001',
                name: 'Laptop Dell XPS 15',
                type: 'Laptop',
                specs: '15.6", Intel i7, 16GB RAM, 512GB SSD',
                status: 'available',
                lastRepair: '2023-10-15',
                totalRepairs: 3,
                image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg'
            },
            {
                id: 'EQ-002',
                name: 'iPhone 13 Pro',
                type: 'Smartphone',
                specs: '6.1", 128GB, iOS 15',
                status: 'in_repair',
                lastRepair: '2023-10-18',
                totalRepairs: 1,
                image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg'
            },
            {
                id: 'EQ-003',
                name: 'Monitor Samsung 27"',
                type: 'Monitor',
                specs: '27", 4K UHD, 144Hz, 1ms',
                status: 'available',
                lastRepair: '2023-10-20',
                totalRepairs: 2,
                image: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg'
            }
        ];
        localStorage.setItem('equipment', JSON.stringify(equipment));
    }

    if (!localStorage.getItem('repairs')) {
        const repairs = [
            {
                id: 'REP-001',
                equipmentId: 'EQ-001',
                clientId: 'CL-001',
                issue: 'La laptop no enciende después de una actualización de sistema',
                priority: 'medium',
                status: 'completed',
                technician: 'TEC-001',
                cost: 120,
                estimatedTime: 3,
                warranty: 30,
                createdAt: '2023-10-12',
                completedAt: '2023-10-15'
            },
            {
                id: 'REP-002',
                equipmentId: 'EQ-002',
                clientId: 'CL-002',
                issue: 'Pantalla rota y no responde al tacto',
                priority: 'high',
                status: 'in_progress',
                technician: 'TEC-001',
                cost: 250,
                estimatedTime: 5,
                warranty: 60,
                createdAt: '2023-10-18'
            }
        ];
        localStorage.setItem('repairs', JSON.stringify(repairs));
    }
}

// Check authentication status
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const protectedPages = ['dashboard.html', 'equipment.html', 'create-repair.html', 'repair-details.html', 'profile.html'];
    const currentPage = window.location.pathname.split('/').pop();

    if (protectedPages.includes(currentPage) && !currentUser) {
        window.location.href = 'login.html';
    }

    if ((currentPage === 'login.html' || currentPage === 'register.html') && currentUser) {
        window.location.href = 'dashboard.html';
    }
}

// Format date
function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Get status badge class
function getStatusBadgeClass(status) {
    switch(status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-800';
        case 'in_progress':
            return 'bg-blue-100 text-blue-800';
        case 'completed':
            return 'bg-green-100 text-green-800';
        case 'cancelled':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

// Get priority text
function getPriorityText(priority) {
    switch(priority) {
        case 'low':
            return 'Baja';
        case 'medium':
            return 'Media';
        case 'high':
            return 'Alta';
        default:
            return 'No especificada';
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    checkAuth();
});