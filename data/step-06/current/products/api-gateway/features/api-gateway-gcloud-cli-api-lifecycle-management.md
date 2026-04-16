---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.472Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "API Gateway gcloud CLI API lifecycle management"
feature_slug: "api-gateway-gcloud-cli-api-lifecycle-management"
latest_feature_date: "2020-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud"
  - "https://docs.cloud.google.com/api-gateway/docs/quickstart"
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
keywords:
  - "management"
  - "creating"
  - "listing"
  - "lifecycle"
  - "gained"
  - "gcloud"
---

# API Gateway gcloud CLI API lifecycle management

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

The gcloud CLI gained support for creating, listing, updating, and deleting APIs.

## Extended Definition

The gcloud CLI gained support for creating, listing, updating, and deleting APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart)
- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)

## Supporting Pages

### "Quickstart: Secure traffic to a service with the gcloud CLI \_|\_ API Gateway\

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Replace PROJECT ID with your Google Cloud project ID. gcloud config set project PROJECT ID Enable required services API Gateway requires that you enable the following Google Cloud services: Name Service name API Gateway API apigateway.googleapis.com Service Management API servicemanagement.googleapis.com Service Control API servicecontrol.googleapis.com To enable required services: Google Cloud console In the Google Cloud console, go to the APIs & Services > API Library page.
- Google Cloud CLI Use the following commands to enable the services: gcloud services enable apigateway.googleapis.com gcloud services enable servicemanagement.googleapis.com gcloud services enable servicecontrol.googleapis.com For more information about the gcloud services, see gcloud services .
- For more details on supported OpenAPI extensions, see the following: OpenAPI 2.0 extensions in API Gateway OpenAPI 3.x extensions in API Gateway The OpenAPI description used for this quickstart contains routing instructions to our Cloud Run function backend: OpenAPI 2.0 openapi-functions.yaml swagger : '2.0' info : title : API ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 schemes : - https produces : - application/json paths : /hello : get : summary : Greet a user operationId : hello x-google-backend : address : SERVICE URL /helloGET responses : '200' : description : A successful response schema : type : string OpenAPI 3.x openapi-functions.yaml openapi : 3.0.4 info : title : API ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 Define reusable components in x-google-api-management x-google-api-management : backends : functions backend : address : SERVICE URL /helloGET pathTranslation : APPEND PATH TO ADDRESS protocol : "http/1.1" Apply the backend configuration by referencing it by name.
- Create a new API config with the modified OpenAPI spec using the following command: gcloud api-gateway api-configs create NEW CONFIG ID \ --api= API ID --openapi-spec= NEW API DEFINITION \ --backend-auth-service-account= SERVICE ACCOUNT EMAIL For example: gcloud api-gateway api-configs create my-config-key \ --api= my-api --openapi-spec= openapi2-functions.yaml \ --project= my-project --backend-auth-service-account= 0000000000000compute@developer.gserviceaccount.com Run the following command to update your existing gateway with the new API config: gcloud api-gateway gateways update GATEWAY ID \ --api= API ID --api-config= NEW CONFIG ID \ --location= GCP REGION For example: gcloud api-gateway gateways update my-gateway \ --api= my-api --api-config= my-config-key \ --location= us-central1 Test your API key Once you have created and deployed the modified API, try making a request to it.

### "Quickstart: Secure traffic to a service with the gcloud CLI \_|\_ API Gateway\

- URL: [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart)
- Source ID: `site-docs-reference-required-2`
- Final score: 93
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Replace PROJECT ID with your Google Cloud project ID. gcloud config set project PROJECT ID Enable required services API Gateway requires that you enable the following Google Cloud services: Name Service name API Gateway API apigateway.googleapis.com Service Management API servicemanagement.googleapis.com Service Control API servicecontrol.googleapis.com To enable required services: Google Cloud console In the Google Cloud console, go to the APIs & Services > API Library page.
- Google Cloud CLI Use the following commands to enable the services: gcloud services enable apigateway.googleapis.com gcloud services enable servicemanagement.googleapis.com gcloud services enable servicecontrol.googleapis.com For more information about the gcloud services, see gcloud services .
- For more details on supported OpenAPI extensions, see the following: OpenAPI 2.0 extensions in API Gateway OpenAPI 3.x extensions in API Gateway The OpenAPI description used for this quickstart contains routing instructions to our Cloud Run function backend: OpenAPI 2.0 openapi-functions.yaml swagger : '2.0' info : title : API ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 schemes : - https produces : - application/json paths : /hello : get : summary : Greet a user operationId : hello x-google-backend : address : SERVICE URL /helloGET responses : '200' : description : A successful response schema : type : string OpenAPI 3.x openapi-functions.yaml openapi : 3.0.4 info : title : API ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 Define reusable components in x-google-api-management x-google-api-management : backends : functions backend : address : SERVICE URL /helloGET pathTranslation : APPEND PATH TO ADDRESS protocol : "http/1.1" Apply the backend configuration by referencing it by name.
- Create a new API config with the modified OpenAPI spec using the following command: gcloud api-gateway api-configs create NEW CONFIG ID \ --api= API ID --openapi-spec= NEW API DEFINITION \ --backend-auth-service-account= SERVICE ACCOUNT EMAIL For example: gcloud api-gateway api-configs create my-config-key \ --api= my-api --openapi-spec= openapi2-functions.yaml \ --project= my-project --backend-auth-service-account= 0000000000000compute@developer.gserviceaccount.com Run the following command to update your existing gateway with the new API config: gcloud api-gateway gateways update GATEWAY ID \ --api= API ID --api-config= NEW CONFIG ID \ --location= GCP REGION For example: gcloud api-gateway gateways update my-gateway \ --api= my-api --api-config= my-config-key \ --location= us-central1 Test your API key Once you have created and deployed the modified API, try making a request to it.

### Create an API config | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `feature-recovery-direct-http`
- Final score: 87
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an API config | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For more on creating the OpenAPI spec for your API definition, see OpenAPI overview and Quickstart: Secure traffic to a service with the gcloud CLI.
- Validate the project ID returned from the following command to make sure that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace PROJECT_ID with the Google Cloud project ID in which you want to create the service: gcloud config set project PROJECT_ID View help for the api-configs create command: gcloud api-gateway api-configs create --help Run the following command to create the API config: gcloud api-gateway api-configs create CONFIG_ID \ --api= API_ID --openapi-spec= API_DEFINITION \ --project= PROJECT_ID --backend-auth-service-account= SERVICE_ACCOUNT_EMAIL where: CONFIG_ID specifies the ID of the new API config.
- Google Cloud CLI To list API configs for a specific project: gcloud api-gateway api-configs list This command returns the following: NAME DISPLAY_NAME ROLLOUT_ID STATE CREATE_TIME projects/ PROJECT_ID /locations/global/apis/ API_ID /configs/ CONFIG_ID CONFIG_ID 2020-02-04r0 ACTIVE 2020-02-04T16:18:02.369859863Z To list API configs for a specific API in a project: gcloud api-gateway api-configs list --api= API_ID Use the API and config IDs to obtain detailed information about the API config: gcloud api-gateway api-configs describe CONFIG_ID \ --api= API_ID Update an API config You cannot modify an existing API config other than to update its labels and its display name.

