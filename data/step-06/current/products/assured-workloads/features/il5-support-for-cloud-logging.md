---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.747Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "IL5 support for Cloud Logging"
feature_slug: "il5-support-for-cloud-logging"
latest_feature_date: "2023-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/audit-logging"
  - "https://docs.cloud.google.com/assured-workloads/docs/compliance-programs"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/india-data-boundary"
keywords:
  - "il5"
  - "logging"
  - "compliance"
  - "program"
  - "supports"
  - "assured"
  - "workloads"
---

# IL5 support for Cloud Logging

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The IL5 compliance program supports Cloud Logging in Assured Workloads.

## Extended Definition

The IL5 compliance program supports Cloud Logging in Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/docs/audit-logging)
- [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/india-data-boundary](https://docs.cloud.google.com/assured-workloads/docs/control-packages/india-data-boundary)

## Supporting Pages

### Assured Workloads audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/audit-logging](https://docs.cloud.google.com/assured-workloads/docs/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.GetWorkload google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.ListWorkloads google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.GetWorkload google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.ListWorkloads ADMIN WRITE google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableResourceMonitoring google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableComplianceUpdates google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableResourceMonitoring API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Assured Workloads. google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService The following audit logs are associated with methods belonging to google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService .
- Filter for this method : protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableComplianceUpdates" EnableResourceMonitoring Method : google.cloud.assuredworkloads.versioning.v1beta1.AssuredWorkloadsV1MainService.EnableResourceMonitoring Audit log type : Admin activity Permissions : assuredworkloads.workload.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates" EnableResourceMonitoring Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableResourceMonitoring Audit log type : Admin activity Permissions : assuredworkloads.workload.update - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.AnalyzeWorkloadMove" EnableComplianceUpdates Method : google.cloud.assuredworkloads.versioning.v1.AssuredWorkloadsV1MainService.EnableComplianceUpdates Audit log type : Admin activity Permissions : assuredworkloads.workload.update - ADMIN WRITE Method is a long-running or streaming operation : No.

### Control packages \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/compliance-programs](https://docs.cloud.google.com/assured-workloads/docs/compliance-programs)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Premium What's next Learn how to create an Assured Workloads folder Learn more about controlling access to data by personnel Learn which products are supported for each control package Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Therefore, if you're pursuing a FedRAMP Moderate ATO for your workloads deployed in Assured Workloads, you can use any FedRAMP High authorized Google Cloud service in your FedRAMP Moderate workloads.
- Home Documentation Security Assured Workloads Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- This means that Assured Workloads support cases are restricted to FedRAMP-adjudicated first-level and second-level support staff located in the US.

### India Data Boundary \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/india-data-boundary](https://docs.cloud.google.com/assured-workloads/docs/control-packages/india-data-boundary)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If this occurs, you will be notified of potential non-compliance through the Assured Workloads monitoring dashboard .
- Supported product API endpoints Restrictions or limitations Access Approval accessapproval.googleapis.com None Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com None Apigee apigee.googleapis.com None App Hub apphub.googleapis.com None Artifact Registry artifactregistry.googleapis.com None AutoML Tables automl.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerydatatransfer.googleapis.com bigquerymigration.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com None Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Certificate Manager certificatemanager.googleapis.com None Cloud Asset Inventory cloudasset.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud Domains domains.googleapis.com None Cloud DNS dns.googleapis.com None Cloud Data Fusion datafusion.googleapis.com None Cloud Deploy clouddeploy.googleapis.com None Cloud External Key Manager (Cloud EKM) cloudkms.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Interconnect compute.googleapis.com None Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com None Cloud Load Balancing compute.googleapis.com None Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com None Cloud NAT compute.googleapis.com None Cloud OS Login API oslogin.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud Run functions run.googleapis.com None Cloud SQL sqladmin.googleapis.com None Cloud SQL for PostgreSQL sqladmin.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com None Cloud Vision API vision.googleapis.com None Cloud Workstations workstations.googleapis.com None Compliance Manager cloudsecuritycompliance.googleapis.com None Compute Engine compute.googleapis.com Affected features and organization policy constraints Config Sync anthosconfigmanagement.googleapis.com None Connect gkeconnect.googleapis.com None Dialogflow CX dialogflow.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Database Center Not applicable None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataform dataform.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com None Document AI documentai.googleapis.com None Essential Contacts essentialcontacts.googleapis.com None Eventarc eventarc.googleapis.com None Filestore file.googleapis.com None Firebase Security Rules firebaserules.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None GKE Image streaming containerfilesystem.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Cloud Managed Service for Apache Kafka managedkafka.googleapis.com None Google Cloud NetApp Volumes netapp.googleapis.com Affected features Google Kubernetes Engine (GKE) container.googleapis.com containersecurity.googleapis.com None Google Security Operations SIEM chronicle.googleapis.com chronicleservicemanager.googleapis.com None Google Security Operations SOAR Not applicable None Identity and Access Management (IAM) iam.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Infrastructure Manager config.googleapis.com None Looker (Google Cloud core) looker.googleapis.com None Memorystore for Redis redis.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Organization Policy Service orgpolicy.googleapis.com None Persistent Disk compute.googleapis.com None Personalized Service Health servicehealth.googleapis.com None Pub/Sub pubsub.googleapis.com None Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Serverless VPC Access vpcaccess.googleapis.com None Speech-to-Text speech.googleapis.com None Storage Transfer Service storagetransfer.googleapis.com None Text-to-Speech texttospeech.googleapis.com None Cloud Service Mesh trafficdirector.googleapis.com None VM Manager osconfig.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Model Monitoring aiplatform.googleapis.com None Vertex AI Model Registry aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Pipelines aiplatform.googleapis.com None Vertex AI Search discoveryengine.googleapis.com None Vertex AI Training aiplatform.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Web Risk webrisk.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on India Data Boundary folders.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- What's next Learn how to create an Assured Workloads folder Understand Assured Workloads pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

