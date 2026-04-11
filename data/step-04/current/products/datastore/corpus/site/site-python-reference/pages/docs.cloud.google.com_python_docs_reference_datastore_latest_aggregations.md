---
title: "Aggregations \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastore/latest/aggregations
  title: "Aggregations \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Aggregations
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
class google.cloud.datastore.aggregation.AggregationQuery(client, query, explain_options=None)
Bases: object
An Aggregation query against the Cloud Datastore.
This class serves as an abstraction for creating aggregations over query
in the Cloud Datastore.
Parameters
client ( google.cloud.datastore.client.Client ) – The client used to connect to Datastore.
query ( google.cloud.datastore.query.Query ) – The query used for aggregations.
explain_options ( ExplainOptions ) – (Optional) Options to enable query profiling for
this query. When set, explain_metrics will be available on the iterator
returned by query.fetch().
If not passed, will use value from given query.
add_aggregation(aggregation)
Adds an aggregation operation to the nested query
Parameters
aggregation ( google.cloud.datastore.aggregation.BaseAggregation ) – An aggregation operation, e.g. a CountAggregation
add_aggregations(aggregations)
Adds a list of aggregations to the nested query
:type aggregations: list
:param aggregations: a list of aggregation operations
avg(property_ref, alias=None)
Adds a avg over the nested query
Parameters
property_ref ( str ) – The property_ref for the sum
count(alias=None)
Adds a count over the nested query
Parameters
alias ( str ) – (Optional) The alias for the count
fetch(client=None, limit=None, eventual=False, retry=None, timeout=None, read_time=None)
Execute the Aggregation Query; return an iterator for the aggregation results.
For example:
>>> andy = datastore.Entity(client.key('Person', 1234))
>>> andy['name'] = 'Andy'
>>> sally = datastore.Entity(client.key('Person', 2345))
>>> sally['name'] = 'Sally'
>>> bobby = datastore.Entity(client.key('Person', 3456))
>>> bobby['name'] = 'Bobby'
>>> client.put_multi([andy, sally, bobby])
>>> query = client.query(kind='Andy')
>>> aggregation_query = client.aggregation_query(query)
>>> result = aggregation_query.count(alias="total").fetch(limit=5)
>>> result
<google.cloud.datastore.aggregation.AggregationResultIterator object at ...>
Parameters
client ( google.cloud.datastore.client.Client ) – (Optional) client used to connect to datastore.
If not supplied, uses the query’s value.
eventual ( bool ) – (Optional) Defaults to strongly consistent (False).
Setting True will use eventual consistency,
but cannot be used inside a transaction or
with read_time, otherwise will raise
ValueError.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt.
read_time ( datetime ) – (Optional) use read_time read consistency, cannot be used inside a
transaction or with eventual consistency, or will raise ValueError.
Return type
AggregationIterator
Returns
The iterator for the aggregation query.
property namespace()
The nested query’s namespace
Return type
str or None
Returns
the namespace assigned to this query
property project()
Get the project for this AggregationQuery.
Return type
str
Returns
The project for the query.
sum(property_ref, alias=None)
Adds a sum over the nested query
Parameters
property_ref ( str ) – The property_ref for the sum
class google.cloud.datastore.aggregation.AggregationResult(alias, value)
Bases: object
A class representing result from Aggregation Query
Parameters
alias ( str ) – The alias for the aggregation.
value ( int ) – The resulting value from the aggregation.
class google.cloud.datastore.aggregation.AggregationResultIterator(aggregation_query, client, limit=None, eventual=False, retry=None, timeout=None, read_time=None)
Bases: google.api_core.page_iterator.Iterator
Represent the state of a given execution of a Query.
Parameters
aggregation_query ( AggregationQuery ) – AggregationQuery object holding permanent configuration (i.e.
things that don’t change on with each page in
a results set).
client ( Client ) – The client used to make a request.
eventual ( bool ) – (Optional) Defaults to strongly consistent (False).
Setting True will use eventual consistency,
but cannot be used inside a transaction or
with read_time, otherwise will raise ValueError.
retry ( google.api_core.retry.Retry ) – A retry object used to retry requests. If None is specified,
requests will be retried using a default configuration.
timeout ( float ) – Time, in seconds, to wait for the request to complete.
Note that if retry is specified, the timeout applies
to each individual attempt.
read_time ( datetime ) – (Optional) Runs the query with read time consistency.
Cannot be used with eventual consistency or inside a
transaction, otherwise will raise ValueError. This feature is in private preview.
property explain_metrics( : google.cloud.datastore.query_profile.ExplainMetric )
Get the metrics associated with the query execution.
Metrics are only available when explain_options is set on the query. If
ExplainOptions.analyze is False, only plan_summary is available. If it is
True, execution_stats is also available.
Return type
ExplainMetrics
Returns
The metrics associated with the query execution.
Raises
QueryExplainError
if explain_metrics is not available on the query.
class google.cloud.datastore.aggregation.AvgAggregation(property_ref, alias=None)
Bases: google.cloud.datastore.aggregation.BaseAggregation
Representation of a “Avg” aggregation query.
Parameters
property_ref ( str ) – The property_ref for the aggregation.
value ( int ) – The resulting value from the aggregation.
class google.cloud.datastore.aggregation.BaseAggregation(alias=None)
Bases: abc.ABC
Base class representing an Aggregation operation in Datastore
class google.cloud.datastore.aggregation.CountAggregation(alias=None)
Bases: google.cloud.datastore.aggregation.BaseAggregation
Representation of a “Count” aggregation query.
Parameters
alias ( str ) – The alias for the aggregation.
value ( int ) – The resulting value from the aggregation.
class google.cloud.datastore.aggregation.SumAggregation(property_ref, alias=None)
Bases: google.cloud.datastore.aggregation.BaseAggregation
Representation of a “Sum” aggregation query.
Parameters
property_ref ( str ) – The property_ref for the aggregation.
value ( int ) – The resulting value from the aggregation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
