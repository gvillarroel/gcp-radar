---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.594Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Ingress restriction"
feature_slug: "ingress-restriction"
latest_feature_date: "2020-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/deploying"
keywords:
  - "restriction"
  - "restrict"
  - "inbound"
  - "which"
  - "ingress"
  - "traffic"
---

# Ingress restriction

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services can restrict which inbound traffic is allowed to reach them.

## Extended Definition

Cloud Run services can restrict which inbound traffic is allowed to reach them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Process and system call restrictions Basic security profiles, similar to seccomp security profiles for Docker , are applied around each of your containers.
- The ingress container within an instance must listen for requests on 0.0.0.0 on the port to which requests are sent.
- Container security restrictions The following restrictions apply to containers that run in Cloud Run.
- Note that there's no restriction on the character encoding you use within a file.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Process and system call restrictions Basic security profiles, similar to seccomp security profiles for Docker , are applied around each of your containers.
- The ingress container within an instance must listen for requests on 0.0.0.0 on the port to which requests are sent.
- Container security restrictions The following restrictions apply to containers that run in Cloud Run.
- Note that there's no restriction on the character encoding you use within a file.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Add the following to a google cloud run v2 service resource in your Terraform configuration: resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " ingress = "INGRESS TRAFFIC ALL" template { containers { name = " INGRESS CONTAINER NAME " ports { container port = CONTAINER PORT } image = " INGRESS IMAGE " depends on = [ " SIDECAR CONTAINER NAME " ] } containers { name = " SIDECAR CONTAINER NAME " image = " SIDECAR IMAGE " } } } The CONTAINER PORT represents the port where the ingress container listens for incoming requests.
- Before you start If you are under a domain restriction organization policy restricting unauthenticated invocations for your project, you will need to access your deployed service as described under Testing private services .
- In a service with multiple containers, only one container can be configured as the ingress container that handles all incoming requests, and this must be the container for which a containerPort is configured.
- YAML To disable the deployment health check, add the run.googleapis.com/health-check-disabled annotation with value 'true' to spec.template.metadata.annotations . apiVersion : serving.knative.dev/v1 kind : Service metadata : name : SERVICE spec : template : metadata : annotations : run.googleapis.com/health-check-disabled : 'true' Terraform To disable the deployment health check, set the health check disabled argument to true in the template block. resource "google cloud run v2 service" "default" { name = "SERVICE" ... template { health check disabled = true ... } } What's next After you deploy a new service, you can do the following: Gradual rollouts, rollback revisions, traffic migration View service logs Monitor service performances Set memory limits Set environment variables Change service concurrency Manage the service Manage service revisions Cloud Run OpenTelemetry sidecar example Deploy only trusted images with Binary Authorization ( Preview ) You can automate the builds and deployments of your Cloud Run services using Cloud Build Triggers: Set up Continuous Deployment You can also use Cloud Deploy to set up a continuous-delivery pipeline to deploy Cloud Run services to multiple environments: Deploy an app to Cloud Run using Cloud Deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

