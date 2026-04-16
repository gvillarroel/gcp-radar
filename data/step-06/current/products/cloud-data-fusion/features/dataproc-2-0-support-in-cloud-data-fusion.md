---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.372Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Dataproc 2.0 support in Cloud Data Fusion"
feature_slug: "dataproc-2-0-support-in-cloud-data-fusion"
latest_feature_date: "2025-08-27"
deprecation_date: "2025-08-27"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc"
  - "https://docs.cloud.google.com/data-fusion/docs/concepts/configure-clusters"
  - "https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission"
keywords:
  - "dataproc"
  - "fusion"
  - "was"
  - "removed"
  - "starting"
  - "version"
  - "11"
  - "deprecated"
---

# Dataproc 2.0 support in Cloud Data Fusion

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

Support for Dataproc 2.0 in Cloud Data Fusion was removed starting with version 6.11.1; deprecated on 2025-08-27.

## Extended Definition

Support for Dataproc 2.0 in Cloud Data Fusion was removed starting with version 6.11.1; deprecated on 2025-08-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)
- [https://docs.cloud.google.com/data-fusion/docs/concepts/configure-clusters](https://docs.cloud.google.com/data-fusion/docs/concepts/configure-clusters)
- [https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission](https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission)

## Supporting Pages

### "Dataproc provisioner properties \_|\_ Cloud Data Fusion \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)
- Source ID: `site-iam-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about compatibility between Cloud Data Fusion versions and Dataproc versions, see Version compatibility .
- Dataproc profile web interface properties mapped to JSON properties Dataproc profile UI property name Dataproc profile JSON property name Profile label name Profile name label Description description Project ID projectId Creator service account key accountKey Region region Zone zone Network network Network host project ID networkHostProjectId Subnet subnet Runner service account serviceAccount Number of masters masterNumNodes Master machine type masterMachineType Master cores masterCPUs Master memory (GB) masterMemoryMB Master disk size (GB) masterDiskGB Master disk type masterDiskType Number of primary workers workerNumNodes Number of secondary workers secondaryWorkerNumNodes Worker machine type workerMachineType Worker cores workerCPUs Worker memory (GB) workerMemoryMB Worker disk size (GB) workerDiskGB Worker disk type workerDiskType Metadata clusterMetaData Network tags networkTags Enable Secure Boot secureBootEnabled Enable vTPM vTpmEnabled Enable Integrity Monitoring integrityMonitoringEnabled Image version imageVersion Custom image URI customImageUri Cloud Storage bucket gcsBucket Encryption key name encryptionKeyName Autoscaling policy autoScalingPolicy Initialization actions initActions Cluster properties clusterProperties Labels clusterLabels Max idle time idleTTL Skip cluster delete skipDelete Enable Stackdriver Logging Integration stackdriverLoggingEnabled Enable Stackdriver Monitoring Integration stackdriverMonitoringEnabled Enable Component Gateway componentGatewayEnabled Prefer external IP preferExternalIP Create poll delay pollCreateDelay Create poll jitter pollCreateJitter Delete poll delay pollDeleteDelay Poll interval pollInterval Best Practices When you create a static cluster for your pipelines, refer to the cluster configuration best practices .
- Home Documentation Data analytics Cloud Data Fusion Guides Send feedback Dataproc provisioner properties Stay organized with collections Save and categorize content based on your preferences.
- The Dataproc provisioner in Cloud Data Fusion calls the Dataproc API to create and delete clusters in your Google Cloud projects.

### "Dataproc cluster configuration \_|\_ Cloud Data Fusion \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/concepts/configure-clusters](https://docs.cloud.google.com/data-fusion/docs/concepts/configure-clusters)
- Source ID: `site-iam-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Data Fusion version Dataproc version 6.11.1 2.3, 2.2 , 2.1 6.10.1.1 2.2 , 2.1, 2.0 6.10 2.1, 2.0 6.9 2.1, 2.0, 1.5 6.7-6.8 2.0, 1.5 6.4-6.6 2.0 , 1.3 6.1-6.3 1.3 Cloud Data Fusion versions 6.4 and later are compatible with supported versions of Dataproc .
- To specify the OS version used in your Dataproc cluster, the OS version must be compatible with one of the supported Dataproc versions for your Cloud Data Fusion in the preceding table.
- Troubleshoot: Version compatibility Problem : The version of your Cloud Data Fusion environment might not be compatible with the version of your Dataproc cluster.
- Recommended : Upgrade to the latest Cloud Data Fusion version and use one of the supported Dataproc versions .

### "Grant service account roles for Dataproc \_|\_ Cloud Data Fusion \_|\_ Google\

- URL: [https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission](https://docs.cloud.google.com/data-fusion/docs/how-to/granting-service-account-permission)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Grant Cloud Storage admin permission In Cloud Data Fusion versions 6.2.0 and above, grant the Cloud Storage admin role ( roles/storage.admin ) to service accounts that are used by Dataproc in your project .
- Note: Starting in Cloud Data Fusion versions 6.2.3, you can grant these permissions in the UI when you create an instance.
- Otherwise, Cloud Data Fusion cannot provision a Dataproc cluster and the following error appears when you execute a data pipeline: PROVISION task failed in REQUESTING CREATE state for program run [pipeline-name] due to Dataproc operation failure: INVALID ARGUMENT: User not authorized to act as service account '[service-account-name]' Get the service account name In the Google Cloud console, go to the Identity and Access Management page.
- To get the permissions that you need to create a Cloud Data Fusion instance, ask your administrator to grant you the Service Account Admin ( roles/iam.serviceAccountAdmin ) IAM role on the Dataproc service account.

