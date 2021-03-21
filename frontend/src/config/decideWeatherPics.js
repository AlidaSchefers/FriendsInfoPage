//inputs the weather and returns the picture's... link? name?

export default function correspondingPicture(mainWeather) {
    switch (mainWeather) {
        case "Thunderstorm":
            return "thunderstorm1"
        case "Drizzle":
            return "drizzle1"
        case "Snow":
            return "snow1";
        case "Rain":
            return "rain1";
        case "Clear":
            return "clear1";
        case "Clouds":
            return "clouds1";
        default:
            break;
    }
}