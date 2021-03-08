import React, { useState } from 'react';
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
import FormAction from "../Forms/FormAction";
import "./loginBlack.css";
function LoginTemplate(){
    const [formData, setFormData] = useState({
        username : "",
        password : "",
        usernameError : "",
        passwordError: ""
      });
    
      const _self = this;
      const myOnChange = function(e){
        const { name, value } = e.currentTarget;
        //validaciones
        let error = null;
        if (name ==="password"){
          error = (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(value) ? null :"Contraseña Inválida";
        }
        //
        setFormData({ ...formData, [name]: value , [name + "Error"]: error});
      }
    
  return (
      //<img src="https://miro.medium.com/max/382/1*2us2ZKD01bpesGFHGU4caQ.gif"  alt="Animación " /> <img class="avatar" src="" alt="avatar"/>
    //  <input type="password" class="input" name="password" id="password" placeholder="Contraseña"autocomplete="off"/>
    //<input type="text" class="input" name="username" id="username" placeholder="Nombre de usuario" autocomplete="on"/>
     //<script src="./Login.js"></script>   
     /*
      <a href="#"/> 
                    <input type="submit" class="btn" value="Ingresar"/>
     */                    
    <div>
        <link rel="stylesheet" href="./loginBlack.css">
        </link>
        <script src="./LoginBlack" ></script>
        <div class="container">
                <div class="img">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/13-time-date/daily-schedule.png"  alt="Animación " />
                </div>
            <div class="login-container">
                <form class=" justify-center justify-items-center justify-self-center">

                    <div class="flex -space-x-2 overflow-hidden ">
                        <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
                        <img class="inline-block h-20 w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                    <br></br>
                    
                    <div class="input-div one">
                        <div class="i">
                            <i class="fas fa-user"></i>
                        </div>
                        
                        <div>
                            
                            <FormField
                                type="text"
                                id="username"
                                fname="username"
                                onChange={myOnChange}
                                value={formData.username}
                                error={formData.usernameError}
                                placeholder="Nombre de usuario"
                                class="input"
                            ></FormField>
                        </div>
                    </div>
                    <div class="input-div two">
                        <div class="i">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div>
                            <FormField
                                type="password"
                                id="password"
                                fname="password"
                                onChange={myOnChange}
                                value={formData.password}
                                error={formData.passwordError}
                                placeholder="Contraseña"
                                class="input"
                            ></FormField>
                        </div>
                    </div>
                    <div>
                    <FormAction
                        
                        caption="Enviar"
                        onClick={
                        (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            const { username, password } = formData;
                            //alert(`Usuario:${username} Psswd:${password}`);
                           if(username === "admin" && password === "password" )
                                {
                                    alert("Acceso permitido");
                                    //window.open("../index.html");
                                    
                                }
                                else
                                {
                                    alert("¡Acceso denegado! intenta de nuevo     [Prueba admin | password]");
                        }
                        }}
                    ></FormAction>

</div>
                
                </form>

            </div>
        </div>
        
    </div>
  );
}
export default LoginTemplate;