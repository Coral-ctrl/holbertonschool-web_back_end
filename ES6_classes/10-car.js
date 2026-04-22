export default class Car {
    /**
     * Creates a new Car instance.
     * @param {String} brand - The car's brand name
     * @param {String} motor - The car's motor type
     * @param {String} color - The car's color
     */
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    /**
     * Symbol.species tells JavaScript which constructor to use
     * when creating derived objects (e.g. from subclasses).
     * Returning `this` ensures subclasses like TestCar produce
     * instances of their own type, not the base Car type.
     */
    static get [Symbol.species]() {
        return this;
    }

    /**
     * Creates and returns a clone of this car as a new instance
     * of the same class (respecting subclasses via Symbol.species).
     * The clone is initialised with no arguments, so all attributes
     * will be undefined.
     * @returns {Car} A new empty instance of the same class
     */
    cloneCar() {
        // Retrieve the correct constructor for this class (or subclass)
        const Species = this.constructor[Symbol.species];
        return new Species();
    }
}
