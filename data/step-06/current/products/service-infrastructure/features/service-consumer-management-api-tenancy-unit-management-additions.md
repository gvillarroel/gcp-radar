---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.033Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "Service Consumer Management API tenancy unit management additions"
feature_slug: "service-consumer-management-api-tenancy-unit-management-additions"
latest_feature_date: "2019-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest"
  - "https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject"
keywords:
  - "consumer"
  - "management"
  - "api"
  - "tenancy"
  - "unit"
  - "additions"
  - "the"
  - "introduced"
---

# Service Consumer Management API tenancy unit management additions

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The Service Consumer Management API introduced new capabilities for managing tenancy units.

## Extended Definition

The Service Consumer Management API introduced new capabilities for managing tenancy units.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)
- [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)

## Supporting Pages

### "Service Consumer Management API \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)
- Source ID: `site-api-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.operations REST Resource: v1beta1.services.consumerQuotaMetrics REST Resource: v1beta1.services.consumerQuotaMetrics.limits REST Resource: v1beta1.services.consumerQuotaMetrics.limits.producerOverrides REST Resource: v1.operations REST Resource: v1.services REST Resource: v1.services.tenancyUnits Service: serviceconsumermanagement.googleapis.com We recommend that you call this service using Google-provided client libraries .
- REST Resource: v1.services.tenancyUnits Methods addProject POST /v1/{parent=services/ / / /tenancyUnits/ }:addProject Add a new tenant project to the tenancy unit. applyProjectConfig POST /v1/{name=services/ / / /tenancyUnits/ }:applyProjectConfig Apply a configuration to an existing tenant project. attachProject POST /v1/{name=services/ / / /tenancyUnits/ }:attachProject Attach an existing project to the tenancy unit as a new tenant resource. create POST /v1/{parent=services/ / / }/tenancyUnits Creates a tenancy unit with no tenant resources. delete DELETE /v1/{name=services/ / / /tenancyUnits/ } Delete a tenancy unit. deleteProject POST /v1/{name=services/ / / /tenancyUnits/ }:deleteProject Deletes the specified project resource identified by a tenant resource tag. list GET /v1/{parent=services/ / / }/tenancyUnits Find the tenancy unit for a managed service and service consumer. removeProject POST /v1/{name=services/ / / /tenancyUnits/ }:removeProject Removes the specified project resource identified by a tenant resource tag. undeleteProject POST /v1/{name=services/ / / /tenancyUnits/ }:undeleteProject Attempts to undelete a previously deleted tenant project.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://serviceconsumermanagement.googleapis.com REST Resource: v1.operations Methods cancel POST /v1/{name=operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/{name=operations/ } Deletes a long-running operation. get GET /v1/{name=operations/ } Gets the latest state of a long-running operation. list GET /v1/{name} Lists operations that match the specified filter in the request.
- This service provides the following discovery documents: https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1 https://serviceconsumermanagement.googleapis.com/$discovery/rest?version=v1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.

### Managing Tenancy Units \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenancy-units)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should use the services.tenancyUnits.removeProject method to delete a tenant project and all resources in it: POST https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef:removeProject Delete a tenancy unit After you have deleted all tenant projects in a tenancy unit, or all of them are in the DELETED state, you can delete the tenancy unit using the services.tenancyUnits.delete method : DELETE https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To add a new tenant project to the tenancy unit created in the previous step, use the services.tenancyUnits.addProject method : POST https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef:addProject with the following data: { "tag" : "tag1" , "project config" :{ "folder" : "folders/9876543210" , "tenant project policy" :{ "policy bindings" :{ "role" : "roles/owner" , "members" : "user:bob@example.com" }} , "billing config" :{ "billing account" : "billingAccounts/123456-472F22-28F9AA" }}} The tag value is an identifier you provide for the project within the tenancy unit: this can be anything you like (here it's tag1 ), such as a region, a consumer network, or just a string ID.
- Searching your tenancy units Find a tenancy unit for a service consumer To find a tenancy unit for a particular service consumer, use the services.tenancyUnits.list method , specifying their service consumer project number: GET https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits Search tenancy units You can use the services.search method to search for tenancy units defined for your service.
- For example, the following query will return all units that contain a project with the tag 'tag1': GET https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com:search?query=tenant resources.tag=tag1 Cleaning up tenancy units When a service consumer stops using your service, you need to remove its tenancy unit to free up resources and ensure the user data is deleted.

### "REST Resource: services.tenancyUnits \_|\_ Service Infrastructure \_|\_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)
- Source ID: `site-api-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods addProject Add a new tenant project to the tenancy unit. applyProjectConfig Apply a configuration to an existing tenant project. attachProject Attach an existing project to the tenancy unit as a new tenant resource. create Creates a tenancy unit with no tenant resources. delete Delete a tenancy unit. deleteProject Deletes the specified project resource identified by a tenant resource tag. list Find the tenancy unit for a managed service and service consumer. removeProject Removes the specified project resource identified by a tenant resource tag. undeleteProject Attempts to undelete a previously deleted tenant project.
- For example 'serviceconsumermanagement.googleapis.com'. consumer string Cloud resource name of the consumer of this service.
- Google Cloud API name of the managed service owning this tenancy unit.
- JSON representation { "name" : string , "service" : string , "consumer" : string , "createTime" : string , "tenantResources" : [ { object ( TenantResource ) } ] } Fields name string Globally unique identifier of this tenancy unit "services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}" service string Output only.

### "Method: services.tenancyUnits.addProject \_|\_ Service Infrastructure \_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP request POST https://serviceconsumermanagement.googleapis.com/v1/{parent=services/ / / /tenancyUnits/ }:addProject The URL uses gRPC Transcoding syntax.
- Authorization requires the following Google IAM permission on the specified resource parent : serviceconsumermanagement.tenancyu.addResource Request body The request body contains data with the following structure: JSON representation { "tag" : string , "projectConfig" : { object ( TenantProjectConfig ) } } Fields tag string Tag of the added project.
- If there are previously failed tenancyUnits.addProject calls, you might need to call tenancyUnits.removeProject first to resolve them before you can make another call to tenancyUnits.addProject with the same tag.
- Required. projectConfig object ( TenantProjectConfig ) Configuration of the new tenant project to be added to tenancy unit resources.

