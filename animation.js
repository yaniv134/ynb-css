const texts = [
  "YnB Studio – בונים מציאות. מעצבים עתיד.",
  "מלאו את הטופס ואנחנו נחזור אליכם בהקדם!"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const element = document.getElementById("headline");

function type() {
  const currentText = texts[index];
  const visibleText = isDeleting
    ? currentText.substring(0, charIndex--)
    : currentText.substring(0, charIndex++);

  element.textContent = visibleText;

  if (!isDeleting && charIndex === currentText.length + 1) {
    setTimeout(() => {
      isDeleting = true;
      type();
    }, 2000); // זמן השהייה לפני מחיקה
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 30 : 60);
}

type();
