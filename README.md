# Cypress_examples
A project containing the below cypress examples:

## Requirements
```
npm i pg --save-dev
npm i @types/pg  --save-dev

```

## Custom commands
I have created a custom login command that does the following:
- Redirection to a Keycloak server
- Do a login
- On success redirect back to the application
- Check if the Application Label matches

## Custom action
I have created a custom action that does the following:
- I have created the file `cypress\support\db_helper.ts`
- The above file contains functions that can connect to postgres database.
- Read an SQL file
- Launch the sql queries in the SQL file.

The action is registered in the file `cypress.config.ts`
