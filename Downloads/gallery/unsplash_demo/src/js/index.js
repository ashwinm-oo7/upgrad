import{createApi} from 'unsplash-js';
const main=document.querySelector('#main');
const modernButton = document.querySelector('.modern');
const classicbutton = document.querySelector('.classic');
const sculpturesButton = document.querySelector('.sculptures');
const cubismButton=document.querySelector('.cubism');
const abstractButton = document.querySelector('.Abstract-Art');

const ganeshabutton = document.querySelector('.ganesha');
const city=document.querySelector('.city');
const favorites = document.querySelector('.favorites');
const unsplash = createApi({
  accessKey:'765ZUTCQyCAVg7bi7rTEmgJOD2ow3coRYBTsvI-X6C8',

});



  unsplash.search
    .getPhotos({
      query: 'Art Gallery',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          const artistLocation = photo.user ? photo.user.location : 'Location not available';

          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
              <p>Location: ${artistLocation}</p>

            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
        const imageElements = document.querySelectorAll('.photo-container img');
        imageElements.forEach((image) => {
          image.addEventListener('click', () => {

            unsplash.search
            .getPhotos({
              query: image,
              page: 1,
              perPage: 16,
              orientation: 'portrait',
            })
            .then((result) => {
              if (result.type === 'success') {
                const photos = result.response.results;
                // Handle displaying search results here, including artist names
                const getHtml = photos.map((photo) => {
                  // Check if the artist's name is available in the photo's user object
                  const artistName = photo.user ? photo.user.name : 'Unknown Artist';
                  return `
                    <div class="photo-container">
                      <img src="${photo.urls.small}" alt="${photo.alt_description}" />
                      <p>Artist: ${artistName}</p>
                                    <button class="like-button" data-image-id="${photo.id}">Like</button>
                    </div>
                  `;
                });
                main.innerHTML = getHtml.join('');
                const likeButtons = document.querySelectorAll('.like-button');
                likeButtons.forEach((button) => {
                  button.addEventListener('click', () => {
                    const imageId = button.getAttribute('data-image-id');
                    toggleLike(imageId);
                    updateLikeButtons();
                  });
                });
                
                // Update like buttons based on the current liked images list
                updateLikeButtons();
              }
            })
            .catch((error) => {
              console.error('Error searching Unsplash:', error);
            });

          });
        });

      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      


// Function to handle the search and display photos with artist names
const handleSearch = () => {
  const searchInput = document.querySelector('#search-input');
  const searchTerm = searchInput.value;

  unsplash.search
    .getPhotos({
      query: searchTerm,
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        // Handle displaying search results here, including artist names
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
                            <button class="like-button" data-image-id="${photo.id}">Like</button>
            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const imageId = button.getAttribute('data-image-id');
            toggleLike(imageId);
            updateLikeButtons();
          });
        });
        
        // Update like buttons based on the current liked images list
        updateLikeButtons();
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
};

// Attach the search function to the search button's click event
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', handleSearch);

// ... Other code ...



modernButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Modern ARt',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
              <button class="like-button" data-image-id="${photo.id}">Like</button>

            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const imageId = button.getAttribute('data-image-id');
            toggleLike(imageId);
            updateLikeButtons();
          });
        });
        
        // Update like buttons based on the current liked images list
        updateLikeButtons();
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      }
    );


classicbutton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Classic Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
              <button class="like-button" data-image-id="${photo.id}">Like</button>

            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
                const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const imageId = button.getAttribute('data-image-id');
            toggleLike(imageId);
            updateLikeButtons();
          });
        });
        
        // Update like buttons based on the current liked images list
        updateLikeButtons();
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      }
    );


sculpturesButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Sculptures ',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
              <button class="like-button" data-image-id="${photo.id}">Like</button>

            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const imageId = button.getAttribute('data-image-id');
            toggleLike(imageId);
            updateLikeButtons();
          });
        });
        
        // Update like buttons based on the current liked images list
        updateLikeButtons();
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      }
    );


cubismButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Cubism Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
              <button class="like-button" data-image-id="${photo.id}">Like</button>

            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const imageId = button.getAttribute('data-image-id');
            toggleLike(imageId);
            updateLikeButtons();
          });
        });
        
        // Update like buttons based on the current liked images list
        updateLikeButtons();

      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      }
    );


abstractButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Abstract Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      }
    );



city.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Mumbai',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
  }
    );

ganeshabutton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Mumbai Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      }
    );


favorites.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: ' Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getHtml = photos.map((photo) => {
          // Check if the artist's name is available in the photo's user object
          const artistName = photo.user ? photo.user.name : 'Unknown Artist';
          return `
            <div class="photo-container">
              <img src="${photo.urls.small}" alt="${photo.alt_description}" />
              <p>Artist: ${artistName}</p>
            </div>
          `;
        });
        main.innerHTML = getHtml.join('');
      }
    })
    .catch((error) => {
      console.error('Error searching Unsplash:', error);
    });
      }
    );



// ************************************************************************************************


// ========Like the images function===================================================
// Initialize likedImages array with data from local storage if available
let likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];

// Function to toggle the like status of an image
const toggleLike = (imageId) => {
  const imageIndex = likedImages.indexOf(imageId);
  if (imageIndex === -1) {
    // Image is not liked, so add it to the liked images list
    likedImages.push(imageId);
  } else {
    // Image is already liked, so remove it from the liked images list
    likedImages.splice(imageIndex, 1);
  }

  // Update local storage with the new likedImages data
  localStorage.setItem('likedImages', JSON.stringify(likedImages));
};

// Function to update the like buttons based on the current liked images list
const updateLikeButtons = () => {
  likeButtons.forEach((button) => {
    const imageId = button.getAttribute('data-image-id');
    if (likedImages.includes(imageId)) {
      button.textContent = 'Unlike';
    } else {
      button.textContent = 'Like';
    }
  });
};

// Attach click event listeners to the like buttons
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const imageId = button.getAttribute('data-image-id');
    toggleLike(imageId);
    updateLikeButtons();
  });
});
// =============================================================

