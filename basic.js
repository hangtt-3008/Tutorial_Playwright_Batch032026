// Khai báo biến cơ bản
const username = "Hằng";
const age = 25;
const isActive = true;
const roles = ["Admin", "Users"];
// Khai báo object user
const user = {
    name: "Hằng",
    email: "tran.thi.hang-b@sun-asterisk.com",
    isAdmin: true,
};
// In thông tin user theo format
console.log(`User: ${user.name} (email: ${user.email}), Roles: [${roles.join(", ")}], Active: ${isActive}`);
//Function check tuổi
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }
    else {
        return "Under 18";
    }
}
// Gọi function để test
console.log(`Age status: ${checkAge(age)}`);
