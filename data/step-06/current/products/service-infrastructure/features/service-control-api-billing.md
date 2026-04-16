---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.039Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Control API billing"
feature_slug: "service-control-api-billing"
latest_feature_date: "2017-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started"
keywords:
  - "control"
  - "api"
  - "billing"
  - "the"
  - "added"
  - "for"
  - "released"
  - "in"
---

# Service Control API billing

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The Service Control API added support for billing, released in Public Beta.

## Extended Definition

The Service Control API added support for billing, released in Public Beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics](https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started)

## Supporting Pages

### "Reporting Billing Metrics \_|\_ Service Infrastructure \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics](https://docs.cloud.google.com/service-infrastructure/docs/reporting-billing-metrics)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configuring billing Before you send billing data to the Service Control API, you need to specify three different bits of information in your service configuration : Monitored resources : You can collect billing usage for each resource.
- The Service Control API accepts metrics, which it batches, aggregates, and forwards to Cloud Billing .
- For information on how to set this up, see Getting Started with the Service Control API . $ gcurl -d "{ 'operations': [ { 'operationId': '8356d3c5-f9b5-4274-b4f9-079a3731e6e5', 'consumerId': 'project:library-consumer', 'startTime': 'date +%FT%T%:z', 'endTime': 'date +%FT%T%:z', 'labels': { 'cloud.googleapis.com/location': 'us-west1', 'library.appspot.com/city': 'Kirkland', }, 'metricValueSets': [ { 'metricName': 'library.appspot.com/books/borrowed', 'metricValues': [ { 'int64Value': '10' } ] } ] } ] }" https://servicecontrol.googleapis.com/v1/services/library.appspot.com:report Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The metrics to be used . metrics : - name : library . appspot . com / books / borrowed metric kind : DELTA value type : INT64 unit : '1' The billing configuration . billing : consumer destinations : - monitored resource : library . appspot . com / branch metrics : - library . appspot . com / books / borrowed Reporting billing metrics Once you have configured monitoring in the service configuration and pushed the service configuration using the Service Management API, you can call the Service Control API to report metrics.

### "Getting Started with the Service Control API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- Source ID: `site-docs-root`
- Final score: 270
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
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To invoke the Service Control API for a managed service , the caller must have the following Identity and Access Management (IAM) permissions on the service: services.check requires permission servicemanagement.services.check . services.report requires permission servicemanagement.services.report . services.allocateQuota requires permission servicemanagement.services.quota .
- Otherwise, for example, if the service producer project runs out of quota for sending requests to the Service Control API, multiple managed services will be impacted.
- For example, you can grant the roles to a service account, such as foo@developer.gserviceaccount.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member serviceAccount: SERVICE ACCOUNT --role roles/servicemanagement.serviceController Similarly, you can grant the roles to a user account, such as bar@gmail.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member user: USER ACCOUNT --role roles/servicemanagement.serviceController Grant a role at the service level You can grant the role roles/servicemanagement.serviceController at the service level using curl .
- The following example uses the gcurl alias defined in the Test with curl section of the Getting started guide: gcurl -d "{ 'policy': { 'bindings': [ { role: 'roles/servicemanagement.serviceController', members: 'serviceAccount: SERVICE ACCOUNT ' } ] } }" https://servicemanagement.googleapis.com/v1/services/ YOUR SERVICE NAME /consumers/ CONSUMER PROJECT NUMBER :setIamPolicy Please note the above example will replace all existing consumer project level IAM policies.

### "Getting Started with the Service Networking API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-networking/getting-started)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Once the service account gets provisioned, it is visible in the format service-{project number}@service-networking.iam.gserviceaccount.com and is added with roles/servicenetworking.serviceAgent policy binding on the consumer project.
- This means that unless we do not have a resource (for example: configuration of Private Google Access) configured which calls the API, we won't see the service account getting created.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Enable the API gcloud Activate the Service Networking API: gcloud services enable servicenetworking.googleapis.com \ --project= PROJECT ID Replace PROJECT ID with the Google Cloud project ID of your private services management project.

