---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.121Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Dataproc Metastore integration with Trino"
feature_slug: "dataproc-metastore-integration-with-trino"
latest_feature_date: "2023-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/overview"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg"
keywords:
  - "trino"
  - "integration"
  - "metastore"
  - "supports"
---

# Dataproc Metastore integration with Trino

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports Dataproc Metastore integration with Trino.

## Extended Definition

Dataproc supports Dataproc Metastore integration with Trino.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)

## Supporting Pages

### Dataproc Metastore overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/overview](https://docs.cloud.google.com/dataproc-metastore/docs/overview)
- Source ID: `site-docs-root-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Integrations with Google Cloud All integrations listed in this section are supported by Dataproc Metastore 1 and Dataproc Metastore 2, unless otherwise noted.
- In addition to Zonal HA, Dataproc Metastore 2 supports regional HA and Disaster Recovery (DR).
- Rely on standard OAuth authentication used by other Google Cloud products, which supports using granular Identity and Access Management roles to enable access control for individual resources.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Dataproc Metastore overview Stay organized with collections Save and categorize content based on your preferences.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root-2`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Create Dataproc Metastore with autoscaling Dataproc Metastore 2 supports autoscaling.
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- Caution: This IAM policy change grants Dataproc Metastore users with the metastore.services.create permission in the service project to indirectly create addresses and peerings in the network project. gcloud projects add-iam-policy-binding NETWORK PROJECT ID \ --role "roles/metastore.serviceAgent" \ --member "serviceAccount:service- SERVICE PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com" Note: If you have never created a Dataproc Metastore service in the service project, then the gcloud projects add-iam-policy-binding command might fail with an error message containing Service account [SERVICE ACCOUNT NAME] does not exist.
- You can check the active account by executing gcloud auth list . curl -X POST -s -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"scaling config":{"autoscaling config":{"autoscaling enabled": true,"limit config":{"max scaling factor": MAX SCALING FACTOR ,"min scaling factor": MIN SCALING FACTOR }}}}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/services?service id= SERVICE ID Replace the following: MIN INSTANCES Optional: The minimum number of instances to use in your autoscaling configuration.

### Use Apache Iceberg tables with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg](https://docs.cloud.google.com/dataproc-metastore/docs/apache-iceberg)
- Source ID: `site-docs-root-2`
- Final score: 29
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Presto Configurations Under each Managed Service for Apache Spark cluster node, create a file named iceberg.properties /etc/presto/conf/catalog/iceberg.properties and configure the hive.metastore.uri as follows: connector.name=iceberg hive.metastore.uri=thrift://<example.net:9083> Replace example.net:9083 with the correct host and port for your Hive metastore Thrift service.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Use Apache Iceberg tables with Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.
- Create Iceberg table on Presto Open the Presto client and use the "Iceberg" connector to get the metastore: --catalog iceberg --schema default Create a table to insert and update data.
- This page explains how to use Apache Iceberg tables with a Dataproc Metastore service attached to a Managed Service for Apache Spark cluster.

