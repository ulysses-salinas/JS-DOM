// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

let accordion = document.getElementById("accordion")
let sectionHeader = document.getElementById("section-header")
let hideSection = document.getElementById("section")


sectionHeader.addEventListener('click', function(){

       if (hideSection.style.display === "none") {
           hideSection.style.display = "block";
        } else {
             hideSection.style.display = "none";
            }
}
)

