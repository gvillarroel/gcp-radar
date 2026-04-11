---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:44.466Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Assured Workloads workload move compatibility analysis"
feature_slug: "assured-workloads-workload-move-compatibility-analysis"
latest_feature_date: "2022-09-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/migrate-workload"
  - "https://docs.cloud.google.com/assured-workloads/docs/release-notes"
  - "https://docs.cloud.google.com/assured-workloads/docs/create-folder"
keywords:
  - "compatibility"
  - "move"
  - "workload"
  - "analysis"
  - "preview"
  - "added"
  - "workloads"
  - "assured"
---

# Assured Workloads workload move compatibility analysis

Product: Assured Workloads
Coverage: LOW

## Step 02 Summary

Assured Workloads added a preview analysis that evaluates hypothetical workload moves for compatibility between source and destination workloads.

## Extended Definition

Assured Workloads added a preview analysis that evaluates hypothetical workload moves for compatibility between source and destination workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/migrate-workload](https://docs.cloud.google.com/assured-workloads/docs/migrate-workload)
- [https://docs.cloud.google.com/assured-workloads/docs/release-notes](https://docs.cloud.google.com/assured-workloads/docs/release-notes)
- [https://docs.cloud.google.com/assured-workloads/docs/create-folder](https://docs.cloud.google.com/assured-workloads/docs/create-folder)

## Supporting Pages

### Migrate a workload \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/migrate-workload](https://docs.cloud.google.com/assured-workloads/docs/migrate-workload)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The expected allowed values are [us-west4, us-west1, us-west2, us-west3, us-central1, us-east1, us-east4, us-south1, us-central2, us-east5]." } ] } } ] } ], "nextPageToken" : "Ch8wLDc0MzY3NTExNCwzMzg4ODM1NTM2NDQ0NTg4MDMy" } To filter the findings by more than one asset type, add each as an additional query parameter: GET https://assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:analyzeWorkloadMove?project = projects/my-project-123 & asset types = cloudresourcemanager.googleapis.com/Project & asset types = serviceusage.googleapis.com/Service & page size = 5 & page token = CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA The results will only contain any findings of the specified types ( cloudresourcemanager.googleapis.com/Project and serviceusage.googleapis.com/Service ): { "assetMoveAnalyses" : [ { "asset" : "//serviceusage.googleapis.com/projects/130536381852/services/bigquerymigration.googleapis.com" , "assetType" : "serviceusage.googleapis.com/Service" , "analysisGroups" : [ { "displayName" : "DISALLOWED SERVICES" , "analysisResult" : { "warnings" : [ { "detail" : "This service is not allowed by the gcp.restrictServiceUsage org policy effective at the target" } ] } } ] }, { "asset" : "//cloudresourcemanager.googleapis.com/projects/my-project-123" , "assetType" : "cloudresourcemanager.googleapis.com/Project" , "analysisGroups" : [ { "displayName" : "ORG POLICIES" , "analysisResult" : { "warnings" : [ { "detail" : "constraints/gcp.resourceLocations: Target applies/inherits this custom policy and it is not applied by the source.
- For example: CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA HTTP method, URL, and query parameters: GET https:// [ ENDPOINT URI ] /v1/organizations/ [ DESTINATION ORGANIZATION ID ] /locations/ [ DESTINATION LOCATION ID ] /workloads/ [ DESTINATION WORKLOAD ID ] :analyzeWorkloadMove?project = projects/ SOURCE PROJECT ID &page size = PAGE SIZE &page token = PAGE TOKEN For example: GET https://us-west1-assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:analyzeWorkloadMove?project = projects/my-project-123&page size = 5&page token = CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA You should receive a JSON response similar to the following: { "assetMoveAnalyses" : [ { "asset" : "//orgpolicy.googleapis.com/projects/130536381852/policies/container.restrictNoncompliantDiagnosticDataAccess" , "assetType" : "orgpolicy.googleapis.com/Policy" }, { "asset" : "//compute.googleapis.com/projects/my-project-123/global/routes/default-route-9ca6e6b0ab7326f0" , "assetType" : "compute.googleapis.com/Route" , "analysisGroups" : [ { "displayName" : "RESOURCE LOCATIONS" , "analysisResult" : { "warnings" : [ { "detail" : "The asset's location 'global' is incompatible with the gcp.resourceLocations org policy effective at the target.
- The expected denied values are [TLS VERSION 1, TLS VERSION 1 1]." } ] } } ] } ], "nextPageToken" : "Ch8wLDc0MzY3NTExNCwzMzg4ODM1NTM2NDQ0NTg4MDMy" } To filter the findings by a specific asset type, use the asset types query parameter: GET https://assuredworkloads.googleapis.com/v1/organizations/919698298765/locations/us-west1/workloads/00-701ea036-7152-4781-a867-9f5:analyzeWorkloadMove?project = projects/my-project-123 & asset types = cloudresourcemanager.googleapis.com/Project & page size = 5 & page token = CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA The results will only contain any findings of the specified type ( cloudresourcemanager.googleapis.com/Project ): { "assetMoveAnalyses" : [ { "asset" : "//cloudresourcemanager.googleapis.com/projects/my-project-123" , "assetType" : "cloudresourcemanager.googleapis.com/Project" , "analysisGroups" : [ { "displayName" : "ORG POLICIES" , "analysisResult" : { "warnings" : [ { "detail" : "constraints/gcp.resourceLocations: Target applies/inherits this custom policy and it is not applied by the source.
- Analyzing moving a project to an Assured Workloads folder The analyzeWorkloadMove method performs an analysis of moving the source project to the destination Assured Workloads folder.

### Assured Workloads release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/release-notes](https://docs.cloud.google.com/assured-workloads/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- October 05, 2022 v1 Issue If you create a public cluster on Google Kubernetes Engine (GKE) version 1.23 or newer in any existing Assured Workloads compliance regime folder, it might fail with the following error: ManagedResourceService.AddServiceBundle, PERMISSION DENIED'/> APPLICATION ERROR;google.cloud.servicedirectory.v1beta1/ManagedResourceService.AddServiceBundle;Request is disallowed by organization's constraints/gcp.restrictServiceUsage constraint for 'projects/<projectID> attempting to use service 'servicedirectory.googleapis.com' To fix this issue, the Service Directory API ( servicedirectory.googleapis.com ) must be added as an allowed service on the resource usage restriction organization policy for the folder.
- However, areas with potential impact include the following: Using the REST API and gcloud : Use REGIONAL CONTROLS instead of FREE REGIONS when calling organizations.locations.workloads.create to create a new Assured Workloads folder/workload Expect REGIONAL CONTROLS as the return value for ComplianceRegime from calls to organizations.locations.workloads.get and organizations.locations.workloads.list Using Terraform: Use REGIONAL CONTROLS instead of FREE REGIONS April 01, 2024 v1 Announcement The following new control packages are now available in Preview .
- June 20, 2025 v1 Feature The IRS 1075 control package now supports the following products: Access Transparency Backup for GKE Cloud Healthcare API Cloud OS Login API Cloud Workstations Conversational Agents Conversational Insights Dataplex Universal Catalog Document AI Essential Contacts Eventarc External passthrough Network Load Balancer Generative AI on Vertex AI Google Agentspace Google Cloud Armor Google Cloud NetApp Volumes Google Security Operations SOAR Identity and Access Management (IAM) Infrastructure Manager Integration Connectors Internal passthrough Network Load balancer Jurisdictional Cloud Console Looker (Google Cloud core) Organization Policy Service Regional external Application Load Balancer Regional external proxy Network Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Storage Transfer Service VPC Service Controls Virtual Private Cloud (VPC) v1 Change The names for some Assured Workloads control packages have changed.
- See Supported products to learn about which Google Cloud products are supported for each new control package: Australia Regions Brazil Regions Canada Regions Chile Regions EU Regions India Regions Indonesia Regions Israel Regions Singapore Regions South Korea Regions Switzerland Regions Taiwan Regions UK Regions US Regions v1 Announcement You can now create Assured Workloads folders from Resource Manager's Manage resources page in the Google Cloud console.

### Create a new Assured Workloads folder \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/create-folder](https://docs.cloud.google.com/assured-workloads/docs/create-folder)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Then, move the project to the newly-created Assured Workloads folder.
- Then, move the project to the newly-created Assured Workloads folder.
- Then, move the project to the newly-created Assured Workloads folder.
- Then, move the project to the newly-created Assured Workloads folder.

