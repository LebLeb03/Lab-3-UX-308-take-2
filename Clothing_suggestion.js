// File: Clothing_suggestion.js
function getClothingSuggestion(temperature, humidity) {
    if (temperature > 30 && humidity > 70) {
        return "Wear light, breathable clothes.";
    } else if (temperature > 20 && humidity > 60) {
        return "Wear comfortable summer clothes.";
    } else if (temperature > 10 && humidity > 30) {
        return "Wear a light jacket.";
    } else {
        return "Bundle up, it's cold.";
    }
}
export {getClothingSuggestion} 

