---
title: "Create and manage saved queries \_|\_ Firestore with MongoDB compatibility\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/create-manage-saved-queries
  title: "Create and manage saved queries \_|\_ Firestore with MongoDB compatibility\
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
Create and manage saved queries
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how to create and manage saved queries. When you write
queries in
Firestore Studio
,
you can save and manage those queries.
For more information, see
Saved queries overview
.
The saved queries capability is available only in the Google Cloud console.
Required roles
To get the permissions that you need to use saved queries, ask your
administrator to grant you the following Identity and Access Management (IAM) roles on
the project:
To view saved queries:
Cloud Datastore Viewer ( roles/datastore.viewer )
To view, create, modify, and delete saved queries:
Cloud Datastore User ( roles/datastore.user )
To administer, view, create, modify, and delete saved queries:
Cloud Datastore Owner ( roles/datastore.owner ). This role has broad permissions and provides full access to Firestore with MongoDB compatibility, only for use by administrators.
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain the permissions required to use saved
queries. To learn more about required permissions, see Required permissions .
Required permissions
To create, view, modify, and delete saved queries, you need the following IAM
permissions at the project level:
Action
Required IAM permissions
Create saved queries
databasesconsole.studioQueries.create
View saved queries
databasesconsole.studioQueries.search
databasesconsole.locations.get
databasesconsole.locations.list
Modify saved queries
databasesconsole.studioQueries.update
Delete saved queries
databasesconsole.studioQueries.delete
Administer saved queries (Only for use by administrators)
databasesConsole.studioQueries.list
databasesconsole.locations.list
Note: Having access to saved queries doesn't automatically mean that you
have permissions to run the query.
You can also get these permissions using custom roles
or other predefined roles .
The Studio Query User
( roles/databasesconsole.studioQueryUser )
role provides create, view, and write saved queries access. This role meets
the needs of most users.
Grant the Studio Query Admin
( roles/databasesconsole.studioQueryAdmin )
role only to administrators. For more information about
Firestore with MongoDB compatibility IAM, see Identity and Access Management
.
Create a saved query
To create a saved query, follow these steps:
Go to the All databases page in the Google Cloud console.
All databases
Select a Firestore with MongoDB compatibility database in which you want to create a saved query.
In the navigation menu, click Firestore Studio .
In the Explorer pane on the Firestore Studio page, navigate to the Collections section.
Click a collection to open a new editor tab. Optionally, you can
click more_vert
View actions next to a collection. Then, click Query collection
to open a new editor tab.
In the query editor, enter a query.
Click Save .
In the Save query dialog, enter a name for the saved query.
Click Save .
Open and run a saved query
To open a saved query as a new query, follow these steps:
In the Explorer pane on the Firestore Studio
page, navigate to the Queries section.
Click a saved query to open it in a new editor tab. Optionally, you can
click more_vert
View actions next to a saved query. Then, click Open query
to open it in a new editor tab.
Click Run .
Update a saved query
To update an existing saved query, follow these steps:
In the Explorer pane on the Firestore Studio
page, navigate to the Queries section.
Click a saved query to open it in a new editor tab. Optionally, you can
click more_vert
View actions next to a saved query. Then, click Open query
to open it in a new editor tab.
Modify the query.
To save the modified query, click Save .
View and manage a list of all saved queries
To view a list of all saved queries in your project, follow these steps:
Go to the All databases page in the Google Cloud console.
All databases
Select any database. Because a saved query is a child of a project, as
long as you have the required role, you can view all saved queries in the
project from any database.
Select any database.
In the Explorer pane on the Firestore Studio
page, navigate to the Queries section.
Click more_vert
View actions next to a saved query. Then, click Manage queries .
The Saved queries page opens. This page lists all the saved
queries in this project, including saved queries for other
Google Cloud products.
You can search, filter, view, and delete queries on the Saved queries
page. You can't edit an existing query on the Saved queries page.
Delete a saved query
You can delete a saved query from the Firestore Studio
page or on the Saved queries page in the Google Cloud console.
In the Explorer pane on the Firestore Studio page, navigate to the Queries section.
Click more_vert
View actions next to the saved query that you want to delete.
Then, to delete the saved query, click Delete query .
In the Delete query dialog, click Delete .
You can also delete a saved query on the Saved queries page. To delete a saved query on
the Saved queries page, follow these steps:
Navigate to the Saved queries page.
Click more_vert
View actions next to the saved query that you want to delete.
Click Delete query to delete the saved query.
In the Delete query dialog, click Delete .
What's next
Learn about saved queries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
