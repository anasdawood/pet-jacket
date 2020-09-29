# PetJacket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

This Application comunicates with the Pet-home project to add a pet, read a list of pets from database, and specifiy if a pet needs a jacket based on the waether in the specified pet area.

The weather is checked from Accuweather api from the Latitude and Longtitude of the saved data. If the returned forcast data contains one of the following weather condition the message will advice the user to put a jacket on his pet.

Weather which require a Jacket/Umbrella:

"Showers",
"Mostly Cloudy w/ Showers",
"Partly Sunny w/ Showers",
"T-Storms",
"Mostly Cloudy w/ T-Storms",
"Partly Sunny w/ T-Storms",
"Rain",
"Flurries",
"Mostly Cloudy w/ Flurries",
"Partly Sunny w/ Flurries",
"Snow",
"Mostly Cloudy w/ Snow",
"Ice",
"Sleet",
"Freezing Rain",
"Rain and Snow",
"Partly Cloudy w/ Showers",
"Mostly Cloudy w/ Showers",
"Partly Cloudy w/ T-Storms",
"Mostly Cloudy w/ T-Storms",
"Mostly Cloudy w/ Flurries",
"Mostly Cloudy w/ Snow"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Please make sure that the pet-home project is running and the right URL is specified in the `PetHouseService` file.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
