for (let item of "ma") {
  console.log(item);
}
let a = 8;
console.log(a + 10);

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000);
  });
  let result = await promise; // будет ждать, пока промис не выполнится (*)
  alert(result); // "готово!"
}

f();
