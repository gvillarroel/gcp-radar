---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.620Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Custom container port"
feature_slug: "custom-container-port"
latest_feature_date: "2020-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/configuring"
keywords:
  - "customize"
  - "receives"
  - "port"
  - "requests"
  - "custom"
  - "container"
  - "lets"
---

# Custom container port

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run lets services customize the container port that receives requests.

## Extended Definition

Cloud Run lets services customize the container port that receives requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- The ingress container within an instance must listen for requests on 0.0.0.0 on the port to which requests are sent.
- Because jobs shouldn't serve requests, the container shouldn't listen on a port or start a web server.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- The ingress container within an instance must listen for requests on 0.0.0.0 on the port to which requests are sent.
- Because jobs shouldn't serve requests, the container shouldn't listen on a port or start a web server.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings Customize your service by configuring the container, capacity, GPU, and health checks.
- Section Feature Description A Container port Specify the port you want requests to be sent to.
- If you need to change the default number of container instances that are kept warm, ready to receive requests, you can set revision-level maximum instances and minimum instances .
- Cloud Run volume mounts lets you access shared data stored in a local file system, such as a storage bucket or file server content, from your container.

