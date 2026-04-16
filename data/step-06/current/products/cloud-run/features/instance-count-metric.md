---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.529Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Instance count metric"
feature_slug: "instance-count-metric"
latest_feature_date: "2021-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
  - "https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub"
keywords:
  - "monitoring"
  - "metric"
  - "count"
  - "counts"
  - "provides"
  - "instance"
  - "container"
---

# Instance count metric

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run provides a Cloud Monitoring metric that counts container instances by state, such as active or idle.

## Extended Definition

Cloud Run provides a Cloud Monitoring metric that counts container instances by state, such as active or idle.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar](https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)

## Supporting Pages

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Deploy a Cloud Run worker pool Deploy a worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \ --instances 0 \ --region $REGION \ --memory 4G \ --cpu 4 \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" Deploy the autoscaler CREMA service Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
- Set the autoscaling threshold to 50% CPU utilization: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : google-crema-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerPools/worker-pool-consumer minReplicaCount : 1 maxReplicaCount : 20 triggers : - type : prometheus metadata : serverAddress : https://monitoring.googleapis.com/v1/projects/ PROJECT ID /location/global/prometheus threshold : "0.5" query : histogram quantile( 0.50, sum by (le) ( increase( run googleapis com:container cpu utilizations bucket{ monitored resource="cloud run worker pool", worker pool name="worker-pool-consumer", location="us-central1", project id=" PROJECT ID " }[2m] ) ) ) authenticationRef : name : google-crema-auth advanced : horizontalPodAutoscalerConfig : behavior : scaleDown : stabilizationWindowSeconds : 300 Replace PROJECT ID with the Google Cloud project ID.
- Deploy the service to scale your workloads To deploy the service to scale your worker pool, run the following command with a prebuilt container image: CREMA CONFIG PARAM VERSION = projects/ $PROJECT ID /locations/ $PARAMETER REGION /parameters/ $PARAMETER ID /versions/ $PARAMETER VERSION IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0 gcloud beta run deploy $CREMA SERVICE NAME \ --image = ${ IMAGE } \ --region = ${ REGION } \ --service-account = " ${ CREMA SA NAME } " \ --no-allow-unauthenticated \ --no-cpu-throttling \ --base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \ --labels = created-by = crema \ --set-env-vars = "CREMA CONFIG= ${ CREMA CONFIG PARAM VERSION } ,OUTPUT SCALER METRICS=True" Test your autoscaling service To verify your autoscaling service is working correctly, check the Logs tab of the Cloud Run service .
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next Learn more about Cloud Run worker pools .

### "Write OTLP metrics by using an OpenTelemetry Collector sidecar \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar](https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar)
- Source ID: `site-docs-root-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update Google Cloud CLI: gcloud components update Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, the query below will filter metrics based on the Cloud Run instance ID: sidecar sample counter total{instance=" INSTANCE ID "} Replace INSTANCE ID with the ID of any instance for your service (available in the instance logs or from the metadata server ).
- Next, navigate to the Metrics Explorer within the Cloud Monitoring section of the Google Cloud console and select the sidecar sample counter total metric.
- RUN CGO ENABLED = 0 GOOS = linux go build - o sample - app FROM alpine : 3 RUN apk add -- no - cache ca - certificates COPY -- from = builder / app / sample - app / sample - app CMD [ "/sample-app" ] The sample also includes files under the collector subdirectory for building a custom collector: A config file for the collector. receivers : otlp : protocols : grpc : http : processors : batch : batch metrics before sending to reduce API usage send batch max size : 200 send batch size : 200 timeout : 5 s memory limiter : drop metrics if memory usage gets too high check interval : 1 s limit percentage : 65 spike limit percentage : 20 automatically detect Cloud Run resource metadata resourcedetection : detectors : [ env , gcp ] timeout : 2 s override : false resource : attributes : add instance id as a resource attribute - key : service . instance . id from attribute : faas . id action : upsert parse service name from K SERVICE Cloud Run variable - key : service . name value : $ { env : K SERVICE } action : insert exporters : googlemanagedprometheus : # Note : this is intentionally left blank extensions : health check : endpoint : 0.0.0.0 : 13133 service : extensions : [ health check ] pipelines : metrics : receivers : [ otlp ] processors : [ batch , memory limiter , resourcedetection , resource ] exporters : [ googlemanagedprometheus ] A Dockerfile that bundles the provided config into an upstream Collector image.

### "Autoscale worker pools based on the Pub/Sub queue volume \_|\_ Cloud Run\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Grant your CREMA service account permission to view Pub/Sub messages: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.viewer" Grant your consumer service account permission to pull messages from the subscription: gcloud pubsub subscriptions add-iam-policy-binding $SUBSCRIPTION ID \ --member = "serviceAccount: $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/pubsub.subscriber" Deploy a Cloud Run worker pool To deploy a worker pool that consumes messages from Pub/Sub subscriptions, follow these steps: Create a folder named consumer and change the directory into it: mkdir consumer cd consumer Create a file named worker.py and add the following code: import os import time from google.cloud import pubsub v1 from concurrent.futures import TimeoutError Configuration PROJECT ID = os . environ . get ( 'PROJECT ID' ) SUBSCRIPTION ID = os . environ . get ( 'SUBSCRIPTION ID' ) subscription path = f "projects/ { PROJECT ID } /subscriptions/ { SUBSCRIPTION ID } " print ( f "Worker Pool instance starting.
- Deploy the service to scale your workloads To deploy the service to scale your worker pool, run the following command with a prebuilt container image: CREMA CONFIG PARAM VERSION = projects/ $PROJECT ID /locations/ $PARAMETER REGION /parameters/ $PARAMETER ID /versions/ $PARAMETER VERSION IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0 gcloud beta run deploy $CREMA SERVICE NAME \ --image = ${ IMAGE } \ --region = ${ REGION } \ --service-account = " ${ CREMA SA NAME } " \ --no-allow-unauthenticated \ --no-cpu-throttling \ --base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \ --labels = created-by = crema \ --set-env-vars = "CREMA CONFIG= ${ CREMA CONFIG PARAM VERSION } ,OUTPUT SCALER METRICS=True" Test your autoscaling service Test your CREMA service by creating a script that generates 100 messages and pushes them to the Pub/Sub queue: In your root directory, create a file named load-pubsub.sh , and add the following code: #!/bin/bash TOPIC ID = ${ TOPIC ID } PROJECT ID = ${ PROJECT ID } NUM MESSAGES = 100 echo "Publishing $NUM MESSAGES messages to topic $TOPIC ID ..." for i in $( seq 1 $NUM MESSAGES ) ; do gcloud pubsub topics publish $TOPIC ID --message = "job- $i " --project = $PROJECT ID & if (( $i % 10 == 0 )) ; then wait echo "Published $i messages..." fi done wait echo "Done.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete the Pub/Sub resources: gcloud pubsub subscriptions delete $SUBSCRIPTION ID gcloud pubsub topics delete $TOPIC ID Delete other Google Cloud resources created in this tutorial: Delete the Cloud Run worker pool Delete the worker pool container image from Artifact Registry Delete the CREMA service Delete the service accounts Delete the parameters in Parameter Manager What's next For a detailed walkthrough of this tutorial, see the codelab Autoscale Cloud Run worker pools based on the Pub/Sub queue volume using CREMA .
- Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Pub/Sub Admin ( roles/pubsub.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Parameter Manager Admin ( roles/parametermanager.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

