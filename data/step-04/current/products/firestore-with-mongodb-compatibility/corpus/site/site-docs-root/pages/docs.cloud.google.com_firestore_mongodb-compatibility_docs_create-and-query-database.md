---
title: "Quickstart: Connect with mongosh \_|\_ Firestore with MongoDB compatibility\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-and-query-database
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-and-query-database
  title: "Quickstart: Connect with mongosh \_|\_ Firestore with MongoDB compatibility\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore with MongoDB compatibility
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Connect with mongosh
Learn how to create a Firestore with MongoDB compatibility database and connect to it with the
mongosh tool.
Before you begin
In the Google Cloud console, go to the project selector page.
Go to project selector
Select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
Cloud Datastore Owner
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the mongosh tool
Create a Firestore with MongoDB compatibility database and retrieve the connection string
In the Google Cloud console, create a new Firestore Enterprise edition database.
Firestore with MongoDB compatibility requires Firestore Enterprise edition:
In the Google Cloud console, go to the Databases page.
Go to Databases
Click Create a Firestore Database .
Enter a database ID.
Select Enterprise Edition.
Select a location for your database.
Click Create Database .
When the database completes initialization,
the console opens the Firestore Studio for your database.
In the Connect to Firestore using an external MongoDB tool
section, copy the connection string.
The connection string depends on the UID of the database (system-generated)
and the location of database:
UID . LOCATION .firestore.goog
Create a user for SCRAM authentication
In the Google Cloud console, create a new database user and assign
the user Identity and Access Management permissions.
In the Google Cloud console, go to the Databases page.
Go to Databases
Select the database from the list of databases.
In the navigation menu, click Security .
Click Add User .
Enter a username.
Select an Identity and Access Management role for the user.
Click create. The database creates a user and shows you the user's
generated password. Copy and save this password. You will not be able to retrieve
this password later .
Connect using mongosh
Use the connection string, username, and password to connect to your
database, run mongosh locally with the following configuration options.
mongosh 'mongodb:// USERNAME : PASSWORD @ CONNECTION_STRING :443/ DATABASE_ID ?loadBalanced=true&authMechanism=SCRAM-SHA-256&tls=true&retryWrites=false'
Replace the following:
USERNAME : the name of the database user you created.
PASSWORD : the generated password for the database user you created.
CONNECTION_STRING : the database connection string.
DATABASE_ID : a database ID
Once connected, you can create and read data, for example:
db.pages.insertOne({ message: "Hello World!"})
db.pages.find({})
exit
What's next
See a list of supported features
Learn about behavior differences in Firestore with MongoDB compatibility
Learn about additional authentication methods
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
