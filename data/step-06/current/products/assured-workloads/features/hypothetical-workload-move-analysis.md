---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:31.058Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Hypothetical workload move analysis"
feature_slug: "hypothetical-workload-move-analysis"
latest_feature_date: "2022-09-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/migrate-workload"
  - "https://docs.cloud.google.com/assured-workloads/docs/reference/rest"
  - "https://docs.cloud.google.com/assured-workloads/docs/audit-logging"
keywords:
  - "hypothetical"
  - "workload"
  - "move"
  - "analysis"
  - "assured"
  - "workloads"
  - "can"
  - "analyze"
---

# Hypothetical workload move analysis

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

Assured Workloads can analyze a hypothetical move from a project or project-based workload to a folder-based workload for compatibility issues.

## Extended Definition

Assured Workloads can analyze a hypothetical move from a project or project-based workload to a folder-based workload for compatibility issues.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/migrate-workload](https://docs.cloud.google.com/assured-workloads/docs/migrate-workload)
- [https://docs.cloud.google.com/assured-workloads/docs/reference/rest](https://docs.cloud.google.com/assured-workloads/docs/reference/rest)
- [https://docs.cloud.google.com/assured-workloads/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/docs/audit-logging)

## Supporting Pages

### Migrate a workload \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/migrate-workload](https://docs.cloud.google.com/assured-workloads/docs/migrate-workload)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The expected allowed values are [us-west4, us-west1, us-west2, us-west3, us-central1, us-east1, us-east4, us-south1, us-central2, us-east5]." } ] } } ] } ], "nextPageToken" : "Ch8wLDc0MzY3NTExNCwzMzg4ODM1NTM2NDQ0NTg4MDMy" } To filter the findings by more than one asset type, add each as an additional query parameter: GET https://assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:analyzeWorkloadMove?project = projects/my-project-123 & asset types = cloudresourcemanager.googleapis.com/Project & asset types = serviceusage.googleapis.com/Service & page size = 5 & page token = CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA The results will only contain any findings of the specified types ( cloudresourcemanager.googleapis.com/Project and serviceusage.googleapis.com/Service ): { "assetMoveAnalyses" : [ { "asset" : "//serviceusage.googleapis.com/projects/130536381852/services/bigquerymigration.googleapis.com" , "assetType" : "serviceusage.googleapis.com/Service" , "analysisGroups" : [ { "displayName" : "DISALLOWED SERVICES" , "analysisResult" : { "warnings" : [ { "detail" : "This service is not allowed by the gcp.restrictServiceUsage org policy effective at the target" } ] } } ] }, { "asset" : "//cloudresourcemanager.googleapis.com/projects/my-project-123" , "assetType" : "cloudresourcemanager.googleapis.com/Project" , "analysisGroups" : [ { "displayName" : "ORG POLICIES" , "analysisResult" : { "warnings" : [ { "detail" : "constraints/gcp.resourceLocations: Target applies/inherits this custom policy and it is not applied by the source.
- For example: CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA HTTP method, URL, and query parameters: GET https:// [ ENDPOINT URI ] /v1/organizations/ [ DESTINATION ORGANIZATION ID ] /locations/ [ DESTINATION LOCATION ID ] /workloads/ [ DESTINATION WORKLOAD ID ] :analyzeWorkloadMove?project = projects/ SOURCE PROJECT ID &page size = PAGE SIZE &page token = PAGE TOKEN For example: GET https://us-west1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:analyzeWorkloadMove?project = projects/my-project-123&page size = 5&page token = CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA You should receive a JSON response similar to the following: { "assetMoveAnalyses" : [ { "asset" : "//orgpolicy.googleapis.com/projects/130536381852/policies/container.restrictNoncompliantDiagnosticDataAccess" , "assetType" : "orgpolicy.googleapis.com/Policy" }, { "asset" : "//compute.googleapis.com/projects/my-project-123/global/routes/default-route-9ca6e6b0ab7326f0" , "assetType" : "compute.googleapis.com/Route" , "analysisGroups" : [ { "displayName" : "RESOURCE LOCATIONS" , "analysisResult" : { "warnings" : [ { "detail" : "The asset's location 'global' is incompatible with the gcp.resourceLocations org policy effective at the target.
- The expected denied values are [TLS VERSION 1, TLS VERSION 1 1]." } ] } } ] } ], "nextPageToken" : "Ch8wLDc0MzY3NTExNCwzMzg4ODM1NTM2NDQ0NTg4MDMy" } To filter the findings by a specific asset type, use the asset types query parameter: GET https://assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:analyzeWorkloadMove?project = projects/my-project-123 & asset types = cloudresourcemanager.googleapis.com/Project & page size = 5 & page token = CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA The results will only contain any findings of the specified type ( cloudresourcemanager.googleapis.com/Project ): { "assetMoveAnalyses" : [ { "asset" : "//cloudresourcemanager.googleapis.com/projects/my-project-123" , "assetType" : "cloudresourcemanager.googleapis.com/Project" , "analysisGroups" : [ { "displayName" : "ORG POLICIES" , "analysisResult" : { "warnings" : [ { "detail" : "constraints/gcp.resourceLocations: Target applies/inherits this custom policy and it is not applied by the source.
- Analyzing moving a project to an Assured Workloads folder The analyzeWorkloadMove method performs an analysis of moving the source project to the destination Assured Workloads folder.

### Assured Workloads API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/reference/rest](https://docs.cloud.google.com/assured-workloads/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1.organizations.locations.workloads Methods analyzeWorkloadMove GET /v1/{target=organizations/ /locations/ /workloads/ }:analyzeWorkloadMove Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. create POST /v1/{parent=organizations/ /locations/ }/workloads Creates Assured Workload. delete DELETE /v1/{name=organizations/ /locations/ /workloads/ } Deletes the workload. enableComplianceUpdates PUT /v1/{name=organizations/ /locations/ /workloads/ }:enableComplianceUpdates This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. enableResourceMonitoring POST /v1/{name=organizations/ /locations/ /workloads/ }:enableResourceMonitoring Enable resource violation monitoring for a workload. get GET /v1/{name=organizations/ /locations/ /workloads/ } Gets Assured Workload associated with a CRM Node list GET /v1/{parent=organizations/ /locations/ }/workloads Lists Assured Workloads under a CRM Node. mutatePartnerPermissions PATCH /v1/{name=organizations/ /locations/ /workloads/ }:mutatePartnerPermissions Update the permissions settings for an existing partner workload. patch PATCH /v1/{workload.name=organizations/ /locations/ /workloads/ } Updates an existing workload. restrictAllowedResources POST /v1/{name=organizations/ /locations/ /workloads/ }:restrictAllowedResources Restrict the list of resources allowed in the Workload environment.
- REST Resource: v1beta1.organizations.locations.workloads Methods analyzeWorkloadMove GET /v1beta1/{target=organizations/ /locations/ /workloads/ }:analyzeWorkloadMove Analyzes a hypothetical move of a source resource to a target workload to surface compliance risks. create POST /v1beta1/{parent=organizations/ /locations/ }/workloads Creates Assured Workload. delete DELETE /v1beta1/{name=organizations/ /locations/ /workloads/ } Deletes the workload. enableComplianceUpdates PUT /v1beta1/{name=organizations/ /locations/ /workloads/ }:enableComplianceUpdates This endpoint enables Assured Workloads service to offer compliance updates for the folder based assured workload. enableResourceMonitoring POST /v1beta1/{name=organizations/ /locations/ /workloads/ }:enableResourceMonitoring Enable resource violation monitoring for a workload. get GET /v1beta1/{name=organizations/ /locations/ /workloads/ } Gets Assured Workload associated with a CRM Node list GET /v1beta1/{parent=organizations/ /locations/ }/workloads Lists Assured Workloads under a CRM Node. patch PATCH /v1beta1/{workload.name=organizations/ /locations/ /workloads/ } Updates an existing workload. restrictAllowedResources POST /v1beta1/{name=organizations/ /locations/ /workloads/ }:restrictAllowedResources Restrict the list of resources allowed in the Workload environment.
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://us-central1-assuredworkloads.googleapis.com https://us-east1-assuredworkloads.googleapis.com https://us-east4-assuredworkloads.googleapis.com https://us-east5-assuredworkloads.googleapis.com https://us-east7-assuredworkloads.googleapis.com https://us-south1-assuredworkloads.googleapis.com https://us-west1-assuredworkloads.googleapis.com https://us-west2-assuredworkloads.googleapis.com https://us-west3-assuredworkloads.googleapis.com https://us-west4-assuredworkloads.googleapis.com https://europe-west1-assuredworkloads.googleapis.com https://europe-west2-assuredworkloads.googleapis.com https://europe-west3-assuredworkloads.googleapis.com https://europe-west4-assuredworkloads.googleapis.com https://europe-west6-assuredworkloads.googleapis.com https://europe-west8-assuredworkloads.googleapis.com https://europe-west9-assuredworkloads.googleapis.com https://europe-west10-assuredworkloads.googleapis.com https://europe-west12-assuredworkloads.googleapis.com https://europe-west15-assuredworkloads.googleapis.com https://europe-southwest1-assuredworkloads.googleapis.com https://europe-north1-assuredworkloads.googleapis.com https://europe-north2-assuredworkloads.googleapis.com https://europe-central2-assuredworkloads.googleapis.com https://me-west1-assuredworkloads.googleapis.com https://me-central1-assuredworkloads.googleapis.com https://me-central2-assuredworkloads.googleapis.com https://northamerica-northeast1-assuredworkloads.googleapis.com https://northamerica-northeast2-assuredworkloads.googleapis.com https://australia-southeast1-assuredworkloads.googleapis.com https://australia-southeast2-assuredworkloads.googleapis.com https://africa-south1-assuredworkloads.googleapis.com https://asia-east1-assuredworkloads.googleapis.com https://asia-east2-assuredworkloads.googleapis.com https://asia-northeast1-assuredworkloads.googleapis.com https://asia-northeast2-assuredworkloads.googleapis.com https://asia-northeast3-assuredworkloads.googleapis.com https://asia-south1-assuredworkloads.googleapis.com https://asia-south2-assuredworkloads.googleapis.com https://asia-southeast1-assuredworkloads.googleapis.com https://asia-southeast2-assuredworkloads.googleapis.com https://southamerica-east1-assuredworkloads.googleapis.com https://southamerica-west1-assuredworkloads.googleapis.com https://assuredworkloads.googleapis.com REST Resource: v1beta1.organizations.locations.operations Methods get GET /v1beta1/{name=organizations/ /locations/ /operations/ } Gets the latest state of a long-running operation. list GET /v1beta1/{name=organizations/ /locations/ }/operations Lists operations that match the specified filter in the request.
- REST Resource: v1beta1.organizations.locations.operations REST Resource: v1beta1.organizations.locations.workloads REST Resource: v1beta1.organizations.locations.workloads.updates REST Resource: v1beta1.organizations.locations.workloads.violations REST Resource: v1.organizations.locations.operations REST Resource: v1.organizations.locations.workloads REST Resource: v1.organizations.locations.workloads.updates REST Resource: v1.organizations.locations.workloads.violations Service: assuredworkloads.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

### Assured Workloads audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.GetWorkload google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListWorkloads google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetWorkload google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListWorkloads ADMIN WRITE google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableResourceMonitoring google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableComplianceUpdates google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableResourceMonitoring API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Assured Workloads. google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService The following audit logs are associated with methods belonging to google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService .
- Filter for this method : protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove" EnableComplianceUpdates Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates Audit log type : Admin activity Permissions : assuredworkloads.workload.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- AnalyzeWorkloadMove Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove Audit log type : Data access Permissions : assuredworkloads.workload.get - ADMIN READ Method is a long-running or streaming operation : No.
- The following methods don't produce audit logs: google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AcknowledgeViolation google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ApplyWorkloadUpdate google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.CreateWorkload google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.DeleteWorkload google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.GetViolation google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListViolations google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListWorkloadUpdates google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.MutatePartnerPermissions google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.RestrictAllowedResources google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.UpdateWorkload google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.AcknowledgeViolation google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ApplyWorkloadUpdate google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.CreateWorkload google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.DeleteWorkload google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetViolation google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListViolations google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.MutatePartnerPermissions google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.RestrictAllowedResources google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.UpdateWorkload google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

