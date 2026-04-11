---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.886Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC ingress for worker pools"
feature_slug: "direct-vpc-ingress-for-worker-pools"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
keywords:
  - "direct"
  - "vpc"
  - "ingress"
  - "for"
  - "worker"
  - "pools"
  - "run"
  - "so"
---

# Direct VPC ingress for worker pools

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run worker pools support Direct VPC ingress so each worker instance can receive a private IP address on a configured network and subnet.

## Extended Definition

Cloud Run worker pools support Direct VPC ingress so each worker instance can receive a private IP address on a configured network and subnet.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a parameter in the Parameter Manager to store parameter versions for CREMA: PARAMETER ID = crema-config PARAMETER REGION = global gcloud parametermanager parameters create $PARAMETER ID --location = $PARAMETER REGION --parameter-format = YAML Navigate to the root directory of your project by running the following command: cd In your root directory, create a YAML file, my-crema-config.yaml to define the autoscaler configuration: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : adc-trigger-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerpools/worker-pool-consumer triggers : - type : gcp-pubsub metadata : subscriptionName : "crema-subscription" Target number of undelivered messages per worker instance value : "10" mode : "SubscriptionSize" authenticationRef : name : adc-trigger-auth Replace PROJECT ID with the Google Cloud project ID.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete the Pub/Sub resources: gcloud pubsub subscriptions delete $SUBSCRIPTION ID gcloud pubsub topics delete $TOPIC ID Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next For a detailed walkthrough of this tutorial, see the codelab Autoscale Cloud Run worker pools based on the Pub/Sub queue volume using CREMA .
- CMD [ "python" , "-u" , "worker.py" ] Deploy the consumer worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --source . \ --region $REGION \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --instances = 0 \ --set-env-vars PROJECT ID = $PROJECT ID ,SUBSCRIPTION ID = $SUBSCRIPTION ID Deploy the autoscaler CREMA service Once you deploy the worker pool to consume messages from Pub/Sub, configure the CREMA autoscaler to provision worker instances based on the volume of messages.
- Alternatively, run the following command to verify that the CREMA service recommends instances based on the queue depth: gcloud logging read "resource.type=cloud run revision AND resource.labels.service name= $CREMA SERVICE NAME AND textPayload:SCALER" \ --limit = 20 \ --format = "value(textPayload)" \ --freshness = 5m To view the consumer logs consuming messages, run the following command: gcloud beta run worker-pools logs tail $CONSUMER WORKER POOL NAME --region = $REGION You should see logs that follow the format, Done job-100 .

