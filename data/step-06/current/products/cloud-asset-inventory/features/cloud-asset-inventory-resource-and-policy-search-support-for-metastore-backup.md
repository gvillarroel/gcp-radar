---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.454Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory resource and policy search support for Metastore Backup"
feature_slug: "cloud-asset-inventory-resource-and-policy-search-support-for-metastore-backup"
latest_feature_date: "2021-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/search-resources"
  - "https://docs.cloud.google.com/asset-inventory/docs/searching-resources"
keywords:
  - "metastore"
  - "resource"
  - "backup"
  - "policy"
  - "search"
---

# Cloud Asset Inventory resource and policy search support for Metastore Backup

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory now supports searching Metastore Backup resources with SearchAllResources and searching related IAM policies with SearchAllIamPolicies.

## Extended Definition

Cloud Asset Inventory now supports searching Metastore Backup resources with SearchAllResources and searching related IAM policies with SearchAllIamPolicies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Use compute.googleapis.com/Disk instead in the search and analysis APIs. compute. googleapis. com/ Reservation compute. googleapis. com/ ResourcePolicy compute.googleapis.com/Route compute.googleapis.com/Router compute. googleapis. com/ SecurityPolicy compute. googleapis. com/ ServiceAttachment compute. googleapis. com/ Snapshot compute. googleapis. com/ SslCertificate compute. googleapis. com/ SslPolicy compute. googleapis. com/ StoragePool compute. googleapis. com/ Subnetwork Searchable attributes: gatewayAddress compute. googleapis. com/ TargetGrpcProxy compute. googleapis. com/ TargetHttpProxy compute. googleapis. com/ TargetHttpsProxy compute. googleapis. com/ TargetInstance compute. googleapis. com/ TargetPool compute. googleapis. com/ TargetSslProxy compute. googleapis. com/ TargetTcpProxy compute. googleapis. com/ TargetVpnGateway compute.googleapis.com/UrlMap compute. googleapis. com/ VpnGateway compute. googleapis. com/ VpnTunnel Container Registry Container Registry implements Docker HTTP API V2 and does not provide a public API. containerregistry. googleapis. com/ Image Effective tags aren't supported.
- Cloud Controls Partner API API reference cloudcontrolspartner. googleapis. com/ Customer cloudcontrolspartner. googleapis. com/ Partner cloudcontrolspartner. googleapis. com/ Workload Cloud Data Fusion API reference datafusion. googleapis. com/ DnsPeering datafusion. googleapis. com/ Instance Cloud Deploy API reference clouddeploy. googleapis. com/ Automation clouddeploy. googleapis. com/ AutomationRun clouddeploy. googleapis. com/ CustomTargetType clouddeploy. googleapis. com/ DeliveryPipeline clouddeploy. googleapis. com/ DeployPolicy clouddeploy. googleapis. com/ JobRun clouddeploy. googleapis. com/ Release clouddeploy. googleapis. com/ Rollout clouddeploy. googleapis. com/ Target Cloud DNS API reference dns.googleapis.com/ManagedZone Searchable attributes: dnsName peeringConfig. targetNetwork. networkUrl dns.googleapis.com/Policy dns. googleapis. com/ ResourceRecordSet Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicy Not available in the analysis APIs. dns. googleapis. com/ ResponsePolicyRule Not available in the analysis APIs.
- For details, see Search for resources . cloudresourcemanager. googleapis. com/ TagKey cloudresourcemanager. googleapis. com/ TagValue Retail API API reference retail.googleapis.com/Catalog Secret Manager The location field in the Secret Manager asset does not reflect the replication policy of the secret.
- API reference dataflow.googleapis.com/Job Dataform API reference dataform. googleapis. com/ CompilationResult dataform.googleapis.com/Folder Not available in the analysis APIs. dataform. googleapis. com/ ReleaseConfig dataform. googleapis. com/ Repository dataform. googleapis. com/ TeamFolder Not available in the analysis APIs. dataform. googleapis. com/ WorkflowConfig dataform. googleapis. com/ WorkflowInvocation dataform. googleapis. com/ Workspace Dataplex Universal Catalog API reference dataplex. googleapis. com/ AspectType Not available in the analysis APIs. dataplex.googleapis.com/Asset dataplex. googleapis. com/ DataScan dataplex. googleapis. com/ EncryptionConfig Not available in the analysis APIs. dataplex. googleapis. com/ EntryGroup Not available in the analysis APIs. dataplex. googleapis. com/ EntryType Not available in the analysis APIs. dataplex. googleapis. com/ Environment dataplex. googleapis. com/ Glossary Not available in the analysis APIs. dataplex.googleapis.com/Lake dataplex. googleapis. com/ MetadataJob Not available in the analysis APIs. dataplex.googleapis.com/Task dataplex.googleapis.com/Zone Dataproc Metastore API reference metastore. googleapis. com/ Backup Not available in the analysis APIs. metastore. googleapis. com/ Federation Not available in the analysis APIs. metastore. googleapis. com/ MetadataImport Not available in the analysis APIs. metastore. googleapis. com/ Service Not available in the analysis APIs.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/search-resources](https://docs.cloud.google.com/asset-inventory/docs/search-resources)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

### Search for resources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/searching-resources](https://docs.cloud.google.com/asset-inventory/docs/searching-resources)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "state=RUNNING", "readMask": "name,assetType,location,versionedResources" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content IAM deny policies The following sample shows how to search for IAM deny policies in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --asset-types = iam.googleapis.com/PolicyV2 \ --query = "name:denypolicies" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content To search for Compute Engine instances that aren't running, replace state=RUNNING with NOT state:running .
- You can check the active account by running gcloud auth list . curl -X POST \ -H "X-HTTP-Method-Override: GET" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -d '{ "assetTypes": "iam.googleapis.com/PolicyV2", "pageSize": 1, "query": "name:denypolicies" }' \ https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-HTTP-Method-Override" = "GET" ; "Authorization" = "Bearer $cred" } $body = @" { "assetTypes": "compute.googleapis.com/Instance", "pageSize": 1, "query": "location:us- ", "readMask": "name,assetType,location" } "@ Invoke-WebRequest -Method POST -Headers $headers -ContentType : "application/json; charset=utf-8" -Body $body -Uri "https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources" Select-Object -Expand Content Compute Engine instances that are running The following sample shows how to search for Compute Engine instances that are running in the my-project project. gcloud gcloud asset search-all-resources \ --scope = projects/ my-project \ --query = "state=RUNNING" \ --asset-types = compute.googleapis.com/Instance \ --read-mask = "name,assetType,location,versionedResources" \ --format = "table(name, assetType, location, versionedResources)" REST HTTP method and URL: POST https://cloudasset.googleapis.com/v1/projects/ my-project :searchAllResources Note : You can use a GET method for this request with parameters as a query string.

