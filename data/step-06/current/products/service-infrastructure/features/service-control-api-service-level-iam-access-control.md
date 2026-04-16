---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.039Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Control API service-level IAM access control"
feature_slug: "service-control-api-service-level-iam-access-control"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started"
  - "https://docs.cloud.google.com/service-infrastructure/docs/audit-logging-service-control"
keywords:
  - "control"
  - "api"
  - "level"
  - "iam"
  - "access"
  - "the"
  - "now"
  - "supports"
---

# Service Control API service-level IAM access control

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The Service Control API now supports service-level IAM access control for managing permissions at the service scope.

## Extended Definition

The Service Control API now supports service-level IAM access control for managing permissions at the service scope.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- [https://docs.cloud.google.com/service-infrastructure/docs/audit-logging-service-control](https://docs.cloud.google.com/service-infrastructure/docs/audit-logging-service-control)

## Supporting Pages

### "Service Control API Access Control \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-control/access-control)
- Source ID: `site-iam-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example uses the gcurl alias defined in the Test with curl section of the Getting started guide: gcurl -d "{ 'policy': { 'bindings': [ { role: 'roles/servicemanagement.serviceController', members: 'serviceAccount: SERVICE ACCOUNT ' } ] } }" https://servicemanagement.googleapis.com/v1/services/ YOUR SERVICE NAME /consumers/ CONSUMER PROJECT NUMBER :setIamPolicy Please note the above example will replace all existing consumer project level IAM policies.
- The following example uses the gcurl alias defined in the Test with curl section of the Getting started guide: gcurl -d "{ 'policy': { 'bindings': [ { role: 'roles/servicemanagement.serviceController', members: 'serviceAccount: SERVICE ACCOUNT ' } ] } }" https://servicemanagement.googleapis.com/v1/services/ YOUR SERVICE NAME :setIamPolicy Please note the above example will replace all existing service level IAM policies.
- To invoke the Service Control API for a managed service , the caller must have the following Identity and Access Management (IAM) permissions on the service: services.check requires permission servicemanagement.services.check . services.report requires permission servicemanagement.services.report . services.allocateQuota requires permission servicemanagement.services.quota .
- For example, you can grant the roles to a service account, such as foo@developer.gserviceaccount.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member serviceAccount: SERVICE ACCOUNT --role roles/servicemanagement.serviceController Similarly, you can grant the roles to a user account, such as bar@gmail.com : gcloud projects add-iam-policy-binding PRODUCER PROJECT ID --member user: USER ACCOUNT --role roles/servicemanagement.serviceController Grant a role at the service level You can grant the role roles/servicemanagement.serviceController at the service level using curl .

### "Service Management API Access Control \_|\_ Service Infrastructure \_|\_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control](https://docs.cloud.google.com/service-infrastructure/docs/service-management/access-control)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Show the IAM policy of service "endpointsapis.appspot.com" . gcloud endpoints services get - iam - policy endpointsapis . appspot . com The above command may produce an output similar to this : bindings : - members : - user : email1 @gmail . com - group : group1 @googlegroups . com role : roles / servicemanagement . serviceConsumer Add a user to "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services add - iam - policy - binding endpointsapis . appspot . com --member "user:email1@gmail.com" --role "roles/servicemanagement.serviceConsumer" Add a group to "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services add - iam - policy - binding endpointsapis . appspot . com --member "group:group1@googlegroups.com" --role "roles/servicemanagement.serviceConsumer" Remove a user from "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services remove - iam - policy - binding endpointsapis . appspot . com --member "user:email1@gmail.com" --role "roles/servicemanagement.serviceConsumer" Remove a group from "roles/servicemanagement.serviceConsumer" role . gcloud endpoints services remove - iam - policy - binding endpointsapis . appspot . com --member "group:group1@googlegroups.com" --role "roles/servicemanagement.serviceConsumer" Managing access using the Service Management API The Service Management API includes the IAM Policy API for managing service-level and consumer-level policies.
- The Service Management API uses Identity and Access Management (Cloud IAM) to control access to managed services and their child resources.
- This page explains the IAM resources, roles, and permissions provided by the Service Management API, and how to use them to control access.
- The following table lists the permissions that apply to services: Permission Description servicemanagement.services.delete Delete services. servicemanagement.services.get Read services. servicemanagement.services.create Create new services in projects. servicemanagement.services.list List services in projects. servicemanagement.services.update Update services. servicemanagement.services.bind View and enable the service on projects the caller controls. servicemanagement.services.setIamPolicy Set IAM access policy for services. servicemanagement.services.getIamPolicy Read IAM access policy for services. servicemanagement.services.check Check service consumer status.

### "Getting Started with the Service Control API \_|\_ Service Infrastructure\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started](https://docs.cloud.google.com/service-infrastructure/docs/service-control/getting-started)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Test with curl First, define a convenient shell alias for calling Google REST APIs: alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" ' The following shell command sequence demonstrates the incremental steps to call the Service Control API.
- Enable the Service Control API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the Service Control API: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Call with invalid request. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime": "2016-06-12T22:00:15Z", "operationName": "google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "checkErrors": [ { "code": "SERVICE NOT ACTIVATED", "detail": "Service 'endpointsapis.appspot.com' is not enabled for consumer 'project:endpointsapis-consumer'." } ] } Successful call to "services.check" method after the API is enabled for the project. $ gcurl -d '{ "operation": { "operationId": "123e4567-e89b-12d3-a456-426655440000", "consumerId": "project:endpointsapis-consumer", "startTime":"2016-07-31T05:20:00Z", "operationName":"google.example.hello.v1.HelloService.GetHello" } }' https://servicecontrol.googleapis.com/v1/services/endpointsapis.appspot.com:check { "operationId": "123e4567-e89b-12d3-a456-426655440000" } After you have completed the preceding steps: You have a functional local test setup that you can use to call any Google Cloud Platform APIs.

### "Service Control audit logging \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/audit-logging-service-control](https://docs.cloud.google.com/service-infrastructure/docs/audit-logging-service-control)
- Source ID: `site-iam-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Service Control. google.api.servicecontrol.v1.QuotaController The following audit logs are associated with methods belonging to google.api.servicecontrol.v1.QuotaController .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Service Control audit logs use the service name servicecontrol.googleapis.com .
- Permission type Methods OTHER google.api.servicecontrol.v1.QuotaController.AllocateQuota : To enable this log, enable DATA WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v1.ServiceController.Check : To enable this log, enable DATA WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v1.ServiceController.Report : To enable this log, enable DATA WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v2.ServiceController.Check : To enable this log, enable DATA WRITE under the service servicemanagement.googleapis.com . google.api.servicecontrol.v2.ServiceController.Report : To enable this log, enable DATA WRITE under the service servicemanagement.googleapis.com .
- Filter for this method : protoPayload.methodName="google.api.servicecontrol.v1.ServiceController.Check" Report Method : google.api.servicecontrol.v1.ServiceController.Report Audit log type : Data access Permissions : servicemanagement.services.report - DATA WRITE Method is a long-running or streaming operation : No.

