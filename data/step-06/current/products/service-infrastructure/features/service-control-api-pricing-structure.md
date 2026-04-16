---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.040Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Control API pricing structure"
feature_slug: "service-control-api-pricing-structure"
latest_feature_date: "2016-12-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control"
keywords:
  - "control"
  - "api"
  - "pricing"
  - "structure"
  - "the"
  - "for"
  - "was"
  - "introduced"
---

# Service Control API pricing structure

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The pricing structure for the Service Control API was introduced.

## Extended Definition

The pricing structure for the Service Control API was introduced.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control)

## Supporting Pages

### "Service Control API Access Control \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To invoke the Service Control API for a managed service , the caller must have the following Identity and Access Management (IAM) permissions on the service: services.check requires permission servicemanagement.services.check . services.report requires permission servicemanagement.services.report . services.allocateQuota requires permission servicemanagement.services.quota .
- Otherwise, for example, if the service producer project runs out of quota for sending requests to the Service Control API, multiple managed services will be impacted.
- For example, you can grant the roles to a service account, such as foo@developer.gserviceaccount.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member serviceAccount: SERVICE ACCOUNT --role roles/servicemanagement.serviceController Similarly, you can grant the roles to a user account, such as bar@gmail.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member user: USER ACCOUNT --role roles/servicemanagement.serviceController Grant a role at the service level You can grant the role roles/servicemanagement.serviceController at the service level using curl .
- The following example uses the gcurl alias defined in the Test with curl section of the Getting started guide: gcurl -d "{ 'policy': { 'bindings': [ { role: 'roles/servicemanagement.serviceController', members: 'serviceAccount: SERVICE ACCOUNT ' } ] } }" https://servicemanagement.googleapis.com/v1/services/ YOUR SERVICE NAME /consumers/ CONSUMER PROJECT NUMBER :setIamPolicy Please note the above example will replace all existing consumer project level IAM policies.

### "Getting Started with the Service Control API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call with invalid request. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime": "2016-06-12T22:00:15Z", "operationName": "google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "checkErrors": [ { "code": "SERVICE NOT ACTIVATED", "detail": "Service 'endpointsapis.appspot.com' is not enabled for consumer 'project:endpointsapis-consumer'." } ] } Successful call to "services.check" method after the API is enabled for the project. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime":"2016-07-31T05:20:00Z", "operationName":"google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "operationId": "123e4567-e89b-12d3-a456-426655440000" } After you have completed the preceding steps: You have a functional local test setup that you can use to call any Google Cloud Platform APIs.
- For security and privacy reasons, the permission check typically happens before other checks. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/invalid.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'invalid.com'.", "status": "PERMISSION DENIED" } } Call without proper permission on a service. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/servicecontrol.googleapis.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'servicecontrol.googleapis.com'.", "status": "PERMISSION DENIED" } } Call with invalid request. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "error": { "code": 400, "message": "Request contains an invalid argument.", "status": "INVALID ARGUMENT" } } This and following call assume that the service, operation name and project being checked are "endpointsapis.appspot.com", "google.example.hello.v1.HelloService.GetHello" and "endpointsapis-consumer" correspondingly.
- Test with curl First, define a convenient shell alias for calling Google REST APIs: alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" ' The following shell command sequence demonstrates the incremental steps to call the Service Control API.
- Home Documentation Application development Service Infrastructure Guides Send feedback Getting Started with the Service Control API Stay organized with collections Save and categorize content based on your preferences.

### Service Control API \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-control/reference/rest)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://servicecontrol.googleapis.com REST Resource: v2.services Methods check POST /v2/services/{serviceName}:check This method provides admission control for services that are integrated with Service Infrastructure . report POST /v2/services/{serviceName}:report This method provides telemetry reporting for services that are integrated with Service Infrastructure .
- REST Resource: v1.services Methods allocateQuota POST /v1/services/{serviceName}:allocateQuota Attempts to allocate quota for the specified consumer. check POST /v1/services/{serviceName}:check Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. report POST /v1/services/{serviceName}:report Reports operation results to Google Service Control, such as logs and metrics.
- This service provides the following discovery documents: https://servicecontrol.googleapis.com/$discovery/rest?version=v2 https://servicecontrol.googleapis.com/$discovery/rest?version=v1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v3 REST Resource: v2.services REST Resource: v1.services Service: servicecontrol.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### "Service Management API Access Control \_|\_ Service Infrastructure \_|\_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Show the IAM policy of service "endpointsapis.appspot.com" . gcloud endpoints services get - iam - policy endpointsapis . appspot . com The above command may produce an output similar to this : bindings : - members : - user : email1 @gmail . com - group : group1 @googlegroups . com role : roles / servicemanagement . serviceConsumer Add a user to "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services add - iam - policy - binding endpointsapis . appspot . com --member "user:email1@gmail.com" --role "roles/servicemanagement.serviceConsumer" Add a group to "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services add - iam - policy - binding endpointsapis . appspot . com --member "group:group1@googlegroups.com" --role "roles/servicemanagement.serviceConsumer" Remove a user from "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services remove - iam - policy - binding endpointsapis . appspot . com --member "user:email1@gmail.com" --role "roles/servicemanagement.serviceConsumer" Remove a group from "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services remove - iam - policy - binding endpointsapis . appspot . com --member "group:group1@googlegroups.com" --role "roles/servicemanagement.serviceConsumer" Managing access using the Service Management API The Service Management API includes the IAM Policy API for managing service-level and consumer-level policies.
- This information is also documented in the API Reference : Method Required Permission(s) services.delete servicemanagement.services.delete on the specified service name . services.get servicemanagement.services.get on the specified service name . services.getConfig servicemanagement.services.get on the specified service name . services.undelete servicemanagement.services.delete on the specified service name . services.configs.create servicemanagement.services.update on the specified service name . services.configs.get servicemanagement.services.get on the specified service name . services.configs.list servicemanagement.services.get on the specified service name . services.configs.submit servicemanagement.services.update on the specified service name . services.rollouts.create servicemanagement.services.update on the specified service name . services.rollouts.get servicemanagement.services.get on the specified service name . services.rollouts.list servicemanagement.services.get on the specified service name .
- The following table lists the permissions that apply to services: Permission Description servicemanagement.services.delete Delete services. servicemanagement.services.get Read services. servicemanagement.services.create Create new services in projects. servicemanagement.services.list List services in projects. servicemanagement.services.update Update services. servicemanagement.services.bind View and enable the service on projects the caller controls. servicemanagement.services.setIamPolicy Set IAM access policy for services. servicemanagement.services.getIamPolicy Read IAM access policy for services. servicemanagement.services.check Check service consumer status.
- For example: View the current IAM policy on service "endpointsapis.appspot.com". gcurl -d '{}' https://servicemanagement.googleapis.com/v1/services/endpointsapis.appspot.com:getIamPolicy View the current IAM policy on service "endpointsapis.appspot.com" and consumer "12345". gcurl -d '{}' https://servicemanagement.googleapis.com/v1/services/endpointsapis.appspot.com/consumers/12345:getIamPolicy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

