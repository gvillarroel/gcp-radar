---
title: "Choosing between Native mode and Datastore mode \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/firestore-or-datastore
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/firestore-or-datastore
  title: "Choosing between Native mode and Datastore mode \_|\_ Google Cloud Documentation"
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
Choosing between Native mode and Datastore mode
Stay organized with collections
Save and categorize content based on your preferences.
When you create a Firestore database, you must choose between two
modes: Native mode or Datastore mode. This page explains the difference between
the two modes.
Choose a database mode
When you create a new Firestore database, you must select a database mode.
You can have both Native mode and Datastore mode databases in the same project,
but each database will be of a single type.
We recommend the following when choosing a database mode:
Use Firestore in Native mode for all new applications (server, mobile, and web).
Firestore in Native mode uses a document-based data model that
aligns with industry standards. In addition to a strongly consistent and
scalable database, Firestore in Native mode provides real-time
data syncing and backend-as-a-service features.
Use Firestore in Datastore mode if your app depends on the Datastore API.
Datastore Mode is fully supported and is recommended for applications with a
dependency on the Datastore API. Native mode and Datastore mode share an
underlying storage layer with the same availability, consistency, and
scaling capabilities.
Firestore in Native mode
Firestore is the next major version of Datastore and
a re-branding of the product. Taking the best of Datastore and the Firebase
Realtime Database ,
Firestore is a NoSQL document database built for automatic scaling,
high performance, and ease of application development.
Firestore introduces the following features:
A strongly consistent storage layer
A collection and document data model
Real-time updates
Mobile and Web client libraries
Firestore is backwards compatible with Datastore, but the new
data model, real-time updates, and mobile and web client library features are
not. To access all Firestore features, you must use
Firestore in Native mode.
Firestore in Datastore mode
Firestore in Datastore mode uses Datastore system behavior but
accesses Firestore's storage layer, removing the following
Datastore limitations:
All Datastore queries are now strongly
consistent, unless you explicitly request eventual consistency .
Queries in transactions are no longer required to be ancestor queries.
Transactions are no longer limited to 25 entity groups.
Writes to an entity group are no longer limited to 1 per second.
Datastore mode disables Firestore features that are not
compatible with Datastore:
The project will accept Datastore API requests and deny Firestore API requests.
The project will use Datastore indexes instead of Firestore indexes.
You can use Datastore client libraries with this project but not Firestore client libraries.
Firestore real-time capabilities will not be available.
In the Google Cloud console, the database will use the Datastore viewer.
Pricing and locations
Native mode and Datastore mode databases use the same pricing structure and are
available in the same locations. Pricing and locations are described in
detail in the following pages:
Firestore in Native mode
Firestore pricing
Firestore locations
Firestore in Datastore mode
Firestore in Datastore mode pricing
Firestore in Datastore mode locations
Feature comparison
The following table compares the system behavior of the database modes:
Firestore in Native mode
Firestore in Datastore mode
Data model
Document database organized into documents and collections.
Entities organized into kinds and entity groups.
Storage Layer
A strongly consistent storage layer.
A strongly consistent storage layer.
Queries and transactions
Strongly consistent queries across the entire database
Transactions can access any number of collections and documents
Removes the previous consistency limitations of Datastore
Strongly consistent queries across the entire database
Transactions can access any number of entity groups
Datastore v1 API support
No, requests are denied
Yes
Firestore v1 API support
Yes
No, requests are denied
Real-time updates
Supports the ability to listen to a document or a set of documents for real-time updates.
While listening to a document or set of documents, your clients are notified of
any data changes and sent the newest set of data.
Not supported
Offline data persistence
The mobile and web client libraries support offline data persistence.
Not supported
Client libraries
Firestore client libraries:
Java
Python
PHP
Go
Ruby
C#
Node.js
Android
iOS+
Web
C++
Unity
Datastore client libraries:
Java
Python
PHP
Go
Ruby
C#
Node.js
C++
Security
Identity and Access Management (IAM) manages database access
Firestore Security Rules support serverless authentication and authorization for the mobile and web client libraries
IAM manages database access
SLA
Firestore SLA
Firestore SLA
Locations
Both modes support the same locations. For a detailed list of locations, see the following pages:
Firestore in Native mode locations
Firestore in Datastore mode locations
Pricing
Both modes use the same pricing structure for entity and document operations.
Firestore in Datastore mode does not charge for small operations .
Both modes use the same pricing structure for stored data and network bandwidth.
For more details about pricing, see the following pages:
Firestore in Native mode pricing
Firestore in Datastore mode pricing
Console
Firebase Console and Google Cloud console Firestore Viewer
Google Cloud console Datastore Viewer
Namespaces
Not supported
Namespaces supported
App Engine client library integration
Not supported in the App Engine standard environment Python 2.7 and PHP 5.5 runtimes
Supported in the App Engine standard environment ,
all other runtimes
Supported in the App Engine flexible environment ,
all runtimes
Supported in all runtimes
Create a new database
You can create a new Firestore database in either Native mode or Datastore mode. This choice does not depend on the modes of any existing databases in your project.
See Create and manage databases for more info.
Change between Native mode and Datastore mode
If your database is empty, you can change between Native mode and Datastore mode.
Warning: Mode changes are only allowed if the database is empty of all entities
and documents. A mode change takes a few minutes to take effect during which
time the database will reject writes.
Change database to Native mode :
gcloud
Use the gcloud firestore databases update command to change your database to Native mode.
gcloud firestore databases update --type = firestore-native --database = ' DATABASE_ID '
Replace DATABASE_ID with the ID of your database.
rest
curl --request PATCH \
--header "Authorization: Bearer " $( gcloud auth print-access-token ) \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data '{"type":"FIRESTORE_NATIVE"}' \
"https://firestore.googleapis.com/v1/projects/ PROJECT_ID /databases/ DATABASE_ID ?updateMask=type"
Replace the following:
PROJECT_ID : the project ID
DATABASE_ID : the database ID
Change database to Datastore mode :
gcloud
Use the gcloud firestore databases update command to change your database to Datastore mode.
gcloud firestore databases update --type = datastore-mode --database = ' DATABASE_ID '
Replace DATABASE_ID with the ID of your database.
rest
curl --request PATCH \
--header "Authorization: Bearer " $( gcloud auth print-access-token ) \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data '{"type":"DATASTORE_MODE"}' \
"https://firestore.googleapis.com/v1/projects/ PROJECT_ID /databases/ DATABASE_ID ?updateMask=type"
Replace the following:
PROJECT_ID : the project ID
DATABASE_ID : the database ID
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
