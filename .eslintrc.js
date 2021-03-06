module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'plugin:vue/recommended', 
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/name-property-casing": ["error", "PascalCase"],
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    
    "space-before-function-paren": ["error", "always"],
    // "space-after-function-paren": ["error", "always"],
    
    "no-sparse-arrays": 2,
    "no-unused-vars": 0,
    "no-empty": 0,

    "comma-spacing": 2,   //逗号前后的空格
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }], //对象字面量中冒号的前后空格
    "no-undef": 1,
    "semi-spacing": [2, {"before": false, "after": true}],//分号前后空格
    "space-before-blocks": [2, "always"],//不以新行开始的块{前面要不要有空格
    "space-in-parens": [2, "never"],//小括号里面要不要有空格
    "space-infix-ops": 2,//中缀操作符周围要不要有空格
    "space-unary-ops": [2, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    "spaced-comment": 2,//注释风格要不要有空格什么的
  }
}

