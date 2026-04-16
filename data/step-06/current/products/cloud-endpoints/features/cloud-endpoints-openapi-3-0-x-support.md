---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:11:25.090Z"
product_name: "Cloud Endpoints"
product_slug: "cloud-endpoints"
feature_name: "Cloud Endpoints OpenAPI 3.0.x support"
feature_slug: "cloud-endpoints-openapi-3-0-x-support"
latest_feature_date: "2025-11-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config"
  - "https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints"
  - "https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints"
  - "https://docs.cloud.google.com/endpoints/docs/openapi"
keywords:
  - "endpoints"
  - "openapi"
  - "can"
  - "now"
  - "directly"
  - "deploy"
  - "specifications"
  - "without"
---

# Cloud Endpoints OpenAPI 3.0.x support

Product: Cloud Endpoints
Coverage: MEDIUM

## Step 02 Summary

Cloud Endpoints can now directly deploy OpenAPI 3.0.x specifications without requiring conversion to OpenAPI 2.0.

## Extended Definition

Cloud Endpoints can now directly deploy OpenAPI 3.0.x specifications without requiring conversion to OpenAPI 2.0.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config](https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config)
- [https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints](https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints)
- [https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints](https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints)
- [https://docs.cloud.google.com/endpoints/docs/openapi](https://docs.cloud.google.com/endpoints/docs/openapi)

## Supporting Pages

### "Deploying the Endpoints configuration \_|\_ Cloud Endpoints with OpenAPI\

- URL: [https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config](https://docs.cloud.google.com/endpoints/docs/openapi/deploy-endpoints-config)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Validate the project ID returned from the following command to make sure that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace [YOUR PROJECT ID] with the Google Cloud project ID in which you want to create the service:: gcloud config set project [ YOUR PROJECT ID ] Run the following command, and replace [YOUR OPENAPI DOCUMENT] with the name of the OpenAPI document that describes your API: gcloud endpoints services deploy [ YOUR OPENAPI DOCUMENT ] The first time that you run the previous command, Service Management creates a new Endpoints service in the default project with a name that matches the text that you specified in the host field in your OpenAPI document and uploads your service configuration.
- If you are using a custom domain name (such as, myapi.example.com ), make sure to validate the project ID returned from the following command so that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace [YOUR PROJECT ID] with the Google Cloud project ID in which you want to create the service: gcloud config set project [ YOUR PROJECT ID ] Run the following command, and replace [YOUR OPENAPI DOCUMENT] with the name of the OpenAPI document that describes your API: gcloud endpoints services deploy [ YOUR OPENAPI DOCUMENT ] --validate-only The gcloud command then calls the Service Management API to create a managed service with the name that you specified in the host field in your OpenAPI document.
- Home Documentation Application development Cloud Endpoints OpenAPI Send feedback Deploying the Endpoints configuration Stay organized with collections Save and categorize content based on your preferences.
- Redeploying Whenever you change something in your OpenAPI document, be sure to deploy it again so that Endpoints has the most recent version of your API's service configuration.

### "About Cloud Endpoints \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints](https://docs.cloud.google.com/endpoints/docs/openapi/about-cloud-endpoints)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- You can use it with: App Engine flexible environment Compute Engine Google Kubernetes Engine Kubernetes Endpoints with ESPv2 ESPv2 is an Envoy -based high-performance, scalable proxy that runs in front of an OpenAPI or gRPC API backend.
- Deploy the Endpoints configuration : After you define your API in an OpenAPI configuration file, you use the Google Cloud CLI to deploy it to Service Management, which Endpoints uses to manage your API.
- You can use it with: App Engine standard environment Compute Engine Google Kubernetes Engine Kubernetes Cloud Run Knative serving Cloud Run functions Endpoints API management features Whether you use Endpoints with ESP or ESPv2, it provides a number of significant API management features to enable you to develop, monitor, and control access to your APIs.
- What's next Get familiar with the deployment steps and see Endpoints features in action by doing the Quickstart for Endpoints , which uses scripts to deploy a sample API to a App Engine flexible backend.

### "Configuring Cloud Endpoints \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\

- URL: [https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints](https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can click on the API name to open another page that displays the API's metrics, deployment history, and other information. info.version The Endpoints > Services page in the Google Cloud console displays the version number for your API.
- With this information, you can finish preparing your OpenAPI document for deployment .
- What's next Deploying the Endpoints configuration Deploying the API backend Configuring authentication Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For additional information on versioning your API, see API lifecycle management . operationId Although the operationId is an optional field in the OpenAPI Specification, Endpoints requires this field because it is used for internal identification of the operation.

### "Cloud Endpoints for OpenAPI \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\

- URL: [https://docs.cloud.google.com/endpoints/docs/openapi](https://docs.cloud.google.com/endpoints/docs/openapi)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Endpoints supports APIs that are described using OpenAPI 2.0 and OpenAPI 3.x of the OpenAPI Specification (formerly the Swagger Specification (formerly known as the Swagger spec)—the industry standard for defining REST APIs.
- You can run the ESP container on the following: App Engine flexible environment Compute Engine Kubernetes, including Google Kubernetes Engine A Linux or macOS computer or another platform You can run the ESPv2 container on the following: App Engine Cloud Run functions Cloud Run Knative serving GKE Compute Engine Kubernetes See About Cloud Endpoints for more.
- To get started, we recommend the following path through the documentation: To see Endpoints features in action, do the Quickstart for Cloud Endpoints , which uses scripts to deploy a sample API to the App Engine flexible environment.
- Home Documentation Application development Cloud Endpoints OpenAPI Send feedback Cloud Endpoints for OpenAPI Stay organized with collections Save and categorize content based on your preferences.

