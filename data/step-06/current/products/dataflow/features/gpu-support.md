---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.815Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "GPU support"
feature_slug: "gpu-support"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python"
  - "https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline"
keywords:
  - "gpu"
  - "lets"
  - "dataflow"
  - "use"
  - "accelerators"
  - "pipeline"
  - "workloads"
---

# GPU support

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

GPU support lets Dataflow use GPU accelerators for pipeline workloads; GPU support lets Dataflow use GPU accelerators for pipeline workloads.

## Extended Definition

GPU support lets Dataflow use GPU accelerators for pipeline workloads; GPU support lets Dataflow use GPU accelerators for pipeline workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)
- [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)

## Supporting Pages

### Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/guides/create-pipeline-python)
- Source ID: `site-docs-reference-required-3`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the modified pipeline on the Dataflow service: python wordcount.py \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job BUCKET NAME : your Cloud Storage bucket name PROJECT ID : you Google Cloud project ID Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- Run the pipeline: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- Create a Dataflow pipeline using Python This document shows you how to use the Apache Beam SDK for Python to build a program that defines a pipeline.
- Run the pipeline on the Dataflow service In this section, run the wordcount example pipeline from the apache beam package on the Dataflow service.

### Create a Dataflow pipeline using Python \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-pipeline-python)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the modified pipeline on the Dataflow service: python wordcount.py \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job BUCKET NAME : your Cloud Storage bucket name PROJECT ID : you Google Cloud project ID Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, delete the Google Cloud project with the resources.
- Run the pipeline: python -m apache beam.examples.wordcount \ --region DATAFLOW REGION \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs:// BUCKET NAME /results/outputs \ --runner DataflowRunner \ --project PROJECT ID \ --temp location gs:// BUCKET NAME /tmp/ Replace the following: DATAFLOW REGION : the region where you want to deploy the Dataflow job—for example, europe-west1 The --region flag overrides the default region that is set in the metadata server, your local client, or environment variables.
- Create a Dataflow pipeline using Python This document shows you how to use the Apache Beam SDK for Python to build a program that defines a pipeline.
- Run the pipeline on the Dataflow service In this section, run the wordcount example pipeline from the apache beam package on the Dataflow service.

### "Create an ecommerce streaming pipeline \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the git clone command to clone the GitHub repository: git clone https://github.com/GoogleCloudPlatform/dataflow-sample-applications.git Switch to the application directory: cd dataflow-sample-applications/retail/retail-java-applications To test the pipeline, in your shell or terminal, run the following command using Gradle: ./gradlew :data-engineering-dept:pipelines:test --tests RetailDataProcessingPipelineSimpleSmokeTest --info --rerun-tasks To run the pipeline, run the following command using Gradle: ./gradlew tasks executeOnDataflow -Dexec.args = " \ --pro ject=PROJE CT ID \ --tempLocation= gs://BUCKET NAME/temp/ \ --runner=DataflowRunner \ --re gion=R EGION \ --clickStreamPubSubSubscription=proj ects/PROJE CT ID/subscriptions/Clickstream-inbound-sub \ --transactionsPubSubSubscription=proj ects/PROJE CT ID/subscriptions/Transactions-inbound-sub \ --inventoryPubSubSubscriptions=proj ects/PROJE CT ID/subscriptions/Inventory-inbound-sub \ --aggregateStockPubSubOutputTopic=proj ects/PROJE CT ID/topics/Inventory-outbound \ --dataWarehouseOutputPro ject=PROJE CT ID \ --serviceAccount=retailpipe line.PROJE Ciam.gserviceaccount.comT ID." See the pipeline source code on GitHub.
- Task patterns The application contains the following task patterns common to pipelines built with the Apache Beam SDK for Java: Apache Beam schemas to work with structured data JsonToRow to convert JSON data The AutoValue code generator to generate plain old Java objects (POJOs) Queuing unprocessable data for further analysis Serial data validation transforms DoFn.StartBundle to micro-batch calls to external services Side-input patterns Costs In this document, you use the following billable components of Google Cloud: BigQuery Bigtable Cloud Scheduler Compute Engine Dataflow Pub/Sub To generate a cost estimate based on your projected usage, use the pricing calculator .
- Run the following command once for each of the following IAM roles: roles/dataflow.admin roles/dataflow.worker roles/pubsub.editor roles/bigquery.dataEditor roles/bigtable.admin roles/bigquery.jobUser gcloud projects remove-iam-policy-binding PROJECT ID \ --member = serviceAccount:retailpipeline@ PROJECT ID .iam.gserviceaccount.com \ --role = ROLE Optional: Revoke the authentication credentials that you created, and delete the local credential file. gcloud auth application-default revoke Optional: Revoke credentials from the gcloud CLI. gcloud auth revoke What's next View the sample application on GitHub .
- Grant your Google Account a role that lets you create access tokens for the service account: gcloud iam service-accounts add-iam-policy-binding retailpipeline@ PROJECT ID .iam.gserviceaccount.com --member = " user:EMAIL AD DRESS" --role = roles/iam.serviceAccountTokenCreator If needed, download and install Gradle .

