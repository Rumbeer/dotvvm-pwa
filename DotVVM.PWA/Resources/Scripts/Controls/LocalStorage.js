dotvvm.pwa = (function() {
    function set(name, value) {
        updateLocalStorage(name, value);
    }

    function subscribe(name, value) {
        if (ko.isObservable(value)) {
            ko.pureComputed(function () {
                return ko.toJSON(value);
            }).subscribe(function (newValue) {
                updateLocalStorage(name, newValue);
            });
        }
    }

    function get(name) {
        const storageValue = localStorage.getItem(name);
        const parsedValue = tryParseJson(storageValue);
        return dotvvm.serialization.deserialize(parsedValue, {}, true);
    }

    function tryParseJson(value) {
        try {
            const parsedValue = JSON.parse(value);
            return parsedValue;
        } catch (e) {
            return value;
        }
    }

    function updateLocalStorage(name, value) {
        const unwrappedValue = ko.unwrap(value);
        const serializedValue = dotvvm.serialization.serialize(unwrappedValue, { serializeAll: true });
        localStorage.setItem(name, JSON.stringify(serializedValue));
    }

    return {
        get: get,
        set: set
    }

})();