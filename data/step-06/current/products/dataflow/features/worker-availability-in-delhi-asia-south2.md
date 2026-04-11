---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.831Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker availability in Delhi (asia-south2)"
feature_slug: "worker-availability-in-delhi-asia-south2"
latest_feature_date: "2021-06-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python"
keywords:
  - "worker"
  - "availability"
  - "in"
  - "delhi"
  - "asia"
  - "south2"
  - "this"
  - "lets"
---

# Worker availability in Delhi (asia-south2)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature lets Dataflow use workers in zones in the Delhi region asia-south2.

## Extended Definition

This feature lets Dataflow use workers in zones in the Delhi region asia-south2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- June 29, 2021 Feature Dataflow is now able to use workers, Dataflow Shuffle, Streaming Engine, FlexRS, and regional endpoints in zones in Delhi (asia-south2).
- July 27, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: northamerica-northeast1 (Montréal) asia-southeast1 (Singapore) australia-southeast1 (Sydney) June 08, 2020 Feature Dataflow is now able to use workers in zones in the asia-southeast2 region (Jakarta).
- This feature is limited to Persistent Disks attached to Cloud Dataflow workers and used for Persistent Disk-based shuffle and streaming state storage.
- April 18, 2019 Feature Cloud Dataflow is now able to use workers in zones in the asia-northeast2 region (Osaka, Japan).

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- BigQuery Data Editor ( roles/bigquery.dataEditor ) Dataflow Worker ( roles/dataflow.worker ) Pub/Sub Editor ( roles/pubsub.editor ) Storage Object Admin ( roles/storage.objectAdmin ) Viewer ( roles/viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Class AutoscalingSettings.Builder (0.92.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3.AutoscalingSettings.Builder)
- Source ID: `site-java-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Builder clearMaxNumWorkers () The maximum number of workers to cap scaling at. int32 max num workers = 2; Returns Type Description AutoscalingSettings.Builder This builder for chaining. getAlgorithm() public AutoscalingAlgorithm getAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingAlgorithm The algorithm. getAlgorithmValue() public int getAlgorithmValue () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description int The enum numeric value on the wire for algorithm. getDefaultInstanceForType() public AutoscalingSettings getDefaultInstanceForType () Returns Type Description AutoscalingSettings getDescriptorForType() public Descriptors .
- Builder clearAlgorithm () The algorithm to use for autoscaling. .google.dataflow.v1beta3.AutoscalingAlgorithm algorithm = 1; Returns Type Description AutoscalingSettings.Builder This builder for chaining. clearMaxNumWorkers() public AutoscalingSettings .
- Returns Type Description AutoscalingSettings.Builder This builder for chaining. setMaxNumWorkers(int value) public AutoscalingSettings .
- Descriptor getDescriptorForType () Returns Type Description Descriptor Overrides GeneratedMessage.Builder<BuilderType>.getDescriptorForType() getMaxNumWorkers() public int getMaxNumWorkers () The maximum number of workers to cap scaling at. int32 max num workers = 2; Returns Type Description int The maxNumWorkers. internalGetFieldAccessorTable() protected GeneratedMessage .

### Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Run the modified pipeline on the Dataflow service: python wordcount.py \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job BUCKET NAME : your Cloud Storage bucket name PROJECT ID : you Google Cloud project ID Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Read about the Apache Beam programming model .
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace PROJECT ID with your project ID.
- BUCKET NAME : the Cloud Storage bucket name that you copied earlier PROJECT ID : the Google Cloud project ID that you copied earlier Note: To specify a user-managed worker service account , include the --service account email pipeline option .

