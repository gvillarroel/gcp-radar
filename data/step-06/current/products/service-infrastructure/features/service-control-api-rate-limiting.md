---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.038Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Control API rate limiting"
feature_slug: "service-control-api-rate-limiting"
latest_feature_date: "2017-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control"
  - "https://docs.cloud.google.com/service-infrastructure/docs/admission-control"
keywords:
  - "control"
  - "api"
  - "rate"
  - "limiting"
  - "the"
  - "added"
  - "for"
  - "request"
---

# Service Control API rate limiting

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The Service Control API added support for request rate limiting, released in Public Beta.

## Extended Definition

The Service Control API added support for request rate limiting, released in Public Beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting](https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- [https://docs.cloud.google.com/service-infrastructure/docs/admission-control](https://docs.cloud.google.com/service-infrastructure/docs/admission-control)

## Supporting Pages

### Rate Limiting \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting](https://docs.cloud.google.com/service-infrastructure/docs/rate-limiting)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enforcing rate limiting To enforce rate limiting, each server that belongs to a managed service needs to call the Service Control API services.allocateQuota method regularly.
- The Service Management and Service Control APIs allow you to manage and enforce rate limiting.
- Currently, the supported rate limiting is the number of requests per minute per service consumer, where the service consumer is a Google Cloud project as identified by an API key, a project id, or a project number.
- This page describes how to use Service Infrastructure to implement rate limiting for managed services that are integrated with the Service Management API.

### "Getting Started with the Service Control API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call with invalid request. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime": "2016-06-12T22:00:15Z", "operationName": "google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "checkErrors": [ { "code": "SERVICE NOT ACTIVATED", "detail": "Service 'endpointsapis.appspot.com' is not enabled for consumer 'project:endpointsapis-consumer'." } ] } Successful call to "services.check" method after the API is enabled for the project. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime":"2016-07-31T05:20:00Z", "operationName":"google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "operationId": "123e4567-e89b-12d3-a456-426655440000" } After you have completed the preceding steps: You have a functional local test setup that you can use to call any Google Cloud Platform APIs.
- For security and privacy reasons, the permission check typically happens before other checks. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/invalid.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'invalid.com'.", "status": "PERMISSION DENIED" } } Call without proper permission on a service. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/servicecontrol.googleapis.com:check { "error": { "code": 403, "message": "Permission 'servicemanagement.services.check' denied on service 'servicecontrol.googleapis.com'.", "status": "PERMISSION DENIED" } } Call with invalid request. $ gcurl -d '{}' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "error": { "code": 400, "message": "Request contains an invalid argument.", "status": "INVALID ARGUMENT" } } This and following call assume that the service, operation name and project being checked are "endpointsapis.appspot.com", "google.example.hello.v1.HelloService.GetHello" and "endpointsapis-consumer" correspondingly.
- Test with curl First, define a convenient shell alias for calling Google REST APIs: alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" ' The following shell command sequence demonstrates the incremental steps to call the Service Control API.
- After you have created a managed service, you need to complete the following steps before using the Service Control API from your managed service.

### "Service Control API Access Control \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- Source ID: `site-iam-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, for example, if the service producer project runs out of quota for sending requests to the Service Control API, multiple managed services will be impacted.
- To invoke the Service Control API for a managed service , the caller must have the following Identity and Access Management (IAM) permissions on the service: services.check requires permission servicemanagement.services.check . services.report requires permission servicemanagement.services.report . services.allocateQuota requires permission servicemanagement.services.quota .
- Service consumer level permissions require that the request to the Service Control API must contain at least one valid service consumer project ID.
- For example, you can grant the roles to a service account, such as foo@developer.gserviceaccount.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member serviceAccount: SERVICE ACCOUNT --role roles/servicemanagement.serviceController Similarly, you can grant the roles to a user account, such as bar@gmail.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member user: USER ACCOUNT --role roles/servicemanagement.serviceController Grant a role at the service level You can grant the role roles/servicemanagement.serviceController at the service level using curl .

### Admission Control \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/admission-control](https://docs.cloud.google.com/service-infrastructure/docs/admission-control)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Performing admission control Once you have deployed your service configuration to the Service Management API and your service is ready to serve requests from clients, you can begin calling services.check for your deployed service.
- In other cases, the access can be complicated data import jobs or SQL queries, and the service needs to model the access in terms of a set of virtual API requests and perform admission control on each request.
- Introduction This page describes how to use the Service Control API v2 for admission control for managed services that are integrated with Service Infrastructure.
- To perform admission control using the Service Control API, the service needs to call the services.check method with required request attributes.

