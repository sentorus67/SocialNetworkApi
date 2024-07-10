# SocialNetworkApi

this challenge demeonstrate the usage of mongoose to store and acces data.
 It has the ability to seed will also Performing the Crud functions in real time.

Installation first requires installing Npm using 'npm i' within a command terminal, 
then the data tables must be made using 'npm run seed'.
finally to start the server, use the command 'npm start'.

## Capabilites

Using the MVC model, this code allows the CRUD (Create-Read-Update-Delete) operations for the following tables:  Users and Thought.

there are also to subdocuments for friends and reactions. Booth only have Create and Delete functions

Create allows to add New users or thoughts to the tables

Read is configure to get all User/Tables or a single instance based on its unique id.

Update allows either the Username or tThought description to change.

Delete removes User/Thought from the table

Friends is a self reference to another User. A friend can be Added or removed to another user.

Reactions is a subdocument. This only exist within the Thoughts table and can either be inserted or pulled.

