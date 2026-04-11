---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.915Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Vertex AI integration"
feature_slug: "vertex-ai-integration"
latest_feature_date: "2024-03-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "vertex"
  - "ai"
  - "integration"
  - "lets"
  - "run"
  - "services"
  - "connect"
  - "to"
---

# Vertex AI integration

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Vertex AI integration lets Cloud Run services connect to Vertex AI to access generative AI models.

## Extended Definition

Vertex AI integration lets Cloud Run services connect to Vertex AI to access generative AI models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- With this option, you configure Firebase Hosting in front of your Cloud Run service and connect a domain to Firebase Hosting.
- To create a Cloud Run service, add the following to your existing main.tf file: resource "google cloud run v2 service" "default" { name = "custom-domain" # Replace with your service name location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" # Replace with your container image } } } Replace: custom-domain with your Cloud Run service name. us-docker.pkg.dev/cloudrun/container/hello with a reference to your container image.
- Map your Cloud Run service to the custom domain: data "google project" "project" {} resource "google cloud run domain mapping" "default" { name = "verified-domain.com" location = google cloud run v2 service.default.location metadata { namespace = data.google project.project.project id } spec { route name = google cloud run v2 service.default.name } } Replace verified-domain.com with your custom verified domain, for example, example.com or subdomain.example.com .
- Retrieve the DNS record information for your domain mappings using the following: Console Go to the Cloud Run domain mappings page: Domain mappings page Click the three-dot vertical ellipse icon to the right of your service, then click DNS RECORDS to display all the DNS records: gcloud gcloud beta run domain-mappings describe --domain [ DOMAIN ] Replace [DOMAIN] with your custom domain, for example, example.com or subdomain.example.com .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- In services that use the second generation execution environment, we recommend installing a SIGTERM handler on your container to receive a warning when Cloud Run is about to shut down an instance.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- In services that use the second generation execution environment, we recommend installing a SIGTERM handler on your container to receive a warning when Cloud Run is about to shut down an instance.

