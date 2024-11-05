import util from "util";

console.info(util.format("nama : %s", "Ari"));

const person = { firstName: "Ari", lastName: "Keren" };
console.info(util.format("person : %j", person));
