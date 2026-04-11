---
title: "Class AggregationQuery (2.23.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.aggregation.AggregationQuery
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/firestore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.aggregation.AggregationQuery
  title: "Class AggregationQuery (2.23.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AggregationQuery (2.23.0)
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
AggregationQuery ( nested_query )
Represents an aggregation query to the Firestore API.
Methods
get
get (
transaction = None ,
retry : Union [ retries . Retry , None , object ] = _MethodDefault . _DEFAULT_VALUE ,
timeout : float | None = None ,
* ,
explain_options : Optional [ ExplainOptions ] = None ,
read_time : Optional [ datetime . datetime ] = None
) - > QueryResultsList [ AggregationResult ]
Runs the aggregation query.
This sends a RunAggregationQuery RPC and returns a list of
aggregation results in the stream of RunAggregationQueryResponse
messages.
Parameters
Name
Description
transaction
Optional[ Transaction ]
An existing transaction that this query will run in. If a transaction is used and it already has write operations added, this method cannot be used (i.e. read-after-write is not allowed).
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried. Defaults to a system-specified policy.
timeout
float
The timeout for this request. Defaults to a system-specified value.
explain_options
Optional[ ExplainOptions ]
Options to enable query profiling for this query. When set, explain_metrics will be available on the returned generator.
read_time
Optional[datetime.datetime]
If set, reads documents as they were at the given time. This must be a timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. If no timezone is specified in the datetime.datetime object, it is assumed to be UTC.
Returns
Type
Description
QueryResultsList[AggregationResult]
The aggregation query results.
stream
stream (
transaction : Optional [ "transaction.Transaction" ] = None ,
retry : Union [ retries . Retry , None , object ] = _MethodDefault . _DEFAULT_VALUE ,
timeout : Optional [ float ] = None ,
* ,
explain_options : Optional [ ExplainOptions ] = None ,
read_time : Optional [ datetime . datetime ] = None
) - > StreamGenerator [ List [ AggregationResult ]]
Runs the aggregation query.
This sends a RunAggregationQuery RPC and then returns a generator
which consumes each document returned in the stream of
RunAggregationQueryResponse messages.
If a transaction is used and it already has write operations added,
this method cannot be used (i.e. read-after-write is not allowed).
Parameters
Name
Description
transaction
Optional[ Transaction ]
An existing transaction that this query will run in.
retry
Optional[google.api_core.retry.Retry]
Designation of what errors, if any, should be retried. Defaults to a system-specified policy.
timeout
Optinal[float]
The timeout for this request. Defaults
explain_options
Optional[ ExplainOptions ]
Options to enable query profiling for this query. When set, explain_metrics will be available on the returned generator.
read_time
Optional[datetime.datetime]
If set, reads documents as they were at the given time. This must be a timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. If no timezone is specified in the datetime.datetime object, it is assumed to be UTC.
Returns
Type
Description
StreamGenerator[List[AggregationResult]]
A generator of the query results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
