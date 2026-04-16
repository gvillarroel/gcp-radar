---
title: "Firestore with MongoDB compatibility release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/release-notes
  title: "Firestore with MongoDB compatibility release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore with MongoDB compatibility
Resources
Send feedback
Firestore with MongoDB compatibility release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Firestore with MongoDB compatibility. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 09, 2026
Feature
You can now use
Gemini Code Assist to get AI-powered assistance in Firestore
to generate MQL queries using natural language prompts .
This feature is available in Preview .
March 16, 2026
Feature
Support for managing TTL indexes in the MongoDB API.
February 02, 2026
Feature
The Firestore databases page in the Google Cloud console now includes
a status column. Possible statuses include:
Ready
Cloning is in progress
Restoring from backup is in progress
Deleted
Failed
For the cloning and restore statuses, the status column updates upon completion.
November 21, 2025
Feature
Support for Object as document _id identifier.
October 27, 2025
Feature
The database clone
feature is now
supported at the General Availability ( GA ) level.
October 08, 2025
Feature
You can create, save, and manage queries in Firestore Studio. This feature is available in Preview .
September 17, 2025
Feature
The $lookup operator now supports the following fields:
from
localField
foreignField
as
For the full list of supported operators see Supported features .
September 05, 2025
Feature
Support for the following query features. For the full list of supported operators see Supported features .
$facet
$unionWith
$minN
$firstN
$lastN
$toString
$median
$percentile
September 02, 2025
Feature
Use Query insights
to view query performance metrics for your database. This feature is now
generally available ( GA ).
August 26, 2025
Feature
Support for Private Google Access .
Feature
General Availability (GA) release of Firestore with MongoDB compatibility .
Feature
Support for Firebase interfaces, including console, CLIs, and documentation.
Feature
Support for Firestore Triggers (Events) with Firestore with MongoDB compatibility databases.
Feature
Support for explaining queries and managing indexes in the MongoDB API.
Feature
Support for int32 , binary, and double types as document _id identifier.
Feature
Support for Point-In-Time-Recovery features, including reading data at a specific snapshot through the MongoDB APIs.
Feature
Support for unique indexes .
Feature
New billing metrics which allow customers to easily attribute Firestore Enterprise costs to database and RPC methods in Cloud Monitoring.
Feature
Support for managed bulk delete and import and export .
Feature
A range of performance improvements to support more performant queries on arrays and larger bulk operations with fewer transient errors.
Feature
Support for the following query features. For the full list of supported operators see Supported features .
$ projection operator
Update array operators:
$
$[]
$[<identifier>]
$addToSet
$pop
$pullAll
Update modifiers:
$each
$position
$slice
$sort
$addToSet aggregation pipeline accumulator expression
Aggregation pipeline arithmetic operators:
$exp
$ln
$log
$log10
$pow
$sqrt
$trunc
Aggregation pipeline array operators
$filter
$firstN
$in
$indexOfArray
$lastN
$maxN
$minN
$objectToArray
$range
$reduce
$sortArray
$zip
$binarySize and $bsonSize aggregation pipeline data size operators
$dateTrunc aggregation pipeline date operator
Aggregation pipeline operators:
$mergeObjects
$natural (ascending)
Aggregation pipeline set operators:
$allElementsTrue
$anyElementsTrue
$anyElementTrue
$setDifference
$setEquals
$setIntersection
$setIsSubset
$setIntersection
$setIsSubset
$setUnion
$bucket aggregation pipeline stage operator
Aggregation pipeline type conversion operators:
$convert
$toDate
$toDecimal
$toDouble
$toInt
$toLong
$toObjectId
$toString
$type
$let and $map aggregation pipeline variable operators
$lookup aggregation pipeline stage operator, limited to _id in the foreignField
Feature
You can clone an existing database at a selected timestamp into a new database. This feature is available in Preview .
Feature
Usage dashboard in the Google Cloud console.
Feature
New JSON results viewer and JSON export tool in the Google Cloud console.
August 01, 2025
Feature
You can clone an existing database at a selected timestamp into a new database. This feature is available in Preview .
July 31, 2025
Feature
Support for explain() in the Firestore with MongoDB compatibility API is now available in Preview . You can now use explain() in tools such as MongoDB Shell and Compass.
July 21, 2025
Feature
Managed import and export for Firestore with MongoDB compatibility is now available in Preview .
Feature
Cloud Monitoring billing metrics for Firestore with MongoDB compatibility databases are now available in Preview . Limitations: These metrics don't reflect admin operations like import, export, bulk delete, indexing, and restore.
Feature
Point-in-time recovery and snapshot reads for Firestore with MongoDB compatibility are now available in Preview .
Feature
Bulk delete for Firestore with MongoDB compatibility is now available in Preview .
July 10, 2025
Feature
Array update operators $push and $pull are now available in Preview.
Feature
Performance improvements:
Performance improvements on disjunction $in queries and keys only index scans due to query optimizer tuning is now available in Preview.
Performance improvements on bulk insertions is now available in Preview.
Performance improvements on $elemMatch queries with indexes due
to query optimizer tuning is now available in Preview.
April 09, 2025
Feature
Preview release of Firestore with MongoDB compatibility .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
