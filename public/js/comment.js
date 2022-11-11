async function newCommentHandler(event) {
    event.preventDefault();
    
    const newComment = document.querySelector('#commentInput').value;

    console.log(newComment)

    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({

        description: newComment,

     }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/`);
    } else {
      alert('Failed to add comment');
    }
  }
  
  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
  