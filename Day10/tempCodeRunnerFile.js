function debounce(fn, delay) {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
      //   fn(...args);
    }, delay);
  };
}

const user = {
  name: "Masum",
  search(query) {
    console.log(`${this.name} Searching:${query}`);
  },
};

user.debouncedSearch = debounce(user.search, 1000);

user.debouncedSearch("java");

const debouncedSearch = debounce(user.search.bind(user), 1000);

debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("java");

