---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.780Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "EU Regions and Support with Sovereignty Controls support for Artifact Registry"
feature_slug: "eu-regions-and-support-with-sovereignty-controls-support-for-artifact-registry"
latest_feature_date: "2023-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-regions"
keywords:
  - "eu"
  - "regions"
  - "sovereignty"
  - "controls"
  - "artifact"
  - "registry"
  - "compliance"
  - "program"
---

# EU Regions and Support with Sovereignty Controls support for Artifact Registry

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The EU Regions and Support with Sovereignty Controls compliance program supports Artifact Registry in Assured Workloads.

## Extended Definition

The EU Regions and Support with Sovereignty Controls compliance program supports Artifact Registry in Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-regions](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-regions)

## Supporting Pages

### "Data Boundary for International Traffic in Arms Regulations (ITAR) \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global API endpoints: alloydb.googleapis.com None Artifact Registry Regional API endpoints: artifactregistry.us-central1.rep.googleapis.com artifactregistry.us-central2.rep.googleapis.com artifactregistry.us-east1.rep.googleapis.com artifactregistry.us-east4.rep.googleapis.com artifactregistry.us-east5.rep.googleapis.com artifactregistry.us-east7.rep.googleapis.com artifactregistry.us-south1.rep.googleapis.com artifactregistry.us-west1.rep.googleapis.com artifactregistry.us-west2.rep.googleapis.com artifactregistry.us-west3.rep.googleapis.com artifactregistry.us-west4.rep.googleapis.com artifactregistry.us-west8.rep.googleapis.com Locational API endpoints are not supported.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- The following additional information applies to ITAR: Data residency : The ITAR control package sets data location controls to support US-only regions .
- Global API endpoints: artifactregistry.googleapis.com None Backup for GKE Regional API endpoints are not supported.

### "EU Data Boundary with Access Justifications \_|\_ Assured Workloads \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications)
- Source ID: `site-docs-root-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None Artifact Registry artifactregistry.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerydatatransfer.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com Affected features Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Cloud Build cloudbuild.googleapis.com Affected features Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Load Balancing compute.googleapis.com None Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud NAT compute.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud SQL sqladmin.googleapis.com Organization policy constraints Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com trafficdirector.googleapis.com networkservices.google.com None Cloud Storage storage.googleapis.com Affected features and organization policy constraints Cloud VPN compute.googleapis.com Affected features Cloud Workstations workstations.googleapis.com None Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect gkeconnect.googleapis.com connectgateway.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com Affected features Filestore file.googleapis.com None Firebase Security Rules firebaserules.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Kubernetes Engine container.googleapis.com containersecurity.googleapis.com Affected features Identity and Access Management (IAM) iam.googleapis.com policytroubleshooter.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Memorystore for Redis redis.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com Organization policy constraints Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Spanner spanner.googleapis.com Affected features Speech-to-Text speech.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on EU Data Boundary with Access Justifications folders.
- This constraint prevents unapproved folders or projects from providing encryption keys, thus helping to guarantee data sovereignty for in-scope services' at-rest data. gcp.restrictNonCmekServices Set to a list of all in-scope API service names , including: aiplatform.googleapis.com artifactregistry.googleapis.com bigquery.googleapis.com bigquerydatatransfer.googleapis.com bigtable.googleapis.com cloudfunctions.googleapis.com composer.googleapis.com compute.googleapis.com container.googleapis.com dataflow.googleapis.com dataproc.googleapis.com documentai.googleapis.com integrations.googleapis.com logging.googleapis.com notebooks.googleapis.com pubsub.googleapis.com run.googleapis.com secretmanager.googleapis.com spanner.googleapis.com sqladmin.googleapis.com storage.googleapis.com workstations.googleapis.com Some features may be affected for each of the services listed above.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- The following additional information applies to EU Data Boundary with Access Justifications: Data residency : The EU Data Boundary with Access Justifications control package sets data location controls to support EU-only regions .

### EU Data Boundary \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-regions](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-regions)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Approval accessapproval.googleapis.com None Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None Agent Assist dialogflow.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com None Apigee apigee.googleapis.com None App Hub apphub.googleapis.com None Artifact Registry artifactregistry.googleapis.com None AutoML Tables automl.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerydatatransfer.googleapis.com bigquerymigration.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com None Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Certificate Manager certificatemanager.googleapis.com None Cloud Asset Inventory cloudasset.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud Domains domains.googleapis.com None Cloud DNS dns.googleapis.com None Cloud Data Fusion datafusion.googleapis.com None Cloud Deploy clouddeploy.googleapis.com None Cloud External Key Manager (Cloud EKM) cloudkms.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Interconnect compute.googleapis.com None Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com None Cloud Load Balancing compute.googleapis.com None Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com None Cloud NAT compute.googleapis.com None Cloud OS Login API oslogin.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud Run functions run.googleapis.com None Cloud SQL sqladmin.googleapis.com None Cloud SQL for PostgreSQL sqladmin.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com None Cloud Vision API vision.googleapis.com None Cloud Workstations workstations.googleapis.com None Compliance Manager cloudsecuritycompliance.googleapis.com None Compute Engine compute.googleapis.com Affected features and organization policy constraints Config Sync anthosconfigmanagement.googleapis.com None Connect gkeconnect.googleapis.com None Dialogflow CX dialogflow.googleapis.com None Customer Experience Insights contactcenterinsights.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Database Center Not applicable None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataform dataform.googleapis.com None Knowledge Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com None Data Security Posture Management N/A None Document AI documentai.googleapis.com None Essential Contacts essentialcontacts.googleapis.com None Eventarc eventarc.googleapis.com None Filestore file.googleapis.com None Firebase Security Rules firebaserules.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None GKE Image streaming containerfilesystem.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Gemini Enterprise discoveryengine.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Cloud Managed Service for Apache Kafka managedkafka.googleapis.com None Google Cloud NetApp Volumes netapp.googleapis.com Affected features Google Kubernetes Engine (GKE) container.googleapis.com containersecurity.googleapis.com None Google Security Operations SIEM chronicle.googleapis.com chronicleservicemanager.googleapis.com None Google Security Operations SOAR Not applicable None Identity and Access Management (IAM) iam.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Infrastructure Manager config.googleapis.com None Looker (Google Cloud core) looker.googleapis.com None Memorystore for Redis redis.googleapis.com None Model Armor modelarmor.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Organization Policy Service orgpolicy.googleapis.com None Persistent Disk compute.googleapis.com None Personalized Service Health servicehealth.googleapis.com None Pub/Sub pubsub.googleapis.com None Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Security Command Center securitycenter.googleapis.com securitycentermanagement.googleapis.com securityposture.googleapis.com websecurityscanner.googleapis.com None Serverless VPC Access vpcaccess.googleapis.com None Speech-to-Text speech.googleapis.com None Storage Transfer Service storagetransfer.googleapis.com None Text-to-Speech texttospeech.googleapis.com None Cloud Service Mesh trafficdirector.googleapis.com None VM Manager osconfig.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Model Monitoring aiplatform.googleapis.com None Vertex AI Model Registry aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Pipelines aiplatform.googleapis.com None Vertex AI Search discoveryengine.googleapis.com None Vertex AI Training aiplatform.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Web Risk webrisk.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on EU Data Boundary folders.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- The following additional information applies to EU Data Boundary: Data residency : The EU Data Boundary control package sets data location controls to support EU-only regions .
- These components help you meet data sovereignty through internal security controls and processes.

