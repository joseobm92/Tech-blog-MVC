async function newFormHandler(event) {
    event.preventDefault();
  
    const newContent = document.querySelector('#contentInput').value;
    const newTitle = document.querySelector('#titleInput').value;
    
  
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
      document.location.replace('/');
    } else {
      alert('Failed to add Post');
    }
  }
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  