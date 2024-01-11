module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "overrides": [
        {
            "env": {
                "node": true,
                "browser": true,
                "es2021": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
