// const nodemon = require("nodemon");
// const argv = require("yargs").argv;

const allFunctions = require("./contacts");
// console.log(allFunctions);

// // TODO: рефакторить

async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			const allContacts = await allFunctions.listContacts();
			console.table(allContacts);

		case "get":
			const contactById = await allFunctions.getContactById(id);
			console.log(contactById);
			break;

		case "add":
			const newContact = await allFunctions.addContact(name, email, phone);
			console.log(newContact);
			break;

		case "update":
			const updateContact = await allFunctions.updateContact(
				id,
				name,
				email,
				phone
			);
			console.log(updateContact);
			break;

		case "remove":
			const removedContact = await allFunctions.removeContact(id);
			console.log(removedContact);
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "7" });

// invokeAction({
// 	action: "add",
// 	name: "Alice Cooper",
// 	email: "cooper@poison.net",
// 	phone: "(748) 234-5874",
// });

// invokeAction({
// 	action: "update",
// 	id: "8",
// 	name: "Linkin Park",
// 	email: "park@numb.com",
// 	phone: "(748) 234-2995",
// });

// invokeAction({ action: "remove", id: "m8hs7FOf1" });
