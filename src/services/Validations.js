export default class Validations {
    static checkEmail(email) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        );

    }

    static minLength(name, minLength) {
        return name.length >= minLength;

    }
}
