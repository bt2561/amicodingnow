console.log('this works')

//---------- DATASET

const flowers = [
  {
    name: "MTA bus ticket machine",
    category: "transportation",
    image: "https://files.cargocollective.com/c1851482/mta-bus-ticket-machine.glb"
  },
  {
    name: "LIRR ticket machine",
    category: "transportation",
    image: "https://files.cargocollective.com/c483709/LIRR.glb"
  },
  {
    name: "no thru traffic sign",
    category: "transportation",
    image:"https://files.cargocollective.com/c1851567/no-thru-traffic.glb"
  },
  {
    name: "traffic barrier",
    category: "construction",
    image:"https://files.cargocollective.com/c1851482/traffic-barrier.glb"
  },
  {
    name: "mailbox",
    category: "communication",
    image: "https://files.cargocollective.com/c1851567/mailbox.glb"
  },
  {name: "wet floor sign",
  category: "sanitation",
  image: "https://files.cargocollective.com/c483709/WetSign-compressed-v2.glb"
},
{name: "cylindrical street blocker",
  category: "transportation",
  image: "https://files.cargocollective.com/c1851482/cylindrical-street-blocker.glb"
},
{name: "slender traffic blocker",
  category: "transportation",
  image: "https://files.cargocollective.com/c1851482/slender-traffic-blocker.glb"
},
{name: "fire hydrant",
  category: "sanitation",
  image: "https://files.cargocollective.com/c1851482/fire-hydrant.glb"
},
{name: "citibike",
  category: "transportation",
  image: "https://files.cargocollective.com/c1851482/citibike.glb"
},
{name: "hand sanitizer",
  category: "sanitation",
  image: "https://files.cargocollective.com/c1851567/hand-sanitizer.glb"
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
    let image = document.createElement('model-viewer')
    image.setAttribute('src', results[i].image)
    image.setAttribute('auto-rotate', true)
    image.setAttribute('rotation-per-second', '60deg')

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
