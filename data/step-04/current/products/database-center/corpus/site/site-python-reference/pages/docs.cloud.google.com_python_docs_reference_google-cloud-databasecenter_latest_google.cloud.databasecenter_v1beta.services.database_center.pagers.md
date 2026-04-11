---
title: "Module pagers (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.services.database_center.pagers
  title: "Module pagers (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Module pagers (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.7.0 (latest)
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
API documentation for databasecenter_v1beta.services.database_center.pagers module.
Classes
AggregateFleetAsyncPager
AggregateFleetAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . databasecenter_v1beta . types . service . AggregateFleetResponse
],
],
request : google . cloud . databasecenter_v1beta . types . service . AggregateFleetRequest ,
response : google . cloud . databasecenter_v1beta . types . service . AggregateFleetResponse ,
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
A pager for iterating through aggregate_fleet requests.
This class thinly wraps an initial
AggregateFleetResponse object, and
provides an __aiter__ method to iterate through its
rows field.
If there are more pages, the __aiter__ method will make additional
AggregateFleet requests and continue to iterate
through the rows field on the
corresponding responses.
All the usual AggregateFleetResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
AggregateFleetPager
AggregateFleetPager (
method : typing . Callable [
[ ... ], google . cloud . databasecenter_v1beta . types . service . AggregateFleetResponse
],
request : google . cloud . databasecenter_v1beta . types . service . AggregateFleetRequest ,
response : google . cloud . databasecenter_v1beta . types . service . AggregateFleetResponse ,
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
A pager for iterating through aggregate_fleet requests.
This class thinly wraps an initial
AggregateFleetResponse object, and
provides an __iter__ method to iterate through its
rows field.
If there are more pages, the __iter__ method will make additional
AggregateFleet requests and continue to iterate
through the rows field on the
corresponding responses.
All the usual AggregateFleetResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryDatabaseResourceGroupsAsyncPager
QueryDatabaseResourceGroupsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . databasecenter_v1beta . types . service . QueryDatabaseResourceGroupsResponse
],
],
request : google . cloud . databasecenter_v1beta . types . service . QueryDatabaseResourceGroupsRequest ,
response : google . cloud . databasecenter_v1beta . types . service . QueryDatabaseResourceGroupsResponse ,
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
A pager for iterating through query_database_resource_groups requests.
This class thinly wraps an initial
QueryDatabaseResourceGroupsResponse object, and
provides an __aiter__ method to iterate through its
resource_groups field.
If there are more pages, the __aiter__ method will make additional
QueryDatabaseResourceGroups requests and continue to iterate
through the resource_groups field on the
corresponding responses.
All the usual QueryDatabaseResourceGroupsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryDatabaseResourceGroupsPager
QueryDatabaseResourceGroupsPager (
method : typing . Callable [
[ ... ],
google . cloud . databasecenter_v1beta . types . service . QueryDatabaseResourceGroupsResponse ,
],
request : google . cloud . databasecenter_v1beta . types . service . QueryDatabaseResourceGroupsRequest ,
response : google . cloud . databasecenter_v1beta . types . service . QueryDatabaseResourceGroupsResponse ,
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
A pager for iterating through query_database_resource_groups requests.
This class thinly wraps an initial
QueryDatabaseResourceGroupsResponse object, and
provides an __iter__ method to iterate through its
resource_groups field.
If there are more pages, the __iter__ method will make additional
QueryDatabaseResourceGroups requests and continue to iterate
through the resource_groups field on the
corresponding responses.
All the usual QueryDatabaseResourceGroupsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryIssuesAsyncPager
QueryIssuesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . databasecenter_v1beta . types . service . QueryIssuesResponse
],
],
request : google . cloud . databasecenter_v1beta . types . service . QueryIssuesRequest ,
response : google . cloud . databasecenter_v1beta . types . service . QueryIssuesResponse ,
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
A pager for iterating through query_issues requests.
This class thinly wraps an initial
QueryIssuesResponse object, and
provides an __aiter__ method to iterate through its
resource_issues field.
If there are more pages, the __aiter__ method will make additional
QueryIssues requests and continue to iterate
through the resource_issues field on the
corresponding responses.
All the usual QueryIssuesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryIssuesPager
QueryIssuesPager (
method : typing . Callable [
[ ... ], google . cloud . databasecenter_v1beta . types . service . QueryIssuesResponse
],
request : google . cloud . databasecenter_v1beta . types . service . QueryIssuesRequest ,
response : google . cloud . databasecenter_v1beta . types . service . QueryIssuesResponse ,
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
A pager for iterating through query_issues requests.
This class thinly wraps an initial
QueryIssuesResponse object, and
provides an __iter__ method to iterate through its
resource_issues field.
If there are more pages, the __iter__ method will make additional
QueryIssues requests and continue to iterate
through the resource_issues field on the
corresponding responses.
All the usual QueryIssuesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryProductsAsyncPager
QueryProductsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . databasecenter_v1beta . types . service . QueryProductsResponse
],
],
request : google . cloud . databasecenter_v1beta . types . service . QueryProductsRequest ,
response : google . cloud . databasecenter_v1beta . types . service . QueryProductsResponse ,
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
A pager for iterating through query_products requests.
This class thinly wraps an initial
QueryProductsResponse object, and
provides an __aiter__ method to iterate through its
products field.
If there are more pages, the __aiter__ method will make additional
QueryProducts requests and continue to iterate
through the products field on the
corresponding responses.
All the usual QueryProductsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryProductsPager
QueryProductsPager (
method : typing . Callable [
[ ... ], google . cloud . databasecenter_v1beta . types . service . QueryProductsResponse
],
request : google . cloud . databasecenter_v1beta . types . service . QueryProductsRequest ,
response : google . cloud . databasecenter_v1beta . types . service . QueryProductsResponse ,
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
A pager for iterating through query_products requests.
This class thinly wraps an initial
QueryProductsResponse object, and
provides an __iter__ method to iterate through its
products field.
If there are more pages, the __iter__ method will make additional
QueryProducts requests and continue to iterate
through the products field on the
corresponding responses.
All the usual QueryProductsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
