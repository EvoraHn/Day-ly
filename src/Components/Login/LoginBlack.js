const inputs = document.querySelectorAll(".input");


function addcl(){
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}
function remcl(){
  let parent = this.parentNode.parentNode;
  if(this.value == "" ) {
    parent.classList.remove("focus");
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});


function validacionDeLogin()
{
  
  const login =
  [
    {
      nombreDeUsuario: document.getElementsByName("username")[0].value,
      contraseña: document.getElementsByName("password")[0].value,

    }
  ];
  //alert(login[0].nombreDeUsuario);


  if(login[0].nombreDeUsuario === "admin" && login[0].contraseña === "password" )
  {
    alert("Acceso permitido");
    //window.open("../index.html");
    return true;
  }
  else
  {
    alert("¡Acceso denegado! intenta de nuevo");
    return false;
  }
};