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
