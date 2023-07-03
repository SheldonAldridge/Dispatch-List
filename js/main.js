
 // Get references to the buttons and elements
 const dwButton = document.getElementById('dw-button');
 const dbButton = document.getElementById('db-button');
 const districtWatch = document.getElementById('district-watch');
 const districtBasset = document.getElementById('district-basset');

 // Add click event listeners to the buttons
 dwButton.addEventListener('click', function() {
   // Toggle visibility of elements
   
   districtWatch.style.display = 'block';
   districtBasset.style.display = 'none';
 });

 dbButton.addEventListener('click', function() {
   // Toggle visibility of elements
   districtWatch.style.display = 'none';
   districtBasset.style.display = 'block';
 });
