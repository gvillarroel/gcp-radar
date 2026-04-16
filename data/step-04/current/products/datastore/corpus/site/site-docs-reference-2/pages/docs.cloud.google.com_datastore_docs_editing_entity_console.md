---
title: "Edit an entity in the console \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/editing_entity_console
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/editing_entity_console
  title: "Edit an entity in the console \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Guides
Send feedback
Edit an entity in the console
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to edit an entity using the Google Cloud console .
To learn how to modify an entity programmatically, see Updating an entity .
Before you begin
This page assumes you have already created an entity that is stored in
Firestore in Datastore mode. You can create an entity through the
Datastore API as described in
Getting Started with the Datastore API , or through the entity
editor in the Google Cloud console as described in the Quickstart .
Select an entity to edit
In the Google Cloud console, go to the Databases page.
Go to Databases
Select the required database from the list of databases.
In the navigation menu, click Datastore Studio .
Find the entity you want to edit by specifying the namespace, kind, and/or
filters for property values. To learn how, see Run a query .
Click on the Name/ID of an entity. Your screen should look similar to the
following:
Edit a property
Open the Edit Entity page for an entity.
Under Properties , click Edit edit for the property you want to edit.
Tip: You can filter the properties table. Click Filter properties at the
top of the table.
In the Edit property pane, modify the property's Name , Type ,
or Value . You can also modify whether the property is indexed. To learn
about the impact of including or excluding a property from indexes, see
Excluded properties .
Click Done . The Edit property pane closes and the
properties table now shows your changes. Changes are not committed
to the database until you click Save . The properties table highlights
uncommitted changes with a blue dot next to the property name.
Make additional changes to other properties. When you complete your edits,
click Save to commit your changes to the database.
The console commits your changes and takes you back to the Datastore Studio page.
Add a property
Open the Edit Entity page for an entity. Click Add property .
In the Add a property pane, specify a name for the property.
Select a type for the property's data type.
Specify a value for the property.
Specify whether the property is indexed. To learn about the impact of including or excluding a property from
indexes, see Excluded properties .
Click Add . The Add a property pane closes and the
properties table now shows your changes. Changes are not committed
to the database until you click Save . The properties table highlights
uncommitted changes with a blue dot next to the property name.
Make additional changes to other properties. When you complete your edits,
click Save to commit your changes to the database.
The console commits your changes and takes you back to the Datastore Studio page.
Delete a property
Open the Edit Entity page for an entity. Under Properties , click
Delete delete
for the property you want to delete.
The properties table now shows your changes. Changes are not
committed to the database until you click Save . The properties table
highlights uncommitted property deletions with crossed out names and property
values.
You can undo an uncommitted deletion by clicking Restore
in the property's table row.
Make additional changes to other properties. When you complete your edits,
click Save to commit your changes to the database.
Complex properties
The entity editor supports properties with complex types such as Array and
Embedded entity .
Array properties
When you add or modify the value of an Array property, provide a value in JSON
format.
If you enter invalid JSON for the Value field you will receive an error
message. You will not be able to add the property if the JSON is invalid.
Embedded entity properties
When you add or modify the value of an Embedded entity property, provide a
value in JSON format.
If you enter invalid JSON for the Value field you will receive an error
message. You will not be able to add the property if the JSON is invalid.
What's next
Learn about best practices for entities .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
