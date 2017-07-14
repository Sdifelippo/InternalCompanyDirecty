for (let i = 0; i < customers.results.length; i++) {

  const employees = `
  <div class = "container">
      <img src= ${customers.results[i].picture.large}>
      <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
      <a>${customers.results[i].email}</a>

    <div class = "info">
      ${customers.results[i].location.street}
    </div>

    <div class = "loc">
      ${customers.results[i].location.city},
      ${customers.results[i].location.state},
      ${customers.results[i].location.postcode}
    </div>

    <div class = "info">
      ${customers.results[i].phone}
    </div>
    <div class = "ssn">
      ${customers.results[i].id.value}
    </div>

`;
  document.querySelector('body').innerHTML += employees;
}
