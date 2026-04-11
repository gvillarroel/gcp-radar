---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.140Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "BigQuery and Cloud Storage connector updates"
feature_slug: "bigquery-and-cloud-storage-connector-updates"
latest_feature_date: "2015-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial"
  - "https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images"
keywords:
  - "and"
  - "storage"
  - "connector"
  - "updates"
  - "dataproc"
  - "includes"
  - "updated"
  - "connectors"
---

# BigQuery and Cloud Storage connector updates

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc includes updated BigQuery and Cloud Storage connectors with bug fixes in image version 0.2.

## Extended Definition

Dataproc includes updated BigQuery and Cloud Storage connectors with bug fixes in image version 0.2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Connector updates - We released updates to our BigQuery and Google Cloud Storage connectors (0.7.3 and 1.4.3, respectively.) These connectors fix a number of bugs and the new versions are now included in Cloud Dataproc version 0.2 .
- This release also includes new versions of the Cloud Storage and Google BigQuery connectors . v1 API - The v1 API for Cloud Dataproc is now live.
- Features and improvements: Regional and multi-zonal workloads are used by default to increase obtainability of compute resources Faster startup than previous runtimes Fast resource cleanup that allows faster release of VPC IPs after workload completion End-user credentials are used for all workloads by default New bigquery Spark catalog, pre-configured for out-of-the-box BigQuery native table interactions New Spark Serverless-specific IAM roles New dataproc-rm.googleapis.com API enablement is required November 22, 2025 Announcement New Dataproc on Compute Engine subminor image versions : 2.0.154-debian10, 2.0.154-ubuntu18, 2.0.154-rocky8 2.1.103-debian11, 2.1.103-ubuntu20, 2.1.103-ubuntu20-arm, 2.1.103-rocky8 2.2.71-debian12, 2.2.71-ubuntu22, 2.2.71-ubuntu22-arm, 2.2.71-rocky9 2.3.18-debian12, 2.3.18-ubuntu22, 2.3.18-ubuntu22-arm, 2.3.18-ml-ubuntu22, 2.3.18-rocky9 Change Dataproc on Compute Engine : Updated Cloud Storage connector: Updated to 3.1.10 in image version 2.3.18 .
- Change New sub-minor versions of Cloud Dataproc images - 1.0.76, 1.1.67, 1.2.31 Updated software versions in Cloud Dataproc image version 1.2 to the following: Apache Spark 2.2.0 -> 2.2.1 Apache Hadoop 2.8.2 -> 2.8.3 April 06, 2018 Change New sub-minor versions of Cloud Dataproc images - 1.0.75, 1.1.66, 1.2.30 March 30, 2018 Change New sub-minor versions of Cloud Dataproc images - 1.0.74, 1.1.65, 1.2.29 March 23, 2018 Change New sub-minor versions of Cloud Dataproc images - 1.0.73, 1.1.64, 1.2.28 Cloud Storage and BigQuery connector upgrades: The Cloud Storage connector has been upgraded to gcs-connector-1.6.4 and the BigQuery connector has been upgraded to bigquery-connector-0.10.5 .

### "Use the Cloud Storage connector with Apache Spark \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial](https://docs.cloud.google.com/dataproc/docs/tutorials/gcs-connector-spark-tutorial)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Java gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/java/word-count-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Scala gcloud dataproc jobs submit spark \ --cluster=${CLUSTER} \ --class=dataproc.codelab.WordCount \ --jars=gs://${BUCKET NAME}/scala/word-count 2.11-1.0.jar \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ Python gcloud dataproc jobs submit pyspark word-count.py \ --cluster=${CLUSTER} \ --region=${REGION} \ -- gs://${BUCKET NAME}/input/ gs://${BUCKET NAME}/output/ View the output After the job finishes, run the following gcloud CLI command to view the wordcount output. gcloud storage cat gs://${BUCKET NAME}/output/ The wordcount output should be similar to the following: (a,2) (call,1) (What's,1) (sweet.,1) (we,1) (as,1) (name?,1) (any,1) (other,1) (rose,1) (smell,1) (name,1) (would,1) (in,1) (which,1) (That,1) (By,1) Clean up After you finish the tutorial, you can clean up the resources that you created so that they stop using quota and incurring charges.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Use the Cloud Storage connector with Apache Spark Stay organized with collections Save and categorize content based on your preferences.
- The improved Cloud Storage connector minimizes metadata operations to reduce costs, while an optimized file output committer unlocks performance and reliability for Spark workloads.
- The build.sbt file does not specify a Cloud Storage dependency because the connector implements the standard HDFS interface.

### "Create a Google Kubernetes Engine custom container image \_|\_ Managed Service\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-custom-images)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Base Spark images Managed Service for Apache Spark supports the following base Spark container images: Spark 3.5 : ${REGION}-docker.pkg.dev/cloud-dataproc/spark/dataproc 2.2 Sample custom container image build Sample Dockerfile FROM us - central1 - docker . pkg . dev / cloud - dataproc / spark / dataproc 2 .0 : latest Change to root temporarily so that it has permissions to create dirs and copy files.
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- IMAGE= custom container image \ BUILD DIR=$(mktemp -d) \ cd "${BUILD DIR}" Download the BigQuery connector. gcloud storage cp \ gs://spark-lib/bigquery/spark-bigquery-with-dependencies 2.12-0.22.2.jar .

