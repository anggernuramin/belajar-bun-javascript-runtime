// bycrypt data
const passwordHash = await Bun.password.hash("Angger", {
  algorithm: "bcrypt",
  cost: 10,
});
console.log("🚀 ~ passwordHash:", passwordHash);
// encrypt data
const result = await Bun.password.verify("Angger", passwordHash, "bcrypt");
console.log("🚀 ~ result:", result);
