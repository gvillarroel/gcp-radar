---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.852Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Schema assignment in Dataflow SQL UI"
feature_slug: "schema-assignment-in-dataflow-sql-ui"
latest_feature_date: "2019-11-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job"
  - "https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline"
keywords:
  - "schema"
  - "assignment"
  - "in"
  - "dataflow"
  - "sql"
  - "ui"
  - "the"
  - "lets"
---

# Schema assignment in Dataflow SQL UI

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Dataflow SQL UI lets users assign schemas to data sources.

## Extended Definition

The Dataflow SQL UI lets users assign schemas to data sources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.
- In the Schema section, click the Edit as text toggle and paste the following schema definition into the box: ride id:string,point idx:integer,latitude:float,longitude:float,timestamp:timestamp, meter reading:float,meter increment:float,ride status:string,passenger count:integer In the Partition and cluster settings section, for Partitioning , select the timestamp field.
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Advanced features include the following workflows: Use Interactive FlinkRunner on notebook-managed clusters Use Beam SQL and beam sql magic Accelerate using JIT compiler and GPU Build a custom container Disable external IP addresses Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.

### "Create a custom job with the job builder \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The job builder lets you create custom batch and streaming Dataflow jobs.
- Run the following command in your shell or terminal: gcloud dataflow yaml run my-job-builder-job --yaml-pipeline-file = YAML FILE PATH Replace YAML FILE PATH with the path of your YAML file, either locally or in Cloud Storage.
- Run the pipeline To run a pipeline from the job builder, perform the following steps: Optional: Set Dataflow job options.
- Validate the pipeline before launching For pipelines with complex configuration, such as Python filters and SQL expressions, it can be helpful to check the pipeline configuration for syntax errors before launching.

### "Create an ecommerce streaming pipeline \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task patterns The application contains the following task patterns common to pipelines built with the Apache Beam SDK for Java: Apache Beam schemas to work with structured data JsonToRow to convert JSON data The AutoValue code generator to generate plain old Java objects (POJOs) Queuing unprocessable data for further analysis Serial data validation transforms DoFn.StartBundle to micro-batch calls to external services Side-input patterns Costs In this document, you use the following billable components of Google Cloud: BigQuery Bigtable Cloud Scheduler Compute Engine Dataflow Pub/Sub To generate a cost estimate based on your projected usage, use the pricing calculator .
- For information about how to name a subscription, see Guidelines to name a topic or a subscription . gcloud pubsub topics create TOPIC NAME Replace TOPIC NAME with the following values, running the command four times, once for each topic: Clickstream-inbound Transactions-inbound Inventory-inbound Inventory-outbound To create a subscription to your topic, run the gcloud pubsub subscriptions create command once for each subscription: Create a Clickstream-inbound-sub subscription: gcloud pubsub subscriptions create --topic Clickstream-inbound Clickstream-inbound-sub Create a Transactions-inbound-sub subscription: gcloud pubsub subscriptions create --topic Transactions-inbound Transactions-inbound-sub Create an Inventory-inbound-sub subscription: gcloud pubsub subscriptions create --topic Inventory-inbound Inventory-inbound-sub Create BigQuery datasets and table Create a BigQuery dataset and a partitioned table with the appropriate schema for your Pub/Sub topic.
- Enable the Compute Engine, Dataflow, Pub/Sub, BigQuery, Bigtable, Bigtable Admin, and Cloud Scheduler APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.
- Enable the Compute Engine, Dataflow, Pub/Sub, BigQuery, Bigtable, Bigtable Admin, and Cloud Scheduler APIs: Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

