const capitalize = (string) => {
    if (string === "") {
        return "Error. You have not provided a word."
    }

    if ((string[0].toLowerCase() != string[0].toUpperCase()) === false) {
        return "Error the first character is not an alphabetic letter"
    }

    if (string[0] === string[0].toUpperCase()) {
        return string
    }

    return string[0].toUpperCase() + string.slice(1)
};

module.exports = capitalize;