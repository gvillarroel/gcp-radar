---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:43.976Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Data Boundary for ITAR support for Key Access Justifications"
feature_slug: "data-boundary-for-itar-support-for-key-access-justifications"
latest_feature_date: "2025-12-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/ksa-data-boundary-access-justifications"
  - "https://docs.cloud.google.com/assured-workloads/docs/key-access-justifications"
keywords:
  - "justifications"
  - "key"
  - "access"
  - "boundary"
  - "itar"
  - "now"
  - "the"
  - "for"
---

# Data Boundary for ITAR support for Key Access Justifications

Product: Assured Workloads
Coverage: LOW

## Step 02 Summary

The Data Boundary for ITAR now supports Key Access Justifications.

## Extended Definition

The Data Boundary for ITAR now supports Key Access Justifications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/ksa-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/ksa-data-boundary-access-justifications)
- [https://docs.cloud.google.com/assured-workloads/docs/key-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/key-access-justifications)

## Supporting Pages

### "EU Data Boundary with Access Justifications \_|\_ Assured Workloads \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None Artifact Registry artifactregistry.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerydatatransfer.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com Affected features Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Cloud Build cloudbuild.googleapis.com Affected features Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Load Balancing compute.googleapis.com None Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud NAT compute.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud SQL sqladmin.googleapis.com Organization policy constraints Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com trafficdirector.googleapis.com networkservices.google.com None Cloud Storage storage.googleapis.com Affected features and organization policy constraints Cloud VPN compute.googleapis.com Affected features Cloud Workstations workstations.googleapis.com None Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect gkeconnect.googleapis.com connectgateway.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com Affected features Filestore file.googleapis.com None Firebase Security Rules firebaserules.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Kubernetes Engine container.googleapis.com containersecurity.googleapis.com Affected features Identity and Access Management (IAM) iam.googleapis.com policytroubleshooter.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Memorystore for Redis redis.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com Organization policy constraints Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Spanner spanner.googleapis.com Affected features Speech-to-Text speech.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on EU Data Boundary with Access Justifications folders.
- The following types are specified in this constraint value: USER ACCOUNT HMAC SIGNED REQUESTS SERVICE ACCOUNT HMAC SIGNED REQUESTS By default, HMAC keys are prevented from authenticating to Cloud Storage resources for EU Data Boundary with Access Justifications workloads.
- Google Cloud-wide Affected Google Cloud-wide features Feature Description Google Cloud console To access the Google Cloud console when using the EU Data Boundary with Access Justifications control package, you must use one of the following URLs: console.eu.cloud.google.com console.eu.cloud.google for federated identity users Google Cloud-wide organization policy constraints The following organization policy constraints apply across Google Cloud.
- When accessing the Google Cloud console for EU Data Boundary with Access Justifications workloads, you must use one of the following EU-specific Jurisdictional Google Cloud console URLs: console.eu.cloud.google.com console.eu.cloud.google for federated identity users Consider adopting the general security best practices provided in the Google Cloud security best practices center .

### "Kingdom of Saudi Arabia (KSA) Data Boundary with Access Justifications \_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/ksa-data-boundary-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/control-packages/ksa-data-boundary-access-justifications)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following types are specified in this constraint value: USER ACCOUNT HMAC SIGNED REQUESTS SERVICE ACCOUNT HMAC SIGNED REQUESTS By default, HMAC keys are prevented from authenticating to Cloud Storage resources for KSA Data Boundary with Access Justifications workloads.
- Google Cloud-wide Affected Google Cloud-wide features Feature Description Google Cloud console To access the Google Cloud console when using the KSA Data Boundary with Access Justifications control package, you must use one of the following URLs: console.sa.cloud.google.com console.sa.cloud.google for federated identity users Google Cloud-wide organization policy constraints The following organization policy constraints apply across Google Cloud.
- Global API endpoints: compute.googleapis.com servicenetworking.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on KSA Data Boundary with Access Justifications folders.
- When accessing the Google Cloud console for KSA Data Boundary with Access Justifications workloads, you must use one of the following KSA-specific Jurisdictional Google Cloud console URLs: console.sa.cloud.google.com console.sa.cloud.google for federated identity users Use only the specified regional endpoints for services that offer them.

### "Introduction to Key Access Justifications \_|\_ Assured Workloads \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/key-access-justifications](https://docs.cloud.google.com/assured-workloads/docs/key-access-justifications)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Using Key Access Justifications with Cloud External Key Manager provides visibility into requests for encryption keys that allows data to change state from at-rest to in-use.
- Introduction to Key Access Justifications Key Access Justifications provides a justification for every request to access keys stored in an external key manager.
- For more information, see Overview of Key Access Justifications .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

