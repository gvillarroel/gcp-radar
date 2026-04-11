---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.845Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Worker support in us-west4 region"
feature_slug: "worker-support-in-us-west4-region"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go"
  - "https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python"
keywords:
  - "worker"
  - "in"
  - "us"
  - "west4"
  - "region"
  - "dataflow"
  - "can"
  - "run"
---

# Worker support in us-west4 region

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow can run worker VMs in zones within the us-west4 region.

## Extended Definition

Dataflow can run worker VMs in zones within the us-west4 region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go)
- [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- If you select the dual-region location type, you can also choose to enable turbo replication by using the relevant checkbox.
- Create a Cloud Storage bucket Before you can run a pipeline, you must create a Cloud Storage bucket.
- You can also run queries using standard SQL.

### Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-go)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the pipeline on the Dataflow service To run the updated wordcount example on the Dataflow service, use the following command: go run wordcount.go --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner dataflow \ --project PROJECT ID \ --region DATAFLOW REGION \ --staging location gs:// BUCKET NAME /binaries/ Replace the following: BUCKET NAME : the Cloud Storage bucket name.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Programming model for Apache Beam Setting pipeline options Pipeline options reference Deploying a pipeline Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To run the latest version of the Beam wordcount example on your local machine, perform the following steps: Use the git clone command to clone the apache/beam GitHub repository: git clone https://github.com/apache/beam.git Switch to the beam/sdks/go directory: cd beam/sdks/go Use the following command to run the pipeline: go run examples/wordcount/wordcount.go \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output outputs The input flag specifies the file to read, and the output flag specifies the filename for the frequency count output.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace PROJECT ID with your project ID.

### Create a Dataflow pipeline using Go \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-go)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the pipeline on the Dataflow service To run the updated wordcount example on the Dataflow service, use the following command: go run wordcount.go --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner dataflow \ --project PROJECT ID \ --region DATAFLOW REGION \ --staging location gs:// BUCKET NAME /binaries/ Replace the following: BUCKET NAME : the Cloud Storage bucket name.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Programming model for Apache Beam Setting pipeline options Pipeline options reference Deploying a pipeline Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To run the latest version of the Beam wordcount example on your local machine, perform the following steps: Use the git clone command to clone the apache/beam GitHub repository: git clone https://github.com/apache/beam.git Switch to the beam/sdks/go directory: cd beam/sdks/go Use the following command to run the pipeline: go run examples/wordcount/wordcount.go \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output outputs The input flag specifies the file to read, and the output flag specifies the filename for the frequency count output.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace PROJECT ID with your project ID.

### Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the modified pipeline on the Dataflow service: python wordcount.py \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job BUCKET NAME : your Cloud Storage bucket name PROJECT ID : you Google Cloud project ID Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com \ --role = SERVICE ACCOUNT ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next Read about the Apache Beam programming model .
- Run the pipeline: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/storage.objectAdmin gcloud projects add-iam-policy-binding PROJECT ID --member = "serviceAccount: PROJECT NUMBER -compute@developer.gserviceaccount.com" --role = SERVICE ACCOUNT ROLE Replace PROJECT ID with your project ID.

