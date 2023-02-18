window.onload = function(){
var navbar = ` 
<a href="../Index.html" class="logo">OMNI ATHLETICS</a>
    <input type="checkbox" id="menu-bar">
    <label for="menu-bar">Menu</label>
    <nav class="navbar">
      <ul>
        <li><a href="../Index.html">Home</a></li>
        <li><a href="../Pages/RequestTrainingProgramPage.html">Sign Up</a></li>
        <li><a href="">Downloads</a>
          <ul>
            <li><a href="../Pages/PageNotFound.html">OMNI Calculator</a></li>
            <li><a href="../Pages/PageNotFound.html">Injury Risk AI</a></li>
            <li><a href="../Pages/PageNotFound.html">Remote Coach</a></li>
          </ul>
        </li>
        <li><a href="../Pages/ResourcesPage.html">Resources</a></li>
        <li><a href="../Pages/AboutUsPage.html">About</a></li>
        <li><a href="../Pages/ContactPage.html">Contact</a></li>
      </ul>
    <nav>`;

        // inserting navbar in beginning of body
        const NavBar = document.getElementsByClassName("LoadNavigation");
        NavBar[0].insertAdjacentHTML("afterbegin", navbar);
}