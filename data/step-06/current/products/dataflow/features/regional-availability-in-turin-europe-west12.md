---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.815Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional availability in Turin (europe-west12)"
feature_slug: "regional-availability-in-turin-europe-west12"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "turin"
  - "europe"
  - "west12"
  - "this"
  - "makes"
---

# Regional availability in Turin (europe-west12)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature makes Dataflow available in the Turin region europe-west12.

## Extended Definition

This feature makes Dataflow available in the Turin region europe-west12.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- In the dialog, for Topic name enter the following, and then click Save : projects/pubsub-public-data/topics/taxirides-realtime This publicly available Pub/Sub topic is based on the NYC Taxi & Limousine Commission's open dataset .

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- March 23, 2023 Feature Dataflow is now available in Turin ( europe-west12 ).
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .
- April 07, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-east4 (Northern Virginia) europe-west2 (London) europe-west3 (Frankfurt) March 03, 2020 Feature Cloud Dataflow SQL is now available in beta.

### "Class AutoscalingSettings.Builder (0.92.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Builder clearMaxNumWorkers () The maximum number of workers to cap scaling at. int32 max num workers = 2; Returns Type Description AutoscalingSettings.Builder This builder for chaining. getAlgorithm() public AutoscalingAlgorithm getAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingAlgorithm The algorithm. getAlgorithmValue() public int getAlgorithmValue () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description int The enum numeric value on the wire for algorithm. getDefaultInstanceForType() public AutoscalingSettings getDefaultInstanceForType () Returns Type Description AutoscalingSettings getDescriptorForType() public Descriptors .
- Builder clearAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingSettings.Builder This builder for chaining. clearMaxNumWorkers() public AutoscalingSettings .
- Returns Type Description AutoscalingSettings.Builder This builder for chaining. setAlgorithmValue(int value) public AutoscalingSettings .
- Returns Type Description AutoscalingSettings.Builder This builder for chaining. setMaxNumWorkers(int value) public AutoscalingSettings .

### "Interface AutoscalingSettingsOrBuilder (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettingsOrBuilder)
- Source ID: `site-java-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- 0.92.0 (latest) 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.82.0 0.80.0 0.79.0 0.78.0 0.77.0 0.76.0 0.74.0 0.72.0 0.71.0 0.68.0 0.67.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.5.0 public interface AutoscalingSettingsOrBuilder extends MessageOrBuilder Implements MessageOrBuilder Methods getAlgorithm() public abstract AutoscalingAlgorithm getAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingAlgorithm The algorithm. getAlgorithmValue() public abstract int getAlgorithmValue () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description int The enum numeric value on the wire for algorithm. getMaxNumWorkers() public abstract int getMaxNumWorkers () The maximum number of workers to cap scaling at. int32 max num workers = 2; Returns Type Description int The maxNumWorkers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
- Home Documentation Developer tools Java Client libraries Send feedback Interface AutoscalingSettingsOrBuilder (0.92.0) Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

