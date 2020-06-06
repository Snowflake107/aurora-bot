const folder = __dirname+"/language";
const langs = {
    english: require(folder+"/english.js"),
    nepali: require(folder+"/nepali.js")
};

class Translator {
    constructor(language="english") {
        this.language = langs[language] ? language : "english";
        this.translations = langs[this.name];
    }
    
    translate(query, ...args) {
        let key = this.translations[query];
        if (!key) return this.translations["TRANSLATION_ERROR"];
        return (typeof key === "function") ? key(...args) : key;
    }
}

module.exports = Translator;
