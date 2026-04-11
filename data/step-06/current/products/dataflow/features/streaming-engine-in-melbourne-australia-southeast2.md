---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.832Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming Engine in Melbourne (australia-southeast2)"
feature_slug: "streaming-engine-in-melbourne-australia-southeast2"
latest_feature_date: "2021-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
keywords:
  - "streaming"
  - "engine"
  - "in"
  - "melbourne"
  - "australia"
  - "southeast2"
  - "this"
  - "makes"
---

# Streaming Engine in Melbourne (australia-southeast2)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature makes Streaming Engine available in zones in the Melbourne region australia-southeast2.

## Extended Definition

This feature makes Streaming Engine available in zones in the Melbourne region australia-southeast2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Create a streaming pipeline using a Dataflow template This quickstart shows you how to create a streaming pipeline using a Google-provided Dataflow template.
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.

### "Create an ecommerce streaming pipeline \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Task patterns The application contains the following task patterns common to pipelines built with the Apache Beam SDK for Java: Apache Beam schemas to work with structured data JsonToRow to convert JSON data The AutoValue code generator to generate plain old Java objects (POJOs) Queuing unprocessable data for further analysis Serial data validation transforms DoFn.StartBundle to micro-batch calls to external services Side-input patterns Costs In this document, you use the following billable components of Google Cloud: BigQuery Bigtable Cloud Scheduler Compute Engine Dataflow Pub/Sub To generate a cost estimate based on your projected usage, use the pricing calculator .
- Create the example sources and sinks This section explains how to create the following: A Cloud Storage bucket to use as a temporary storage location Streaming data sources using Pub/Sub Datasets to load the data into BigQuery A Bigtable instance Create a Cloud Storage bucket Begin by creating a Cloud Storage bucket.
- In this tutorial, you create a Dataflow streaming pipeline that transforms ecommerce data from Pub/Sub topics and subscriptions and outputs the data to BigQuery and Bigtable.
- This step creates a publisher for clickstream data that publishes one message per minute. gcloud scheduler jobs create pubsub clickstream \ --schedule = " " \ - -locatio n = LOCATION \ --topic = "Clickstream-inbound" \ --message-body = '{"uid":464670,"sessionId":null,"returning":false,"lat":39.669082,"lng":-80.312306,"agent":"Mozilla/5.0 (iPad; CPU OS 12 2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;","event":"add-to-cart","transaction":false,"timestamp":1660091197071,"ecommerce":{"items":[{"item name":"Donut Friday Scented T-Shirt","item id":"67890","price":33.75,"item brand":"Google","item category":"Apparel","item category 2":"Mens","item c ategory 3":"Shirts","item category 4":"Tshirts","item variant":"Black","item list name":"Search Results","item list id":"SR123","index":1,"quantity":2}]},"user id":74378,"client id":"52393559","page previous":"P 3","page":"P 3","event datetime":"2022-08-10 12:26:37"}' To start the Cloud Scheduler job, use the gcloud scheduler jobs run command. gcloud scheduler jobs run --location = LOCATION clickstream Create and run another similar publisher for inventory data that publishes one message every two minutes. gcloud scheduler jobs create pubsub inventory \ --schedule = " /2 " \ - -locatio n = LOCATION \ --topic = "Inventory-inbound" \ --message-body = '{"count":1,"sku":0,"aisleId":0,"product name":null,"departmentId":0,"price":null," ;recipeId":null,"image":null,"timestamp":1660149636076,"store id":1,"product id":10050}' Start the second Cloud Scheduler job. gcloud scheduler jobs run --location = LOCATION inventory Create and run a third publisher for transaction data that publishes one message every two minutes. gcloud scheduler jobs create pubsub transactions \ --schedule = " /2 " \ - -locatio n = LOCATION \ --topic = "Transactions-inbound" \ --message-body = '{"order number":"b8be9222-990d-11ea-9c05-42010af00081","user id":998685,"store id":1,"returning":false,"time of sale":0,"department id":0,"product id":4,"product count":1,"price":25.0,"order id":0,"order dow":0,"order hour of day":0,"order woy":0,"days since prior order":null,"product name":null,"product sku":0,"image":null,"timestamp":1660157951000,"ecommerce":{"items":[{"item name":"Donut Friday Scented T-Shirt","item id":"67890","price":33.75,"item brand":"Google","i tem category":"Apparel","item category 2":"Mens","item category 3":"Shirts","item category 4":"Tshirts","item variant":"Black","item list name":"Search Results","item list id":"SR123","index":1,"quantity":2}]},"client id":"1686224283","page previous":null,"page":null,"event datetime":"2022-08-10 06:59:11"}' Start the third Cloud Scheduler job. gcloud scheduler jobs run --location = LOCATION transactions View your results View data written to your BigQuery tables.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The code snippets in this guide and what is found in the Streaming Word Count notebook might have minor discrepancies.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Advanced features include the following workflows: Use Interactive FlinkRunner on notebook-managed clusters Use Beam SQL and beam sql magic Accelerate using JIT compiler and GPU Build a custom container Disable external IP addresses Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Visualize the data through the Interactive Beam inspector You might find it distracting to introspect the data of a PCollection by constantly calling show() and collect() , especially when the output takes up a lot of the space on your screen and makes it hard to navigate through the notebook.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Streaming Engine By default, the Dataflow pipeline runner executes the steps of your streaming pipeline entirely on worker virtual machines, consuming worker CPU, memory, and Persistent Disk storage.
- Dataflow's Streaming Engine moves pipeline execution out of the worker VMs and into the Dataflow service backend.
- For more information, see Streaming Engine .
- Run your pipeline If you want to learn how to create your first pipeline and deploy it locally and on Dataflow, you can follow one of the Dataflow quickstarts: Run a Java pipeline Run a Python pipeline Run a Go pipeline Run a streaming pipeline from a template --> After you create and test your Apache Beam pipeline, run your pipeline.

