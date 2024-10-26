function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  console.log(sidebar);
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
  console.log(sidebar);
}

// Call the functions
showSidebar();
hideSidebar();
