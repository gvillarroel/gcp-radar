---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.034Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "services.tenancyUnits.deleteProject"
feature_slug: "services-tenancyunits-deleteproject"
latest_feature_date: "2019-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest"
keywords:
  - "services"
  - "tenancyunits"
  - "deleteproject"
  - "the"
  - "method"
  - "removes"
  - "specified"
  - "project"
---

# services.tenancyUnits.deleteProject

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

The deleteProject method removes the specified project resource identified by a tenant resource tag.

## Extended Definition

The deleteProject method removes the specified project resource identified by a tenant resource tag.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)

## Supporting Pages

### "Managing Tenant Projects \_|\_ Service Infrastructure \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing a tenant project To remove a tenant project with the tag abc , call the services.tenancyUnits.removeProject method as illustrated by the following example: POST https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef:removeProject The call includes the following data: { "tag" : "abc" } This operation removes the project lien, deletes the project and all resources in it, and deletes any associated metadata from the tenancy unit.
- If you wish to delete the project, but keep a record of it, call the services.tenancyUnits.deleteProject method instead.
- To undelete a deleted project, call the services.tenancyUnits.undeleteProject method.
- Creating a tenant project To create a tenant project and add it to a tenancy unit, call the services.tenancyUnits.addProject method.

### "Method: services.tenancyUnits.addProject \_|\_ Service Infrastructure \_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application development Service Infrastructure Reference Send feedback Method: services.tenancyUnits.addProject Stay organized with collections Save and categorize content based on your preferences.
- HTTP request POST https://serviceconsumermanagement.googleapis.com/v1/{parent=services/ / / /tenancyUnits/ }:addProject The URL uses gRPC Transcoding syntax.
- Authorization requires the following Google IAM permission on the specified resource parent : serviceconsumermanagement.tenancyu.addResource Request body The request body contains data with the following structure: JSON representation { "tag" : string , "projectConfig" : { object ( TenantProjectConfig ) } } Fields tag string Tag of the added project.
- If there are previously failed tenancyUnits.addProject calls, you might need to call tenancyUnits.removeProject first to resolve them before you can make another call to tenancyUnits.addProject with the same tag.

### "REST Resource: services.tenancyUnits \_|\_ Service Infrastructure \_|\_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)
- Source ID: `site-api-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods addProject Add a new tenant project to the tenancy unit. applyProjectConfig Apply a configuration to an existing tenant project. attachProject Attach an existing project to the tenancy unit as a new tenant resource. create Creates a tenancy unit with no tenant resources. delete Delete a tenancy unit. deleteProject Deletes the specified project resource identified by a tenant resource tag. list Find the tenancy unit for a managed service and service consumer. removeProject Removes the specified project resource identified by a tenant resource tag. undeleteProject Attempts to undelete a previously deleted tenant project.
- JSON representation { "name" : string , "service" : string , "consumer" : string , "createTime" : string , "tenantResources" : [ { object ( TenantResource ) } ] } Fields name string Globally unique identifier of this tenancy unit "services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}" service string Output only.
- Home Documentation Application development Service Infrastructure Reference Send feedback REST Resource: services.tenancyUnits Stay organized with collections Save and categorize content based on your preferences.
- Any value specified here in a request is ignored. tenantResources[] object ( TenantResource ) Resources constituting the tenancy unit.

### "Service Consumer Management API \_|\_ Service Infrastructure \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest)
- Source ID: `site-api-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.services.tenancyUnits Methods addProject POST /v1/{parent=services/ / / /tenancyUnits/ }:addProject Add a new tenant project to the tenancy unit. applyProjectConfig POST /v1/{name=services/ / / /tenancyUnits/ }:applyProjectConfig Apply a configuration to an existing tenant project. attachProject POST /v1/{name=services/ / / /tenancyUnits/ }:attachProject Attach an existing project to the tenancy unit as a new tenant resource. create POST /v1/{parent=services/ / / }/tenancyUnits Creates a tenancy unit with no tenant resources. delete DELETE /v1/{name=services/ / / /tenancyUnits/ } Delete a tenancy unit. deleteProject POST /v1/{name=services/ / / /tenancyUnits/ }:deleteProject Deletes the specified project resource identified by a tenant resource tag. list GET /v1/{parent=services/ / / }/tenancyUnits Find the tenancy unit for a managed service and service consumer. removeProject POST /v1/{name=services/ / / /tenancyUnits/ }:removeProject Removes the specified project resource identified by a tenant resource tag. undeleteProject POST /v1/{name=services/ / / /tenancyUnits/ }:undeleteProject Attempts to undelete a previously deleted tenant project.
- REST Resource: v1beta1.services.consumerQuotaMetrics Methods get GET /v1beta1/{name=services/ / / /consumerQuotaMetrics/ } Retrieves a summary of quota information for a specific quota metric. importProducerOverrides POST /v1beta1/{parent=services/ / / }/consumerQuotaMetrics:importProducerOverrides Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. list GET /v1beta1/{parent=services/ / / }/consumerQuotaMetrics Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://serviceconsumermanagement.googleapis.com REST Resource: v1.operations Methods cancel POST /v1/{name=operations/ }:cancel Starts asynchronous cancellation on a long-running operation. delete DELETE /v1/{name=operations/ } Deletes a long-running operation. get GET /v1/{name=operations/ } Gets the latest state of a long-running operation. list GET /v1/{name} Lists operations that match the specified filter in the request.
- REST Resource: v1beta1.services.consumerQuotaMetrics.limits.producerOverrides Methods create POST /v1beta1/{parent=services/ / / /consumerQuotaMetrics/ /limits/ }/producerOverrides Creates a producer override. delete DELETE /v1beta1/{name=services/ / / /consumerQuotaMetrics/ /limits/ /producerOverrides/ } Deletes a producer override. list GET /v1beta1/{parent=services/ / / /consumerQuotaMetrics/ /limits/ }/producerOverrides Lists all producer overrides on this limit. patch PATCH /v1beta1/{name=services/ / / /consumerQuotaMetrics/ /limits/ /producerOverrides/ } Updates a producer override.

