---
title: "Module pagers (1.12.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.pagers
  title: "Module pagers (1.12.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.12.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.12.0 (latest)
1.11.0
1.10.2
1.9.0
1.8.1
1.7.2
1.6.3
1.5.0
1.4.3
1.3.1
1.2.0
1.1.1
1.0.1
0.2.1
0.1.3
API documentation for certificate_manager_v1.services.certificate_manager.pagers module.
Classes
ListCertificateIssuanceConfigsAsyncPager
ListCertificateIssuanceConfigsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . ListCertificateIssuanceConfigsResponse
],
],
request : google . cloud . certificate_manager_v1 . types . certificate_issuance_config . ListCertificateIssuanceConfigsRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_issuance_config . ListCertificateIssuanceConfigsResponse ,
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
A pager for iterating through list_certificate_issuance_configs requests.
This class thinly wraps an initial
ListCertificateIssuanceConfigsResponse object, and
provides an __aiter__ method to iterate through its
certificate_issuance_configs field.
If there are more pages, the __aiter__ method will make additional
ListCertificateIssuanceConfigs requests and continue to iterate
through the certificate_issuance_configs field on the
corresponding responses.
All the usual ListCertificateIssuanceConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCertificateIssuanceConfigsPager
ListCertificateIssuanceConfigsPager (
method : typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . types . certificate_issuance_config . ListCertificateIssuanceConfigsResponse ,
],
request : google . cloud . certificate_manager_v1 . types . certificate_issuance_config . ListCertificateIssuanceConfigsRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_issuance_config . ListCertificateIssuanceConfigsResponse ,
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
A pager for iterating through list_certificate_issuance_configs requests.
This class thinly wraps an initial
ListCertificateIssuanceConfigsResponse object, and
provides an __iter__ method to iterate through its
certificate_issuance_configs field.
If there are more pages, the __iter__ method will make additional
ListCertificateIssuanceConfigs requests and continue to iterate
through the certificate_issuance_configs field on the
corresponding responses.
All the usual ListCertificateIssuanceConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCertificateMapEntriesAsyncPager
ListCertificateMapEntriesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapEntriesResponse
],
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapEntriesRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapEntriesResponse ,
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
A pager for iterating through list_certificate_map_entries requests.
This class thinly wraps an initial
ListCertificateMapEntriesResponse object, and
provides an __aiter__ method to iterate through its
certificate_map_entries field.
If there are more pages, the __aiter__ method will make additional
ListCertificateMapEntries requests and continue to iterate
through the certificate_map_entries field on the
corresponding responses.
All the usual ListCertificateMapEntriesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCertificateMapEntriesPager
ListCertificateMapEntriesPager (
method : typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapEntriesResponse ,
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapEntriesRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapEntriesResponse ,
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
A pager for iterating through list_certificate_map_entries requests.
This class thinly wraps an initial
ListCertificateMapEntriesResponse object, and
provides an __iter__ method to iterate through its
certificate_map_entries field.
If there are more pages, the __iter__ method will make additional
ListCertificateMapEntries requests and continue to iterate
through the certificate_map_entries field on the
corresponding responses.
All the usual ListCertificateMapEntriesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCertificateMapsAsyncPager
ListCertificateMapsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapsResponse
],
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapsRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapsResponse ,
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
A pager for iterating through list_certificate_maps requests.
This class thinly wraps an initial
ListCertificateMapsResponse object, and
provides an __aiter__ method to iterate through its
certificate_maps field.
If there are more pages, the __aiter__ method will make additional
ListCertificateMaps requests and continue to iterate
through the certificate_maps field on the
corresponding responses.
All the usual ListCertificateMapsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCertificateMapsPager
ListCertificateMapsPager (
method : typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapsResponse ,
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapsRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificateMapsResponse ,
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
A pager for iterating through list_certificate_maps requests.
This class thinly wraps an initial
ListCertificateMapsResponse object, and
provides an __iter__ method to iterate through its
certificate_maps field.
If there are more pages, the __iter__ method will make additional
ListCertificateMaps requests and continue to iterate
through the certificate_maps field on the
corresponding responses.
All the usual ListCertificateMapsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCertificatesAsyncPager
ListCertificatesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificatesResponse
],
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificatesRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificatesResponse ,
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
A pager for iterating through list_certificates requests.
This class thinly wraps an initial
ListCertificatesResponse object, and
provides an __aiter__ method to iterate through its
certificates field.
If there are more pages, the __aiter__ method will make additional
ListCertificates requests and continue to iterate
through the certificates field on the
corresponding responses.
All the usual ListCertificatesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListCertificatesPager
ListCertificatesPager (
method : typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificatesResponse ,
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificatesRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListCertificatesResponse ,
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
A pager for iterating through list_certificates requests.
This class thinly wraps an initial
ListCertificatesResponse object, and
provides an __iter__ method to iterate through its
certificates field.
If there are more pages, the __iter__ method will make additional
ListCertificates requests and continue to iterate
through the certificates field on the
corresponding responses.
All the usual ListCertificatesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDnsAuthorizationsAsyncPager
ListDnsAuthorizationsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . certificate_manager_v1 . types . certificate_manager . ListDnsAuthorizationsResponse
],
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListDnsAuthorizationsRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListDnsAuthorizationsResponse ,
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
A pager for iterating through list_dns_authorizations requests.
This class thinly wraps an initial
ListDnsAuthorizationsResponse object, and
provides an __aiter__ method to iterate through its
dns_authorizations field.
If there are more pages, the __aiter__ method will make additional
ListDnsAuthorizations requests and continue to iterate
through the dns_authorizations field on the
corresponding responses.
All the usual ListDnsAuthorizationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListDnsAuthorizationsPager
ListDnsAuthorizationsPager (
method : typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . types . certificate_manager . ListDnsAuthorizationsResponse ,
],
request : google . cloud . certificate_manager_v1 . types . certificate_manager . ListDnsAuthorizationsRequest ,
response : google . cloud . certificate_manager_v1 . types . certificate_manager . ListDnsAuthorizationsResponse ,
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
A pager for iterating through list_dns_authorizations requests.
This class thinly wraps an initial
ListDnsAuthorizationsResponse object, and
provides an __iter__ method to iterate through its
dns_authorizations field.
If there are more pages, the __iter__ method will make additional
ListDnsAuthorizations requests and continue to iterate
through the dns_authorizations field on the
corresponding responses.
All the usual ListDnsAuthorizationsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTrustConfigsAsyncPager
ListTrustConfigsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . certificate_manager_v1 . types . trust_config . ListTrustConfigsResponse
],
],
request : google . cloud . certificate_manager_v1 . types . trust_config . ListTrustConfigsRequest ,
response : google . cloud . certificate_manager_v1 . types . trust_config . ListTrustConfigsResponse ,
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
A pager for iterating through list_trust_configs requests.
This class thinly wraps an initial
ListTrustConfigsResponse object, and
provides an __aiter__ method to iterate through its
trust_configs field.
If there are more pages, the __aiter__ method will make additional
ListTrustConfigs requests and continue to iterate
through the trust_configs field on the
corresponding responses.
All the usual ListTrustConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListTrustConfigsPager
ListTrustConfigsPager (
method : typing . Callable [
[ ... ],
google . cloud . certificate_manager_v1 . types . trust_config . ListTrustConfigsResponse ,
],
request : google . cloud . certificate_manager_v1 . types . trust_config . ListTrustConfigsRequest ,
response : google . cloud . certificate_manager_v1 . types . trust_config . ListTrustConfigsResponse ,
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
A pager for iterating through list_trust_configs requests.
This class thinly wraps an initial
ListTrustConfigsResponse object, and
provides an __iter__ method to iterate through its
trust_configs field.
If there are more pages, the __iter__ method will make additional
ListTrustConfigs requests and continue to iterate
through the trust_configs field on the
corresponding responses.
All the usual ListTrustConfigsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
