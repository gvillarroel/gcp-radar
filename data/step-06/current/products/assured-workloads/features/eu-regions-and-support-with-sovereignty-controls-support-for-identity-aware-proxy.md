---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:31.045Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "EU Regions and Support with Sovereignty Controls support for Identity-Aware Proxy"
feature_slug: "eu-regions-and-support-with-sovereignty-controls-support-for-identity-aware-proxy"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/il5"
  - "https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar"
keywords:
  - "eu"
  - "regions"
  - "sovereignty"
  - "controls"
  - "identity"
  - "aware"
  - "proxy"
  - "compliance"
---

# EU Regions and Support with Sovereignty Controls support for Identity-Aware Proxy

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The EU Regions and Support with Sovereignty Controls compliance regime supports Identity-Aware Proxy in Assured Workloads.

## Extended Definition

The EU Regions and Support with Sovereignty Controls compliance regime supports Identity-Aware Proxy in Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4](https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/il5](https://docs.cloud.google.com/assured-workloads/docs/control-packages/il5)
- [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)

## Supporting Pages

### "Data Boundary for Impact Level 4 (IL4) \_|\_ Assured Workloads \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4](https://docs.cloud.google.com/assured-workloads/docs/control-packages/il4)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Artifact Registry artifactregistry.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerymigration.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features and organization policy constraints Certificate Authority Service privateca.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com None Cloud Data Fusion datafusion.googleapis.com None Cloud External Key Manager (Cloud EKM) cloudkms.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Identity cloudidentity.googleapis.com None Cloud Interconnect compute.googleapis.com Affected features Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Logging logging.googleapis.com monitoring.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com Affected features Cloud NAT compute.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud SQL sqladmin.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com trafficdirector.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com Affected features Cloud Vision API vision.googleapis.com Affected features Cloud Workstations workstations.googleapis.com Affected features Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect Agent connectgateway.googleapis.com gkeconnect.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc-control.googleapis.com dataproc.googleapis.com None Eventarc eventarc.googleapis.com None External passthrough Network Load Balancer compute.googleapis.com None Filestore file.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None Gemini Enterprise discoveryengine.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Google Cloud Armor compute.googleapis.com Affected features Google Kubernetes Engine container.googleapis.com containersecurity.googleapis.com None Google Security Operations SOAR Not applicable None Google Admin console Not applicable None Identity and Access Management (IAM) iam.googleapis.com policytroubleshooter.googleapis.com None Identity-Aware Proxy (IAP) iap.googleapis.com None Internal passthrough Network Load Balancer compute.googleapis.com None Memorystore for Redis redis.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com Organization policy constraints Regional external Application Load Balancer compute.googleapis.com None Regional external proxy Network Load Balancer compute.googleapis.com None Regional internal Application Load Balancer compute.googleapis.com None Regional internal proxy Network Load Balancer compute.googleapis.com None Resource Manager cloudresourcemanager.googleapis.com None Secret Manager secretmanager.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Spanner spanner.googleapis.com None Speech-to-Text speech.googleapis.com Affected features VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Model Monitoring aiplatform.googleapis.com None Vertex AI Model Registry aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Pipelines aiplatform.googleapis.com None Vertex AI Search discoveryengine.googleapis.com None Vertex AI Training aiplatform.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com servicenetworking.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on Data Boundary for IL4 folders.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- The following additional information applies to Data Boundary for IL4: Data residency : The Data Boundary for IL4 control package sets data location controls to support US-only regions .
- Before using an unsupported product, ensure that you are aware of and are willing to accept any associated risks involved, such as negative impacts to data residency or data sovereignty.

### "Data Boundary for Impact Level 5 (IL5) \_|\_ Assured Workloads \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/il5](https://docs.cloud.google.com/assured-workloads/docs/control-packages/il5)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported product API endpoints Restrictions or limitations Access Context Manager accesscontextmanager.googleapis.com None AlloyDB for PostgreSQL alloydb.googleapis.com None Artifact Registry artifactregistry.googleapis.com None BigQuery bigquery.googleapis.com bigqueryconnection.googleapis.com bigquerydatapolicy.googleapis.com bigquerymigration.googleapis.com bigqueryreservation.googleapis.com bigquerystorage.googleapis.com Affected features and organization policy constraints Certificate Authority Service privateca.googleapis.com None Cloud Build cloudbuild.googleapis.com None Cloud Composer composer.googleapis.com None Cloud DNS dns.googleapis.com None Cloud Data Fusion datafusion.googleapis.com None Cloud External Key Manager (Cloud EKM) cloudkms.googleapis.com None Cloud HSM cloudkms.googleapis.com None Cloud Identity cloudidentity.googleapis.com None Cloud Interconnect compute.googleapis.com None Cloud Key Management Service (Cloud KMS) cloudkms.googleapis.com Organization policy constraints Cloud Logging logging.googleapis.com Affected features Cloud Monitoring monitoring.googleapis.com None Cloud NAT compute.googleapis.com None Cloud Router compute.googleapis.com None Cloud Run run.googleapis.com Affected features Cloud SQL sqladmin.googleapis.com None Cloud Service Mesh mesh.googleapis.com meshca.googleapis.com meshconfig.googleapis.com trafficdirector.googleapis.com None Cloud Storage storage.googleapis.com None Cloud Tasks cloudtasks.googleapis.com None Cloud VPN compute.googleapis.com Affected features Cloud Vision API us-vision.googleapis.com Affected features Cloud Workstations workstations.googleapis.com Affected features Compute Engine compute.googleapis.com Affected features and organization policy constraints Connect Agent gkeconnect.googleapis.com None Dataflow dataflow.googleapis.com datapipelines.googleapis.com None Dataplex Universal Catalog dataplex.googleapis.com datalineage.googleapis.com Affected features Managed Service for Apache Spark dataproc.googleapis.com dataproc-control.googleapis.com None Eventarc eventarc.googleapis.com None External passthrough Network Load Balancer compute.googleapis.com None Filestore file.googleapis.com None GKE Hub gkehub.googleapis.com None GKE Identity Service anthosidentityservice.googleapis.com None Generative AI on Vertex AI aiplatform.googleapis.com None Google Cloud Armor compute.googleapis.com Affected features Google Kubernetes Engine (GKE) container.googleapis.com containersecurity.googleapis.com None Google Security Operations SOAR Not applicable None Google Admin console Not applicable None Identity and Access Management (IAM) iam.googleapis.com Organization policy constraints Identity-Aware Proxy (IAP) iap.googleapis.com None Internal passthrough Network Load Balancer compute.googleapis.com None Memorystore for Redis redis.googleapis.com None Network Connectivity Center networkconnectivity.googleapis.com None Persistent Disk compute.googleapis.com None Pub/Sub pubsub.googleapis.com Organization policy constraints Regional external Application Load Balancer compute.googleapis.com None Regional external proxy Network Load Balancer compute.googleapis.com None Regional internal Application Load Balancer compute.googleapis.com None Regional internal proxy Network Load Balancer compute.googleapis.com None Secret Manager secretmanager.googleapis.com None Sensitive Data Protection dlp.googleapis.com None Spanner spanner.googleapis.com None Speech-to-Text speech.googleapis.com Affected features VPC Service Controls accesscontextmanager.googleapis.com None Vertex AI Batch prediction aiplatform.googleapis.com None Vertex AI Model Monitoring aiplatform.googleapis.com None Vertex AI Model Registry aiplatform.googleapis.com None Vertex AI Online prediction aiplatform.googleapis.com None Vertex AI Pipelines aiplatform.googleapis.com None Vertex AI Training aiplatform.googleapis.com None Virtual Private Cloud (VPC) compute.googleapis.com None Restrictions and limitations The following sections describe Google Cloud-wide or product-specific restrictions or limitations for features, including any organization policy constraints that are set by default on Data Boundary for IL5 folders.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- The following additional information applies to Data Boundary for IL5: Data residency : The Data Boundary for IL5 control package sets data location controls to support US-only regions .
- Before using an unsupported product, ensure that you are aware of and are willing to accept any associated risks involved, such as negative impacts to data residency or data sovereignty.

### "Data Boundary for International Traffic in Arms Regulations (ITAR) \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar](https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Global API endpoints: iam.googleapis.com None Identity-Aware Proxy (IAP) Regional API endpoints are not supported.
- You should disable your default logging buckets or restrict default buckets to in-scope regions to maintain compliance using the following command: gcloud alpha logging settings update --organization=ORGANIZATION ID --disable-default-sink For more information, see Regionalize your logs .
- Before using an unsupported product, ensure that you are aware of and are willing to accept any associated risks involved, such as negative impacts to data residency or data sovereignty.
- The following additional information applies to ITAR: Data residency : The ITAR control package sets data location controls to support US-only regions .

