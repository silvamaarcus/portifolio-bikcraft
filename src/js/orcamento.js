function showDiv(selectedValue) {
  // Obtenha a div a ser exibida
  let divToShow = document.getElementById(selectedValue);

  // Exiba a div selecionada e oculte as outras
  let allDivs = document.querySelectorAll(".div-container");
  allDivs.forEach(function (div) {
    div.style.display = "none";
  });
  divToShow.style.display = "block";
}
