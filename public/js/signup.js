const signupFormHandler = async (event) => {
    event.preventDefault();
  //grab username input
    const username = document.querySelector('#usernameInput').value.trim(); 
  // grab password input
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/user', { //do a fetch to user route with a POST to create a new user
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); //dashboard URL
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);