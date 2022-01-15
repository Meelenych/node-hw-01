const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "/db/contacts.json");
// console.log(contactsPath);

// // TODO: задокументировать каждую функцию

async function listContacts() {
	const data = await fs.readFile(contactsPath);
	const contacts = JSON.parse(data);
	// console.log(contacts);
	return contacts;
}

async function getContactById(contactId) {
	const contacts = await listContacts();
	const result = contacts.find((contact) => contact.id === contactId);
	if (!result) {
		return null;
	}
	// console.log(result);
	return result;
}

async function updateContact(contactId, name, email, phone) {
	const contacts = await listContacts();
	const index = contacts.findIndex((contact) => contact.id === contactId);
	if (index === -1) {
		return null;
	}
	contacts[index] = { id: contacts[index].id, name, email, phone };
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return contacts[index];
}

async function removeContact(contactId) {
	const contacts = await listContacts();
	const index = contacts.findIndex((contact) => contact.id === contactId);
	if (index === -1) {
		return null;
	}
	const removedContact = contacts[index];
	contacts.splice(index, 1);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return removedContact;
}

async function addContact(name, email, phone) {
	const newContact = { id: shortid.generate(), name, email, phone };
	const contacts = await listContacts();
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return newContact;
}

const allFunctions = {
	listContacts,
	getContactById,
	updateContact,
	removeContact,
	addContact,
};

module.exports = allFunctions;
