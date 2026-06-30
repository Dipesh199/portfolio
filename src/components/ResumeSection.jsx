import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiCode, FiAward } from 'react-icons/fi';

const ResumeSection = () => {
  const experiences = [
    {
      role: 'Software Developer (Fulltime)',
      company: 'Green-Mobility-Solutions GmbH',
      date: 'Feb 2025 - Feb 2026',
      location: 'Darmstadt, Deutschland',
      achievements: [
        'Created stable architecture planning to manage app with hardware and backend.',
        'Built Android Automotive OS applications in Kotlin/Java for Audi AG, production-grade software compatible with Audi’s HMI deployed in HARMAN Ignite Store.',
        'Developed mobile features interfacing with EV charging station hardware and real-time parking reservation systems via REST APIs, backend with CakePhp and frontend with Vue.js.',
        'Reviewed codes, released pipelines and mentored junior developers in an agile Scrum team.',
        'Applied Clean Architecture and MVVM for a scalable codebase and handled real time data flows with Coroutines and Flow.'
      ]
    },
    {
      role: 'Android Developer (Internship + Working student)',
      company: 'CareSocial GmbH',
      date: 'July 2022 - Feb 2025',
      location: 'Dresden, Deutschland',
      achievements: [
        'Core contributor on CareSmart2 (a healthcare Android app used in clinical environments) built with Kotlin, Jetpack Compose and XML layouts, KMP for cross platform development.',
        'Implemented high-performance SDK features using Jetpack Compose with Hilt/Koin DI, reactive programming (RxJava/Flow), and MVVM, Clean architecture.',
        'Owned bug triage, debugging, and production release pipelines - directly responsible for app stability in a live clinical setting.',
        'Maintained backend with Symfony for reliable end to end functionality.'
      ]
    },
    {
      role: 'Android Developer',
      company: 'Adsum Originator LLP',
      date: 'July 2020 - March 2022',
      location: 'Gujarat, India',
      achievements: [
        'Architected Android applications from scratch using Kotlin Multiplatform and Jetpack Compose with MVVM/MVP/MVC patterns and dependency injection.',
        'Built Ayursh (Home Ayurveda Healthcare Platform) and Lockars (UK based shopping & shared parcel locker app).',
        'Integrated core Android SDK components: Navigation, Retrofit, RxJava/RxKotlin, and lifecycle-aware architecture components.',
        'Implemented automated testing pipelines with Appium, Cucumber, Selenium, and TestNG to enforce code quality and regression coverage.'
      ]
    },
    {
      role: 'Python Developer (Internship) - Machine Learning',
      company: 'Kintu Designs Pvt. Ltd.',
      date: 'Dec 2019 - May 2020',
      location: 'Gujarat, India',
      achievements: [
        'Built ML models for text recognition and sentence formation using TensorFlow, Keras, NumPy, Pandas, and NLP pipelines.',
        'Used Pickle for efficient serialization and direct reuse of trained model state.'
      ]
    },
    {
      role: 'Android Developer',
      company: 'KARTUM Infotech',
      date: 'May 2019 - June 2019',
      location: 'Gujarat, India',
      achievements: [
        'Upload applications to the Google Play Store.',
        'Build applications that interact with RESTful services and backends.'
      ]
    },
    {
      role: 'Freelancer Android Developer',
      company: 'Freelancer',
      date: 'May 2018 - April 2019',
      location: 'Remote',
      achievements: [
        'Delivered Android apps from scratch for US and UK clients — full ownership from UI design to backend integration and release.',
        'Managed client communication, requirements gathering, and iterative delivery in a fully remote, self-directed setup.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master Automotive Software Engineering',
      school: 'TU Chemnitz, Germany',
      date: '2021 - 2025',
      details: 'Thesis: Comparative evaluation of AI models for the automated assessment of learning diaries in education at VelpTEC GmbH'
    },
    {
      degree: 'B.Tech. (Information Technology)',
      school: 'Uka Tarsadia University, India',
      date: '2016 - 2020',
      details: 'Thesis: Automatic questions - answers generation system with natural language processing'
    }
  ];

  const skills = [
    { category: 'Mobile (Primary)', items: 'Kotlin, Java, Android SDK, Jetpack Compose, XML layouts, Android Automotive OS' },
    { category: 'Architecture', items: 'MVVM, MVP (MVI), MVC, Clean Architecture, Dependency Injection (Hilt, Dagger, Koin)' },
    { category: 'Reactive & Async', items: 'RxJava, RxKotlin, Coroutines, LiveData, Flow' },
    { category: 'Networking', items: 'Retrofit, REST APIs, WebSockets (real-time data streaming), OkHttp' },
    { category: 'Databases', items: 'Room, SQLite, MySQL, PostgreSQL, Oracle' },
    { category: 'Frontend / Backend', items: 'Vue.js, React.js, HTML/CSS, CakePHP, Symfony, Node.js' },
    { category: 'Testing', items: 'JUnit, Espresso, MockK, Instrumentation Tests, TDD' },
    { category: 'DevOps & Tooling', items: 'Git, Jenkins, Docker, Jira, Android Studio, IntelliJ' },
    { category: 'AI / ML', items: 'Python, TensorFlow, Keras, NumPy, Pandas, NLP' }
  ];

  return (
    <section id="cv" className="py-24 bg-[#0a0a0c] relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-blue-400">
            Curriculum Vitae
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            PROFESSIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Over 5 years of experience architecting and developing robust Android applications and scalable cross-platform solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Column - Experience */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                <FiBriefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-12 border-l-2 border-white/10 pl-6 md:pl-10 ml-4">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[35px] md:-left-[51px] top-2 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-blue-500" />
                  
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.07] transition-colors">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-gray-300 whitespace-nowrap">
                          {exp.date}
                        </span>
                        <p className="text-sm text-gray-500 mt-2">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mt-6">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-400 text-sm md:text-base leading-relaxed">
                          <span className="text-blue-500 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side Column - Skills & Education */}
          <div className="space-y-12">
            {/* Skills */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                  <FiCode size={24} />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="flex flex-col gap-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 bg-white/5 border border-white/10 rounded-2xl"
                  >
                    <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2">{skill.category}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{skill.items}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
                  <FiBookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-3xl"
                  >
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-400 font-medium text-sm mb-3">{edu.school}</p>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{edu.date}</span>
                    <p className="mt-4 text-sm text-gray-400 italic border-l-2 border-purple-500/30 pl-3">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages & Others */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                  <FiAward size={24} />
                </div>
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
                  <h4 className="font-bold text-white mb-1">English</h4>
                  <p className="text-xs text-orange-400 uppercase tracking-widest">Business Fluent</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center">
                  <h4 className="font-bold text-white mb-1">German</h4>
                  <p className="text-xs text-orange-400 uppercase tracking-widest">Conversational</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center col-span-2">
                  <h4 className="font-bold text-white mb-1">Hindi</h4>
                  <p className="text-xs text-orange-400 uppercase tracking-widest">Native</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
