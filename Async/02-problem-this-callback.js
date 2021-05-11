class Contact {
  name = 'Romain';

  hello() {
    setTimeout(function() {
      console.log(this);
      console.log(`Hello my name is ${this.name}`);
    }, 1000);
  }
}

const romain = new Contact();
romain.hello();
