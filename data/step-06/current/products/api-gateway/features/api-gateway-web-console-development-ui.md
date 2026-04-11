---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:04:48.143Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "API Gateway web console development UI"
feature_slug: "api-gateway-web-console-development-ui"
latest_feature_date: "2020-04-01"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console"
  - "https://docs.cloud.google.com/api-gateway/docs/deploying-api"
  - "https://docs.cloud.google.com/api-gateway/docs/about-dev-env"
keywords:
  - "Cloud Console development page"
  - "console development interface"
  - "API Gateway console workflow"
  - "API Gateway web UI"
  - "API development UI"
  - "web UI"
  - "Google Cloud Console"
  - "Develop APIs"
---

# API Gateway web console development UI

Product: API Gateway
Coverage: HIGH

## Step 02 Summary

Google Cloud Console gained a web UI for developing APIs on API Gateway.

## Extended Definition

API Gateway provides a Google Cloud Console web interface as a dedicated way to interact with the API Gateway development environment, enabling users to build, deploy, and manage API resources through a graphical UI. In this console workflow, users can create and deploy API configurations, deploy or update gateways, and view API activity from the API Gateway page without relying only on CLI commands.

## Evidence Summary

These pages describe a console-based API Gateway development path, explicitly referencing the Google Cloud Console as a web UI for API creation/deployment, gateway updates, and API activity monitoring.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console)
- [https://docs.cloud.google.com/api-gateway/docs/deploying-api](https://docs.cloud.google.com/api-gateway/docs/deploying-api)
- [https://docs.cloud.google.com/api-gateway/docs/about-dev-env](https://docs.cloud.google.com/api-gateway/docs/about-dev-env)

## Supporting Pages

### "Quickstart: Secure traffic to a service with the Google Cloud console \_\

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-console)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is a Google Cloud Console quickstart for deploying and configuring API Gateway, showing that API creation and backend wiring can be done through the web console.

Evidence snippets:
- Create and deploy a new API config To create and deploy a new API config that secures API access using API keys: Enable your service: In the Google Cloud console, go to APIs & Services > Library .
- Quickstart: Secure traffic to a service with the Google Cloud console This page shows you how to deploy an API on API Gateway to secure traffic to a backend service.
- Follow the steps to deploy a new API to access a backend service on Cloud Run functions using the Google Cloud console.
- Track API activity View the activity graphs for your API on the API Gateway page in the Google Cloud console.

### Deploy an API to a gateway \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/deploying-api](https://docs.cloud.google.com/api-gateway/docs/deploying-api)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: It provides explicit Google Cloud Console steps and UI navigation for creating and deploying a gateway, which directly documents the web console-based workflow.

Evidence snippets:
- Go to Gateways Google Cloud CLI To list gateways for a specific project: gcloud api-gateway gateways list This command returns output in the form: GATEWAY ID LOCATION DISPLAY NAME STATE CREATE TIME UPDATE TIME my-gateway us-central1 my-gateway ACTIVE 2021-01-07T00:04:19 2022-05-21T00:33:46 To list gateways for a specific project and region: gcloud api-gateway gateways list --location= GCP REGION Use a filter expression to list the gateways associated with a specific API: gcloud api-gateway gateways list \ --filter="apiConfig:projects/ PROJECT ID /locations/global/apis/ API ID / " \ Or use this filter to list gateways for a specific API config: gcloud api-gateway gateways list \ --filter="apiConfig:projects/ PROJECT ID /locations/global/apis/ API ID /configs/ CONFIG ID " \ --project= PROJECT ID Use the region, and gateway IDs to obtain detailed information about the gateway, including the identity of the API config deployed to the gateway: gcloud api-gateway gateways describe GATEWAY ID \ --location= GCP REGION Update a gateway Update a gateway to: Deploy a different API config to the gateway Update the display name Update the labels Google Cloud console Refer the following steps to update the API Gateway details: In the Google Cloud console, go to the API Gateway page.
- For example: https:// my-gateway - a12bcd345e67f89g0h . uc .gateway.dev Deploy an API to a gateway To deploy an API to a gateway: Google Cloud console In the Google Cloud console, go to the API Gateway page.
- Note : When using the Google Cloud console, this step is completed when deploying the API, as described below.
- Google Cloud console In the Google Cloud console, go to the API Gateway > Gateways page.

### About the API Gateway development environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/about-dev-env](https://docs.cloud.google.com/api-gateway/docs/about-dev-env)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- About the API Gateway development environment API Gateway gives you three basic ways to interact with the services and resources necessary to build APIs: Google Cloud console Command-line interface ( gcloud ) Client libraries Google Cloud console The Google Cloud console provides a web-based, graphical user interface that you can use to manage your Google Cloud console(Google Cloud) projects and resources.
- When you use the Google Cloud console, you create a new project, or choose an existing project, and use the resources that you create in the context of that project.
- Built-in authorization for access to Google Cloud Console projects and resources.
- You can access Cloud Shell from the Google Cloud console .

