let main = document.querySelector('.container');

let searchIcon = document.querySelector('.search-icon');
let searchBox = document.querySelector('.search-bar');

searchIcon.addEventListener('click', function () {
    searchBox.classList.toggle('hide');
});
// rendering employees
let employees = [];
let counter = 0;

async function getData () { 
        $.ajax({
            /* The whisperingforest.org URL is not longer valid, I found a new one that is similar... */
            url: 'https://randomuser.me/api/',
            async: true,
            dataType: 'json',
            success: function (data) {
                employees.push(data.results[0]);
                counter++;
                if (counter < 12) {
                    getData();
                } else {
                    displayData();
                }               
            }
        });
}

 function displayData() {
     for (let x = 0; x < employees.length; x++) {
         // add array data parsed into html
         console.log(employees[x]);
         main.innerHTML += ` <span class="close hide">X</span> <div class="card">
                    <img src="${employees[x].picture.large}" />
                    <div class="card-body">
                        <h3>${employees[x].name.first} ${employees[x].name.last}</h3>
                        <p>${employees[x].login.username}</p>
                        
                    </div>
                    <div class="lastChild hide">
                                                <ul class="details" style="text-align: center;">
                            <li>${employees[x].email}</li>
                            <li>${employees[x].gender}</li>
                            <li>${employees[x].location.city}, ${employees[x].location.state}  </li>
                            <li>${employees[x].location.country}</li>
                            <li>${employees[x].cell}</li>
                           

                        </ul>
                        <div style="display: grid; grid-template-columns: 1fr 1fr;"><button>LEFT</button><button>RIGHT</button></div>
                    </div>
                </div>`;
    }
}



 getData();
