const box = document.querySelector(".comainer")
function addbtn() {
    addnote()
    savenotes()
    empatnotevalue()
}

// =================Add note=====================

function addnote() {
    const note = document.createElement("div")
    note.classList.add("tol")

    note.innerHTML = `
    <div class="box2">
        <button onclick="delit()" id="delit">Delit Note</button>
        <h3  for="">Taital</h3>
        <h5 id="addinput" ></h5>
        <h4 for="description">description</h4>
        <h5  id="addtextarea" ></h5>
    </div>
        `
    const inp = document.querySelector("#input").value
    const description = document.querySelector("#textarea").value

    note.querySelector("#addinput").innerHTML = inp
    note.querySelector("#addtextarea").innerHTML = description
    box.appendChild(note)


    // ====================    delit Notes =========      
    note.querySelector('#delit').addEventListener(
        "click", function () {
            note.remove()
            savenotes()
        }
    )
}
//  ============== Notes value srt localStorage ============
const savenotes = () => {
    const inp = document.querySelector("#input")
    const description = document.querySelector("#textarea")

    const addnots = document.querySelectorAll(".tol h5")
    console.log(addnots);
    const arr = [ ]
    addnots.forEach(
        () => {
            // arr.push(inp)
            arr.push(inp.value, description.value)
        }
    )
    localStorage.setItem("addnots", JSON.stringify(arr))

}

// =========== nots add localStorage ============
(
    function () {
        let lsnote = JSON.parse(localStorage.getItem("addnots"))
        lsnote.forEach(
            (lsnote) => {
                addnote()
            }
        )
    }
)
()
function  empatnotevalue(){
    document.querySelector("#input").value=""
    document.querySelector("#textarea").value=""


}