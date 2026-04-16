---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.173Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "KeyValueMap entry update API"
feature_slug: "keyvaluemap-entry-update-api"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub"
  - "https://docs.cloud.google.com/apigee/docs/apihub/apis-intro"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies"
keywords:
  - "keyvaluemap"
  - "entries"
  - "operations"
  - "update"
  - "entry"
  - "apis"
---

# KeyValueMap entry update API

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee APIs support update operations for KeyValueMap entries.

## Extended Definition

Apigee APIs support update operations for KeyValueMap entries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)

## Supporting Pages

### API resources overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- Source ID: `site-docs-reference-2`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- How API resources are added to API hub API resources can be added or registered in API hub in the following ways: Auto-registration while attaching runtime projects : When you attach a runtime project to API hub, all APIs in the runtime project are automatically registered as API resources in API hub.
- When you use auto-registration by attaching a Google Cloud runtime project, API hub automatically creates a plugin instance in the background for that specific gateway service to ingest metadata and register your APIs as API resources.
- API hub supports various specification types, including: OpenAPI for REST APIs gRPC proto files for gRPC APIs MCP schema for Model Context Protocol (MCP) APIs For more information about specifications, see Specifications overview .

### Audit logging for API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub](https://docs.cloud.google.com/apigee/docs/apihub/audit-logging-apihub)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.apihub.v1.ApiHubPlugin.GetPlugin google.cloud.apihub.v1.Provisioning.LookupApiHubInstance google.cloud.apihub.v1.RuntimeProjectAttachmentService.ListRuntimeProjectAttachments google.cloud.apihub.v1.RuntimeProjectAttachmentService.LookupRuntimeProjectAttachment ADMIN WRITE google.cloud.apihub.v1.ApiHubPlugin.DisablePlugin google.cloud.apihub.v1.ApiHubPlugin.EnablePlugin google.cloud.apihub.v1.HostProjectRegistrationService.CreateHostProjectRegistration google.cloud.apihub.v1.Provisioning.CreateApiHubInstance (LRO) google.cloud.apihub.v1.RuntimeProjectAttachmentService.CreateRuntimeProjectAttachment DATA READ google.cloud.apihub.v1.ApiHub.GetApi google.cloud.apihub.v1.ApiHub.GetAttribute google.cloud.apihub.v1.ApiHub.GetDeployment google.cloud.apihub.v1.ApiHub.GetExternalApi google.cloud.apihub.v1.ApiHub.GetSpec google.cloud.apihub.v1.ApiHub.GetSpecContents google.cloud.apihub.v1.ApiHub.GetVersion google.cloud.apihub.v1.ApiHub.ListApis google.cloud.apihub.v1.ApiHub.ListAttributes google.cloud.apihub.v1.ApiHub.ListDeployments google.cloud.apihub.v1.ApiHub.ListExternalApis google.cloud.apihub.v1.ApiHub.ListSpecs google.cloud.apihub.v1.ApiHub.ListVersions DATA WRITE google.cloud.apihub.v1.ApiHub.CreateApi google.cloud.apihub.v1.ApiHub.CreateAttribute google.cloud.apihub.v1.ApiHub.CreateDeployment google.cloud.apihub.v1.ApiHub.CreateExternalApi google.cloud.apihub.v1.ApiHub.CreateSpec google.cloud.apihub.v1.ApiHub.CreateVersion google.cloud.apihub.v1.ApiHub.DeleteApi google.cloud.apihub.v1.ApiHub.DeleteAttribute google.cloud.apihub.v1.ApiHub.DeleteDeployment google.cloud.apihub.v1.ApiHub.DeleteExternalApi google.cloud.apihub.v1.ApiHub.DeleteSpec google.cloud.apihub.v1.ApiHub.DeleteVersion google.cloud.apihub.v1.ApiHub.UpdateApi google.cloud.apihub.v1.ApiHub.UpdateAttribute google.cloud.apihub.v1.ApiHub.UpdateDeployment google.cloud.apihub.v1.ApiHub.UpdateExternalApi google.cloud.apihub.v1.ApiHub.UpdateSpec google.cloud.apihub.v1.ApiHub.UpdateVersion API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for API hub. google.cloud.apihub.v1.ApiHub The following audit logs are associated with methods belonging to google.cloud.apihub.v1.ApiHub .
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.ApiHub.UpdateDeployment" UpdateExternalApi Method : google.cloud.apihub.v1.ApiHub.UpdateExternalApi Audit log type : Data access Permissions : apihub.externalApis.update - DATA WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.apihub.v1.ApiHub.ListVersions" UpdateApi Method : google.cloud.apihub.v1.ApiHub.UpdateApi Audit log type : Data access Permissions : apihub.apis.update - DATA WRITE Method is a long-running or streaming operation : No.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name API hub audit logs use the service name apihub.googleapis.com .

### Understanding APIs and API proxies \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/understanding-apis-and-api-proxies)
- Source ID: `site-docs-reference-required-3`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- By defining stable, simplified entry points to application logic and data, APIs enable developers to easily access and reuse application logic built by other developers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Home Documentation Application development Apigee Guides Send feedback Understanding APIs and API proxies Stay organized with collections Save and categorize content based on your preferences.
- Apigee also enables you to build APIs by implementing applications hosted on the API Services platform—with no backend service involved.

