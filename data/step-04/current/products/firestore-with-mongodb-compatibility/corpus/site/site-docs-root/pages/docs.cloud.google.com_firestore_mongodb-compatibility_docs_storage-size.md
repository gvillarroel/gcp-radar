---
title: "Storage size calculations \_|\_ Firestore with MongoDB compatibility \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/storage-size
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs
source_metadata:
  url: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/storage-size
  title: "Storage size calculations \_|\_ Firestore with MongoDB compatibility \_\
    |\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Storage size calculations
This page describes the storage size of documents, fields, and
index entries in Firestore with MongoDB compatibility.
You can learn about the costs of this storage at the Pricing page.
String size
String sizes are calculated as the number of UTF-8 encoded bytes + 1.
The following are stored as strings:
Collection name
Field names
String field values (including _id )
For example:
The collection name tasks uses 5 bytes + 1 byte, for a total of 6 bytes.
The field name description uses 11 bytes + 1 byte, for a total of 12
bytes.
Field value size
The following table shows the size of field values by type.
Type
Size
Array
The sum of the sizes of its values
Boolean
1 byte
Binary data
Byte length + 1 for a non-generic (non-0) subtype
Date
8 bytes
Double
8 bytes
Double128
16 bytes
32-bit integer
4 bytes
64-bit integer (long)
8 bytes
Object
The sum of the string sizes of each field name and the sizes of each field falue in the embedded object
Min Key
1 byte
Max Key
1 byte
Null
1 byte
Regular expression
(Pattern length + 1) + (Options length + 1)
Timestamp
8 bytes
String
Number of UTF-8 encoded bytes + 1
For example, a boolean field named done would use 6 bytes:
5 bytes for the done field name
1 byte for the boolean value
Document size
The size of a document is the sum of:
The string size of the collection name
The sum of the string size of each field name (except _id )
The sum of the size of each field value (including _id )
48 additional bytes
This example is for a document in collection tasks :
{
"_id" : "my_task_id" ,
"type" : "Personal" ,
"done" : false ,
"priority" : 1 ,
"description" : "Learn Cloud Firestore"
}
The total size of the fields is 78 bytes:
Field name and value
Field size in bytes
"_id": "my_task_id"
11 for the field's string value
"type": "Personal"
14 5 for the field name + 9 for the field's string value
"done": false
6 5 for the field name + 1 for the field's boolean value
"priority": 1
17 9 for the field name + 4 for the field's 32-bit integer value
"description": "Learn Cloud Firestore"
34 12 for the field name + 22 for the field's string value
So the document size is 6 + 78 + 48 = 132 bytes:
6 for the collection name
78 bytes for the fields
48 additional bytes
Index entry size
The size of an index entry in an index is the sum of:
The string size of the collection name
The size of the _id field value
The sum of the indexed field values
48 additional bytes
Consider a document in the tasks collection:
{
"_id" : "my_task_id" ,
"type" : "Personal" ,
"done" : false ,
"priority" : 1 ,
"description" : "Learn Cloud Firestore"
}
For an index on the done and
priority fields (both ascending), the total size of the index entry in this
index is 70 bytes:
6 bytes for the collection name tasks
11 bytes for the _id field value
1 byte for the boolean field value
4 bytes for the 32-bit integer field value
48 additional bytes
For sparse indexes, if a document doesn't include any of the fields,
then no index entry is created. If a document contains at least one of the
indexed fields, an index entry is created with absent indexed fields
set to NULL .
What's next
Learn about pricing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
