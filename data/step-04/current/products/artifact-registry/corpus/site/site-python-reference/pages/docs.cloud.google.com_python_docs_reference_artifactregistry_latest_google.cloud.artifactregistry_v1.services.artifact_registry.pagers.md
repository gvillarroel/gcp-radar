---
title: "Module pagers (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers
  title: "Module pagers (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.1
1.15.2
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.0
1.8.4
1.7.0
1.6.1
1.5.0
1.4.1
1.3.3
1.2.1
1.1.2
1.0.2
0.5.0
0.4.1
0.3.3
0.2.2
0.1.0
API documentation for artifactregistry_v1.services.artifact_registry.pagers module.
Classes
ListAttachmentsAsyncPager
ListAttachmentsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . attachment . ListAttachmentsResponse
],
],
request : google . cloud . artifactregistry_v1 . types . attachment . ListAttachmentsRequest ,
response : google . cloud . artifactregistry_v1 . types . attachment . ListAttachmentsResponse ,
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
A pager for iterating through list_attachments requests.
This class thinly wraps an initial
ListAttachmentsResponse object, and
provides an __aiter__ method to iterate through its
attachments field.
If there are more pages, the __aiter__ method will make additional
ListAttachments requests and continue to iterate
through the attachments field on the
corresponding responses.
All the usual ListAttachmentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListAttachmentsPager
ListAttachmentsPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . attachment . ListAttachmentsResponse
],
request : google . cloud . artifactregistry_v1 . types . attachment . ListAttachmentsRequest ,
response : google . cloud . artifactregistry_v1 . types . attachment . ListAttachmentsResponse ,
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
A pager for iterating through list_attachments requests.
This class thinly wraps an initial
ListAttachmentsResponse object, and
provides an __iter__ method to iterate through its
attachments field.
If there are more pages, the __iter__ method will make additional
ListAttachments requests and continue to iterate
through the attachments field on the
corresponding responses.
All the usual ListAttachmentsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDockerImagesAsyncPager
ListDockerImagesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . artifact . ListDockerImagesResponse
],
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListDockerImagesRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListDockerImagesResponse ,
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
A pager for iterating through list_docker_images requests.
This class thinly wraps an initial
ListDockerImagesResponse object, and
provides an __aiter__ method to iterate through its
docker_images field.
If there are more pages, the __aiter__ method will make additional
ListDockerImages requests and continue to iterate
through the docker_images field on the
corresponding responses.
All the usual ListDockerImagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDockerImagesPager
ListDockerImagesPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . artifact . ListDockerImagesResponse
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListDockerImagesRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListDockerImagesResponse ,
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
A pager for iterating through list_docker_images requests.
This class thinly wraps an initial
ListDockerImagesResponse object, and
provides an __iter__ method to iterate through its
docker_images field.
If there are more pages, the __iter__ method will make additional
ListDockerImages requests and continue to iterate
through the docker_images field on the
corresponding responses.
All the usual ListDockerImagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListFilesAsyncPager
ListFilesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . artifactregistry_v1 . types . file . ListFilesResponse ],
],
request : google . cloud . artifactregistry_v1 . types . file . ListFilesRequest ,
response : google . cloud . artifactregistry_v1 . types . file . ListFilesResponse ,
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
A pager for iterating through list_files requests.
This class thinly wraps an initial
ListFilesResponse object, and
provides an __aiter__ method to iterate through its
files field.
If there are more pages, the __aiter__ method will make additional
ListFiles requests and continue to iterate
through the files field on the
corresponding responses.
All the usual ListFilesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListFilesPager
ListFilesPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . file . ListFilesResponse
],
request : google . cloud . artifactregistry_v1 . types . file . ListFilesRequest ,
response : google . cloud . artifactregistry_v1 . types . file . ListFilesResponse ,
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
A pager for iterating through list_files requests.
This class thinly wraps an initial
ListFilesResponse object, and
provides an __iter__ method to iterate through its
files field.
If there are more pages, the __iter__ method will make additional
ListFiles requests and continue to iterate
through the files field on the
corresponding responses.
All the usual ListFilesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListMavenArtifactsAsyncPager
ListMavenArtifactsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . artifact . ListMavenArtifactsResponse
],
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListMavenArtifactsRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListMavenArtifactsResponse ,
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
A pager for iterating through list_maven_artifacts requests.
This class thinly wraps an initial
ListMavenArtifactsResponse object, and
provides an __aiter__ method to iterate through its
maven_artifacts field.
If there are more pages, the __aiter__ method will make additional
ListMavenArtifacts requests and continue to iterate
through the maven_artifacts field on the
corresponding responses.
All the usual ListMavenArtifactsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListMavenArtifactsPager
ListMavenArtifactsPager (
method : typing . Callable [
[ ... ],
google . cloud . artifactregistry_v1 . types . artifact . ListMavenArtifactsResponse ,
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListMavenArtifactsRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListMavenArtifactsResponse ,
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
A pager for iterating through list_maven_artifacts requests.
This class thinly wraps an initial
ListMavenArtifactsResponse object, and
provides an __iter__ method to iterate through its
maven_artifacts field.
If there are more pages, the __iter__ method will make additional
ListMavenArtifacts requests and continue to iterate
through the maven_artifacts field on the
corresponding responses.
All the usual ListMavenArtifactsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNpmPackagesAsyncPager
ListNpmPackagesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . artifact . ListNpmPackagesResponse
],
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListNpmPackagesRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListNpmPackagesResponse ,
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
A pager for iterating through list_npm_packages requests.
This class thinly wraps an initial
ListNpmPackagesResponse object, and
provides an __aiter__ method to iterate through its
npm_packages field.
If there are more pages, the __aiter__ method will make additional
ListNpmPackages requests and continue to iterate
through the npm_packages field on the
corresponding responses.
All the usual ListNpmPackagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNpmPackagesPager
ListNpmPackagesPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . artifact . ListNpmPackagesResponse
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListNpmPackagesRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListNpmPackagesResponse ,
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
A pager for iterating through list_npm_packages requests.
This class thinly wraps an initial
ListNpmPackagesResponse object, and
provides an __iter__ method to iterate through its
npm_packages field.
If there are more pages, the __iter__ method will make additional
ListNpmPackages requests and continue to iterate
through the npm_packages field on the
corresponding responses.
All the usual ListNpmPackagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPackagesAsyncPager
ListPackagesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . package . ListPackagesResponse
],
],
request : google . cloud . artifactregistry_v1 . types . package . ListPackagesRequest ,
response : google . cloud . artifactregistry_v1 . types . package . ListPackagesResponse ,
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
A pager for iterating through list_packages requests.
This class thinly wraps an initial
ListPackagesResponse object, and
provides an __aiter__ method to iterate through its
packages field.
If there are more pages, the __aiter__ method will make additional
ListPackages requests and continue to iterate
through the packages field on the
corresponding responses.
All the usual ListPackagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPackagesPager
ListPackagesPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . package . ListPackagesResponse
],
request : google . cloud . artifactregistry_v1 . types . package . ListPackagesRequest ,
response : google . cloud . artifactregistry_v1 . types . package . ListPackagesResponse ,
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
A pager for iterating through list_packages requests.
This class thinly wraps an initial
ListPackagesResponse object, and
provides an __iter__ method to iterate through its
packages field.
If there are more pages, the __iter__ method will make additional
ListPackages requests and continue to iterate
through the packages field on the
corresponding responses.
All the usual ListPackagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPythonPackagesAsyncPager
ListPythonPackagesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . artifact . ListPythonPackagesResponse
],
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListPythonPackagesRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListPythonPackagesResponse ,
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
A pager for iterating through list_python_packages requests.
This class thinly wraps an initial
ListPythonPackagesResponse object, and
provides an __aiter__ method to iterate through its
python_packages field.
If there are more pages, the __aiter__ method will make additional
ListPythonPackages requests and continue to iterate
through the python_packages field on the
corresponding responses.
All the usual ListPythonPackagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPythonPackagesPager
ListPythonPackagesPager (
method : typing . Callable [
[ ... ],
google . cloud . artifactregistry_v1 . types . artifact . ListPythonPackagesResponse ,
],
request : google . cloud . artifactregistry_v1 . types . artifact . ListPythonPackagesRequest ,
response : google . cloud . artifactregistry_v1 . types . artifact . ListPythonPackagesResponse ,
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
A pager for iterating through list_python_packages requests.
This class thinly wraps an initial
ListPythonPackagesResponse object, and
provides an __iter__ method to iterate through its
python_packages field.
If there are more pages, the __iter__ method will make additional
ListPythonPackages requests and continue to iterate
through the python_packages field on the
corresponding responses.
All the usual ListPythonPackagesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRepositoriesAsyncPager
ListRepositoriesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . repository . ListRepositoriesResponse
],
],
request : google . cloud . artifactregistry_v1 . types . repository . ListRepositoriesRequest ,
response : google . cloud . artifactregistry_v1 . types . repository . ListRepositoriesResponse ,
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
[ ... ],
google . cloud . artifactregistry_v1 . types . repository . ListRepositoriesResponse ,
],
request : google . cloud . artifactregistry_v1 . types . repository . ListRepositoriesRequest ,
response : google . cloud . artifactregistry_v1 . types . repository . ListRepositoriesResponse ,
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
ListRulesAsyncPager
ListRulesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . artifactregistry_v1 . types . rule . ListRulesResponse ],
],
request : google . cloud . artifactregistry_v1 . types . rule . ListRulesRequest ,
response : google . cloud . artifactregistry_v1 . types . rule . ListRulesResponse ,
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
A pager for iterating through list_rules requests.
This class thinly wraps an initial
ListRulesResponse object, and
provides an __aiter__ method to iterate through its
rules field.
If there are more pages, the __aiter__ method will make additional
ListRules requests and continue to iterate
through the rules field on the
corresponding responses.
All the usual ListRulesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListRulesPager
ListRulesPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . rule . ListRulesResponse
],
request : google . cloud . artifactregistry_v1 . types . rule . ListRulesRequest ,
response : google . cloud . artifactregistry_v1 . types . rule . ListRulesResponse ,
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
A pager for iterating through list_rules requests.
This class thinly wraps an initial
ListRulesResponse object, and
provides an __iter__ method to iterate through its
rules field.
If there are more pages, the __iter__ method will make additional
ListRules requests and continue to iterate
through the rules field on the
corresponding responses.
All the usual ListRulesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTagsAsyncPager
ListTagsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [ google . cloud . artifactregistry_v1 . types . tag . ListTagsResponse ],
],
request : google . cloud . artifactregistry_v1 . types . tag . ListTagsRequest ,
response : google . cloud . artifactregistry_v1 . types . tag . ListTagsResponse ,
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
A pager for iterating through list_tags requests.
This class thinly wraps an initial
ListTagsResponse object, and
provides an __aiter__ method to iterate through its
tags field.
If there are more pages, the __aiter__ method will make additional
ListTags requests and continue to iterate
through the tags field on the
corresponding responses.
All the usual ListTagsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTagsPager
ListTagsPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . tag . ListTagsResponse
],
request : google . cloud . artifactregistry_v1 . types . tag . ListTagsRequest ,
response : google . cloud . artifactregistry_v1 . types . tag . ListTagsResponse ,
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
A pager for iterating through list_tags requests.
This class thinly wraps an initial
ListTagsResponse object, and
provides an __iter__ method to iterate through its
tags field.
If there are more pages, the __iter__ method will make additional
ListTags requests and continue to iterate
through the tags field on the
corresponding responses.
All the usual ListTagsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVersionsAsyncPager
ListVersionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . artifactregistry_v1 . types . version . ListVersionsResponse
],
],
request : google . cloud . artifactregistry_v1 . types . version . ListVersionsRequest ,
response : google . cloud . artifactregistry_v1 . types . version . ListVersionsResponse ,
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
A pager for iterating through list_versions requests.
This class thinly wraps an initial
ListVersionsResponse object, and
provides an __aiter__ method to iterate through its
versions field.
If there are more pages, the __aiter__ method will make additional
ListVersions requests and continue to iterate
through the versions field on the
corresponding responses.
All the usual ListVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVersionsPager
ListVersionsPager (
method : typing . Callable [
[ ... ], google . cloud . artifactregistry_v1 . types . version . ListVersionsResponse
],
request : google . cloud . artifactregistry_v1 . types . version . ListVersionsRequest ,
response : google . cloud . artifactregistry_v1 . types . version . ListVersionsResponse ,
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
A pager for iterating through list_versions requests.
This class thinly wraps an initial
ListVersionsResponse object, and
provides an __iter__ method to iterate through its
versions field.
If there are more pages, the __iter__ method will make additional
ListVersions requests and continue to iterate
through the versions field on the
corresponding responses.
All the usual ListVersionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
