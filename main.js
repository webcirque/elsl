try {
function _import(osrc, mime) {
	let src = osrc;
	let loader = document.createElement("script");
	if (!(mime == undefined || mime == null)) {
		if (mime.__proto__.constructor == String) {
			loader.type = mime;
		} else {
			loader.type = "text/javascript";
		}
	}
	switch (src) {
		case ":jquery" :
			loader.src = "https://webcirque.github.io/elsl/predef/jquery.js";
			break;
		case ":bootstrap" :
			loader.src = "https://webcirque.github.io/elsl/predef/bootstrap.js";
			break;
		case ":crypto" :
			loader.src = "https://webcirque.github.io/elsl/dependencies/crypto.js";
			break;
		case ":base64" :
			loader.src = "https://webcirque.gitgub.io/elsl/dependencies/base64.js";
			break;
		default :
			loader.src = src;
	}
	loader.addEventListener("load",function () {
		try {
			loader.main();
		} catch (err) {
			console.log("No MAIN method defined.");
		}
		console.log("Loaded script from source [" + src + "].");
	});
	document.head.appendChild(loader);
	return loader;
}
function _istyle(osrc) {
	let src = osrc;
	let loader = document.createElement("link");
	loader.rel = "stylesheet";
	switch (src) {
		case ":bootstrap" :
			loader.href = "https://elsl.mwashcdn.ml/predef/bootstrap.css";
			break;
		default :
			loader.href = src;
	}
	document.head.appendChild(loader);
	loader.addEventListener("load",function () {
		try {
			loader.main();
		} catch (err) {
			console.log("No MAIN method defined.");
		}
		console.log("Loaded script from source [" + src + "].");
	});
	return loader;
}
	_ecma6_ = true;
	console.log("ELSL will be loaded in ECMA6 mode.");
} catch (err) {/*
	function _import(osrc, mime) {
	src = osrc;
	loader = document.createElement("script");
	if (!(mime == undefined || mime == null)) {
		if (mime.__proto__.constructor == String) {
			loader.type = mime;
		} else {
			loader.type = "text/javascript";
		}
	}
	switch (src) {
		case ":jquery" :
			loader.src = "https://elsl.mwashcdn.ml/predef/jquery.js";
			break;
		case ":bootstrap" :
			loader.src = "https://elsl.mwashcdn.ml/predef/bootstrap.js";
			break;
		case ":crypto" :
			loader.src = "https://elsl.mwashcdn.ml/dependencies/crypto.js";
			break;
		case ":base64" :
			loader.src = "https://elsl.mwashcdn.ml/dependencies/base64.js";
			break;
		default :
			loader.src = src;
	}
	document.head.appendChild(loader);
	loader.addEventListener("load",function () {
		try {
			loader.main();
		} catch (err) {
			console.log("No MAIN method defined.");
		}
		console.log("Loaded script from source [" + src + "].");
	});
	return loader;
	src = undefined;
	loader = undefined;
}
function _istyle(osrc) {
	src = osrc;
	loader = document.createElement("link");
	loader.rel = "stylesheet";
	switch (src) {
		case ":bootstrap" :
			loader.href = "https://elsl.mwashcdn.ml/predef/bootstrap.css";
			break;
		default :
			loader.href = src;
	}
	document.head.appendChild(loader);
	loader.addEventListener("load",function () {
		try {
			loader.main();
		} catch (err) {
			console.log("No MAIN method defined.");
		}
		console.log("Loaded script from source [" + src + "].");
	});
	return loader;
	src = undefined;
	loader = undefined;
}
	_ecma6_ = false;
	console.log("ELSL will be loaded in compatible mode.");
*/}

_import("https://elsl.mwashcdn.ml/pre1/main.min.js");
_istyle("https://elsl.mwashcdn.ml/pre1/main.min.css");
