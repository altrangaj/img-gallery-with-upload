module.exports = {
	'env': {
		'browser': true,
		'es6': true,
	},
	'extends': ["react-app","airbnb"],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
    },
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
        'react',
        'eslint-plugin-react-hooks'
	],
	'rules': {
		"indent": ["error", 2],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		"no-console":"off",
        "no-plusplus":"off",
        "curly":"off",
        "keyword-spacing":"off",
        "nonblock-statement-body-position":"off",
		"consistent-return":"off",
		"react/jsx-filename-extension":"off",
		"react/jsx-props-no-spreading":"off",
		"react/prop-types":"off"
	}
}