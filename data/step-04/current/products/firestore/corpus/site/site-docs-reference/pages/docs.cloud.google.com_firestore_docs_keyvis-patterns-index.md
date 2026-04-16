---
title: "Heatmap patterns for index keys \_|\_ Firestore in Native mode \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/keyvis-patterns-index
  title: "Heatmap patterns for index keys \_|\_ Firestore in Native mode \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore in Native mode
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Heatmap patterns for index keys
This page shows examples of patterns that you might see in a Key Visualizer
heatmap. These patterns can help you troubleshoot specific performance
issues.
Edition and mode requirements
This document applies to Firestore Standard edition in Firestore in Native mode.
Evenly distributed usage
If a heatmap shows a fine-grained mix of dark and bright colors, then write/delete operations for
index keys are evenly distributed throughout the database. This heatmap likely
represents an effective usage pattern for Firestore.
Indexes on sequential keys
A heatmap with a single bright diagonal line can indicate an index that is on a
key that is strictly increasing or decreasing, such as timestamp. Indexes on
sequential keys are not recommended and can create hotspots. When hotspotting,
you might observe corresponding elevated latencies.
Some examples of common hotspots on index are as follows:
Note: In the following heatmap example, for Firestore, the x-axis of the heatmap represents time, and the y-axis represents index keys.
Hotspotting due to increasing timestamp
In this example, a heatmap with a single bright diagonal line can indicate a
database that uses strictly increasing or decreasing index write/delete operations on a timestamp
field name.
Hotspotting due to increasing field names
In this example, a heatmap with a single bright diagonal line can indicate a
database that uses strictly increasing or decreasing index write/delete operations on an
incremental field, such as auto-generated invoice numbers.
To identify the hotspotting issue, use the Key Visualizer tool and understand the index key
structure to determine which index causes the issue and exempt those indexes
with best practices .
Understand the index key structure
Before you understand the structure of index keys that you see in Key Visualizer
tool, learn about indexes in Firestore.
The following code shows an example index key format that you see when you hover
over the affected key-range on the heatmap.
COLLECTION: projects/PROJECT_ID/databases/(default)/documents/Users
PROPERTIES: (Timestamp: DESC)
VALUES: (16500000000000001)
DOCUMENT: projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001
Where:
COLLECTION : location of the collection in your database. Based on the
scope , it can be collection path for collection scope or collection name for
collection group scope.
PROPERTIES : fields used to create the index. The __name__ ordering property is only shown for index definitions that modify the default ordering.
VALUES : value of each property.
DOCUMENT : ID of the document updated in an operation.
From the earlier example, identify the fields from the PROPERTIES
value to find the affected index.
To find the index, complete the following steps:
In the Google Cloud console, go to the Databases page.
Go to Databases
Select the required database from the list of databases.
In the navigation menu, click Indexes .
Go to the Composite or Single Field tab.
You can identify the type of index by analyzing the PROPERTIES field. See
examples of index keys for more information.
Click Filter , select Fields , and enter the name of the field.
Use the OR operator to add more fields in case of composite indexes.
After you have identified the index that is causing issues, you can use the following solutions:
Composite index: Either modify the index to ensure that the field whose value
monotonically increases or decreases is not selected as the first field for
indexing, or delete the index.
Single-field index: Add an exemption for the field and the sorting order that
you want to exempt. See Adding a single-field exemption for more information.
Examples of index key entries on the heatmap
Type
Description
Example
Collection scope single-field Indexes ASC, DESC
Firestore creates indexes with collection scope by default.
Index entry for the single-field Index on the Timestamp field, in descending order for the Users/5000000000000001 document.
COLLECTION: projects/ PROJECT_ID /databases/(default)/documents/Users
PROPERTIES: (Timestamp: DESC)
VALUES: (16500000000000001)
DOCUMENT: projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001
Collection scope single-field Indexes for array fields
For each array field in a document, Firestore creates and maintains a collection scope array-contains index.
Index entry for array-contains mode single-field indexes that will be created when a field Country: [USA, Japan] is added to the document. Note that ASC,DESC indexes will also be created by default for this field. The example shows the ASC index for the Country field.
COLLECTION: projects/ PROJECT_ID /databases/(default)/documents/Users
PROPERTIES:(Country: ASC)
VALUES:([USA, Japan]) DOCUMENT:(projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001)
Collection group single-field Indexes ASC, DESC, ARRAY
A collection group includes all collections with the same collection ID.
Index entry for the collection group single-field Index on the Timestamp field, in descending order.
COLLECTION GROUP: Users
PROPERTIES: (Timestamp: DESC)
VALUES: (16500000000000001L) DOCUMENT: projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001
Collection group single-field Indexes ASC, DESC, ARRAY
Index entry for the collection group single-field Index on Country field in the array-contains mode
COLLECTION GROUP: Users PROPERTIES: (Country: ARRAY ASC) VALUES: (USA) DOCUMENT: projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001
Collection composite index entry with ASC, ASC, ARRAY properties
Composite index entries with parent are created when nested documents are created with collection scope index definition.
Index entry for composite index with Timestamp and Name field in ascending order, and Country in array-contains mode.
COLLECTION: projects/ PROJECT_ID /databases/(default)/documents/Users
PROPERTIES: (Timestamp: ASC, Name: ASC,Country: ARRAY)
VALUES: (16500000000000001L, 'Alice', 'USA')
DOCUMENT: (projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001)
Collection group scope composite index entry with ASC, ASC properties
Index entry for the composite index on the Timestamp field, in ascending order and Name field in ascending order
COLLECTION GROUP: Users
PROPERTIES: (Timestamp: ASC, Name: ASC)
VALUES: (16500000000000001L, 'Alice')
DOCUMENT: (projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001)
Collection scope composite Index entry with ASC and __name__ properties
Index entry for the composite Index on the Timestamp field in ascending order and with __name__ sorting in descending order for the Users/5000000000000001 document. You can use __name__ as the final field in an index definition to change the default ordering of results .
COLLECTION: projects/ PROJECT_ID /databases/(default)/documents/Users PROPERTIES: (Timestamp: ASC, __name__ DESC) VALUES: (16500000000000001) DOCUMENT: projects/ PROJECT_ID /databases/(default)/documents/Users/5000000000000001
What's next
Learn how to get started with Key Visualizer .
Find out how to explore a heatmap in detail .
Read about the metrics you can view in a heatmap .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
