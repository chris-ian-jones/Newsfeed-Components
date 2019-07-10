/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Test'
];

// let newArray = [1,2,3]

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(){
  // create new menu elements
  const menuContainer = document.createElement('div')
  const menuUnorderedList = document.createElement('ul')

  // add class for css styling to menuContainer div
  menuContainer.classList.add('menu')

  // grab the header div
  const headerDiv = document.querySelector('.header')

  // append the menuContainer as child of header div
  headerDiv.appendChild(menuContainer)
  // append unordered list element as child of menuContainer 
  menuContainer.appendChild(menuUnorderedList)
  
  // iterate over array of menu items, for each item:
  // create a new li element
  // add the arrays item as text content to new li element
  // then append the li element as last child to unordered list element
  menuItems.forEach(item => {
    const menuListItem = document.createElement('li')
    menuListItem.textContent = item
    menuUnorderedList.appendChild(menuListItem)    
  })
 
  // grab the menu button element
  const menuButton = document.querySelector('img.menu-button')
  // add event listener to toggle the class of menu--open on menu container, when menu button is clicked
  menuButton.addEventListener('click', event => {
    menuContainer.classList.toggle('menu--open')
  })
}

createMenu()