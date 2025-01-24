// File: Meter_yard.test.js
import { convertMetersToYards } from "../Meters_Yards";

describe("tests convertMetersToYards", function () {
  it("Test 100 meters", function () {
    let meters = 100;
    let yards = convertMetersToYards(meters);
    expect(yards.toFixed(2)).toBe("109.36");
  });

});
