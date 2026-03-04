// 1️⃣ Function thường - tính tổng
function sum(a: number, b: number): number {
  return a + b;
}

// 2️⃣ Arrow function - tính tích
const multiply = (a: number, b: number): number => {
  return a * b;
};

// 3️⃣ Function có default parameter
function greet(name: string, role: string = "Guest"): string {
  return `Hello ${name}, your role is ${role}`;
}

// 4️⃣ Nâng cao - function delayPrint
function delayPrint(msg: string, time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}

// ===== Test =====
(async () => {
  console.log("Sum:", sum(5, 3)); // 8
  console.log("Multiply:", multiply(4, 2)); // 8
  console.log(greet("Hằng")); // role mặc định Guest
  console.log(greet("Hằng", "Admin")); 

  await delayPrint("Hello after 2 seconds", 2000);
})();