---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.894Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "GPU support for worker pools"
feature_slug: "gpu-support-for-worker-pools"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "gpu"
  - "for"
  - "worker"
  - "pools"
  - "run"
  - "configuration"
---

# GPU support for worker pools

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run worker pools support GPU configuration.

## Extended Definition

Cloud Run worker pools support GPU configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Deploy a Cloud Run worker pool Deploy a worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \ --instances 0 \ --region $REGION \ --memory 4G \ --cpu 4 \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" Deploy the autoscaler CREMA service Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next Learn more about Cloud Run worker pools .
- Set the autoscaling threshold to 50% CPU utilization: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : google-crema-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerPools/worker-pool-consumer minReplicaCount : 1 maxReplicaCount : 20 triggers : - type : prometheus metadata : serverAddress : https://monitoring.googleapis.com/v1/projects/ PROJECT ID /location/global/prometheus threshold : "0.5" query : histogram quantile( 0.50, sum by (le) ( increase( run googleapis com:container cpu utilizations bucket{ monitored resource="cloud run worker pool", worker pool name="worker-pool-consumer", location="us-central1", project id=" PROJECT ID " }[2m] ) ) ) authenticationRef : name : google-crema-auth advanced : horizontalPodAutoscalerConfig : behavior : scaleDown : stabilizationWindowSeconds : 300 Replace PROJECT ID with the Google Cloud project ID.
- Update components: gcloud components update Set the following configuration variables for CREMA used in this tutorial: export PROJECT ID = PROJECT ID export REGION = us-central1 export CREMA SA NAME = crema-service-account export CONSUMER SA NAME = consumer-service-account export CONSUMER WORKER POOL NAME = worker-pool-consumer export CREMA SERVICE NAME = my-crema-service Replace PROJECT ID with the ID of your Google Cloud project.

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a parameter in the Parameter Manager to store parameter versions for CREMA: PARAMETER ID = crema-config PARAMETER REGION = global gcloud parametermanager parameters create $PARAMETER ID --location = $PARAMETER REGION --parameter-format = YAML Navigate to the root directory of your project by running the following command: cd In your root directory, create a YAML file, my-crema-config.yaml to define the autoscaler configuration: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : adc-trigger-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerpools/worker-pool-consumer triggers : - type : gcp-pubsub metadata : subscriptionName : "crema-subscription" Target number of undelivered messages per worker instance value : "10" mode : "SubscriptionSize" authenticationRef : name : adc-trigger-auth Replace PROJECT ID with the Google Cloud project ID.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete the Pub/Sub resources: gcloud pubsub subscriptions delete $SUBSCRIPTION ID gcloud pubsub topics delete $TOPIC ID Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next For a detailed walkthrough of this tutorial, see the codelab Autoscale Cloud Run worker pools based on the Pub/Sub queue volume using CREMA .
- For improved debugging, run the following command to generate an error when you make references to unset local environment variables: set -u Set the following configuration variables for CREMA used in this tutorial: export PROJECT ID = PROJECT ID export REGION = us-central1 export TOPIC ID = crema-pubsub-topic export SUBSCRIPTION ID = crema-subscription export CREMA SA NAME = crema-service-account export CONSUMER SA NAME = consumer-service-account export CONSUMER WORKER POOL NAME = worker-pool-consumer export CREMA SERVICE NAME = my-crema-service Replace PROJECT ID with the ID of your Google Cloud project.
- CMD [ "python" , "-u" , "worker.py" ] Deploy the consumer worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --source . \ --region $REGION \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --instances = 0 \ --set-env-vars PROJECT ID = $PROJECT ID ,SUBSCRIPTION ID = $SUBSCRIPTION ID Deploy the autoscaler CREMA service Once you deploy the worker pool to consume messages from Pub/Sub, configure the CREMA autoscaler to provision worker instances based on the volume of messages.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Startup Cloud Run worker pools instances start the container with the entrypoint you specify in the container image or in the worker pool configuration.
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.

