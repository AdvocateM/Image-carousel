var pictures, count;

pictures = [
  "https://i.ibb.co/X5zWFxs/post43.jpg",
  "https://i.ibb.co/jHs6Y28/post40.jpg",
  "https://i.ibb.co/sPG0Pt3/post39.jpg",
  "https://i.ibb.co/s3x83FN/post36.jpg",
  "https://i.ibb.co/vxKTm8v/post15.jpg",
  "https://i.ibb.co/nm3pQjt/post13.jpg",
  "https://i.ibb.co/Mfw0B1W/post11.jpg",
  "https://i.ibb.co/st3h35G/post32.jpg",
  "https://i.ibb.co/LgnDxbb/post34.jpg",
  "https://i.ibb.co/jb9xnLn/post31.jpg",
  "https://i.ibb.co/7NJWYgN/post30.jpg",
  "https://i.ibb.co/PTpJS2Q/post25.jpg"
];
let element_pictures = document.getElementById("pictures");
element_pictures.setAttribute("src", pictures[1]);
count = 1;

document.getElementById("next").addEventListener("click", (event) => {
  pictures.push(pictures.shift());
  let element_pictures2 = document.getElementById("pictures");
  element_pictures2.setAttribute("src", pictures[1]);
  let element_number = document.getElementById("number");
  count = (typeof count === "number" ? count : 1) + 1;
  element_number.innerText = count;
});

document.getElementById("previous").addEventListener("click", (event) => {
  pictures.unshift(pictures.pop());
  let element_pictures3 = document.getElementById("pictures");
  element_pictures3.setAttribute("src", pictures[1]);
  let element_number2 = document.getElementById("number");
  count = (typeof count === "number" ? count : 1) + -1;
  element_number2.innerText = count;
});
