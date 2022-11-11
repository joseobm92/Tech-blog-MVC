async function newCommentHandler(event) {
  event.preventDefault();

  const newComment = document.querySelector('#commentInput').value;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

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
    document.location.replace(`comment/${id}`);
  } else {
    alert('Failed to add comment');
  }
}

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
