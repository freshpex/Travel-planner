# Travel Planner Documentation

Welcome to the Travel Planner documentation! This guide will provide you with essential information on setting up, using, and contributing to the Travel Planner project.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
   - [Running the Project](#running-the-project)
   - [Accessing the Application](#accessing-the-application)
4. [Configuration](#configuration)
   - [API Keys](#api-keys)
   - [Environment Variables](#environment-variables)
5. [Features](#features)
   - [Hotels](#hotels)
   - [Attractions](#attractions)
   - [Weather](#weather)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

Travel Planner is a web application designed to help users plan their travels by providing information on hotels, attractions, and weather conditions based on the selected country. It leverages Rapid API for hotel data, Foursquare API for attractions, and OpenWeather API for weather information.

## Installation

To get started with Travel Planner, follow these installation steps:

```bash
# Clone the repository
git clone https://github.com/freshpex/Travel-planner.git

# Change into the project directory
cd Travel-planner

# Install dependencies
npm install
```

## Usage

### Running the Project

To run the project, use the following command:

```bash
npm run dev
```

### Accessing the Application

Once the project is running, open your browser and navigate to [http://localhost:5173](http://localhost:5173) to access the Travel Planner application.

## Configuration

### API Keys

Travel Planner requires API keys from the following services:

- [Hotel Rapid API](https://rapidapi.com/apidojo/api/hotels4)

- [Foursquare API](https://foursquare.com/developers/orgs/65730c2c3570072edca5b9c7/projects/65730c2c3570072edca5b9d1/settings)

- [OpenWeather API](https://openweathermap.org/api)

### Environment Variables

Create a `.env` file in the root of the project with the following content:

```env
VITE_REACT_APP_HOTEL_API_KEY=your_hotel_rapid_api_key
VITE_REACT_APP_AUTH=your_foursquare_api_key
VITE_REACT_APP_WEATHER_API_KEY=your_openweather_api_key
```

## Features

### Hotels

The hotel feature allows users to search for hotels in specific countries and view detailed information about each hotel.

### Attractions

The attractions feature uses the Foursquare API to find attractions in a selected country, providing users with valuable information about popular places to visit. Users can also have direction on map.

### Weather

The weather feature fetches the latest weather information using the OpenWeather API, allowing users to plan their trips based on current weather conditions.

## Project Structure

The Travel Planner project is organized into folders, including components, context, filters, pages, and more. Each component serves a specific purpose in creating a seamless travel planning experience.

```
TRAVEL-PLANNER/
|-- src/
|   |-- assets/
|   |-- main.jsx
|   |-- components/
|       |-- App.jsx
|       |-- Attraction.jsx
|       |-- Button.jsx
|       |-- Footer.jsx
|       |-- Hotel.jsx
|       |-- Navbar.jsx
|       |-- ScrollToTop.jsx
|       |-- SearchBar.jsx
|       |-- Weather.jsx
|       |-- App.css
|       |-- Attraction.css
|       |-- Button.css
|       |-- Footer.css
|       |-- Hotel.css
|       |-- Navbar.css
|       |-- Weather.css
|   |-- Context/
|       |-- _CountryContext.jsx
|       |-- GlobalContext.jsx
|       |-- PrivateRoute.jsx
|   |-- Filter/
|       |-- AttractionSearch.jsx
|       |-- AttractionSort.jsx
|       |-- GoogleMap.jsx
|       |-- HotelSearch.jsx
|       |-- HotelSort.jsx
|       |-- PriceFilter.jsx
|   |-- pages/
|       |-- Dashboard.css
|       |-- Dashboard.jsx
|       |-- LandingPage.jsx
|       |-- LoginPage.jsx
|       |-- Logout.jsx
|-- package.json
|-- index.html
|-- vite.config.js
```

## Contributing

We welcome contributions from the community! If you have ideas for improvements, bug fixes, or new features, feel free to submit a pull request.

## License

Travel Planner is licensed under the [MIT License](LICENSE.md). Please read the license file for more details.
