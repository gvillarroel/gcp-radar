---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:29.999Z"
product_name: "Immersive Stream for XR"
product_slug: "immersive-stream-for-xr"
feature_name: "Service instance autoscaling"
feature_slug: "service-instance-autoscaling"
latest_feature_date: "2024-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands"
  - "https://docs.cloud.google.com/immersive-stream/xr/docs/troubleshooting"
keywords:
  - "instance"
  - "autoscaling"
  - "capacity"
  - "can"
  - "be"
  - "managed"
  - "through"
---

# Service instance autoscaling

Product: Immersive Stream for XR
Coverage: MEDIUM

## Step 02 Summary

Instance capacity can be managed through autoscaling.

## Extended Definition

Instance capacity can be managed through autoscaling.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling](https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- [https://docs.cloud.google.com/immersive-stream/xr/docs/troubleshooting](https://docs.cloud.google.com/immersive-stream/xr/docs/troubleshooting)

## Supporting Pages

### "Service instance autoscaling \_|\_ Immersive Stream for XR \_|\_ Google\

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling](https://docs.cloud.google.com/immersive-stream/xr/docs/instance-autoscaling)
- Source ID: `site-iam-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A lifecycle state of Ready indicates that the operation is complete. gcloud immersive-stream xr instances describe INSTANCE NAME Example: The following command creates a service instance with two regions, an autoscaled region with maximum capacity of 5, minimum capacity of 3 and a buffer of 2, and a non-autoscaled region with capacity of 3: gcloud immersive-stream xr instances create my instance \ --content=my content \ --version=v1 \ --add-region="region=us-west4,capacity=5,enable autoscaling=true,autoscaling buffer=2,autoscaling min capacity=3" \ --add-region="region=us-central1,capacity=3" \ --async Add a region with autoscaling enabled Console In the Google Cloud console, go to the Service instances list page.
- Add additional regions as needed and then complete the remaining steps in the form before clicking CREATE to create your service instance. gcloud To create a service instance with autoscaled and non-autoscaled regions, use the following command: gcloud immersive-stream xr instances create INSTANCE NAME \ --content = CONTENT NAME \ --version = CONTENT VERSION \ --add-region = "region= REGION 1 ,capacity= MAXIMUM CAPACITY ,enable autoscaling=true,autoscaling buffer= BUFFER ,autoscaling min capacity= MINIMUM CAPACITY " \ --add-region = "region= REGION 2 ,capacity= CAPACITY " \ --async Replace the following: INSTANCE NAME : the name of the service instance.
- A lifecycle state of Ready indicates that the operation is complete. gcloud immersive-stream xr instances describe INSTANCE NAME Example: The following command enables autoscaling in a region with maximum capacity of 5, minimum capacity of 3 and a buffer of 2: gcloud immersive-stream xr instances update my instance \ --update-region="region=us-west4,capacity=5,enable autoscaling=true,autoscaling buffer=2,autoscaling min capacity=3" \ --async Disable autoscaling in a region Console In the Google Cloud console, go to the Service instances list page.
- A lifecycle state of Ready indicates that the operation is complete. gcloud immersive-stream xr instances describe INSTANCE NAME Example: The following command adds a region with maximum capacity of 5, minimum capacity of 3 and a buffer of 2: gcloud immersive-stream xr instances update my instance \ --add-region="region=us-west4,capacity=5,enable autoscaling=true,autoscaling buffer=2,autoscaling min capacity=3" \ --async Enable autoscaling in a region Console In the Google Cloud console, go to the Service instances list page.

### "Quickstart: Deploy Immersive Stream for XR experiences \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart](https://docs.cloud.google.com/immersive-stream/xr/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This may take up to 10 minutes, and you can monitor the progress through the notification bell in the top right corner of the Google Cloud console. gcloud gcloud immersive-stream xr instances update MY INSTANCE \ --version= MY-VERSION \ --async Change the capacity of an existing region Estimated time: 15 minutes You can change the capacity of your instances one region at a time.
- This may take up to one hour, and you can monitor the progress through the notification bell in the top right corner of the Google Cloud console. gcloud gcloud immersive-stream xr instances update MY INSTANCE \ --add-region="region= NEW REGION ,capacity= CAPACITY " \ --async Remove an existing region Estimated time: one hour You can remove regions from your service instances.
- This may take up to 15 minutes, and you can monitor the progress through the notification bell in the top right corner of the Google Cloud console. gcloud gcloud immersive-stream xr instances update MY INSTANCE \ --update-region="region= REGION ,capacity= NEW CAPACITY " \ --async Add a new region Estimated time: one hour You can add new regions to your service instances.
- Monitor service instances Immersive Stream for XR provides a number of metrics out of box that you can use to evaluate the current state of the service instances: Metric Description stream.googleapis.com/stream instance/capacity A GAUGE metric representing the capacity per service instance stream.googleapis.com/stream instance/hits count A DELTA metric representing the number of hits observed by service instance stream.googleapis.com/stream instance/session lengths A DISTRIBUTION metric representing the various session lengths observed by the service instance Additionally, Immersive Stream for XR generates a dashboard when you add a service instance to the project.

### Supported commands \_|\_ Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands](https://docs.cloud.google.com/immersive-stream/xr/docs/supported-commands)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The values for capacity , autoscaling buffer , and autoscaling min capacity can all be updated individually or multiple/all in one command. gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= new-capacity ,enable autoscaling= true ,autoscaling buffer= new-buffer ,autoscaling min capacity= new-min-capacity " --async Disable autoscaling in a region. gcloud immersive-stream xr instances update my-instance --update-region="region= existing-region ,capacity= capacity ,enable autoscaling= false " --async PowerShell scripts The following table describes the PowerShell scripts in the template project XR Actions folder.
- These three parameters must be configured such that the autoscaling buffer is less than or equal to the autoscaling min capacity and both are less than the capacity (maximum), all three must be greater than zero. gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity ,enable autoscaling= true ,autoscaling buffer= buffer ,autoscaling min capacity= min-capacity " --async Update autoscaling config in a region.
- AR mode won't be supported by this instance. gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity1 " --mode=3d --gpu-class=l4 --async Create an Instance that has autoscaling enabled.
- This enables streaming of the content with the specific Content version. gcloud immersive-stream xr instances create my-instance --content= my-content --version= my-version-tag --add-region="region= region1 ,capacity= capacity1 " --add-region="region= region2 ,capacity= capacity2 " --fallback-url=" https://www.example.com " --async Describe a specific Instance. gcloud immersive-stream xr instances describe my-instance List all Instances created. gcloud immersive-stream xr instances list Update an Instance with a specific Content version.

### Troubleshoot Immersive Stream for XR \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/immersive-stream/xr/docs/troubleshooting](https://docs.cloud.google.com/immersive-stream/xr/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connection failures Google Kubernetes Engine regional outage If your service instance's available capacity drops below its configured capacity, your users might experience more frequent connection errors.
- Invalid resource state for INSTANCE NAME : there exists a serving instance INSTANCE NAME for content CONTENT NAME A content resource that is being actively served by an instance cannot be deleted.
- This issue occurs when there is a Google Kubernetes Engine (GKE) regional outage within Google Cloud which can impact the service instance availability for Immersive Stream for XR experiences.
- If the instance appears to have been deleted but you still can't still delete the content resource, open a support ticket to get help deleting the content.

