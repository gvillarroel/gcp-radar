---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.827Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "FlexRS in Toronto (northamerica-northeast2)"
feature_slug: "flexrs-in-toronto-northamerica-northeast2"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
keywords:
  - "flexrs"
  - "in"
  - "toronto"
  - "northamerica"
  - "northeast2"
  - "this"
  - "makes"
  - "available"
---

# FlexRS in Toronto (northamerica-northeast2)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature makes FlexRS available in zones in the Toronto region northamerica-northeast2.

## Extended Definition

This feature makes FlexRS available in zones in the Toronto region northamerica-northeast2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)

## Supporting Pages

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-root-2`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- Pipeline options Java To enable a FlexRS job, use the following pipeline option: --flexRSGoal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexRSGoal=SPEED OPTIMIZED , where it optimizes for lower execution time.
- Python To enable a FlexRS job, use the following pipeline option: --flexrs goal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexrs goal=SPEED OPTIMIZED , where it optimizes for lower execution time.
- Go To enable a FlexRS job, use the following pipeline option: --flexrs goal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexrs goal=SPEED OPTIMIZED , where it optimizes for lower execution time.
- This page explains how to enable Flexible Resource Scheduling (FlexRS) for autoscaled batch pipelines in Dataflow.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- August 03, 2021 Feature Dataflow is now able to use workers, Dataflow Shuffle, Streaming Engine, FlexRS, and regional endpoints in zones in Toronto (northamerica-northeast2).
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .
- July 27, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: northamerica-northeast1 (Montréal) asia-southeast1 (Singapore) australia-southeast1 (Sydney) June 08, 2020 Feature Dataflow is now able to use workers in zones in the asia-southeast2 region (Jakarta).

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- In the dialog, for Topic name enter the following, and then click Save : projects/pubsub-public-data/topics/taxirides-realtime This publicly available Pub/Sub topic is based on the NYC Taxi & Limousine Commission's open dataset .
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Advanced features include the following workflows: Use Interactive FlinkRunner on notebook-managed clusters Use Beam SQL and beam sql magic Accelerate using JIT compiler and GPU Build a custom container Disable external IP addresses Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Visualize the data through the Interactive Beam inspector You might find it distracting to introspect the data of a PCollection by constantly calling show() and collect() , especially when the output takes up a lot of the space on your screen and makes it hard to navigate through the notebook.
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.

