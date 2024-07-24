function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientsInput = document.querySelector("#user-ingredients").value;
  let apiKey = "a1b23b3d4098a0a16ftb2b02cf94o4d8";
  let prompt = `Generate a recipe with the inputs ${ingredientsInput}`;
  let context =
    "You are an AI nutrition assistant who knows everything about food and nutrition. You're going to help people who are trying to achieve their fitness goals by giving the best possible and unique recipe but also simple that you can make it in less than 30 minutes, make it cheap and affordable. Try to make it easy, better with Mediterranean recipes. Make sure to follow the user ingredients. Show the output and separate each line with a <br/> Using the basic HTML bases, separate the ingredients and the instructions and listed";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let ingredientFormElement = document.querySelector(
  "#ingredients-generator-form"
);
ingredientFormElement.addEventListener("submit", generateRecipe);
