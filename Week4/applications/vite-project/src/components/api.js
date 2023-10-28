async function fetchBio(person) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`This is ${person}'s bio`);
    }, 1000);
  });
}

export { fetchBio };
