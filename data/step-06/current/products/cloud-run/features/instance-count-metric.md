---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.922Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Instance count metric"
feature_slug: "instance-count-metric"
latest_feature_date: "2021-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
  - "https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar"
keywords:
  - "instance"
  - "count"
  - "metric"
  - "run"
  - "provides"
  - "monitoring"
  - "that"
  - "counts"
---

# Instance count metric

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run provides a Cloud Monitoring metric that counts container instances by state, such as active or idle.

## Extended Definition

Cloud Run provides a Cloud Monitoring metric that counts container instances by state, such as active or idle.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar](https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- March 05, 2021 Feature You can now use VPC Service Controls with Cloud Run to set up a secure perimeter to guard against data exfiltration. (Available in public preview.) March 03, 2021 Feature Cloud Run reports a new Cloud Monitoring metric: Instance count , which counts the number of container instances that exist, broken down by state (active or idle).
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.
- March 28, 2022 Feature Cloud Run reports a new Cloud Monitoring metric: Container Startup Latency, measuring the startup time of container instances.
- Feature Compute flexible committed use discounts (CUDs) have expanded to also cover your Cloud Billing account's spend across Cloud Run services with request-based billing and Cloud Run functions.

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Deploy a Cloud Run worker pool Deploy a worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \ --instances 0 \ --region $REGION \ --memory 4G \ --cpu 4 \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" Deploy the autoscaler CREMA service Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
- Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Parameter Manager Admin ( roles/parametermanager.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create custom service accounts This tutorial requires the following two service accounts with minimum permissions required to use the provisioned resources: Consumer service account: identity for the worker pool that runs a background workload.
- Set the autoscaling threshold to 50% CPU utilization: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : google-crema-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerPools/worker-pool-consumer minReplicaCount : 1 maxReplicaCount : 20 triggers : - type : prometheus metadata : serverAddress : https://monitoring.googleapis.com/v1/projects/ PROJECT ID /location/global/prometheus threshold : "0.5" query : histogram quantile( 0.50, sum by (le) ( increase( run googleapis com:container cpu utilizations bucket{ monitored resource="cloud run worker pool", worker pool name="worker-pool-consumer", location="us-central1", project id=" PROJECT ID " }[2m] ) ) ) authenticationRef : name : google-crema-auth advanced : horizontalPodAutoscalerConfig : behavior : scaleDown : stabilizationWindowSeconds : 300 Replace PROJECT ID with the Google Cloud project ID.

### "Write OTLP metrics by using an OpenTelemetry Collector sidecar \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar](https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update Google Cloud CLI: gcloud components update Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Monitoring Metric Writer ( roles/monitoring.metricWriter ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- RUN CGO ENABLED = 0 GOOS = linux go build - o sample - app FROM alpine : 3 RUN apk add -- no - cache ca - certificates COPY -- from = builder / app / sample - app / sample - app CMD [ "/sample-app" ] The sample also includes files under the collector subdirectory for building a custom collector: A config file for the collector. receivers : otlp : protocols : grpc : http : processors : batch : batch metrics before sending to reduce API usage send batch max size : 200 send batch size : 200 timeout : 5 s memory limiter : drop metrics if memory usage gets too high check interval : 1 s limit percentage : 65 spike limit percentage : 20 automatically detect Cloud Run resource metadata resourcedetection : detectors : [ env , gcp ] timeout : 2 s override : false resource : attributes : add instance id as a resource attribute - key : service . instance . id from attribute : faas . id action : upsert parse service name from K SERVICE Cloud Run variable - key : service . name value : $ { env : K SERVICE } action : insert exporters : googlemanagedprometheus : # Note : this is intentionally left blank extensions : health check : endpoint : 0.0.0.0 : 13133 service : extensions : [ health check ] pipelines : metrics : receivers : [ otlp ] processors : [ batch , memory limiter , resourcedetection , resource ] exporters : [ googlemanagedprometheus ] A Dockerfile that bundles the provided config into an upstream Collector image.
- Change to the directory that contains the Cloud Run sample code: Go cd golang-samples/run/custom-metrics/ Reviewing the code The code for this tutorial consists of the following: A server that handles incoming requests and generates a metric named sidecar sample counter total . package main import ( "context" "fmt" "log" "net/http" "os" "go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc" "go.opentelemetry.io/otel/metric" sdkmetric "go.opentelemetry.io/otel/sdk/metric" "go.opentelemetry.io/otel/sdk/resource" semconv "go.opentelemetry.io/otel/semconv/v1.24.0" ) var counter metric .
- For example, the query below will filter metrics based on the Cloud Run instance ID: sidecar sample counter total{instance=" INSTANCE ID "} Replace INSTANCE ID with the ID of any instance for your service (available in the instance logs or from the metadata server ).

