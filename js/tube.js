const handleVideosCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const videosCategory = data.data;
    displayVideosCategory(videosCategory);
};

const displayVideosCategory = videosCategory =>{
    const categoryContainer = document.getElementById('category-container');

    videosCategory.forEach(category => {
      const categoryDiv = document.createElement('div');

      categoryDiv.classList = `btn-group ml-6 mb-4 lg:mb-0`;
      
      categoryDiv.innerHTML = `

      <button class="px-6 py-2 btn-bg rounded-md font-medium hover:bg-red-600 hover:text-white">${category.category}</button>
      
      `
      categoryContainer.appendChild(categoryDiv);
    });
}

handleVideosCategory();