---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.928Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Gradual rollout"
feature_slug: "gradual-rollout"
latest_feature_date: "2020-02-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run"
keywords:
  - "gradual"
  - "rollout"
  - "run"
  - "supports"
  - "traffic"
  - "rollouts"
  - "between"
  - "revisions"
---

# Gradual rollout

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports gradual traffic rollouts between revisions for deployment changes.

## Extended Definition

Cloud Run supports gradual traffic rollouts between revisions for deployment changes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)

## Supporting Pages

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Follow the instructions for gradual rollouts after you deploy.
- Follow the instructions for gradual rollouts after you deploy.
- Add the following to a google cloud run v2 service resource in your Terraform configuration: resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " ingress = "INGRESS TRAFFIC ALL" template { containers { name = " INGRESS CONTAINER NAME " ports { container port = CONTAINER PORT } image = " INGRESS IMAGE " depends on = [ " SIDECAR CONTAINER NAME " ] } containers { name = " SIDECAR CONTAINER NAME " image = " SIDECAR IMAGE " } } } The CONTAINER PORT represents the port where the ingress container listens for incoming requests.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- March 16, 2020 Feature Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry February 12, 2020 Feature Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
- February 27, 2023 Change When session affinity is enabled on a Cloud Run service that is splitting traffic between multiple revisions, requests from the same clients are now routed to the same revision .
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.
- September 01, 2022 Change Terraform samples are now available in many of the Cloud Run tutorials and guides, such as: Static outbound IP address , Pub/Sub with Cloud Run Authenticating service to service Rollbacks & Rollouts Request Timeouts and many other pages.

### What is Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Built-in traffic management To reduce the risk of deploying a new revision, Cloud Run supports performing a gradual rollout , including routing incoming traffic to the latest revision, rolling back to a previous revision, and splitting traffic to multiple revisions at the same time.
- Worker pools manage rollouts by splitting instances between revisions, instead of splitting traffic.
- Optional manual scaling By default, Cloud Run automatically scales to more instances to handle more traffic, but you can override this behavior by using manual scaling to control scaling behavior.
- Cloud Run manages TLS for you and supports WebSockets, HTTP/2 (end-to-end), and gRPC (end-to-end).

