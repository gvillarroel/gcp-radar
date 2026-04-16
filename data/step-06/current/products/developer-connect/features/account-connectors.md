---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:05.559Z"
product_name: "Developer Connect"
product_slug: "developer-connect"
feature_name: "Account connectors"
feature_slug: "account-connectors"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/developer-connect/docs/configure-connectors"
  - "https://docs.cloud.google.com/developer-connect/docs/account-connectors"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsPager"
keywords:
  - "account"
  - "connectors"
  - "link"
  - "with"
  - "individual"
  - "accounts"
  - "on"
  - "supported"
---

# Account connectors

Product: Developer Connect
Coverage: MEDIUM

## Step 02 Summary

Account connectors link a Google Cloud account with individual accounts on supported non-Google developer tool providers.

## Extended Definition

Account connectors link a Google Cloud account with individual accounts on supported non-Google developer tool providers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/developer-connect/docs/configure-connectors](https://docs.cloud.google.com/developer-connect/docs/configure-connectors)
- [https://docs.cloud.google.com/developer-connect/docs/account-connectors](https://docs.cloud.google.com/developer-connect/docs/account-connectors)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsPager)

## Supporting Pages

### "Configure account connectors \_|\_ Developer Connect \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/developer-connect/docs/configure-connectors](https://docs.cloud.google.com/developer-connect/docs/configure-connectors)
- Source ID: `site-iam-reference`
- Final score: 304
- Re-rank relevance: N/A

Evidence snippets:
- Once an account connector connection is created for an organization, users within that organization can use that connection to authorize their individual accounts to be used with that connection.
- Home Documentation Application development Developer Connect Guides Send feedback Configure account connectors Stay organized with collections Save and categorize content based on your preferences.
- An account connector is a Developer Connect feature that helps you connect your Google Cloud account with your individual account on an non-Google Developer Tools provider.
- Required roles To get the permissions that you need to create connections and links, ask your administrator to grant you the following IAM roles: If you aren't the project owner: Developer Connect Admin ( roles/developerconnect.admin ) on your user account.

### Account connectors \_|\_ Developer Connect \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/developer-connect/docs/account-connectors](https://docs.cloud.google.com/developer-connect/docs/account-connectors)
- Source ID: `site-iam-reference`
- Final score: 296
- Re-rank relevance: N/A

Evidence snippets:
- Once an account connector connection is created for an organization, users within that organization can use that connection to authorize their individual accounts to be used with that connection.
- In most cases, platform administrators configure account connectors within a Google Cloud service that integrates with Developer Connect, by following prompts and pop-ups without leaving their context.
- Home Documentation Application development Developer Connect Guides Send feedback Account connectors Stay organized with collections Save and categorize content based on your preferences.
- Introduction An account connector is a Developer Connect feature that helps you connect your Google Cloud account with your individual account on an non-Google Developer Tools provider.

### "Class ListAccountConnectorsAsyncPager (0.5.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsAsyncPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.developerconnect v1.types.ListAccountConnectorsRequest The initial request object. response google.cloud.developerconnect v1.types.ListAccountConnectorsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListAccountConnectorsAsyncPager (0.5.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListAccountConnectors requests and continue to iterate through the account connectors field on the corresponding responses.
- This class thinly wraps an initial ListAccountConnectorsResponse object, and provides an aiter method to iterate through its account connectors field.

### "Class ListAccountConnectorsPager (0.5.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsPager](https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/google.cloud.developerconnect_v1.services.developer_connect.pagers.ListAccountConnectorsPager)
- Source ID: `site-python-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.developerconnect v1.types.ListAccountConnectorsRequest The initial request object. response google.cloud.developerconnect v1.types.ListAccountConnectorsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListAccountConnectorsPager (0.5.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListAccountConnectors requests and continue to iterate through the account connectors field on the corresponding responses.
- This class thinly wraps an initial ListAccountConnectorsResponse object, and provides an iter method to iterate through its account connectors field.

