

const LoadDiscuss = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayPosts(posts);
}

const displayPosts = posts => {
    // console.log(posts);
   
    // step 1
    const postContainer = document.getElementById('post-container');
    postContainer.textContent ='';
    

    posts.forEach(post => {
        // console.log(post);
        // step 2
        
        const postCard = document.createElement('div');
        postCard.classList = `card w-full lg:w-[770px] bg-[#797DFC1A] shadow-xl mb-10`;

        // step 3
        postCard.innerHTML = `
        <div class="card-body">
             <div class="lg:flex space-x-5">
                 <div  class="avatar indicator ">
                <span class="indicator-item badge ${ post.isActive ? 'bg-green-500' : 'bg-red-500' } "></span>
                 <div class="w-20 h-20 rounded-lg">
                 <img alt="Tailwind CSS examples"
                src="${post.image}" />
                </div>
                </div>
                <div class="flex-1">
                 <div class="flex justify-start text-sm font-medium text-[#12132DCC] ">
                        <p class="inter">#${post.category}</p>
                        <p class="inter">Author : <span>${post.author.name}</span></p>
                </div>
                    <h3 class="mulish font-bold text-xl text-[#12132D] py-4">${post.title}</h3>
                     <p class="text-[#12132D99] pb-4 inter">${post.description}</p>
                    <hr class="text=[#12132DCC] p-3 border-dashed">
                    <div class="flex justify-between ">
                         <div class="flex space-x-2 lg:space-x-4">
                             <div class="flex text-[#12132D99]">
                                <p><i class="fa-regular fa-message"></i></p>
                                <p class="inter pl-1 lg:pl-3">${post.comment_count}</p>
                            </div>
                            <div class="flex text-[#12132D99]">
                                <p><i class="fa-regular fa-eye"></i></p>
                                 <p class="inter pl-1 lg:pl-3">${post.view_count}</p>
                            </div>
                            <div class="flex text-[#12132D99]">
                               <p><i class="fa-regular fa-clock"></i></p>
                               <p class="inter pl-1 lg:pl-3">${post.posted_time} min</p>
                            </div>
                             </div>
                            <div>
                              <p onclick="selectPosts('${escape(post.title)}','${post.view_count}')"  class="py-1 px-2 w-8 rounded-full bg-[#10B981] text-white"><i class="fa-regular fa-envelope-open"></i></p>
                                </div>
                            </div>
            
                             </div>
                            </div>
                        </div>
        
        
        `;


        // step 4
        setTimeout(() => {
            postContainer.appendChild(postCard);
        }, 2000

        )

        


    });
    
    setTimeout(() => {
        TogLoadingSpinner(false);
    }, 2000

    )
    
}


// handle Search Button
const handleSearch = () =>{
    TogLoadingSpinner(true);
    const searchField = document.getElementById('seach-field');
    const searchText = searchField.value;
    // console.log(searchText)
    LoadDiscuss(searchText);
} 


// loading

const TogLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading');
   if(isLoading){
    loadingSpinner.classList.remove('hidden');
   }
   else{
    loadingSpinner.classList.add('hidden');
   }
}



// second stage
const LoadDiscuss1 = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayPosts1(posts);
}

const displayPosts1 = posts => {
    // console.log(posts);

    // step 1
    const postContainer = document.getElementById('post-container');
    postContainer.textContent = '';


    posts.forEach(post => {
        // console.log(post);
        // step 2

        const postCard1 = document.createElement('div');
        postCard1.classList = `card w-full lg:w-[770px] bg-[#797DFC1A] shadow-xl mb-10`;

        // step 3
        postCard1.innerHTML = `
        <div class="card-body">
             <div class="lg:flex space-x-5">
                 <div  class="avatar indicator ">
                <span class="indicator-item badge ${post.isActive ? 'bg-green-500' : 'bg-red-500'} "></span>
                 <div class="w-20 h-20 rounded-lg">
                 <img alt="Tailwind CSS examples"
                src="${post.image}" />
                </div>
                </div>
                <div class="flex-1">
                 <div class="flex justify-start text-sm font-medium text-[#12132DCC] ">
                        <p class="inter">#${post.category}</p>
                        <p class="inter">Author : <span>${post.author.name}</span></p>
                </div>
                    <h3 class="mulish font-bold text-xl text-[#12132D] py-4">${post.title}</h3>
                     <p class="text-[#12132D99] pb-4 inter">${post.description}</p>
                    <hr class="text=[#12132DCC] p-3 border-dashed">
                    <div class="flex justify-between ">
                         <div class="flex space-x-2 lg:space-x-4">
                             <div class="flex text-[#12132D99]">
                                <p><i class="fa-regular fa-message"></i></p>
                                <p class="inter pl-1 lg:pl-3">${post.comment_count}</p>
                            </div>
                            <div class="flex text-[#12132D99]">
                                <p><i class="fa-regular fa-eye"></i></p>
                                 <p class="inter pl-1 lg:pl-3">${post.view_count}</p>
                            </div>
                            <div class="flex text-[#12132D99]">
                               <p><i class="fa-regular fa-clock"></i></p>
                               <p class="inter pl-1 lg:pl-3">${post.posted_time} min</p>
                            </div>
                             </div>
                            <div>
                              <p onclick="selectPosts('${escape(post.title) }','${post.view_count}')" class="py-1 px-2 w-8 rounded-full bg-[#10B981] text-white"><i class="fa-regular fa-envelope-open"></i></p>
                                </div>
                            </div>
            
                             </div>
                            </div>
                        </div>
        
        
        `;


        postContainer.appendChild(postCard1);



    });

  
}



LoadDiscuss1();





const selectPosts = async (title,view_count) => {
    

    const spanElement = document.getElementById('span');
    spanElement.textContent = parseInt(spanElement.textContent) + 1;

    
    const postContainer = document.getElementById('div-container');

    
        const postCard1 = document.createElement('div');
        postCard1.classList = `flex justify-between bg-[white] rounded-2xl p-2 items-center space-x-3 mt-5 `;

        postCard1.innerHTML = `
            <div>
                <h5 class="mulish font-semibold text-[#12132D] py-4">${unescape(title)}</h5>
            </div>
            <div class="flex text-[#12132D99]">
                <p><i class="fa-regular fa-message"></i></p>
                <p class="inter pl-3">${view_count}</p>
            </div>
        `;

        postContainer.appendChild(postCard1);
    
}


