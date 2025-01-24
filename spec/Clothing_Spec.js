// File: Clothing_suggestion.test.js
import { getClothingSuggestion } from "../Clothing_suggestion";

describe("tests getClothingSuggestion", function () {
  it("Hot and humid weather", function () {
    let temp = 35;
    let humidity = 80;
    expect(getClothingSuggestion(temp, humidity)).toBe("Wear light, breathable clothes.");
  });

  it("Warm weather", function () {
    let temp = 25;
    let humidity = 50;
    expect(getClothingSuggestion(temp, humidity)).toBe("Wear comfortable summer clothes.");
  });

  it("Cool weather", function () {
    let temp = 15;
    let humidity = 40;
    expect(getClothingSuggestion(temp, humidity)).toBe("Wear a light jacket.");
  });

  it("Cold weather", function () {
    let temp = 5;
    let humidity = 30;
    expect(getClothingSuggestion(temp, humidity)).toBe("Bundle up, it's cold.");
  });
});
