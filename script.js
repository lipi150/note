const addBox = document.querySelector(".cross");
popupBox = document.querySelector(".popup-box");
addBtn = popupBox.querySelector(".add-note");
const addNote = document.querySelector(".add");
titleTag = popupBox.querySelector("input");
descTag = popupBox.querySelector("textarea");
const list = document.querySelector(".wrapper li")

const months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

addBox.addEventListener("click", () => {
   titleTag.value = "";
   descTag.value = "";
   popupBox.classList.add("popup-hidden");
});


addNote.addEventListener("click", () => {
   popupBox.classList.remove("popup-hidden");
   console.log("selected");
});

addBtn.addEventListener("click", e => {
   e.preventDefault();
   let noteTitle = titleTag.value;
   let noteDesc = descTag.value;
   if (noteTitle || noteDesc) {
      let dateObj = new Date();
      month = months[dateObj.getMonth()];
      date = dateObj.getDate();
      year = dateObj.getFullYear();
      let noteInfo = {
         title: noteTitle, description: noteDesc,
         date: `${month} ${date} ${year}`
      }

      notes.push(noteInfo);
      localStorage.setItem("notes", JSON.stringify(notes));
      addBox.click();
      showNotes();
   }

});

function showNotes() {
   document.querySelectorAll(".note").forEach(note => note.remove());
   notes.forEach((note, index) => {

      let liTag = `<li class="note">
                      <div class="details">
                        <p>${note.title}</p>
                          <span>
                           ${note.description}
                          </span>
                      </div>
                        <div class="bottom-content">
                           <span class="date">${note.date}</span>
                         <i class="uil uil-ellipsis-h  "></i>
                              
                 </div>
      
                  </li>`;

      list.insertAdjacentHTML("afterend", liTag);
   });
}
showNotes();


function deleteNote(noteId)
{
   notes.splice(noteId,1);
   localStorage.setItem("notes",JSON.stringify(notes));
   showNotes();
}






