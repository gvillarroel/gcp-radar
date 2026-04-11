---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.915Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Deployment events in metrics dashboard"
feature_slug: "deployment-events-in-metrics-dashboard"
latest_feature_date: "2024-03-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "deployment"
  - "events"
  - "in"
  - "metrics"
  - "dashboard"
  - "the"
  - "let"
  - "run"
---

# Deployment events in metrics dashboard

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Deployment events in the metrics dashboard let Cloud Run service charts display deployment events.

## Extended Definition

Deployment events in the metrics dashboard let Cloud Run service charts display deployment events.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The container image is imported by Cloud Run when deployed, so after the deployment, you can delete the image from Artifact Registry .
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- This restricts some network capabilities and prevents your root containers from running as "true root." Limited file system mounts from inside containers The supported path for mounting file systems in Cloud Run is through the fully managed volume mounts feature in your Cloud Run container configuration .
- Container running in a job execution must exit upon completion For Cloud Run jobs, the container must exit with exit code 0 when the job has successfully completed, and exit with a non-zero exit code when the job has failed.
- Service scaling By default, a Cloud Run service is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- This restricts some network capabilities and prevents your root containers from running as "true root." Limited file system mounts from inside containers The supported path for mounting file systems in Cloud Run is through the fully managed volume mounts feature in your Cloud Run container configuration .
- Container running in a job execution must exit upon completion For Cloud Run jobs, the container must exit with exit code 0 when the job has successfully completed, and exit with a non-zero exit code when the job has failed.
- Service scaling By default, a Cloud Run service is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

