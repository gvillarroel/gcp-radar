---
title: "Module pagers (1.11.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vmwareengine/latest/google.cloud.vmwareengine_v1.services.vmware_engine.pagers
  title: "Module pagers (1.11.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Module pagers (1.11.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.11.0 (latest)
1.10.0
1.9.0
1.8.3
1.7.0
1.6.1
1.5.0
1.4.4
1.3.0
1.2.0
1.1.1
1.0.1
0.2.2
0.1.1
API documentation for vmwareengine_v1.services.vmware_engine.pagers module.
Classes
FetchNetworkPolicyExternalAddressesAsyncPager
FetchNetworkPolicyExternalAddressesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . FetchNetworkPolicyExternalAddressesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . FetchNetworkPolicyExternalAddressesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . FetchNetworkPolicyExternalAddressesResponse ,
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
A pager for iterating through fetch_network_policy_external_addresses requests.
This class thinly wraps an initial
FetchNetworkPolicyExternalAddressesResponse object, and
provides an __aiter__ method to iterate through its
external_addresses field.
If there are more pages, the __aiter__ method will make additional
FetchNetworkPolicyExternalAddresses requests and continue to iterate
through the external_addresses field on the
corresponding responses.
All the usual FetchNetworkPolicyExternalAddressesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
FetchNetworkPolicyExternalAddressesPager
FetchNetworkPolicyExternalAddressesPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . FetchNetworkPolicyExternalAddressesResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . FetchNetworkPolicyExternalAddressesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . FetchNetworkPolicyExternalAddressesResponse ,
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
A pager for iterating through fetch_network_policy_external_addresses requests.
This class thinly wraps an initial
FetchNetworkPolicyExternalAddressesResponse object, and
provides an __iter__ method to iterate through its
external_addresses field.
If there are more pages, the __iter__ method will make additional
FetchNetworkPolicyExternalAddresses requests and continue to iterate
through the external_addresses field on the
corresponding responses.
All the usual FetchNetworkPolicyExternalAddressesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListClustersAsyncPager
ListClustersAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListClustersResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListClustersRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListClustersResponse ,
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
[ ... ], google . cloud . vmwareengine_v1 . types . vmwareengine . ListClustersResponse
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListClustersRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListClustersResponse ,
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
ListExternalAccessRulesAsyncPager
ListExternalAccessRulesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAccessRulesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAccessRulesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAccessRulesResponse ,
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
A pager for iterating through list_external_access_rules requests.
This class thinly wraps an initial
ListExternalAccessRulesResponse object, and
provides an __aiter__ method to iterate through its
external_access_rules field.
If there are more pages, the __aiter__ method will make additional
ListExternalAccessRules requests and continue to iterate
through the external_access_rules field on the
corresponding responses.
All the usual ListExternalAccessRulesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListExternalAccessRulesPager
ListExternalAccessRulesPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAccessRulesResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAccessRulesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAccessRulesResponse ,
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
A pager for iterating through list_external_access_rules requests.
This class thinly wraps an initial
ListExternalAccessRulesResponse object, and
provides an __iter__ method to iterate through its
external_access_rules field.
If there are more pages, the __iter__ method will make additional
ListExternalAccessRules requests and continue to iterate
through the external_access_rules field on the
corresponding responses.
All the usual ListExternalAccessRulesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListExternalAddressesAsyncPager
ListExternalAddressesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAddressesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAddressesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAddressesResponse ,
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
A pager for iterating through list_external_addresses requests.
This class thinly wraps an initial
ListExternalAddressesResponse object, and
provides an __aiter__ method to iterate through its
external_addresses field.
If there are more pages, the __aiter__ method will make additional
ListExternalAddresses requests and continue to iterate
through the external_addresses field on the
corresponding responses.
All the usual ListExternalAddressesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListExternalAddressesPager
ListExternalAddressesPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAddressesResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAddressesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListExternalAddressesResponse ,
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
A pager for iterating through list_external_addresses requests.
This class thinly wraps an initial
ListExternalAddressesResponse object, and
provides an __iter__ method to iterate through its
external_addresses field.
If there are more pages, the __iter__ method will make additional
ListExternalAddresses requests and continue to iterate
through the external_addresses field on the
corresponding responses.
All the usual ListExternalAddressesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListHcxActivationKeysAsyncPager
ListHcxActivationKeysAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListHcxActivationKeysResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListHcxActivationKeysRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListHcxActivationKeysResponse ,
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
A pager for iterating through list_hcx_activation_keys requests.
This class thinly wraps an initial
ListHcxActivationKeysResponse object, and
provides an __aiter__ method to iterate through its
hcx_activation_keys field.
If there are more pages, the __aiter__ method will make additional
ListHcxActivationKeys requests and continue to iterate
through the hcx_activation_keys field on the
corresponding responses.
All the usual ListHcxActivationKeysResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListHcxActivationKeysPager
ListHcxActivationKeysPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListHcxActivationKeysResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListHcxActivationKeysRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListHcxActivationKeysResponse ,
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
A pager for iterating through list_hcx_activation_keys requests.
This class thinly wraps an initial
ListHcxActivationKeysResponse object, and
provides an __iter__ method to iterate through its
hcx_activation_keys field.
If there are more pages, the __iter__ method will make additional
ListHcxActivationKeys requests and continue to iterate
through the hcx_activation_keys field on the
corresponding responses.
All the usual ListHcxActivationKeysResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListLoggingServersAsyncPager
ListLoggingServersAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListLoggingServersResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListLoggingServersRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListLoggingServersResponse ,
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
A pager for iterating through list_logging_servers requests.
This class thinly wraps an initial
ListLoggingServersResponse object, and
provides an __aiter__ method to iterate through its
logging_servers field.
If there are more pages, the __aiter__ method will make additional
ListLoggingServers requests and continue to iterate
through the logging_servers field on the
corresponding responses.
All the usual ListLoggingServersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListLoggingServersPager
ListLoggingServersPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListLoggingServersResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListLoggingServersRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListLoggingServersResponse ,
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
A pager for iterating through list_logging_servers requests.
This class thinly wraps an initial
ListLoggingServersResponse object, and
provides an __iter__ method to iterate through its
logging_servers field.
If there are more pages, the __iter__ method will make additional
ListLoggingServers requests and continue to iterate
through the logging_servers field on the
corresponding responses.
All the usual ListLoggingServersResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListManagementDnsZoneBindingsAsyncPager
ListManagementDnsZoneBindingsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListManagementDnsZoneBindingsResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListManagementDnsZoneBindingsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListManagementDnsZoneBindingsResponse ,
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
A pager for iterating through list_management_dns_zone_bindings requests.
This class thinly wraps an initial
ListManagementDnsZoneBindingsResponse object, and
provides an __aiter__ method to iterate through its
management_dns_zone_bindings field.
If there are more pages, the __aiter__ method will make additional
ListManagementDnsZoneBindings requests and continue to iterate
through the management_dns_zone_bindings field on the
corresponding responses.
All the usual ListManagementDnsZoneBindingsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListManagementDnsZoneBindingsPager
ListManagementDnsZoneBindingsPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListManagementDnsZoneBindingsResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListManagementDnsZoneBindingsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListManagementDnsZoneBindingsResponse ,
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
A pager for iterating through list_management_dns_zone_bindings requests.
This class thinly wraps an initial
ListManagementDnsZoneBindingsResponse object, and
provides an __iter__ method to iterate through its
management_dns_zone_bindings field.
If there are more pages, the __iter__ method will make additional
ListManagementDnsZoneBindings requests and continue to iterate
through the management_dns_zone_bindings field on the
corresponding responses.
All the usual ListManagementDnsZoneBindingsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNetworkPeeringsAsyncPager
ListNetworkPeeringsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPeeringsResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPeeringsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPeeringsResponse ,
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
A pager for iterating through list_network_peerings requests.
This class thinly wraps an initial
ListNetworkPeeringsResponse object, and
provides an __aiter__ method to iterate through its
network_peerings field.
If there are more pages, the __aiter__ method will make additional
ListNetworkPeerings requests and continue to iterate
through the network_peerings field on the
corresponding responses.
All the usual ListNetworkPeeringsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNetworkPeeringsPager
ListNetworkPeeringsPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPeeringsResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPeeringsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPeeringsResponse ,
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
A pager for iterating through list_network_peerings requests.
This class thinly wraps an initial
ListNetworkPeeringsResponse object, and
provides an __iter__ method to iterate through its
network_peerings field.
If there are more pages, the __iter__ method will make additional
ListNetworkPeerings requests and continue to iterate
through the network_peerings field on the
corresponding responses.
All the usual ListNetworkPeeringsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNetworkPoliciesAsyncPager
ListNetworkPoliciesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPoliciesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPoliciesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPoliciesResponse ,
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
A pager for iterating through list_network_policies requests.
This class thinly wraps an initial
ListNetworkPoliciesResponse object, and
provides an __aiter__ method to iterate through its
network_policies field.
If there are more pages, the __aiter__ method will make additional
ListNetworkPolicies requests and continue to iterate
through the network_policies field on the
corresponding responses.
All the usual ListNetworkPoliciesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNetworkPoliciesPager
ListNetworkPoliciesPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPoliciesResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPoliciesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNetworkPoliciesResponse ,
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
A pager for iterating through list_network_policies requests.
This class thinly wraps an initial
ListNetworkPoliciesResponse object, and
provides an __iter__ method to iterate through its
network_policies field.
If there are more pages, the __iter__ method will make additional
ListNetworkPolicies requests and continue to iterate
through the network_policies field on the
corresponding responses.
All the usual ListNetworkPoliciesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNodeTypesAsyncPager
ListNodeTypesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodeTypesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodeTypesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodeTypesResponse ,
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
A pager for iterating through list_node_types requests.
This class thinly wraps an initial
ListNodeTypesResponse object, and
provides an __aiter__ method to iterate through its
node_types field.
If there are more pages, the __aiter__ method will make additional
ListNodeTypes requests and continue to iterate
through the node_types field on the
corresponding responses.
All the usual ListNodeTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNodeTypesPager
ListNodeTypesPager (
method : typing . Callable [
[ ... ], google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodeTypesResponse
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodeTypesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodeTypesResponse ,
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
A pager for iterating through list_node_types requests.
This class thinly wraps an initial
ListNodeTypesResponse object, and
provides an __iter__ method to iterate through its
node_types field.
If there are more pages, the __iter__ method will make additional
ListNodeTypes requests and continue to iterate
through the node_types field on the
corresponding responses.
All the usual ListNodeTypesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNodesAsyncPager
ListNodesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodesResponse ,
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
A pager for iterating through list_nodes requests.
This class thinly wraps an initial
ListNodesResponse object, and
provides an __aiter__ method to iterate through its
nodes field.
If there are more pages, the __aiter__ method will make additional
ListNodes requests and continue to iterate
through the nodes field on the
corresponding responses.
All the usual ListNodesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListNodesPager
ListNodesPager (
method : typing . Callable [
[ ... ], google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodesResponse
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListNodesResponse ,
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
A pager for iterating through list_nodes requests.
This class thinly wraps an initial
ListNodesResponse object, and
provides an __iter__ method to iterate through its
nodes field.
If there are more pages, the __iter__ method will make additional
ListNodes requests and continue to iterate
through the nodes field on the
corresponding responses.
All the usual ListNodesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPeeringRoutesAsyncPager
ListPeeringRoutesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPeeringRoutesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPeeringRoutesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPeeringRoutesResponse ,
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
A pager for iterating through list_peering_routes requests.
This class thinly wraps an initial
ListPeeringRoutesResponse object, and
provides an __aiter__ method to iterate through its
peering_routes field.
If there are more pages, the __aiter__ method will make additional
ListPeeringRoutes requests and continue to iterate
through the peering_routes field on the
corresponding responses.
All the usual ListPeeringRoutesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPeeringRoutesPager
ListPeeringRoutesPager (
method : typing . Callable [
[ ... ], google . cloud . vmwareengine_v1 . types . vmwareengine . ListPeeringRoutesResponse
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPeeringRoutesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPeeringRoutesResponse ,
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
A pager for iterating through list_peering_routes requests.
This class thinly wraps an initial
ListPeeringRoutesResponse object, and
provides an __iter__ method to iterate through its
peering_routes field.
If there are more pages, the __iter__ method will make additional
ListPeeringRoutes requests and continue to iterate
through the peering_routes field on the
corresponding responses.
All the usual ListPeeringRoutesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateCloudsAsyncPager
ListPrivateCloudsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateCloudsResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateCloudsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateCloudsResponse ,
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
A pager for iterating through list_private_clouds requests.
This class thinly wraps an initial
ListPrivateCloudsResponse object, and
provides an __aiter__ method to iterate through its
private_clouds field.
If there are more pages, the __aiter__ method will make additional
ListPrivateClouds requests and continue to iterate
through the private_clouds field on the
corresponding responses.
All the usual ListPrivateCloudsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateCloudsPager
ListPrivateCloudsPager (
method : typing . Callable [
[ ... ], google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateCloudsResponse
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateCloudsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateCloudsResponse ,
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
A pager for iterating through list_private_clouds requests.
This class thinly wraps an initial
ListPrivateCloudsResponse object, and
provides an __iter__ method to iterate through its
private_clouds field.
If there are more pages, the __iter__ method will make additional
ListPrivateClouds requests and continue to iterate
through the private_clouds field on the
corresponding responses.
All the usual ListPrivateCloudsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateConnectionPeeringRoutesAsyncPager
ListPrivateConnectionPeeringRoutesAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionPeeringRoutesResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionPeeringRoutesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionPeeringRoutesResponse ,
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
A pager for iterating through list_private_connection_peering_routes requests.
This class thinly wraps an initial
ListPrivateConnectionPeeringRoutesResponse object, and
provides an __aiter__ method to iterate through its
peering_routes field.
If there are more pages, the __aiter__ method will make additional
ListPrivateConnectionPeeringRoutes requests and continue to iterate
through the peering_routes field on the
corresponding responses.
All the usual ListPrivateConnectionPeeringRoutesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateConnectionPeeringRoutesPager
ListPrivateConnectionPeeringRoutesPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionPeeringRoutesResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionPeeringRoutesRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionPeeringRoutesResponse ,
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
A pager for iterating through list_private_connection_peering_routes requests.
This class thinly wraps an initial
ListPrivateConnectionPeeringRoutesResponse object, and
provides an __iter__ method to iterate through its
peering_routes field.
If there are more pages, the __iter__ method will make additional
ListPrivateConnectionPeeringRoutes requests and continue to iterate
through the peering_routes field on the
corresponding responses.
All the usual ListPrivateConnectionPeeringRoutesResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateConnectionsAsyncPager
ListPrivateConnectionsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionsResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionsResponse ,
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
A pager for iterating through list_private_connections requests.
This class thinly wraps an initial
ListPrivateConnectionsResponse object, and
provides an __aiter__ method to iterate through its
private_connections field.
If there are more pages, the __aiter__ method will make additional
ListPrivateConnections requests and continue to iterate
through the private_connections field on the
corresponding responses.
All the usual ListPrivateConnectionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListPrivateConnectionsPager
ListPrivateConnectionsPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionsResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListPrivateConnectionsResponse ,
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
A pager for iterating through list_private_connections requests.
This class thinly wraps an initial
ListPrivateConnectionsResponse object, and
provides an __iter__ method to iterate through its
private_connections field.
If there are more pages, the __iter__ method will make additional
ListPrivateConnections requests and continue to iterate
through the private_connections field on the
corresponding responses.
All the usual ListPrivateConnectionsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListSubnetsAsyncPager
ListSubnetsAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListSubnetsResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListSubnetsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListSubnetsResponse ,
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
A pager for iterating through list_subnets requests.
This class thinly wraps an initial
ListSubnetsResponse object, and
provides an __aiter__ method to iterate through its
subnets field.
If there are more pages, the __aiter__ method will make additional
ListSubnets requests and continue to iterate
through the subnets field on the
corresponding responses.
All the usual ListSubnetsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListSubnetsPager
ListSubnetsPager (
method : typing . Callable [
[ ... ], google . cloud . vmwareengine_v1 . types . vmwareengine . ListSubnetsResponse
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListSubnetsRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListSubnetsResponse ,
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
A pager for iterating through list_subnets requests.
This class thinly wraps an initial
ListSubnetsResponse object, and
provides an __iter__ method to iterate through its
subnets field.
If there are more pages, the __iter__ method will make additional
ListSubnets requests and continue to iterate
through the subnets field on the
corresponding responses.
All the usual ListSubnetsResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVmwareEngineNetworksAsyncPager
ListVmwareEngineNetworksAsyncPager (
method : typing . Callable [
[ ... ],
typing . Awaitable [
google . cloud . vmwareengine_v1 . types . vmwareengine . ListVmwareEngineNetworksResponse
],
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListVmwareEngineNetworksRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListVmwareEngineNetworksResponse ,
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
A pager for iterating through list_vmware_engine_networks requests.
This class thinly wraps an initial
ListVmwareEngineNetworksResponse object, and
provides an __aiter__ method to iterate through its
vmware_engine_networks field.
If there are more pages, the __aiter__ method will make additional
ListVmwareEngineNetworks requests and continue to iterate
through the vmware_engine_networks field on the
corresponding responses.
All the usual ListVmwareEngineNetworksResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
ListVmwareEngineNetworksPager
ListVmwareEngineNetworksPager (
method : typing . Callable [
[ ... ],
google . cloud . vmwareengine_v1 . types . vmwareengine . ListVmwareEngineNetworksResponse ,
],
request : google . cloud . vmwareengine_v1 . types . vmwareengine . ListVmwareEngineNetworksRequest ,
response : google . cloud . vmwareengine_v1 . types . vmwareengine . ListVmwareEngineNetworksResponse ,
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
A pager for iterating through list_vmware_engine_networks requests.
This class thinly wraps an initial
ListVmwareEngineNetworksResponse object, and
provides an __iter__ method to iterate through its
vmware_engine_networks field.
If there are more pages, the __iter__ method will make additional
ListVmwareEngineNetworks requests and continue to iterate
through the vmware_engine_networks field on the
corresponding responses.
All the usual ListVmwareEngineNetworksResponse
attributes are available on the pager. If multiple requests are made, only
the most recent response is retained, and thus used for attribute lookup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
