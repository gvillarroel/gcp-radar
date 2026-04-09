---
title: "Module pagers (0.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataform/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers
  title: "Module pagers (0.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (0.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.10.0 (latest)
0.9.0
0.8.0
0.7.0
0.6.2
0.5.16
0.4.1
0.3.0
0.2.3
0.1.0
API documentation for dataform_v1.services.dataform.pagers module.
Classes
FetchRepositoryHistoryAsyncPager
FetchRepositoryHistoryAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . FetchRepositoryHistoryResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . FetchRepositoryHistoryRequest ,
response : google . cloud . dataform_v1 . types . dataform . FetchRepositoryHistoryResponse ,
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
A pager for iterating through fetch_repository_history requests.
This class thinly wraps an initial
FetchRepositoryHistoryResponse object, and
provides an __aiter__ method to iterate through its
commits field.
If there are more pages, the __aiter__ method will make additional
FetchRepositoryHistory requests and continue to iterate
through the commits field on the
corresponding responses.
All the usual FetchRepositoryHistoryResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
FetchRepositoryHistoryPager
FetchRepositoryHistoryPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . FetchRepositoryHistoryResponse
],
request : google . cloud . dataform_v1 . types . dataform . FetchRepositoryHistoryRequest ,
response : google . cloud . dataform_v1 . types . dataform . FetchRepositoryHistoryResponse ,
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
A pager for iterating through fetch_repository_history requests.
This class thinly wraps an initial
FetchRepositoryHistoryResponse object, and
provides an __iter__ method to iterate through its
commits field.
If there are more pages, the __iter__ method will make additional
FetchRepositoryHistory requests and continue to iterate
through the commits field on the
corresponding responses.
All the usual FetchRepositoryHistoryResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCompilationResultsAsyncPager
ListCompilationResultsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . ListCompilationResultsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . ListCompilationResultsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListCompilationResultsResponse ,
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
A pager for iterating through list_compilation_results requests.
This class thinly wraps an initial
ListCompilationResultsResponse object, and
provides an __aiter__ method to iterate through its
compilation_results field.
If there are more pages, the __aiter__ method will make additional
ListCompilationResults requests and continue to iterate
through the compilation_results field on the
corresponding responses.
All the usual ListCompilationResultsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCompilationResultsPager
ListCompilationResultsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . ListCompilationResultsResponse
],
request : google . cloud . dataform_v1 . types . dataform . ListCompilationResultsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListCompilationResultsResponse ,
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
A pager for iterating through list_compilation_results requests.
This class thinly wraps an initial
ListCompilationResultsResponse object, and
provides an __iter__ method to iterate through its
compilation_results field.
If there are more pages, the __iter__ method will make additional
ListCompilationResults requests and continue to iterate
through the compilation_results field on the
corresponding responses.
All the usual ListCompilationResultsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListReleaseConfigsAsyncPager
ListReleaseConfigsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . ListReleaseConfigsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . ListReleaseConfigsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListReleaseConfigsResponse ,
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
A pager for iterating through list_release_configs requests.
This class thinly wraps an initial
ListReleaseConfigsResponse object, and
provides an __aiter__ method to iterate through its
release_configs field.
If there are more pages, the __aiter__ method will make additional
ListReleaseConfigs requests and continue to iterate
through the release_configs field on the
corresponding responses.
All the usual ListReleaseConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListReleaseConfigsPager
ListReleaseConfigsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . ListReleaseConfigsResponse
],
request : google . cloud . dataform_v1 . types . dataform . ListReleaseConfigsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListReleaseConfigsResponse ,
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
A pager for iterating through list_release_configs requests.
This class thinly wraps an initial
ListReleaseConfigsResponse object, and
provides an __iter__ method to iterate through its
release_configs field.
If there are more pages, the __iter__ method will make additional
ListReleaseConfigs requests and continue to iterate
through the release_configs field on the
corresponding responses.
All the usual ListReleaseConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRepositoriesAsyncPager
ListRepositoriesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . ListRepositoriesResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . ListRepositoriesRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListRepositoriesResponse ,
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
A pager for iterating through list_repositories requests.
This class thinly wraps an initial
ListRepositoriesResponse object, and
provides an __aiter__ method to iterate through its
repositories field.
If there are more pages, the __aiter__ method will make additional
ListRepositories requests and continue to iterate
through the repositories field on the
corresponding responses.
All the usual ListRepositoriesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRepositoriesPager
ListRepositoriesPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . ListRepositoriesResponse
],
request : google . cloud . dataform_v1 . types . dataform . ListRepositoriesRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListRepositoriesResponse ,
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
A pager for iterating through list_repositories requests.
This class thinly wraps an initial
ListRepositoriesResponse object, and
provides an __iter__ method to iterate through its
repositories field.
If there are more pages, the __iter__ method will make additional
ListRepositories requests and continue to iterate
through the repositories field on the
corresponding responses.
All the usual ListRepositoriesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListWorkflowConfigsAsyncPager
ListWorkflowConfigsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . ListWorkflowConfigsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . ListWorkflowConfigsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListWorkflowConfigsResponse ,
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
A pager for iterating through list_workflow_configs requests.
This class thinly wraps an initial
ListWorkflowConfigsResponse object, and
provides an __aiter__ method to iterate through its
workflow_configs field.
If there are more pages, the __aiter__ method will make additional
ListWorkflowConfigs requests and continue to iterate
through the workflow_configs field on the
corresponding responses.
All the usual ListWorkflowConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListWorkflowConfigsPager
ListWorkflowConfigsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . ListWorkflowConfigsResponse
],
request : google . cloud . dataform_v1 . types . dataform . ListWorkflowConfigsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListWorkflowConfigsResponse ,
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
A pager for iterating through list_workflow_configs requests.
This class thinly wraps an initial
ListWorkflowConfigsResponse object, and
provides an __iter__ method to iterate through its
workflow_configs field.
If there are more pages, the __iter__ method will make additional
ListWorkflowConfigs requests and continue to iterate
through the workflow_configs field on the
corresponding responses.
All the usual ListWorkflowConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListWorkflowInvocationsAsyncPager
ListWorkflowInvocationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . ListWorkflowInvocationsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . ListWorkflowInvocationsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListWorkflowInvocationsResponse ,
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
A pager for iterating through list_workflow_invocations requests.
This class thinly wraps an initial
ListWorkflowInvocationsResponse object, and
provides an __aiter__ method to iterate through its
workflow_invocations field.
If there are more pages, the __aiter__ method will make additional
ListWorkflowInvocations requests and continue to iterate
through the workflow_invocations field on the
corresponding responses.
All the usual ListWorkflowInvocationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListWorkflowInvocationsPager
ListWorkflowInvocationsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . ListWorkflowInvocationsResponse
],
request : google . cloud . dataform_v1 . types . dataform . ListWorkflowInvocationsRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListWorkflowInvocationsResponse ,
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
A pager for iterating through list_workflow_invocations requests.
This class thinly wraps an initial
ListWorkflowInvocationsResponse object, and
provides an __iter__ method to iterate through its
workflow_invocations field.
If there are more pages, the __iter__ method will make additional
ListWorkflowInvocations requests and continue to iterate
through the workflow_invocations field on the
corresponding responses.
All the usual ListWorkflowInvocationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListWorkspacesAsyncPager
ListWorkspacesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . ListWorkspacesResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . ListWorkspacesRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListWorkspacesResponse ,
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
A pager for iterating through list_workspaces requests.
This class thinly wraps an initial
ListWorkspacesResponse object, and
provides an __aiter__ method to iterate through its
workspaces field.
If there are more pages, the __aiter__ method will make additional
ListWorkspaces requests and continue to iterate
through the workspaces field on the
corresponding responses.
All the usual ListWorkspacesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListWorkspacesPager
ListWorkspacesPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . ListWorkspacesResponse
],
request : google . cloud . dataform_v1 . types . dataform . ListWorkspacesRequest ,
response : google . cloud . dataform_v1 . types . dataform . ListWorkspacesResponse ,
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
A pager for iterating through list_workspaces requests.
This class thinly wraps an initial
ListWorkspacesResponse object, and
provides an __iter__ method to iterate through its
workspaces field.
If there are more pages, the __iter__ method will make additional
ListWorkspaces requests and continue to iterate
through the workspaces field on the
corresponding responses.
All the usual ListWorkspacesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryCompilationResultActionsAsyncPager
QueryCompilationResultActionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . QueryCompilationResultActionsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . QueryCompilationResultActionsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryCompilationResultActionsResponse ,
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
A pager for iterating through query_compilation_result_actions requests.
This class thinly wraps an initial
QueryCompilationResultActionsResponse object, and
provides an __aiter__ method to iterate through its
compilation_result_actions field.
If there are more pages, the __aiter__ method will make additional
QueryCompilationResultActions requests and continue to iterate
through the compilation_result_actions field on the
corresponding responses.
All the usual QueryCompilationResultActionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryCompilationResultActionsPager
QueryCompilationResultActionsPager (
method : typing . Callable [
[ ... ],
google . cloud . dataform_v1 . types . dataform . QueryCompilationResultActionsResponse ,
],
request : google . cloud . dataform_v1 . types . dataform . QueryCompilationResultActionsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryCompilationResultActionsResponse ,
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
A pager for iterating through query_compilation_result_actions requests.
This class thinly wraps an initial
QueryCompilationResultActionsResponse object, and
provides an __iter__ method to iterate through its
compilation_result_actions field.
If there are more pages, the __iter__ method will make additional
QueryCompilationResultActions requests and continue to iterate
through the compilation_result_actions field on the
corresponding responses.
All the usual QueryCompilationResultActionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryDirectoryContentsAsyncPager
QueryDirectoryContentsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . QueryDirectoryContentsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . QueryDirectoryContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryDirectoryContentsResponse ,
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
A pager for iterating through query_directory_contents requests.
This class thinly wraps an initial
QueryDirectoryContentsResponse object, and
provides an __aiter__ method to iterate through its
directory_entries field.
If there are more pages, the __aiter__ method will make additional
QueryDirectoryContents requests and continue to iterate
through the directory_entries field on the
corresponding responses.
All the usual QueryDirectoryContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryDirectoryContentsPager
QueryDirectoryContentsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . QueryDirectoryContentsResponse
],
request : google . cloud . dataform_v1 . types . dataform . QueryDirectoryContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryDirectoryContentsResponse ,
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
A pager for iterating through query_directory_contents requests.
This class thinly wraps an initial
QueryDirectoryContentsResponse object, and
provides an __iter__ method to iterate through its
directory_entries field.
If there are more pages, the __iter__ method will make additional
QueryDirectoryContents requests and continue to iterate
through the directory_entries field on the
corresponding responses.
All the usual QueryDirectoryContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryFolderContentsAsyncPager
QueryFolderContentsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . QueryFolderContentsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . QueryFolderContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryFolderContentsResponse ,
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
A pager for iterating through query_folder_contents requests.
This class thinly wraps an initial
QueryFolderContentsResponse object, and
provides an __aiter__ method to iterate through its
entries field.
If there are more pages, the __aiter__ method will make additional
QueryFolderContents requests and continue to iterate
through the entries field on the
corresponding responses.
All the usual QueryFolderContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryFolderContentsPager
QueryFolderContentsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . QueryFolderContentsResponse
],
request : google . cloud . dataform_v1 . types . dataform . QueryFolderContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryFolderContentsResponse ,
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
A pager for iterating through query_folder_contents requests.
This class thinly wraps an initial
QueryFolderContentsResponse object, and
provides an __iter__ method to iterate through its
entries field.
If there are more pages, the __iter__ method will make additional
QueryFolderContents requests and continue to iterate
through the entries field on the
corresponding responses.
All the usual QueryFolderContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryRepositoryDirectoryContentsAsyncPager
QueryRepositoryDirectoryContentsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . QueryRepositoryDirectoryContentsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . QueryRepositoryDirectoryContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryRepositoryDirectoryContentsResponse ,
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
A pager for iterating through query_repository_directory_contents requests.
This class thinly wraps an initial
QueryRepositoryDirectoryContentsResponse object, and
provides an __aiter__ method to iterate through its
directory_entries field.
If there are more pages, the __aiter__ method will make additional
QueryRepositoryDirectoryContents requests and continue to iterate
through the directory_entries field on the
corresponding responses.
All the usual QueryRepositoryDirectoryContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryRepositoryDirectoryContentsPager
QueryRepositoryDirectoryContentsPager (
method : typing . Callable [
[ ... ],
google . cloud . dataform_v1 . types . dataform . QueryRepositoryDirectoryContentsResponse ,
],
request : google . cloud . dataform_v1 . types . dataform . QueryRepositoryDirectoryContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryRepositoryDirectoryContentsResponse ,
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
A pager for iterating through query_repository_directory_contents requests.
This class thinly wraps an initial
QueryRepositoryDirectoryContentsResponse object, and
provides an __iter__ method to iterate through its
directory_entries field.
If there are more pages, the __iter__ method will make additional
QueryRepositoryDirectoryContents requests and continue to iterate
through the directory_entries field on the
corresponding responses.
All the usual QueryRepositoryDirectoryContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryTeamFolderContentsAsyncPager
QueryTeamFolderContentsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . QueryTeamFolderContentsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . QueryTeamFolderContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryTeamFolderContentsResponse ,
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
A pager for iterating through query_team_folder_contents requests.
This class thinly wraps an initial
QueryTeamFolderContentsResponse object, and
provides an __aiter__ method to iterate through its
entries field.
If there are more pages, the __aiter__ method will make additional
QueryTeamFolderContents requests and continue to iterate
through the entries field on the
corresponding responses.
All the usual QueryTeamFolderContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryTeamFolderContentsPager
QueryTeamFolderContentsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . QueryTeamFolderContentsResponse
],
request : google . cloud . dataform_v1 . types . dataform . QueryTeamFolderContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryTeamFolderContentsResponse ,
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
A pager for iterating through query_team_folder_contents requests.
This class thinly wraps an initial
QueryTeamFolderContentsResponse object, and
provides an __iter__ method to iterate through its
entries field.
If there are more pages, the __iter__ method will make additional
QueryTeamFolderContents requests and continue to iterate
through the entries field on the
corresponding responses.
All the usual QueryTeamFolderContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryUserRootContentsAsyncPager
QueryUserRootContentsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . QueryUserRootContentsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . QueryUserRootContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryUserRootContentsResponse ,
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
A pager for iterating through query_user_root_contents requests.
This class thinly wraps an initial
QueryUserRootContentsResponse object, and
provides an __aiter__ method to iterate through its
entries field.
If there are more pages, the __aiter__ method will make additional
QueryUserRootContents requests and continue to iterate
through the entries field on the
corresponding responses.
All the usual QueryUserRootContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryUserRootContentsPager
QueryUserRootContentsPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . QueryUserRootContentsResponse
],
request : google . cloud . dataform_v1 . types . dataform . QueryUserRootContentsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryUserRootContentsResponse ,
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
A pager for iterating through query_user_root_contents requests.
This class thinly wraps an initial
QueryUserRootContentsResponse object, and
provides an __iter__ method to iterate through its
entries field.
If there are more pages, the __iter__ method will make additional
QueryUserRootContents requests and continue to iterate
through the entries field on the
corresponding responses.
All the usual QueryUserRootContentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryWorkflowInvocationActionsAsyncPager
QueryWorkflowInvocationActionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . QueryWorkflowInvocationActionsResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . QueryWorkflowInvocationActionsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryWorkflowInvocationActionsResponse ,
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
A pager for iterating through query_workflow_invocation_actions requests.
This class thinly wraps an initial
QueryWorkflowInvocationActionsResponse object, and
provides an __aiter__ method to iterate through its
workflow_invocation_actions field.
If there are more pages, the __aiter__ method will make additional
QueryWorkflowInvocationActions requests and continue to iterate
through the workflow_invocation_actions field on the
corresponding responses.
All the usual QueryWorkflowInvocationActionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
QueryWorkflowInvocationActionsPager
QueryWorkflowInvocationActionsPager (
method : typing . Callable [
[ ... ],
google . cloud . dataform_v1 . types . dataform . QueryWorkflowInvocationActionsResponse ,
],
request : google . cloud . dataform_v1 . types . dataform . QueryWorkflowInvocationActionsRequest ,
response : google . cloud . dataform_v1 . types . dataform . QueryWorkflowInvocationActionsResponse ,
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
A pager for iterating through query_workflow_invocation_actions requests.
This class thinly wraps an initial
QueryWorkflowInvocationActionsResponse object, and
provides an __iter__ method to iterate through its
workflow_invocation_actions field.
If there are more pages, the __iter__ method will make additional
QueryWorkflowInvocationActions requests and continue to iterate
through the workflow_invocation_actions field on the
corresponding responses.
All the usual QueryWorkflowInvocationActionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
SearchFilesAsyncPager
SearchFilesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . dataform_v1 . types . dataform . SearchFilesResponse ],
],
request : google . cloud . dataform_v1 . types . dataform . SearchFilesRequest ,
response : google . cloud . dataform_v1 . types . dataform . SearchFilesResponse ,
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
A pager for iterating through search_files requests.
This class thinly wraps an initial
SearchFilesResponse object, and
provides an __aiter__ method to iterate through its
search_results field.
If there are more pages, the __aiter__ method will make additional
SearchFiles requests and continue to iterate
through the search_results field on the
corresponding responses.
All the usual SearchFilesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
SearchFilesPager
SearchFilesPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . SearchFilesResponse
],
request : google . cloud . dataform_v1 . types . dataform . SearchFilesRequest ,
response : google . cloud . dataform_v1 . types . dataform . SearchFilesResponse ,
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
A pager for iterating through search_files requests.
This class thinly wraps an initial
SearchFilesResponse object, and
provides an __iter__ method to iterate through its
search_results field.
If there are more pages, the __iter__ method will make additional
SearchFiles requests and continue to iterate
through the search_results field on the
corresponding responses.
All the usual SearchFilesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
SearchTeamFoldersAsyncPager
SearchTeamFoldersAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . dataform_v1 . types . dataform . SearchTeamFoldersResponse
],
],
request : google . cloud . dataform_v1 . types . dataform . SearchTeamFoldersRequest ,
response : google . cloud . dataform_v1 . types . dataform . SearchTeamFoldersResponse ,
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
A pager for iterating through search_team_folders requests.
This class thinly wraps an initial
SearchTeamFoldersResponse object, and
provides an __aiter__ method to iterate through its
results field.
If there are more pages, the __aiter__ method will make additional
SearchTeamFolders requests and continue to iterate
through the results field on the
corresponding responses.
All the usual SearchTeamFoldersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
SearchTeamFoldersPager
SearchTeamFoldersPager (
method : typing . Callable [
[ ... ], google . cloud . dataform_v1 . types . dataform . SearchTeamFoldersResponse
],
request : google . cloud . dataform_v1 . types . dataform . SearchTeamFoldersRequest ,
response : google . cloud . dataform_v1 . types . dataform . SearchTeamFoldersResponse ,
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
A pager for iterating through search_team_folders requests.
This class thinly wraps an initial
SearchTeamFoldersResponse object, and
provides an __iter__ method to iterate through its
results field.
If there are more pages, the __iter__ method will make additional
SearchTeamFolders requests and continue to iterate
through the results field on the
corresponding responses.
All the usual SearchTeamFoldersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
