console.log('this works')

//---------- DATASET

const flowers = [
  {
    name: "Tulip",
    color: "yellow",
    image:
      "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
  },
  {
    name: "Daffodil",
    color: "yellow",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
  {
    name: "Bluebell",
    color: "blue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
  },
  {
    name: "Rose",
    color: "red",
    image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
  }
];

//---------- RENDER FLOWERS TO PAGE

const ul = document.querySelector("ul");

function renderFlowersToPage(results) {
  //iterate over data set
  for(let i = 0; i < results.length; i++){
  //create the list item
  let listItem = document.createElement('li');
  // add a class to each item of the results
  listItem.classList.add('card', results[i].color)
  //add the flower name
  let title = document.createElement('h3')
  title.textContent = results[i].name //Rose

  //add flower color
  let color = document.createElement('p')
  color.classList.add(results[i].color)
  color.textContent = results[i].color

    //add flower image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

  ul.appendChild(listItem)
  listItem.appendChild(title) 
  listItem.appendChild(color)
  listItem.appendChild(image)
}
}
renderFlowersToPage(flowers);

//---------- FILTER FLOWERS BY COLOR

let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
  console.log(event.target)
  if(event.target.classList.contains('filter-btn')){
    //select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')

    //apply the active buttons to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') //yellow | red
    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
        }      
    }
  }
}
filterBtns.addEventListener("click", filterFn);