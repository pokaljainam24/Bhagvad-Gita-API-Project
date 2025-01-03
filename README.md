# Bhagvad-Gita-API-Project

This is a web application for viewing Vedic scriptures by chapters and slokas. The app fetches data from external APIs and displays chapter and sloka information in a user-friendly interface.

## Features

1. **Chapter List**: Displays a list of chapters, each with its chapter number. Clicking on a chapter reveals detailed information about that chapter, including:
   - Chapter name (in Hindi)
   - Meaning (in English and Hindi)
   - Summary (in English and Hindi)
   - Translation and Transliteration
   - Verses count

2. **Sloka List**: Displays a list of slokas for each chapter. Clicking on a sloka reveals:
   - Sloka text
   - Transliteration
   - Additional information like "Et" (possibly an explanation)

## Technologies Used

- HTML
- CSS (Bootstrap for UI)
- JavaScript (ES6+)
- Fetch API for data fetching
- Asynchronous Programming (async/await)

## How It Works

### 1. Fetching Chapter Data

The chapters are fetched from the following endpoint:

The response includes chapter details, and each chapter is displayed as a clickable dropdown item. When a chapter is clicked, the relevant chapter details are shown in a card format.

### 2. Fetching Sloka Data

The slokas are fetched from the following endpoint (for chapter 1, for example):

There are a total of 22 slokas for chapter 1. Clicking on a sloka displays its content, transliteration, and other metadata.

### 3. Structure of Data

- **Chapter Data**: Includes:
  - `chapter_number`
  - `name` (in Hindi)
  - `meaning` (in English and Hindi)
  - `summary` (in English and Hindi)
  - `translation`
  - `transliteration`
  - `verses_count`
  
- **Sloka Data**: Includes:
  - `slok` (text)
  - `transliteration`
  - `et` (possible explanation)
  - `abhinav.et` (another form of explanation or commentary)

## Demo & Live Link

![image](https://github.com/user-attachments/assets/90610889-fd35-471e-9b98-b3329e735c8c)

[Learning The Bhagvad-Gita....📖📖📖](https://bhagvad-gita-api-48d8f2.netlify.app)



   


