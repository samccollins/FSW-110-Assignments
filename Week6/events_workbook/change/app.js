const input = document.getElementById('change-me');
input.addEventListener('change', (e) => document.getElementById('output').textContent = e.target.value);