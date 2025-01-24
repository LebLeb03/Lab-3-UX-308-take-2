// File: Clothing_suggestion.test.js
import { getClothingSuggestion } from "../Clothing_suggestion.js";

describe("test getClothingSuggestion", function() {
  it("tests humidity >60 and temperature >4", function() {
  let humidity = 100;
  let temperature = 20;
  let clothing = getClothingSuggestion(humidity, temperature)
  expect (clothing).toBe("Use rain jacket");
  });



});
