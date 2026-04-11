---
title: "Supported MongoDB data types and drivers \_|\_ Firestore with MongoDB compatibility\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/supported-data-types-drivers
  title: "Supported MongoDB data types and drivers \_|\_ Firestore with MongoDB compatibility\
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
Supported MongoDB data types and drivers
The following tables list supported MongoDB data types, drivers, and
third-party tools for Firestore with MongoDB compatibility.
Data types
BSON Type
Supported
32-bit Integer (int)
Yes
64-bit Integer (long)
Yes
Array
Yes
Binary Data
Yes
Boolean
Yes
Date
Yes
DBPointer
No
DBRef
No
Decimal128
Yes
Double
Yes
JavaScript
No
JavaScript (with scope)
No
MaxKey
Yes
MinKey
Yes
Null
Yes
Object
Yes
ObjectId
Yes
Regular Expression
Yes
String
Yes
Symbol
No
Timestamp
Yes
Undefined
No
Document _id
The top-level _id field in a document must be one of the following types:
ObjectId
String
64-bit Integer (long)
32-bit Integer (int)
Double
Binary
Object
The total size of the _id must not exceed 1500 bytes.
Each values within an Object-typed ID must also be of a supported ID type or an Array
of values, each of which is of a supported ID type.
Other BSON types are not supported.
Languages and MongoDB drivers
Firestore with MongoDB compatibility supports the following driver versions:
Language
Driver versions
Java
5.x
Node.js
6.x
5.x
Python
4.x
3.x (x ≥ 12)
Go
2.x
C#
3.x
Ruby
2.x (x ≥ 16)
OIDC authentication support
The Go, C#, and Ruby drivers support OpenID Connect (OIDC) authentication from
Google Cloud for all supported driver versions.
The Java, Node.js, and Python drivers
support OIDC authentication from Google Cloud starting with the following driver
versions:
Java: 4.10
Node.js: 6.7
Python: 4.7
Third-party tools
Firestore with MongoDB compatibility supports third-party tools described in this section.
Tool
Description
mongoimport
MongoDB Database Tools
mongoexport
MongoDB Database Tools
mongodump
MongoDB Database Tools
mongorestore
MongoDB Database Tools
mongosh
MongoDB Shell
Mongoose
MongoDB object modeling tool
MongoDB Compass
GUI tool for data exploration
Note: Some third-party tools require a connection string. To obtain a
connection string for your Firestore with MongoDB compatibility database, you can
run the
firestore databases connection-string command
using Google Cloud CLI.
What's next
Run the Quickstart: Create a database and connect to it .
Learn about Behavior differences .
For a breakdown of supported features depending on MongoDB version, see
Supported features: 8.0
Supported features: 7.0
Supported features: 6.0
Supported features: 5.0
Supported features: 4.0
Supported features: 3.6
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
