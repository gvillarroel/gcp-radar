---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.715Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Hive Metastore versions 1.2.2 and 2.2.0"
feature_slug: "hive-metastore-versions-1-2-2-and-2-2-0"
latest_feature_date: "2026-03-13"
deprecation_date: "2026-03-13"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
keywords:
  - "hive"
  - "metastore"
  - "versions"
  - "and"
  - "these"
  - "dataproc"
  - "provide"
  - "runtime"
---

# Hive Metastore versions 1.2.2 and 2.2.0

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

These Dataproc Metastore service versions provide Hive Metastore 1.2.2 and 2.2.0 runtime options; These Dataproc Metastore service versions provide Hive Metastore 1.2.2 and 2.2.0 runtime options; deprecated on 2026-03-13.

## Extended Definition

These Dataproc Metastore service versions provide Hive Metastore 1.2.2 and 2.2.0 runtime options; These Dataproc Metastore service versions provide Hive Metastore 1.2.2 and 2.2.0 runtime options; deprecated on 2026-03-13.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)

## Supporting Pages

### Auxiliary versions \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions](https://docs.cloud.google.com/dataproc-metastore/docs/auxiliary-versions)
- Source ID: `site-iam-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Enable Dataproc Metastore Required Roles To get the permission that you need to create a Dataproc Metastore that uses auxiliary versions, ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- You can check the active account by running gcloud auth list . curl -X POST -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"network":"projects/ PROJECT ID /global/networks/default", "port": 9083, "hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION "} } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services?service id= SERVICE ID Replace the following: SERVICE ID : the name of your new Dataproc Metastore service.
- You can check the active account by running gcloud auth list . curl -X PATCH -s -i \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"hive metastore config": {"auxiliary versions": {"aux-version1": {"version": " AUX VERSION } } } }' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /services/ SERVICE ID ?update mask=hive metastore config.auxiliary versions Replace the following: SERVICE ID : the name of your Dataproc Metastore service.
- Click Submit . gcloud CLI To update a Dataproc Metastore service that uses an auxiliary version, run one of the following gcloud metastore services update commands: gcloud metastore services update SERVICE \ --location= LOCATION \ --add-auxiliary-versions= AUXILIARY VERSIONS , ... or gcloud metastore services update SERVICE \ --location= LOCATION \ --update-auxiliary-versions-from-file= AUXILIARY VERSIONS FROM FILE Replace the following: SERVICE : the name of your Dataproc Metastore service.

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Provisioning the service might take a few minutes. gcloud CLI To create a metastore, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR \ --port= PORT \ --tier= TIER \ --endpoint-protocol= ENDPOINT PROTOCOL \ --database-type= DATABASE TYPE \ --hive-metastore-version= HIVE METASTORE VERSION \ --data-catalog-sync= DATA CATALOG SYNC \ --release-channel= RELEASE CHANNEL \ --hive-metastore-configs= METADATA OVERRIDE \ --labels= LABELS \ --auxiliary-versions= AUXILIARY VERSION \ --network= NETWORK \ --consumer-subnetworks="projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET1 , projects/ PROJECT ID /regions/ LOCATION /subnetworks/ SUBNET2 " \ --kerberos-principal= KERBEROS PRINCIPAL \ --krb5-config= KRB5 CONFIG \ --keytab= CLOUD SECRET \ --encryption-kms-key= KMS KEY Replace the following: Service settings : SERVICE : The name of your new Dataproc Metastore service.
- Return to the Dataproc Metastore page, and verify that your service was successfully created. gcloud CLI To create a Dataproc Metastore service with a Hive override, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --hive-metastore-configs="hive.metastore.warehouse.dir= CUSTOMER DIR " Replace the following: SERVICE : The name of your new Dataproc Metastore service.
- Provisioning the service might take a few minutes. gcloud CLI To create a Dataproc Metastore metastore service 2 using the provided defaults, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --instance-size= INSTANCE SIZE \ --scaling-factor= SCALING FACTOR Replace the following: SERVICE : The name of your new Dataproc Metastore service.
- Provisioning the service might take a couple of minutes. gcloud CLI To create a basic metastore service using the provided defaults, run the following gcloud metastore services create command: gcloud metastore services create SERVICE \ --location= LOCATION Replace the following: SERVICE : The name of your new Dataproc Metastore service.

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This account is Google-managed and listed on the IAM permissions UI page by selecting Include Google-provided role grants . gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:service- PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com \ --role roles/secretmanager.secretAccessor Provide the Dataproc Metastore service account with permission to access the krb5.conf file.
- After you create your cluster, Dataproc Metastore attempts to connect with your Kerberos credentials using the provided principal, keytab, and krb5.conf file.
- Grant IAM roles and permissions Provide the Dataproc Metastore service account with permission to access the keytab file.
- In the SSH session, open the Hadoop container-executor.cfg file. sudo vim /etc/hadoop/conf/container-executor.cfg Add the following line on every Managed Service for Apache Spark node. allowed.system.users=hive Get a Kerberos ticket Get the Kerberos ticket, before connecting to the Dataproc Metastore instance. sudo klist -kte /etc/security/keytab/metastore.service.keytab sudo kinit -kt /etc/security/keytab/metastore.service.keytab PRINCIPAL NAME sudo klist # gets the ticket information. sudo hive Replace the following: PRINCIPAL NAME : the name of your principal.

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the import completes, it appears in a table on the Service detail page on the Import/Export tab. gcloud CLI To import metadata, run the following gcloud metastore services import gcs command: gcloud metastore services import gcs SERVICE ID \ --location= LOCATION \ --import-id= IMPORT ID \ --description= DESCRIPTION \ --dump-type= DUMP TYPE \ --database-dump= DATABASE DUMP Replace the following: SERVICE ID : the ID or fully qualified name of your Dataproc Metastore service.
- What's next Export metadata from a service Update and delete a service Hive Metastore Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For MySQL, to use the Cloud Storage object (SQL dump file) for import: grant your user account and the Dataproc Metastore service agent the Storage Object Viewer role ( roles/storage.objectViewer ) on the Cloud Storage bucket containing the metadata dump being imported.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to import metadata into Dataproc Metastore: To import metadata: metastore.imports.create on the metastore service.

