import yargs from "yargs";
import * as contactsService from './db/index.js';





async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const allContacts = await contactsService.listContacts();
          console.log(allContacts);
      break;

    case 'get':
          const contact =await contactsService.getContactById(id);
          console.log(contact);
      break;

    case 'add':
          const newContact = await contactsService.addContact(name, email, phone);
          console.log(newContact);
      break;

    case 'remove':
          const deletedContact = await contactsService.removeContact(id);
          console.log(deletedContact);
      break;

    default:
          console.log (' Unknown action type!');
  }
}
const { argv } = yargs(process.argv.slice(2));

invokeAction(argv);