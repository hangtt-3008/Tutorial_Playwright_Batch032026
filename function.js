var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1️⃣ Function thường - tính tổng
function sum(a, b) {
    return a + b;
}
// 2️⃣ Arrow function - tính tích
const multiply = (a, b) => {
    return a * b;
};
// 3️⃣ Function có default parameter
function greet(name, role = "Guest") {
    return `Hello ${name}, your role is ${role}`;
}
// 4️⃣ Nâng cao - function delayPrint
function delayPrint(msg, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, time);
    });
}
// ===== Test =====
(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Sum:", sum(5, 3)); // 8
    console.log("Multiply:", multiply(4, 2)); // 8
    console.log(greet("Hằng")); // role mặc định Guest
    console.log(greet("Hằng", "Admin"));
    yield delayPrint("Hello after 2 seconds", 2000);
}))();
