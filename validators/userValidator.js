const Validator = require("fastest-validator");
const v = new Validator();

const userSchemaValidator = {
    name: { type: "string", min: 1, max: 100 },
    family: { type: "string", min: 1, max: 100 },
    age: { type: "number", min: 0 },
    email: { type: "email" },
    mbtiType: { 
        type: "enum", 
        values: ["INTJ","INTP","ENTJ","ENTP","INFJ","INFP","ENFJ","ENFP",
                 "ISTJ","ISFJ","ESTJ","ESFJ","ISTP","ISFP","ESTP","ESFP"] 
    },
    username: { type: "string", min: 3, max: 50 },
    password: { type: "string", min: 6 },
    favoriteGenres: { type: "array", items: "string", optional: true },
    watchlist: { type: "array", items: "string", optional: true },
    isAdmin: { type: "boolean", optional: true }
};


const check = v.compile(userSchemaValidator);
module.exports = check
