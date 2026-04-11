---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.905Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Functions deployment in Cloud Run"
feature_slug: "functions-deployment-in-cloud-run"
latest_feature_date: "2025-02-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "functions"
  - "deployment"
  - "in"
  - "run"
  - "supports"
  - "deploying"
  - "as"
  - "workloads"
---

# Functions deployment in Cloud Run

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports deploying functions as Cloud Run workloads.

## Extended Definition

Cloud Run supports deploying functions as Cloud Run workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.
- November 19, 2025 Feature You can deploy source artifacts directly to Cloud Run , bypassing the Cloud Build step. (Preview) November 17, 2025 Feature Cloud Run and Cloud Run functions source deployments support pyproject.toml file for managing dependencies.
- February 17, 2026 Feature Cloud Run source deployment supports Ubuntu 24 LTS base images in General Availability .

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.
- Verify that root containers are compatible with user namespaces Test your changes locally or in a VM by evaluating your code when running under user namespaces, such as when using Docker's userns-remap feature, running your container in rootless Podman , or deploying those changes to VMs running the Container-Optimized OS from Google with the --userns-remap=default argument in the docker run command.
- If it is not needed or to increase deployment speed, the deployment health check can be disabled: gcloud To disable the deployment health check, use the --no-deploy-health-check flag: gcloud run deploy --image IMAGE URL --no-deploy-health-check Replace the following: IMAGE URL : a reference to the container image, for example, us-docker.pkg.dev/cloudrun/container/hello:latest .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- If a workload-processing instance must be shut down, Cloud Run gives tasks in-process tasks time to complete and routes new workloads to other instances.
- 8080 K SERVICE The name of the Cloud Run service being run. hello-world K REVISION The name of the Cloud Run revision being run. hello-world.1 K CONFIGURATION The name of the Cloud Run configuration that created the revision. hello-world Environment variables for jobs For Cloud Run jobs, the following environment variables are set: Name Description Example CLOUD RUN JOB The name of the Cloud Run job being run. hello-world CLOUD RUN EXECUTION The name of the Cloud Run execution being run. hello-world-abc CLOUD RUN TASK INDEX The index of this task.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.

