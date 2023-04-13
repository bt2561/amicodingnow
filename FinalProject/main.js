  console.log('this works')

//---------- DATASET

const flowers = [
  {
    name: "MTA Bus Ticket Machine",
    category: "transportation",
    image:
      "https://user-images.githubusercontent.com/123427703/231647127-2ecb835f-dbf0-4b64-885d-d0025e827381.jpg"
  },
  {
    name: "LIRR Ticket Machine",
    category: "transportation",
    image: "https://user-images.githubusercontent.com/123427703/231647497-f3114e9f-7a5f-4af2-9807-185382736cbe.jpg"
  },
  {
    name: "Traffic Sign",
    category: "transportation",
    image:"https://user-images.githubusercontent.com/123427703/231647714-b5acb425-56af-4778-8d25-96e2e29d9507.jpg"
  },
  {
    name: "Barrier",
    category: "construction",
    image:"https://user-images.githubusercontent.com/123427703/231647858-147dd964-a885-430d-975b-523d8c9a4dc4.jpg"
  },
  {
    name: "Mailbox",
    category: "communication",
    image: "https://user-images.githubusercontent.com/123427703/231648559-7ada4f5e-934a-4013-af05-c007b806097b.jpg"
  },
  {name: "Wet Floor Sign",
  category: "sanitation",
  image: "https://user-images.githubusercontent.com/123427703/231648742-3976c983-d9c8-469e-afd8-cb801dc5cd53.jpg"
}
];

//---------- RENDER FLOWERS TO PAGE

const ul = document.querySelector("ul");

function renderFlowersToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('card', results[i].category) // Transportation
    // add flower name
    let title = document.createElement('h3')
    title.textContent = results[i].name // MTA Ticket Booth
    // add flower color
    let category = document.createElement('p')
    category.classList.add(results[i].category)
    category.textContent = results[i].category

    // add flower image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(category)
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
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')

    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // yellow | red

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('show')
        cards[i].classList.add('hide')
      }

    }
  }
}
filterBtns.addEventListener("click", filterFn);

// END OF FILTERING