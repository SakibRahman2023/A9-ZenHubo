const latestPost = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const posts = await res.json();
    displayPost(posts);
}

const displayPost = posts =>{
    const latestContainer = document.getElementById('latest-container')
posts.forEach( post =>{
    // console.log(post);
    const postCard = document.createElement('div');
    postCard.classList =`card w-full lg:w-96 bg-base-100 border-2 inter` ;
    postCard.innerHTML =`
     <figure class="px-10 pt-10">
                        <img src="${post.cover_image}" alt="Shoes"
                            class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <p class="text-[#12132D99]"><i class="fa-regular fa-calendar-days"></i> ${post.author?.posted_date || 'No Published Date'}</p>
                        <h3 class="font-extrabold text-lg mulish">${post.title}</h3>
                        <h4 class="text-[#12132D99]">${post.description}</h4>
                       <div class="flex items-center space-x-4">
                        <!-- img -->
                        <div class="avatar">
                            <div class="w-12 rounded-full">
                                <img src="${post.profile_image}" />
                            </div>
                        </div>
                        <div>
                            <h3 class="font-bold ">${post.author.name}</h3>
                            <h4 class="text-[#12132D99] text-sm" >${post.author.designation || 'unknown'}</h4>
                        </div>
                       </div>
                    </div>
    
    `;

    latestContainer.appendChild(postCard);


})
}


latestPost();