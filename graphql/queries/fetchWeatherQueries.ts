import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query myQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        temperature_2m_max
        temperature_2m_min
        sunrise
        sunset
        time
        uv_index_clear_sky_max
        uv_index_max
      }
      daily_units {
        time
        uv_index_clear_sky_max
        uv_index_max
      }
      elevation
      generationtime_ms
      hourly {
        snowfall
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        rain
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;
