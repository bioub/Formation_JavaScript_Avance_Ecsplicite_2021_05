document.addEventListener('click', () => {
  import('./contact.js').then(({ Contact }) => {
    const romain = new Contact();
    romain.hello();
  });
});
