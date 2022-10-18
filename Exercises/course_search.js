let courses = [{
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {

        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

//Find and filter the courses 
// When does the PROG200 course start?


function findCourses(course) {
    let searchCourseId = "PROG200";
    return course.CourseId == searchCourseId;
}

const foundCourse = courses.find(findCourses);
console.log(`${foundCourse.CourseId} starts ${foundCourse.StartDate}`);

console.log(`----------------------------`)
// What is the title of the PROJ500 course?

function findCoursesB(courseB) {
    let searchCourseIdB = "PROJ500";
    return courseB.CourseId == searchCourseIdB;
}
const foundCourseB = courses.find(findCoursesB);
console.log(`The title of ${foundCourse.CourseId} is ${foundCourseB.Title}`);

console.log(`----------------------------`)
// What are the titles of the courses that cost $50 or less?
function filterCourses(wholeCourse) {
    return wholeCourse.Fee <= 50;
}
let  underFitty = courses.filter(filterCourses).map(wholeCourse => wholeCourse.Title);
console.log(` These courses are $50 0r less: 
${underFitty}`);

console.log(`----------------------------`)
// What classes meet in "Classroom 1"?
function whatClass(classSpace) {
    return classSpace.Location == "Classroom 1";  
}

let filteredClasses = courses.filter(whatClass).map(classSpace => classSpace.CourseId);
console.log( `These classes are meet in Room1: ${filteredClasses}` );