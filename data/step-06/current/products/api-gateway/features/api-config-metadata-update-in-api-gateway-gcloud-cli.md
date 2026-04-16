---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.471Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "API config metadata update in API Gateway gcloud CLI"
feature_slug: "api-config-metadata-update-in-api-gateway-gcloud-cli"
latest_feature_date: "2020-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
  - "https://docs.cloud.google.com/api-gateway/docs/authenticate-service-account"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder"
keywords:
  - "ability"
  - "config"
  - "metadata"
  - "update"
  - "added"
  - "gcloud"
---

# API config metadata update in API Gateway gcloud CLI

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

The API Gateway gcloud CLI added the ability to update API config labels or display name.

## Extended Definition

The API Gateway gcloud CLI added the ability to update API config labels or display name.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/api-gateway/docs/authenticate-service-account](https://docs.cloud.google.com/api-gateway/docs/authenticate-service-account)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder)

## Supporting Pages

### Create an API config | API Gateway | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `feature-recovery-direct-http`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create an API config | API Gateway | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in API Gateway Start free Overview Guides Reference Support Resources Technology areas More Overview Guides Reference Support Resources Cross-product tools More Console API Gateway Quickstarts All quickstarts Quickstart: Use the gcloud command-line tool Quickstart: Use the Cloud console Tutorials All tutorials Get started with API Gateway and App Engine Get started with API Gateway and Cloud Run Get started with API Gateway and Cloud Run for gRPC Get started with API Gateway and Cloud Functions Get started with load balancing for API Gateway Get started centralizing APIs with API hub How-to guides All how-to guides Create and deploy an API About the development environment Configure the development environment Create an API Create an API config Configure a gRPC service Deploy an API to a gateway Pass data to and from the backend service Troubleshooting & monitoring Troubleshooting Monitor your API Trace your API Access audit logs Access platform logs Authentication & API Keys Choose an authentication method Authenticate users Use JWT to authenticate users Use Firebase to authenticate users Use Auth0 to authenticate users Use Okta to authenticate users Use Google ID tokens to authenticate users Authentication between services Secure backend services Use API Keys Manage API access Limit API requests About quotas Use custom domains Create multi-region deployments Deploy Cloud Endpoints APIs Centralize APIs using API hub Overview Connect API Gateway with API hub View API Gateway APIs in API hub Remove an API Gateway connection from API hub Concepts All concepts About API Gateway API Gateway architecture API Gateway deployment model OpenAPI OpenAPI overview Modify a gateway to use OpenAPI 3.x OpenAPI 2.0 extensions OpenAPI 3.x extensions OpenAPI 2.0 feature limitations OpenAPI 3.x feature limitations gRPC overview Load balancing for API Gateway Path templating CMEK compliance in API Gateway Glossary AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Application development API Gateway Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Google Cloud CLI To list API configs for a specific project: gcloud api-gateway api-configs list This command returns the following: NAME DISPLAY_NAME ROLLOUT_ID STATE CREATE_TIME projects/ PROJECT_ID /locations/global/apis/ API_ID /configs/ CONFIG_ID CONFIG_ID 2020-02-04r0 ACTIVE 2020-02-04T16:18:02.369859863Z To list API configs for a specific API in a project: gcloud api-gateway api-configs list --api= API_ID Use the API and config IDs to obtain detailed information about the API config: gcloud api-gateway api-configs describe CONFIG_ID \ --api= API_ID Update an API config You cannot modify an existing API config other than to update its labels and its display name.
- On successful completion, you can use the following command to view details about the new API config: gcloud api-gateway api-configs describe CONFIG_ID \ --api= API_ID This command returns the following: createTime: '2020-02-04T18:33:11.882707149Z' displayName: CONFIG_ID gatewayConfig: backendConfig: googleServiceAccount: 1111111@developer.gserviceaccount.com labels: '' name: projects/ PROJECT_ID /locations/global/apis/ API_ID /configs/ CONFIG_ID serviceRollout: rolloutId: 2020-02-04r2 state: ACTIVE updateTime: '2020-02-04T18:33:12.219323647Z' Enable the API using the managed service name of the API.
- Google Cloud CLI Use the following `gcloud` to update an existing API config: --display-name --update-labels --clear-labels --remove-labels For example: gcloud api-gateway api-configs update CONFIG_ID \ --api= API_ID \ --update-labels=a=1,b=2 Use the following command to view all update options: gcloud api-gateway api-configs update --help Delete an API config Warning: If you deployed the API config to a gateway, the API config may not be deleted until the gateway is no longer using that API config.

### Authentication between services \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/authenticate-service-account](https://docs.cloud.google.com/api-gateway/docs/authenticate-service-account)
- Source ID: `site-docs-reference-required-2`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To configure API Gateway to validate the claims in the signed JWT used by calling services: OpenAPI 2.0 Add the service account as an issuer in your API config: securityDefinitions : DEFINITION NAME : authorizationUrl : "" flow : "implicit" type : "oauth2" x-google-issuer : " SA EMAIL ADDRESS " x-google-jwks uri : "https://www.googleapis.com/robot/v1/metadata/x509/ SA EMAIL ADDRESS " Replace DEFINITION NAME with a string that identifies this security definition.
- OpenAPI 3.x Add the service account as an issuer in your API config: components : securitySchemes : SCHEME NAME : type : oauth2 flows : implicit : authorizationUrl : "" scopes : {} x-google-auth : issuer : SA EMAIL ADDRESS jwksUri : https://www.googleapis.com/robot/v1/metadata/x509/ SA EMAIL ADDRESS security : - SCHEME NAME : [] Replace SCHEME NAME with a string that identifies this security scheme.
- In the calling service, add the following function and pass it the following parameters: Java saKeyfile : The full path to the service account's private key file. saEmail : The service account's email address. audience : If you added the x-google-audiences field to your API config, set audience to one of the values that you specified for x-google-audiences .
- Python sa keyfile : The full path to the service account's private key file. sa email : The service account's email address. audience : If you added the x-google-audiences field to your API config, set audience to one of the values that you specified for x-google-audiences .

### "Interface ApiConfigOrBuilder (2.88.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-api-gateway/latest/com.google.cloud.apigateway.v1.ApiConfigOrBuilder)
- Source ID: `site-java-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- State of the API Config. .google.cloud.apigateway.v1.ApiConfig.State state = 8 [(.google.api.field behavior) = OUTPUT ONLY]; Returns Type Description int The enum numeric value on the wire for state. getUpdateTime() public abstract Timestamp getUpdateTime () Output only.
- 2.88.0 (latest) 2.87.0 2.85.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.1 2.1.12 public interface ApiConfigOrBuilder extends MessageOrBuilder Implements MessageOrBuilder Methods containsLabels(String key) public abstract boolean containsLabels ( String key ) Optional.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
- If specified, openapi documents must not be included. repeated .google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinition grpc services = 10 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description List < ? extends com.google.cloud.apigateway.v1.ApiConfig.GrpcServiceDefinitionOrBuilder > getLabels() (deprecated) public abstract Map<String , String > getLabels () Use #getLabelsMap() instead.

