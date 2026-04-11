---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.817Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional availability in Dallas (us-south1)"
feature_slug: "regional-availability-in-dallas-us-south1"
latest_feature_date: "2022-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "dallas"
  - "us"
  - "south1"
  - "this"
  - "makes"
---

# Regional availability in Dallas (us-south1)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature makes Dataflow available in the Dallas region us-south1.

## Extended Definition

This feature makes Dataflow available in the Dallas region us-south1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In the dialog, for Topic name enter the following, and then click Save : projects/pubsub-public-data/topics/taxirides-realtime This publicly available Pub/Sub topic is based on the NYC Taxi & Limousine Commission's open dataset .
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- To fix this issue, if you're using a regional key, verify that the Cloud KMS key is in the same region as the Dataflow job.
- Note: The drop-down menu Select a customer-managed key only shows keys with the regional scope global or the region you selected in the Regional endpoint drop-down menu.
- Causes: Cloud KMS key projects/<project-id>/locations/<gcp-region>/keyRings/<key-ring-name>/cryptoKeys/<key-name> can't protect resources for this job.
- If you override the worker region or zone of the pipeline to use a region other than the one associated with your keys, regional keys don't work.

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- What's next Develop and test Dataflow pipelines Use the Dataflow monitoring interface Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use periodic data sampling This section describes how to sample pipeline data continuously as a job runs.
- Troubleshooting This section contains information about common issues when using data sampling.
- For more information, see Use periodic data sampling in this document.

### Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- To view the results in the output files, use the gcloud storage cat command : gcloud storage cat gs:// BUCKET NAME /results/outputs Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- For this example, use example/dataflow as the module path. go mod init example/dataflow Download the latest copy of the wordcount code from the Apache Beam GitHub repository.
- Create a Dataflow pipeline using Go This page shows you how to use the Apache Beam SDK for Go to build a program that defines a pipeline.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Programming model for Apache Beam Setting pipeline options Pipeline options reference Deploying a pipeline Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

