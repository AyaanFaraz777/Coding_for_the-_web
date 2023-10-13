// DO NOT EDIT THIS JS FILE!

// POPUP FUNCTIONS
// --------------------------------------------------------
//get the popup elements:
const openPopup = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const popupCover = document.getElementById("popupCover");

// show & hide popups:
function showPopup() {
    popup.style.display = "block";
    popupCover.style.display = "block";
    openPopup.setAttribute("onClick", "hidePopup()");
    localStorage.removeItem("D3E1closed");
}
function hidePopup() {
    popup.style.display = "none";
    popupCover.style.display = "none";
    openPopup.setAttribute("onClick", "showPopup()");   
    localStorage.setItem("D3E1closed", "Y");
}

function loadPopupState() {
    if (localStorage.getItem("D3E1closed")) { hidePopup(); }
    if (localStorage.getItem("gridGuide1")) { showGrid(); }
    if (localStorage.getItem("gridGuide2")) { showGrid2(); }
}


// SET JUSTIFY-ITEMS, ALIGN-ITEMS, AND ALIGN-CONTENT SETTINGS ON SECTION 1:
// --------------------------------------------------------
const s1 = document.getElementById("s1") // get section 1

//update justify content via radio button:
const ji = document.getElementsByName("ji"); // justify-content radio buttons
var m;
for (m=0; m < ji.length; m++) {
    ji[m].addEventListener("click", function() {
        s1.firstElementChild.nextElementSibling.style.justifyItems = this.value;
    });
}
//update align items via radio button:
const ai = document.getElementsByName("ai"); // align-items radio buttons
var m;
for (m=0; m < ai.length; m++) {
    ai[m].addEventListener("click", function() {
        s1.firstElementChild.nextElementSibling.style.alignItems = this.value;
    });
}

//update align content via radio button:
const ac = document.getElementsByName("ac"); // align-items radio buttons
var m;
for (m=0; m < ac.length; m++) {
    ac[m].addEventListener("click", function() {
        s1.firstElementChild.nextElementSibling.style.alignContent = this.value;
        s1.firstElementChild.nextElementSibling.lastElementChild.style.alignContent = this.value;
    });
}


// CHECKBOX FUNCTIONS ON S1 & S2 (TO TOGGLE GRID GUIDES)
// --------------------------------------------------------
const checkGrid = document.getElementById("checkGrid"); // Get the checkbox
var checkGrid2 = document.getElementById("checkGrid2");
const gridGuide = document.getElementById("grid-guide"); // Get the guides
var gridGuide2 = document.getElementById("grid-guide2");

//Show 4-column grid in Section 1
function showGrid() {
    gridGuide.className = "shown";
    checkGrid.setAttribute("onClick", "closeGrid()");
    checkGrid.checked = true;
    localStorage.setItem("gridGuide1", "Y");
}
function closeGrid() {
    gridGuide.className = "hidden";
    checkGrid.setAttribute("onClick", "showGrid()");
    localStorage.removeItem("gridGuide1");
}

//Show multicolumn grid in Section 2
function showGrid2() {
    gridGuide2.className = "shown";
    checkGrid2.setAttribute("onClick", "closeGrid2()");
    checkGrid2.checked = true;
    localStorage.setItem("gridGuide2", "Y");
}
function closeGrid2() {
    gridGuide2.className = "hidden";
    checkGrid2.setAttribute("onClick", "showGrid2()");
    localStorage.removeItem("gridGuide2");
}


// SECTION 3:
// --------------------------------------------------------
const s3 = document.getElementById("s3") // get section 3

//update jgrid-template-columns via radio button:
const gtc = document.getElementsByName("gtc"); // justify-content radio buttons
var m;
for (m=0; m < gtc.length; m++) {
    gtc[m].addEventListener("click", function() {
        s3.firstElementChild.nextElementSibling.style.gridTemplateColumns = this.value;
    });
}
//update justify content via radio button:
const jc = document.getElementsByName("jc"); // justify-content radio buttons
var m;
for (m=0; m < jc.length; m++) {
    jc[m].addEventListener("click", function() {
        s3.firstElementChild.nextElementSibling.style.justifyContent = this.value;
    });
}

