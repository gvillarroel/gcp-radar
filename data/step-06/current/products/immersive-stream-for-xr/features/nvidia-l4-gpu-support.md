---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.998Z"
product_name: "Immersive Stream for XR"
product_slug: "immersive-stream-for-xr"
feature_name: "NVIDIA L4 GPU support"
feature_slug: "nvidia-l4-gpu-support"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/audit-logging"
keywords:
  - "nvidia"
  - "l4"
  - "gpu"
  - "gpus"
  - "are"
  - "supported"
  - "in"
  - "selected"
---

# NVIDIA L4 GPU support

Product: Immersive Stream for XR
Coverage: MEDIUM

## Step 02 Summary

NVIDIA L4 GPUs are supported in selected regions.

## Extended Definition

NVIDIA L4 GPUs are supported in selected regions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing](https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/audit-logging](https://docs.cloud.google.com/immersive-stream/xr/docs/audit-logging)

## Supporting Pages

### Locations and pricing \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing](https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There is an option to use NVIDIA L4 GPUs, which offer higher performance at an increased price.
- L4 GPUs are only available in some regions, and they only support the 3D-only experience mode.
- New instances are created using NVIDIA T4 GPUs by default.
- Google Cloud region Location NVIDIA T4 Hourly price per capacity unit NVIDIA T4 3D-only hourly price per capacity unit NVIDIA L4 3D-only hourly price per capacity unit us-central1 Iowa, US $2.50 $1.25 $1.56 us-east4 Virginia, US $2.50 $1.25 us-west1 Oregon, US $2.50 $1.25 $1.56 us-west4 Nevada, US $2.50 $1.25 $1.56 northamerica-northeast1 Québec, Canada $3.00 $1.50 asia-northeast1 Tokyo, Japan $3.63 $1.81 $2.26 asia-southeast1 Singapore $3.25 $1.63 $2.04 asia-east2 Hong Kong $3.00 $1.50 europe-west4 Netherlands $3.00 $1.50 $1.88 southamerica-east1 São Paulo, Brazil $3.63 $1.81 australia-southeast1 Sydney, Australia $3.63 $1.81 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Quickstart: Deploy Immersive Stream for XR experiences \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, set a custom fallback URL to send users to when your service instance is stocked out, there is a failed connection, or there are other issues that prevent the experience from continuing. gcloud immersive-stream xr instances create MY INSTANCE \ --content= MY CONTENT \ --version= MY-VERSION \ --add-region="region=us-central1,capacity=1" \ --add-region="region=us-west1,capacity=3 \ --mode="ar" \ --gpu-class="t4" \ --fallback-url="https://www.example.com" \ --async This is an asynchronous operation.
- Select a mode and GPU class : Select the experience mode supported by the instance.
- If not specified, the instance is created with 3D/AR mode and NVIDIA T4 GPU class.
- Here are the supported update actions that you can perform on your instance.

### Supported commands \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Commands Create an Instance that uses NVIDIA L4 GPUs and supports 3D-only mode.
- AR mode won't be supported by this instance. gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity1 " --mode=3d --gpu-class=l4 --async Create an Instance that has autoscaling enabled.
- This releases all compute resources reserved for streaming. gcloud immersive-stream xr instances delete my-instance --async Synchronously wait for a long running operation to complete. gcloud immersive-stream xr operations wait operation-id Describe the status of a long running operation. gcloud immersive-stream xr operations describe operation-id List all operations created in the past seven days. gcloud immersive-stream xr operations list Note: The following commands are for features that are not yet publicly available.
- These three parameters must be configured such that the autoscaling buffer is less than or equal to the autoscaling min capacity and both are less than the capacity (maximum), all three must be greater than zero. gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity ,enable autoscaling= true ,autoscaling buffer= buffer ,autoscaling min capacity= min-capacity " --async Update autoscaling config in a region.

### "Audit logging information for Immersive Stream for XR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/audit-logging](https://docs.cloud.google.com/immersive-stream/xr/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- For example, to view all the project-level audit logs for Immersive Stream for XR, use the following query, supplying a valid resource identifier in each of the log names: logName = ( "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" OR "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access" OR "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event" OR "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy" ) protoPayload . serviceName = "stream.googleapis.com" Route audit logs You can route audit logs to supported destinations in the same way that you can route other kinds of logs.
- Available audit logs The following types of audit logs are available for Immersive Stream for XR: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.

