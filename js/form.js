var form = document.getElementById("myForm");
var msg = document.getElementById("msg");

form.addEventListener("submit",function(event){
    event.preventDefault();
    
var name =document.getElementById("name").value;
var phone = document.getElementById("phone").value;

if(name ==="" || phone===""){
    msg.textContent = "Please Enter Your Name and Number ";
    msg.className = "error";
}else{
    msg.textContent = "Thank You" +name+ "! We Recieved Your Request.";
    msg.className = "success";
    form.reset();
}
})