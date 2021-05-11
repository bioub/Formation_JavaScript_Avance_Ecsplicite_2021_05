class Contact {
  name = 'Romain';

  hello() {
    const that = this;
    setTimeout(function() {
      console.log(that);
      console.log(`Hello my name is ${that.name}`);
    }, 1000);
  }
}

const romain = new Contact();
romain.hello();
