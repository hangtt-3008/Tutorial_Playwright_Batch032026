// Khai báo biến cơ bản
const username: string = "Hằng";
const age: number = 25;
const isActive: boolean = true;
const roles: string[] = ["Admin", "Users"];

// Khai báo object user
const user: {
  name: string;
  email: string;
  isAdmin: boolean;
} = {
  name: "Hằng",
  email: "tran.thi.hang-b@sun-asterisk.com",
  isAdmin: true,
};

// In thông tin user theo format
console.log(
  `User: ${user.name} (email: ${user.email}), Roles: [${roles.join(
    ", "
  )}], Active: ${isActive}`
);

//Function check tuổi
function checkAge(age: number): string {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Under 18";
  }
}

// Gọi function để test
console.log(`Age status: ${checkAge(age)}`);