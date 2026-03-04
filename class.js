// Class implements IUser
class User {
    constructor(name, email, isAdmin) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }
    getInfo() {
        return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
    }
}
// Kế thừa
class AdminUser extends User {
    constructor(name, email) {
        super(name, email, true);
    }
    deleteUser(user) {
        console.log(`Admin ${this.name} deleted user ${user.name}`);
    }
}
// ===== Tạo instance và gọi method =====
const user1 = new User("Hằng", "tran.thi.hang-b@sun-asterisk.com", false);
const admin1 = new AdminUser("Admin", "admin@sun-asterisk.com");
console.log(user1.getInfo());
console.log(admin1.getInfo());
admin1.deleteUser(user1);
// ===== Tạo mảng gồm User và AdminUser =====
const users = [user1, admin1];
users.forEach((user) => {
    console.log(user.getInfo());
});
