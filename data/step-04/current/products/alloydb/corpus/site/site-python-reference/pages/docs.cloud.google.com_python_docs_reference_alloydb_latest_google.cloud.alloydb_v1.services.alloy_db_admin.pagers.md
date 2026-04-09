---
title: "Module pagers (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/alloydb/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.services.alloy_db_admin.pagers
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
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.0
0.4.9
0.3.16
0.2.1
0.1.1
API documentation for alloydb_v1.services.alloy_db_admin.pagers module.
Classes
ListBackupsAsyncPager
ListBackupsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . alloydb_v1 . types . service . ListBackupsResponse ],
],
request : google . cloud . alloydb_v1 . types . service . ListBackupsRequest ,
response : google . cloud . alloydb_v1 . types . service . ListBackupsResponse ,
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
A pager for iterating through list_backups requests.
This class thinly wraps an initial
ListBackupsResponse object, and
provides an __aiter__ method to iterate through its
backups field.
If there are more pages, the __aiter__ method will make additional
ListBackups requests and continue to iterate
through the backups field on the
corresponding responses.
All the usual ListBackupsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListBackupsPager
ListBackupsPager (
method : typing . Callable [
[ ... ], google . cloud . alloydb_v1 . types . service . ListBackupsResponse
],
request : google . cloud . alloydb_v1 . types . service . ListBackupsRequest ,
response : google . cloud . alloydb_v1 . types . service . ListBackupsResponse ,
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
A pager for iterating through list_backups requests.
This class thinly wraps an initial
ListBackupsResponse object, and
provides an __iter__ method to iterate through its
backups field.
If there are more pages, the __iter__ method will make additional
ListBackups requests and continue to iterate
through the backups field on the
corresponding responses.
All the usual ListBackupsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListClustersAsyncPager
ListClustersAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . alloydb_v1 . types . service . ListClustersResponse ],
],
request : google . cloud . alloydb_v1 . types . service . ListClustersRequest ,
response : google . cloud . alloydb_v1 . types . service . ListClustersResponse ,
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
A pager for iterating through list_clusters requests.
This class thinly wraps an initial
ListClustersResponse object, and
provides an __aiter__ method to iterate through its
clusters field.
If there are more pages, the __aiter__ method will make additional
ListClusters requests and continue to iterate
through the clusters field on the
corresponding responses.
All the usual ListClustersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListClustersPager
ListClustersPager (
method : typing . Callable [
[ ... ], google . cloud . alloydb_v1 . types . service . ListClustersResponse
],
request : google . cloud . alloydb_v1 . types . service . ListClustersRequest ,
response : google . cloud . alloydb_v1 . types . service . ListClustersResponse ,
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
A pager for iterating through list_clusters requests.
This class thinly wraps an initial
ListClustersResponse object, and
provides an __iter__ method to iterate through its
clusters field.
If there are more pages, the __iter__ method will make additional
ListClusters requests and continue to iterate
through the clusters field on the
corresponding responses.
All the usual ListClustersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDatabasesAsyncPager
ListDatabasesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . alloydb_v1 . types . service . ListDatabasesResponse ],
],
request : google . cloud . alloydb_v1 . types . service . ListDatabasesRequest ,
response : google . cloud . alloydb_v1 . types . service . ListDatabasesResponse ,
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
A pager for iterating through list_databases requests.
This class thinly wraps an initial
ListDatabasesResponse object, and
provides an __aiter__ method to iterate through its
databases field.
If there are more pages, the __aiter__ method will make additional
ListDatabases requests and continue to iterate
through the databases field on the
corresponding responses.
All the usual ListDatabasesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDatabasesPager
ListDatabasesPager (
method : typing . Callable [
[ ... ], google . cloud . alloydb_v1 . types . service . ListDatabasesResponse
],
request : google . cloud . alloydb_v1 . types . service . ListDatabasesRequest ,
response : google . cloud . alloydb_v1 . types . service . ListDatabasesResponse ,
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
A pager for iterating through list_databases requests.
This class thinly wraps an initial
ListDatabasesResponse object, and
provides an __iter__ method to iterate through its
databases field.
If there are more pages, the __iter__ method will make additional
ListDatabases requests and continue to iterate
through the databases field on the
corresponding responses.
All the usual ListDatabasesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListInstancesAsyncPager
ListInstancesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . alloydb_v1 . types . service . ListInstancesResponse ],
],
request : google . cloud . alloydb_v1 . types . service . ListInstancesRequest ,
response : google . cloud . alloydb_v1 . types . service . ListInstancesResponse ,
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
A pager for iterating through list_instances requests.
This class thinly wraps an initial
ListInstancesResponse object, and
provides an __aiter__ method to iterate through its
instances field.
If there are more pages, the __aiter__ method will make additional
ListInstances requests and continue to iterate
through the instances field on the
corresponding responses.
All the usual ListInstancesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListInstancesPager
ListInstancesPager (
method : typing . Callable [
[ ... ], google . cloud . alloydb_v1 . types . service . ListInstancesResponse
],
request : google . cloud . alloydb_v1 . types . service . ListInstancesRequest ,
response : google . cloud . alloydb_v1 . types . service . ListInstancesResponse ,
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
A pager for iterating through list_instances requests.
This class thinly wraps an initial
ListInstancesResponse object, and
provides an __iter__ method to iterate through its
instances field.
If there are more pages, the __iter__ method will make additional
ListInstances requests and continue to iterate
through the instances field on the
corresponding responses.
All the usual ListInstancesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListSupportedDatabaseFlagsAsyncPager
ListSupportedDatabaseFlagsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . alloydb_v1 . types . service . ListSupportedDatabaseFlagsResponse
],
],
request : google . cloud . alloydb_v1 . types . service . ListSupportedDatabaseFlagsRequest ,
response : google . cloud . alloydb_v1 . types . service . ListSupportedDatabaseFlagsResponse ,
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
A pager for iterating through list_supported_database_flags requests.
This class thinly wraps an initial
ListSupportedDatabaseFlagsResponse object, and
provides an __aiter__ method to iterate through its
supported_database_flags field.
If there are more pages, the __aiter__ method will make additional
ListSupportedDatabaseFlags requests and continue to iterate
through the supported_database_flags field on the
corresponding responses.
All the usual ListSupportedDatabaseFlagsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListSupportedDatabaseFlagsPager
ListSupportedDatabaseFlagsPager (
method : typing . Callable [
[ ... ], google . cloud . alloydb_v1 . types . service . ListSupportedDatabaseFlagsResponse
],
request : google . cloud . alloydb_v1 . types . service . ListSupportedDatabaseFlagsRequest ,
response : google . cloud . alloydb_v1 . types . service . ListSupportedDatabaseFlagsResponse ,
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
A pager for iterating through list_supported_database_flags requests.
This class thinly wraps an initial
ListSupportedDatabaseFlagsResponse object, and
provides an __iter__ method to iterate through its
supported_database_flags field.
If there are more pages, the __iter__ method will make additional
ListSupportedDatabaseFlags requests and continue to iterate
through the supported_database_flags field on the
corresponding responses.
All the usual ListSupportedDatabaseFlagsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListUsersAsyncPager
ListUsersAsyncPager (
method : typing . Callable [
[ ... ], typing . Awaitable [ google . cloud . alloydb_v1 . types . service . ListUsersResponse ]
],
request : google . cloud . alloydb_v1 . types . service . ListUsersRequest ,
response : google . cloud . alloydb_v1 . types . service . ListUsersResponse ,
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
A pager for iterating through list_users requests.
This class thinly wraps an initial
ListUsersResponse object, and
provides an __aiter__ method to iterate through its
users field.
If there are more pages, the __aiter__ method will make additional
ListUsers requests and continue to iterate
through the users field on the
corresponding responses.
All the usual ListUsersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListUsersPager
ListUsersPager (
method : typing . Callable [
[ ... ], google . cloud . alloydb_v1 . types . service . ListUsersResponse
],
request : google . cloud . alloydb_v1 . types . service . ListUsersRequest ,
response : google . cloud . alloydb_v1 . types . service . ListUsersResponse ,
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
A pager for iterating through list_users requests.
This class thinly wraps an initial
ListUsersResponse object, and
provides an __iter__ method to iterate through its
users field.
If there are more pages, the __iter__ method will make additional
ListUsers requests and continue to iterate
through the users field on the
corresponding responses.
All the usual ListUsersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
