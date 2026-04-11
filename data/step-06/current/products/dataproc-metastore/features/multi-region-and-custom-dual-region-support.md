---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.294Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Multi-region and custom dual region support"
feature_slug: "multi-region-and-custom-dual-region-support"
latest_feature_date: "2026-01-13"
deprecation_date: "2026-01-13"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/access-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
keywords:
  - "multi"
  - "region"
  - "and"
  - "custom"
  - "dual"
  - "this"
  - "capability"
  - "lets"
---

# Multi-region and custom dual region support

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

This capability lets Dataproc Metastore services run in multi-region and custom dual-region configurations; This capability lets Dataproc Metastore services run in multi-region and custom dual-region configurations; deprecated on 2026-01-13.

## Extended Definition

This capability lets Dataproc Metastore services run in multi-region and custom dual-region configurations; This capability lets Dataproc Metastore services run in multi-region and custom dual-region configurations; deprecated on 2026-01-13.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)

## Supporting Pages

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2026 v1 & v1beta1 Deprecated Multi-region and custom dual region support for Dataproc Metastore is deprecated.
- You can no longer create new multi-region or custom dual region services.
- April 22, 2025 v1beta1 Feature Dataproc Metastore multi-regional services now support the use of customer-managed encryption keys (CMEKs) -- (in preview ).
- October 31, 2023 v1 Feature Dataproc Metastore is available in the following multi-regional configurations , nam11 and eur5 .

### Dataproc Metastore networking overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/access-service](https://docs.cloud.google.com/dataproc-metastore/docs/access-service)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When creating the first Dataproc Metastore service in a region, Dataproc Metastore allocates a /17 range and a /20 range in the customer's network for all future Dataproc Metastore services usage in that region and network.
- This means that when a custom route in a peered network is updated, your VPC network automatically learns and implements the custom route without requiring any additional action from you.
- This setting also lets you expose your service in a single VPC network or make your service accessible from multiple VPC networks (through the use of subnetworks ).
- To explicitly allow Dataproc Metastore traffic, run the following gcloud commands: gcloud compute firewall-rules create dpms-allow-egress- DPMS NETWORK - REGION --allow tcp --destination-ranges DPMS NET PREFIX /17 --network DPMS NETWORK --direction OUT gcloud compute firewall-rules create dpms-allow-ingress- DPMS NETWORK - REGION --allow tcp,udp --source-ranges DPMS NET PREFIX /17 --network DPMS NETWORK For DPMS NET PREFIX , apply a /17 subnet mask to your Dataproc Metastore service IP.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- Caution: This IAM policy change grants Dataproc Metastore users with the metastore.services.create permission in the service project to indirectly create addresses and peerings in the network project. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Note: If you have never created a Dataproc Metastore service in the service project, then the gcloud projects add-iam-policy-binding command might fail with an error message containing Service account [SERVICE ACCOUNT NAME] does not exist.
- Return to the Dataproc Metastore page, and verify that your service was successfully created. gcloud CLI To create a Dataproc Metastore service with a Hive override, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --hive-metastore-configs="hive.metastore.warehouse.dir= CUSTOMER DIR " Replace the following: SERVICE : The name of your new Dataproc Metastore service.
- What's next Attach a Managed Service for Apache Spark cluster Update and delete a service Import metadata into a service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

