---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:11:44.424Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Assured Workloads IL4 program support for Cloud Router"
feature_slug: "assured-workloads-il4-program-support-for-cloud-router"
latest_feature_date: "2023-11-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/release-notes"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4"
  - "https://docs.cloud.google.com/assured-workloads/docs/configure-vpc-sc"
keywords:
  - "router"
  - "workloads"
  - "program"
  - "assured"
  - "under"
  - "il4"
  - "adds"
  - "for"
---

# Assured Workloads IL4 program support for Cloud Router

Product: Assured Workloads
Coverage: LOW

## Step 02 Summary

Assured Workloads adds support for Cloud Router under the IL4 compliance program.

## Extended Definition

Assured Workloads adds support for Cloud Router under the IL4 compliance program.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/release-notes](https://docs.cloud.google.com/assured-workloads/docs/release-notes)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4](https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4)
- [https://docs.cloud.google.com/assured-workloads/docs/configure-vpc-sc](https://docs.cloud.google.com/assured-workloads/docs/configure-vpc-sc)

## Supporting Pages

### Assured Workloads release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/docs/release-notes](https://docs.cloud.google.com/assured-workloads/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- October 05, 2022 v1 Issue If you create a public cluster on Google Kubernetes Engine (GKE) version 1.23 or newer in any existing Assured Workloads compliance regime folder, it might fail with the following error: ManagedResourceService.AddServiceBundle, PERMISSION DENIED'/> APPLICATION ERROR;google.cloud.servicedirectory.v1beta1/ManagedResourceService.AddServiceBundle;Request is disallowed by organization's constraints/gcp.restrictServiceUsage constraint for 'projects/<projectID> attempting to use service 'servicedirectory.googleapis.com' To fix this issue, the Service Directory API ( servicedirectory.googleapis.com ) must be added as an allowed service on the resource usage restriction organization policy for the folder.
- See supported products for more information: Australia Regions with Assured Support : Access Transparency Canada Regions and Support : Access Transparency EU Regions and Support : Access Approval Certificate Authority Service Cloud Monitoring Cloud Run Firestore Sensitive Data Protection FedRAMP Moderate : Artifact Registry Cloud Workstations Israel Regions and Support : Dataflow Memorystore for Redis Japan Regions : Access Approval Access Transparency US Regions and Support : Access Transparency November 16, 2023 v1 Feature The IL4 compliance program now supports the following products.
- June 20, 2025 v1 Feature The IRS 1075 control package now supports the following products: Access Transparency Backup for GKE Cloud Healthcare API Cloud OS Login API Cloud Workstations Conversational Agents Conversational Insights Dataplex Universal Catalog Document AI Essential Contacts Eventarc External passthrough Network Load Balancer Generative AI on Vertex AI Google Agentspace Google Cloud Armor Google Cloud NetApp Volumes Google Security Operations SOAR Identity and Access Management (IAM) Infrastructure Manager Integration Connectors Internal passthrough Network Load balancer Jurisdictional Cloud Console Looker (Google Cloud core) Organization Policy Service Regional external Application Load Balancer Regional external proxy Network Load Balancer Regional internal Application Load Balancer Regional internal proxy Network Load Balancer Storage Transfer Service VPC Service Controls Virtual Private Cloud (VPC) v1 Change The names for some Assured Workloads control packages have changed.
- However, areas with potential impact include the following: Using the REST API and gcloud : Use REGIONAL CONTROLS instead of FREE REGIONS when calling organizations.locations.workloads.create to create a new Assured Workloads folder/workload Expect REGIONAL CONTROLS as the return value for ComplianceRegime from calls to organizations.locations.workloads.get and organizations.locations.workloads.list Using Terraform: Use REGIONAL CONTROLS instead of FREE REGIONS April 01, 2024 v1 Announcement The following new control packages are now available in Preview .

### "Data Boundary for Impact Level 4 (IL4) \_|\_ Assured Workloads \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4](https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Prerequisites To remain compliant as a user of the Data Boundary for IL4 control package, verify that you satisfy and adhere to the following prerequisites: Create a Data Boundary for IL4 folder using Assured Workloads and deploy your IL4 workloads only in that folder.
- Pricing : The Data Boundary for IL4 control package is included in Assured Workloads' Premium tier , which incurs an additional 20% charge.
- This page describes the set of controls that are applied on Data Boundary for IL4 workloads in Assured Workloads.
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Artifact Registry artifactregistry.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerymigration.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features and organization policy constraints Certificate Authority Service privateca.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com None Cloud Data Fusion datafusion.googleapis.com None Cloud External Key Manager (Cloud EKM) cloudkms.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Identity cloudidentity.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Logging logging.googleapis.com monitoring.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud NAT compute.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud SQL sqladmin.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com trafficdirector.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com Affected features Cloud Vision API vision.googleapis.com Affected features Cloud Workstations workstations.googleapis.com Affected features Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect Agent connectgateway.googleapis.com gkeconnect.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com None Eventarc eventarc.googleapis.com None External passthrough Network Load Balancer compute.googleapis.com None Filestore file.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None Gemini Enterprise discoveryengine.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Google Cloud Armor compute.googleapis.com Affected features Google Kubernetes Engine container.googleapis.com containersecurity.googleapis.com None Google Security Operations SOAR Not applicable None Google Admin console Not applicable None Identity and Access Management (IAM) iam.googleapis.com policytroubleshooter.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Internal passthrough Network Load Balancer compute.googleapis.com None Memorystore for Redis redis.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com Organization policy constraints Regional external Application Load Balancer compute.googleapis.com None Regional external proxy Network Load Balancer compute.googleapis.com None Regional internal Application Load Balancer compute.googleapis.com None Regional internal proxy Network Load Balancer compute.googleapis.com None Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Spanner spanner.googleapis.com None Speech-to-Text speech.googleapis.com Affected features VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Model Monitoring aiplatform.googleapis.com None Vertex AI Model Registry aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Pipelines aiplatform.googleapis.com None Vertex AI Search discoveryengine.googleapis.com None Vertex AI Training aiplatform.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com servicenetworking.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on Data Boundary for IL4 folders.

### "Configure VPC Service Controls for Assured Workloads \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/configure-vpc-sc](https://docs.cloud.google.com/assured-workloads/docs/configure-vpc-sc)
- Source ID: `site-docs-root-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For your IL4 workloads, these should be the projects that are within your Assured Workloads IL4 folder.
- Use VPC Service Controls with Terraform You can use the Terraform to synchronize your Assured Workloads folder with a VPC Service Controls permit if you want your Assured Workloads regulated boundary to be aligned with your VPC Service Controls boundary.
- Configure VPC Service Controls for Assured Workloads Overview Assured Workloads helps you comply with different regulatory compliance frameworks by implementing logical controls that segment networks and users from in-scope sensitive data.
- You should only select services that are in scope for your Assured Workloads folder. (Optional) In the VPC Accessible Services tab, you can further restrict services within your service perimeter from communicating with each other.

