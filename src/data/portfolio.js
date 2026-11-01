// Edit this file to update the portfolio content. Empty URLs are intentionally not rendered.
export const profile = {
  name: 'Ratnesh Dilip Ramane',
  shortName: 'Ratnesh',
  initials: 'RR',
  role: 'B.Sc. Information Technology Student',
  location: 'Maharashtra, India',
  graduation: 'Expected 2027',
  availability: 'Open to internships & opportunities',
  email: '', // Add a public contact email
  resumeUrl: '/resume/Ratnesh_Ramane_Resume.pdf', // Add your resume PDF at /resume/Ratnesh-Ramane-Resume.pdf
  github: 'https://github.com/Ratnesh-coding',
  linkedin: 'https://www.linkedin.com/in/ratnesh-ramane-66a88739b/',
  introduction: 'I am an aspiring Data Science and Technology professional passionate about transforming data into meaningful insights and building practical solutions to real-world problems. I enjoy exploring technology, developing applications, solving problems, and continuously learning new skills.',
  about: 'I am currently pursuing my TY B.Sc. in Information Technology, building a strong foundation across programming, databases, web development, and data science. I am especially interested in how data can reveal useful patterns and support better decisions. I enjoy taking ideas from a problem statement to a working application, learning the tools behind it, and improving through hands-on projects.',
  interests: ['Data Science', 'Data Analytics', 'Data Engineering', 'Python & SQL', 'Practical software development']
}

export const skillGroups = [
  { name: 'Programming', note: 'Languages & problem solving', skills: ['Python', 'SQL', 'Java', 'JavaScript'] },
  { name: 'Data Science', note: 'Working with data', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'NLTK'] },
  { name: 'Web Development', note: 'Building useful interfaces', skills: ['HTML', 'CSS', 'Flask'] },
  { name: 'Database', note: 'Data storage & queries', skills: ['MySQL'] },
  { name: 'Tools', note: 'Everyday workflow', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'] }
]

export const projects = [
  {
    id: 'phishing',
    number: '01',
    title: 'Phishing URL Detection System',
    category: 'Machine Learning',
    description: 'A machine learning project that identifies potentially malicious URLs using feature extraction and classification techniques.',
    details: 'The project explores how URL characteristics can be transformed into useful model features and evaluated with classification algorithms. It brings together data preparation, feature engineering, model training, and a Flask-based interface.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    visual: 'phishing',
    github: 'https://github.com/Ratnesh-coding/phishing-url-detection',
    demo: ''
  },
  {
    id: 'finance',
    number: '02',
    title: 'Personal Finance Tracker',
    category: 'Web Application',
    description: 'A web application that helps users manage expenses, monitor transactions, and understand their spending habits.',
    details: 'A practical finance management application focused on recording transactions and presenting spending information in a clear, approachable way.',
    stack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    visual: 'finance',
    github: 'https://github.com/Ratnesh-coding/personal-finance-tracker',
    demo: ''
  },
  {
    id: 'farming',
    number: '03',
    title: 'Smart Farming Advisory System',
    category: 'Web Application',
    description: 'In progress — a web-based advisory platform designed to provide farmers with useful agricultural information and practical guidance.',
    details: 'Status: In Progress. A straightforward information platform designed around farmer needs, with an emphasis on accessible agricultural guidance and a simple user experience.',
    stack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    visual: 'farming',
    github: '',
    demo: ''
  }
]

export const education = [{
  period: '2024 — 2027',
  degree: 'B.Sc. Information Technology',
  institution: 'Dr. Datar Science, Dr. Behere Arts and Shri. Pilukaka Joshi Commerce College',
  location: 'Chiplun, Maharashtra',
  detail: 'Mumbai University · Expected graduation 2027'
}]

export const certifications = [
  {
    title: 'Data Analytics Internship',
    issuer: 'AICTE & VOIS for Tech University Engagement Program · Edunet Foundation',
    category: 'Internship',
    date: '10 August – 10 September 2026',
    detail: 'Completed a virtual internship focused on Data Analytics.',
    url: '/certificates/data-analytics-internship-vois-edunet.pdf'
  },
  {
    title: 'Data Analytics – Skill Up',
    issuer: 'GeeksforGeeks SkillUp',
    category: 'Certificate',
    date: '',
    detail: 'Successfully completed the Data Analytics Skill Up course.',
    url: '/certificates/geeksforgeeks-data-analytics-skillup.pdf'
  },
  {
    title: 'GenAI Job Simulation',
    issuer: 'BCG X · Forage',
    category: 'Job Simulation',
    date: '15 July 2025',
    detail: 'Practical tasks included data extraction, initial analysis, and developing an AI-powered financial chatbot.',
    url: '/certificates/bcg-genai-job-simulation-forage.pdf'
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte · Forage',
    category: 'Job Simulation',
    date: '10 June 2025',
    detail: 'Completed practical tasks in data analysis and forensic technology.',
    url: '/certificates/deloitte-data-analytics-job-simulation.pdf'
  },
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata · Forage',
    category: 'Job Simulation',
    date: '24 May 2025',
    detail: 'Completed practical tasks covering IAM fundamentals, IAM strategy assessment, custom IAM solutions, and platform integration.',
    url: '/certificates/tata-cybersecurity-analyst-job-simulation.pdf'
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud course · Simplilearn SkillUp',
    category: 'Certificate',
    date: '8 June 2025',
    detail: 'Completed an online course. The document states it acknowledges course completion and is not an official Google Cloud certification.',
    url: '/certificates/introduction-to-generative-ai-google-cloud-simplilearn.pdf'
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google · Coursera',
    category: 'Certificate',
    date: '11 May 2025',
    detail: 'Completed an online non-credit course authorized by Google and offered through Coursera.',
    url: '/certificates/google-crash-course-on-python-coursera.pdf'
  }
]

// Add only completed, verifiable activities. Empty by default to avoid implying experience.
export const activities = []
