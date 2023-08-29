
    function onLogin(e){
        e.preventDefault();
        const email=document.querySelector('.email').value;
        const password=document.querySelector('.password').value;
        const obj={
        email,password,
        }
        // console.log(obj);
        onPostLogin(obj); 
        }
    
    const onPostLogin=async(obj)=>{
     try{
      const response= await axios.post('http://localhost:3000/user/login',obj);
       alert(response.data.message);
       localStorage.setItem('token',response.data.token);
       window.location.href="../expense/index.html"
     }
        catch(e){
        document.body.innerHTML+=`<h3 style="color:red;">${e}</h3>`
        console.log(e);
        }
    
        }

function forgotPassword(){
    window.location.href="../ForgotPassword/forgot.html" ;
}
