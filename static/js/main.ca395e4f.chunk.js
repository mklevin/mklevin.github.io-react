(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"info":{"name":"Your Name","email":"yourname@email.com","links":[{"name":"LinkedIn","url":"https://www.linkedin.com/in/yourname"},{"name":"Instagram","url":"https://instagram.com/yourname"},{"name":"Neopets","url":"http://www.neopets.com/userlookup.phtml?user=plankton62091"},{"name":"Download"},{"name":"Fork this site!","url":"https://github.com/mklevin/react-resume"}]},"experience":[{"company":"Company with the Jobs","jobTitle":"Job Haver","location":"Jobtown, NY","startDate":"January 2019","endDate":"Present","bullets":["Carried out the responsibilities of someone who has a job, resulting in an over 100% increase in people with jobs.","Monitored job opportunities to ensure the continued job-havingness of all job-havers.","Managed tasks for self and team by doomscrolling on Twitter instead of actually doing work."]},{"company":"Employer Inc.","jobTitle":"Chief Employee","location":"Employville, CA","startDate":"August 2015","endDate":"December 2018","bullets":["Led a team of X employees in carrying out various employee tasks, including working, toiling, and laboring.","Completed tasks related to being an employee, including checking email, drowning in email, and declaring email bankruptcy."]},{"company":"Entry Level Employer","jobTitle":"Overqualified Hire","location":"Workenberg, WV","startDate":"June","endDate":"August 2014","bullets":["Acquired five years of experience despite this field having only existed for half that time.","Design and implemented a new method of appearing to work while watching cat videos, resulting in a 500% decrease in productivity."]},{"company":"University of College","jobTitle":"Undergraduate Employee","location":"Collegeplace, IA","startDate":"February","endDate":"December 2013","bullets":["Completed likely pretty complicated work for almost definitely a third of the pay a full-time employee would receive."]},{"company":"The Neighbor Down the Street","jobTitle":"\\"Landscaper\\"","location":"Hometown, FL","startDate":"May","endDate":"August 2013","bullets":["Mowed lawns, trimmed hedges, and otherwise kept the property looking pristine.","Received half-minimum wage for what is typically three people worth of work."]}],"skills":[{"name":"Languages","items":["Java","Scala","JavaScript/TypeScript","French","German","Pig Latin","Klingon"]},{"name":"Frameworks & Libraries","items":["MySQL","PostgreSQL","React","Android","Your Local Public Library"]},{"name":"Hobbies","items":[{"name":"Musical performance","items":["piano","cello","didgeridoo","seven-piece choir"]},"reading","farming","investment banking"]}],"education":[{"institute":"University of College","graduationDate":"May 2015","degree":"B.A., Art History","subDegree":"Minor in Gastronomy","majorGpa":"4.0","overallGpa":"3.2","coursework":["History of Art","History of Paint","History of Painted Art","The Stomach and Art","Paintings of Food"]}]}')},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),r=n(4),c=n.n(r),l=(n(10),function(e){var t=e.education.map((function(e){return Object(i.jsxs)("li",{className:"educationItem",children:[Object(i.jsxs)("div",{className:"summary",children:[Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("h3",{children:e.institute}),Object(i.jsx)("div",{children:e.degree}),Object(i.jsx)("div",{children:e.subDegree})]}),Object(i.jsxs)("div",{className:"context",children:[Object(i.jsx)("div",{className:"when",children:e.graduationDate}),e.overallGpa&&Object(i.jsxs)("div",{className:"gpa",children:["GPA: ",e.overallGpa]}),e.majorGpa&&Object(i.jsxs)("div",{className:"gpa",children:["Major GPA: ",e.majorGpa]})]})]}),Object(i.jsxs)("div",{className:"coursework",children:[Object(i.jsx)("span",{className:"title",children:"Related Coursework: "}),e.coursework.join(", ")]})]},e.institute)}));return Object(i.jsxs)("div",{className:"education",children:[Object(i.jsx)("h2",{children:"Education"}),Object(i.jsx)("ul",{className:"educationList",children:t})]})}),o=function(e){var t=e.experiences.map((function(e){return Object(i.jsxs)("li",{className:"experienceItem",children:[Object(i.jsxs)("div",{className:"summary",children:[Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("h3",{children:e.company}),Object(i.jsx)("h4",{children:e.jobTitle})]}),Object(i.jsxs)("div",{className:"context",children:[Object(i.jsxs)("div",{className:"when",children:[e.startDate," \u2014 ",e.endDate]}),Object(i.jsx)("div",{className:"where",children:e.location})]})]}),Object(i.jsx)("ul",{className:"details",children:e.bullets.map((function(e){return Object(i.jsx)("li",{children:e},e)}))})]},e.company)}));return Object(i.jsxs)("div",{className:"experience",children:[Object(i.jsx)("h2",{children:"Experience"}),Object(i.jsx)("ul",{className:"experienceList",children:t})]})};function d(e){e.preventDefault(),window.print()}var m=function(e){var t=e.resumeInfo,n=t.links.map((function(e){return Object(i.jsx)("span",{children:"Download"===e.name?Object(i.jsx)("a",{href:"#",onClick:d,children:"Download"}):Object(i.jsx)("a",{href:e.url,target:"blank",children:e.name})},e.name)})).reduce((function(e,t){return[e," | ",t]}));return Object(i.jsxs)("header",{children:[Object(i.jsx)("div",{className:"name",children:Object(i.jsx)("h1",{children:t.name})}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)("div",{className:"email",children:Object(i.jsx)("a",{href:"mailto:"+t.email,children:t.email})}),Object(i.jsx)("div",{className:"other",children:n})]})]})};function j(e){if(e.items){var t=e.items.map((function(e){return j(e)})).join(", ");return e.name+" (".concat(t,")")}return e}var u=function(e){var t=e.skills.map((function(e){return Object(i.jsxs)("div",{className:"category",children:[Object(i.jsx)("div",{className:"categoryName",children:Object(i.jsx)("h3",{children:e.name})}),Object(i.jsx)("div",{className:"skills",children:e.items.map((function(e){return j(e)})).join(", ")})]},e.name)}));return Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("h2",{children:"Skills"}),Object(i.jsx)("div",{className:"skillsList",children:t})]})},h=n(2);n(11);var b=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"spacer"}),Object(i.jsxs)("div",{className:"Resume",children:[Object(i.jsx)(m,{resumeInfo:h.info}),Object(i.jsxs)("main",{children:[Object(i.jsx)(o,{experiences:h.experience}),Object(i.jsxs)("div",{className:"sidebar",children:[Object(i.jsx)(u,{skills:h.skills}),Object(i.jsx)("div",{className:"spacer"}),Object(i.jsx)(l,{education:h.education})]})]})]}),Object(i.jsx)("div",{className:"spacer"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),p()}],[[12,1,2]]]);
//# sourceMappingURL=main.ca395e4f.chunk.js.map