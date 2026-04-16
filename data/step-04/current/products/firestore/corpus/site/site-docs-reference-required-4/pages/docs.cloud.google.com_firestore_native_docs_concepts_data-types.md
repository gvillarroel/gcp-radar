---
title: "Supported data types \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/native/docs/concepts/data-types
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/native/docs/use-firestore-mcp
source_metadata:
  url: https://docs.cloud.google.com/firestore/native/docs/concepts/data-types
  title: "Supported data types \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation"
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
Supported data types
This page describes the data types that Firestore supports.
Data types
The following table lists the data types supported by Firestore. It
also describes the sort order used when comparing values of the same type:
Data type
Sort order
Notes
Array
By element values
An array cannot contain another array value as one of its elements.
Within an array, elements maintain the position assigned to them.
When sorting two or more arrays, arrays are ordered based on their element
values.
When comparing two arrays, the first elements of each array
are compared. If the first elements are equal, then the second elements
are compared and so on until a difference is found. If an array runs out
of elements to compare but is equal up to that point, then the shorter
array is ordered before the longer array.
For example, [1, 2, 3] .
The array [2] has the greatest first element value. The
array [1, 2, 3] has elements equal to the first three
elements of [1, 2, 3, 1] but is shorter in length.
Boolean
false < true
—
Bytes
Byte order
Up to 1,048,487 bytes (1 MiB - 89 bytes). Only the first 1,500 bytes are
considered by queries.
Date and time
Chronological
When stored in Firestore, precise only to microseconds; any
additional precision is rounded down.
Floating-point number
Numeric
64-bit double precision according to IEEE 754 , including (normalized) NaN & +/-Infinity .
Geographical point
By latitude, then longitude
At this time we do not recommend using this data type due to querying limitations. It is generally better to store latitude and longitude as separate numeric fields. If your app needs simple distance-based geoqueries, see Geo queries
Integer
Numeric
64-bit, signed
Map
By keys, then by value
Represents an object embedded within a document. When indexed, you can query
on subfields. If you exclude this value from indexing, then all subfields are
also excluded from indexing.
Key ordering is always sorted. For example, if you write
{c: "foo", a: "bar", b: "qux"} the map is sorted by key and
saved as {a: "bar", b: "qux", c: "foo"} .
Map fields are sorted by key and compared by key-value pairs, first comparing the keys and then the values. If the first key-value pairs are equal, the next key-value pairs are compared, and so on. If two maps have all of the same key-value pairs, then map length is considered. For
example, the following maps are in ascending order:
{a: "aaa", b: "baz"}
{a: "foo", b: "bar"}
{a: "foo", b: "bar", c: "qux"}
{a: "foo", b: "baz"}
{b: "aaa", c: "baz"}
{c: "aaa"}
Null
None
—
Reference
By path elements (collection, document ID, collection, document ID...)
For example,
projects/[PROJECT_ID]/databases/[DATABASE_ID]/documents/[DOCUMENT_PATH] .
Text string
UTF-8 encoded byte order
Up to 1,048,487 bytes (1 MiB - 89 bytes). Only the first 1,500 bytes of the
UTF-8 representation are considered by queries.
Vector
By dimension and then by individual element values
The max supported embedding dimension is 2048. To store vectors with
larger dimensions, use
dimensionality reduction .
Value type ordering
When a query involves a field with values of mixed types,
Firestore uses a deterministic ordering based on the internal
representations. The following list shows the order:
Null values
Boolean values
Integer and floating-point values, sorted in numerical order
Date values
Text string values
Byte values
Firestore references
Geographical point values
Array values
Vector embeddings
Map values
Numeric ordering
Firestore sorts all numeric values ( Integer & Floating point )
interleaved with each other. Floating point comparison follows the total
ordering of IEEE 754 with the notable
exception being that Firestore normalizes all NaN values, and
considers it less than -Infinity .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
