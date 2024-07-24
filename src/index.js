function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Generating recipe... 🔍",
    autoStart: true,
    delay: 75,
  });
}

let ingredientFormElement = document.querySelector(
  "#ingredients-generator-form"
);
ingredientFormElement.addEventListener("submit", generateRecipe);
