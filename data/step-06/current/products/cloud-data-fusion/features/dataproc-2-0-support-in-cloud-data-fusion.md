---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:04:57.760Z"
product_name: "Cloud Data Fusion"
product_slug: "cloud-data-fusion"
feature_name: "Dataproc 2.0 support in Cloud Data Fusion"
feature_slug: "dataproc-2-0-support-in-cloud-data-fusion"
latest_feature_date: "2025-08-27"
deprecation_date: "2025-08-27"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard"
  - "https://docs.cloud.google.com/data-fusion/docs/release-notes"
  - "https://docs.cloud.google.com/data-fusion/docs/tutorials/targeting-campaign-pipeline"
keywords:
  - "dataproc"
  - "in"
  - "fusion"
  - "for"
  - "was"
  - "removed"
  - "starting"
  - "with"
---

# Dataproc 2.0 support in Cloud Data Fusion

Product: Cloud Data Fusion
Coverage: LOW

## Step 02 Summary

Support for Dataproc 2.0 in Cloud Data Fusion was removed starting with version 6.11.1; deprecated on 2025-08-27.

## Extended Definition

Support for Dataproc 2.0 in Cloud Data Fusion was removed starting with version 6.11.1; deprecated on 2025-08-27.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- [https://docs.cloud.google.com/data-fusion/docs/tutorials/targeting-campaign-pipeline](https://docs.cloud.google.com/data-fusion/docs/tutorials/targeting-campaign-pipeline)

## Supporting Pages

### "Create a pipeline monitoring dashboard using Cloud Monitoring \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard](https://docs.cloud.google.com/data-fusion/docs/tutorials/pipeline-monitoring-dashboard)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The dashboard contains the following charts: All pipelines Completed pipelines Failed pipelines All pipeline runs Completed pipeline runs Failed pipeline runs Dataproc clusters for runs After a metric is created, it might take up to 24 hours to start displaying the time series data.
- Create a Cloud Data Fusion instance with Cloud Logging enabled To use Cloud Logging with your Cloud Data Fusion pipeline, create a Cloud Data Fusion instance with Cloud Logging enabled: Go to the Cloud Data Fusion Instances page and click Create instance .
- In the Build filter field, enter the following: resource.type="cloud dataproc cluster" log name= "projects/. /logs/datafusion-pipeline-logs" In the Labels section, click Add label and create the following labels.
- The Cloud Data Fusion pipelines run after the metric was created, appear in the dashboard.

### Cloud Data Fusion release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-fusion/docs/release-notes](https://docs.cloud.google.com/data-fusion/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Fixed an issue where Dataproc continued running a job when it couldn't communicate with the Cloud Data Fusion instance if the replication job or pipeline was deleted in Cloud Data Fusion ( CDAP-20216 ).
- In Source control management , GitHub PAT was removed from the Cloud Data Fusion web interface for repository configurations ( CDAP-20904 and CDAP-20581 ).
- Starting in Cloud Data Fusion 6.8.1, Dataproc clusters require the following OAUTH scope to function: https://www.googleapis.com/auth/cloud-platform .
- October 24, 2024 Issue Using Dataproc version 2.2 in your Cloud Data Fusion pipeline can fail in some cases with the following error: ERROR [Driver:o.a.s.d.y.ApplicationMaster@97] - User class threw exception: java.lang.NoSuchMethodError: 'org.apache.spark.sql.catalyst.encoders.ExpressionEncoder org.apache.spark.sql.catalyst.encoders.RowEncoder.apply(org.apache.spark.sql.types.StructType)' at io.cdap.cdap.etl.spark.batch.OpaqueDatasetCollection.toDataframeCollection(OpaqueDatasetCollection.java:111) .

### "Create a target campaign pipeline \_|\_ Cloud Data Fusion \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/data-fusion/docs/tutorials/targeting-campaign-pipeline](https://docs.cloud.google.com/data-fusion/docs/tutorials/targeting-campaign-pipeline)
- Source ID: `site-iam-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Data Fusion translates the pipeline that you build in the Studio into an Apache Spark program that executes transformations in parallel on an ephemeral Dataproc cluster.
- Prepare the customer data This tutorial requires the following two input datasets, both of which are provided with your Cloud Data Fusion instance: Sample customer data : A CSV file named customers.csv .
- Objectives Connect Cloud Data Fusion to two data sources Apply basic transformations Join the two data sources Write the output data to a sink Before you begin Sign in to your Google Cloud account.
- Create a target campaign pipeline Learn how to use Cloud Data Fusion to clean, transform, and process customer data to select candidates for a target campaign.

