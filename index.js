let latitude = document.getElementById("latitude");
let longitude = document.getElementById("longitude");
let container = document.getElementById("cont");

function getweather() {
  let lati = latitude.value;
  let long = longitude.value;
  $.ajax({
    url: "https://api.open-meteo.com/v1/forecast?latitude="+lati+"&longitude="+long+"&daily=weather_code%2Ctemperature_2m_max%2Ctemperature_2m_min%2Capparent_temperature_max%2Capparent_temperature_min%2Cwind_speed_10m_max%2Csunrise%2Csunset%2Cdaylight_duration%2Csunshine_duration%2Cuv_index_max%2Cuv_index_clear_sky_max%2Crain_sum%2Cshowers_sum%2Csnowfall_sum%2Cprecipitation_hours%2Cprecipitation_sum%2Cprecipitation_probability_max%2Cwind_gusts_10m_max%2Cwind_direction_10m_dominant%2Cshortwave_radiation_sum%2Cet0_fao_evapotranspiration&hourly=temperature_2m%2Crelative_humidity_2m%2Cdew_point_2m%2Capparent_temperature%2Cprecipitation_probability%2Cprecipitation%2Crain%2Cshowers%2Csnowfall%2Csnow_depth%2Cvapour_pressure_deficit%2Cet0_fao_evapotranspiration%2Cvisibility%2Cevapotranspiration%2Ccloud_cover_high%2Ccloud_cover_mid%2Ccloud_cover_low%2Ccloud_cover%2Csurface_pressure%2Cpressure_msl%2Cweather_code%2Cwind_speed_10m%2Cwind_speed_80m%2Cwind_speed_120m%2Cwind_speed_180m%2Cwind_direction_10m%2Cwind_direction_80m%2Cwind_direction_120m%2Cwind_direction_180m%2Cwind_gusts_10m%2Ctemperature_80m%2Ctemperature_120m%2Ctemperature_180m%2Csoil_temperature_0cm%2Csoil_temperature_6cm%2Csoil_temperature_18cm%2Csoil_temperature_54cm%2Csoil_moisture_0_to_1cm%2Csoil_moisture_1_to_3cm%2Csoil_moisture_3_to_9cm%2Csoil_moisture_9_to_27cm%2Csoil_moisture_27_to_81cm&current=temperature_2m%2Crelative_humidity_2m%2Capparent_temperature%2Cis_day%2Cwind_speed_10m%2Cwind_direction_10m%2Cwind_gusts_10m%2Cprecipitation%2Crain%2Cshowers%2Csnowfall%2Cweather_code%2Ccloud_cover%2Cpressure_msl%2Csurface_pressure&timezone=auto",
    dataType: "json",
  
    success: function (data) {
      console.log(data);
      const timezone = document.createElement("h3");
      timezone.innerHTML = "TimeZone: " + data.timezone;
      container.appendChild(timezone);
      const temp = document.createElement("h3");
      temp.innerText = "Current Temperature: " + data.current.apparent_temperature;
      container.appendChild(temp);
      const time = document.createElement("h3");
      time.innerText = "Current Time: " + data.current.time;
      container.appendChild(time);
    },
  
    error: function (xhr, status, err) {
      console.error("RandomUser API failed:", err);
    }
  });

  
};


