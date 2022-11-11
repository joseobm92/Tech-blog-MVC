async function newFormHandler(event) {
    event.preventDefault();
  
    const newContent = document.querySelector('#contentInput').value; //grab this values from all-posts or all-posts-admin
    const newTitle = document.querySelector('#titleInput').value; //grab this values from all-posts or all-posts-admin
    
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({

        title: newTitle,
        content: newContent,
       
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/'); // if the response is positive lay the home URL
    } else {
      alert('Failed to add Post');
    }
  }
  
  document
    .querySelector('.new-post-form') // listening to the submit on all-post or all-post-admin
    .addEventListener('submit', newFormHandler);
  