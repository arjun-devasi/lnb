function validate()
{
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
var password = document.getElementById('password').value
var cpassword = document.getElementById('cpassword').value

checkusername(username)
checkemail(email)
checkpassword(password)
checkpasswordmatch(password,cpassword)
  
}
function checkusername(username){
    if(username.length>7){
        document.getElemntById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerText=''
    }
    else{

    document.getElemntById('username').classList.add('error')
    document.getElementById('username_error').innerText='username must be 8 letters long'
}
}