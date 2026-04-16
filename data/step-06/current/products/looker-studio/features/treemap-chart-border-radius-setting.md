---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:44:17.145Z"
product_name: "Looker Studio"
product_slug: "looker-studio"
feature_name: "Treemap chart border radius setting"
feature_slug: "treemap-chart-border-radius-setting"
latest_feature_date: "2025-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/looker-studio/integrate/linking-api"
  - "https://developers.google.com/looker-studio/visualization/interactions-guide"
  - "https://docs.cloud.google.com/iam/docs/pab-blocked-permissions"
keywords:
  - "treemap"
  - "chart"
  - "border"
  - "radius"
  - "setting"
  - "charts"
  - "now"
  - "let"
---

# Treemap chart border radius setting

Product: Looker Studio
Coverage: MEDIUM

## Step 02 Summary

Treemap charts now let report editors adjust the border radius of tree branches.

## Extended Definition

Treemap charts now let report editors adjust the border radius of tree branches.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)

## Supporting Pages

### Linking API \_|\_ Integrate and share \_|\_ Google for Developers

- URL: [https://developers.google.com/looker-studio/integrate/linking-api](https://developers.google.com/looker-studio/integrate/linking-api)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- If the Linking API is used to provide a new data source configuration that yields the exact same fields, there are two outcomes based on the value of the refreshFields parameter: If set to true , the field configuration from the template data source will not carry-over, and charts may potentially fail to load if they depend on the same field configuration (i.e. a field of type Year is expected).
- If set to false , the field configuration from the template data source will carry-over to the new data source and report charts will receive the same fields with the same configuration and load successfully.
- Replace vs update - Data source configurations When setting data source parameters, the presence or omission of the ds.connector parameter in the Linking API URL indicates the intention to replace or update the template data source configuration, respectively.
- Generally, if you have configured fields in the template data source and are certain that new data source configurations via the Linking API will always yield the exact same fields, then setting refreshFields to false is recommended.

### "Permissions that principal access boundary policies block \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- None Service Management servicemanagement.googleapis.com/ consumers. getIamPolicy servicemanagement.googleapis.com/ consumers. setIamPolicy servicemanagement.googleapis.com/ services. create servicemanagement.googleapis.com/ services. delete servicemanagement.googleapis.com/ services. get servicemanagement.googleapis.com/ services. getIamPolicy servicemanagement.googleapis.com/ services. list servicemanagement.googleapis.com/ services. setIamPolicy servicemanagement.googleapis.com/ services. update None Backup and Disaster Recovery backupdr.googleapis.com/ backupPlanAssociations. create backupdr.googleapis.com/ backupPlanAssociations. createForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. createForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. createForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. createForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. deleteForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. deleteForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. deleteForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. deleteForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. fetchForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. fetchForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. fetchForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. fetchForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. getForAlloydbCluster backupdr.googleapis.com/ backupPlanAssociations. getForCloudSqlInstance backupdr.googleapis.com/ backupPlanAssociations. getForComputeDisk backupdr.googleapis.com/ backupPlanAssociations. getForComputeInstance backupdr.googleapis.com/ backupPlanAssociations. list backupdr.googleapis.com/ backupPlanRevisions. backupdr.googleapis.com/ backupPlans. backupdr.googleapis.com/ backupVaults. backupdr.googleapis.com/ bvbackups. backupdr.googleapis.com/ bvdataSources. abandonBackup backupdr.googleapis.com/ bvdataSources. fetchAccessToken backupdr.googleapis.com/ bvdataSources. finalizeBackup backupdr.googleapis.com/ bvdataSources. get backupdr.googleapis.com/ bvdataSources. initiateBackup backupdr.googleapis.com/ bvdataSources. list backupdr.googleapis.com/ bvdataSources. remove backupdr.googleapis.com/ bvdataSources. setInternalStatus backupdr.googleapis.com/ bvdataSources. update backupdr.googleapis.com/ compute. backupdr.googleapis.com/ dataSourceReferences. fetchForAlloydbCluster backupdr.googleapis.com/ dataSourceReferences. fetchForCloudSqlInstance backupdr.googleapis.com/ dataSourceReferences. fetchForFilestoreInstance backupdr.googleapis.com/ dataSourceReferences. list backupdr.googleapis.com/ locations. backupdr.googleapis.com/ managementServers. create backupdr.googleapis.com/ managementServers. createConnection backupdr.googleapis.com/ managementServers. delete backupdr.googleapis.com/ managementServers. get backupdr.googleapis.com/ managementServers. getIamPolicy backupdr.googleapis.com/ managementServers. list backupdr.googleapis.com/ managementServers. setIamPolicy backupdr.googleapis.com/ managementServers. update backupdr.googleapis.com/ operations. backupdr.googleapis.com/ serviceConfig. backupdr.googleapis.com/ bvbackups. useReadOnlyForAlloydbCluster backupdr.googleapis.com/ bvbackups. useReadOnlyForCloudSqlInstance backupdr.googleapis.com/ bvbackups. useReadOnlyForFilestoreInstance Sensitive Data Protection dlp.googleapis.com/ charts. dlp.googleapis.com/ columnDataProfiles. dlp.googleapis.com/ connections. dlp.googleapis.com/ deidentifyTemplates. dlp.googleapis.com/ estimates. dlp.googleapis.com/ fileStoreProfiles. dlp.googleapis.com/ inspecttemplates. dlp.googleapis.com/ jobTriggers. dlp.googleapis.com/ jobs. dlp.googleapis.com/ projectDataProfiles. dlp.googleapis.com/ storedInfoTypes. dlp.googleapis.com/ subscriptions. dlp.googleapis.com/ tableDataProfiles.
- Service Permissions Exceptions Access Approval accessapproval.googleapis.com/ requests. list accessapproval.googleapis.com/ serviceaccounts. get accessapproval.googleapis.com/settings.

### "Using community visualizations as filters \_|\_ Community Visualizations\

- URL: [https://developers.google.com/looker-studio/visualization/interactions-guide](https://developers.google.com/looker-studio/visualization/interactions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- FILTER ; let interactionData = { concepts : [ dimensionId ], values : [[ value ]] }; // send Looker Studio an instruction to filter other charts in the dashboard dscc . sendInteraction ( interactionId , FILTER , interactionData ); }; Note: Make sure the interactionId matches a config.interactions[].id in your config.
- Page Summary outlined flag Community visualizations can act as chart filters, allowing users to interact with them and filter other charts in the report.
- How community visualization chart filters work In order to use your community visualization as a chart filter, you need to: Configure the config.interactions property Write code that calls dscc.sendInteraction() with the filter information.
- You can use your community visualization as a chart filter , filtering the report through interactions with your community visualization.

