document.getElementById("login").addEventListener("click", () => {
    window.location.href = "https://bharath1098.github.io/f3module-test/login/login.html"
})

document.getElementById("signup").addEventListener("click", () => {
    window.location.href = "https://bharath1098.github.io/f3module-test/signup/signup.html"
})

const currentUser = localStorage.getItem("currentUser");

if (currentUser !== null) {
    window.location.href = "https://bharath1098.github.io/f3module-test/shop/shop.html";
}
console.log("object")  