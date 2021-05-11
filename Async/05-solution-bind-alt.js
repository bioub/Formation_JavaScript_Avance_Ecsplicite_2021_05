class Contact {
  name = 'Romain';

  hello() {
    console.log(this);
    console.log(`Hello my name is ${this.name}`);
  }

  helloAsync() {
    setTimeout(this.hello.bind(this), 1000);
  }
}

const romain = new Contact();
romain.helloAsync();
