---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:22:59.249Z"
product_name: "Vertex AI Vision"
product_slug: "vertex-ai-vision"
feature_name: "Model event management"
feature_slug: "model-event-management"
latest_feature_date: "2023-03-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision-ai/docs/release-notes"
  - "https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial"
  - "https://docs.cloud.google.com/vision-ai/docs/connect-bigquery"
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
Coverage: LOW

## Step 02 Summary

Vertex AI Vision added model event management to send event notifications through Pub/Sub, including support for sending events to configured topics from supported models via Cloud Functions.

## Extended Definition

Vertex AI Vision added model event management to send event notifications through Pub/Sub, including support for sending events to configured topics from supported models via Cloud Functions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)
- [https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial](https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial)
- [https://docs.cloud.google.com/vision-ai/docs/connect-bigquery](https://docs.cloud.google.com/vision-ai/docs/connect-bigquery)
- [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options)

## Supporting Pages

### Vertex AI Vision release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 22, 2023 Feature Model event management with Cloud Functions and Pub/Sub The Vertex AI Vision event management feature lets you generate and send event notifications through Pub/Sub topics by: Enabling supported models to output to Cloud Function for data processing and events generation.
- GA event management is available for the following models: Occupancy analytics pre-trained model Vertex AI custom-trained models imported into a Vertex AI Vision application For more information, see the Enable model event notification with Cloud Functions and Pub/Sub .
- July 14, 2024 Feature Model output visualization tool in vaictl You can now visualize model output using the vaictl command line tool available through the Vertex AI Vision SDK .
- An easy configuration of the event management system in the Vertex AI Vision Studio.

### "Create a face blur app with warehouse storage \_|\_ Vertex AI Vision \_\

- URL: [https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial](https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Costs In this document, you use the following billable components of Google Cloud: Vertex AI Vision (Streams - Data ingested, Streams - Data consumed, Models - Person / face blur, Warehouse - Video storage) To generate a cost estimate based on your projected usage, use the pricing calculator .
- You must run this command in the network that has direct access to the RTSP feed. vaictl -p PROJECT ID \ -l LOCATION ID \ -c application-cluster-0 \ --service-endpoint visionai.googleapis.com \ send rtsp to streams input-stream --rtsp-uri RTSP ADDRESS If the command runs successfully, you get the following output: [...] Waiting for long running operation projects/your-project/locations/us-central1/operations/operation-1651364156981-5dde82db7e4a9-dfb17ca5-1051eb20 ⠙ I20220430 21:16:28.024988 211449 gstvaisink.cc:417] cluster-id=application-cluster-0 I20220430 21:16:28.025032 211449 gstvaisink.cc:418] cluster-endpoint=c8khq35ftg78mn61ef50.us-central1.visionai.goog I20220430 21:16:28.025040 211449 gstvaisink.cc:419] event-id=ev-1651364114183255223 I20220430 21:16:28.025048 211449 gstvaisink.cc:420] stream-id=input-stream I20220430 21:16:28.025053 211449 gstvaisink.cc:421] series-id=ev-1651364114183255223--input-stream I20220430 21:16:28.025060 211449 gstvaisink.cc:422] Sending data Local video file You can also send video file data to a stream instead of a live video feed.
- To initialize the gcloud CLI, run the following command: gcloud init Installing the vaictl tool to ingest data into a stream (OS: Debian GNU/Linux, CPU architecture: x86 64): Note : You can also get a Docker image that has the Vertex AI Vision SDK and all its dependencies already pre-installed.
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Create a face blur app with warehouse storage Stay organized with collections Save and categorize content based on your preferences.

### "Connect and store data to BigQuery \_|\_ Vertex AI Vision \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision-ai/docs/connect-bigquery](https://docs.cloud.google.com/vision-ai/docs/connect-bigquery)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you add a BigQuery connector to your Vertex AI Vision app all the connected app model outputs will be ingested to the target table.
- Sample queries You can use the following sample queries in BigQuery to gain insight from Vertex AI Vision models.
- DATASET : The id of the BigQuery dataset. gcloud alpha bq tables create TABLE NAME \ --dataset= DATASET \ --schema-file=./bigquery schema.json Sample BigQuery rows generated by a Vertex AI Vision app: ingestion time application instance node annotation 2022-05-11 23:3211.911378 UTC my application 5 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgE1Eg5teV9hcHBsaWNhdGlvbgjS+YnOzdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} 2022-05-11 23:3211.911338 UTC my application 1 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgExEg5teV9hcHBsaWNhdGlvbgiq+YnOzdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} 2022-05-11 23:3211.911313 UTC my application 4 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgE0Eg5teV9hcHBsaWNhdGlvbgiR+YnOzdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} 2022-05-11 23:3212.235327 UTC my application 4 just-one-node {"bytesFields": ["Ig1qdXN0LW9uZS1ub2RIGgE0Eg5teV9hcHBsaWNhdGlvbgi/3J3Ozdj3Ag=="],"displayNames":["hello","world"],"ids":["12345","34567"]} Use a customized schema If the default schema doesn't work for your use case, you can use Cloud Run functions to generate BigQuery rows with a user-defined schema.
- Home Documentation AI and ML Vertex AI Vision Guides Send feedback Connect and store data to BigQuery Stay organized with collections Save and categorize content based on your preferences.

### "visionai::StreamReceiver::Options Struct Reference \_|\_ Vertex AI Vision\

- URL: [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Vision Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. visionai:: StreamReceiver:: Options #include <streams.h> Options to configure the StreamReceiver .
- Leave empty to receive from the latest event. receiver id std :: string visionai :: StreamReceiver :: Options :: receiver id OPTIONAL: A name to identify the receiver.
- Public attributes event id std :: string visionai :: StreamReceiver :: Options :: event id OPTIONAL: This specifies a specific event to receive from.
- Leave empty to have it be automatically generatead. service connection options ServiceConnectionOptions visionai :: StreamReceiver :: Options :: service connection options REQUIRED: This specifies the service endpoint and cluster to connect to. stream id std :: string visionai :: StreamReceiver :: Options :: stream id REQUIRED: This specifies the specific stream to receive from.

