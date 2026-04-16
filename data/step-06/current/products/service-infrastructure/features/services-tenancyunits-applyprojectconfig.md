---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.033Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "services.tenancyUnits.applyProjectConfig"
feature_slug: "services-tenancyunits-applyprojectconfig"
latest_feature_date: "2019-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject"
  - "https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest"
keywords:
  - "services"
  - "tenancyunits"
  - "applyprojectconfig"
  - "the"
  - "method"
  - "applies"
  - "configuration"
  - "to"
---

# services.tenancyUnits.applyProjectConfig

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The applyProjectConfig method applies configuration to an existing tenant project; The tenancyUnits.applyProjectConfig method applies a configuration to an existing tenant project.

## Extended Definition

The applyProjectConfig method applies configuration to an existing tenant project; The tenancyUnits.applyProjectConfig method applies a configuration to an existing tenant project.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)
- [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)

## Supporting Pages

### "Method: services.tenancyUnits.addProject \_|\_ Service Infrastructure \_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Service Infrastructure Reference Send feedback Method: services.tenancyUnits.addProject Stay organized with collections Save and categorize content based on your preferences.
- If there are previously failed tenancyUnits.addProject calls, you might need to call tenancyUnits.removeProject first to resolve them before you can make another call to tenancyUnits.addProject with the same tag.
- HTTP request POST https://serviceconsumermanagement.googleapis.com/v1/{parent=services/ / / /tenancyUnits/ }:addProject The URL uses gRPC Transcoding syntax.
- Required. projectConfig object ( TenantProjectConfig ) Configuration of the new tenant project to be added to tenancy unit resources.

### Managing Tenancy Units \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units)
- Source ID: `site-iam-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to apply a different configuration, for example to add new managed services, you can call the services.tenancyUnits.applyProjectConfig method.
- You should use the services.tenancyUnits.removeProject method to delete a tenant project and all resources in it: POST https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef:removeProject Delete a tenancy unit After you have deleted all tenant projects in a tenancy unit, or all of them are in the DELETED state, you can delete the tenancy unit using the services.tenancyUnits.delete method : DELETE https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To add a new tenant project to the tenancy unit created in the previous step, use the services.tenancyUnits.addProject method : POST https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef:addProject with the following data: { "tag" : "tag1" , "project config" :{ "folder" : "folders/9876543210" , "tenant project policy" :{ "policy bindings" :{ "role" : "roles/owner" , "members" : "user:bob@example.com" }} , "billing config" :{ "billing account" : "billingAccounts/123456-472F22-28F9AA" }}} The tag value is an identifier you provide for the project within the tenancy unit: this can be anything you like (here it's tag1 ), such as a region, a consumer network, or just a string ID.
- Searching your tenancy units Find a tenancy unit for a service consumer To find a tenancy unit for a particular service consumer, use the services.tenancyUnits.list method , specifying their service consumer project number: GET https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits Search tenancy units You can use the services.search method to search for tenancy units defined for your service.

### "REST Resource: services.tenancyUnits \_|\_ Service Infrastructure \_|\_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods addProject Add a new tenant project to the tenancy unit. applyProjectConfig Apply a configuration to an existing tenant project. attachProject Attach an existing project to the tenancy unit as a new tenant resource. create Creates a tenancy unit with no tenant resources. delete Delete a tenancy unit. deleteProject Deletes the specified project resource identified by a tenant resource tag. list Find the tenancy unit for a managed service and service consumer. removeProject Removes the specified project resource identified by a tenant resource tag. undeleteProject Attempts to undelete a previously deleted tenant project.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
- JSON representation { "name" : string , "service" : string , "consumer" : string , "createTime" : string , "tenantResources" : [ { object ( TenantResource ) } ] } Fields name string Globally unique identifier of this tenancy unit "services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}" service string Output only.
- Home Documentation Application development Service Infrastructure Reference Send feedback REST Resource: services.tenancyUnits Stay organized with collections Save and categorize content based on your preferences.

### "Service Consumer Management API \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)
- Source ID: `site-api-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.services.tenancyUnits Methods addProject POST /v1/{parent=services/ / / /tenancyUnits/ }:addProject Add a new tenant project to the tenancy unit. applyProjectConfig POST /v1/{name=services/ / / /tenancyUnits/ }:applyProjectConfig Apply a configuration to an existing tenant project. attachProject POST /v1/{name=services/ / / /tenancyUnits/ }:attachProject Attach an existing project to the tenancy unit as a new tenant resource. create POST /v1/{parent=services/ / / }/tenancyUnits Creates a tenancy unit with no tenant resources. delete DELETE /v1/{name=services/ / / /tenancyUnits/ } Delete a tenancy unit. deleteProject POST /v1/{name=services/ / / /tenancyUnits/ }:deleteProject Deletes the specified project resource identified by a tenant resource tag. list GET /v1/{parent=services/ / / }/tenancyUnits Find the tenancy unit for a managed service and service consumer. removeProject POST /v1/{name=services/ / / /tenancyUnits/ }:removeProject Removes the specified project resource identified by a tenant resource tag. undeleteProject POST /v1/{name=services/ / / /tenancyUnits/ }:undeleteProject Attempts to undelete a previously deleted tenant project.
- REST Resource: v1beta1.services.consumerQuotaMetrics Methods get GET /v1beta1/{name=services/ / / /consumerQuotaMetrics/ } Retrieves a summary of quota information for a specific quota metric. importProducerOverrides POST /v1beta1/{parent=services/ / / }/consumerQuotaMetrics:importProducerOverrides Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. list GET /v1beta1/{parent=services/ / / }/consumerQuotaMetrics Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://serviceconsumermanagement.googleapis.com REST Resource: v1.operations Methods cancel POST /v1/{name=operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/{name=operations/ } Deletes a long-running operation. get GET /v1/{name=operations/ } Gets the latest state of a long-running operation. list GET /v1/{name} Lists operations that match the specified filter in the request.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://serviceconsumermanagement.googleapis.com REST Resource: v1beta1.operations Methods get GET /v1beta1/{name=operations/ } Gets the latest state of a long-running operation.

