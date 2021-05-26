const fs = require("fs");
const user = require('./user');

console.log("print user name: ",user.getusername());


/**========================================================================
 * !                              09 filesystem
 *   const folderpath = "E:\\Drive D\\ITI\\nodejs course";
fs.readdir(folderpath, (err, files) => {
	// !da keda to read Directory files names
	console.log("files: ", files);
	files.forEach((filename, index) => {
		console.log(index, " fileName: ", filename);

		// !da keda to read kol el files elly fe el directory
		filePath = "E:\\Drive D\\ITI\\nodejs course\\" + filename;
		fs.readFile(filePath, "utf-8", (err, content) => {
			console.log("fileName: ", content);
		});
	});
});


//! Async Way to read file content
filePath = "E:\\Drive D\\ITI\\nodejs course\\package.json"
var content = fs.readFileSync(filePath,'utf-8')
console.log(content); //! da msh hytnfz ela law elly o2eeh etnfz 3lshan async

 *   
 *   
 *
 *========================================================================**/
