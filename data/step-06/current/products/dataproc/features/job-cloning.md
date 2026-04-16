---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.710Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Job cloning"
feature_slug: "job-cloning"
latest_feature_date: "2015-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore"
keywords:
  - "job"
  - "cloning"
  - "console"
  - "can"
  - "clone"
  - "existing"
  - "into"
  - "submission"
---

# Job cloning

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

The console can clone an existing job into a new job submission form with copied settings.

## Extended Definition

The console can clone an existing job into a new job submission form with copied settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)

## Supporting Pages

### Disaster recovery for Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/disaster-recovery-for-dataproc-metastore)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- In Cloud Shell, export the metadata from the DPMS instance: gcloud metastore services export gcs $ { DPMS PRIMARY INSTANCE } \ -- location =$ { DPMS PRIMARY REGION } \ -- destination - folder = gs : //$ { BACKUP BUCKET } Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the metadata into the standby DPMS instance in the original region (region A): gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select from completed orders limit 5;" The output includes the following: +----------------------------+------------------------------+-------------------------------------+--------------------------------+ completed orders.order id completed orders.order date completed orders.order customer id completed orders.order status +----------------------------+------------------------------+-------------------------------------+--------------------------------+ 3 2013-07-25 00:00:00.0 12111 COMPLETE 5 2013-07-25 00:00:00.0 11318 COMPLETE 6 2013-07-25 00:00:00.0 7130 COMPLETE 7 2013-07-25 00:00:00.0 4530 COMPLETE 15 2013-07-25 00:00:00.0 2568 COMPLETE +----------------------------+------------------------------+-------------------------------------+--------------------------------+ The primary Managed Service for Apache Spark Metastore and standby Managed Service for Apache Spark Metastore have swapped roles again.
- Create a new DPMS instance in the standby region: gcloud metastore services create ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --hive-metastore-version=3.1.2 Set the Hive data bucket as the default warehouse directory: gcloud metastore services update ${ DPMS STANDBY INSTANCE } \ --location= ${ DPMS STANDBY REGION } \ --update-hive-metastore-configs="hive.metastore.warehouse.dir=gs:// ${ PROJECT } -warehouse" Retrieve the path of the latest metadata backup: IMPORT DIR=gcloud storage ls gs:// ${ BACKUP BUCKET } sort -k 1 tail -1 IMPORT SQL=" ${ IMPORT DIR } hive.sql" echo ${ IMPORT SQL } Import the backed-up metadata into the new Managed Service for Apache Spark Metastore instance: gcloud metastore services import gcs $ { DPMS STANDBY INSTANCE } \ -- location = $ { DPMS STANDBY REGION } \ -- dump - type = mysql \ -- database - dump = $ { IMPORT SQL } \ -- import - id = import - $ ( date + "%Y-%m- %d -%H-%M-%S" ) Create a Managed Service for Apache Spark cluster in the standby region (region B): gcloud dataproc clusters create ${ HADOOP STANDBY } \ --dataproc-metastore=projects/ ${ PROJECT } /locations/ ${ DPMS STANDBY REGION } /services/ ${ DPMS STANDBY INSTANCE } \ --region= ${ DPMS STANDBY REGION } \ --image-version=2.0 Verify that the metadata was correctly imported: gcloud dataproc jobs submit hive \ --cluster ${ HADOOP STANDBY } \ --region ${ DPMS STANDBY REGION } \ --execute "select count( ) as num orders from orders;" The num orders output is most important to the tutorial.
- Clone the tutorial's GitHub repository: git clone https://github.com/GoogleCloudPlatform/metastore-disaster-recovery.git Enable the following Google Cloud APIs: gcloud services enable dataproc.googleapis.com metastore.googleapis.com Set some environment variables: export PROJECT =$ ( gcloud info -- format = 'value(config.project)' ) export WAREHOUSE BUCKET =$ { PROJECT } - warehouse export BACKUP BUCKET =$ { PROJECT } - dpms - backups export DPMS PRIMARY REGION = us - central1 export DPMS STANDBY REGION = us - east1 export DPMS PRIMARY INSTANCE = dpms1 export DPMS STANDBY INSTANCE = dpms2 export HADOOP PRIMARY = dataproc - cluster1 export HADOOP STANDBY = dataproc - cluster2 Creating storage for Hive data and Hive Metastore backups In this section, you create Cloud Storage buckets to host the Hive data and Hive Metastore backups.
- This service is responsible for importing the metadata backups from BACKUP BUCKET into the standby metastore: gcloud run deploy dpms - import \ -- image gcr . io / $ { PROJECT } / dpms dr \ -- region $ { DPMS STANDBY REGION } \ -- platform managed \ -- update - env - vars DPMS STANDBY REGION = $ { DPMS STANDBY REGION }, BACKUP BUCKET = $ { BACKUP BUCKET }, DPMS STANDBY INSTANCE = $ { DPMS STANDBY INSTANCE } \ -- allow - unauthenticated \ -- timeout = 10 m Retrieve the deploy URL for the second Cloud Run service: IMPORT RUN URL = $ ( gcloud run services describe dpms - import -- platform managed -- region $ { REGION B } -- format "value(status.address.url)" ) echo $ { IMPORT RUN URL } Jobs scheduling This section shows how to use Cloud Scheduler to trigger the two Cloud Run services.

### Import metadata into Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/import-metadata)
- Source ID: `site-docs-root-2`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console In the Google Cloud console, open the Dataproc Metastore page: Open Dataproc Metastore On the Dataproc Metastore page, click the name of the service you want to import metadata into.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to import metadata into Dataproc Metastore: To import metadata: metastore.imports.create on the metastore service.
- Required roles To get the permissions that you need to import metadata into Dataproc Metastore, ask your administrator to grant you the following IAM roles: To import metadata: Dataproc Metastore Editor ( roles/metastore.editor ) on the metadata service.
- Prepare the import files before import Before you can import your files into Dataproc Metastore, you must copy your metadata dump files into Cloud Storage, such as your artifacts Cloud Storage bucket .

### "Quickstart: Migrate a self-managed MySQL metastore to Dataproc Metastore\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore](https://docs.cloud.google.com/dataproc-metastore/docs/migrate-mysql-metastore)
- Source ID: `site-docs-root-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate a self-managed MySQL metastore to Dataproc Metastore This page shows you how to migrate your external self-managed MySQL metastore to Dataproc Metastore by creating a MySQL dump file and importing the metadata into an existing Dataproc Metastore service.
- Import metadata into a service Attach a Managed Service for Apache Spark cluster or self-managed cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create and attach a Managed Service for Apache Spark cluster After you import your metadata into your Dataproc Metastore example-service service, create and attach a Managed Service for Apache Spark cluster that uses the service as its Hive metastore.
- Console In the Google Cloud console, open the Dataproc Metastore page: Open Dataproc Metastore in the Google Cloud console On the left of the service name, select example-service by checking the box.

