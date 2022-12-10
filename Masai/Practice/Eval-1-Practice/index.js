const handleClick = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(email, password);
  try {
      const res = await  fetch(`https://reqres.in/api/login`,{
          method: 'POST',
          body: JSON.stringify({
              email,
              password,
          }),
          headers:{
              'Content-Type': 'application/json'
          }
      })
      const result =await res.json();
      console.log(result);
  } catch (e) {
      console.log(e);
  }
  

};
