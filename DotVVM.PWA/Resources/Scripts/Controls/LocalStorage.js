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
        //dotvvm.serialization.serialize(unwrappedValue, { serializeAll: true });
        const unwrappedValue = ko.unwrap(value);
        if (!dotvvm.serialization.isPrimitive(unwrappedValue)) {
            const jsonValue = ko.toJSON(unwrappedValue);
            localStorage.setItem(name, jsonValue);
        } else {
            localStorage.setItem(name, unwrappedValue);
        }
    }

    return {
        get: get,
        set: set
    }

})();

dotvvm