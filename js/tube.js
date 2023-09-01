const handleVideosCategories = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const videosCategories = data.data;
    displayVideosCategories(videosCategories);
};

const displayVideosCategories = videosCategories => {
    const categoriesContainer = document.getElementById('categories-container');

    videosCategories.forEach(categories => {
      const categoriesDiv = document.createElement('div');

      categoriesDiv.classList = `btn-group ml-6 mb-4 lg:mb-0`;
      
      categoriesDiv.innerHTML = `

      <button onclick = "handleVideosCategory('${categories?.category_id}')" class="px-6 py-2 btn-bg rounded-md font-medium hover:bg-red-500 hover:text-white">${categories?.category}</button>
      
      `
      categoriesContainer.appendChild(categoriesDiv);
    });
};


const handleVideosCategory = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const categoryVideo = data.data;
    displayCategoryVideo(categoryVideo);
}


const displayCategoryVideo = categoryVideo => {
    const showVideoContainer =  document.getElementById('show-video-container');

    showVideoContainer.textContent = "";

    categoryVideo.forEach(showVideos => {
        console.log(showVideos);

        const showVideosDiv = document.createElement("div");
        showVideosDiv.classList = `card bg-base-100 shadow-xl`;

        // const authorProfile = showVideos.authors[0].profile_picture;

        showVideosDiv.innerHTML = `

        <figure><img class = "lg:w-full lg:h-[170px]" src="${showVideos?.thumbnail}"/></figure>
            <div class="p-6">
              <h2 class ="flex justify-start items-center gap-3">
               <img class = "w-[40px] h-[40px] rounded-full" src = "${showVideos?.authors[0].profile_picture}" />
                <div class = "text-md font-bold">${showVideos.title}</div>
              </h2>
              <div class="justify-start mt-3 ml-10">
                <div class="badge ">${showVideos?.authors[0]?.profile_name}</div> 
                <div class="badge ">${showVideos?.authors[0]?.verified}</div>
              </div>
              <div class = "mt-3 ml-12">${showVideos.others.views} views</div>
            </div>
        
        `
        showVideoContainer.appendChild(showVideosDiv);
    });
}


handleVideosCategories();
handleVideosCategory("1000");