document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form submission
    
    const searchQuery = document.querySelector('.search-input').value;
    const spinner = document.getElementById('loadingSpinner');
    const resultsDiv = document.getElementById('searchResults');
  
    try {
      // Show loading spinner and clear previous results
      spinner.style.display = 'block';
      resultsDiv.innerHTML = '';
  
      // Fetch search results from the server
      const response = await fetch(`/search?query=${encodeURIComponent(searchQuery)}`, {
        method: 'GET',
      });
  
      // Parse the response into JSON
      const combinedResults = await response.json();
    
      
      // Hide spinner once data is received
      spinner.style.display = 'none';
  
      // Display the results or a 'No results' message
      if (combinedResults.length > 0) {
        resultsDiv.innerHTML = `
          <div class="results-grid">
            ${combinedResults.map(pkg => `
              <div class="result-card">
                <img src="${pkg.image}" alt="${pkg.title}" class="result-image">
                <div class="result-info">
                  <h2 class="result-title">${pkg.title}</h2>
                  <p class="result-location"><i class="fa fa-map-marker"></i> ${pkg.location}</p>
                  <p class="result-country"><i class="fa fa-flag"></i> ${pkg.country}</p>
                  <p class="result-price"><i class="fa fa-money"></i> &#8377;${pkg.price}</p>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        resultsDiv.innerHTML = '<p>No results found for your search.</p>';
      }
      
    } catch (error) {
      spinner.style.display = 'none';
      resultsDiv.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
      console.error('Error fetching search results:', error);
    }
  });
  