---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.038Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Consumer Management API v1"
feature_slug: "service-consumer-management-api-v1"
latest_feature_date: "2017-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest"
keywords:
  - "consumer"
  - "management"
  - "api"
  - "v1"
  - "the"
  - "reached"
  - "availability"
  - "in"
---

# Service Consumer Management API v1

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The Service Consumer Management API reached v1 availability in Public Beta.

## Extended Definition

The Service Consumer Management API reached v1 availability in Public Beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest)

## Supporting Pages

### "Service Consumer Management API \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)
- Source ID: `site-api-reference`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://serviceconsumermanagement.googleapis.com REST Resource: v1.operations Methods cancel POST /v1/{name=operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/{name=operations/ } Deletes a long-running operation. get GET /v1/{name=operations/ } Gets the latest state of a long-running operation. list GET /v1/{name} Lists operations that match the specified filter in the request.
- This service provides the following discovery documents: https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1 https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service provides the following discovery documents: https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1 https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://serviceconsumermanagement.googleapis.com REST Resource: v1beta1.operations Methods get GET /v1beta1/{name=operations/ } Gets the latest state of a long-running operation.

### "Getting Started with the Service Control API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- Source ID: `site-docs-root`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For security and privacy reasons, the permission check typically happens before other checks. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/invalid.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'invalid.com'.", "status": "PERMISSION DENIED" } } Call without proper permission on a service. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/servicecontrol.googleapis.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'servicecontrol.googleapis.com'.", "status": "PERMISSION DENIED" } } Call with invalid request. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "error": { "code": 400, "message": "Request contains an invalid argument.", "status": "INVALID ARGUMENT" } } This and following call assume that the service, operation name and project being checked are "endpointsapis.appspot.com", "google.example.hello.v1.HelloService.GetHello" and "endpointsapis-consumer" correspondingly.
- Call with invalid request. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime": "2016-06-12T22:00:15Z", "operationName": "google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "checkErrors": [ { "code": "SERVICE NOT ACTIVATED", "detail": "Service 'endpointsapis.appspot.com' is not enabled for consumer 'project:endpointsapis-consumer'." } ] } Successful call to "services.check" method after the API is enabled for the project. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime":"2016-07-31T05:20:00Z", "operationName":"google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "operationId": "123e4567-e89b-12d3-a456-426655440000" } After you have completed the preceding steps: You have a functional local test setup that you can use to call any Google Cloud Platform APIs.
- To use the Service Control API, you need to first create a managed service using the Service Management API.
- Test with curl First, define a convenient shell alias for calling Google REST APIs: alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" ' The following shell command sequence demonstrates the incremental steps to call the Service Control API.

### "Getting Started with the Service Networking API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API gcloud Activate the Service Networking API: gcloud services enable servicenetworking.googleapis.com \ --project= PROJECT ID Replace PROJECT ID with the Google Cloud project ID of your private services management project.
- Once the service account gets provisioned, it is visible in the format service-{project number}@service-networking.iam.gserviceaccount.com and is added with roles/servicenetworking.serviceAgent policy binding on the consumer project.
- Home Documentation Application development Service Infrastructure Guides Send feedback Getting Started with the Service Networking API Stay organized with collections Save and categorize content based on your preferences.
- This means that unless we do not have a resource (for example: configuration of Private Google Access) configured which calls the API, we won't see the service account getting created.

### Service Management API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-management/reference/rest)
- Source ID: `site-api-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://servicemanagement.googleapis.com REST Resource: v1.operations Methods get GET /v1/{name=operations/ } Gets the latest state of a long-running operation. list GET /v1/operations Lists service operations that match the specified filter in the request.
- REST Resource: v1.operations REST Resource: v1.services REST Resource: v1.services.configs REST Resource: v1.services.consumers REST Resource: v1.services.rollouts Service: servicemanagement.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service provides the following discovery document: https://servicemanagement.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1.services Methods create POST /v1/services Creates a new managed service. delete DELETE /v1/services/{serviceName} Deletes a managed service. disable (deprecated) POST /v1/services/{serviceName}:disable Disables a service for a project, so it can no longer be be used for the project. enable (deprecated) POST /v1/services/{serviceName}:enable Enables a service for a project, so it can be used for the project. generateConfigReport POST /v1/services:generateConfigReport Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new value If GenerateConfigReportRequest.old value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new value and GenerateConfigReportRequest.old value. get GET /v1/services/{serviceName} Gets a managed service. getConfig GET /v1/services/{serviceName}/config Gets a service configuration (version) for a managed service. getIamPolicy POST /v1/{resource=services/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/services Lists managed services. setIamPolicy POST /v1/{resource=services/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource=services/ }:testIamPermissions Returns permissions that a caller has on the specified resource. undelete POST /v1/services/{serviceName}:undelete Revives a previously deleted managed service.

