
# Weather-API

A Weather API project made as a part of a software engineering course.

This API uses https://openweathermap.org/ as the weather data provider and requires the user to have access to openweathermap through an API key


## Features

- Three modes of retrieving weather data: current, forecast and historical
- Caching 
- Swagger documentation
- Logging of requests
- Error handling
- Authorization
- Collection of postman requests for testing

### Detailed description of Features

#### Current weather
Retrieves current weather for a given city

#### Forecast  
Retrieves weather for a given city for up to 5 days in the future
#### Historical  
Retrieves historical weather data for a given city and a given date 

This feature is limited by the user's plan on OpenWeatherMap and I am only able to receive data going back 5 days from the current date.
Plans that are less restrictive are available for purchase from their website.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Kenan-Sabic/Weather-API.git
```

Go to the project directory

```bash
  cd weather-API
```

Install dependencies

```bash
  npm install
```

Create a file .env in the project root directory

```bash
 touch .env
 ```
To the .env file add the following two variables 
```
API_KEY=
API_PASSWORD=
```
In the API_KEY field put the API key provided to you by https://openweathermap.org/

In the API_PASSWORD field put the password you wish to use for authorization when making requests to this API

Next you will need to start the server with the following command

```bash
  npm run dev
```
After that you should receive a message in the terminal that the server has been successfully starter and the port on which you can access it


## Running Tests

To run tests use any API testing method that you like

I will include a collection of postman tests that I have used during development and you are free to import those for your own use. 

## Swagger Documentation

To access swagger documentation simply run the server and go to

http://localhost:5000/api-docs/

In my case I used port 5000 but if you wish you can change the port in index.ts to whatever you like.

