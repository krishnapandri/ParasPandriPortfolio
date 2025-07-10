// Script to create a proper resume PDF for Paras Pandri
import fs from 'fs';

const createResumePDF = () => {
  // This is a simple HTML that browsers can print to PDF
  const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Paras Pandri - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .section { margin-bottom: 25px; }
        .section h2 { color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
        .job { margin-bottom: 15px; }
        .job-title { font-weight: bold; }
        .company { font-style: italic; }
        .duration { color: #666; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #f0f0f0; padding: 5px 10px; border-radius: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Paras Pandri</h1>
        <p>Software Engineer</p>
        <p>Email: krishnapandri001@gmail.com | LinkedIn: linkedin.com/in/paras-pandri-609a95200/</p>
    </div>

    <div class="section">
        <h2>Professional Summary</h2>
        <p>Passionate Software Engineer with 2+ years of experience in full-stack development, debugging, and system optimization. Currently working at Softcon Business Solutions, specializing in resolving critical production bugs and designing new features.</p>
    </div>

    <div class="section">
        <h2>Experience</h2>
        <div class="job">
            <div class="job-title">Software Engineer</div>
            <div class="company">Softcon Business Solutions Pvt Ltd</div>
            <div class="duration">April 2023 - Present</div>
            <ul>
                <li>Debug and resolve critical bugs in production environments</li>
                <li>Design and implement new features for existing applications</li>
                <li>Optimize system performance and improve code quality</li>
                <li>Collaborate with cross-functional teams on project delivery</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>Education</h2>
        <div class="job">
            <div class="job-title">Bachelor of Information Technology (BIT)</div>
            <div class="company">CGPA: 9.1/10</div>
            <div class="duration">2020 - 2023</div>
        </div>
        <div class="job">
            <div class="job-title">Higher Secondary Certificate (HSC) - Science</div>
            <div class="company">67%</div>
            <div class="duration">2019 - 2020</div>
        </div>
        <div class="job">
            <div class="job-title">Secondary School Certificate (SSC)</div>
            <div class="company">80.40%</div>
            <div class="duration">2017 - 2018</div>
        </div>
    </div>

    <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills">
            <span class="skill">JavaScript</span>
            <span class="skill">React</span>
            <span class="skill">Angular</span>
            <span class="skill">Node.js</span>
            <span class="skill">Express.js</span>
            <span class="skill">Python</span>
            <span class="skill">Java</span>
            <span class="skill">SQL</span>
            <span class="skill">MongoDB</span>
            <span class="skill">Git</span>
            <span class="skill">Docker</span>
            <span class="skill">AWS</span>
        </div>
    </div>

    <div class="section">
        <h2>Key Achievements</h2>
        <ul>
            <li>Resolved 150+ critical production bugs</li>
            <li>Completed 10+ successful projects</li>
            <li>Maintained 9.1 CGPA in Bachelor's degree</li>
            <li>2+ years of professional development experience</li>
        </ul>
    </div>
</body>
</html>`;

  fs.writeFileSync('public/resume.html', resumeHTML);
  console.log('Resume HTML created successfully at public/resume.html');
  console.log('You can open this in a browser and print/save as PDF');
};

createResumePDF();