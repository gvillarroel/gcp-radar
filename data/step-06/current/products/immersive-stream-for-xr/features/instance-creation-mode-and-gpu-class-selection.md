---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.998Z"
product_name: "Immersive Stream for XR"
product_slug: "immersive-stream-for-xr"
feature_name: "Instance creation mode and GPU class selection"
feature_slug: "instance-creation-mode-and-gpu-class-selection"
latest_feature_date: "2024-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling"
keywords:
  - "instance"
  - "creation"
  - "mode"
  - "and"
  - "gpu"
  - "class"
  - "selection"
  - "when"
---

# Instance creation mode and GPU class selection

Product: Immersive Stream for XR
Coverage: MEDIUM

## Step 02 Summary

When creating a new instance, you can choose the mode and GPU class.

## Extended Definition

When creating a new instance, you can choose the mode and GPU class.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing](https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling](https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling)

## Supporting Pages

### "Quickstart: Deploy Immersive Stream for XR experiences \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Optionally, set a custom fallback URL to send users to when your service instance is stocked out, there is a failed connection, or there are other issues that prevent the experience from continuing. gcloud immersive-stream xr instances create MY INSTANCE \ --content= MY CONTENT \ --version= MY-VERSION \ --add-region="region=us-central1,capacity=1" \ --add-region="region=us-west1,capacity=3 \ --mode="ar" \ --gpu-class="t4" \ --fallback-url="https://www.example.com" \ --async This is an asynchronous operation.
- Select a mode and GPU class : Select the experience mode supported by the instance.
- If not specified, the instance is created with 3D/AR mode and NVIDIA T4 GPU class.
- Optionally, set the mode and GPU class that is used by the instance.

### Supported commands \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AR mode won't be supported by this instance. gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity1 " --mode=3d --gpu-class=l4 --async Create an Instance that has autoscaling enabled.
- Description Commands Create an Instance that uses NVIDIA L4 GPUs and supports 3D-only mode.
- The values for capacity , autoscaling buffer , and autoscaling min capacity can all be updated individually or multiple/all in one command. gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= new-capacity ,enable autoscaling= true ,autoscaling buffer= new-buffer ,autoscaling min capacity= new-min-capacity " --async Disable autoscaling in a region. gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= capacity ,enable autoscaling= false " --async PowerShell scripts The following table describes the PowerShell scripts in the template project XR Actions folder.
- This releases all compute resources reserved for streaming. gcloud immersive-stream xr instances delete my-instance --async Synchronously wait for a long running operation to complete. gcloud immersive-stream xr operations wait operation-id Describe the status of a long running operation. gcloud immersive-stream xr operations describe operation-id List all operations created in the past seven days. gcloud immersive-stream xr operations list Note: The following commands are for features that are not yet publicly available.

### Locations and pricing \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing](https://docs.cloud.google.com/immersive-stream/xr/docs/locations-and-pricing)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, when you configure your instance to have a capacity of 10 in us-central1 , you start being charged at 10 times the hourly cost found in the following table, and up to 10 users can access the experience at the same time.
- L4 GPUs are only available in some regions, and they only support the 3D-only experience mode.
- Immersive Stream for XR charges by using a pay-as-you-go model based on the configured streaming capacity of your Immersive Stream for XR service instance.
- There is a 3D-only mode of experience available, and the hourly cost is half of the default price.

### "Service instance autoscaling \_|\_ Immersive Stream for XR \_|\_ Google\

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling](https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling)
- Source ID: `site-iam-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You are billed for the amount of capacity your instance has, so during periods of low traffic, the autoscaler should scale down and allow for some cost-savings when compared with a non-autoscaled service instance.
- A lifecycle state of Ready indicates that the operation is complete. gcloud immersive-stream xr instances describe INSTANCE NAME Example: The following command creates a service instance with two regions, an autoscaled region with maximum capacity of 5, minimum capacity of 3 and a buffer of 2, and a non-autoscaled region with capacity of 3: gcloud immersive-stream xr instances create my instance \ --content=my content \ --version=v1 \ --add-region="region=us-west4,capacity=5,enable autoscaling=true,autoscaling buffer=2,autoscaling min capacity=3" \ --add-region="region=us-central1,capacity=3" \ --async Add a region with autoscaling enabled Console In the Google Cloud console, go to the Service instances list page.
- Add additional regions as needed and then complete the remaining steps in the form before clicking CREATE to create your service instance. gcloud To create a service instance with autoscaled and non-autoscaled regions, use the following command: gcloud immersive-stream xr instances create INSTANCE NAME \ --content = CONTENT NAME \ --version = CONTENT VERSION \ --add-region = "region= REGION 1 ,capacity= MAXIMUM CAPACITY ,enable autoscaling=true,autoscaling buffer= BUFFER ,autoscaling min capacity= MINIMUM CAPACITY " \ --add-region = "region= REGION 2 ,capacity= CAPACITY " \ --async Replace the following: INSTANCE NAME : the name of the service instance.
- A lifecycle state of Ready indicates that the operation is complete. gcloud immersive-stream xr instances describe INSTANCE NAME Example: The following command enables autoscaling in a region with maximum capacity of 5, minimum capacity of 3 and a buffer of 2: gcloud immersive-stream xr instances update my instance \ --update-region="region=us-west4,capacity=5,enable autoscaling=true,autoscaling buffer=2,autoscaling min capacity=3" \ --async Disable autoscaling in a region Console In the Google Cloud console, go to the Service instances list page.

