---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:22:59.242Z"
product_name: "Vertex AI Vision"
product_slug: "vertex-ai-vision"
feature_name: "Motion detection zones"
feature_slug: "motion-detection-zones"
latest_feature_date: "2024-07-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision-ai/docs/release-notes"
  - "https://docs.cloud.google.com/vision-ai/docs/build-app"
  - "https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial"
  - "https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-sender"
keywords:
  - "motion"
  - "detection"
  - "zones"
  - "filtering"
  - "now"
  - "supports"
  - "defining"
  - "specific"
---

# Motion detection zones

Product: Vertex AI Vision
Coverage: LOW

## Step 02 Summary

Motion filtering now supports defining specific zones or exclusion areas to control where motion is detected.

## Extended Definition

Motion filtering now supports defining specific zones or exclusion areas to control where motion is detected.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)
- [https://docs.cloud.google.com/vision-ai/docs/build-app](https://docs.cloud.google.com/vision-ai/docs/build-app)
- [https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial](https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial)
- [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-sender](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-sender)

## Supporting Pages

### Vertex AI Vision release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision-ai/docs/release-notes](https://docs.cloud.google.com/vision-ai/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Motion filtering - motion detection zone You can now specify zones for motion detection, or areas to omit from motion detection.
- Vertex AI Vision Warehouse now supports semantic searches and similarity searches on video and images.
- For more information, see the motion filtering guide .
- For more information, see the following documentation pages: Set up a project and a development environment Use the Face Blur model with the Python SDK May 02, 2023 Announcement Updated pricing structure begins Vertex AI Vision functionality is now available under an updated billing framework and discounting schedule.

### Build an application \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision-ai/docs/build-app](https://docs.cloud.google.com/vision-ai/docs/build-app)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add a Vertex AI AutoML object detection streaming model Fair-aware: Review regulations in the region where you are deploying the technology, and existing research or industry guidance in your application domain to learn about policy guidelines and common fairness issues.
- Similarly, user-trained models can also be two types - AutoML or custom-trained : Pre-trained models perform a specific objective, are trained on generalized data, and are ready to use.
- Similarly, user-trained models can also be two types - AutoML or custom-trained : Pre-trained models perform a specific objective, are trained on generalized data, and are ready to use.
- In the Train new model page, complete the following steps for your AutoML image object detection model: AutoML is a good choice for a wide range of use cases.

### "Create an occupancy analytics app with BigQuery forecasting \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial](https://docs.cloud.google.com/vision-ai/docs/occupancy-bq-tutorial)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This returns a result sorted by time that looks like the following: currentTime total count type 2022-08-10 16:17:00 UTC 129 "Person" 2022-08-10 16:18:00 UTC 150 "Person" 2022-08-10 16:19:00 UTC 80 "Person" 2022-08-10 16:20:00 UTC 129 "Person" 2022-08-10 16:21:00 UTC 142 "Person" 2022-08-10 16:22:00 UTC 71 "Person" 2022-08-10 16:22:00 UTC 2 "Vehicle" Train the forecast model with BigQuery ML Now that you have data in a view to serve as training data, you can train the forecast model with BigQuery ML.
- Set up a remote machine to stream video Now that you have a deployed occupancy count app ready to receive, process, and store streaming data out to a BigQuery table, you must actually stream video data into the app.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### "visionai::StreamSender Class Reference \_|\_ Vertex AI Vision \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-sender](https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-sender)
- Source ID: `site-python-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- StreamSender :: Options options ; options . service connection options = ...; options . stream id = "my-stream" ; // Create an instance of the StreamSender. auto stream sender statusor = StreamSender :: Create ( options ); if ( ! stream sender . ok ()) { // An error occurred during the setup of the sender. // You can fix the problem and try again. } auto stream sender = std :: move ( stream sender statusor ); // Now you can repeatedly send Packets. while ( true ) { // Get a new packet from some function or generation mechanism.
- Summary Each instance of the StreamSender represents a single connection to a specific stream.
- Example - Repeatedly sending Packet s to a specific stream. // First populate the options.
- The first overload blocks until the status of the Send is known.

