import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  Zap
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const techRotation = [
    "REST APIs",
    "Spring Boot", 
    "MongoDB",
    "System Design",
    "Performance Optimization"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techRotation.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "Java Spring Boot", icon: Code, color: "bg-orange-100 text-orange-700" },
    { name: "REST APIs", icon: Server, color: "bg-blue-100 text-blue-700" },
    { name: "MongoDB & MySQL", icon: Database, color: "bg-green-100 text-green-700" }
  ];

  const techStack = {
    backend: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Hibernate", level: 80 },
      { name: "JDBC", level: 85 }
    ],
    frontend: [
      { name: "React", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 }
    ],
    database: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 }
    ],
    tools: [
      { name: "Postman", level: 90 },
      { name: "Git", level: 85 },
      { name: "IntelliJ", level: 85 },
      { name: "VS Code", level: 80 },
      { name: "Docker", level: 65 },
      { name: "CI/CD", level: 60 }
    ]
  };

  const projects = [
    {
      title: "GlobalPrep Educational Platform",
      description: "Built a responsive dashboard + OpenAI-powered personalized learning.",
      tech: ["React", "Express.js", "MongoDB", "OpenAI API"],
      impact: "Increased user engagement by 25%",
      keywords: ["AI integration", "scalable backend", "MongoDB optimization"],
      links: {
        github: "https://github.com/Samreen-Gulam/GlobalPrep-Educational-Platform",
        demo: "https://your-demo-link.vercel.app"
      }
    },
    {
      title: "Banking System",
      description: "Engineered core banking services handling 10,000+ daily transactions",
      tech: ["Java", "Spring Boot", "MySQL"],
      impact: "35% improvement in performance via query optimization",
      keywords: ["High-performance", "Financial systems", "Query optimization"],
      links: {
        github: "https://github.com/Samreen-Gulam/Banking-System"
      }
    },
    {
      title: "Student Info Tracker",
      description: "Attendance, grades, and fee tracking system with role-based access",
      tech: ["Spring Boot", "MongoDB", "Swagger UI"],
      impact: "Streamlined administrative processes",
      keywords: ["Role-based access", "Educational tech", "API documentation"],
      links: {
        github: "https://github.com/Samreen-Gulam/Student-Info-Tracker",
        swagger: "https://your-swagger-docs.herokuapp.com"
      }
    },
    {
      title: "Job Application Tracker",
      description: "REST APIs with layered architecture & API documentation",
      tech: ["Spring Boot", "MySQL", "JPA", "Postman"],
      impact: "Clean architecture implementation",
      keywords: ["Layered architecture", "REST APIs", "JPA"],
      links: {
        github: "https://github.com/Samreen-Gulam/Job-Application-Tracker",
        docs: "https://your-api-docs.com"
      }
    }
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
        
        <div className={`text-center relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-float">
              SG
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Hi, I'm Samreen Gulam
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-4">
            Backend-Focused Full Stack Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build scalable REST APIs, design robust systems, and turn product requirements into production-ready features.
          </p>
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-2">I love building</p>
            <div className="text-2xl font-semibold text-blue-600 h-8">
              {techRotation[currentTech]}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
              onClick={() => {
                // Option 1: Download PDF from public folder (add your PDF there)
                const link = document.createElement('a');
                link.href = '/Samreen_Gulam_Resume.pdf';
                link.download = 'Samreen_Gulam_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Option 2: Fallback - generate text resume if PDF not found
                link.onerror = () => {
                  const resumeContent = `SAMREEN GULAM
Backend-Focused Full Stack Engineer
Email: samreengulam12@gmail.com | LinkedIn: Samreen-Gulam | Location: Hyderabad, Telangana

EDUCATION
B.Tech, Computer Science Engineering - GITAM University (CGPA: 7.53)
Intermediate MPC - SR Junior College (86.1%)
CBSE - Greenwood High School (CGPA: 7.5)

EXPERIENCE
Java Developer Intern - EIDIKO System Integrators (May 2024 – July 2024)
• Developed e-commerce backend in Spring Boot
• Created REST APIs for CRUD-based systems
• Agile practices, sprint reviews, and real-time debugging

TECHNICAL SKILLS
Backend: Java, Spring Boot, Hibernate, JDBC
Frontend: React, HTML5, CSS3, JavaScript
Database: MySQL, MongoDB
Tools: Postman, Git, IntelliJ, VS Code, Docker (basic), CI/CD (basic)

KEY PROJECTS
1. GlobalPrep Educational Platform - React, Express.js, MongoDB, OpenAI API
2. Banking System - Java, Spring Boot, MySQL (35% performance improvement)
3. Student Info Tracker - Spring Boot, MongoDB, Swagger UI
4. Job Application Tracker - Spring Boot, MySQL, JPA, Postman

CERTIFICATIONS
• Core Java Certification
• Data Structures Certification`;

                  const blob = new Blob([resumeContent], { type: 'text/plain' });
                  const url = window.URL.createObjectURL(blob);
                  const fallbackLink = document.createElement('a');
                  fallbackLink.href = url;
                  fallbackLink.download = 'Samreen_Gulam_Resume.txt';
                  document.body.appendChild(fallbackLink);
                  fallbackLink.click();
                  document.body.removeChild(fallbackLink);
                  window.URL.revokeObjectURL(url);
                };
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/Samreen-Gulam', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-3 transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a final-year Computer Science student with real-world experience delivering Spring Boot-based systems, RESTful services, and full-stack solutions. I enjoy building backend-heavy web platforms with clean architecture and a focus on performance and maintainability.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <Badge key={index} className={`${skill.color} px-4 py-2 text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer`}>
                      <IconComponent className="h-4 w-4" />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Performance</h3>
                  <p className="text-sm text-gray-600">35% improvement in banking system performance</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Engagement</h3>
                  <p className="text-sm text-gray-600">25% increase in user engagement</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Server className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Scale</h3>
                  <p className="text-sm text-gray-600">10,000+ daily transactions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Code className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Clean Code</h3>
                  <p className="text-sm text-gray-600">Layered architecture & best practices</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Server className="h-6 w-6" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                {techStack.backend.map((tech, index) => (
                  <SkillBar key={index} name={tech.name} level={tech.level} />
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Globe className="h-6 w-6" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                {techStack.frontend.map((tech, index) => (
                  <SkillBar key={index} name={tech.name} level={tech.level} />
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <Database className="h-6 w-6" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                {techStack.database.map((tech, index) => (
                  <SkillBar key={index} name={tech.name} level={tech.level} />
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Zap className="h-6 w-6" />
                  Tools & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                {techStack.tools.map((tech, index) => (
                  <SkillBar key={index} name={tech.name} level={tech.level} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-800 font-medium text-sm">
                      📈 {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword, keywordIndex) => (
                      <Badge key={keywordIndex} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {project.links.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.links.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.links.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.swagger && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.links.swagger, '_blank')}
                      >
                        <FileText className="h-4 w-4" />
                        Swagger
                      </Button>
                    )}
                    {project.links.docs && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.links.docs, '_blank')}
                      >
                        <FileText className="h-4 w-4" />
                        Docs
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          
          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900">Java Developer Intern</CardTitle>
                  <CardDescription className="text-lg text-blue-600 font-medium">EIDIKO System Integrators</CardDescription>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <Calendar className="h-4 w-4" />
                    May 2024 – July 2024
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Developed e-commerce backend in Spring Boot</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Created REST APIs for CRUD-based systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">Agile practices, sprint reviews, and real-time debugging</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
              </div>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">B.Tech, Computer Science</h3>
                        <p className="text-blue-600 font-medium">GITAM University</p>
                        <p className="text-gray-600 text-sm">CGPA: 7.53</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Intermediate - MPC</h3>
                        <p className="text-green-600 font-medium">SR Junior College</p>
                        <p className="text-gray-600 text-sm">86.1%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">CBSE</h3>
                        <p className="text-purple-600 font-medium">Greenwood High School</p>
                        <p className="text-gray-600 text-sm">CGPA: 7.5</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
              </div>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Award className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Core Java</h3>
                          <p className="text-gray-600 text-sm">Programming Fundamentals</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Award className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Data Structures</h3>
                          <p className="text-gray-600 text-sm">Algorithms & Implementation</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-xl text-blue-100 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-blue-100">samreengulam12@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-blue-100">Samreen-Gulam</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-blue-100">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-blue-100">
                  Let's discuss how we can work together
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  <Input placeholder="Last Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                </div>
                <Input placeholder="Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                <Input placeholder="Subject" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                <Textarea placeholder="Your message..." className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px]" />
                <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Samreen Gulam. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
