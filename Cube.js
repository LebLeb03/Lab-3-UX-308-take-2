// File: Cube_volume.js
function calculateCubeVolume(edgeLength) {
    if (edgeLength < 0) {
        throw new Error("Edge length must be non-negative.");
    }
    let volume = edgeLength**3
    return volume;

}
export {calculateCubeVolume}