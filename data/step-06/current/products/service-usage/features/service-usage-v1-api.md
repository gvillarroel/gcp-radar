---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.207Z"
product_name: "Service Usage"
product_slug: "service-usage"
feature_name: "Service Usage v1 API"
feature_slug: "service-usage-v1-api"
latest_feature_date: "2018-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1"
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient"
  - "https://docs.cloud.google.com/service-usage/docs/reference/rest"
keywords:
  - "usage"
  - "v1"
  - "api"
  - "version"
  - "became"
  - "generally"
  - "available"
  - "enabling"
---

# Service Usage v1 API

Product: Service Usage
Coverage: MEDIUM

## Step 02 Summary

Service Usage version 1 became generally available, enabling projects to discover and manage Google Cloud APIs and services.

## Extended Definition

Service Usage version 1 became generally available, enabling projects to discover and manage Google Cloud APIs and services.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- [https://docs.cloud.google.com/service-usage/docs/reference/rest](https://docs.cloud.google.com/service-usage/docs/reference/rest)

## Supporting Pages

### "Package com.google.api.serviceusage.v1 (2.88.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-service-usage/latest/com.google.api.serviceusage.v1)
- Source ID: `site-java-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Service Usage Grpc Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use. com. google. api. serviceusage. v1.
- Service A service that is available for use by the consumer. com. google. api. serviceusage. v1.
- Builder A service that is available for use by the consumer. com. google. api. serviceusage. v1.
- Home Documentation Developer tools Java Client libraries Send feedback Package com.google.api.serviceusage.v1 (2.88.0) Stay organized with collections Save and categorize content based on your preferences.

### "Class ServiceUsageAsyncClient (1.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageAsyncClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample batch enable services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample batch get services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample disable service(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 async def sample enable service(): Create a client client = service usage v1 .

### "Class ServiceUsageClient (1.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient](https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/google.cloud.service_usage_v1.services.service_usage.ServiceUsageClient)
- Source ID: `site-python-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample batch enable services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample batch get services(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample disable service(): Create a client client = service usage v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import service usage v1 def sample enable service(): Create a client client = service usage v1 .

### Service Usage API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-usage/docs/reference/rest](https://docs.cloud.google.com/service-usage/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- This service provides the following discovery documents: https://serviceusage.googleapis.com/$discovery/rest?version=v2beta https://serviceusage.googleapis.com/$discovery/rest?version=v1 https://serviceusage.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v2beta REST Resource: v2beta.consumerPolicies REST Resource: v2beta.mcpPolicies REST Resource: v2beta.operations REST Resource: v2beta.services REST Resource: v2beta.services.groups REST Resource: v2beta.services.groups.expandedMembers REST Resource: v2beta.services.groups.members REST Resource: v2beta.sharedServices REST Resource: v1beta1.operations REST Resource: v1beta1.services REST Resource: v1beta1.services.consumerQuotaMetrics REST Resource: v1beta1.services.consumerQuotaMetrics.limits REST Resource: v1beta1.services.consumerQuotaMetrics.limits.adminOverrides REST Resource: v1beta1.services.consumerQuotaMetrics.limits.consumerOverrides REST Resource: v1.operations REST Resource: v1.services Service: serviceusage.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://serviceusage.googleapis.com REST Resource: v2beta Methods getEffectiveMcpPolicy GET /v2beta/{name= / /effectiveMcpPolicy} Get effective MCP consumer policy for a resource, which contains enable rule information of MCP consumer policies from the resource hierarchy. getEffectivePolicy GET /v2beta/{name= / /effectivePolicy} Get effective consumer policy for a resource, which contains enable rule information of consumer policies from the resource hierarchy. testEnabled POST /v2beta/{name= / }:testEnabled Tests a value against the result of merging consumer policies in the resource hierarchy. testMcpEnabled POST /v2beta/{name= / }:testMcpEnabled Tests a value against the result of merging MCP consumer policies in the resource hierarchy.
- REST Resource: v1beta1.services Methods batchEnable (deprecated) POST /v1beta1/{parent= / }/services:batchEnable Enables multiple services on a project. disable (deprecated) POST /v1beta1/{name= / /services/ }:disable Disables a service so that it can no longer be used with a project. enable (deprecated) POST /v1beta1/{name= / /services/ }:enable Enables a service so that it can be used with a project. generateServiceIdentity POST /v1beta1/{parent= / /services/ }:generateServiceIdentity Generates service identity for service. get (deprecated) GET /v1beta1/{name= / /services/ } Returns the service configuration and enabled state for a given service. list (deprecated) GET /v1beta1/{parent= / }/services Lists all services available to the specified project, and the current state of those services with respect to the project.

