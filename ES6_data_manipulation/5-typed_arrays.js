export default function createInt8TypedArray(length, position, value) {
    if (position >= length || position < 0) {
        throw new Error('Position outside range');
    }
    // ArrayBuffer(length):
    // allocates a fixed-size block of raw binary memory (all zeros initially)
    const buffer = new ArrayBuffer(length);
    // DataView(buffer): wraps the buffer and gives you methods to 
    // read/write typed values at specific byte positions
    const view = new DataView(buffer);
    // view.setInt8(position, value):
    // writes the value as a signed 8-bit integer at the given byte offset
    view.setInt8(position, value);
    return view;
}
