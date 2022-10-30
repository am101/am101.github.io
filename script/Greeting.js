class Greeting {
  /**
   * this functionality streams a greeting on the screen using the functions from this class
   * @param {object} greet the reference of the element with the id of greet
   */
  constructor(greet) {
    this.greetings = [
      "Hello, World!",
      "¡Hola Mundo!",
      "नमस्ते दुनिया!",
      "こんにちは世界！",
      "Bonjour le monde!",
    ];
    this.greet = greet;
  }
  greetMe() {
    this.greet.innerHTML = "";
    const randonNo = Math.floor(Math.random() * this.greetings.length);
    this.streamEachLetter(this.greetings[randonNo]);
    setTimeout(() => {
      this.greetMe();
    }, 5000);
  }
  async streamEachLetter(greeting) {
    for (let letter of greeting) {
      const temp = this.greet.innerHTML;
      await this.wait(200);
      this.greet.innerHTML = temp + letter;
    }
  }
  wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
}
