---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.841Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional endpoints in Los Angeles (us-west2)"
feature_slug: "regional-endpoints-in-los-angeles-us-west2"
latest_feature_date: "2020-11-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java"
keywords:
  - "regional"
  - "endpoints"
  - "in"
  - "los"
  - "angeles"
  - "us"
  - "west2"
  - "this"
---

# Regional endpoints in Los Angeles (us-west2)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature provides Dataflow regional endpoints in Los Angeles us-west2.

## Extended Definition

This feature provides Dataflow regional endpoints in Los Angeles us-west2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .
- April 07, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-east4 (Northern Virginia) europe-west2 (London) europe-west3 (Frankfurt) March 03, 2020 Feature Cloud Dataflow SQL is now available in beta.
- July 10, 2018 Feature Cloud Dataflow is now able to use workers in zones in the us-west2 region (Los Angeles).
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the dialog, for Topic name enter the following, and then click Save : projects/pubsub-public-data/topics/taxirides-realtime This publicly available Pub/Sub topic is based on the NYC Taxi & Limousine Commission's open dataset .
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To fix this issue, if you're using a regional key, verify that the Cloud KMS key is in the same region as the Dataflow job.
- Note: The drop-down menu Select a customer-managed key only shows keys with the regional scope global or the region you selected in the Regional endpoint drop-down menu.
- Causes: Cloud KMS key projects/<project-id>/locations/<gcp-region>/keyRings/<key-ring-name>/cryptoKeys/<key-name> can't protect resources for this job.
- If you override the worker region or zone of the pipeline to use a region other than the one associated with your keys, regional keys don't work.

### Create a Dataflow pipeline using Java \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-java)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Create a Dataflow pipeline using Java This document shows you how to set up your Google Cloud project, create an example pipeline built with the Apache Beam SDK for Java, and run the example pipeline on the Dataflow service.
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: In the Google Cloud console, go to the Cloud Storage Buckets page.
- Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- If you used an existing project for the tasks in this document, when you delete it, you also delete any other work you've done in the project.

