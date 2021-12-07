let person = {
  firstName: "Jon",
  lastName: "Doe",
  address: {
    street: "valami",
    city: "BP",
    country: "hun",
  },
};

const p1 = { ...person };
console.log(p1);

const p2 = Object.assign({}, person);
console.log(person);
console.log(p2);

p2.firstName = "jane";
p2.address.street = "main";
console.log(p2);

const p3 = JSON.parse(JSON.stringify(person));
console.log(p3);
p3.firstName = "jane";
p3.address.street = "main";

// aaaaaaand im lost....
