---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:22:59.244Z"
product_name: "Vertex AI Vision"
product_slug: "vertex-ai-vision"
feature_name: "vaictl model output visualization"
feature_slug: "vaictl-model-output-visualization"
latest_feature_date: "2024-07-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision-ai/docs/occupancy-count-tutorial"
  - "https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial"
  - "https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial"
  - "https://docs.cloud.google.com/vision-ai/docs/release-notes"
keywords:
  - "vaictl"
  - "model"
  - "output"
  - "visualization"
  - "the"
  - "command"
  - "line"
  - "tool"
---

# vaictl model output visualization

Product: Vertex AI Vision
Coverage: LOW

## Step 02 Summary

The vaictl command-line tool now includes a visualization command to display Vertex AI Vision model outputs over real-time video streams with annotations and statistics.

## Extended Definition

The vaictl command-line tool now includes a visualization command to display Vertex AI Vision model outputs over real-time video streams with annotations and statistics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision-ai/docs/occupancy-count-tutorial](https://docs.cloud.google.com/vision-ai/docs/occupancy-count-tutorial)
- [https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial](https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial)
- [https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial](https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial)
- [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)

## Supporting Pages

### "Create an occupancy count app with remote streaming input \_|\_ Vertex AI\

- URL: [https://docs.cloud.google.com/vision-ai/docs/occupancy-count-tutorial](https://docs.cloud.google.com/vision-ai/docs/occupancy-count-tutorial)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Download the vaictl command-line tool In the SSH-in-browser window, download the Vertex AI Vision ( vaictl ) command-line tool using the following command: wget https://github.com/google/visionai/releases/download/v0.0.5/visionai 0.0-5 amd64.deb Install the command-line tool by running the following command: sudo apt install ./visionai 0.0-5 amd64.deb You can test the installation by running the following command: vaictl --help Ingest a video file into your app After you set up your VM environment, you can copy a sample video file and then use vaictl to stream the video data to your occupancy count app.
- After establishing this connection, you can download the vaictl command-line tool to ingest video into your app.
- If you use the --loop flag, the video is looped into the stream until you stop the command: vaictl -p PROJECT ID \ -l LOCATION ID \ -c application-cluster-0 \ --service-endpoint visionai.googleapis.com \ send video-file to streams ' occupancy-count-stream ' --file-path LOCAL FILE.EXT --loop It might take 100 seconds between starting the vaictl ingest operation and the video appearing in the dashboard.
- This takes you to the graph visualization of the processing pipeline.

### "Create an occupancy analytics app with BigQuery forecasting \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial](https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Download the vaictl command-line tool In the SSH-in-browser window, download the Vertex AI Vision ( vaictl ) command-line tool using the following command: wget https://github.com/google/visionai/releases/download/v0.0.5/visionai 0.0-5 amd64.deb Install the command-line tool by running the following command: sudo apt install ./visionai 0.0-5 amd64.deb You can test the installation by running the following command: vaictl --help Ingest a video file into your app After you set up your VM environment, you can copy a sample video file and then use vaictl to stream the video data to your occupancy count app.
- After establishing this connection, you can download the vaictl command-line tool to ingest video into your app.
- If using the --loop flag, the video is looped into the stream until you stop the command: vaictl -p PROJECT ID \ -l LOCATION ID \ -c application-cluster-0 \ --service-endpoint visionai.googleapis.com \ send video-file to streams ' occupancy-bq-stream ' --file-path LOCAL FILE.EXT --loop It might take 100 seconds between starting the vaictl ingest operation and the video appearing in the dashboard.
- This takes you to the graph visualization of the processing pipeline.

### "Create a face blur app with warehouse storage \_|\_ Vertex AI Vision \_\

- URL: [https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial](https://docs.cloud.google.com/vision-ai/docs/face-blur-tutorial)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Ingest video into the stream After you create a stream resource, you can use the vaictl command-line tool to send video data to the stream.
- You must run this command in the network that has direct access to the RTSP feed. vaictl -p PROJECT ID \ -l LOCATION ID \ -c application-cluster-0 \ --service-endpoint visionai.googleapis.com \ send rtsp to streams input-stream --rtsp-uri RTSP ADDRESS If the command runs successfully, you get the following output: [...] Waiting for long running operation projects/your-project/locations/us-central1/operations/operation-1651364156981-5dde82db7e4a9-dfb17ca5-1051eb20 ⠙ I20220430 21:16:28.024988 211449 gstvaisink.cc:417] cluster-id=application-cluster-0 I20220430 21:16:28.025032 211449 gstvaisink.cc:418] cluster-endpoint=c8khq35ftg78mn61ef50.us-central1.visionai.goog I20220430 21:16:28.025040 211449 gstvaisink.cc:419] event-id=ev-1651364114183255223 I20220430 21:16:28.025048 211449 gstvaisink.cc:420] stream-id=input-stream I20220430 21:16:28.025053 211449 gstvaisink.cc:421] series-id=ev-1651364114183255223--input-stream I20220430 21:16:28.025060 211449 gstvaisink.cc:422] Sending data Local video file You can also send video file data to a stream instead of a live video feed.
- To initialize the gcloud CLI, run the following command: gcloud init Installing the vaictl tool to ingest data into a stream (OS: Debian GNU/Linux, CPU architecture: x86 64): Note : You can also get a Docker image that has the Vertex AI Vision SDK and all its dependencies already pre-installed.
- Download the required package: wget https://github.com/google/visionai/releases/download/v0.0.5/visionai 0.0-5 amd64.deb After downloading the package, run the following command in the directory you downloaded the file: sudo apt install ./visionai 0.0-5 amd64.deb Verify installation: vaictl --help Create a stream To create a streaming video analysis app, you must first create and register a stream resource.

### Vertex AI Vision release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- July 14, 2024 Feature Model output visualization tool in vaictl You can now visualize model output using the vaictl command line tool available through the Vertex AI Vision SDK .
- Features: Visualize command added to vaictl command-line tool.
- March 22, 2023 Feature Model event management with Cloud Functions and Pub/Sub The Vertex AI Vision event management feature lets you generate and send event notifications through Pub/Sub topics by: Enabling supported models to output to Cloud Function for data processing and events generation.
- For more information, see the following documentation pages: Set up a project and a development environment Use the Face Blur model with the Python SDK May 02, 2023 Announcement Updated pricing structure begins Vertex AI Vision functionality is now available under an updated billing framework and discounting schedule.

