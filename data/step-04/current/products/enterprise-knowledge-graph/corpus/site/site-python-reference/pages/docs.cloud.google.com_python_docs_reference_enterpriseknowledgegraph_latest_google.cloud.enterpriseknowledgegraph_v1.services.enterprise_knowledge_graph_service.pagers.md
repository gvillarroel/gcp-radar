---
title: "Module pagers (0.6.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers
  title: "Module pagers (0.6.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Module pagers (0.6.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.6.0 (latest)
0.5.0
0.4.0
0.3.17
0.2.1
0.1.0
API documentation for enterpriseknowledgegraph_v1.services.enterprise_knowledge_graph_service.pagers module.
Classes
ListEntityReconciliationJobsAsyncPager
ListEntityReconciliationJobsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . enterpriseknowledgegraph_v1 . types . service . ListEntityReconciliationJobsResponse
],
],
request : google . cloud . enterpriseknowledgegraph_v1 . types . service . ListEntityReconciliationJobsRequest ,
response : google . cloud . enterpriseknowledgegraph_v1 . types . service . ListEntityReconciliationJobsResponse ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary_async . AsyncRetry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
)
A pager for iterating through list_entity_reconciliation_jobs requests.
This class thinly wraps an initial
ListEntityReconciliationJobsResponse object, and
provides an __aiter__ method to iterate through its
entity_reconciliation_jobs field.
If there are more pages, the __aiter__ method will make additional
ListEntityReconciliationJobs requests and continue to iterate
through the entity_reconciliation_jobs field on the
corresponding responses.
All the usual ListEntityReconciliationJobsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListEntityReconciliationJobsPager
ListEntityReconciliationJobsPager (
method : typing . Callable [
[ ... ],
google . cloud . enterpriseknowledgegraph_v1 . types . service . ListEntityReconciliationJobsResponse ,
],
request : google . cloud . enterpriseknowledgegraph_v1 . types . service . ListEntityReconciliationJobsRequest ,
response : google . cloud . enterpriseknowledgegraph_v1 . types . service . ListEntityReconciliationJobsResponse ,
* ,
retry : typing . Optional [
typing . Union [
google . api_core . retry . retry_unary . Retry ,
google . api_core . gapic_v1 . method . _MethodDefault ,
]
] = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Union [ float , object ] = _MethodDefault . _DEFAULT_VALUE ,
metadata : typing . Sequence [ typing . Tuple [ str , typing . Union [ str , bytes ]]] = ()
)
A pager for iterating through list_entity_reconciliation_jobs requests.
This class thinly wraps an initial
ListEntityReconciliationJobsResponse object, and
provides an __iter__ method to iterate through its
entity_reconciliation_jobs field.
If there are more pages, the __iter__ method will make additional
ListEntityReconciliationJobs requests and continue to iterate
through the entity_reconciliation_jobs field on the
corresponding responses.
All the usual ListEntityReconciliationJobsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
