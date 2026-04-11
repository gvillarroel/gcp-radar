---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:43.978Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Data Boundary for ITAR support for Security Command Center Premium"
feature_slug: "data-boundary-for-itar-support-for-security-command-center-premium"
latest_feature_date: "2025-12-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences-support"
keywords:
  - "premium"
  - "security"
  - "command"
  - "boundary"
  - "center"
  - "itar"
  - "the"
  - "for"
---

# Data Boundary for ITAR support for Security Command Center Premium

Product: Assured Workloads
Coverage: LOW

## Step 02 Summary

The Data Boundary for ITAR now supports Security Command Center Premium.

## Extended Definition

The Data Boundary for ITAR now supports Security Command Center Premium.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis](https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences-support](https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences-support)

## Supporting Pages

### "Data Boundary for International Traffic in Arms Regulations (ITAR) \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Security Command Center Premium Affected Security Command Center Premium features Feature Description Compliance Manager Compliance Manager is unsupported and has not met the control requirements for ITAR.
- For all services used in an ITAR folder, don't store technical data in the following user-defined or security configuration information types: Error messages Console output Attribute data Service configuration data Network packet headers Resource identifiers Data labels Use only the specified regional endpoints for services that offer them.
- Data Boundary for International Traffic in Arms Regulations (ITAR) Important: Before following the guidance on this page, you should seek independent legal advice relating to your responsibilities under ITAR.
- Global API endpoints: securesourcemanager.googleapis.com None Security Command Center Premium Regional API endpoints: securitycenter.us.rep.googleapis.com Locational API endpoints are not supported.

### "Data Boundary for Criminal Justice Information Systems (CJIS) \_|\_ Assured\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis](https://docs.cloud.google.com/assured-workloads/docs/control-packages/cjis)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None Agent Assist dialogflow.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Apigee apigee.googleapis.com None App Hub apphub.googleapis.com None Application Integration integrations.googleapis.com None Artifact Registry artifactregistry.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigquerydatapolicy.googleapis.com bigquerymigration.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features BigQuery Data Transfer Service bigquerydatatransfer.googleapis.com None Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com None Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Certificate Manager certificatemanager.googleapis.com None Cloud Asset Inventory cloudasset.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com Affected features Cloud Data Fusion datafusion.googleapis.com None Cloud Deploy clouddeploy.googleapis.com None Cloud Domains domains.googleapis.com None Cloud External Key Manager (Cloud EKM) cloudkms.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Identity cloudidentity.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Load Balancing compute.googleapis.com Affected features Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud NAT compute.googleapis.com Affected features Cloud OS Login API oslogin.googleapis.com None Cloud Router compute.googleapis.com Affected features Cloud Run run.googleapis.com Affected features Cloud Run functions run.googleapis.com None Cloud SQL sqladmin.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com Affected features Cloud Vision API vision.googleapis.com None Cloud Workstations workstations.googleapis.com None Compliance Manager cloudsecuritycompliance.googleapis.com None Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect gkeconnect.googleapis.com None Dialogflow CX dialogflow.googleapis.com None Customer Experience Insights contactcenterinsights.googleapis.com Affected features Sensitive Data Protection dlp.googleapis.com None Data Security Posture Management N/A None Database Center databasecenter.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataform dataform.googleapis.com Affected features Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com None Document AI documentai.googleapis.com None Essential Contacts essentialcontacts.googleapis.com None Eventarc eventarc.googleapis.com None External passthrough Network Load Balancer compute.googleapis.com None Filestore file.googleapis.com None Firebase Security Rules firebaserules.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None GKE Image streaming containerfilesystem.googleapis.com None Gemini Enterprise discoveryengine.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Kubernetes Engine (GKE) container.googleapis.com containersecurity.googleapis.com None Google Admin console N/A None Identity and Access Management (IAM) iam.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Infrastructure Manager config.googleapis.com None Internal passthrough Network Load Balancer compute.googleapis.com None Key Access Justifications cloudekm.googleapis.com cloudkms.googleapis.com None Looker (Google Cloud core) looker.googleapis.com None Memorystore for Redis redis.googleapis.com None Model Armor modelarmor.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com Affected features Organization Policy Service orgpolicy.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com None Regional external Application Load Balancer compute.googleapis.com None Regional external proxy Network Load Balancer compute.googleapis.com None Regional internal Application Load Balancer compute.googleapis.com None Regional internal proxy Network Load Balancer compute.googleapis.com None Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Security Command Center Premium securitycenter.googleapis.com securitycentermanagement.googleapis.com securityposture.googleapis.com websecurityscanner.googleapis.com None Spanner spanner.googleapis.com Organization policy constraints Speech-to-Text speech.googleapis.com Affected features Storage Transfer Service storagetransfer.googleapis.com None Text-to-Speech texttospeech.googleapis.com None VM Manager osconfig.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Model Monitoring aiplatform.googleapis.com None Vertex AI Model Registry aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Pipelines aiplatform.googleapis.com None Vertex AI Search discoveryengine.googleapis.com Affected features Vertex AI Training aiplatform.googleapis.com None Vertex AI Workbench notebooks.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Web Risk webrisk.googleapis.com None Workforce Identity Federation iam.googleapis.com sts.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on CJIS folders.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- Run the following command to change the VM's password: gcloud compute ssh VM NAME --command "net user USE R NAME PAS SWORD" Replace the following: VM NAME : The name of the VM you're setting the password for.
- Data Boundary for Criminal Justice Information Systems (CJIS) Important: Before following the guidance on this page, you should seek independent legal advice relating to your responsibilities under CJIS.

### "US Data Boundary for Healthcare and Life Sciences with Support \_|\_ Assured\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences-support](https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences-support)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Approval accessapproval.googleapis.com None Access Context Manager accesscontextmanager.googleapis.com None Access Transparency accessapproval.googleapis.com None Agent Assist dialogflow.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Apigee apigee.googleapis.com None Application Integration integrations.googleapis.com None Artifact Registry artifactregistry.googleapis.com None AutoML Tables automl.googleapis.com None Backup and DR Service backupdr.googleapis.com None Backup for GKE gkebackup.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerydatatransfer.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features BigQuery Data Transfer Service bigquerydatatransfer.googleapis.com None Bigtable bigtable.googleapis.com bigtableadmin.googleapis.com Affected features Binary Authorization binaryauthorization.googleapis.com None Certificate Authority Service privateca.googleapis.com None Certificate Manager certificatemanager.googleapis.com None Cloud Asset Inventory cloudasset.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com None Cloud Data Fusion datafusion.googleapis.com None Cloud Deploy clouddeploy.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Healthcare API healthcare.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com None Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud Run functions run.googleapis.com None Cloud SQL sqladmin.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com trafficdirector.googleapis.com networkservices.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com Affected features Cloud Vision API vision.googleapis.com Affected features Compute Engine compute.googleapis.com Affected features and organization policy constraints Dialogflow CX dialogflow.googleapis.com None Customer Experience Insights contactcenterinsights.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataform dataform.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com None Document AI documentai.googleapis.com None Eventarc eventarc.googleapis.com None External passthrough Network Load Balancer compute.googleapis.com None Filestore file.googleapis.com None Firestore firestore.googleapis.com None GKE Hub gkehub.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Google Cloud Armor compute.googleapis.com networksecurity.googleapis.com Affected features Google Kubernetes Engine (GKE) container.googleapis.com containersecurity.googleapis.com None Identity and Access Management (IAM) iam.googleapis.com policytroubleshooter.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Internal passthrough Network Load Balancer compute.googleapis.com None Key Access Justifications cloudekm.googleapis.com cloudkms.googleapis.com None Looker (Google Cloud core) looker.googleapis.com None Memorystore for Redis redis.googleapis.com None Model Armor modelarmor.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com Affected features Persistent Disk compute.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com Organization policy constraints Regional external Application Load Balancer compute.googleapis.com None Regional external proxy Network Load Balancer compute.googleapis.com None Regional internal Application Load Balancer compute.googleapis.com None Regional internal proxy Network Load Balancer compute.googleapis.com None Secret Manager secretmanager.googleapis.com None Secure Source Manager securesourcemanager.googleapis.com None Security Command Center Premium securitycenter.googleapis.com securitycentermanagement.googleapis.com securityposture.googleapis.com websecurityscanner.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Spanner spanner.googleapis.com Affected features and organization policy constraints Speech-to-Text speech.googleapis.com None Storage Transfer Service storagetransfer.googleapis.com None Text-to-Speech texttospeech.googleapis.com None VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Search discoveryengine.googleapis.com None Vertex AI Training aiplatform.googleapis.com None Vertex AI Workbench notebooks.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on US Data Boundary for Healthcare and Life Sciences with Support folders.
- Pricing : The US Data Boundary for Healthcare and Life Sciences with Support control package is included in Assured Workloads' Premium tier , which incurs a 5% additional charge.
- What's next Learn how to create an Assured Workloads folder Learn about the US Data Boundary for Healthcare and Life Sciences control package Understand Assured Workloads pricing Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Prerequisites To remain compliant as a user of the US Data Boundary for Healthcare and Life Sciences with Support control package, verify that you satisfy and adhere to the following prerequisites: Create a US Data Boundary for Healthcare and Life Sciences with Support folder using Assured Workloads and deploy your HIPAA or HITRUST workloads only in that folder.

