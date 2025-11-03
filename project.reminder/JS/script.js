document.getElementById("calculate").addEventListener("click", function () {

  // Get Values
  let name = document.getElementById("name").value;
  let ka = Number(document.getElementById("kannada").value);
  let en = Number(document.getElementById("english").value);
  let hi = Number(document.getElementById("hindi").value);
  let sc = Number(document.getElementById("science").value);
  let so = Number(document.getElementById("social").value);
  let ma = Number(document.getElementById("maths").value);

  // Validate fields
  if (!name || isNaN(ka) || isNaN(en) || isNaN(hi) || isNaN(sc) || isNaN(so) || isNaN(ma)) {
    showResult("❗ Please fill all fields correctly.");
    return;
  }

  // Calculate total + percentage
  let total = ka + en + hi + sc + so + ma;
  let percentage = (total / 600) * 100;

  // Grade logic
  let grade = "";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 75) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 45) grade = "C";
  else grade = "Fail";

  // Show result
  showResult(`
    <b>Name:</b> ${name}<br>
    <b>Total:</b> ${total}/600<br>
    <b>Percentage:</b> ${percentage.toFixed(2)}%<br>
    <b>Grade:</b> ${grade}
  `);
});

// Function to display result box
function showResult(content) {
  const resultBox = document.getElementById("output");
  resultBox.innerHTML = content;
  resultBox.classList.add("show");
}

// 🌙 Dark / Light Toggle
document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("dark");
};