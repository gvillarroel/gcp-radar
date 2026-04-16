---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.471Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "OpenAPI host property optional for API Gateway API configs"
feature_slug: "openapi-host-property-optional-for-api-gateway-api-configs"
latest_feature_date: "2020-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud"
  - "https://docs.cloud.google.com/api-gateway/docs/deploying-api"
keywords:
  - "property"
  - "optional"
  - "configs"
  - "host"
  - "specifications"
  - "openapi"
---

# OpenAPI host property optional for API Gateway API configs

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

OpenAPI specifications for API Gateway API configs no longer require the host property.

## Extended Definition

OpenAPI specifications for API Gateway API configs no longer require the host property.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- [https://docs.cloud.google.com/api-gateway/docs/deploying-api](https://docs.cloud.google.com/api-gateway/docs/deploying-api)

## Supporting Pages

### Create an API config | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `feature-recovery-direct-http`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the managedService in your API definition is set to an ESPv2 Beta service, make sure that the host field (OpenAPI 2.0) or server.url field (OpenAPI 3.x) is set to an x-google-endpoint extension in your API config.
- Create an API config | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Validate the project ID returned from the following command to make sure that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace PROJECT_ID with the Google Cloud project ID in which you want to create the service: gcloud config set project PROJECT_ID View help for the api-configs create command: gcloud api-gateway api-configs create --help Run the following command to create the API config: gcloud api-gateway api-configs create CONFIG_ID \ --api= API_ID --openapi-spec= API_DEFINITION \ --project= PROJECT_ID --backend-auth-service-account= SERVICE_ACCOUNT_EMAIL where: CONFIG_ID specifies the ID of the new API config.
- For example: gcloud api-gateway api-configs create CONFIG_ID \ --api= API_ID --openapi-spec= API_DEFINITION \ --backend-auth-service-account= SERVICE_ACCOUNT_EMAIL \ --async --display-name=MyConfig --labels=a=1,b=2 You can see the labels in the output of the describe command shown, or in the list command by including the --format option: gcloud api-gateway api-configs list \ --api= API_ID --format="table(name, labels)" List API configs List all of the API Gateways deployed in your Google Cloud project.

### Deploy an API to a gateway \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/deploying-api](https://docs.cloud.google.com/api-gateway/docs/deploying-api)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- On successful completion, you can use the following command to view details about the gateway: gcloud api-gateway gateways describe GATEWAY ID \ --location= GCP REGION This command returns the following: apiConfig : projects / PROJECT ID / locations / global / apis / API ID / configs / CONFIG ID createTime : ' 2020 -02-05 T13 : 44 : 12.997862831 Z ' defaultHostname : my - gateway - a12bcd345e67f89g0h . uc . gateway . dev displayName : GATEWAY ID name : projects / PROJECT ID / locations / GCP REGION / gateways / GATEWAY ID serviceAccount : email : gateway -111111@222222 - tp . iam.gserviceaccount.com state : ACTIVE updateTime : ' 2020 -02-05 T13 : 45 : 00.844705087 Z ' Note the value of the defaultHostname property.
- See OpenAPI 2.0 and OpenAPI 3.x file formats for API definition.
- This is the hostname portion of the gateway URL.
- Create an OpenAPI spec that defines your API.

### "Quickstart: Secure traffic to a service with the gcloud CLI \_|\_ API Gateway\

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: gcloud api-gateway gateways create my-gateway \ --api= my-api --api-config= my-config \ --location= us-central1 On successful completion, use the following command to view details about the gateway: gcloud api-gateway gateways describe GATEWAY ID \ --location= GCP REGION For example: gcloud api-gateway gateways describe my-gateway \ --location= us-central1 This command returns the following: apiConfig: projects/my-project/locations/global/apis/my-api/configs/my-config createTime: '2020-02-05T13:44:12.997862831Z' defaultHostname: my-gateway-a12bcd345e67f89g0h.uc.gateway.dev displayName: my-gateway name: projects/my-project/locations/us-central1/gateways/my-gateway serviceAccount: email: 0000000000000-compute@developer.gserviceaccount.com state: ACTIVE updateTime: '2020-02-05T13:45:00.844705087Z' Note the value of the defaultHostname property.
- For more details on supported OpenAPI extensions, see the following: OpenAPI 2.0 extensions in API Gateway OpenAPI 3.x extensions in API Gateway The OpenAPI description used for this quickstart contains routing instructions to our Cloud Run function backend: OpenAPI 2.0 openapi-functions.yaml swagger : '2.0' info : title : API ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 schemes : - https produces : - application/json paths : /hello : get : summary : Greet a user operationId : hello x-google-backend : address : SERVICE URL /helloGET responses : '200' : description : A successful response schema : type : string OpenAPI 3.x openapi-functions.yaml openapi : 3.0.4 info : title : API ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 Define reusable components in x-google-api-management x-google-api-management : backends : functions backend : address : SERVICE URL /helloGET pathTranslation : APPEND PATH TO ADDRESS protocol : "http/1.1" Apply the backend configuration by referencing it by name.
- Create a new API config with the modified OpenAPI spec using the following command: gcloud api-gateway api-configs create NEW CONFIG ID \ --api= API ID --openapi-spec= NEW API DEFINITION \ --backend-auth-service-account= SERVICE ACCOUNT EMAIL For example: gcloud api-gateway api-configs create my-config-key \ --api= my-api --openapi-spec= openapi2-functions.yaml \ --project= my-project --backend-auth-service-account= 0000000000000compute@developer.gserviceaccount.com Run the following command to update your existing gateway with the new API config: gcloud api-gateway gateways update GATEWAY ID \ --api= API ID --api-config= NEW CONFIG ID \ --location= GCP REGION For example: gcloud api-gateway gateways update my-gateway \ --api= my-api --api-config= my-config-key \ --location= us-central1 Test your API key Once you have created and deployed the modified API, try making a request to it.
- Add the security type and securityDefinitions as shown: OpenAPI 2.0 openapi2-functions.yaml swagger : '2.0' info : title : API ID optional-string description : Sample API on API Gateway with a Google Cloud Functions backend version : 1.0.0 schemes : - https produces : - application/json paths : /hello : get : summary : Greet a user operationId : hello x-google-backend : address : SERVICE URL /helloGET security : - api key : [] responses : '200' : description : A successful response schema : type : string securityDefinitions : This section configures basic authentication with an API key. api key : type : "apiKey" name : "key" in : "query" The securityDefinition configures your API to require an API key passed as a query parameter named key when requesting access to all paths defined in the spec.

