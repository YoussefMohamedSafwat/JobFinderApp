import { useState, useEffect } from "react";
import axios from "axios";

const data =
    [
        {
            "employer_name": "Dice",
            "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
            "employer_website": null,
            "employer_company_type": "Information",
            "job_publisher": "LinkedIn",
            "job_id": "8yv3oA_2-UYAAAAAAAAAAA==",
            "job_employment_type": "CONTRACTOR",
            "job_title": "Web Developer - 6-month Contract - Houston Hybrid",
            "job_apply_link": "https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.5805,
            "job_description": "An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w.\n\nFull-Stack Web Developer\n\n6-month contract (likely extension)\n\nHouston - Hybrid working\n\nW2 - $70 - $75 p/h\n\nC2C - $80 - $90 p/h\n\nStarting 06/05\n\nTechnical requirements;\n\nJavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API\n\n(NO EMPLOYERS OR RECRUTIERS)\n\nOscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy.\n\nWeb Developer - 6-month Contract - Houston Hybrid",
            "job_is_remote": true,
            "job_posted_at_timestamp": 1685653019,
            "job_posted_at_datetime_utc": "2023-06-01T20:56:59.000Z",
            "job_city": "Houston",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 29.760427,
            "job_longitude": -95.369804,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-07-01T20:56:59.000Z",
            "job_offer_expiration_timestamp": 1688245019,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": null,
                "experience_mentioned": true,
                "experience_preferred": false
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": true,
                "degree_mentioned": false,
                "degree_preferred": false,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API"
                ],
                "Responsibilities": [
                    "Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors",
                    "This role is hybrid and you will be required to go in to the office 3 days p/w"
                ],
                "Benefits": [
                    "6-month contract (likely extension)",
                    "W2 - $70 - $75 p/h",
                    "C2C - $80 - $90 p/h"
                ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3",
            "job_naics_code": "519130",
            "job_naics_name": "Internet Publishing and Broadcasting and Web Search Portals"
        },
        {
            "employer_name": "Charles Schwab",
            "employer_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png",
            "employer_website": "http://www.schwab.com",
            "employer_company_type": "Finance",
            "job_publisher": "Schwab Jobs",
            "job_id": "G6qYxpAYyVsAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Software Web Developer",
            "job_apply_link": "https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.8104,
            "job_description": "Your Opportunity\n\nWe help our clients plan for their future and they are passionate about the tools and experiences we provide. We collaborate with user experience and design, business and technology partners across the enterprise to build software experiences our users’ are passionate about.\nWhat you are good at\n\nWebsite and Electronic Communications (Email, Push, SMS, etc) Templates designing, building, or maintaining. Using scripting or authoring languages, management tools, content creation tools, applications and digital media. Conferring with teams in resolving conflicts, prioritizing needs, developing content criteria, or choosing solutions. Directing or performing Website/Electronic Communications updates. Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types. Editing, writing, or designing Website content, and directing team members who produce content. Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups. Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction. Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements.\nWhat you have\n\nJob Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role. Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams.\n\nCharles Schwab & Company, Inc. seeks Software Web Developer in Austin, TX.",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1682726400,
            "job_posted_at_datetime_utc": "2023-04-29T00:00:00.000Z",
            "job_city": "Austin",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 30.267153,
            "job_longitude": -97.74306,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=G6qYxpAYyVsAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": null,
            "job_offer_expiration_timestamp": null,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": 60,
                "experience_mentioned": true,
                "experience_preferred": false
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": false,
                "degree_mentioned": true,
                "degree_preferred": false,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role",
                    "Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams"
                ],
                "Responsibilities": [
                    "Directing or performing Website/Electronic Communications updates",
                    "Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types",
                    "Editing, writing, or designing Website content, and directing team members who produce content",
                    "Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups",
                    "Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction",
                    "Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements"
                ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3",
            "job_naics_code": "523920",
            "job_naics_name": "Portfolio Management"
        },
        {
            "employer_name": "Crescens",
            "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i49TxmypL921gwSrXCigLk762K1u2Qu9yW0x&s=0",
            "employer_website": null,
            "employer_company_type": null,
            "job_publisher": "Recruit.net",
            "job_id": "tZ_zrHS5wN8AAAAAAAAAAA==",
            "job_employment_type": "CONTRACTOR",
            "job_title": "Web Developer",
            "job_apply_link": "https://www.recruit.net/job/web-developer-jobs/A8362DD6B42FD034",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.427,
            "job_description": "Job Description Job title : Web Developer Location : Remote Duration : 5 months Type: contract Job Description : Minimum of 7 years overall IT experience: including 5 years of web UI development and integration experience Responsible for detailed UI design, development/unit testing and integration of web and applications Responsible for Angular application development using web app development tools and frameworks Produce scalable and flexible, high-quality code that satisfies both the functional and non-functional requirements Identify technical issues & coordinate the resolution of these issues with extended team members from other applications Uses secure development best practices and design patterns Create or update design and systems documentation for developed or modified software component or application Create process and data flow diagrams for data movement capture Cross train team members for full knowledge coverage on team Analyze and translate business requirements to technical design Collaborate/communicate with project team and business users as required Support functional testing and performance testing Works with technical delivery lead on project activities Ensure assigned work is implemented within project schedules Strong Automotive OEM experience Solid understanding of various enterprise services and micro-service concepts Solid understanding of MicroService concepts and 12 Factor App design principles Experience with DevOps in a cloud environment a plus Experienced with waterfall, iterative, and agile methodologies. Required Skills: Demonstrated experience using UX design tools for facilitating the UI requrirement gathering and wire frame design Experience in desiging and developing modern web applications, particualry Single Page Applicaiton design. Professional working experience in Angular development with Typescript (minimum 3 years experience) Strong HTML5, CSS3 and Javascripts skills (minimum 5 years experience) Working experience in bootstrap and jquery Professional working experience with integrating REST services with Angular front-end. Working experience with version control tools like Git, SVN Deep knowledge of Angular practices and commonly used modules based on past work experience Extensive knowledge of javascript based frameworks to provide better yet faster UI experience for end users Experience in design and creating responsive web applications Experience in developing hybrid mobile applications using IONIC (Angular/Cordova) framework Proficient with UML models, and use them for communicating and documenting application designs Knowledge of core J2EE patterns Experience with continuous integration tools (e.g. SVN/git, Jira, Jenkins, Maven, etc.) Experience implementing authentication, authorization, Single Sign On, SAML, OAuth Experience in working with various web application servers (Websphere, Tomcat etc.) Strong analytical and debugging skills. Unique skills: Creating e2e test suites for angular components and running them with Web Testing Framework like Protractor, Cucumber or Other alternatives Open to learning new Technologies as required to meet business requirements Experience with application redesign and Angular framework upgrading from version 4.x to the later one Preferred: Experience in developing iOS and Android native mobile app Knowledge and experience with IBM Mobile First product Knowledge and experience with IBM Redhat Openshift product.",
            "job_is_remote": true,
            "job_posted_at_timestamp": 1685577600,
            "job_posted_at_datetime_utc": "2023-06-01T00:00:00.000Z",
            "job_city": "Texas City",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 29.383844,
            "job_longitude": -94.9027,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=tZ_zrHS5wN8AAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-07-01T00:00:00.000Z",
            "job_offer_expiration_timestamp": 1688169600,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": 84,
                "experience_mentioned": true,
                "experience_preferred": true
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": false,
                "degree_mentioned": false,
                "degree_preferred": false,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {},
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3"
        },
        {
            "employer_name": "Spurs Sports & Entertainment",
            "employer_logo": "https://firstteeaustin.org/wp-content/uploads/sites/64/2016/11/spurs-sports-and-entertainment-LOGO.jpg",
            "employer_website": "http://www.spurs.com",
            "employer_company_type": "Consulting",
            "job_publisher": "LinkedIn",
            "job_id": "UzcMt4Nb4qkAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Senior Web Developer",
            "job_apply_link": "https://www.linkedin.com/jobs/view/senior-web-developer-at-spurs-sports-entertainment-3617222882",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.5699,
            "job_description": "Overview\n\nWe are looking for Senior Web Developer to join our family!\n\nAt Spurs Sports & Entertainment (SS&E), we work in service of something bigger than ourselves, it’s so much more than the game or concert itself. It takes all members of our Spurs Family to harness the power of sports and entertainment to build moments that endure, memories that excite, and connections that strengthen our community.\n\nThis position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio. You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement.\n\nIn addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio. Candidates should be flexible to modern development practices, embrace emerging standards and technology while advocating for the best methodologies.\n\nOverview -NOTE: This position is not responsible for social media administration. This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments.\n\nDoes this sound like a fit? If so, we want to hear from you!\n\nIn every position, each employee is expected to: Demonstrate Alignment with SS&E’s Core Values and Mission, Collaborate with Internal/External Family Members and Demonstrate Ongoing Development.\n\nResponsibilities\n• Write clean, reusable, and accessible client-side component code for web applications.\n• Understand product requirement documentation/functional specifications and develop application based upon specifications\n• Collaborate with project partners to ensure all requirements are met\n• Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions.\n• Apply knowledge of modern web development to build and maintain responsive web pages\n• Be responsible for quality assurance testing for all digital platforms\n• Provide technical and developmental mentorship to junior developers\n• Other duties as assigned\n\nQualifications\n• 2-4 years’ experience developing responsive, web-based applications\n• 2+ years’ experience using version control - Git, GitHub, etc.\n• Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.)\n• Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.)\n• Familiarity and knowledge of API, JSON, XML, and other common data frameworks.\n• Experience working in content management systems\n• Ability to creatively problem solve, work independently and coordinate multiple tasks\n• Strong teamwork and interpersonal skills to handle acute and confidential situations and information\n\nPreferred Qualifications\n• Javascript framework experience a plus (Node.js, React.js, Next.js)\n• Previous experience in sports or event industries\n• Understanding of UX / UI / SEO principles\n\nEEO Statement\n• SS&E is an Equal Opportunity Employer*\n\nNothing contained in this job description is intended to be a contract of employment, nor does any information contained herein represent a guarantee of employment for a specific duration. Your employment with SS&E is “at will”, which means that either you or SS&E may terminate the relationship at any time.\n\nWe will ensure that individuals with disabilities are provided reasonable accommodation to participate in the job application or interview process, to perform essential job functions, and to receive other benefits and privileges of employment. Please contact us to request accommodation.",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1685525977,
            "job_posted_at_datetime_utc": "2023-05-31T09:39:37.000Z",
            "job_city": "San Antonio",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 29.42519,
            "job_longitude": -98.49459,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=UzcMt4Nb4qkAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-06-30T09:39:37.000Z",
            "job_offer_expiration_timestamp": 1688117977,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": 24,
                "experience_mentioned": true,
                "experience_preferred": true
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": true,
                "degree_mentioned": false,
                "degree_preferred": false,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments",
                    "2-4 years’ experience developing responsive, web-based applications",
                    "2+ years’ experience using version control - Git, GitHub, etc",
                    "Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.)",
                    "Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.)",
                    "Familiarity and knowledge of API, JSON, XML, and other common data frameworks",
                    "Experience working in content management systems",
                    "Ability to creatively problem solve, work independently and coordinate multiple tasks",
                    "Strong teamwork and interpersonal skills to handle acute and confidential situations and information"
                ],
                "Responsibilities": [
                    "This position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio",
                    "You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement",
                    "In addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio",
                    "Write clean, reusable, and accessible client-side component code for web applications",
                    "Understand product requirement documentation/functional specifications and develop application based upon specifications",
                    "Collaborate with project partners to ensure all requirements are met",
                    "Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions",
                    "Apply knowledge of modern web development to build and maintain responsive web pages",
                    "Be responsible for quality assurance testing for all digital platforms",
                    "Provide technical and developmental mentorship to junior developers",
                    "Other duties as assigned"
                ]
            },
            "job_job_title": "Senior",
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3",
            "job_naics_code": "541613",
            "job_naics_name": "Marketing Consulting Services"
        },
        {
            "employer_name": "Archetype Permanent Solutions",
            "employer_logo": null,
            "employer_website": null,
            "employer_company_type": null,
            "job_publisher": "Talent.com",
            "job_id": "JviQ_0mnlXoAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Web developer",
            "job_apply_link": "https://www.talent.com/view?id=d9389c3c7cd3",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.4979,
            "job_description": "Responsibilities :\n• Develop and maintain web applications using modern web technologies and programming languages\n• Work with cross-functional teams to understand business requirements and develop appropriate solutions\n• Write well-designed, testable, and efficient code using appropriate software development methodologies\n• Develop and maintain database schemas, queries, and stored procedures in SQL databases\n• Work with PLC logic and interface with web applications\n• Collaborate with front-end developers to integrate user-facing elements with server-side logic\n• Ensure the technical feasibility of UI / UX designs\n• Optimize web applications for maximum speed and scalability\n• Troubleshoot and debug web applications as necessary\n• Stay up-to-date with emerging trends and technologies in web development\n\nRequirements :\n• Bachelor's degree in Computer Science, Information Technology or related field\n• Proven experience in full stack web development with a focus on server-side technologies\n• Strong experience with Windows Server, SQL databases, and PLC logic\n• Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g. AngularJS, ReactJS)\n• Experience with web development frameworks such as ASP.NET , Node.js, Ruby on Rails, or Django\n• Knowledge of at least one server-side programming language such as C#, Java, or Python\n• Experience with version control systems such as Git\n• Strong analytical and problem-solving skills\n• Excellent communication and collaboration skills\n• Ability to work independently as well as in a team-oriented environment\n• Bilingual English and Korean\n\nIf you are an experienced Full Stack Web Developer with a passion for developing cutting-edge web applications and a desire to work with a dynamic team, please apply for this position.\n\nWe offer a competitive salary, benefits package, and opportunities for professional growth and advancement.\n\nPowered by JazzHR\n\nLast updated : 2023-06-01",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1685577600,
            "job_posted_at_datetime_utc": "2023-06-01T00:00:00.000Z",
            "job_city": "Austin",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 30.267153,
            "job_longitude": -97.74306,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=JviQ_0mnlXoAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-09-02T00:00:00.000Z",
            "job_offer_expiration_timestamp": 1693612800,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": null,
                "experience_mentioned": true,
                "experience_preferred": false
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": true,
                "degree_mentioned": true,
                "degree_preferred": true,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "Bachelor's degree in Computer Science, Information Technology or related field",
                    "Proven experience in full stack web development with a focus on server-side technologies",
                    "Strong experience with Windows Server, SQL databases, and PLC logic",
                    "Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g",
                    "AngularJS, ReactJS)",
                    "Experience with web development frameworks such as ASP",
                    "NET , Node.js, Ruby on Rails, or Django",
                    "Knowledge of at least one server-side programming language such as C#, Java, or Python",
                    "Experience with version control systems such as Git",
                    "Strong analytical and problem-solving skills",
                    "Excellent communication and collaboration skills",
                    "Ability to work independently as well as in a team-oriented environment",
                    "Bilingual English and Korean"
                ],
                "Responsibilities": [
                    "Develop and maintain web applications using modern web technologies and programming languages",
                    "Work with cross-functional teams to understand business requirements and develop appropriate solutions",
                    "Write well-designed, testable, and efficient code using appropriate software development methodologies",
                    "Develop and maintain database schemas, queries, and stored procedures in SQL databases",
                    "Work with PLC logic and interface with web applications",
                    "Collaborate with front-end developers to integrate user-facing elements with server-side logic",
                    "Ensure the technical feasibility of UI / UX designs",
                    "Optimize web applications for maximum speed and scalability",
                    "Troubleshoot and debug web applications as necessary",
                    "Stay up-to-date with emerging trends and technologies in web development"
                ],
                "Benefits": [
                    "We offer a competitive salary, benefits package, and opportunities for professional growth and advancement"
                ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3",
            "job_occupational_categories": [
                "15-1254.00"
            ]
        },
        {
            "employer_name": "NextAfter",
            "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LtpFk_Qn5msyHfLis8HxKBBhhxla_ZNtS7bV&s=0",
            "employer_website": null,
            "employer_company_type": null,
            "job_publisher": "LinkedIn",
            "job_id": "DCi-37AXFUgAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Front End Web Developer",
            "job_apply_link": "https://www.linkedin.com/jobs/view/front-end-web-developer-at-nextafter-3621796979",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.5721,
            "job_description": "At NextAfter, web developers are critical in allowing our nonprofit clients to escape the shackles of poorly designed software. Out-of-the-box software solutions rarely allow nonprofits the flexibility necessary to track every donor action or to make design tweaks to improve donor conversion. That is where you come in.\n\nIn this role, you will be charged with helping organizations make websites do things they were never designed to do. You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms.\n\nBecause NextAfter works solely with nonprofits to help them raise money and awareness for their causes, it’s also essential that every member on our team desires to positively impact the world around them and cares about the people they’re serving alongside and those at the organizations we help.\n\nThe Front End Web Developer supports NextAfter’s efforts to discover what drives donors to give through setting up A/B experiments and optimizing the tracking of various advertising efforts.\n\nEssential Duties and Responsibilities include the following. Other duties may be assigned.\n• Setting up A/B experiments utilizing VWO, Optimizely, and similiar platforms. This will involve writing Javascript, HTML, and CSS to override existing page layout and design.\n• Implementing enhanced tracking to monitor the fundraising and marketing efforts. This is normally done with platforms such as Google Tag Manager, Google Analytics, Facebook, Google Ads, and other advertising platforms.\n• Configuring marketing software such as Mailchimp, Hubspot, and similar tools to serve the needs of the nonprofit clients that we work with. This involves setting up templates, implementing tracking, and making configuration changes based upon requirements.\n• Working with client service specialists to devise strategies and tactics that improve our clients’ performance.\n\nQualifications and Skills:\n• Advanced knowledge of Javascript (ability to code without relying on outside libraries such as Vue.js, jQuery, React.js, etc.)\n• Experience with HTML and CSS to craft web pages\n• Knowledge of marketing platforms such as Hubspot, MailChimp, and Pardot\n• Experience implementing digital analytics platforms such as Google Analytics and Facebook\n• Knowledge of A/B testing and the associated platforms such as VWO\n\nEducation and Experience\n• Bachelor’s degree (or comparable experience in a similar role)\n• Training in web development either from a Bachelor’s degree or coding bootcamp",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1685569007,
            "job_posted_at_datetime_utc": "2023-05-31T21:36:47.000Z",
            "job_city": "Plano",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 33.019844,
            "job_longitude": -96.69888,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=DCi-37AXFUgAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-06-30T21:36:47.000Z",
            "job_offer_expiration_timestamp": 1688161007,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": null,
                "experience_mentioned": true,
                "experience_preferred": false
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": true,
                "degree_mentioned": true,
                "degree_preferred": false,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": 60000,
            "job_max_salary": 70000,
            "job_salary_currency": "USD",
            "job_salary_period": "YEAR",
            "job_highlights": {
                "Qualifications": [
                    "Advanced knowledge of Javascript (ability to code without relying on outside libraries such as Vue.js, jQuery, React.js, etc.)",
                    "Experience with HTML and CSS to craft web pages",
                    "Knowledge of marketing platforms such as Hubspot, MailChimp, and Pardot",
                    "Experience implementing digital analytics platforms such as Google Analytics and Facebook",
                    "Knowledge of A/B testing and the associated platforms such as VWO",
                    "Bachelor’s degree (or comparable experience in a similar role)",
                    "Training in web development either from a Bachelor’s degree or coding bootcamp"
                ],
                "Responsibilities": [
                    "In this role, you will be charged with helping organizations make websites do things they were never designed to do",
                    "You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms",
                    "Setting up A/B experiments utilizing VWO, Optimizely, and similiar platforms",
                    "This will involve writing Javascript, HTML, and CSS to override existing page layout and design",
                    "Implementing enhanced tracking to monitor the fundraising and marketing efforts",
                    "This is normally done with platforms such as Google Tag Manager, Google Analytics, Facebook, Google Ads, and other advertising platforms",
                    "Configuring marketing software such as Mailchimp, Hubspot, and similar tools to serve the needs of the nonprofit clients that we work with",
                    "This involves setting up templates, implementing tracking, and making configuration changes based upon requirements",
                    "Working with client service specialists to devise strategies and tactics that improve our clients’ performance"
                ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3"
        },
        {
            "employer_name": "PCS Software",
            "employer_logo": null,
            "employer_website": null,
            "employer_company_type": null,
            "job_publisher": "Learn4Good",
            "job_id": "RmMWVIxJKacAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Senior React Front-End Web Developer",
            "job_apply_link": "https://www.learn4good.com/jobs/sugar-land/texas/software_development/2355985733/e/",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.3939,
            "job_description": "Senior React Front-End Web Developer\n\nTargeted Start Date: ASAP\n\nLocation:\n\non site in the PCS Houston Regional Office (this is not a remote role, but has a flexible work schedule)\n\nImmediate Supervisor:\nDirector of Development\n\nCompany Background\n\nPCS Software, Inc. is an AI platform for the transportation logistics market space providing the trucking industry's most effective transportation management platform (TMP) to improve fleet management and delivery systems and increase profits for our customers. Through innovation and invention, our software individualizes work routines, consolidates workflows, and streamlines management controls to improve accountability, transparency, and eliminate costly and redundant manual processes.\n\nTrucking companies and freight brokers trust PCS to optimize their dispatch, accounting, and fleet operations. TL, LTL, Intermodal, and freight brokerage services use our TMP to automate operations, easily access information, and reduce inefficiencies to maximize sales and revenue. Founded in 1997 and headquartered in Houston, Texas, with regional offices now located across North America, PCS Software is the leading developer of hosted software solutions designed specifically for the ground transportation industry.\n\nJob\n\nDescription:\n\nSenior React Front-End Web Developer\n\nRole and\n\nResponsibilities Technical resource responsible for front-end development using web technologies which include, but are not limited to: HTML, CSS, JavaScript, and React/Redux.\n\nBuilding reusable components and front-end libraries for future use\n\nResponsible for translating designs and wireframes into high quality code\n\nOptimizing components for maximum performance across a vast array of web-capable devices and browse\n\nEnsure technical feasibility of UI/UX designs\n\nChampion requirement evaluation and impact analysis\n\nParticipate in code reviews and share best practices periodically\n\nContinuous integration with Jenkins CI\n\nParticipate in full SDLC, including meetings, interactive development, estimations, and design sessions\n\nWork in a collaborative environment with other developers and QA team members, product designers, product managers, and off-site 3rd party vendor team members\n\nDeliver code solutions built for performance, availability, and scalability optimizing applications for maximum speed and scalability\n\nCode and unit test functionality and/or integrations between systems\n\nSupport and troubleshoot issues (process and system), identify the root cause, and proactively implement sustainable corrective actions\n\nBuilding reusable code and libraries for future use\n\nStay current with the fast-changing landscape of browser-based application development\n\nMonitor the development of, evaluate, and recommend new technologies/approaches to the development pipeline\n\nMentor other developers (and interns occasionally) to increase the overall skill level of the team and quality of team output\n\nReview code produced by other developers for acceptance into the repository\n\nDevelop a thorough understanding of policies, procedures, and safety rules\n\nDuties may change;\nTeam Members may be required to perform other duties as assigned\n\nWork Experience Required\n\n3+ years of experience developing and deploying large-scale websites and website content or demonstrated skill level in previous positions\n\n3+ years of experience Design and developing application in React.\n\nJs/Redux.\n\n3+ years of experience Design and developing application in JavaScript technologies.\n\nExperience with a 500+ million revenue e-commerce retailer preferred\n\nProven understanding of design patterns, reference architectures, industry standards, broad technical knowledge, and architectural principles is necessary\n\nDemonstrated ability to provide and recommend innovative ideas with the skill to align projects with enterprise strategy is needed\n\nAbility to work efficiently and accurately under pressure, meet deadlines, present a professional demeanor, and work well independently is essential\n\nAbility to estimate financial impact of technical architecture alternatives and apply multiple technical solutions to business problems is vital\n\nTechnical Knowledge and Skills Required Experience building responsive websites using React.\n\nJS and Node.\n\nJS\n\nExperience in client-side scripting, libraries, and structures which include HTML5, CSS3, JavaScript, XML, and JSON\n\nUnderstanding of Content Stack and Content Stack integration with React.\n\nJs\n\nThorough understanding of React.\n\nJs and its core principles\n\nExperience with popular React.js workflows (such as Flux or Redux)\n\nStrong proficiency in JavaScript, including DOM manipulation and the JavaScript object model\n\nExperience with common front-end development tools such as Babel, Webpack, NPM, etc.\n\nExperience writing unit tests for Java Script\n\nExperience with Responsive Web Design\n\nKnowledge of modern authorization mechanisms, such as JSON Web Token\n\nFamiliarity with modern front-end build pipelines and tools\n\nAbility to understand business requirements and translate them into technical requirements\n\nA knack for…",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1685404800,
            "job_posted_at_datetime_utc": "2023-05-30T00:00:00.000Z",
            "job_city": "Sugar Land",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 29.598444,
            "job_longitude": -95.62255,
            "job_benefits": null,
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=RmMWVIxJKacAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-11-29T00:00:00.000Z",
            "job_offer_expiration_timestamp": 1701216000,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": 36,
                "experience_mentioned": true,
                "experience_preferred": true
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": false,
                "degree_mentioned": true,
                "degree_preferred": false,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "3+ years of experience developing and deploying large-scale websites and website content or demonstrated skill level in previous positions",
                    "3+ years of experience Design and developing application in JavaScript technologies",
                    "Proven understanding of design patterns, reference architectures, industry standards, broad technical knowledge, and architectural principles is necessary",
                    "Demonstrated ability to provide and recommend innovative ideas with the skill to align projects with enterprise strategy is needed",
                    "Ability to work efficiently and accurately under pressure, meet deadlines, present a professional demeanor, and work well independently is essential",
                    "Ability to estimate financial impact of technical architecture alternatives and apply multiple technical solutions to business problems is vital",
                    "Technical Knowledge and Skills Required Experience building responsive websites using React",
                    "Experience in client-side scripting, libraries, and structures which include HTML5, CSS3, JavaScript, XML, and JSON",
                    "Understanding of Content Stack and Content Stack integration with React",
                    "Thorough understanding of React",
                    "Js and its core principles",
                    "Experience with popular React.js workflows (such as Flux or Redux)",
                    "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
                    "Experience with common front-end development tools such as Babel, Webpack, NPM, etc",
                    "Experience writing unit tests for Java Script",
                    "Experience with Responsive Web Design",
                    "Knowledge of modern authorization mechanisms, such as JSON Web Token",
                    "Familiarity with modern front-end build pipelines and tools",
                    "Ability to understand business requirements and translate them into technical requirements"
                ],
                "Responsibilities": [
                    "Trucking companies and freight brokers trust PCS to optimize their dispatch, accounting, and fleet operations",
                    "Responsibilities Technical resource responsible for front-end development using web technologies which include, but are not limited to: HTML, CSS, JavaScript, and React/Redux",
                    "Building reusable components and front-end libraries for future use",
                    "Responsible for translating designs and wireframes into high quality code",
                    "Optimizing components for maximum performance across a vast array of web-capable devices and browse",
                    "Ensure technical feasibility of UI/UX designs",
                    "Champion requirement evaluation and impact analysis",
                    "Participate in code reviews and share best practices periodically",
                    "Continuous integration with Jenkins CI",
                    "Participate in full SDLC, including meetings, interactive development, estimations, and design sessions",
                    "Work in a collaborative environment with other developers and QA team members, product designers, product managers, and off-site 3rd party vendor team members",
                    "Deliver code solutions built for performance, availability, and scalability optimizing applications for maximum speed and scalability",
                    "Code and unit test functionality and/or integrations between systems",
                    "Support and troubleshoot issues (process and system), identify the root cause, and proactively implement sustainable corrective actions",
                    "Stay current with the fast-changing landscape of browser-based application development",
                    "Monitor the development of, evaluate, and recommend new technologies/approaches to the development pipeline",
                    "Mentor other developers (and interns occasionally) to increase the overall skill level of the team and quality of team output",
                    "Review code produced by other developers for acceptance into the repository",
                    "Develop a thorough understanding of policies, procedures, and safety rules",
                    "Team Members may be required to perform other duties as assigned"
                ]
            },
            "job_job_title": "Senior",
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3",
            "job_occupational_categories": [
                "React.js",
                "Front End Developer",
                "Javascript",
                "Software Engineer"
            ]
        },
        {
            "employer_name": "Connecttel, Inc",
            "employer_logo": "https://logoimagesv2.id-visitors.com/0/b/5/4/4/f/0b544fc53a4c40dfa112c91442f219d6.png",
            "employer_website": null,
            "employer_company_type": null,
            "job_publisher": "Dice",
            "job_id": "uSveAal9k1IAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Front-End Developer (JavaScript, HTML, CSS)",
            "job_apply_link": "https://www.dice.com/job-detail/35181ab6-1420-4e02-896c-2c506f1cb5e2",
            "job_apply_is_direct": true,
            "job_apply_quality_score": 0.6792,
            "job_description": "Front-End Developer\nAustin, TX (Relocation and immigration visa sponsorship is not currently available.)\nFull time\n\nAre you an amazing developer ready to work in a collaborative team? Do you want to have your voice heard in a small but stable and profitable company? Do you enjoy thinking creatively and constantly learning? Most importantly, are you a dog lover? Then you might be just who we're looking for! Hiring developers to help us create new and exciting web-based user interfaces.\n\nWhat you'll be doing:\nEngineering lightweight UI components that scale well over time and meet modern web standards\nTransforming wireframes from conception to reality while collaborating with a team\nBuilding software used by some of the largest financial institutions in the world\nContinually improving our UI code base by contributing to code reviews and routine maintenance\nYou: Have a bachelor's degree in computer science or a related field\nLove working in visual mediums and UI/UX\nHave experience with object-oriented programming\nAre a self-starter who takes initiative and helps drive the product design\nFeel comfortable working in a non-structured, agile development environment with short release cycles\nAre interested in financial technology\nMust love dogs\nOptional but helpful skills:\n\n3 years of experience\nFamiliarity with JavaScript, HTML, CSS\nFamiliarity with any JavaScript Framework\nFamiliarity with a version control system\nExperience interacting with a web service API\nExperience with website design\n\nWhat we offer:\nA highly competitive salary\nCompany-paid family health, vision, and dental insurance\n401K with employer matching\nA fun and relaxed environment in a small but profitable and stable company\nOpportunity to learn about the financial services industry in the US, UK, Ireland, Canada, Europe and Asia Opportunity for international travel if desired",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1675675121,
            "job_posted_at_datetime_utc": "2023-02-06T09:18:41.000Z",
            "job_city": "Austin",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 30.267153,
            "job_longitude": -97.74306,
            "job_benefits": [
                "health_insurance",
                "retirement_savings",
                "dental_coverage"
            ],
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=uSveAal9k1IAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-07-01T09:20:01.000Z",
            "job_offer_expiration_timestamp": 1688203201,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": 36,
                "experience_mentioned": true,
                "experience_preferred": false
            },
            "job_required_skills": [
                "JavaScript",
                "HTML",
                "CSS",
                "Frontend"
            ],
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": false,
                "degree_mentioned": true,
                "degree_preferred": true,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "You: Have a bachelor's degree in computer science or a related field",
                    "Love working in visual mediums and UI/UX",
                    "Have experience with object-oriented programming",
                    "Are a self-starter who takes initiative and helps drive the product design",
                    "Feel comfortable working in a non-structured, agile development environment with short release cycles",
                    "Are interested in financial technology",
                    "3 years of experience",
                    "Familiarity with JavaScript, HTML, CSS",
                    "Familiarity with any JavaScript Framework",
                    "Familiarity with a version control system",
                    "Experience interacting with a web service API",
                    "Experience with website design"
                ],
                "Responsibilities": [
                    "Engineering lightweight UI components that scale well over time and meet modern web standards",
                    "Transforming wireframes from conception to reality while collaborating with a team",
                    "Building software used by some of the largest financial institutions in the world",
                    "Continually improving our UI code base by contributing to code reviews and routine maintenance"
                ],
                "Benefits": [
                    "A highly competitive salary",
                    "Company-paid family health, vision, and dental insurance",
                    "401K with employer matching"
                ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3"
        },
        {
            "employer_name": "Xerox",
            "employer_logo": "https://www.xerox.com/assets/images/logos/xerox.svg",
            "employer_website": "http://www.xerox.com",
            "employer_company_type": "Manufacturing",
            "job_publisher": "Learn4Good",
            "job_id": "9gZFCv-muG4AAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Junior Full Stack Web Developer",
            "job_apply_link": "https://www.learn4good.com/jobs/san-antonio/texas/info_technology/2356869602/e/",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.4071,
            "job_description": "Junior Full Stack Web Developer\n\nGeneral Information\n\nPress space or enter keys to toggle section visibility\n\nCity\n\nSan Antonio\n\nState/Province\n\nTexas\n\nCountry\n\nUnited States\n\nDepartment\n\nSales Support\n\nDate\n\nTuesday, March 7, 2023\n\nWorking time\n\nFull-time\n\n#\n\n20022261\n\nJob Level\n\nIndividual Contributor\n\nJob Type\n\nExperienced\n\nJob Field\n\nSales Support\n\nSeniority Level\n\nAssociate\n\nDescription & Requirement\n\nPress space or enter keys to toggle section visibility\n\nAbout Xerox Holdings Corporation\n\nFor more than 100 years, Xerox has continually redefined the workplace experience. Harnessing our leadership position in office and production print technology, we’ve expanded into software and services to sustainably power today’s workforce. From the office to industrial environments, our differentiated business solutions and financial services are designed to make every day work better for clients — no matter where that work is being done.\n\nToday, Xerox scientists and engineers are continuing our legacy of innovation with disruptive technologies in digital transformation, augmented reality, robotic process automation, additive manufacturing, Industrial Internet of Things and cleantech. Learn more at and explore our commitment to diversity and inclusion. ()\n\nDahill Office Technology Corp., A Xerox Company, and part of Xerox Business Solutions Southwest (XBSSW) Team is a leading provider of business process automation solutions. We are seeking a successful Junior Full Stack Web Developer looking to take the next step in their career.\n\nWhat you will do:\n\n• Develop and support in-house sales tools using C#, .NET Core, Vue.js, Kendo.js, CSS, and No\n\nSQL technologies / libraries to support the entire workflow automation for sales processing and product delivery.\n\n• Develop and support integration to existing systems (Salesforce and e-Automate) through API interface.\n\n• Develop and support web application interfaces, mobile apps, MS SQL database table manipulation scripts, data retrieval for reporting and database trigger implementations as needed.\n\n• Provide back-end support for the suite of in-house systems developed by the XBSSW team.\n\n• Support sales teams to help manage their sales pipeline of 30+ opportunities and enter all details into CRM.\n\nHow you will do this:\n\n• By having entry level experience implementing and maintaining web applications.\n\n• By having entry level experience with full stack development that includes Applications, Databases and website infrastructure.\n\n• Work in a Agile development methodology environment within a team setting.\n\n• To be relative proficient in the technologies mentioned and show a strong software development.\n\nPreferred Qualifications:\n\n• Bachelor’s degree in related business or technology field.\n\n• Minimum of 3 years of proven success in full stack development is preferred.\n\n• Ability to work independently.\n\nWhat We Offer:\n\n• Competitive compensation.\n\n• Comprehensive benefits offerings (including medical, dental, vision and life insurance).\n\n• Retirement Plan.\n\n• Paid holidays, personal choice days and paid time off.\n\n• A culture that offers flexibility and a healthy work-life balance.\n\n#LI-AA1\n\nXerox is an Equal Opportunity Employer and considers applicants for all positions without regard to race, color, creed, religion, ancestry, national origin, age, gender identity, sex, marital status, sexual orientation, physical or mental disability, use of a guide dog or service animal, military/veteran status, citizenship status, basis of genetic information, or any other group protected by law. Learn more atwww.xerox.comand explore our commitment to diversity and inclusion:\n\nwith disabilities who need a reasonable accommodation to apply or compete for employment with Xerox may request such accommodation(s) by sending an e-mail to Xerox Be sure to include your name, the job you are interested in, and the accommodation you are seeking.",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1685404800,
            "job_posted_at_datetime_utc": "2023-05-30T00:00:00.000Z",
            "job_city": "San Antonio",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 29.42519,
            "job_longitude": -98.49459,
            "job_benefits": [
                "retirement_savings",
                "health_insurance",
                "dental_coverage",
                "paid_time_off"
            ],
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=9gZFCv-muG4AAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": "2023-11-29T00:00:00.000Z",
            "job_offer_expiration_timestamp": 1701216000,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": null,
                "experience_mentioned": true,
                "experience_preferred": false
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": false,
                "degree_mentioned": true,
                "degree_preferred": true,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "By having entry level experience implementing and maintaining web applications",
                    "By having entry level experience with full stack development that includes Applications, Databases and website infrastructure",
                    "Work in a Agile development methodology environment within a team setting",
                    "To be relative proficient in the technologies mentioned and show a strong software development"
                ],
                "Responsibilities": [
                    "Press space or enter keys to toggle section visibility",
                    "Develop and support in-house sales tools using C#, .NET Core, Vue.js, Kendo.js, CSS, and No",
                    "SQL technologies / libraries to support the entire workflow automation for sales processing and product delivery",
                    "Develop and support integration to existing systems (Salesforce and e-Automate) through API interface",
                    "Develop and support web application interfaces, mobile apps, MS SQL database table manipulation scripts, data retrieval for reporting and database trigger implementations as needed",
                    "Provide back-end support for the suite of in-house systems developed by the XBSSW team",
                    "Support sales teams to help manage their sales pipeline of 30+ opportunities and enter all details into CRM"
                ],
                "Benefits": [
                    "Competitive compensation",
                    "Comprehensive benefits offerings (including medical, dental, vision and life insurance)",
                    "Retirement Plan",
                    "Paid holidays, personal choice days and paid time off",
                    "A culture that offers flexibility and a healthy work-life balance"
                ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113300",
            "job_onet_job_zone": "4",
            "job_occupational_categories": [
                "Computer Science"
            ],
            "job_naics_code": "334111",
            "job_naics_name": "Electronic Computer Manufacturing"
        },
        {
            "employer_name": "AT&T",
            "employer_logo": "https://www.att.com/shopcms/media/att/2014/global/social-logo/logo-att-color-trans-200x200.png",
            "employer_website": "https://www.att.com",
            "employer_company_type": "Information",
            "job_publisher": "ATT Jobs",
            "job_id": "1lr1uWOWY3MAAAAAAAAAAA==",
            "job_employment_type": "FULLTIME",
            "job_title": "Front End Developer",
            "job_apply_link": "https://www.att.jobs/job/dallas/front-end-developer/117/49435018000",
            "job_apply_is_direct": false,
            "job_apply_quality_score": 0.8233,
            "job_description": "About the Company\n\nJoin AT&T and reimagine the communications and technologies that connect the world. Our Consumer Technology eXperience team is delivering innovative and reliable technology solutions to power differentiated, simplified customer experiences. Bring your bold ideas and fearless risk-taking to redefine connectivity and transform how the world shares stories and experiences that matter. When you step into a career with AT&T, you won’t just imagine the future-you’ll create it.\n\nAbout the Team\n\nAT&T Digital Platform Product team is looking for a Professional-Software Engineer (FE heavy) who is passionate about the eCommerce industry and has analytical and multi-task abilities to thrive in a fast-paced environment. As a Lead Engineer, you will be responsible for the design and development of various initiatives for AT&T’s customer and employee digital experience across our consumer distribution channels. You will lead the software product development life cycle from inception to production launch and post-production support. You must possess strong technical background to ensure you are designing modular & scalable web components, you must have experience leading large cross-organizational software development projects and have a well-rounded technical background in current web and micro-service technologies.\n\nAbout the Job\n\nPosition Overview\n\nAT&T Digital Platform Product team is looking for a Professional-Software Engineer (FE heavy) who is passionate about the eCommerce industry and has analytical and multi-task abilities to thrive in a fast-paced environment. As a Lead Engineer, you will be responsible for the design and development of various initiatives for AT&T’s customer and employee digital experience across our consumer distribution channels. You will lead the software product development life cycle from inception to production launch and post-production support. You must possess strong technical background to ensure you are designing modular & scalable web components, you must have experience leading large cross-organizational software development projects and have a well-rounded technical background in current web and micro-service technologies.\n\nResponsibilities and Day-to-Day View\n\nResponsibilities\n\n• Hands-on Design and development of cross-functional, multi-platform application systems\n\n• Track record of projects completed on time – you are a flawless executor, not a procrastinator.\n\n• You find satisfaction in a job well done and want to solve head-scratching challenges.\n\n• Experience with all phases of the software development life cycle, best practices and Agile Software Development.\n\n• Work with Leads, Engineers, Architects, Product Managers, and Business stakeholders to identify technical and functional needs of systems based on priority.\n\n• Writing great quality code with a relentless passion for automated testing and validation.\n\n• Enforce company policies in the areas of development methodology, architecture, security, change and configuration management and compliance.\n\n• Perform complex engineering activities for web performance tuning, monitoring, deployment and production support.\n\nQualifications\n\nRequired Qualifications\n\n• 2+ years related experience\n\n• 2+ years in web markup, including REACT, HTML5, CSS3 and javascript\n\n• 2+ years of experience with client-side scripting and javascript frameworks such as jquery and React\n\n• 2+ years of experience in server-side rendering using NextJs\n\n• Proficient understanding of javascript pre-processing and packaging frameworks such as babel and webpack\n\n• Good understanding of Java, Nodejs, microservice and some full stack experience. While you’ll be spending most of your time in the V of MVC, we’ll occasionally need help further back in the stack\n\n• Good understanding of SEO principles including web analytics and ensuring that application will adhere to them\n\n• Excellent communication skills and experience in collaborative environments\n\n• The desire to be continually learning about emerging technologies/industry trends\n\nPreferred Qualifications\n\n• Preferred Bachelors of Science degree in Computer Engineering, Computer Science, Applied Science, Electrical Engineering, or Math; Developer nanodegree\n\n• 2+ years of understanding of CSS pre-processing platforms, such as LESS and SASS\n\n• 2+ years of experience in build and CICD technologies: GitHub, Maven, Jenkins, Sonar\n\n• 2+ years of experience in Unit and Function testing using Junit, Spock, Mockito/JMock, Selenium, Cucumber, SoapUI or Postman\n\n• Experience working within Agile/Scrum/Kanban development team\n\n• Familiarity with HTML5, JavaScript frameworks, and CSS3\n\n• Excellent written and verbal communication skills with demonstrated ability to present complex technical information in a clear manner to peers, developers, and leaders\n\nTechnical Skills\n\nReactJs, NodeJs, Html, Java, Nodejs, microservices, cloud, REST services, NoSql technologies (Cassandra/MongoDb), knowledge of Redis/Hazelcast, Git, Jira, Jenkins\n\nOur Professional-Software Engineers earn between $116,700 - $175,100. Not to mention all the other amazing rewards that working at AT&T offers. Individual starting salary within this range may depend on geography, experience, expertise, and education/training.\n\nJoining our team comes with amazing perks and benefits:\n\n· Medical/Dental/Vision coverage\n\n· 401(k) plan\n\n· Tuition reimbursement program\n\n· Paid Time Off and Holidays (based on date of hire, at least 23 days of vacation each year and 9 company-designated holidays)\n\n· Paid Parental Leave\n\n· Paid Caregiver Leave\n\n· Additional sick leave beyond what state and local law require may be available but is unprotected\n\n· Adoption Reimbursement\n\n· Disability Benefits (short term and long term)\n\n· Life and Accidental Death Insurance\n\n· Supplemental benefit programs: critical illness/accident hospital indemnity/group legal\n\n· Employee Assistance Programs (EAP)\n\n· Extensive employee wellness programs\n\n· Employee discounts up to 50% off on eligible AT&T mobility plans and accessories, AT&T internet (and fiber where available) and AT&T phone\n\nAT&T is leading the way to the future – for customers, businesses and the industry. We're developing new technologies to make it easier for our customers to stay connected to their world. Together, we’ve built a premier integrated communications and entertainment company and an amazing place to work and grow. Team up with industry innovators every time you walk into work, creating the world you always imagined. Ready to #transformdigital with us? Apply now!",
            "job_is_remote": false,
            "job_posted_at_timestamp": 1685145600,
            "job_posted_at_datetime_utc": "2023-05-27T00:00:00.000Z",
            "job_city": "Dallas",
            "job_state": "TX",
            "job_country": "US",
            "job_latitude": 32.776665,
            "job_longitude": -96.79699,
            "job_benefits": [
                "retirement_savings",
                "health_insurance",
                "dental_coverage",
                "paid_time_off"
            ],
            "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=1lr1uWOWY3MAAAAAAAAAAA%3D%3D",
            "job_offer_expiration_datetime_utc": null,
            "job_offer_expiration_timestamp": null,
            "job_required_experience": {
                "no_experience_required": false,
                "required_experience_in_months": 24,
                "experience_mentioned": true,
                "experience_preferred": false
            },
            "job_required_skills": null,
            "job_required_education": {
                "postgraduate_degree": false,
                "professional_certification": false,
                "high_school": false,
                "associates_degree": false,
                "bachelors_degree": false,
                "degree_mentioned": true,
                "degree_preferred": true,
                "professional_certification_mentioned": false
            },
            "job_experience_in_place_of_education": false,
            "job_min_salary": null,
            "job_max_salary": null,
            "job_salary_currency": null,
            "job_salary_period": null,
            "job_highlights": {
                "Qualifications": [
                    "You must possess strong technical background to ensure you are designing modular & scalable web components, you must have experience leading large cross-organizational software development projects and have a well-rounded technical background in current web and micro-service technologies",
                    "2+ years related experience",
                    "2+ years in web markup, including REACT, HTML5, CSS3 and javascript",
                    "2+ years of experience with client-side scripting and javascript frameworks such as jquery and React",
                    "2+ years of experience in server-side rendering using NextJs",
                    "Proficient understanding of javascript pre-processing and packaging frameworks such as babel and webpack",
                    "Good understanding of Java, Nodejs, microservice and some full stack experience",
                    "Good understanding of SEO principles including web analytics and ensuring that application will adhere to them",
                    "Excellent communication skills and experience in collaborative environments",
                    "The desire to be continually learning about emerging technologies/industry trends",
                    "ReactJs, NodeJs, Html, Java, Nodejs, microservices, cloud, REST services, NoSql technologies (Cassandra/MongoDb), knowledge of Redis/Hazelcast, Git, Jira, Jenkins"
                ],
                "Responsibilities": [
                    "As a Lead Engineer, you will be responsible for the design and development of various initiatives for AT&T’s customer and employee digital experience across our consumer distribution channels",
                    "You will lead the software product development life cycle from inception to production launch and post-production support",
                    "Hands-on Design and development of cross-functional, multi-platform application systems",
                    "Track record of projects completed on time – you are a flawless executor, not a procrastinator",
                    "You find satisfaction in a job well done and want to solve head-scratching challenges",
                    "Experience with all phases of the software development life cycle, best practices and Agile Software Development",
                    "Work with Leads, Engineers, Architects, Product Managers, and Business stakeholders to identify technical and functional needs of systems based on priority",
                    "Writing great quality code with a relentless passion for automated testing and validation",
                    "Enforce company policies in the areas of development methodology, architecture, security, change and configuration management and compliance",
                    "Perform complex engineering activities for web performance tuning, monitoring, deployment and production support"
                ],
                "Benefits": [
                    "Our Professional-Software Engineers earn between $116,700 - $175,100",
                    "Individual starting salary within this range may depend on geography, experience, expertise, and education/training",
                    "Medical/Dental/Vision coverage",
                    "401(k) plan",
                    "Tuition reimbursement program",
                    "Paid Time Off and Holidays (based on date of hire, at least 23 days of vacation each year and 9 company-designated holidays)",
                    "Paid Parental Leave",
                    "Paid Caregiver Leave",
                    "Additional sick leave beyond what state and local law require may be available but is unprotected",
                    "Adoption Reimbursement",
                    "Disability Benefits (short term and long term)",
                    "Life and Accidental Death Insurance",
                    "Supplemental benefit programs: critical illness/accident hospital indemnity/group legal",
                    "Employee Assistance Programs (EAP)",
                    "Extensive employee wellness programs",
                    "Employee discounts up to 50% off on eligible AT&T mobility plans and accessories, AT&T internet (and fiber where available) and AT&T phone"
                ]
            },
            "job_job_title": null,
            "job_posting_language": "en",
            "job_onet_soc": "15113400",
            "job_onet_job_zone": "3",
            "job_naics_code": "517110",
            "job_naics_name": "Wired Telecommunications Carriers"
        }
    ];
    


const useFetch = () => {
//     const [data, setData] = useState([]);
//     const [isloading, SetLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const options = {
//         method: 'GET',
//         url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//         params: {...query },
//         headers: {
//           'X-RapidAPI-Key': '47ffbcbee0mshed526b27ea815ebp1dd884jsne7b91033e2de',
//           'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//         }
//       };
    
//     const fetchData = async () => {
//         SetLoading(true);

//         try {

//             const response = await axios.request(options);

//             setData(response.data.data);
//             SetLoading(false);

//         } catch (error) {

//             setError(error);
//             alert("There is an error");
            
//         } finally {
//             SetLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const refetch = () => {
//         SetLoading(true);
//         fetchData();
//     }

    //     return { data, isloading, error, refetch };
    return data;
 }

export default useFetch;