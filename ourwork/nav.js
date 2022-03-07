const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML =  `
    <div class="nav">
    <img src="img/Thuryliya-logo.png" class="web-logo">
      <div class="nav-items">
          <div class="search">
              <input type="text" class="search-box" placeholder="search brand, product">
              <button class="search-btn">search</button>
          </div>
          <a href="#"><img src="img/user.png" alt=""></a>
          <a href="#"></a><img class="cart" src="img/cart.png" alt=""></a>
      </div>              
</div>
<ul class="links-container">
<li class="lint-item"><a href="../index.html" class="link">Home</a></li>
<li class="lint-item"><a href="../ourwork/ourwork web/ourw.html" class="link">Our Work</a></li>
<li class="lint-item"><a href="../Login Form/index.html" class="link">Login</a></li>
<li class="lint-item"><a href="../public/index.html" class="link">Store</a></li>
<li class="lint-item"><a href="../Join Us/Join Us.html" class="link">Join Us</a></li>
</ul>
    `;
}

createNav();