async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#titleInput').value;
  const content = document.querySelector('#contentInput').value;
  
  
  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  
  // The Controller will handle this 'put' request to update a post

  const response = await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({

      title,
      content,

    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // What happens if the response is ok?
  // If the response is ok, that means that the dish was updated successfully. 
  if (response.ok) {
    document.location.replace(`/post/${id}`);
  } else {
    alert('Failed to edit post');
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
