---
title: "Class AggregationResultIterator (2.24.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationResultIterator
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/google.cloud.datastore.aggregation.AggregationResultIterator
  title: "Class AggregationResultIterator (2.24.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class AggregationResultIterator (2.24.0)
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
AggregationResultIterator (
aggregation_query ,
client ,
limit = None ,
eventual = False ,
retry = None ,
timeout = None ,
read_time = None ,
)
Represent the state of a given execution of a Query.
Parameters
Name
Description
aggregation_query
AggregationQuery
AggregationQuery object holding permanent configuration (i.e. things that don't change on with each page in a results set).
client
Client
The client used to make a request.
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
Properties
explain_metrics
Get the metrics associated with the query execution.
Metrics are only available when explain_options is set on the query. If
ExplainOptions.analyze is False, only plan_summary is available. If it is
True, execution_stats is also available.
Exceptions
Type
Description
QueryExplainError
if explain_metrics is not available on the query.
Returns
Type
Description
ExplainMetrics
The metrics associated with the query execution.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
