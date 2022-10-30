const greet = document.getElementById("greet"); // the element that will greet us
document.addEventListener("scroll", (e) => {});

// the greeting on the screen
const greetingInstance = new Greeting(greet);
greetingInstance.greetMe();
// the greeting on the screen
