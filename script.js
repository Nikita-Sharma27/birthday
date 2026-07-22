// ===============================
// PAGE NAVIGATION
// ===============================

const pages = document.querySelectorAll(".page");

let currentPage = 0;

document.querySelectorAll(".next-btn").forEach(button => {

    button.addEventListener("click", () => {

        pages[currentPage].classList.remove("active");

        currentPage++;

        if(currentPage >= pages.length){

            currentPage = 0;

        }

        pages[currentPage].classList.add("active");

    });

});
// ===============================
// PAGE 3
// ===============================

const seal = document.getElementById("seal");
const tag = document.getElementById("tag");
const closedEnvelope = document.getElementById("closedEnvelope");
const openEnvelope = document.getElementById("openEnvelope");
const letter = document.getElementById("letter");
const nextBtn = document.getElementById("page3Next");

seal.addEventListener("click", () => {

    seal.style.pointerEvents = "none";

    // Seal breaks
    seal.classList.add("break");

    // Tag lifts
    setTimeout(() => {

        tag.classList.add("lift");

    },700);

    // Envelope opens
    setTimeout(() => {

        closedEnvelope.classList.add("open");
        openEnvelope.classList.add("show");

    },1300);

    // Letter appears
    setTimeout(() => {

        letter.classList.add("show");
        nextBtn.classList.add("show");

    },1900);

});
nextBtn.addEventListener("click", () => {

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

});
// ===============================
// PAGE 4
// ===============================

const page4Next = document.getElementById("page4Next");

page4Next.addEventListener("click", () => {

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

});
// ===============================
// PAGE 5
// ===============================

const page5Next = document.getElementById("page5Next");

page5Next.addEventListener("click", () => {

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

});
const page6Next = document.getElementById("page6Next");

page6Next.addEventListener("click", () => {

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

});
// ===============================
// PAGE 7
// ===============================

const page7Next = document.getElementById("page7Next");

page7Next.addEventListener("click", () => {

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

});
// ===============================
// PAGE 8
// ===============================

const giftBox = document.getElementById("giftBox");
const birthdayMessage = document.getElementById("birthdayMessage");
const restartJourney = document.getElementById("restartJourney");

giftBox.addEventListener("click",()=>{

    giftBox.style.transform="scale(1.2) rotate(10deg)";
    giftBox.innerHTML="🎉";

    setTimeout(()=>{

        birthdayMessage.classList.add("show");

    },500);

});

restartJourney.addEventListener("click",()=>{

    pages[currentPage].classList.remove("active");

    currentPage=0;

    pages[currentPage].classList.add("active");

});