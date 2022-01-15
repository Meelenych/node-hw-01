https://monosnap.com/

yarn add
yarn remove 
-D  =  -- save dev


fs.readFile(filename, [options]); // - чтение файла
fs.writeFile(filename, data, [options]); // - запись файла
fs.appendFile(filename, data, [options]); //- добавление в файл
fs.rename(oldPath, newPath); // - переименование файла.
fs.unlink(path, callback); // - удаление файла.

fs.readFile("readme.txt")
	.then((data) => console.log(data.toString()))
	.catch((err) => console.log(err.message));

const fs = require("fs").promises;

fs.readdir(__dirname)
	.then((files) => {
		return Promise.all(
			files.map(async (filename) => {
				const stats = await fs.stat(filename);
				return {
					Name: filename,
					Size: stats.size,
					Date: stats.mtime,
				};
			})
		);
	})
	.then((result) => console.table(result));

    <!-- //============== -->
экспорт модулей

const admins = ['Den', 'Dan']
const clients = ['Ann', 'Kate']

const users = {
    admins,
    clients
}

module.exports = users

    <!-- //============== -->
импорт модулей 
const users = require('./users')

const path = require("path");


деструктуризация при импорте
const { clients } = require("./contacts");
console.log(clients);

=========================================================

const fileOperations = async (filePath, action, data) => {
	switch (action) {
		case "read":
			const result = await fs.readFile(filePath, "utf-8");
			console.log(result);
			break;
		case "add":
			// const result2 = await fs.appendFile(filePath, data); //вернет undefined, но запишет, если укажешь не существующий файл, нод его создаст
			await fs.appendFile(filePath, data);
			break;
		case "replace":
			await fs.writeFile(filePath, data); //тоже вернет undefined, если укажешь не существующий файл, нод его создаст
			break;
		case "remove":
			await fs.unlink(filePath);
			break;
		default:
			console.log("неизвестная команда");
	}
};

fileOperations("./test.txt", "read");
fileOperations("./test.txt", "add", "\nдобавленный текст"); // \n добавляет текст с новой строки
fileOperations("./test.txt", "replace", "\nсвежий текст");
===================

// fs.readFile("./db/contacts.json")
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error(error.message));