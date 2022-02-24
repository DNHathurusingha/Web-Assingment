/*header*/

const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
    <img src="img/Thuryliya-logo.png" class="web-logo">
      <div class="nav-items">
          <div class="search">
              <input type="text" class="search-box" placeholder="search ">
              <button class="search-btn">search</button>
          </div>
          <a href="#"><img src="img/user.png" alt=""></a>
          <a href="#"><img class="cart" src="img/cart.png" alt=""></a>
      </div>              
</div>
<ul class="links-container">
   <li class="lint-item"><a href="../index.html" class="link">Home</a></li>
   <li class="lint-item"><a href="#" class="link">About Us</a></li>
   <li class="lint-item"><a href="#" class="link">Login</a></li>
   <li class="lint-item"><a href="#" class="link">Store</a></li>
   <li class="lint-item"><a href="#" class="link">Join Us</a></li>
</ul>
    `;
}

/*See more */

createNav();

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
})

/*Validation*/

function validation() {
    var Full_name = document.getElementById("Full name").value;
    var ID_Number = document.getElementById("ID Number").value;
    var Gender = document.getElementById("Gender").value;
    var Contact_Number = document.getElementById("Contact Number").value;
    var Email = document.getElementById("Email").value;
    var Current_address = document.getElementById("Current Address").value;
    var Why_would_you_think_to_do_volunteer = document.getElementById("Why would you think to do volunteer").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (Full_name.length < 5) {
        text = "Please Enter Full Name";
        error_message.innerHTML = text;
        return false;
    }

    if (ID_Number.length < 12) {
        text = "Please Enter valid ID Number";
        error_message.innerHTML = text;
        return false;
    }

    if (Gender.length < 6) {
        text = "Please specify your Gender (Male/Female)";
        error_message.innerHTML = text;
        return false;
    }

    if (isNaN(Contact_Number) || Contact_Number.length != 10) {
        text = "Please Enter valid Contact number";
        error_message.innerHTML = text;
        return false;
    }

    if (Email.indexOf("@") == -1 || Email.length < 6) {
        text = "Please Enter valid Email Address";
        error_message.innerHTML = text;
        return false;
    }

    if (Current_address.length > 10) {
        text = "Please specify Address number/street/city";
        error_message.innerHTML = text;
        return false;
    }


    if (Why_would_you_think_to_do_volunteer < 10) {
        text = "Atleast add two more sentences";
        error_message.innerHTML = text;
        return false;
    }


    alert("Form Submitted Sucessfully!")
    return true;


}