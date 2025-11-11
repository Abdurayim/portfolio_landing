document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Resume download functionality
    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    
    downloadResumeBtn.addEventListener('click', function() {
        const resumeUrl = './assets/CV Resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'AbdurayimHamidjon-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('Resume download initiated');
    });
    
    // Experience data - replace with your actual experience
    const experience = [
        {
            position: "Full Stack Developer",
            company: "AL-fraganus freelancing team ",
            duration: "April 2023 - Dec 2023",
            responsibilities: [
                "Worked with team to increase our experience through github",
                "Built a full stack application with a team of 5 to understand frontend and backend integration",
                "Implemented RESTful APIs for data retrieval and manipulation",
                "Used react to scale the application",
                "Built location based telegram bots for food delivery cafes",
            ],
            skills: ["HTML5", "jQuery", "Bootstrap", "MySQL", "Node.js", "Express.js", "React.js", "Redux", "Git"]
        },
        {
            position: "Full Stack Developer",
            company: "Mansur_Ipakchi",
            duration: "Dec 2023 - May 2024",
            responsibilities: [
                "Automated the online store through telegram bot",
                "Through the NODEJS, created the backend for the telegram bot",
                "Created a role based authentication system and menu for the admin panel",
                "CRUD operations for the categories and products",
                "VPS management and deployment"
            ],
            skills: ["JavaScript", "MONGODB", "VPS", "ESKIZ.UZ", "NODEJS", "HTML", "CSS"]
        },
        {
            position: "Junior Front-end Developer",
            company: "Algoritm Education Center",
            duration: "June 2024 - Oct 2024",
            responsibilities: [
                "Fetched backend authorization data and role based pages from backend",
                "Helped the frontend team to implement a authentication system",
                "Taught the main frontend team how to handle roles"
            ],
            skills: ["VanillaJS", "Node.js", "HTML", "CSS"]
        },
        {
            position: "AI Trainer - Front-End Developer",
            company: "eBit Co., Ltd (South Korea)",
            duration: "April 2025 - June 2025",
            responsibilities: [
                "Train AI models on front-end development best practices and patterns",
                "Provide expertise in modern JavaScript frameworks and web technologies",
                "Review and annotate code samples for AI training datasets",
                "Collaborate with international team on AI-driven development tools"
            ],
            skills: ["AI Training", "JavaScript", "React.js", "Front-End Development", "Code Review"]
        },
        {
            position: "Head IT Teacher",
            company: "Anor International School",
            duration: "August 2025 - Present",
            responsibilities: [
                "Teaching HTML, CSS, JavaScript, and Node.js to students",
                "Preparing students for IT olympiads and programming competitions",
                "Developing comprehensive curriculum for computer science courses",
                "Mentoring students on practical web development projects"
            ],
            skills: ["HTML", "CSS", "JavaScript", "Node.js", "GO(Golang)"]
        }
    ];
    
    // Load experience into the DOM
    const experienceContainer = document.getElementById('experienceContainer');
    
    experience.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'bg-slate-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300';
        expItem.innerHTML = `
            <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-4 md:mb-0">
                    <h3 class="text-lg sm:text-xl font-bold text-dark-green-400">${exp.position}</h3>
                    <p class="text-sm sm:text-base text-dark-green-500 font-medium">${exp.company}</p>
                </div>
                <div class="bg-dark-green-800/50 text-dark-green-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full self-start md:self-center border border-dark-green-700/50 text-xs sm:text-sm">
                    ${exp.duration}
                </div>
            </div>
            <ul class="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                ${exp.responsibilities.map(resp =>
                    `<li class="flex items-start">
                        <i class="fas fa-check text-dark-green-400 mt-1 mr-2 sm:mr-3 bg-dark-green-800/30 p-1 rounded-full text-xs"></i>
                        <span class="text-sm sm:text-base text-slate-200">${resp}</span>
                    </li>`
                ).join('')}
            </ul>
            <div class="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800">
                <h4 class="text-xs sm:text-sm font-semibold text-slate-400 mb-2 sm:mb-3">TECHNOLOGIES USED:</h4>
                <div class="flex flex-wrap gap-2">
                    ${exp.skills.map(skill => 
                        `<span class="bg-dark-green-800/30 text-dark-green-300 text-xs px-3 py-2 rounded-lg border border-dark-green-700/30">${skill}</span>`
                    ).join('')}
                </div>
            </div>
        `;
        experienceContainer.appendChild(expItem);
    });
    
    // Projects data
    const projects = [
        {
            title: "Telegram Bot",
            description: "A full-featured online store with cart functionality and payment processing.",
            technologies: ["VPS", "LINUX CONFIG", "Node.js", "MongoDB"],
            image: "./assets/tgbot.jpg",
            link: "https://github.com/Abdurayim/prak_proekt.git"
        },
        {
            title: "Task Management App",
            description: "A productivity app for organizing tasks with drag-and-drop functionality.",
            technologies: ["React.js", "mongoDB", "Express.js", "Node.js"],
            image: "./assets/dashboard.jpg",
            link: "https://stickynotes-205q.onrender.com"
        },
        {
            title: "Education Center Landing Page",
            description: "Simple landing page for an education center with course listings and contact form.",
            technologies: ["JavaScript", "HTML", "CSS","Tailwind CSS"],
            image: "./assets/legacy.jpg",
            link: "https://legacy-academy.onrender.com"
        },
        {
            title: "Google extension",
            description: "This extension extracts tables and turn them into excel",
            technologies: ["JavaScript", "Node.js"],
            image: "./assets/extension.svg",
            link: "https://chromewebstore.google.com/detail/ckckjafhmkhdbmeiohkkhoajpagbnkmf?utm_source=item-share-cb"
        }
    ];
    
    // Load projects into the DOM
    const projectsContainer = document.getElementById('projectsContainer');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-800';
        projectCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105">
                <div class="absolute inset-0 bg-slate-900/20 hover:bg-slate-900/10 transition-all duration-300"></div>
            </div>
            <div class="p-4 sm:p-6">
                <h3 class="text-lg sm:text-xl font-bold mb-2 text-dark-green-400">${project.title}</h3>
                <p class="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.technologies.map(tech => 
                        `<span class="bg-dark-green-800/30 text-dark-green-300 text-xs px-3 py-2 rounded-lg border border-dark-green-700/30">${tech}</span>`
                    ).join('')}
                </div>
                <a href="${project.link}" class="text-dark-green-400 hover:text-dark-green-300 font-medium transition-colors duration-300 flex items-center group">
                    View Project 
                    <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Achievements data
    const achievements = [
        {
            title: "Web Development Certificate",
            image: "./assets/achievements/cert1.jpg",
            description: "Certificate of Achievement in Web Development",
            type: "image"
        },
        {
            title: "Achievement Highlight",
            image: "./assets/achievements/photo_2025-11-10 22.44.44.jpeg",
            description: "Professional Achievement",
            type: "image"
        },
        {
            title: "Recognition",
            image: "./assets/achievements/photo_2025-11-10 22.44.50.jpeg",
            description: "Award and Recognition",
            type: "image"
        },
        {
            title: "Accomplishment",
            image: "./assets/achievements/photo_2025-11-10 22.44.59.jpeg",
            description: "Milestone Achievement",
            type: "image"
        },
        {
            title: "Excellence Award",
            image: "./assets/achievements/photo_2025-11-10 22.45.07.jpeg",
            description: "Excellence in Performance",
            type: "image"
        },
        {
            title: "Achievement Showcase",
            image: "./assets/achievements/vd.mp4",
            description: "Video highlight of achievements",
            type: "video"
        }
    ];

    // Load achievements into the DOM
    const achievementsContainer = document.getElementById('achievementsContainer');

    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'group relative bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-800 cursor-pointer';

        // Create different content for images vs videos
        const mediaContent = achievement.type === 'video' ?
            `<video src="${achievement.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loop muted playsinline></video>` :
            `<img src="${achievement.image}" alt="${achievement.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">`;

        achievementCard.innerHTML = `
            <div class="aspect-[4/3] overflow-hidden">
                ${mediaContent}
            </div>
        `;

        // For videos, add hover to play and click to view
        if (achievement.type === 'video') {
            const video = achievementCard.querySelector('video');
            achievementCard.addEventListener('mouseenter', function() {
                video.play();
            });
            achievementCard.addEventListener('mouseleave', function() {
                video.pause();
                video.currentTime = 0;
            });
        }

        // Add click to view full media
        achievementCard.addEventListener('click', function() {
            window.open(achievement.image, '_blank');
        });

        achievementsContainer.appendChild(achievementCard);
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});