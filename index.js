'use strict';
var fs = require("fs");
fs.readFile('hello.txt', function(err, data) {  
});

fs.appendFile("hello.txt", "Домашнее задание выполнено!\n", function (error) {
	if(error) throw error;

	console.log("\nАсинхронная запись завершена. Содержимое файла:\n");
	var data = fs.readFileSync("hello.txt", "utf8");
	console.log(data);
});

