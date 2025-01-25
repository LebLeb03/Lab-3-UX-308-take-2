import {calculateCubeVolume} from ".../calculateCubeVolume.js";

describe("tests calculateCubeVolume", function () {
    it("Volume for edge length 3 meters", function () {
      let edgeLength = 3;
      expect(calculateCubeVolume(edgeLength)).toBe(27);
});

});