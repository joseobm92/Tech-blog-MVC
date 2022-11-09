// async function newFormHandler(event) {
//     event.preventDefault();
//     const post_title = document.querySelector('#post_title').value;
//     const comment = document.querySelector('#comment').value;
    
//     const response = await fetch(`/api/post`, {
//       method: 'POST',
//       body: JSON.stringify({
//         post_title,
//         comment,
//      }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to add post');
//     }
//   }
  
//   document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  