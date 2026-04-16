---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.721Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Auxiliary versions"
feature_slug: "auxiliary-versions"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/manage-service"
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
Coverage: MEDIUM

## Step 02 Summary

Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions; Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions.

## Extended Definition

Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions; Auxiliary versions let a Dataproc Metastore service use additional Hive Metastore versions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts)
- [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service)

## Supporting Pages

### Auxiliary versions \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- Source ID: `site-iam-reference`
- Final score: 342
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Auxiliary versions let you connect two different versions of a Hive metastore to a single Dataproc Metastore service.
- Before you begin Enable Dataproc Metastore Required Roles To get the permission that you need to create a Dataproc Metastore that uses auxiliary versions, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can check the active account by running gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"network":"projects/ PROJECT ID /global/networks/default", "port": 9083, "hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION "} } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services?service id= SERVICE ID Replace the following: SERVICE ID : the name of your new Dataproc Metastore service.
- You can check the active account by running gcloud auth list . curl -X PATCH -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION } } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE ID ?update mask=hive metastore config.auxiliary versions Replace the following: SERVICE ID : the name of your Dataproc Metastore service.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- Return to the Dataproc Metastore page, and verify that your service was successfully created. gcloud CLI To create a Dataproc Metastore service with a Hive override, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --hive-metastore-configs="hive.metastore.warehouse.dir= CUSTOMER DIR " Replace the following: SERVICE : The name of your new Dataproc Metastore service.
- Note: If your Hive warehouse directory is already on Cloud Storage, then you should set a metastore configuration override when you create your Dataproc Metastore service.
- Set a Hive metastore config override for Dataproc Metastore If your Apache Hive warehouse directory is on Cloud Storage, you should set a metastore config override.

### Dataproc Metastore core concepts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A feature that lets you connect multiple Hive client versions to the same Dataproc Metastore service.
- Dataproc Metastore versions When you create a Dataproc Metastore service, you can choose to use a Dataproc Metastore 2 service or a Dataproc Metastore 1 service .
- You can also use Dataproc Metastore with various other clusters, such as self-managed Apache Hive, Apache Spark, or Presto clusters.
- The over-the-wire network protocol used for communication between Dataproc Metastore and Hive Metastore clients.

### Update a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Return to the Dataproc Metastore page, and verify that your service was successfully updated. gcloud To update a service, run the following gcloud metastore services update command: gcloud metastore services update SERVICE \ --location= LOCATION \ --update-hive-metastore-configs="hive.metastore.warehouse.dir= CUSTOMER DIR " Replace the following: SERVICE : The name of your Dataproc Metastore service.
- Return to the Dataproc Metastore page, and verify that your service was successfully updated. gcloud CLI To update a service, run the following gcloud metastore services update command: gcloud metastore services update SERVICE \ --location= LOCATION \ --port= PORT \ --tier= TIER \ --kerberos principal= KERBEROS PRINCIPAL \ --keytab= KEYTAB \ --krb5-config= KRB5 CONFIG \ --update-hive-metastore-configs-from-file= [KEY=VALUE, ...] \ --clear-hive-metastore-configs \ --remove-hive-metastore-configs= [KEY, ...] \ --update-labels= [KEY=VALUE, ...] \ --clear-labels \ --remove-labels= [KEY, ...] Replace the following: SERVICE : The name of your Dataproc Metastore service.
- This override sets your specific data warehouse as the default warehouse directory for Dataproc Metastore Before you set this override, make sure that your Dataproc Metastore service has object read and write permissions to access the warehouse directory.
- Note: To update other Dataproc Metastore parameters that aren't included in the previous list, you must delete your service and create a new one.

