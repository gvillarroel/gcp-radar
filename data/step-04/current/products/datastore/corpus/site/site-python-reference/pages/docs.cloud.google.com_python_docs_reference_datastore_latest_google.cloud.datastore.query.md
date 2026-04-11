---
title: "Module query (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.query
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.query
  title: "Module query (2.24.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Module query (2.24.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.24.0 (latest)
2.23.0
2.22.0
2.21.0
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.2
2.14.0
2.13.2
2.12.0
2.11.1
2.10.0
2.9.0
2.8.3
2.7.2
2.6.2
2.5.1
2.4.0
2.3.0
2.2.0
2.1.6
2.0.1
1.15.5
1.14.0
1.13.2
1.12.0
1.11.0
1.10.0
1.9.0
Create / interact with Google Cloud Datastore queries.
Classes
And
And ( filters )
Class representation of an AND Filter.
BaseCompositeFilter
BaseCompositeFilter ( operation = Operator . OPERATOR_UNSPECIFIED , filters = None )
Base class for a Composite Filter. (either OR or AND).
BaseFilter
BaseFilter ()
Base class for Filters
Iterator
Iterator (
query ,
client ,
limit = None ,
offset = None ,
start_cursor = None ,
end_cursor = None ,
eventual = False ,
retry = None ,
timeout = None ,
read_time = None ,
)
Represent the state of a given execution of a Query.
Parameters
Name
Description
query
Query
Query object holding permanent configuration (i.e. things that don't change on with each page in a results set).
client
Client
The client used to make a request.
limit
int
(Optional) Limit the number of results returned.
offset
int
(Optional) Offset used to begin a query.
start_cursor
bytes
(Optional) Cursor to begin paging through query results.
end_cursor
bytes
(Optional) Cursor to end paging through query results.
eventual
bool
(Optional) Defaults to strongly consistent (False). Setting True will use eventual consistency, but cannot be used inside a transaction or with read_time, otherwise will raise ValueError.
retry
google.api_core.retry.Retry
A retry object used to retry requests. If None is specified, requests will be retried using a default configuration.
timeout
float
Time, in seconds, to wait for the request to complete. Note that if retry is specified, the timeout applies to each individual attempt.
read_time
datetime
(Optional) Runs the query with read time consistency. Cannot be used with eventual consistency or inside a transaction, otherwise will raise ValueError. This feature is in private preview.
Or
Or ( filters )
Class representation of an OR Filter.
PropertyFilter
PropertyFilter ( property_name , operator , value )
Class representation of a Property Filter
Query
Query (
client ,
kind = None ,
project = None ,
namespace = None ,
ancestor = None ,
filters = (),
projection = (),
order = (),
distinct_on = (),
explain_options = None ,
)
A Query against the Cloud Datastore.
This class serves as an abstraction for creating a query over data
stored in the Cloud Datastore.
Parameters
Name
Description
client
Client
The client used to connect to Datastore.
kind
str
The kind to query.
project
str
(Optional) The project associated with the query. If not passed, uses the client's value.
namespace
str
(Optional) The namespace to which to restrict results. If not passed, uses the client's value.
ancestor
Key
(Optional) key of the ancestor to which this query's results are restricted.
filters
tuple[str, str, str]
Property filters applied by this query. The sequence is (property_name, operator, value) .
projection
sequence of string
fields returned as part of query results.
order
sequence of string
field names used to order query results. Prepend - to a field name to sort it in descending order.
distinct_on
sequence of string
field names used to group query results.
explain_options
ExplainOptions
(Optional) Options to enable query profiling for this query. When set, explain_metrics will be available on the iterator returned by query.fetch().
Exceptions
Type
Description
ValueErro
if project is not passed and no implicit default is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
