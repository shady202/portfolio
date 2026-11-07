import Link from "next/link"
import { Linkedin, Mail, ChevronRight, ShieldCheck, Vote, Cpu, Bug, Fish, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations"

const EMAIL = "shady.ehab.assad@gmail.com"
const LINKEDIN = "https://www.linkedin.com/in/shady-ehab-07666a255"

const keyExpertise = [
  "SOC Operations: Alert Triage & SIEM Monitoring",
  "Incident Response & Root Cause Analysis",
  "Threat Detection & Endpoint Security",
  "Network Security & Vulnerability Assessment",
  "Security Automation (Cortex XSOAR) & Python",
]

const experience = [
  {
    title: "SOC / IT Support Intern",
    org: "Ali Bin Ali Technology Solutions (ABATS), Doha",
    date: "Jan 2025 - May 2025",
    points: [
      "Triaged 30-60 daily alerts (phishing attempts, anomalous logins, network anomalies) in Cortex XSOAR and supported 60+ security incidents.",
      "Automated repetitive low-to-medium severity response workflows in Cortex XSOAR to reduce manual effort and speed up resolution.",
      "Documented incident timelines, root cause analysis and resolutions in the ITSM platform, contributing to a reusable SOC knowledge base.",
      "Deployed Lansweeper for automated asset discovery and centralised inventory, enabling faster scope assessment during incidents.",
      "Reduced endpoint attack surface through antivirus scans, Windows Firewall policy enforcement and least-privilege permission remediation.",
    ],
  },
  {
    title: "Elite Security Operations Center (SOC) Program",
    org: "Asia Pacific University",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Completed a certified 50-hour rotation in a live SOC: real-time threat detection, alert triage, SIEM usage and writing basic detection rules.",
    ],
  },
  {
    title: "International Battle of Hackers 2024 (CTF)",
    org: "FSEC x Asia Pacific University",
    date: "Sep 2024",
    points: [
      "Competed in a 3-member team across network security, web exploitation, digital forensics and cryptography challenges, and proposed remediation for the vulnerabilities found.",
    ],
  },
]

const volunteering = [
  {
    title: "Volunteer Event Coordinator",
    org: "Doha International Book Fair (35th Edition), Doha",
    date: "Volunteering",
    points: ["Coordinated visitors and event operations at one of the region's largest public events."],
  },
]

const projects = [
  {
    title: "BlackCat/ALPHV Ransomware Case Study",
    desc: "Incident response case study",
    body: "Analysed a BlackCat/ALPHV ransomware intrusion using Sysmon, Windows Event Logs and Wireshark PCAPs, mapped the activity to MITRE ATT&CK and wrote an incident response playbook.",
    tags: ["MITRE ATT&CK", "Sysmon", "Wireshark", "IR Playbook"],
    icon: Bug,
    repo: "https://github.com/shady202/Blackcat-Ransomware-Analysis",
  },
  {
    title: "Blockchain E-Voting Platform",
    desc: "Solo project, 2026",
    body: "Designed and built a voting system on Ethereum smart contracts that prevents double voting and provides tamper-resistant, real-time result verification. Sole developer across architecture, implementation and testing.",
    tags: ["Solidity", "Ethereum", "Smart Contracts", "Web3"],
    icon: Vote,
    repo: "https://github.com/shady202/Implementation-of-a-Secure-Blockchain-Based-E-Voting-System-for-Transparent-Elections-FYP",
  },
  {
    title: "Phishing URL Detection System",
    desc: "MobileBERT research prototype",
    body: "Built a Google Colab phishing detector by fine-tuning MobileBERT to classify phishing and benign website samples. The project includes balanced dataset preparation, evaluation metrics and confusion-matrix analysis.",
    tags: ["Python", "MobileBERT", "PyTorch", "Transformers"],
    icon: Fish,
    repo: "https://github.com/shady202/PhishLang-MobileBERT-Phishing-Detection",
  },
  {
    title: "DMZ Security Gate Prototype",
    desc: "Arduino IoT security prototype, 2026",
    body: "Applied security engineering and network architecture principles on an Arduino IoT gateway to test perimeter defenses and attack surface, and documented test cases and findings.",
    tags: ["Arduino", "DMZ", "Access Control", "Network Security"],
    icon: Cpu,
    repo: "https://github.com/shady202/Ultrasonic-RFID-Security-Gate-System-IOT",
  },
  {
    title: "AI-Based Deepfake Detection for Bank Security",
    desc: "CNN transfer-learning project, 2025",
    body: "Developed CNN transfer-learning models in Python to detect deepfake videos for banking security, evaluating model performance and false-positive trade-offs.",
    tags: ["Python", "TensorFlow", "CNN", "Deepfake Detection"],
    icon: ShieldCheck,
  },
  {
    title: "Enterprise Network Design",
    desc: "Group project, 2023",
    body: "Designed a four-branch MapleTech enterprise network in Cisco Packet Tracer using LAN segmentation, VLSM addressing, a full-mesh WAN with RIP, and centralized DHCP, DNS, web, email and IoT services.",
    tags: ["Cisco Packet Tracer", "RIP", "VLSM", "Network Design"],
    icon: ShieldCheck,
    repo: "https://github.com/shady202/Enterprise-Network-Design-Packet-Tracer",
  },
]

const skillGroups = [
  {
    label: "SOC",
    title: "SOC & Detection",
    color: "purple",
    items: [
      "SIEM Monitoring",
      "Splunk",
      "Cortex XSOAR",
      "Incident Response",
      "Threat Detection",
      "Root Cause Analysis",
      "Digital Forensics",
      "MITRE ATT&CK",
    ],
  },
  {
    label: "SEC",
    title: "Security Tools",
    color: "blue",
    items: ["Wireshark", "Nmap", "Nessus", "Metasploit", "Burp Suite", "Aircrack-ng", "Sysmon", "Lansweeper"],
  },
  {
    label: "DEV",
    title: "Programming & Dev",
    color: "green",
    items: ["Python", "C / C++", "Solidity", "TensorFlow", "Shell Scripting", "Git", "Docker", "Arduino"],
  },
  {
    label: "NET",
    title: "Networking & Systems",
    color: "orange",
    items: [
      "TCP/IP",
      "Cisco Packet Tracer",
      "Windows",
      "Kali Linux",
      "Ubuntu",
      "Red Hat Linux",
      "VirtualBox",
      "Microsoft 365",
    ],
  },
] as const

const colorClasses = {
  purple: {
    chip: "bg-purple-100 dark:bg-purple-900",
    text: "text-purple-600 dark:text-purple-300",
    hover: "hover:bg-purple-100 dark:hover:bg-purple-900/50",
  },
  blue: {
    chip: "bg-blue-100 dark:bg-blue-900",
    text: "text-blue-600 dark:text-blue-300",
    hover: "hover:bg-blue-100 dark:hover:bg-blue-900/50",
  },
  green: {
    chip: "bg-green-100 dark:bg-green-900",
    text: "text-green-600 dark:text-green-300",
    hover: "hover:bg-green-100 dark:hover:bg-green-900/50",
  },
  orange: {
    chip: "bg-orange-100 dark:bg-orange-900",
    text: "text-orange-600 dark:text-orange-300",
    hover: "hover:bg-orange-100 dark:hover:bg-orange-900/50",
  },
} as const

const softSkills = [
  "Technical Documentation",
  "Problem Solving",
  "Team Collaboration",
  "Analytical Thinking",
  "Time Management",
  "Pressure Resilience",
  "Arabic (Native)",
  "English (Fluent)",
]

const courses = [
  "Penetration Testing",
  "Advanced Software Security",
  "Intrusion Detection",
  "Network Security",
  "Digital Forensics",
]

const certifications = [
  { title: "Implementing End-to-End Security Controls for Cloud and AI Workloads", issuer: "Microsoft", date: "2026" },
  { title: "Intro to Splunk", issuer: "Splunk", date: "May 2026" },
  { title: "Deloitte Cybersecurity Job Simulation Certificate", issuer: "Deloitte", date: "Mar 2026" },
  { title: "Elite Security Operations Center (SOC)", issuer: "Tecforte", date: "Aug 2024" },
  { title: "CCNAv7: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy", date: "Aug 2024" },
  { title: "CCNAv7: Introduction to Networks", issuer: "Cisco Networking Academy", date: "Sep 2023" },
  { title: "International Battle of Hackers (IBOH)", issuer: "Asia Pacific University of Technology and Innovation (APU)", date: "Sep 2024" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I'm a cybersecurity graduate with a BSc (Hons) in Computer Science (Cyber Security) from Asia Pacific
                  University of Technology and Innovation, a dual degree with De Montfort University, UK.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I completed a 5-month SOC / IT Support internship at ABATS in Doha, where I triaged alerts in Cortex
                  XSOAR, documented incidents and root causes, and reduced endpoint risk through hardening and
                  least-privilege access.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Outside work I build security projects, from ransomware case studies to blockchain voting and
                  ML-based phishing detection. I'm based in Doha with a valid Qatar QID, immediately available and open
                  to relocation.
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                  Doha, Qatar &middot; Egyptian national
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  {keyExpertise.map((item) => (
                    <li key={item} className="flex items-start group">
                      <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Experience & Training</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {experience.map((job, i) => (
              <AnimatedSection key={job.title} delay={0.2 + i * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{job.org}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{job.date}</p>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => {
              const Icon = p.icon
              const card = (
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${p.repo ? "cursor-pointer" : ""}`}>
                  <CardHeader>
                    <CardTitle>{p.title}</CardTitle>
                    <CardDescription>{p.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-28 rounded-md mb-4 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-purple-600 dark:text-purple-300" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{p.body}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )

              return (
                <AnimatedCard key={p.title} delay={0.2 + i * 0.1}>
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`View ${p.title} on GitHub`}>
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Volunteering</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {volunteering.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.2 + i * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{item.org}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{item.date}</p>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillGroups.map((g, i) => {
              const c = colorClasses[g.color]
              return (
                <AnimatedSection key={g.title} direction="up" delay={0.2 + i * 0.1}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className={`w-8 h-8 rounded-full ${c.chip} flex items-center justify-center mr-2`}>
                          <span className={`${c.text} text-[10px] font-bold`}>{g.label}</span>
                        </span>
                        {g.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {g.items.map((s) => (
                          <Badge
                            key={s}
                            variant="secondary"
                            className={`justify-center py-2 ${c.hover} transition-colors`}
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Professional Skills & Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">BSc (Hons) Computer Science (Cyber Security)</h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      Asia Pacific University of Technology & Innovation, Malaysia
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Dual degree with De Montfort University, UK</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2023 - 2026</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Relevant Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((c) => (
                      <Badge key={c} variant="secondary">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <h4 className="font-semibold flex items-start">
                      <ShieldCheck className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-purple-600" />
                      {c.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {c.issuer} &middot; {c.date}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Doha, Qatar (Qatar Resident, QID)</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm immediately available for SOC Analyst, security and IT support roles in Qatar, and open to
                    relocation. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Shady Ehab Assad</h2>
              <p className="text-gray-400">Cybersecurity Analyst</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href={LINKEDIN}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={`mailto:${EMAIL}`}
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Shady Ehab Assad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
