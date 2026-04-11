---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.300Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Auxiliary versions"
feature_slug: "auxiliary-versions"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/release-notes"
keywords:
  - "auxiliary"
  - "versions"
  - "let"
  - "dataproc"
  - "metastore"
  - "use"
  - "additional"
  - "hive"
---

# Auxiliary versions

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions; Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions.

## Extended Definition

Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions; Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)

## Supporting Pages

### Auxiliary versions \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- Source ID: `site-iam-reference`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Auxiliary versions let you connect two different versions of a Hive metastore to a single Dataproc Metastore service.
- Before you begin Enable Dataproc Metastore Required Roles To get the permission that you need to create a Dataproc Metastore that uses auxiliary versions, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can check the active account by running gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"network":"projects/ PROJECT ID /global/networks/default", "port": 9083, "hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION "} } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services?service id= SERVICE ID Replace the following: SERVICE ID : the name of your new Dataproc Metastore service.
- You can check the active account by running gcloud auth list . curl -X PATCH -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION } } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE ID ?update mask=hive metastore config.auxiliary versions Replace the following: SERVICE ID : the name of your Dataproc Metastore service.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- Return to the Dataproc Metastore page, and verify that your service was successfully created. gcloud CLI To create a Dataproc Metastore service with a Hive override, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --hive-metastore-configs="hive.metastore.warehouse.dir= CUSTOMER DIR " Replace the following: SERVICE : The name of your new Dataproc Metastore service.
- Note: If your Hive warehouse directory is already on Cloud Storage, then you should set a metastore configuration override when you create your Dataproc Metastore service.
- Set a Hive metastore config override for Dataproc Metastore If your Apache Hive warehouse directory is on Cloud Storage, you should set a metastore config override.

### Dataproc Metastore release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/release-notes](https://docs.cloud.google.com/dataproc-metastore/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The oldest import is automatically deleted when the 26th import is created. v1 Feature Dataproc Metastore performs a Hive metadata schema validation when importing metadata into a service .
- January 26, 2022 v1beta1 Feature Spanner database type is available in Preview . v1beta1 Feature Dataproc Metastore Auxiliary versions are available in Preview .
- June 06, 2022 v1beta1 Change Updated Dataproc Metastore auxiliary versions to support the Spanner database type.
- February 03, 2021 v1beta1 Feature You can create Dataproc Metastore services in cross-product networks (shared VPC) . v1beta1 Feature New Cloud Monitoring service metric is available: metastore.googleapis.com/service/request count v1beta1 Feature Dataproc Metastore suppports the use of non-RFC 1918 private IP address ranges in metastore services. v1beta1 Feature You can update the description of metadata imports under a Dataproc Metastore service. v1beta1 Fixed Fixed an issue in which a service could get stuck in the UPDATING state. v1beta1 Fixed Fixed an issue where Cloud Storage buckets with single character directories would fail request validation.

