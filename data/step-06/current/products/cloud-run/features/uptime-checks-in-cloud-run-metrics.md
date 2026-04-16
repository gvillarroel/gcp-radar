---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.504Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Uptime checks in Cloud Run metrics"
feature_slug: "uptime-checks-in-cloud-run-metrics"
latest_feature_date: "2024-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar"
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
keywords:
  - "uptime"
  - "checks"
  - "page"
  - "configure"
  - "metrics"
---

# Uptime checks in Cloud Run metrics

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Uptime checks in the Cloud Run metrics page let you configure and view uptime checks directly from the metrics interface.

## Extended Definition

Uptime checks in the Cloud Run metrics page let you configure and view uptime checks directly from the metrics interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar](https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)

## Supporting Pages

### "Write OTLP metrics by using an OpenTelemetry Collector sidecar \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar](https://docs.cloud.google.com/run/docs/tutorials/custom-metrics-opentelemetry-sidecar)
- Source ID: `site-docs-root-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RUN CGO ENABLED = 0 GOOS = linux go build - o sample - app FROM alpine : 3 RUN apk add -- no - cache ca - certificates COPY -- from = builder / app / sample - app / sample - app CMD [ "/sample-app" ] The sample also includes files under the collector subdirectory for building a custom collector: A config file for the collector. receivers : otlp : protocols : grpc : http : processors : batch : batch metrics before sending to reduce API usage send batch max size : 200 send batch size : 200 timeout : 5 s memory limiter : drop metrics if memory usage gets too high check interval : 1 s limit percentage : 65 spike limit percentage : 20 automatically detect Cloud Run resource metadata resourcedetection : detectors : [ env , gcp ] timeout : 2 s override : false resource : attributes : add instance id as a resource attribute - key : service . instance . id from attribute : faas . id action : upsert parse service name from K SERVICE Cloud Run variable - key : service . name value : $ { env : K SERVICE } action : insert exporters : googlemanagedprometheus : # Note : this is intentionally left blank extensions : health check : endpoint : 0.0.0.0 : 13133 service : extensions : [ health check ] pipelines : metrics : receivers : [ otlp ] processors : [ batch , memory limiter , resourcedetection , resource ] exporters : [ googlemanagedprometheus ] A Dockerfile that bundles the provided config into an upstream Collector image.
- Deploy your application: YAML Create a new file called service.yaml with the following: apiVersion: serving.knative.dev/v1 kind: Service metadata: name: SERVICE-NAME annotations: run.googleapis.com/launch-stage: BETA spec: template: metadata: annotations: run.googleapis.com/container-dependencies: "{app:[collector]}" spec: containers: - image: REGION -docker.pkg.dev/ PROJECT ID /run-otel/sample-metrics-app name: app ports: - containerPort: CONTAINER PORT env: - name: "OTEL EXPORTER OTLP ENDPOINT" value: "http://localhost:4317" - image: REGION -docker.pkg.dev/ PROJECT ID /run-otel/otel-collector-metrics name: collector startupProbe: httpGet: path: / port: 13133 Replace the following: CONTAINER PORT with the port your service's ingress container listens on .
- Change to the directory that contains the Cloud Run sample code: Go cd golang-samples/run/custom-metrics/ Reviewing the code The code for this tutorial consists of the following: A server that handles incoming requests and generates a metric named sidecar sample counter total . package main import ( "context" "fmt" "log" "net/http" "os" "go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc" "go.opentelemetry.io/otel/metric" sdkmetric "go.opentelemetry.io/otel/sdk/metric" "go.opentelemetry.io/otel/sdk/resource" semconv "go.opentelemetry.io/otel/semconv/v1.24.0" ) var counter metric .
- Trying it out Using the URL from the gcloud run command in Shipping the code , connect to the service to generate some sample metrics (you can run this command several times to generate more interesting data): curl -H \ "Authorization: Bearer $(gcloud auth print-identity-token)" \ SERVICE URL Replace SERVICE URL with the URL of your service.

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Deploy a Cloud Run worker pool Deploy a worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \ --instances 0 \ --region $REGION \ --memory 4G \ --cpu 4 \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" Deploy the autoscaler CREMA service Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
- Deploy the service to scale your workloads To deploy the service to scale your worker pool, run the following command with a prebuilt container image: CREMA CONFIG PARAM VERSION = projects/ $PROJECT ID /locations/ $PARAMETER REGION /parameters/ $PARAMETER ID /versions/ $PARAMETER VERSION IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0 gcloud beta run deploy $CREMA SERVICE NAME \ --image = ${ IMAGE } \ --region = ${ REGION } \ --service-account = " ${ CREMA SA NAME } " \ --no-allow-unauthenticated \ --no-cpu-throttling \ --base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \ --labels = created-by = crema \ --set-env-vars = "CREMA CONFIG= ${ CREMA CONFIG PARAM VERSION } ,OUTPUT SCALER METRICS=True" Test your autoscaling service To verify your autoscaling service is working correctly, check the Logs tab of the Cloud Run service .
- You should see the following logs in your service's logs each time metrics are refreshed: [INFO] [METRIC-PROVIDER] Starting metric collection cycle [INFO] [METRIC-PROVIDER] Successfully fetched scaled object metrics ... [INFO] [METRIC-PROVIDER] Sending scale request ... [INFO] [SCALER] Received ScaleRequest ... [INFO] [SCALER] Current instances ... [INFO] [SCALER] Recommended instances ...
- Home Documentation Application hosting Cloud Run Guides Send feedback Autoscale worker pools based on Prometheus metrics Stay organized with collections Save and categorize content based on your preferences.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- If your sidecar must use CPU outside of request processing (for example, for metrics collection), configure your billing setting to instance-based billing for your service.
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- SIDECAR IMAGE : a reference to the sidecar container image If you want to configure each container in the deploy command, supply each container's configuration after the container parameters, for example: gcloud run deploy SERVICE \ --container CONTAINER 1 NAME \ --image = ' INGRESS IMAGE ' \ --set-env-vars = KEY = VALUE \ --port = ' CONTAINER PORT ' \ --container SIDECAR CONTAINER NAME \ --image = ' SIDECAR IMAGE ' \ --set-env-vars = KEY N = VALUE N Important: When you use the --container flag, you must specify all non-container-level flags before the container-level flags, otherwise the deploy command fails with an error message to that effect.
- Console In the Google Cloud console, go to the Cloud Run Services page: Go to Cloud Run To deploy to an existing service, locate it in the services list, and click to open, then click Edit and deploy a new revision to display the revision deployment form.

