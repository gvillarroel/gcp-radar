---
title: "Module pagers (2.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.services.cloud_deploy.pagers
  title: "Module pagers (2.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (2.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.10.0 (latest)
2.9.0
2.8.0
2.7.1
2.6.3
2.5.0
2.4.1
2.3.0
2.2.0
2.1.0
2.0.0
1.19.1
1.18.1
1.17.3
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.1
1.10.1
1.9.0
1.8.0
1.7.0
1.6.1
1.5.0
1.4.1
1.3.1
1.2.1
1.1.1
1.0.0
0.3.2
0.2.0
0.1.1
API documentation for deploy_v1.services.cloud_deploy.pagers module.
Classes
ListAutomationRunsAsyncPager
ListAutomationRunsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationRunsResponse
],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationRunsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationRunsResponse ,
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
A pager for iterating through list_automation_runs requests.
This class thinly wraps an initial
ListAutomationRunsResponse object, and
provides an __aiter__ method to iterate through its
automation_runs field.
If there are more pages, the __aiter__ method will make additional
ListAutomationRuns requests and continue to iterate
through the automation_runs field on the
corresponding responses.
All the usual ListAutomationRunsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListAutomationRunsPager
ListAutomationRunsPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationRunsResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationRunsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationRunsResponse ,
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
A pager for iterating through list_automation_runs requests.
This class thinly wraps an initial
ListAutomationRunsResponse object, and
provides an __iter__ method to iterate through its
automation_runs field.
If there are more pages, the __iter__ method will make additional
ListAutomationRuns requests and continue to iterate
through the automation_runs field on the
corresponding responses.
All the usual ListAutomationRunsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListAutomationsAsyncPager
ListAutomationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationsResponse
],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationsResponse ,
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
A pager for iterating through list_automations requests.
This class thinly wraps an initial
ListAutomationsResponse object, and
provides an __aiter__ method to iterate through its
automations field.
If there are more pages, the __aiter__ method will make additional
ListAutomations requests and continue to iterate
through the automations field on the
corresponding responses.
All the usual ListAutomationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListAutomationsPager
ListAutomationsPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationsResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListAutomationsResponse ,
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
A pager for iterating through list_automations requests.
This class thinly wraps an initial
ListAutomationsResponse object, and
provides an __iter__ method to iterate through its
automations field.
If there are more pages, the __iter__ method will make additional
ListAutomations requests and continue to iterate
through the automations field on the
corresponding responses.
All the usual ListAutomationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCustomTargetTypesAsyncPager
ListCustomTargetTypesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . deploy_v1 . types . cloud_deploy . ListCustomTargetTypesResponse
],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListCustomTargetTypesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListCustomTargetTypesResponse ,
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
A pager for iterating through list_custom_target_types requests.
This class thinly wraps an initial
ListCustomTargetTypesResponse object, and
provides an __aiter__ method to iterate through its
custom_target_types field.
If there are more pages, the __aiter__ method will make additional
ListCustomTargetTypes requests and continue to iterate
through the custom_target_types field on the
corresponding responses.
All the usual ListCustomTargetTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCustomTargetTypesPager
ListCustomTargetTypesPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListCustomTargetTypesResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListCustomTargetTypesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListCustomTargetTypesResponse ,
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
A pager for iterating through list_custom_target_types requests.
This class thinly wraps an initial
ListCustomTargetTypesResponse object, and
provides an __iter__ method to iterate through its
custom_target_types field.
If there are more pages, the __iter__ method will make additional
ListCustomTargetTypes requests and continue to iterate
through the custom_target_types field on the
corresponding responses.
All the usual ListCustomTargetTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDeliveryPipelinesAsyncPager
ListDeliveryPipelinesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . deploy_v1 . types . cloud_deploy . ListDeliveryPipelinesResponse
],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListDeliveryPipelinesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListDeliveryPipelinesResponse ,
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
A pager for iterating through list_delivery_pipelines requests.
This class thinly wraps an initial
ListDeliveryPipelinesResponse object, and
provides an __aiter__ method to iterate through its
delivery_pipelines field.
If there are more pages, the __aiter__ method will make additional
ListDeliveryPipelines requests and continue to iterate
through the delivery_pipelines field on the
corresponding responses.
All the usual ListDeliveryPipelinesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDeliveryPipelinesPager
ListDeliveryPipelinesPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListDeliveryPipelinesResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListDeliveryPipelinesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListDeliveryPipelinesResponse ,
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
A pager for iterating through list_delivery_pipelines requests.
This class thinly wraps an initial
ListDeliveryPipelinesResponse object, and
provides an __iter__ method to iterate through its
delivery_pipelines field.
If there are more pages, the __iter__ method will make additional
ListDeliveryPipelines requests and continue to iterate
through the delivery_pipelines field on the
corresponding responses.
All the usual ListDeliveryPipelinesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDeployPoliciesAsyncPager
ListDeployPoliciesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . deploy_v1 . types . cloud_deploy . ListDeployPoliciesResponse
],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListDeployPoliciesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListDeployPoliciesResponse ,
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
A pager for iterating through list_deploy_policies requests.
This class thinly wraps an initial
ListDeployPoliciesResponse object, and
provides an __aiter__ method to iterate through its
deploy_policies field.
If there are more pages, the __aiter__ method will make additional
ListDeployPolicies requests and continue to iterate
through the deploy_policies field on the
corresponding responses.
All the usual ListDeployPoliciesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDeployPoliciesPager
ListDeployPoliciesPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListDeployPoliciesResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListDeployPoliciesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListDeployPoliciesResponse ,
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
A pager for iterating through list_deploy_policies requests.
This class thinly wraps an initial
ListDeployPoliciesResponse object, and
provides an __iter__ method to iterate through its
deploy_policies field.
If there are more pages, the __iter__ method will make additional
ListDeployPolicies requests and continue to iterate
through the deploy_policies field on the
corresponding responses.
All the usual ListDeployPoliciesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListJobRunsAsyncPager
ListJobRunsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . deploy_v1 . types . cloud_deploy . ListJobRunsResponse ],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListJobRunsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListJobRunsResponse ,
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
A pager for iterating through list_job_runs requests.
This class thinly wraps an initial
ListJobRunsResponse object, and
provides an __aiter__ method to iterate through its
job_runs field.
If there are more pages, the __aiter__ method will make additional
ListJobRuns requests and continue to iterate
through the job_runs field on the
corresponding responses.
All the usual ListJobRunsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListJobRunsPager
ListJobRunsPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListJobRunsResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListJobRunsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListJobRunsResponse ,
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
A pager for iterating through list_job_runs requests.
This class thinly wraps an initial
ListJobRunsResponse object, and
provides an __iter__ method to iterate through its
job_runs field.
If there are more pages, the __iter__ method will make additional
ListJobRuns requests and continue to iterate
through the job_runs field on the
corresponding responses.
All the usual ListJobRunsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListReleasesAsyncPager
ListReleasesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . deploy_v1 . types . cloud_deploy . ListReleasesResponse
],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListReleasesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListReleasesResponse ,
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
A pager for iterating through list_releases requests.
This class thinly wraps an initial
ListReleasesResponse object, and
provides an __aiter__ method to iterate through its
releases field.
If there are more pages, the __aiter__ method will make additional
ListReleases requests and continue to iterate
through the releases field on the
corresponding responses.
All the usual ListReleasesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListReleasesPager
ListReleasesPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListReleasesResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListReleasesRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListReleasesResponse ,
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
A pager for iterating through list_releases requests.
This class thinly wraps an initial
ListReleasesResponse object, and
provides an __iter__ method to iterate through its
releases field.
If there are more pages, the __iter__ method will make additional
ListReleases requests and continue to iterate
through the releases field on the
corresponding responses.
All the usual ListReleasesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRolloutsAsyncPager
ListRolloutsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . deploy_v1 . types . cloud_deploy . ListRolloutsResponse
],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListRolloutsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListRolloutsResponse ,
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
A pager for iterating through list_rollouts requests.
This class thinly wraps an initial
ListRolloutsResponse object, and
provides an __aiter__ method to iterate through its
rollouts field.
If there are more pages, the __aiter__ method will make additional
ListRollouts requests and continue to iterate
through the rollouts field on the
corresponding responses.
All the usual ListRolloutsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRolloutsPager
ListRolloutsPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListRolloutsResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListRolloutsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListRolloutsResponse ,
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
A pager for iterating through list_rollouts requests.
This class thinly wraps an initial
ListRolloutsResponse object, and
provides an __iter__ method to iterate through its
rollouts field.
If there are more pages, the __iter__ method will make additional
ListRollouts requests and continue to iterate
through the rollouts field on the
corresponding responses.
All the usual ListRolloutsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTargetsAsyncPager
ListTargetsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . deploy_v1 . types . cloud_deploy . ListTargetsResponse ],
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListTargetsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListTargetsResponse ,
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
A pager for iterating through list_targets requests.
This class thinly wraps an initial
ListTargetsResponse object, and
provides an __aiter__ method to iterate through its
targets field.
If there are more pages, the __aiter__ method will make additional
ListTargets requests and continue to iterate
through the targets field on the
corresponding responses.
All the usual ListTargetsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTargetsPager
ListTargetsPager (
method : typing . Callable [
[ ... ], google . cloud . deploy_v1 . types . cloud_deploy . ListTargetsResponse
],
request : google . cloud . deploy_v1 . types . cloud_deploy . ListTargetsRequest ,
response : google . cloud . deploy_v1 . types . cloud_deploy . ListTargetsResponse ,
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
A pager for iterating through list_targets requests.
This class thinly wraps an initial
ListTargetsResponse object, and
provides an __iter__ method to iterate through its
targets field.
If there are more pages, the __iter__ method will make additional
ListTargets requests and continue to iterate
through the targets field on the
corresponding responses.
All the usual ListTargetsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
