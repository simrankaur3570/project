const check=65;
var regex = {
    name: /^[A-Z][a-z]{1,}$/,
    password: /^(?=.*[A-Z])(?=.*\d)[A-Za-z][A-Za-z\d]{5,}$/,
    username: /^[A-Za-z][A-Za-z\d]{5,}$/
};
function clearForm()
{
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm_pass").value = "";
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    ["statusA","statusB", "statusC"].forEach(
        (id)=>(document.getElementById(id).checked = false)
    );
}