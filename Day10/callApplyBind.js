function introduce(age, city) {
  console.log(this.name);
  console.log(age);
  console.log(city);
}

const user = {
  name: "Masum",
};
//when .call(user, , ,....)..it tells that this=user
introduce.call(user, 23, "Dhaka"); //execute immediately
introduce.apply(user, [23, "Dhaka"]); //execute immediately,but take parameter as a Array
const newFunction = introduce.bind(user, 23, "Dhaka"); //execute only if newFunction() ;call
newFunction();
