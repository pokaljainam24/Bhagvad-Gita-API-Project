const chaptersDiv = document.querySelector('.dropdown-menu');
const chapterDataDiv = document.querySelector('#chapter-data');
const cardDiv = document.querySelector('#card');
const slokDetails = document.querySelector('#slokDetails');


// Fetch all chapters
fetch('https://vedicscriptures.github.io/chapters')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    chaptersDiv.innerHTML = '';

    for (const chapterKey in data) {
      const chapterData = data[chapterKey];
      const chapterNumber = chapterData.chapter_number;

      // Add chapter to chaptersDiv
      const chapterElement = document.createElement('a');
      chapterElement.className = 'dropdown-item';
      chapterElement.href = '#';
      chapterElement.textContent = `Chapter ${chapterNumber}`;
      chapterElement.addEventListener('click', (event) => {
        event.preventDefault();
        showData(chapterData);
      });

      chaptersDiv.appendChild(chapterElement);
    }
  })
  .catch(error => console.error('Error fetching chapters:', error));


// Function to display data for a chapter
function showData(chapterData) {
  console.log(chapterData);

  chapterDataDiv.innerHTML = ''; // Clear previous chapter data

  const card = document.createElement('div');
  card.className = 'card';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const content = document.createElement('p');
  content.innerHTML = `
        <h5 class="text-light fw-bold fs-1 text-center">Chapter ${chapterData.chapter_number}</h5>
        <p class="text-warning"><strong class="text-light">Meaning (English / Hindi):</strong><br> ${chapterData.meaning.en} / ${chapterData.meaning.hi}</p><br>
        <p class="text-warning"><strong class="text-light">Name (Hindi):</strong><br> ${chapterData.name}</p><br>
        <p class="text-warning"><strong class="text-light">Summary (English):</strong><br> ${chapterData.summary.en}</p><br>
        <p class="text-warning"><strong class="text-light">Summary (Hindi):</strong><br> ${chapterData.summary.hi}</p><br>
        <p class="text-warning"><strong class="text-light">Translation:</strong> ${chapterData.translation}</p>
        <p class="text-warning"><strong class="text-light">Transliteration:</strong> ${chapterData.transliteration}</p>
        <p class="text-warning"><strong class="text-light">Verses Count:</strong> ${chapterData.verses_count}</p>
    `;

  cardBody.appendChild(content);
  card.appendChild(cardBody);
  chapterDataDiv.appendChild(card);

  // fetchSlokDetails();
}

async function SlokDetails() {
  const baseUrl = 'https://vedicscriptures.github.io/slok';
  const numberOfSloks = 22;

  const slokDropdownMenu = document.getElementById('slokDropdownMenu');
  slokDropdownMenu.innerHTML = ''; // Clear any existing items

  for (let i = 1; i <= numberOfSloks; i++) {
    try {
      // Fetch slok data for each slok
      const response = await fetch(`${baseUrl}/1/${i}`);
      const slokData = await response.json();
      console.log(slokData);


      // Create dropdown item
      const slokItem = document.createElement('li');
      slokItem.innerHTML = `
      <a class="dropdown-item text-warning">Slok: ${i}</a>
      `;

      // Add click event to show slok details
      slokItem.addEventListener('click', () => {
        // Update slok details section with the selected slok's information
        slokDetails.innerHTML = `
          <h2 class="text-center">Slok ${i}</h2>
          <p class="text-warning"><strong class="text-light">Id:</strong> ${slokData._id}</p>
          <p class="text-warning"><strong class="text-light">Slok:</strong> ${slokData.slok}</p>
          <p class="text-warning"><strong class="text-light">transliteration:</strong> ${slokData.transliteration}</p>
          <p class="text-warning"><strong class="text-light">Et:</strong> ${slokData.abhinav.et}</p>
        `;
      });

      slokDropdownMenu.appendChild(slokItem);
    } catch (error) {
      console.error(`Error fetching slok ${i}:`, error);
    }
  }
}

SlokDetails();







