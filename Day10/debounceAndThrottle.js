function debounce(fn, delay) {
  let timer;
  return function (...args) {
    // const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      //   fn.apply(context, args);
      fn(...args);
    }, delay);
  };
}

const user = {
  name: "Masum",
  search(query) {
    console.log(`From Debounce:${this.name} Searching:${query}`);
  },
};

// user.debouncedSearch = debounce(user.search, 1000);

// user.debouncedSearch("java");

const debouncedSearch = debounce(user.search.bind(user), 1000);

debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("java");

function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    const context = this;
    const currentTime = Date.now();

    if (currentTime - lastTime >= delay) {
      fn.apply(context, args);
      lastTime = currentTime;
    }
  };
}

function search(query) {
  console.log("From Throttle Searching:", query);
}

const throttledSearch = throttle(search, 1000);

throttledSearch("j");
throttledSearch("ja");
throttledSearch("jav");
throttledSearch("java");
