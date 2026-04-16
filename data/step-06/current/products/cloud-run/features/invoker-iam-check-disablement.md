---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.455Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Invoker IAM check disablement"
feature_slug: "invoker-iam-check-disablement"
latest_feature_date: "2025-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/securing/managing-access"
  - "https://docs.cloud.google.com/run/docs/deploy-functions"
  - "https://docs.cloud.google.com/run/docs/deploying"
keywords:
  - "check"
  - "disablement"
  - "invocation"
  - "invoker"
  - "disable"
---

# Invoker IAM check disablement

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services can disable the Invoker IAM check for invocation access control behavior.

## Extended Definition

Cloud Run services can disable the Invoker IAM check for invocation access control behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- Source ID: `site-iam-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To disable or re-enable the Invoker IAM check on a service, you must have the following permissions: run.services.create run.services.update run.services.setIamPolicy These permissions are included in the Cloud Run Admin ( roles/run.admin ) role.
- If you're an administrator, you can restrict the ability to disable the Invoker IAM check by using the constraints/run.managed.requireInvokerIam managed constraint.
- Make a service public There are two ways to create a public Cloud Run service: Disable the Cloud Run Invoker IAM check (recommended).
- Disable the Cloud Run Invoker IAM check The recommended way to make a public service is to disable the Cloud Run Invoker IAM check.

### Deploy a Cloud Run function \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- Source ID: `site-docs-reference-required-4`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } Source bucket Your source code must be accessible to the build process and the Google Cloud console source editor.
- If it is not needed or to increase deployment speed, the deployment health check can be disabled: gcloud To disable the deployment health check, use the --no-deploy-health-check flag: gcloud run deploy --image IMAGE URL --no-deploy-health-check Replace the following: IMAGE URL : a reference to the container image, for example, us-docker.pkg.dev/cloudrun/container/hello:latest .
- Use --deploy-health-check to re-enable the deployment health check if it was previous disabled.
- Create a new main.tf file with this content: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { name = " SERVICE " image = " IMAGE URL " # Container image built from your function in the previous step. base image uri = " BASE IMAGE " } } build config { function target = " FUNCTION TARGET " image uri = " IMAGE URL " base image = " BASE IMAGE " enable automatic updates = true } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace: PROJECT-ID with the Google Cloud project ID.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If it is not needed or to increase deployment speed, the deployment health check can be disabled: gcloud To disable the deployment health check, use the --no-deploy-health-check flag: gcloud run deploy --image IMAGE URL --no-deploy-health-check Replace the following: IMAGE URL : a reference to the container image, for example, us-docker.pkg.dev/cloudrun/container/hello:latest .
- Use --deploy-health-check to re-enable the deployment health check if it was previous disabled.
- Add the following to a google cloud run v2 service resource in your Terraform configuration: provider "google" { project = " PROJECT-ID " } resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " client = "terraform" template { containers { image = " IMAGE URL " } } } resource "google cloud run v2 service iam member" "noauth" { location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "allUsers" } Replace the following: PROJECT-ID : the Google Cloud project ID REGION : the Google Cloud region SERVICE : the name of your Cloud Run service.

