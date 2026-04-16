---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.606Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory: Asset Insights"
feature_slug: "cloud-asset-inventory-asset-insights"
latest_feature_date: "2021-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-types"
  - "https://docs.cloud.google.com/asset-inventory/docs/asset-insights"
  - "https://docs.cloud.google.com/asset-inventory/docs/using-asset-insights"
keywords:
  - "insights"
  - "available"
---

# Cloud Asset Inventory: Asset Insights

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Asset Insights is now available in Cloud Asset Inventory.

## Extended Definition

Asset Insights is now available in Cloud Asset Inventory.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- [https://docs.cloud.google.com/asset-inventory/docs/using-asset-insights](https://docs.cloud.google.com/asset-inventory/docs/using-asset-insights)

## Supporting Pages

### Asset types \_|\_ Cloud Asset Inventory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-types](https://docs.cloud.google.com/asset-inventory/docs/asset-types)
- Source ID: `site-api-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- API reference serviceusage. googleapis. com/ Service Spanner API reference spanner.googleapis.com/Backup spanner. googleapis. com/ Database spanner. googleapis. com/ Instance spanner. googleapis. com/ InstanceConfig spanner. googleapis. com/ InstancePartition Speech-to-Text API reference speech.googleapis.com/Config speech. googleapis. com/ CustomClass speech.googleapis.com/Endpoint Not available in the analysis APIs. speech.googleapis.com/Model Not available in the analysis APIs. speech. googleapis. com/ PhraseSet speech. googleapis. com/ Recognizer Storage Insights API reference storageinsights. googleapis. com/ ReportConfig storageinsights. googleapis. com/ ReportDetail Storage Transfer Service API reference storagetransfer. googleapis. com/ TransferJob Not available in the analysis APIs.
- API reference dataflow.googleapis.com/Job Dataform API reference dataform. googleapis. com/ CompilationResult dataform.googleapis.com/Folder Not available in the analysis APIs. dataform. googleapis. com/ ReleaseConfig dataform. googleapis. com/ Repository dataform. googleapis. com/ TeamFolder Not available in the analysis APIs. dataform. googleapis. com/ WorkflowConfig dataform. googleapis. com/ WorkflowInvocation dataform. googleapis. com/ Workspace Dataplex Universal Catalog API reference dataplex. googleapis. com/ AspectType Not available in the analysis APIs. dataplex.googleapis.com/Asset dataplex. googleapis. com/ DataScan dataplex. googleapis. com/ EncryptionConfig Not available in the analysis APIs. dataplex. googleapis. com/ EntryGroup Not available in the analysis APIs. dataplex. googleapis. com/ EntryType Not available in the analysis APIs. dataplex. googleapis. com/ Environment dataplex. googleapis. com/ Glossary Not available in the analysis APIs. dataplex.googleapis.com/Lake dataplex. googleapis. com/ MetadataJob Not available in the analysis APIs. dataplex.googleapis.com/Task dataplex.googleapis.com/Zone Dataproc Metastore API reference metastore. googleapis. com/ Backup Not available in the analysis APIs. metastore. googleapis. com/ Federation Not available in the analysis APIs. metastore. googleapis. com/ MetadataImport Not available in the analysis APIs. metastore. googleapis. com/ Service Not available in the analysis APIs.
- API reference aiplatform. googleapis. com/ BatchPredictionJob aiplatform. googleapis. com/ CachedContent aiplatform. googleapis. com/ CustomJob aiplatform. googleapis. com/ DataLabelingJob aiplatform. googleapis. com/ Dataset aiplatform. googleapis. com/ Endpoint The deployedModels field is not populated. aiplatform. googleapis. com/ FeatureGroup Not available in the analysis APIs. aiplatform. googleapis. com/ FeatureOnlineStore Not available in the analysis APIs. aiplatform. googleapis. com/ Featurestore aiplatform. googleapis. com/ HyperparameterTuningJob aiplatform. googleapis. com/ Index aiplatform. googleapis. com/ IndexEndpoint aiplatform. googleapis. com/ MetadataStore aiplatform. googleapis. com/ Model The deployedModels field is not populated. aiplatform. googleapis. com/ ModelDeploymentMonitoringJob aiplatform. googleapis. com/ NasJob aiplatform. googleapis. com/ NotebookExecutionJob aiplatform. googleapis. com/ NotebookRuntime Effective tags aren't supported. aiplatform. googleapis. com/ NotebookRuntimeTemplate Effective tags aren't supported. aiplatform. googleapis. com/ PipelineJob aiplatform. googleapis. com/ ReasoningEngine Not available in the analysis APIs. aiplatform. googleapis. com/ SpecialistPool aiplatform. googleapis. com/ Tensorboard aiplatform. googleapis. com/ TrainingPipeline aiplatform. googleapis. com/ TuningJob Not available in the analysis APIs.
- Learn more about OS inventory management . osLongName osShortName Supported metadata fields: block-project-ssh-keys enable-oslogin enable-osconfig serial-port-enable compute. googleapis. com/ InstanceGroup compute. googleapis. com/ InstanceGroupManager compute. googleapis. com/ InstanceSettings Not available in the analysis APIs. compute. googleapis. com/ InstanceTemplate compute. googleapis. com/ InstantSnapshot compute. googleapis. com/ Interconnect compute. googleapis. com/ InterconnectAttachment compute.googleapis.com/License compute. googleapis. com/ MachineImage compute.googleapis.com/Network Searchable attributes: gatewayIPv4 compute. googleapis. com/ NetworkAttachment Searchable attributes: connectionEndpointsIpAddresses connectionEndpointsIpv6Addresses compute. googleapis. com/ NetworkEdgeSecurityService compute. googleapis. com/ NetworkEndpointGroup compute. googleapis. com/ NodeGroup compute. googleapis. com/ NodeTemplate compute. googleapis. com/ PacketMirroring compute.googleapis.com/Project Supported metadata fields: block-project-ssh-keys enable-osconfig enable-oslogin serial-port-enable compute. googleapis. com/ PublicAdvertisedPrefix Not available in the analysis APIs. compute. googleapis. com/ PublicDelegatedPrefix compute. googleapis. com/ RegionBackendService Not available in the analysis and search APIs.

### "Improve your security posture with asset insights \_|\_ Cloud Asset Inventory\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/using-asset-insights](https://docs.cloud.google.com/asset-inventory/docs/using-asset-insights)
- Source ID: `site-docs-reference-2`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights" Select-Object -Expand Content Example response { "name" : "organizations/000000000000/locations/global/insightTypes/google.cloudasset.asset.Insight/insights/00000000-0000-0000-0000-000000000000" , "description" : "Domain example.com detected in 1 IAM policies" , "content" : { "domain" : "example.com" , "policyCount" : 1 , "policySearchQuery" : "policy: example.com" , "matchedPolicies" :[ { "resource" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "project" : "projects/000000000000" , "matchedBindings" :[ { "role" : "roles/viewer" , "matchedMembers" :[ "user:example@example.com" ] } ] } ] }, "lastRefreshTime" : "2024-01-30T00:00:00Z" , "observationPeriod" : "0s" , "stateInfo" : { "state" : "ACTIVE" }, "category" : "SECURITY" , "targetResources" : [ "//cloudresourcemanager.googleapis.com/organizations/000000000000" ], "insightSubtype" : "EXTERNAL MEMBER" , "etag" : "\"00000000000\"" , "initialRefreshTime" : "2024-01-30T00:00:00Z" } Interpreting insight responses In addition to the standard insight attributes , asset insights provide several specialized subtypes and fields.
- Example Run the following command to list insights for the my-project project. gcloud recommender insights list \ --project = my-project \ --location = global \ --insight-type = google.cloudasset.asset.Insight Example response INSIGHT ID: 00000000-0000-0000-0000-000000000000 CATEGORY: SECURITY INSIGHT STATE: ACTIVE LAST REFRESH TIME: 2024-01-30T00:00:00Z SEVERITY: LOW INSIGHT SUBTYPE: EXTERNAL MEMBER DESCRIPTION: Domain example.com detected in 1 IAM policies REST HTTP method and URL: GET https://recommender.googleapis.com/v1/ SCOPE PATH /locations/global/insightTypes/google.cloudasset.asset.Insight/insights Headers: X-Goog-User-Project: BILLING PROJECT ID Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project you want insights for. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project you want insights for.
- You can check the active account by running gcloud auth list . curl -X GET \ -H "X-Goog-User-Project: BILLING PROJECT ID " \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- For other types of insights interactions, see Use the API - Insights . gcloud gcloud recommender insights list \ -- SCOPE \ --location = global \ --insight-type = google.cloudasset.asset.Insight \ --filter = "insightSubtype: SUBTYPE " \ Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project you want insights for. folder= FOLDER ID , where FOLDER ID is the ID of the folder you want insights for.

### "Improve your security posture with asset insights \_|\_ Cloud Asset Inventory\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/asset-insights](https://docs.cloud.google.com/asset-inventory/docs/asset-insights)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can check the active account by running gcloud auth list . $cred = gcloud auth print-access-token $headers = @{ "X-Goog-User-Project" = " BILLING PROJECT ID " ; "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights" Select-Object -Expand Content Example response { "name" : "organizations/000000000000/locations/global/insightTypes/google.cloudasset.asset.Insight/insights/00000000-0000-0000-0000-000000000000" , "description" : "Domain example.com detected in 1 IAM policies" , "content" : { "domain" : "example.com" , "policyCount" : 1 , "policySearchQuery" : "policy: example.com" , "matchedPolicies" :[ { "resource" : "//cloudresourcemanager.googleapis.com/projects/000000000000" , "project" : "projects/000000000000" , "matchedBindings" :[ { "role" : "roles/viewer" , "matchedMembers" :[ "user:example@example.com" ] } ] } ] }, "lastRefreshTime" : "2024-01-30T00:00:00Z" , "observationPeriod" : "0s" , "stateInfo" : { "state" : "ACTIVE" }, "category" : "SECURITY" , "targetResources" : [ "//cloudresourcemanager.googleapis.com/organizations/000000000000" ], "insightSubtype" : "EXTERNAL MEMBER" , "etag" : "\"00000000000\"" , "initialRefreshTime" : "2024-01-30T00:00:00Z" } Interpreting insight responses In addition to the standard insight attributes , asset insights provide several specialized subtypes and fields.
- Example Run the following command to list insights for the my-project project. gcloud recommender insights list \ --project = my-project \ --location = global \ --insight-type = google.cloudasset.asset.Insight Example response INSIGHT ID: 00000000-0000-0000-0000-000000000000 CATEGORY: SECURITY INSIGHT STATE: ACTIVE LAST REFRESH TIME: 2024-01-30T00:00:00Z SEVERITY: LOW INSIGHT SUBTYPE: EXTERNAL MEMBER DESCRIPTION: Domain example.com detected in 1 IAM policies REST HTTP method and URL: GET https://recommender.googleapis.com/v1/ SCOPE PATH /locations/global/insightTypes/google.cloudasset.asset.Insight/insights Headers: X-Goog-User-Project: BILLING PROJECT ID Provide the following values: SCOPE PATH : Use one of the following values: The allowed values are: projects/ PROJECT ID , where PROJECT ID is the ID of the project you want insights for. projects/ PROJECT NUMBER , where PROJECT NUMBER is the number of the project you want insights for.
- You can check the active account by running gcloud auth list . curl -X GET \ -H "X-Goog-User-Project: BILLING PROJECT ID " \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https://recommender.googleapis.com/v1/projects/ my-project /locations/global/insightTypes/google.cloudasset.asset.Insight/insights PowerShell (Windows) Note : The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- For other types of insights interactions, see Use the API - Insights . gcloud gcloud recommender insights list \ -- SCOPE \ --location = global \ --insight-type = google.cloudasset.asset.Insight \ --filter = "insightSubtype: SUBTYPE " \ Provide the following values: SCOPE : Use one of the following values: project= PROJECT ID , where PROJECT ID is the ID of the project you want insights for. folder= FOLDER ID , where FOLDER ID is the ID of the folder you want insights for.

