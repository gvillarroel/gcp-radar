---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:48.035Z"
product_name: "Service Infrastructure"
product_slug: "service-infrastructure"
feature_name: "TenantProjectConfig"
feature_slug: "tenantprojectconfig"
latest_feature_date: "2019-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/TenantProjectConfig"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject"
  - "https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects"
  - "https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits"
keywords:
  - "tenantprojectconfig"
  - "introduces"
  - "the"
  - "resource"
  - "for"
  - "defining"
  - "tenant"
  - "project"
---

# TenantProjectConfig

Product: Service Infrastructure
Coverage: MEDIUM

## Step 02 Summary

Introduces the TenantProjectConfig resource for defining a tenant project and its initial configuration and properties within a tenancy unit; TenantProjectConfig enables adding a tenant project to a specified tenancy unit with initial configuration and properties.

## Extended Definition

Introduces the TenantProjectConfig resource for defining a tenant project and its initial configuration and properties within a tenancy unit; TenantProjectConfig enables adding a tenant project to a specified tenancy unit with initial configuration and properties.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/TenantProjectConfig](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/TenantProjectConfig)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)
- [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects)
- [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)

## Supporting Pages

### TenantProjectConfig \_|\_ Service Infrastructure \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/TenantProjectConfig](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/TenantProjectConfig)
- Source ID: `site-api-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Valid folder resource names have the format folders/{folder number} (for example, folders/123456 ). tenantProjectPolicy object ( TenantProjectPolicy ) Describes ownership and policies for the new tenant project.
- JSON representation { "folder" : string , "tenantProjectPolicy" : { object ( TenantProjectPolicy ) } , "labels" : { string : string , ... } , "services" : [ string ] , "billingConfig" : { object ( BillingConfig ) } , "serviceAccountConfig" : { object ( ServiceAccountConfig ) } } Fields folder string Folder where project in this tenancy unit must be located This folder must have been previously created with the required permissions for the caller to create and configure a project in it.
- The ID must be 6-30 characters long, and match the following regular expression: a-z . tenantProjectRoles[] string Roles for the associated service account for the tenant project.
- The billing account must be specified. serviceAccountConfig object ( ServiceAccountConfig ) Configuration for the IAM service account on the tenant project.

### "Method: services.tenancyUnits.addProject \_|\_ Service Infrastructure \_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits/addProject)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following Google IAM permission on the specified resource parent : serviceconsumermanagement.tenancyu.addResource Request body The request body contains data with the following structure: JSON representation { "tag" : string , "projectConfig" : { object ( TenantProjectConfig ) } } Fields tag string Tag of the added project.
- Required. projectConfig object ( TenantProjectConfig ) Configuration of the new tenant project to be added to tenancy unit resources.
- If there are previously failed tenancyUnits.addProject calls, you might need to call tenancyUnits.removeProject first to resolve them before you can make another call to tenancyUnits.addProject with the same tag.
- There can be a maximum of 512 tenant projects in a tenancy unit.

### "Managing Tenant Projects \_|\_ Service Infrastructure \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects](https://docs.cloud.google.com/service-infrastructure/docs/manage-tenant-projects)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing a tenant project To remove a tenant project with the tag abc , call the services.tenancyUnits.removeProject method as illustrated by the following example: POST https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef:removeProject The call includes the following data: { "tag" : "abc" } This operation removes the project lien, deletes the project and all resources in it, and deletes any associated metadata from the tenancy unit.
- You use the Service Consumer Management API to create and configure tenant projects, Google Cloud projects that are used to host your managed service resources dedicated to a single service consumer .
- The following example adds a new tenant project with the tag tag1 to a tenancy unit using the REST API: POST https://serviceconsumermanagement.googleapis.com/v1/services/your-service.example.com/projects/12345678901/tenancyUnits/absdef:addProject The call includes the following data: { "tag" : "tag1" , "project config" :{ "folder" : "folders/9876543210" , "tenant project policy" :{ "policy bindings" :{ "role" : "roles/owner" , "members" : "user:bob@example.com" }}, "billing config" :{ "billing account" : "billingAccounts/123456-472F22-28F9AA" }}} This call returns a long running operation that you can query to confirm the project creation was successful.
- A tenancy unit can contain multiple tenant projects, each assigned a tag: string identifier that you can use to indicate the purpose of the project and to refer to it when deprovisioning.

### "REST Resource: services.tenancyUnits \_|\_ Service Infrastructure \_|\_\

- URL: [https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits](https://docs.cloud.google.com/service-infrastructure/docs/service-consumer-management/reference/rest/v1/services.tenancyUnits)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Methods addProject Add a new tenant project to the tenancy unit. applyProjectConfig Apply a configuration to an existing tenant project. attachProject Attach an existing project to the tenancy unit as a new tenant resource. create Creates a tenancy unit with no tenant resources. delete Delete a tenancy unit. deleteProject Deletes the specified project resource identified by a tenant resource tag. list Find the tenancy unit for a managed service and service consumer. removeProject Removes the specified project resource identified by a tenant resource tag. undeleteProject Attempts to undelete a previously deleted tenant project.
- JSON representation { "tag" : string , "resource" : string , "status" : enum ( Status ) } Fields tag string Unique per single tenancy unit. resource string Identifier of the tenant resource.
- Any value specified here in a request is ignored. tenantResources[] object ( TenantResource ) Resources constituting the tenancy unit.
- For example 'serviceconsumermanagement.googleapis.com'. consumer string Cloud resource name of the consumer of this service.

