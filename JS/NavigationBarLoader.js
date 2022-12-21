window.onload = function(){
var navbar = ` 
<header>
<div class="Logo">
    <h1>OMNI ATHLETICS</h1>
</div>
<nav>
    <ul>
        <li>
            <a href="../Index.html" class="MenuLayerOne">
                <span class="text">Home</span>
            </a>
        </li>

        <li>
            <a href="#" class="MenuLayerOne">
                <span class="text">Services</span>
            </a>
            <div class="MenuLayerTwo">
                <ul>
                    <li>
                        <a href="PageNotFound.html" class="MenuLayerTwoItem">
                            <span class="text">Training</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="MenuLayerTwoItem">
                            <span class="text">Web App</span>
                        </a>
                        <div class="MenuLayerThree">
                            <ul>
                                <li>
                                    <a href="PageNotFound.html">
                                        <span class="text">1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="PageNotFound.html">
                                        <span class="text">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="PageNotFound.html">
                                        <span class="text">3</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="MenuLayerTwoItem">
                            <span class="text">Downloads</span>
                        </a>
                        <div class="MenuLayerThree">
                            <ul>
                                <li>
                                    <a href="PageNotFound.html">
                                        <span class="text">1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="PageNotFound.html">
                                        <span class="text">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="PageNotFound.html">
                                        <span class="text">3</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="PageNotFound.html" class="MenuLayerTwoItem">
                            <span class="text">Useful</span>
                        </a>
                    </li>
                </ul>
            </div>
        </li>

        <li>
            <a href="PageNotFound.html" class="MenuLayerOne">
                <span class="text">About</span>
            </a>
        </li>

        <li>
            <a href="ContactPage.html" class="MenuLayerOne">
                <span class="text">Contact</span>
            </a>
        </li>
    </ul>
</nav>
</header>`;

        // inserting navbar in beginning of body
        const NavBar = document.getElementsByClassName("LoadNavigation");
        NavBar[0].insertAdjacentHTML("afterbegin", navbar);
}