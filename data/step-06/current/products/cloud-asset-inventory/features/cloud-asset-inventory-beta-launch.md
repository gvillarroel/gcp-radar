---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.798Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory beta launch"
feature_slug: "cloud-asset-inventory-beta-launch"
latest_feature_date: "2018-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest"
  - "https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage"
keywords:
  - "provides"
  - "launch"
  - "enters"
  - "five"
  - "storage"
  - "beta"
---

# Cloud Asset Inventory beta launch

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory enters beta and provides a storage service with five-week history of Google Cloud asset metadata plus export by timestamp or timeframe.

## Extended Definition

Cloud Asset Inventory enters beta and provides a storage service with five-week history of Google Cloud asset metadata plus export by timestamp or timeframe.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest](https://docs.cloud.google.com/asset-inventory/docs/reference/rest)
- [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- In beta for the export, list, and monitor APIs. networking. k8s. io/ NetworkPolicy policy. k8s. io/ PodDisruptionBudget rbac. authorization. k8s. io/ ClusterRole rbac. authorization. k8s. io/ ClusterRoleBinding rbac.authorization.k8s.io/Role rbac. authorization. k8s. io/ RoleBinding storage.k8s.io/StorageClass Hub API reference gkehub.googleapis.com/Feature gkehub.googleapis.com/Fleet Not available in the analysis APIs. gkehub. googleapis. com/ Membership gkehub. googleapis. com/ MembershipBinding Not available in the analysis APIs. gkehub. googleapis. com/ MembershipFeature Not available in the analysis APIs. gkehub. googleapis. com/ Namespace Not available in the analysis APIs. gkehub. googleapis. com/ RBACRoleBinding Not available in the analysis APIs. gkehub.googleapis.com/Scope Not available in the analysis APIs.
- Security Center Management API API reference securitycentermanagement. googleapis. com/ EventThreatDetectionCustomModule securitycentermanagement. googleapis. com/ SecurityCenterService securitycentermanagement. googleapis. com/ SecurityHealthAnalyticsCustomModule Security Command Center API reference securitycenter. googleapis. com/ BigQueryExport Not available in the analysis APIs. securitycenter. googleapis. com/ ContainerThreatDetectionSettings Not available in the analysis APIs. securitycenter. googleapis. com/ EventThreatDetectionSettings Not available in the analysis APIs. securitycenter. googleapis. com/ MuteConfig Not available in the analysis APIs. securitycenter. googleapis. com/ NotificationConfig Not available in the analysis APIs. securitycenter. googleapis. com/ ResourceValueConfig Not available in the analysis APIs. securitycenter. googleapis. com/ SecurityHealthAnalyticsSettings Not available in the analysis APIs. securitycenter. googleapis. com/ VirtualMachineThreatDetectionSettings Not available in the analysis APIs. securitycenter. googleapis. com/ WebSecurityScannerSettings Not available in the analysis APIs.
- Use compute.googleapis.com/Disk instead in the search and analysis APIs. compute. googleapis. com/ Reservation compute. googleapis. com/ ResourcePolicy compute.googleapis.com/Route compute.googleapis.com/Router compute. googleapis. com/ SecurityPolicy compute. googleapis. com/ ServiceAttachment compute. googleapis. com/ Snapshot compute. googleapis. com/ SslCertificate compute. googleapis. com/ SslPolicy compute. googleapis. com/ StoragePool compute. googleapis. com/ Subnetwork Searchable attributes: gatewayAddress compute. googleapis. com/ TargetGrpcProxy compute. googleapis. com/ TargetHttpProxy compute. googleapis. com/ TargetHttpsProxy compute. googleapis. com/ TargetInstance compute. googleapis. com/ TargetPool compute. googleapis. com/ TargetSslProxy compute. googleapis. com/ TargetTcpProxy compute. googleapis. com/ TargetVpnGateway compute.googleapis.com/UrlMap compute. googleapis. com/ VpnGateway compute. googleapis. com/ VpnTunnel Container Registry Container Registry implements Docker HTTP API V2 and does not provide a public API. containerregistry. googleapis. com/ Image Effective tags aren't supported.
- API reference serviceusage. googleapis. com/ Service Spanner API reference spanner.googleapis.com/Backup spanner. googleapis. com/ Database spanner. googleapis. com/ Instance spanner. googleapis. com/ InstanceConfig spanner. googleapis. com/ InstancePartition Speech-to-Text API reference speech.googleapis.com/Config speech. googleapis. com/ CustomClass speech.googleapis.com/Endpoint Not available in the analysis APIs. speech.googleapis.com/Model Not available in the analysis APIs. speech. googleapis. com/ PhraseSet speech. googleapis. com/ Recognizer Storage Insights API reference storageinsights. googleapis. com/ ReportConfig storageinsights. googleapis. com/ ReportDetail Storage Transfer Service API reference storagetransfer. googleapis. com/ TransferJob Not available in the analysis APIs.

### Cloud Asset API \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest](https://docs.cloud.google.com/asset-inventory/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- This service provides the following discovery documents: https://cloudasset.googleapis.com/$discovery/rest?version=v1 https://cloudasset.googleapis.com/$discovery/rest?version=v1p7beta1 https://cloudasset.googleapis.com/$discovery/rest?version=v1p2beta1 https://cloudasset.googleapis.com/$discovery/rest?version=v1p1beta1 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudasset.googleapis.com REST Resource: v1p7beta1 Methods exportAssets POST /v1p7beta1/{parent= / }:exportAssets Exports assets with time and resource types to a given Cloud Storage location/BigQuery table.
- REST Resource: v1 Methods analyzeIamPolicy GET /v1/{analysisQuery.scope= / }:analyzeIamPolicy Analyzes IAM policies to answer which identities have what accesses on which resources. analyzeIamPolicyLongrunning POST /v1/{analysisQuery.scope= / }:analyzeIamPolicyLongrunning Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. analyzeMove GET /v1/{resource= / }:analyzeMove Analyze moving a resource to a specified destination without kicking off the actual move. analyzeOrgPolicies GET /v1/{scope= / }:analyzeOrgPolicies Analyzes organization policies under a scope. analyzeOrgPolicyGovernedAssets GET /v1/{scope= / }:analyzeOrgPolicyGovernedAssets Analyzes organization policies governed assets (Google Cloud resources or policies) under a scope. analyzeOrgPolicyGovernedContainers GET /v1/{scope= / }:analyzeOrgPolicyGovernedContainers Analyzes organization policies governed containers (projects, folders or organization) under a scope. batchGetAssetsHistory GET /v1/{parent= / }:batchGetAssetsHistory Batch gets the update history of assets that overlap a time window. exportAssets POST /v1/{parent= / }:exportAssets Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. queryAssets POST /v1/{parent= / }:queryAssets Issue a job that queries assets using a SQL statement compatible with BigQuery SQL . searchAllIamPolicies GET /v1/{scope= / }:searchAllIamPolicies Searches all IAM policies within the specified scope, such as a project, folder, or organization. searchAllResources GET /v1/{scope= / }:searchAllResources Searches all Google Cloud resources within the specified scope, such as a project, folder, or organization.
- REST Resource: v1p2beta1.feeds Methods create POST /v1p2beta1/{parent= / }/feeds Creates a feed in a parent project/folder/organization to listen to its asset updates. delete DELETE /v1p2beta1/{name= / /feeds/ } Deletes an asset feed. get GET /v1p2beta1/{name= / /feeds/ } Gets details about an asset feed. list GET /v1p2beta1/{parent= / }/feeds Lists all asset feeds in a parent project/folder/organization. patch PATCH /v1p2beta1/{feed.name= / /feeds/ } Updates an asset feed configuration.

### "Export asset metadata to Cloud Storage \_|\_ Cloud Asset Inventory \_|\_\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage](https://docs.cloud.google.com/asset-inventory/docs/export-cloud-storage)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://cloudasset.googleapis.com/v1/ OPERATION PATH " Select-Object -Expand Content Example response { "name" : "projects/000000000000/operations/ExportAssets/RESOURCE/00000000000000000000000000000000" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.asset.v1.ExportAssetsRequest" , "parent" : "projects/000000000000" , "readTime" : "2024-01-30T00:00:00Z" , "contentType" : "RESOURCE" , "outputConfig" : { "gcsDestination" : { "uri" : "gs://my-bucket/export.txt" } } } } View an asset snapshot To view your asset snapshot: Go to the Cloud Storage Buckets page in the Google Cloud console.
- Export an asset snapshot to Cloud Storage gcloud gcloud asset export \ -- SCOPE \ --billing-project = BILLING PROJECT ID \ --asset-types = ASSET TYPE 1 , ASSET TYPE 2 ,... \ --content-type = CONTENT TYPE \ --relationship-types = RELATIONSHIP TYPE 1 , RELATIONSHIP TYPE 2 ,... \ --snapshot-time = " SNAPSHOT TIME " \ -- OUTPUT TYPE Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project that has the asset metadata you want to export. folder= FOLDER ID , where FOLDER ID is the ID of the folder that has the asset metadata you want to export.
- Command examples Run one of the following commands to export your resource metadata as it was on January 30, 2024 in the my-project project, to the file my-file.txt in the Cloud Storage bucket my-bucket . curl (Linux, macOS, or Cloud Shell) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI.
- Example Run the following command to export your resource metadata as it was on January 30, 2024 in the my-project project, to the file my-file.txt in the Cloud Storage bucket my-bucket . gcloud asset export \ --project = my-project \ --billing-project = my-project \ --content-type = resource \ --snapshot-time = " 2024-01-30 " \ --output-path = "gs:// my-bucket / my-file.txt " Example response Export in progress for root asset [projects/my-project].

