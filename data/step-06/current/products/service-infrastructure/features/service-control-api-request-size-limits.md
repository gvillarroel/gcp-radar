---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.040Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Control API request size limits"
feature_slug: "service-control-api-request-size-limits"
latest_feature_date: "2016-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest"
keywords:
  - "control"
  - "api"
  - "request"
  - "size"
  - "limits"
  - "the"
  - "began"
  - "enforcing"
---

# Service Control API request size limits

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The Service Control API began enforcing request size limits.

## Extended Definition

The Service Control API began enforcing request size limits.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting](https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest)

## Supporting Pages

### "Service Control API Access Control \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, for example, if the service producer project runs out of quota for sending requests to the Service Control API, multiple managed services will be impacted.
- Service consumer level permissions require that the request to the Service Control API must contain at least one valid service consumer project ID.
- The following example uses the gcurl alias defined in the Test with curl section of the Getting started guide: gcurl -d "{ 'policy': { 'bindings': [ { role: 'roles/servicemanagement.serviceController', members: 'serviceAccount: SERVICE ACCOUNT ' } ] } }" https://servicemanagement.googleapis.com/v1/services/ YOUR SERVICE NAME /consumers/ CONSUMER PROJECT NUMBER :setIamPolicy Please note the above example will replace all existing consumer project level IAM policies.
- The following example uses the gcurl alias defined in the Test with curl section of the Getting started guide: gcurl -d "{ 'policy': { 'bindings': [ { role: 'roles/servicemanagement.serviceController', members: 'serviceAccount: SERVICE ACCOUNT ' } ] } }" https://servicemanagement.googleapis.com/v1/services/ YOUR SERVICE NAME :setIamPolicy Please note the above example will replace all existing service level IAM policies.

### "Getting Started with the Service Control API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call with invalid request. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime": "2016-06-12T22:00:15Z", "operationName": "google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "checkErrors": [ { "code": "SERVICE NOT ACTIVATED", "detail": "Service 'endpointsapis.appspot.com' is not enabled for consumer 'project:endpointsapis-consumer'." } ] } Successful call to "services.check" method after the API is enabled for the project. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime":"2016-07-31T05:20:00Z", "operationName":"google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "operationId": "123e4567-e89b-12d3-a456-426655440000" } After you have completed the preceding steps: You have a functional local test setup that you can use to call any Google Cloud Platform APIs.
- For security and privacy reasons, the permission check typically happens before other checks. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/invalid.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'invalid.com'.", "status": "PERMISSION DENIED" } } Call without proper permission on a service. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/servicecontrol.googleapis.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'servicecontrol.googleapis.com'.", "status": "PERMISSION DENIED" } } Call with invalid request. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "error": { "code": 400, "message": "Request contains an invalid argument.", "status": "INVALID ARGUMENT" } } This and following call assume that the service, operation name and project being checked are "endpointsapis.appspot.com", "google.example.hello.v1.HelloService.GetHello" and "endpointsapis-consumer" correspondingly.
- Test with curl First, define a convenient shell alias for calling Google REST APIs: alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" ' The following shell command sequence demonstrates the incremental steps to call the Service Control API.
- Enable the Service Control API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### Rate Limiting \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting](https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: A service consumer can be specified using a project id, a project number, or an API key. gcurl -d '{ "allocateOperation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "methodName": "google.example.hello.v1.HelloService.GetHello", "consumerId": "project:endpointsapis-consumer", "quotaMetrics": [{ "metricName": "endpointsapis.appspot.com/requests", "metricValues": [{ "int64Value": 1 }] }], "quotaMode": "NORMAL" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:allocateQuota { "operationId": "123e4567-e89b-12d3-a456-426655440000", "quotaMetrics": [ { "metricName": "serviceruntime.googleapis.com/api/consumer/quota used count", "metricValues": [ { "labels": { "/quota name": "endpointsapis.appspot.com/requests" }, "int64Value": "1" } ] } ], "serviceConfigId": "2017-09-10r0" } Error handling If the HTTP response code is 200 , and the response contains RESOURCE EXHAUSTED QuotaError , your server should reject the request with a 429 error.
- Enforcing rate limiting To enforce rate limiting, each server that belongs to a managed service needs to call the Service Control API services.allocateQuota method regularly.
- Because most service consumers should not reach their rate limits during normal operations, your managed service should accept all incoming requests if the rate limiting feature is unavailable, also known as fail open .
- Currently, the supported rate limiting is the number of requests per minute per service consumer, where the service consumer is a Google Cloud project as identified by an API key, a project id, or a project number.

### Service Control API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://servicecontrol.googleapis.com REST Resource: v2.services Methods check POST /v2/services/{serviceName}:check This method provides admission control for services that are integrated with Service Infrastructure . report POST /v2/services/{serviceName}:report This method provides telemetry reporting for services that are integrated with Service Infrastructure .
- This service provides the following discovery documents: https://servicecontrol.googleapis.com/$discovery/rest?version=v2 https://servicecontrol.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v3 REST Resource: v2.services REST Resource: v1.services Service: servicecontrol.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

