---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:11:59.737Z"
product_name: "Datastream"
product_slug: "datastream"
feature_name: "Private Service Connect interfaces"
feature_slug: "private-service-connect-interfaces"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient"
  - "https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration"
  - "https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListPrivateConnectionsAsyncPager"
keywords:
  - "private"
  - "connect"
  - "interfaces"
  - "datastream"
  - "supports"
  - "as"
  - "connectivity"
  - "method"
---

# Private Service Connect interfaces

Product: Datastream
Coverage: LOW

## Step 02 Summary

Datastream supports Private Service Connect interfaces as a private connectivity method.

## Extended Definition

Datastream supports Private Service Connect interfaces as a private connectivity method.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)
- [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListPrivateConnectionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListPrivateConnectionsAsyncPager)

## Supporting Pages

### "Class DatastreamAsyncClient (1.18.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.DatastreamAsyncClient)
- Source ID: `site-python-reference`
- Final score: 270
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.datastream v1.types.PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. get route get route ( request : typing .
- The result type for the operation will be PrivateConnection The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network. create route create route ( request : typing .
- ListRoutesAsyncPager Use this method to list routes created for a private connectivity configuration in a project and location.
- ListPrivateConnectionsAsyncPager ) Use this method to list private connectivity configurations in a project and location.

### "Create a private connectivity configuration \_|\_ Datastream \_|\_ Google\

- URL: [https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration](https://docs.cloud.google.com/datastream/docs/create-a-private-connectivity-configuration)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Set up connection section, select an option from the Private connectivity method drop-down: PSC interfaces : select this option to use Private Service Connect interface as your private connectivity method: Field Description Project ID Select the identifier of the project where the network attachment that you want to use is.
- Home Documentation Data analytics Datastream Guides Send feedback Create a private connectivity configuration Stay organized with collections Save and categorize content based on your preferences.
- You need to provide the private IP addresses when setting up the private connectivity configuration because Datastream doesn't support Domain Name System (DNS) resolution in private connections.
- VPC peering : select this option to use VPC peering as your private connectivity method: Field Description Authorized VPC network Select the VPC network that you created.

### "Class ListPrivateConnectionsAsyncPager (1.18.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListPrivateConnectionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.services.datastream.pagers.ListPrivateConnectionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.datastream v1.types.ListPrivateConnectionsRequest The initial request object. response google.cloud.datastream v1.types.ListPrivateConnectionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 1.18.0 (latest) 1.17.0 1.16.0 1.15.0 1.14.1 1.13.2 1.12.0 1.11.0 1.10.1 1.9.5 1.8.0 1.7.0 1.6.1 1.5.1 1.4.1 1.3.0 1.2.2 1.1.1 1.0.2 0.4.3 0.3.1 0.2.0 0.1.3 ListPrivateConnectionsAsyncPager ( method : typing .
- This class thinly wraps an initial ListPrivateConnectionsResponse object, and provides an aiter method to iterate through its private connections field.
- ListPrivateConnectionsResponse ], ], request : google . cloud . datastream v1 . types . datastream .

