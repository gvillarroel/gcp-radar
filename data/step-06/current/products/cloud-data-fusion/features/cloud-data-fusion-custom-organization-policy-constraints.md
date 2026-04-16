---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:45.385Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Cloud Data Fusion custom organization policy constraints"
feature_slug: "cloud-data-fusion-custom-organization-policy-constraints"
latest_feature_date: "2025-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/access-control"
  - "https://docs.cloud.google.com/data-fusion/docs/reference/rest/Shared.Types/GetIamPolicyRequest"
  - "https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc"
keywords:
  - "fusion"
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "now"
  - "supports"
  - "finer"
---

# Cloud Data Fusion custom organization policy constraints

Product: Cloud Data Fusion
Coverage: MEDIUM

## Step 02 Summary

Cloud Data Fusion now supports custom Organization Policy constraints for finer control over specific resource fields.

## Extended Definition

Cloud Data Fusion now supports custom Organization Policy constraints for finer control over specific resource fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/access-control](https://docs.cloud.google.com/data-fusion/docs/access-control)
- [https://docs.cloud.google.com/data-fusion/docs/reference/rest/Shared.Types/GetIamPolicyRequest](https://docs.cloud.google.com/data-fusion/docs/reference/rest/Shared.Types/GetIamPolicyRequest)
- [https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/access-control](https://docs.cloud.google.com/data-fusion/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Role Resource Permissions Cloud Data Fusion API Service Agent Associated services: BigQuery Bigtable Compute Engine Dataproc Cloud DNS Firebase Cloud Monitoring Network Connectivity Network Security Integration Network Services API Organization Policy Recommender API Cloud Resource Manager API Service Networking Service Usage Spanner Cloud Storage Cloud Service Mesh See the Cloud Data Fusion API Service Agent permissions .
- API call Permission instances.create datafusion.instances.create instances.delete datafusion.instances.delete instances.list datafusion.instances.list instances.get datafusion.instances.get instances.update datafusion.instances.update operations.cancel datafusion.operations.cancel operations.list datafusion.operations.list operations.get datafusion.operations.get Permissions for common tasks Common tasks in Cloud Data Fusion require the following permissions: Task Permissions Accessing the Cloud Data Fusion web interface datafusion.instances.get Accessing the Cloud Data Fusion Instances page in the Google Cloud console datafusion.instances.list Accessing the Details page for an instance datafusion.instances.get Creating a new instance datafusion.instances.create Updating labels and advanced options to customize an instance datafusion.instances.update Deleting an instance datafusion.instances.delete What's next Learn more about access control between multiple projects .
- Give permission to access resources in another project To grant the roles that give permission to access various resources, follow these steps: In the project where the target resource exists, add the Cloud Data Fusion Service Account ( service- CUSTOMER PROJECT NUMBER @gcp-sa-datafusion.iam.gserviceaccount.com ) as a principal.
- By default, Cloud Data Fusion uses the following service accounts: The Cloud Data Fusion Service Account The Compute Engine default service account Cloud Data Fusion Service Account The Cloud Data Fusion Service Account is a Google-managed service agent that can access customer resources at pipeline design time.

### GetIamPolicyRequest \_|\_ Cloud Data Fusion \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/reference/rest/Shared.Types/GetIamPolicyRequest](https://docs.cloud.google.com/data-fusion/docs/reference/rest/Shared.Types/GetIamPolicyRequest)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Cloud Data Fusion Reference Send feedback GetIamPolicyRequest Stay organized with collections Save and categorize content based on your preferences.
- See Resource names for the appropriate value for this field. options object ( GetPolicyOptions ) OPTIONAL: A GetPolicyOptions object for specifying options to instances.getIamPolicy .
- JSON representation { "resource" : string , "options" : { object ( GetPolicyOptions ) } } Fields resource string REQUIRED: The resource for which the policy is being requested.
- For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.

### "Dataproc provisioner properties \_|\_ Cloud Data Fusion \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc](https://docs.cloud.google.com/data-fusion/docs/concepts/dataproc)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataproc profile web interface properties mapped to JSON properties Dataproc profile UI property name Dataproc profile JSON property name Profile label name Profile name label Description description Project ID projectId Creator service account key accountKey Region region Zone zone Network network Network host project ID networkHostProjectId Subnet subnet Runner service account serviceAccount Number of masters masterNumNodes Master machine type masterMachineType Master cores masterCPUs Master memory (GB) masterMemoryMB Master disk size (GB) masterDiskGB Master disk type masterDiskType Number of primary workers workerNumNodes Number of secondary workers secondaryWorkerNumNodes Worker machine type workerMachineType Worker cores workerCPUs Worker memory (GB) workerMemoryMB Worker disk size (GB) workerDiskGB Worker disk type workerDiskType Metadata clusterMetaData Network tags networkTags Enable Secure Boot secureBootEnabled Enable vTPM vTpmEnabled Enable Integrity Monitoring integrityMonitoringEnabled Image version imageVersion Custom image URI customImageUri Cloud Storage bucket gcsBucket Encryption key name encryptionKeyName Autoscaling policy autoScalingPolicy Initialization actions initActions Cluster properties clusterProperties Labels clusterLabels Max idle time idleTTL Skip cluster delete skipDelete Enable Stackdriver Logging Integration stackdriverLoggingEnabled Enable Stackdriver Monitoring Integration stackdriverMonitoringEnabled Enable Component Gateway componentGatewayEnabled Prefer external IP preferExternalIP Create poll delay pollCreateDelay Create poll jitter pollCreateJitter Delete poll delay pollDeleteDelay Poll interval pollInterval Best Practices When you create a static cluster for your pipelines, refer to the cluster configuration best practices .
- Home Documentation Data analytics Cloud Data Fusion Guides Send feedback Dataproc provisioner properties Stay organized with collections Save and categorize content based on your preferences.
- The Dataproc provisioner in Cloud Data Fusion calls the Dataproc API to create and delete clusters in your Google Cloud projects.
- For more information about compatibility between Cloud Data Fusion versions and Dataproc versions, see Version compatibility .

