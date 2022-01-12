const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
	// ...твой код
}

function getContactById(contactId) {
	// ...твой код
}

function removeContact(contactId) {
	// ...твой код
}

function addContact(name, email, phone) {
	// ...твой код
}

// fs.readFile(filename, [options]) - чтение файла
// fs.writeFile(filename, data, [options]) - запись файла
// fs.appendFile(filename, data, [options])- добавление в файл
// fs.rename(oldPath, newPath) - переименование файла.
// fs.unlink(path, callback) - удаление файла.

// fs.readFile("readme.txt")
// 	.then((data) => console.log(data.toString()))
// 	.catch((err) => console.log(err.message));

// const fs = require("fs").promises;

// fs.readdir(__dirname)
// 	.then((files) => {
// 		return Promise.all(
// 			files.map(async (filename) => {
// 				const stats = await fs.stat(filename);
// 				return {
// 					Name: filename,
// 					Size: stats.size,
// 					Date: stats.mtime,
// 				};
// 			})
// 		);
// 	})
// 	.then((result) => console.table(result));

module.exports;
