---
title: "Module async_query (2.23.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/firestore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_query
  title: "Module async_query (2.23.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Module async_query (2.23.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.23.0 (latest)
2.22.0
2.21.0
2.20.2
2.19.0
2.18.0
2.17.2
2.16.1
2.15.0
2.14.0
2.13.1
2.12.0
2.11.1
2.10.1
2.9.1
2.8.0
2.7.3
2.6.1
2.5.3
2.4.0
2.3.4
2.2.0
2.1.3
2.0.2
1.9.2
1.8.1
1.7.0
1.6.2
1.5.0
1.4.0
1.3.0
Classes for representing queries for the Google Cloud Firestore API.
A Query can be created directly from
a Collection and that can be
a more common way to create a query than direct usage of the constructor.
Classes
AsyncCollectionGroup
AsyncCollectionGroup (
parent ,
projection = None ,
field_filters = (),
orders = (),
limit = None ,
limit_to_last = False ,
offset = None ,
start_at = None ,
end_at = None ,
all_descendants = True ,
recursive = False ,
)
Represents a Collection Group in the Firestore API.
This is a specialization of .AsyncQuery that includes all documents in the
database that are contained in a collection or subcollection of the given
parent.
Parameter
Name
Description
parent
CollectionReference
The collection that this query applies to.
AsyncQuery
AsyncQuery (
parent ,
projection = None ,
field_filters = (),
orders = (),
limit = None ,
limit_to_last = False ,
offset = None ,
start_at = None ,
end_at = None ,
all_descendants = False ,
recursive = False ,
)
Represents a query to the Firestore API.
Instances of this class are considered immutable: all methods that
would modify an instance instead return a new instance.
Parameters
Name
Description
parent
CollectionReference
The collection that this query applies to.
projection
Optional[ Projection ]
A projection of document fields to limit the query results to.
field_filters
Optional[Tuple[ FieldFilter , ...]]
The filters to be applied in the query.
orders
Optional[Tuple[ Order , ...]]
The "order by" entries to use in the query.
limit
Optional[int]
The maximum number of documents the query is allowed to return.
offset
Optional[int]
The number of results to skip.
start_at
Optional[Tuple[dict, bool]]
Two-tuple of : * a mapping of fields. Any field that is present in this mapping must also be present in orders * an after flag The fields and the flag combine to form a cursor used as a starting point in a query result set. If the after flag is :data: True , the results will start just after any documents which have fields matching the cursor, otherwise any matching documents will be included in the result set. When the query is formed, the document values will be used in the order given by orders .
end_at
Optional[Tuple[dict, bool]]
Two-tuple of: * a mapping of fields. Any field that is present in this mapping must also be present in orders * a before flag The fields and the flag combine to form a cursor used as an ending point in a query result set. If the before flag is :data: True , the results will end just before any documents which have fields matching the cursor, otherwise any matching documents will be included in the result set. When the query is formed, the document values will be used in the order given by orders .
all_descendants
Optional[bool]
When false, selects only collections that are immediate children of the parent specified in the containing RunQueryRequest . When true, selects all descendant collections.
recursive
Optional[bool]
When true, returns all documents and all documents in any subcollections below them. Defaults to false.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
