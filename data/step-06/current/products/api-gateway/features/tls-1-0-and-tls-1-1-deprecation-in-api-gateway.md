---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.460Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "TLS 1.0 and TLS 1.1 deprecation in API Gateway"
feature_slug: "tls-1-0-and-tls-1-1-deprecation-in-api-gateway"
latest_feature_date: "2025-07-23"
deprecation_date: "2025-07-23"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud"
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
  - "https://docs.cloud.google.com/api-gateway/docs/about-api-gateway"
keywords:
  - "deprecation"
  - "deprecating"
  - "enforces"
  - "security"
  - "settings"
  - "older"
---

# TLS 1.0 and TLS 1.1 deprecation in API Gateway

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

API Gateway is deprecating TLS 1.0 and 1.1 and enforces TLS 1.2+ for new security settings, with older protocol connections returning 400 errors; deprecated on 2025-07-23.

## Extended Definition

API Gateway is deprecating TLS 1.0 and 1.1 and enforces TLS 1.2+ for new security settings, with older protocol connections returning 400 errors; deprecated on 2025-07-23.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/api-gateway/docs/about-api-gateway](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)

## Supporting Pages

### Quickstart: Secure traffic to a service with the gcloud CLI | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- Source ID: `feature-recovery-direct-http`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Quickstart: Secure traffic to a service with the gcloud CLI | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Quickstart: Secure traffic to a service with the gcloud CLI This page shows you how to deploy an API on API Gateway to secure traffic to a backend service.
- Add the security type and securityDefinitions as shown: OpenAPI 2.0 # openapi2-functions.yaml swagger : '2.0' info : title : API_ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 schemes : - https produces : - application/json paths : /hello : get : summary : Greet a user operationId : hello x-google-backend : address : SERVICE_URL /helloGET security : - api_key : [] responses : '200' : description : A successful response schema : type : string securityDefinitions : # This section configures basic authentication with an API key. api_key : type : "apiKey" name : "key" in : "query" The securityDefinition configures your API to require an API key passed as a query parameter named key when requesting access to all paths defined in the spec.
- Set at the root so this applies to all operations unless overridden. x-google-backend : functions_backend components : # This section configures basic authentication with an API key. securitySchemes : google_api_key : type : apiKey name : x-api-key in : header security : - google_api_key : [] paths : /hello : get : summary : Greet a user operationId : hello responses : '200' : description : A successful response content : application/json : schema : type : string The securitySchemes configures your API to require an API key passed as a query parameter named key when requesting access to all paths defined in the spec.

### Create an API config | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `feature-recovery-direct-http`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more on creating the OpenAPI spec for your API definition, see OpenAPI overview and Quickstart: Secure traffic to a service with the gcloud CLI.
- Create an API config | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- API Gateway enforces the following requirements for the API config ID: Must have a maximum length of 63 characters.

### Sobre o gateway de API | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/about-api-gateway](https://docs.cloud.google.com/api-gateway/docs/about-api-gateway)
- Source ID: `feature-recovery-direct-http`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

