---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:44.327Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Sovereign Controls for EU control package support for Access Context Manager"
feature_slug: "sovereign-controls-for-eu-control-package-support-for-access-context-manager"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis"
keywords:
  - "context"
  - "sovereign"
  - "controls"
  - "access"
  - "package"
  - "control"
  - "for"
  - "eu"
---

# Sovereign Controls for EU control package support for Access Context Manager

Product: Assured Workloads
Coverage: LOW

## Step 02 Summary

The Sovereign Controls for EU control package now supports Access Context Manager.

## Extended Definition

The Sovereign Controls for EU control package now supports Access Context Manager.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages](https://docs.cloud.google.com/assured-workloads/docs/control-packages)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis](https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis)

## Supporting Pages

### "EU Data Boundary with Access Justifications \_|\_ Assured Workloads \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications)
- Source ID: `site-docs-root-2`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None Artifact Registry artifactregistry.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerydatatransfer.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com Affected features Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Cloud Build cloudbuild.googleapis.com Affected features Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Load Balancing compute.googleapis.com None Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud NAT compute.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud SQL sqladmin.googleapis.com Organization policy constraints Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com trafficdirector.googleapis.com networkservices.google.com None Cloud Storage storage.googleapis.com Affected features and organization policy constraints Cloud VPN compute.googleapis.com Affected features Cloud Workstations workstations.googleapis.com None Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect gkeconnect.googleapis.com connectgateway.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com Affected features Filestore file.googleapis.com None Firebase Security Rules firebaserules.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Kubernetes Engine container.googleapis.com containersecurity.googleapis.com Affected features Identity and Access Management (IAM) iam.googleapis.com policytroubleshooter.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Memorystore for Redis redis.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com Organization policy constraints Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Spanner spanner.googleapis.com Affected features Speech-to-Text speech.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on EU Data Boundary with Access Justifications folders.
- The following additional information applies to EU Data Boundary with Access Justifications: Data residency : The EU Data Boundary with Access Justifications control package sets data location controls to support EU-only regions .
- Google Cloud-wide Affected Google Cloud-wide features Feature Description Google Cloud console To access the Google Cloud console when using the EU Data Boundary with Access Justifications control package, you must use one of the following URLs: console.eu.cloud.google.com console.eu.cloud.google for federated identity users Google Cloud-wide organization policy constraints The following organization policy constraints apply across Google Cloud.
- These split boundaries are accessible by Google personnel for technical support and debugging purposes, and are not subject to administrative access data controls in Assured Workloads.

### Control packages \_|\_ Assured Workloads \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages](https://docs.cloud.google.com/assured-workloads/docs/control-packages)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Support access controls for first-level and second-level support are set to personnel who are based in the EU, regardless of whether support is provided by Google or a Subprocessor , and provides data residency and data sovereignty assurances for EU-based customers.
- Each in-scope service must meet the following requirements: Listed on Google Cloud's HIPAA Business Associate Agreement (BAA) page Listed on Google Cloud's HITRUST Common Security Framework (CSF) page Supports Cloud KMS Customer-managed encryption keys (CMEK) Supports VPC Service Controls Supports Access Transparency logs and Access Approval requests Supports at-rest data residency restricted to US locations Free US Data Boundary for Healthcare and Life Sciences with Support The US Data Boundary for Healthcare and Life Sciences with Support control package supports data location controls restricted to US-only regions .
- Premium Data Boundary for FedRAMP Moderate The Data Boundary for FedRAMP Moderate control package sets support access controls for first-level support personnel who have completed enhanced background checks, regardless of whether support is provided by Google or a Subprocessor .
- Control packages are organized into control package families according to the type of controls they provide: Regional data boundaries provide data residency with optional personnel controls, regional support, and sovereignty features such as Key Access Justifications .

### "Data Boundary for Criminal Justice Information Systems (CJIS) \_|\_ Assured\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis](https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None Agent Assist dialogflow.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Apigee apigee.googleapis.com None App Hub apphub.googleapis.com None Application Integration integrations.googleapis.com None Artifact Registry artifactregistry.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigquerydatapolicy.googleapis.com bigquerymigration.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features BigQuery Data Transfer Service bigquerydatatransfer.googleapis.com None Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com None Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Certificate Manager certificatemanager.googleapis.com None Cloud Asset Inventory cloudasset.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com Affected features Cloud Data Fusion datafusion.googleapis.com None Cloud Deploy clouddeploy.googleapis.com None Cloud Domains domains.googleapis.com None Cloud External Key Manager (Cloud EKM) cloudkms.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Identity cloudidentity.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Load Balancing compute.googleapis.com Affected features Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud NAT compute.googleapis.com Affected features Cloud OS Login API oslogin.googleapis.com None Cloud Router compute.googleapis.com Affected features Cloud Run run.googleapis.com Affected features Cloud Run functions run.googleapis.com None Cloud SQL sqladmin.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com Affected features Cloud Vision API vision.googleapis.com None Cloud Workstations workstations.googleapis.com None Compliance Manager cloudsecuritycompliance.googleapis.com None Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect gkeconnect.googleapis.com None Dialogflow CX dialogflow.googleapis.com None Customer Experience Insights contactcenterinsights.googleapis.com Affected features Sensitive Data Protection dlp.googleapis.com None Data Security Posture Management N/A None Database Center databasecenter.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataform dataform.googleapis.com Affected features Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com None Document AI documentai.googleapis.com None Essential Contacts essentialcontacts.googleapis.com None Eventarc eventarc.googleapis.com None External passthrough Network Load Balancer compute.googleapis.com None Filestore file.googleapis.com None Firebase Security Rules firebaserules.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None GKE Image streaming containerfilesystem.googleapis.com None Gemini Enterprise discoveryengine.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Kubernetes Engine (GKE) container.googleapis.com containersecurity.googleapis.com None Google Admin console N/A None Identity and Access Management (IAM) iam.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Infrastructure Manager config.googleapis.com None Internal passthrough Network Load Balancer compute.googleapis.com None Key Access Justifications cloudekm.googleapis.com cloudkms.googleapis.com None Looker (Google Cloud core) looker.googleapis.com None Memorystore for Redis redis.googleapis.com None Model Armor modelarmor.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com Affected features Organization Policy Service orgpolicy.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com None Regional external Application Load Balancer compute.googleapis.com None Regional external proxy Network Load Balancer compute.googleapis.com None Regional internal Application Load Balancer compute.googleapis.com None Regional internal proxy Network Load Balancer compute.googleapis.com None Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Security Command Center Premium securitycenter.googleapis.com securitycentermanagement.googleapis.com securityposture.googleapis.com websecurityscanner.googleapis.com None Spanner spanner.googleapis.com Organization policy constraints Speech-to-Text speech.googleapis.com Affected features Storage Transfer Service storagetransfer.googleapis.com None Text-to-Speech texttospeech.googleapis.com None VM Manager osconfig.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Model Monitoring aiplatform.googleapis.com None Vertex AI Model Registry aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Pipelines aiplatform.googleapis.com None Vertex AI Search discoveryengine.googleapis.com Affected features Vertex AI Training aiplatform.googleapis.com None Vertex AI Workbench notebooks.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Web Risk webrisk.googleapis.com None Workforce Identity Federation iam.googleapis.com sts.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on CJIS folders.
- These split boundaries are accessible by Google personnel for technical support and debugging purposes, and are not subject to administrative access data controls in Assured Workloads.
- The following additional information applies to CJIS: Data residency : The CJIS control package sets data location controls to support US-only regions .
- Google Cloud-wide Affected Google Cloud-wide features Feature Description Google Cloud console To access the Google Cloud console when using the CJIS control package, you have the option of using the Jurisdictional Google Cloud console .

