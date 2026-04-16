---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:53.518Z"
product_name: "Vertex AI Vision"
product_slug: "vertex-ai-vision"
feature_name: "Model event management"
feature_slug: "model-event-management"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial"
  - "https://docs.cloud.google.com/vision-ai/docs/connect-bigquery"
  - "https://docs.cloud.google.com/vision-ai/docs/build-app"
  - "https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options"
keywords:
  - "model"
  - "event"
  - "management"
  - "vertex"
  - "ai"
  - "vision"
  - "added"
  - "to"
---

# Model event management

Product: Vertex AI Vision
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Vision added model event management to send event notifications through Pub/Sub, including support for sending events to configured topics from supported models via Cloud Functions.

## Extended Definition

Vertex AI Vision added model event management to send event notifications through Pub/Sub, including support for sending events to configured topics from supported models via Cloud Functions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial](https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial)
- [https://docs.cloud.google.com/vision-ai/docs/connect-bigquery](https://docs.cloud.google.com/vision-ai/docs/connect-bigquery)
- [https://docs.cloud.google.com/vision-ai/docs/build-app](https://docs.cloud.google.com/vision-ai/docs/build-app)
- [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options)

## Supporting Pages

### "Create a face blur app with warehouse storage \_|\_ Vertex AI Vision \_\

- URL: [https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial](https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Costs In this document, you use the following billable components of Google Cloud: Vertex AI Vision (Streams - Data ingested, Streams - Data consumed, Models - Person / face blur, Warehouse - Video storage) To generate a cost estimate based on your projected usage, use the pricing calculator .
- You must run this command in the network that has direct access to the RTSP feed. vaictl -p PROJECT ID \ -l LOCATION ID \ -c application-cluster-0 \ --service-endpoint visionai.googleapis.com \ send rtsp to streams input-stream --rtsp-uri RTSP ADDRESS If the command runs successfully, you get the following output: [...] Waiting for long running operation projects/your-project/locations/us-central1/operations/operation-1651364156981-5dde82db7e4a9-dfb17ca5-1051eb20 ⠙ I20220430 21:16:28.024988 211449 gstvaisink.cc:417] cluster-id=application-cluster-0 I20220430 21:16:28.025032 211449 gstvaisink.cc:418] cluster-endpoint=c8khq35ftg78mn61ef50.us-central1.visionai.goog I20220430 21:16:28.025040 211449 gstvaisink.cc:419] event-id=ev-1651364114183255223 I20220430 21:16:28.025048 211449 gstvaisink.cc:420] stream-id=input-stream I20220430 21:16:28.025053 211449 gstvaisink.cc:421] series-id=ev-1651364114183255223--input-stream I20220430 21:16:28.025060 211449 gstvaisink.cc:422] Sending data Local video file You can also send video file data to a stream instead of a live video feed.
- To initialize the gcloud CLI, run the following command: gcloud init Installing the vaictl tool to ingest data into a stream (OS: Debian GNU/Linux, CPU architecture: x86 64): Note : You can also get a Docker image that has the Vertex AI Vision SDK and all its dependencies already pre-installed.
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Create a face blur app with warehouse storage Stay organized with collections Save and categorize content based on your preferences.

### "Connect and store data to BigQuery \_|\_ Vertex AI Vision \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision-ai/docs/connect-bigquery](https://docs.cloud.google.com/vision-ai/docs/connect-bigquery)
- Source ID: `site-docs-reference`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you add a BigQuery connector to your Vertex AI Vision app all the connected app model outputs will be ingested to the target table.
- Sample queries You can use the following sample queries in BigQuery to gain insight from Vertex AI Vision models.
- DATASET : The id of the BigQuery dataset. gcloud alpha bq tables create TABLE NAME \ --dataset= DATASET \ --schema-file=./bigquery schema.json Sample BigQuery rows generated by a Vertex AI Vision app: ingestion time application instance node annotation 2022-05-11 23:3211.911378 UTC my application 5 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgE1Eg5teV9hcHBsaWNhdGlvbgjS+YnOzdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} 2022-05-11 23:3211.911338 UTC my application 1 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgExEg5teV9hcHBsaWNhdGlvbgiq+YnOzdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} 2022-05-11 23:3211.911313 UTC my application 4 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgE0Eg5teV9hcHBsaWNhdGlvbgiR+YnOzdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} 2022-05-11 23:3212.235327 UTC my application 4 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgE0Eg5teV9hcHBsaWNhdGlvbgi/3J3Ozdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} Use a customized schema If the default schema doesn't work for your use case, you can use Cloud Run functions to generate BigQuery rows with a user-defined schema.
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Connect and store data to BigQuery Stay organized with collections Save and categorize content based on your preferences.

### Build an application \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision-ai/docs/build-app](https://docs.cloud.google.com/vision-ai/docs/build-app)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the following schema will receive the request with the image encoded into a field calling image bytes : properties : image bytes : type : string Your custom model receives prediction input in the following format: { "instances" : [ { "image bytes" : { "b64" : " BASE64 ENCODED IMAGE BYTES " } } ] } Before importing the model to Vertex AI Vision, verify that your model works correctly with this input.
- Supported models The following models offer Cloud Run functions event generation and Pub/Sub event notification integrations: Occupancy analytics model Vertex AI custom-trained models Configure Cloud Run functions to process model output To trigger event-based notifications, you must first set up Cloud Run functions to process model output and generate events.
- Model event notification with Cloud Run functions and Pub/Sub In Vertex AI Vision, models receive media data from devices like cameras, run AI predictions on the data, and produce annotations continuously.
- This page shows you how to create an app and combine components - such as input streams, models for analysis, and warehouses for storage - for use on Vertex AI Vision's app platform.

### "visionai::StreamReceiver::Options Struct Reference \_|\_ Vertex AI Vision\

- URL: [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options)
- Source ID: `site-python-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. visionai:: StreamReceiver:: Options #include <streams.h> Options to configure the StreamReceiver .
- Leave empty to receive from the latest event. receiver id std :: string visionai :: StreamReceiver :: Options :: receiver id OPTIONAL: A name to identify the receiver.
- Public attributes event id std :: string visionai :: StreamReceiver :: Options :: event id OPTIONAL: This specifies a specific event to receive from.
- Leave empty to have it be automatically generatead. service connection options ServiceConnectionOptions visionai :: StreamReceiver :: Options :: service connection options REQUIRED: This specifies the service endpoint and cluster to connect to. stream id std :: string visionai :: StreamReceiver :: Options :: stream id REQUIRED: This specifies the specific stream to receive from.

