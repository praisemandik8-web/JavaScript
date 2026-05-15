function merge(){
const personal = {name:"Pankyes", age:27}
const professional = {personal, role:"Developer", company:"Google"};
return professional
}
console.log(merge());
