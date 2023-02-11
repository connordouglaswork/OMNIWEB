window.onload = function(){
var navbar = ` 
<header>
<a href="#" class="logo">OMNI ATHLETICS</a>
    <input type="checkbox" id="menu-bar">
    <label for="menu-bar">Menu</label>
    <nav class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Downloads</a>
          <ul>
            <li><a href="#">OMNI Calculator</a></li>
            <li><a href="#">Injury Risk AI</a></li>
            <li><a href="#">Composition Tracker</a></li>
          </ul>
        </li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    <nav>
</header>`;

        // inserting navbar in beginning of body
        const NavBar = document.getElementsByClassName("LoadNavigation");
        NavBar[0].insertAdjacentHTML("afterbegin", navbar);
}