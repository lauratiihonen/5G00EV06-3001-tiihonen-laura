const tina = { name: "tina", age: 20 };

for (const [key, value] of Object.entries(tina)) {
  console.log(`${key}: ${value}`);
}
