document.getElementById('save-btn').addEventListener('click', () => {
  const glasses = document.querySelectorAll('.glass.active');
  const waterCount = glasses.length;

  const sleep = document.getElementById('sleep-input').value;
  const screen = document.getElementById('screen-input').value;
  const journal = document.getElementById('journal-input').value;
  const mood = document.getElementById('mood-select').value;
  const confirmationBox = document.getElementById('confirmation');
  confirmationBox.style.display = 'block';
  confirmationBox.innerHTML = `
    <div style="
      background-color: #dff9fb;
      border-left: 5px solid #00cec9;
      padding: 15px;
      border-radius: 8px;
      font-size: 1rem;
      color: #2d3436;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    ">
      ✅ <strong>Saved!</strong> Here's your day summary:<br>
      <ul style="margin-top: 10px; line-height: 1.6;">
        <li><strong>💧 Water Glasses:</strong> ${waterCount}</li>
        <li><strong>😴 Sleep:</strong> ${sleep} hrs</li>
        <li><strong>📱 Screen Time:</strong> ${screen} hrs</li>
        <li><strong>😊 Mood:</strong> ${mood}</li>
        <li><strong>📝 Journal:</strong> ${journal || "No entry."}</li>
      </ul>
    </div>
  `;
});
const glasses = document.querySelectorAll('.glass');
glasses.forEach(glass => {
  glass.addEventListener('click', () => {
    glass.classList.toggle('active');
    glass.style.backgroundColor = glass.classList.contains('active') ? '#74b9ff' : '';
  });
});