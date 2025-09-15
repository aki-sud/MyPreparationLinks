document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dynamic-link').forEach(link => {
    link.href = link.textContent;
  });

  fetch('data_dsa.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json();
    })
    .then(data => {
      const tableBody = document.querySelector('#dsa-geometry-table tbody');

      // Access only the 'geometry' array inside the JSON
      const geometryItems = data.geometry;
      
      geometryItems.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('increment-first-counter');

        row.innerHTML = `
          <td></td>
          <td>${item.name}</td>
          <td><a href="${item.link}" target="_blank">${item.link}</a></td>
          <td>${item.description}</td>
          <td>${item.done ? "YES" : "NO"}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error fetching or parsing data:", error);
    });
    
  fetch('data_hld.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json();
    })
    .then(data => {
      const tableBody = document.querySelector('#hld-articles-table tbody');

      // Access only the 'geometry' array inside the JSON
      const articlesitesItems = data.article_sites;

      articlesitesItems.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('increment-first-counter');

        row.innerHTML = `
          <td></td>
          <td>${item.name}</td>
          <td>
          ${
            Array.isArray(item.link)
              ? `<ul>${item.link.map(linkItem => `<li><a href="${linkItem.link}" target="_blank">${linkItem.info}</a></li>`).join('')}</ul>`
              : `<a href="${item.link}" target="_blank">${item.link}</a>`
          }
          </td>
          <td>${item.description}</td>
          <td>${item.done ? "YES" : "NO"}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error fetching or parsing data:", error);
    });

  fetch('data_hld.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json();
    })
    .then(data => {
      const tableBody = document.querySelector('#hld-questions-table tbody');

      // Access only the 'geometry' array inside the JSON
      const questionsItems = data.questions;

      questionsItems.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('increment-first-counter');

        row.innerHTML = `
          <td></td>
          <td>${item.name}</td>
          <td>
          ${
            Array.isArray(item.link)
              ? `<ul>${item.link.map(linkItem => `<li><a href="${linkItem.link}" target="_blank">${linkItem.info}</a></li>`).join('')}</ul>`
              : `<a href="${item.link}" target="_blank">${item.link}</a>`
          }
          </td>
          <td>${item.description}</td>
          <td>${item.done ? "YES" : "NO"}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error fetching or parsing data:", error);
    });

  fetch('data_lld.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json();
    })
    .then(data => {
      const tableBody = document.querySelector('#lld-table tbody');

      data.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('increment-first-counter');

        row.innerHTML = `
          <td></td>
          <td>${item.name}</td>
          <td><a href="${item.link}" target="_blank">${item.link}</a></td>
          <td>${item.description}</td>
          <td>${item.done ? "YES" : "NO"}</td>
        `;

        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error("Error fetching or parsing data:", error);
    });
});

// function toggleSidebar() {
//   const sidebar = document.getElementById('sidebar');
//   const main = document.getElementById('main');

//   if (window.innerWidth <= 768) {
//     // Mobile toggle
//     sidebar.classList.toggle('active');
//   } else {
//     // Desktop toggle
//     sidebar.classList.toggle('collapsed');
//     main.classList.toggle('collapsed');
//   }
// }

// // Close sidebar on mobile when clicking a link or outside
// function closeSidebar() {
//   const sidebar = document.getElementById('sidebar');
//   if (window.innerWidth <= 768) {
//     sidebar.classList.remove('active');
//   }
// }

// function handleMainClick() {
//   if (window.innerWidth <= 768) {
//     closeSidebar();
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  // Existing fetch logic...
  
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle('show');
      } else {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
      }
    });
  }
});
// document.getElementById('sidebarToggle').addEventListener('click', function() {
//   const sidebar = document.getElementById('sidebar');
//   sidebar.classList.toggle('collapsed');
// });