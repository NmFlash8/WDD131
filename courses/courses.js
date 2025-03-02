// Course object
let course = {
    courseName: "Web Development",
    sections: [
        { sectionNumber: 1, enrolled: 25, roomNumber: "A101" },
        { sectionNumber: 2, enrolled: 30, roomNumber: "B202" },
        { sectionNumber: 3, enrolled: 20, roomNumber: "C303" }
    ]
};

// Display course details
function displayCourse() {
    document.getElementById("courseName").textContent = "Course: " + course.courseName;
    let list = document.getElementById("sectionsList");
    list.innerHTML = "";
    course.sections.forEach(section => {
        let item = document.createElement("li");
        item.textContent = `Section ${section.sectionNumber}: ${section.enrolled} students, Room: ${section.roomNumber}`;
        list.appendChild(item);
    });
}

// Enroll a student
function enrollStudent() {
    let sectionNum = parseInt(document.getElementById("sectionInput").value);
    let section = course.sections.find(sec => sec.sectionNumber === sectionNum);
    
    if (section) {
        section.enrolled++;
        displayCourse();
        document.getElementById("message").textContent = `Enrolled in Section ${sectionNum}`;
    } else {
        document.getElementById("message").textContent = "Section not found!";
    }
}

// Drop a student
function dropStudent() {
    let sectionNum = parseInt(document.getElementById("sectionInput").value);
    let section = course.sections.find(sec => sec.sectionNumber === sectionNum);
    
    if (section && section.enrolled > 0) {
        section.enrolled--;
        displayCourse();
        document.getElementById("message").textContent = `Dropped from Section ${sectionNum}`;
    } else if (section) {
        document.getElementById("message").textContent = "No students to drop!";
    } else {
        document.getElementById("message").textContent = "Section not found!";
    }
}

// Initialize course display on page load
window.onload = displayCourse;
