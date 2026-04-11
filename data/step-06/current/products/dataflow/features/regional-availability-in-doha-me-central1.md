---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.815Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional availability in Doha (me-central1)"
feature_slug: "regional-availability-in-doha-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
keywords:
  - "regional"
  - "availability"
  - "in"
  - "doha"
  - "me"
  - "central1"
  - "this"
  - "makes"
---

# Regional availability in Doha (me-central1)

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature makes Dataflow available in the Doha region me-central1.

## Extended Definition

This feature makes Dataflow available in the Doha region me-central1.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- If this change causes you to exceed your quota, set your Regional managed instance groups quota to the same limit assigned to your Managed instance groups quota.
- March 30, 2023 Feature Dataflow is now available in Doha ( me-central1 ).
- February 03, 2021 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: asia-east2 Hong Kong asia-northeast2 - Japan (Osaka) asia-northeast3 - Seoul asia-southeast2 - Jakarta europe-north1 - Finland us-west3 - Salt Lake City us-west4 - Las Vegas January 29, 2021 Announcement Flex templates now support updating streaming jobs and Flexible Resource Scheduling (FlexRS).
- November 05, 2020 Feature Dataflow now supports Dataflow Shuffle, Streaming Engine, FlexRS, and the following regional endpoints in GA: us-west2 (Los Angeles) southamerica-east1 (São Paulo) europe-west6 (Zurich) asia-south1 (Mumbai) Change Pub/Sub I/O metrics in the Dataflow and Cloud Monitoring UIs may be unavailable for Dataflow jobs using Streaming Engine .

### "Create an ecommerce streaming pipeline \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline](https://docs.cloud.google.com/dataflow/docs/tutorials/ecommerce-retail-pipeline)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- This step creates a publisher for clickstream data that publishes one message per minute. gcloud scheduler jobs create pubsub clickstream \ --schedule = " " \ - -locatio n = LOCATION \ --topic = "Clickstream-inbound" \ --message-body = '{"uid":464670,"sessionId":null,"returning":false,"lat":39.669082,"lng":-80.312306,"agent":"Mozilla/5.0 (iPad; CPU OS 12 2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;","event":"add-to-cart","transaction":false,"timestamp":1660091197071,"ecommerce":{"items":[{"item name":"Donut Friday Scented T-Shirt","item id":"67890","price":33.75,"item brand":"Google","item category":"Apparel","item category 2":"Mens","item c ategory 3":"Shirts","item category 4":"Tshirts","item variant":"Black","item list name":"Search Results","item list id":"SR123","index":1,"quantity":2}]},"user id":74378,"client id":"52393559","page previous":"P 3","page":"P 3","event datetime":"2022-08-10 12:26:37"}' To start the Cloud Scheduler job, use the gcloud scheduler jobs run command. gcloud scheduler jobs run --location = LOCATION clickstream Create and run another similar publisher for inventory data that publishes one message every two minutes. gcloud scheduler jobs create pubsub inventory \ --schedule = " /2 " \ - -locatio n = LOCATION \ --topic = "Inventory-inbound" \ --message-body = '{"count":1,"sku":0,"aisleId":0,"product name":null,"departmentId":0,"price":null," ;recipeId":null,"image":null,"timestamp":1660149636076,"store id":1,"product id":10050}' Start the second Cloud Scheduler job. gcloud scheduler jobs run --location = LOCATION inventory Create and run a third publisher for transaction data that publishes one message every two minutes. gcloud scheduler jobs create pubsub transactions \ --schedule = " /2 " \ - -locatio n = LOCATION \ --topic = "Transactions-inbound" \ --message-body = '{"order number":"b8be9222-990d-11ea-9c05-42010af00081","user id":998685,"store id":1,"returning":false,"time of sale":0,"department id":0,"product id":4,"product count":1,"price":25.0,"order id":0,"order dow":0,"order hour of day":0,"order woy":0,"days since prior order":null,"product name":null,"product sku":0,"image":null,"timestamp":1660157951000,"ecommerce":{"items":[{"item name":"Donut Friday Scented T-Shirt","item id":"67890","price":33.75,"item brand":"Google","i tem category":"Apparel","item category 2":"Mens","item category 3":"Shirts","item category 4":"Tshirts","item variant":"Black","item list name":"Search Results","item list id":"SR123","index":1,"quantity":2}]},"client id":"1686224283","page previous":null,"page":null,"event datetime":"2022-08-10 06:59:11"}' Start the third Cloud Scheduler job. gcloud scheduler jobs run --location = LOCATION transactions View your results View data written to your BigQuery tables.
- Task patterns The application contains the following task patterns common to pipelines built with the Apache Beam SDK for Java: Apache Beam schemas to work with structured data JsonToRow to convert JSON data The AutoValue code generator to generate plain old Java objects (POJOs) Queuing unprocessable data for further analysis Serial data validation transforms DoFn.StartBundle to micro-batch calls to external services Side-input patterns Costs In this document, you use the following billable components of Google Cloud: BigQuery Bigtable Cloud Scheduler Compute Engine Dataflow Pub/Sub To generate a cost estimate based on your projected usage, use the pricing calculator .
- In this tutorial, you create a Dataflow streaming pipeline that transforms ecommerce data from Pub/Sub topics and subscriptions and outputs the data to BigQuery and Bigtable.
- If you used an existing project for the tasks in this document, when you delete it, you also delete any other work you've done in the project.

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The following is a sample message from this topic, in the JSON format: { "ride id" : "19c41fc4-e362-4be5-9d06-435a7dc9ba8e" , "point idx" : 217 , "latitude" : 40 .75399, "longitude" : -73.96302, "timestamp" : "2021-03-08T02:29:09.66644-05:00" , "meter reading" : 6 .293821, "meter increment" : 0 .029003782, "ride status" : "enroute" , "passenger count" : 1 } For Temp location , enter the following: gs:// BUCKET NAME /temp/ Replace BUCKET NAME with the name of your Cloud Storage bucket.
- In the dialog, for Topic name enter the following, and then click Save : projects/pubsub-public-data/topics/taxirides-realtime This publicly available Pub/Sub topic is based on the NYC Taxi & Limousine Commission's open dataset .
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Complete the following steps before running your pipeline.
- To enable hierarchical namespace , in the Optimize storage for data-intensive workloads section, select Enable hierarchical namespace on this bucket .

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- PipelineOptions () Set the project to the default project in your current Google Cloud environment. , options . view as ( GoogleCloudOptions ) . project = google . auth . default () Set the Google Cloud region to run Dataflow. options . view as ( GoogleCloudOptions ) . region = 'us-central1' Choose a Cloud Storage location. dataflow gcs location = 'gs://<change me>/dataflow' Set the staging location.
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- This means that the latest version of the kernel shown in the notebooks UI might be ahead of the most recently released version of the SDK.
- To change this behavior and have the show() method always fetch new data, set interactive beam.options.enable capture replay = False .

