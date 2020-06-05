const langs = {
    english: require("./english")
};

class Translator {
    constructor(language="english") {
        this.language = language;
        this.translations = langs[this.name];
    }
    
    translate(suffix, prefix) {
        let key = this.translations[suffix];
        if (!key) return this.translations["TRANSLATION_ERROR"];
        let ID = Object.keys(prefix);
        let data = Object.values(prefix);
        let statement = "";
        for (var i in data) {
            statement += key.replace(new RegExp(ID[i], "g"), data[i]);
        }
        return statement;
    }
}

module.ezports = Translator;
