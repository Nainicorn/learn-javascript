let formatter = {
    firstLast: (nameObject) => {
        return nameObject.first + " " + nameObject.last;
    },
    lastCommaFirst: (nameObject) => {
        return nameObject.last + ", " + nameObject.first;
    },
};

export default formatter;
