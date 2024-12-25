/* const item = document.querySelector(".item");

gsap.defaults({ duration: 0.3 });
const tl = gsap
  .timeline({ paused: true })
  .to(".text", { color: "white", x: 10 })
  .to(".dot", { backgroundColor: "#F93", scale: 1.5 }, 0);

item.addEventListener("mouseenter", () => tl.play());
item.addEventListener("mouseleave", () => tl.reverse());
*/

const items = document.querySelectorAll(".item");
gsap.defaults({ duration: 0.3 });

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".text"), {
      color: "white",
      x: 10,
      scale: 1.2,
      transformOrigin: "left center",
    })
    .to(item.querySelector(".dot"), { backgroundColor: "#F93", scale: 1.5 }, 0);

  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});

// Closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Passengers: ${passengerCount}`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// Hash change
window.addEventListener("hashchange", function () {
  const id = window.location.hash.slice(1);
  console.log(id);

  if (id === "14516384") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

// class
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const bmw = new Car("BMW", 120);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

const mercedes = new Car("Mercedes", 95);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const lastWithdrawal = movements.findLast((mov) => mov < 0);
console.log(lastWithdrawal);

const latestLastMovementIndex = movements.findLastIndex(
  (mov) => Math.abs(mov) > 1000
);
console.log(latestLastMovementIndex);

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// 1
const huskyWeight = breeds.find(
  (breed) => breed.breed === "Husky"
).averageWeight;
console.log(`The average weight of a "Husky" is ${huskyWeight}kg`);

// 2
const dogBothActivities = breeds.find((breed) => {
  return (
    breed.activities.includes("running") && breed.activities.includes("fetch")
  );
});

console.log(
  `The only breed that likes both "running" and "fetch" is ${dogBothActivities.breed}`
);

// 3
const allActivities = breeds.map((breed) => breed.activities).flat(); // Can be use flatMap method instead
console.log(allActivities);

// 4
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5
const swimmingAdjacent = [
  ...new Set(
    breeds
      .map((breed) => breed.activities)
      .flat()
      .filter((activity) => activity !== "swimming")
  ),
];

console.log(swimmingAdjacent);

// 6
/* const allWeights = breeds.map((breed) => breed.averageWeight);
const averageWeight =
  allWeights.reduce((acc, cur) => acc + cur) / allWeights.length;
console.log(averageWeight >= 10); */
console.log(breeds.every((breed) => breed.averageWeight >= 10));

// 7
/* const activeBreeds = breeds.filter((breed) => breed.activities.length >= 3);
console.log(activeBreeds.length > 0); */

console.log(breeds.some((breed) => breed.activities.length > 3));

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You were deposit ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You were Withdraw ${Math.abs(movement)}`);
  }
}

// Array grouping

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposit" : "withdrawal"
);
console.log(groupedMovements);
