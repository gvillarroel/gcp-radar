---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.396Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC ingress for worker pools"
feature_slug: "direct-vpc-ingress-for-worker-pools"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
keywords:
  - "each"
  - "ingress"
  - "worker"
  - "pools"
  - "direct"
---

# Direct VPC ingress for worker pools

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run worker pools support Direct VPC ingress so each worker instance can receive a private IP address on a configured network and subnet.

## Extended Definition

Cloud Run worker pools support Direct VPC ingress so each worker instance can receive a private IP address on a configured network and subnet.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)

## Supporting Pages

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a parameter in the Parameter Manager to store parameter versions for CREMA: PARAMETER ID = crema-config PARAMETER REGION = global gcloud parametermanager parameters create $PARAMETER ID --location = $PARAMETER REGION --parameter-format = YAML Navigate to the root directory of your project by running the following command: cd In your root directory, create a YAML file, my-crema-config.yaml to define the autoscaler configuration: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : adc-trigger-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerpools/worker-pool-consumer triggers : - type : gcp-pubsub metadata : subscriptionName : "crema-subscription" Target number of undelivered messages per worker instance value : "10" mode : "SubscriptionSize" authenticationRef : name : adc-trigger-auth Replace PROJECT ID with the Google Cloud project ID.
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Grant your CREMA service account permission to view Pub/Sub messages: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.viewer" Grant your consumer service account permission to pull messages from the subscription: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.subscriber" Deploy a Cloud Run worker pool To deploy a worker pool that consumes messages from Pub/Sub subscriptions, follow these steps: Create a folder named consumer and change the directory into it: mkdir consumer cd consumer Create a file named worker.py and add the following code: import os import time from google.cloud import pubsub v1 from concurrent.futures import TimeoutError Configuration PROJECT ID = os . environ . get ( 'PROJECT ID' ) SUBSCRIPTION ID = os . environ . get ( 'SUBSCRIPTION ID' ) subscription path = f "projects/ { PROJECT ID } /subscriptions/ { SUBSCRIPTION ID } " print ( f "Worker Pool instance starting.
- Deploy the service to scale your workloads To deploy the service to scale your worker pool, run the following command with a prebuilt container image: CREMA CONFIG PARAM VERSION = projects/ $PROJECT ID /locations/ $PARAMETER REGION /parameters/ $PARAMETER ID /versions/ $PARAMETER VERSION IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0 gcloud beta run deploy $CREMA SERVICE NAME \ --image = ${ IMAGE } \ --region = ${ REGION } \ --service-account = " ${ CREMA SA NAME } " \ --no-allow-unauthenticated \ --no-cpu-throttling \ --base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \ --labels = created-by = crema \ --set-env-vars = "CREMA CONFIG= ${ CREMA CONFIG PARAM VERSION } ,OUTPUT SCALER METRICS=True" Test your autoscaling service Test your CREMA service by creating a script that generates 100 messages and pushes them to the Pub/Sub queue: In your root directory, create a file named load-pubsub.sh , and add the following code: #!/bin/bash TOPIC ID = ${ TOPIC ID } PROJECT ID = ${ PROJECT ID } NUM MESSAGES = 100 echo "Publishing $NUM MESSAGES messages to topic $TOPIC ID ..." for i in $( seq 1 $NUM MESSAGES ) ; do gcloud pubsub topics publish $TOPIC ID --message = "job- $i " --project = $PROJECT ID & if (( $i % 10 == 0 )) ; then wait echo "Published $i messages..." fi done wait echo "Done.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete the Pub/Sub resources: gcloud pubsub subscriptions delete $SUBSCRIPTION ID gcloud pubsub topics delete $TOPIC ID Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next For a detailed walkthrough of this tutorial, see the codelab Autoscale Cloud Run worker pools based on the Pub/Sub queue volume using CREMA .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

