---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.208Z"
product_name: "Service Usage"
product_slug: "service-usage"
feature_name: "Service Usage services.list disabled filter"
feature_slug: "service-usage-services-list-disabled-filter"
latest_feature_date: "2018-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-usage/docs/list-services"
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient"
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.pagers.ListServicesAsyncPager"
keywords:
  - "usage"
  - "services"
  - "list"
  - "disabled"
  - "filter"
  - "added"
  - "to"
  - "the"
---

# Service Usage services.list disabled filter

Product: Service Usage
Coverage: MEDIUM

## Step 02 Summary

Added support to the Service Usage `services.list` method to filter results for disabled APIs and services.

## Extended Definition

Added support to the Service Usage `services.list` method to filter results for disabled APIs and services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-usage/docs/list-services](https://docs.cloud.google.com/service-usage/docs/list-services)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.pagers.ListServicesAsyncPager](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.pagers.ListServicesAsyncPager)

## Supporting Pages

### List services \_|\_ Service Usage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/list-services](https://docs.cloud.google.com/service-usage/docs/list-services)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: N/A

Evidence snippets:
- To list the enabled APIs and services in your project, run the following command: gcurl "https://serviceusage.googleapis.com/v1/projects/${PROJECT NUMBER}/services?filter=state:ENABLED" List available services in a project Caution: The list of available services is substantially larger than the list of enabled services.
- You can find the list of APIs enabled in your Google Cloud project in the table on this page. gcloud To list the enabled APIs and services in your current project, run the following command: gcloud services list The command produces output similar to the following: NAME TITLE pubsub.googleapis.com Google Cloud Pub/Sub API bigquery.googleapis.com BigQuery API cloudtrace.googleapis.com Stackdriver Trace API servicemanagement.googleapis.com Google Service Management API monitoring.googleapis.com Stackdriver Monitoring API storage-api.googleapis.com Google Cloud Storage JSON API logging.googleapis.com Stackdriver Logging API clouddebugger.googleapis.com Stackdriver Debugger API ... curl To list enabled services, call the services.list method with the state:ENABLED filter.
- To list the enabled APIs for an organization, run the following command after you set your organization and billing project IDs: NOW=$(TZ=GMT date +"%Y-%m-%dT%H:%M:%SZ") gcloud asset list \ --organization=' ORGANIZATION ID ' \ --billing-project=' BILLING PROJECT ID ' \ --asset-types='serviceusage.googleapis.com/Service' \ --snapshot-time=$NOW \ --content-type='resource' Executing the previous command lets a sufficiently privileged user list the set of enabled services for all projects in an organization.
- To list the available APIs and services in your project, run the following command: gcurl "https://serviceusage.googleapis.com/v1/projects/${PROJECT NUMBER}/services" The result includes all public services, all services for which the calling user has the servicemanagement.services.bind permission, and all services that have already been enabled on the project.

### "Class ServiceUsageAsyncClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient)
- Source ID: `site-python-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample list services(): Create a client client = service usage v1 .
- The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample batch enable services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample batch get services(): Create a client client = service usage v1 .

### "Class ServiceUsageClient (1.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- Source ID: `site-python-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample list services(): Create a client client = service usage v1 .
- The list can be filtered to only include services in a specific state, for example to only include services enabled on the project.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample batch enable services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample batch get services(): Create a client client = service usage v1 .

### "Class ListServicesAsyncPager (1.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.pagers.ListServicesAsyncPager](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.pagers.ListServicesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.service usage v1.types.ListServicesRequest The initial request object. response google.cloud.service usage v1.types.ListServicesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- If there are more pages, the aiter method will make additional ListServices requests and continue to iterate through the services field on the corresponding responses.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListServicesAsyncPager (1.16.0) Stay organized with collections Save and categorize content based on your preferences.
- This class thinly wraps an initial ListServicesResponse object, and provides an aiter method to iterate through its services field.

