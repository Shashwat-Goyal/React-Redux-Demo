import actions from './actionTypes';

const categoryDetails = [
	{ language: 'JAVA', 
	details: 'Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,[14] and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA),[15] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[16] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture. As of 2016, Java is one of the most popular programming languages in use,[17][18][19][20] particularly for client-server web applications, with a reported 9 million developers.[21] Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.',
	programsList: [
	'Fibonacci series.',
	'Prime number.',
	'Palindrome number.',
	'Factorial number.',
	'Armstrong number.',
	'Bubble Sort.',
	'Selection Sort.',
	'Insertion Sort.'
	]
	 },
	{ language: 'PHP',
	  details: 'PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language. Originally created by Rasmus Lerdorf in 1994,[4] the PHP reference implementation is now produced by The PHP Development Team.[5] PHP originally stood for Personal Home Page,[4] but it now stands for the recursive acronym PHP: Hypertext Preprocessor. PHP code may be embedded into HTML or HTML5 markup, or it can be used in combination with various web template systems, web content management systems and web frameworks. PHP code is usually processed by a PHP interpreter implemented as a module in the web server or as a Common Gateway Interface (CGI) executable. The web server software combines the results of the interpreted and executed PHP code, which may be any type of data, including images, with the generated web page. PHP code may also be executed with a command-line interface (CLI) and can be used to implement standalone graphical applications.[7]', 
	  programsList: [
	  'Program to create a New Database.',
	  'Program to connect to the server and selecting database.',
	  'Program to Insert records to the table in Database.',
	  'Program to fetch records from the table in Database.',
	  'Program to Store a image in Database.',
	  'Program to Read image from Database.',
	  'Program to create a simple Registration form.',
	  'Contact form using PHP.',
	  'A simple CRUD operations using PHP and Mysql.'
	  ]
	},
	{ language: 'JAVASCRIPT', 
	  details: 'JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.',
	  programsList: [
	  'Celsius into Fahrenheit',
	  'Time and date',
	  'Make people stay',
	  'JavaScript bookmark',
	  'Letter by letter scroll',
	  'Date count down',
	  'Make a new small window of another web page',
	  'Button to refresh your web page',
	  'Send viewer back to page they came from',
	  'Change background color depending on the time of day',
	  'Random color every 5 seconds',
	  'Random color that can be stopped',
	  'Flashing colors when opening web page',
	  'Allow visitors to see history of visiting your web page',
	  'Random quote',
	  'Message displayed by time of day',
	  'Message on status bar',
	  'Random images and links',
	  'Creating a password on your web page'
	  ] 
	},
	{ language: 'C++', details: ' ', programsList: [] },
	{ language: 'C#', details: ' ', programsList: [] }
];

export function getCategoryDetails(category, searchText='', start, limit){
	
	
	limit += start;

	let index = categoryDetails.findIndex(function(element){
		return element.language == category;
	});

	const listResults = categoryDetails[index].programsList.filter(program => {
		return program.match(new RegExp(searchText, 'i'))
	});



	return dispatch => {
		dispatch({

				type: actions.CATEGORY_DETAILS,
				payload: {
					details: categoryDetails[index].details,
					programsList: listResults.slice(start, limit),
					total: listResults.length
				}
			});
	}
}

export function programSearch (key, value){

	return dispatch => new Promise(function(resolve, reject){
		dispatch({
			type: actions.PROGRAM_SEARCH,
			payload: {
				[key]: value,
			}
		});
		resolve();
	});
}

export function emptyProgramSearch() {

	return dispatch => {
		dispatch({
			type: actions.RESET_PROGRAMS_STATE
		});
	}
}


