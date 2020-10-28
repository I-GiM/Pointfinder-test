// // JavaScript file

// const homeStyleDropdown = document.getElementById('home-style-dropdown');

// const showHomeDropdown = () => {
//   homeStyleDropdown.classList.add('show');
//   homeStyleDropdown.classList.remove('d-none');
// }
// const hideHomeDropdown = () => {
//   homeStyleDropdown.classList.remove('show');
//   homeStyleDropdown.classList.add('d-none');
// }
// const showHomeOnclick = () => {
//   homeStyleDropdown.classList.toggle('d-none')
// }
const homeTitle = document.getElementById('home-title');
const homeDropdown = document.getElementById('home-dropdown');
const codesTitle = document.getElementById('codes-title');
const codesDropdown = document.getElementById('shortcodes-dropdown');
const categoriesTitle = document.getElementById('categories-title');
const categoriesDropdown = document.getElementById('categories-dropdown');
const categoriesEducation = document.getElementById('categories-education');
const educationDropdown = document.getElementById('education-dropdown');
const categoriesHotel = document.getElementById('categories-hotel');
const hotelDropdown = document.getElementById('hotel-dropdown');
const categoriesPets = document.getElementById('categories-pets');
const petsDropdown = document.getElementById('pets-dropdown');
const categoriesJobs = document.getElementById('categories-jobs');
const jobsDropdown = document.getElementById('jobs-dropdown');
const categoriesCars = document.getElementById('categories-cars');
const carsDropdown = document.getElementById('cars-dropdown');
const categoriesEstate = document.getElementById('categories-estate');
const estateDropdown = document.getElementById('estate-dropdown');
const listingsTitle = document.getElementById('listings-title');
const listingsDropdown = document.getElementById('listings-dropdown');
const pagesTitle = document.getElementById('pages-title');
const pagesDropdown = document.getElementById('pages-dropdown');
const blogsTitle = document.getElementById('blogs-title');
const blogsDropdown = document.getElementById('blogs-dropdown');

const openHome = () => {
  homeDropdown.classList.toggle('d-none');
  homeTitle.classList.toggle('sidebar-item--title');
}
const openCode = () => {
  codesDropdown.classList.toggle('d-none');
  codesTitle.classList.toggle('sidebar-item--title');
}
const openCategories = () => {
  categoriesDropdown.classList.toggle('d-none');
  categoriesTitle.classList.toggle('sidebar-item--title');
}
const openEducation = () => {
  educationDropdown.classList.toggle('d-none');
  educationDropdown.classList.toggle('d-flex');
  categoriesEducation.classList.toggle('sidebar-item--title');
}
const openHotel = () => {
  hotelDropdown.classList.toggle('d-none');
  hotelDropdown.classList.toggle('d-flex');
  categoriesHotel.classList.toggle('sidebar-item--title');
}
const openPets = () => {
  petsDropdown.classList.toggle('d-none');
  petsDropdown.classList.toggle('d-flex');
  categoriesPets.classList.toggle('sidebar-item--title');
}
const openJobs = () => {
  jobsDropdown.classList.toggle('d-none');
  jobsDropdown.classList.toggle('d-flex');
  categoriesJobs.classList.toggle('sidebar-item--title');
}
const openCars = () => {
  carsDropdown.classList.toggle('d-none');
  carsDropdown.classList.toggle('d-flex');
  categoriesCars.classList.toggle('sidebar-item--title');
}
const openEstate = () => {
  estateDropdown.classList.toggle('d-none');
  estateDropdown.classList.toggle('d-flex');
  categoriesEstate.classList.toggle('sidebar-item--title');
}
const openListings = () => {
  listingsDropdown.classList.toggle('d-none');
  listingsTitle.classList.toggle('sidebar-item--title');
}
const openPages = () => {
  pagesDropdown.classList.toggle('d-none');
  pagesDropdown.classList.toggle('d-flex');
  pagesTitle.classList.toggle('sidebar-item--title');
}
const openBlogs = () => {
  blogsDropdown.classList.toggle('d-none');
  blogsDropdown.classList.toggle('d-flex');
  blogsTitle.classList.toggle('sidebar-item--title');
}
function openSideNav(){
  document.getElementById('sidebar-wrap').style.width='100%';
  document.getElementById('sidebar').style.width='300px';
 }
function closeSideNav(){
  document.getElementById('sidebar-wrap').style.width='0px';
  document.getElementById('sidebar').style.width='0px';
 }
function openSideAuth(){
  document.getElementById('sideauth-wrap').style.width='100%';
  document.getElementById('sideauth').style.width='300px';
 }
function closeSideAuth(){
  document.getElementById('sideauth-wrap').style.width='0px';
  document.getElementById('sideauth').style.width='0px';
 }