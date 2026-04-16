---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.438Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Worker pools"
feature_slug: "worker-pools"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
  - "https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool"
keywords:
  - "resource"
  - "designed"
  - "provide"
  - "type"
  - "worker"
  - "pools"
---

# Worker pools

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run worker pools provide a resource type designed for non-request workloads.

## Extended Definition

Cloud Run worker pools provide a resource type designed for non-request workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool](https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool)

## Supporting Pages

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a parameter in the Parameter Manager to store parameter versions for CREMA: PARAMETER ID = crema-config PARAMETER REGION = global gcloud parametermanager parameters create $PARAMETER ID --location = $PARAMETER REGION --parameter-format = YAML Navigate to the root directory of your project by running the following command: cd In your root directory, create a YAML file, my-crema-config.yaml to define the autoscaler configuration: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : adc-trigger-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerpools/worker-pool-consumer triggers : - type : gcp-pubsub metadata : subscriptionName : "crema-subscription" Target number of undelivered messages per worker instance value : "10" mode : "SubscriptionSize" authenticationRef : name : adc-trigger-auth Replace PROJECT ID with the Google Cloud project ID.
- Alternatively, run the following command to verify that the CREMA service recommends instances based on the queue depth: gcloud logging read "resource.type=cloud run revision AND resource.labels.service name= $CREMA SERVICE NAME AND textPayload:SCALER" \ --limit = 20 \ --format = "value(textPayload)" \ --freshness = 5m To view the consumer logs consuming messages, run the following command: gcloud beta run worker-pools logs tail $CONSUMER WORKER POOL NAME --region = $REGION You should see logs that follow the format, Done job-100 .
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete the Pub/Sub resources: gcloud pubsub subscriptions delete $SUBSCRIPTION ID gcloud pubsub topics delete $TOPIC ID Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next For a detailed walkthrough of this tutorial, see the codelab Autoscale Cloud Run worker pools based on the Pub/Sub queue volume using CREMA .
- Create a Pub/Sub topic and subscription To autoscale your worker, create a pull subscription for your consumer application using the following steps: Create a Pub/Sub topic that represents a feed of messages: gcloud pubsub topics create $TOPIC ID Create a pull subscription to consume messages from your Pub/Sub topic: gcloud pubsub subscriptions create $SUBSCRIPTION ID --topic = $TOPIC ID Create custom service accounts This tutorial requires the following two service accounts with minimum permissions required to use the provisioned resources: Consumer service account: identity for the consumer worker pool that processes messages.

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 226
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set the autoscaling threshold to 50% CPU utilization: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : google-crema-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerPools/worker-pool-consumer minReplicaCount : 1 maxReplicaCount : 20 triggers : - type : prometheus metadata : serverAddress : https://monitoring.googleapis.com/v1/projects/ PROJECT ID /location/global/prometheus threshold : "0.5" query : histogram quantile( 0.50, sum by (le) ( increase( run googleapis com:container cpu utilizations bucket{ monitored resource="cloud run worker pool", worker pool name="worker-pool-consumer", location="us-central1", project id=" PROJECT ID " }[2m] ) ) ) authenticationRef : name : google-crema-auth advanced : horizontalPodAutoscalerConfig : behavior : scaleDown : stabilizationWindowSeconds : 300 Replace PROJECT ID with the Google Cloud project ID.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next Learn more about Cloud Run worker pools .
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Deploy a Cloud Run worker pool Deploy a worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \ --instances 0 \ --region $REGION \ --memory 4G \ --cpu 4 \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" Deploy the autoscaler CREMA service Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
- Create custom service accounts This tutorial requires the following two service accounts with minimum permissions required to use the provisioned resources: Consumer service account: identity for the worker pool that runs a background workload.

### "Quickstart: Deploy a sample worker pool to Google Cloud with Cloud Run \_\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool](https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next For more information on worker pools, see: Deploy worker pools to Cloud Run Logging and viewing logs Manually scale worker pools Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy worker pool To deploy the sample worker pool container, follow these steps: In the Google Cloud console, go to Cloud Run: Go to Cloud Run Select Worker pools from the menu, and click Deploy container to display the Create worker pools form.
- To stop logging, follow one of these steps to delete the worker pool: In the Google Cloud console, go to Cloud Run: Go to Cloud Run Select Worker pools from the menu, and select the worker pool you want to delete.
- Quickstart: Deploy a sample worker pool to Cloud Run Preview — Cloud Run worker pools This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

