const commentFormHandler = async function (event) {
  event.preventDefault();

  const post_idString = document.querySelector('#post-id').innerHTML;
  const post_id = +post_idString
  const content = document.querySelector('#commentInput').value;

  if (content) {
      await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
              content,
              post_id
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      document.location.reload();
  }
};

document.querySelector('#new-comment-form').addEventListener("click", commentFormHandler);