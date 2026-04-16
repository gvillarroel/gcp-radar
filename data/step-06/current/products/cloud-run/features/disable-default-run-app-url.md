---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.498Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Disable default run.app URL"
feature_slug: "disable-default-run-app-url"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/triggering/https-request"
  - "https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run"
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
keywords:
  - "disabling"
  - "disable"
  - "default"
  - "lets"
---

# Disable default run.app URL

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Disabling the default run.app URL lets you turn off the default Cloud Run service URL.

## Extended Definition

Disabling the default run.app URL lets you turn off the default Cloud Run service URL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)

## Supporting Pages

### Invoke with an HTTPS Request \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/triggering/https-request](https://docs.cloud.google.com/run/docs/triggering/https-request)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can disable these default run.app URLs .
- The non-deterministic URL for a Cloud Run service has the format https://[ TAG ---] SERVICE IDENTIFIER .run.app , where TAG refers to the optional traffic tag for the revision that you are requesting, and SERVICE IDENTIFIER is a stable and unique identifier for a Cloud Run service.
- REGION .run.app where: TAG is the optional traffic tag for the revision that you are requesting.
- Deterministic URL The deterministic URL lets you predict the service URL before the service is created, which can be useful for service-to-service communication.

### Configure IAP for Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run](https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By enabling IAP on Cloud Run directly, you can secure traffic with a single click from all ingress paths, including default run.app URLs and load balancers.
- To retrieve the current IAM policy data, add the following to a google cloud run v2 service iam policy resource in your Terraform configuration. data "google cloud run v2 service iam policy" "policy" { project = google cloud run v2 service.default.project location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name } Manage user or group access By default, IAP for Cloud Run uses a Google-managed OAuth client that lets you add in-organization identities with an email address associated with a user.
- Add iap enabled = true to a google cloud run v2 service resource in your Terraform configuration to enable IAP on the service: resource "google cloud run v2 service" "default" { name = "cloudrun-iap-service" location = "europe-west1" ingress = "INGRESS TRAFFIC ALL" iap enabled = true template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" } } } Add the following to grant the roles/run.invoker role to the IAP service agent. resource "google cloud run v2 service iam member" "iap invoker" { project = google cloud run v2 service.default.project location = google cloud run v2 service.default.location name = google cloud run v2 service.default.name role = "roles/run.invoker" member = "serviceAccount:service-PROJECT NUMBER@gcp-sa-iap.iam.gserviceaccount.com" } Replace PROJECT NUMBER with your project number.
- To save the configuration, click Save . gcloud To disable IAP directly from Cloud Run, add the --no-iap flag when deploying your app as follows: Deploy your Cloud Run service using either of the following commands: For a new service: gcloud run deploy SERVICE NAME \ --region = REGION \ --image = IMAGE URL \ --no-iap For an existing service: gcloud run services update SERVICE NAME \ --region = REGION \ --no-iap Replace the following: SERVICE NAME : the name of your Cloud Run service.

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audience is usually the full URL of the target service, which by default for Cloud Run services is a generated URL ending in run.app .
- To create a Cloud Run service, add the following to your existing main.tf file: resource "google cloud run v2 service" "default" { name = "custom-domain" # Replace with your service name location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" # Replace with your container image } } } Replace: custom-domain with your Cloud Run service name. us-docker.pkg.dev/cloudrun/container/hello with a reference to your container image.
- Map your Cloud Run service to the custom domain: data "google project" "project" {} resource "google cloud run domain mapping" "default" { name = "verified-domain.com" location = google cloud run v2 service.default.location metadata { namespace = data.google project.project.project id } spec { route name = google cloud run v2 service.default.name } } Replace verified-domain.com with your custom verified domain, for example, example.com or subdomain.example.com .
- Using Firebase Hosting has a low price and optionally lets you host and serve static content alongside the dynamic content served by your Cloud Run service.

