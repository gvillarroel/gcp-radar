---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.115Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Serverless interactive sessions pages in console"
feature_slug: "serverless-interactive-sessions-pages-in-console"
latest_feature_date: "2023-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsPager"
  - "https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console"
keywords:
  - "detail"
  - "pages"
  - "interactive"
  - "sessions"
  - "list"
  - "serverless"
  - "includes"
  - "console"
---

# Serverless interactive sessions pages in console

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console includes detail and list pages for Dataproc Serverless interactive sessions.

## Extended Definition

The Google Cloud console includes detail and list pages for Dataproc Serverless interactive sessions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsPager)
- [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)

## Supporting Pages

### "Class ListSessionsAsyncPager (5.26.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there are more pages, the aiter method will make additional ListSessions requests and continue to iterate through the sessions field on the corresponding responses.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListSessionsRequest The initial request object. response google.cloud.dataproc v1.types.ListSessionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 5.26.0 (latest) 5.25.0 5.24.0 5.23.0 5.22.0 5.21.0 5.20.0 5.18.1 5.17.1 5.16.0 5.15.1 5.14.0 5.13.0 5.12.0 5.10.2 5.9.3 5.8.0 5.7.0 5.6.0 5.5.1 5.4.3 5.3.0 5.2.0 5.1.0 5.0.3 4.0.3 3.3.2 3.2.0 3.1.1 3.0.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.0.2 1.1.3 1.0.1 0.8.2 0.7.0 0.6.1 0.5.0 ListSessionsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListSessionsAsyncPager (5.26.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class ListSessionsPager (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_controller.pagers.ListSessionsPager)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If there are more pages, the iter method will make additional ListSessions requests and continue to iterate through the sessions field on the corresponding responses.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListSessionsRequest The initial request object. response google.cloud.dataproc v1.types.ListSessionsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 5.26.0 (latest) 5.25.0 5.24.0 5.23.0 5.22.0 5.21.0 5.20.0 5.18.1 5.17.1 5.16.0 5.15.1 5.14.0 5.13.0 5.12.0 5.10.2 5.9.3 5.8.0 5.7.0 5.6.0 5.5.1 5.4.3 5.3.0 5.2.0 5.1.0 5.0.3 4.0.3 3.3.2 3.2.0 3.1.1 3.0.0 2.6.2 2.5.0 2.4.0 2.3.1 2.2.0 2.0.2 1.1.3 1.0.1 0.8.2 0.7.0 0.6.1 0.5.0 ListSessionsPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListSessionsPager (5.26.0) Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Create a cluster by using the Google Cloud console \_|\_ Managed\

- URL: [https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console](https://docs.cloud.google.com/dataproc/docs/quickstarts/create-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a cluster by using the Google Cloud console This page shows you how to use the Google Cloud console to create a Managed Service for Apache Spark cluster, run a basic Apache Spark job in the cluster, and then modify the number of workers in the cluster.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Sign in to your Google Cloud account.
- The output is similar to the following: Pi is roughly 3.1416759514167594 To view job details, click the Configuration tab.

