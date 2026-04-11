---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.883Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Ubuntu 24 LTS base images for source deployment"
feature_slug: "ubuntu-24-lts-base-images-for-source-deployment"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
keywords:
  - "ubuntu"
  - "24"
  - "lts"
  - "base"
  - "images"
  - "for"
  - "source"
  - "deployment"
---

# Ubuntu 24 LTS base images for source deployment

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run source deployments support Ubuntu 24 LTS base images; Cloud Run source deployments support Ubuntu 24 LTS base images.

## Extended Definition

Cloud Run source deployments support Ubuntu 24 LTS base images; Cloud Run source deployments support Ubuntu 24 LTS base images.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- February 17, 2026 Feature Cloud Run source deployment supports Ubuntu 24 LTS base images in General Availability .
- Feature Cloud Run source deployment supports Ubuntu 24 LTS base images (Preview).
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.
- For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments based on the web server or framework configuration in your requirements.txt file.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you want to automate for continuous deployment, select Continuously deploy new revisions from a source repository and follow the instructions for continuous deployments .
- Add the following to a google cloud run v2 service resource in your Terraform configuration: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { image = " IMAGE URL " } } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace the following: PROJECT-ID : the Google Cloud project ID REGION : the Google Cloud region SERVICE : the name of your Cloud Run service.
- Add the following to a google cloud run v2 service resource in your Terraform configuration: resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " ingress = "INGRESS TRAFFIC ALL" template { containers { name = " INGRESS CONTAINER NAME " ports { container port = CONTAINER PORT } image = " INGRESS IMAGE " depends on = [ " SIDECAR CONTAINER NAME " ] } containers { name = " SIDECAR CONTAINER NAME " image = " SIDECAR IMAGE " } } } The CONTAINER PORT represents the port where the ingress container listens for incoming requests.

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Create a new main.tf file with this content: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { name = " SERVICE " image = " IMAGE URL " # Container image built from your function in the previous step. base image uri = " BASE IMAGE " } } build config { function target = " FUNCTION TARGET " image uri = " IMAGE URL " base image = " BASE IMAGE " enable automatic updates = true } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace: PROJECT-ID with the Google Cloud project ID.
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } Source bucket Your source code must be accessible to the build process and the Google Cloud console source editor.
- IMAGE URL with a reference to the container image containing only your built function BASE IMAGE with the base image environment for your function, like nodejs24 , python314 , go126 , java25 , dotnet10 , ruby40 , or php84 .
- Cloud Run function deployments automatically use Google Cloud's buildpacks and Cloud Build to build container images from your function's source code.

