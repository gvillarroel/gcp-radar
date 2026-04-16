---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.998Z"
product_name: "Immersive Stream for XR"
product_slug: "immersive-stream-for-xr"
feature_name: "3D-only mode"
feature_slug: "3d-only-mode"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/concept"
keywords:
  - "3d"
  - "only"
  - "mode"
  - "is"
  - "available"
  - "for"
  - "instances"
---

# 3D-only mode

Product: Immersive Stream for XR
Coverage: MEDIUM

## Step 02 Summary

3D-only mode is available for instances.

## Extended Definition

3D-only mode is available for instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing](https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/concept](https://docs.cloud.google.com/immersive-stream/xr/docs/concept)

## Supporting Pages

### "Quickstart: Deploy Immersive Stream for XR experiences \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 247
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While creating a new instance, you can select the 3D-only mode which is available at a cost lower than the 3D/AR mode.
- This may take up to 5 minutes, and you can monitor the progress through the notification bell in the top right corner of the Google Cloud console. gcloud gcloud immersive-stream xr instances update MY INSTANCE \ --fallback-url="https://www.example.com" \ --async Default controls 3D mode By default, our 3D mode cameras use the following controls.
- Note: The web client only supports 3D mode in Chrome and Safari on any platform.
- Monitor service instances Immersive Stream for XR provides a number of metrics out of box that you can use to evaluate the current state of the service instances: Metric Description stream.googleapis.com/stream instance/capacity A GAUGE metric representing the capacity per service instance stream.googleapis.com/stream instance/hits count A DELTA metric representing the number of hits observed by service instance stream.googleapis.com/stream instance/session lengths A DISTRIBUTION metric representing the various session lengths observed by the service instance Additionally, Immersive Stream for XR generates a dashboard when you add a service instance to the project.

### Locations and pricing \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing](https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There is a 3D-only mode of experience available, and the hourly cost is half of the default price.
- L4 GPUs are only available in some regions, and they only support the 3D-only experience mode.
- Augmented reality experiences are not available through streaming in the 3D-only mode.
- Google Cloud region Location NVIDIA T4 Hourly price per capacity unit NVIDIA T4 3D-only hourly price per capacity unit NVIDIA L4 3D-only hourly price per capacity unit us-central1 Iowa, US $2.50 $1.25 $1.56 us-east4 Virginia, US $2.50 $1.25 us-west1 Oregon, US $2.50 $1.25 $1.56 us-west4 Nevada, US $2.50 $1.25 $1.56 northamerica-northeast1 Québec, Canada $3.00 $1.50 asia-northeast1 Tokyo, Japan $3.63 $1.81 $2.26 asia-southeast1 Singapore $3.25 $1.63 $2.04 asia-east2 Hong Kong $3.00 $1.50 europe-west4 Netherlands $3.00 $1.50 $1.88 southamerica-east1 São Paulo, Brazil $3.63 $1.81 australia-southeast1 Sydney, Australia $3.63 $1.81 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Supported commands \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This releases all compute resources reserved for streaming. gcloud immersive-stream xr instances delete my-instance --async Synchronously wait for a long running operation to complete. gcloud immersive-stream xr operations wait operation-id Describe the status of a long running operation. gcloud immersive-stream xr operations describe operation-id List all operations created in the past seven days. gcloud immersive-stream xr operations list Note: The following commands are for features that are not yet publicly available.
- AR mode won't be supported by this instance. gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity1 " --mode=3d --gpu-class=l4 --async Create an Instance that has autoscaling enabled.
- The values for capacity , autoscaling buffer , and autoscaling min capacity can all be updated individually or multiple/all in one command. gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= new-capacity ,enable autoscaling= true ,autoscaling buffer= new-buffer ,autoscaling min capacity= new-min-capacity " --async Disable autoscaling in a region. gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= capacity ,enable autoscaling= false " --async PowerShell scripts The following table describes the PowerShell scripts in the template project XR Actions folder.
- Only one region may be added at a time. gcloud immersive-stream xr instances update my-instance --add-region="region= new-region ,capacity= capacity " --async Remove an existing region from an instance.

### Immersive Stream for XR overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/concept](https://docs.cloud.google.com/immersive-stream/xr/docs/concept)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Features for creators Unreal Engine development Template project with necessary structure and tools Automated workflow from Unreal Editor to a URL that launches the experience Automated builds hosted in Google Cloud Launch using a URL In-engine preview Content guidelines Quickstart guide and template Features for consumers 3D and AR modes available in Android and iOS using the Google app.
- Integrate into Google app and browsers Launch experiences wherever the Google app is installed (1B+ devices) with full support for 3D and AR modes.
- Immersive Stream for XR lets you use Unreal® Engine to interactively stream 3D and AR experiences that can render tens of millions of polygons with photorealistic materials.
- Also, creating a consistent user experience is difficult for 3D content because you rely on the client device to render code, and device capabilities can vary.

