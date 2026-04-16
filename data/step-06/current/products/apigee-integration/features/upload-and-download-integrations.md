---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.354Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Upload and download integrations"
feature_slug: "upload-and-download-integrations"
latest_feature_date: "2022-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/build-cicd"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/download"
  - "https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest"
keywords:
  - "downloading"
  - "uploading"
  - "download"
  - "upload"
  - "designer"
  - "integrations"
  - "adds"
---

# Upload and download integrations

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Adds integration designer support for uploading and downloading integration definitions in JSON format.

## Extended Definition

Adds integration designer support for uploading and downloading integration definitions in JSON format.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/download](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/download)
- [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest)

## Supporting Pages

### "Method: projects.locations.products.integrations.versions.download \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/download](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.versions/download)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Send feedback Method: projects.locations.products.integrations.versions.download Stay organized with collections Save and categorize content based on your preferences.
- Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} Query parameters Parameters fileFormat enum ( FileFormat ) File format for download request.
- HTTP request GET https://integrations.googleapis.com/v1/{name=projects/ /locations/ /products/ /integrations/ /versions/ }:download The URL uses gRPC Transcoding syntax.
- IAM Permissions Requires one of the following IAM permissions on the name resource, depending on the resource type: integrations.apigeeIntegrationVers.get integrations.integrationVersions.get For more information, see the IAM documentation .

### "Build CICD for your integration \_|\_ Application Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-integration/docs/build-cicd](https://docs.cloud.google.com/application-integration/docs/build-cicd)
- Source ID: `site-docs-reference-required-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For information about how to download and upload integrations, see Upload and download integrations .
- If you don't want to use integrationcli , you can manually download and upload the integration to a new project.
- Go to Application Integration In the navigation menu, click Integrations The Integrations List page appears listing all the integrations available in the Google Cloud project.
- Go to Application Integration Click Integrations from the left navigation menu to open the Integrations page.

### Apigee Integrations API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest](https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1.projects.locations.products.integrations.versions Methods create POST /v1/{parent=projects/ /locations/ /products/ /integrations/ }/versions Create a integration with a draft version in the specified project. delete DELETE /v1/{name=projects/ /locations/ /products/ /integrations/ /versions/ } Soft-deletes the integration. download GET /v1/{name=projects/ /locations/ /products/ /integrations/ /versions/ }:download Downloads an integration. get GET /v1/{name=projects/ /locations/ /products/ /integrations/ /versions/ } Get a integration in the specified project. list GET /v1/{parent=projects/ /locations/ /products/ /integrations/ }/versions Returns the list of all integration versions in the specified project. patch PATCH /v1/{integrationVersion.name=projects/ /locations/ /products/ /integrations/ /versions/ } Update a integration with a draft version in the specified project. publish POST /v1/{name=projects/ /locations/ /products/ /integrations/ /versions/ }:publish This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. takeoverEditLock POST /v1/{integrationVersion=projects/ /locations/ /products/ /integrations/ /versions/ }:takeoverEditLock Clears the locked by and locked at timestamp in the DRAFT version of this integration. unpublish POST /v1/{name=projects/ /locations/ /products/ /integrations/ /versions/ }:unpublish Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY PUBLISHED" after validating it. upload POST /v1/{parent=projects/ /locations/ /products/ /integrations/ }/versions:upload Uploads an integration.
- Apigee Integration provides the following regional service endpoints: Region REST/HTTP endpoint asia-east1 asia-east1-integrations.googleapis.com asia-northeast1 asia-northeast1-integrations.googleapis.com asia-south1 asia-south1-integrations.googleapis.com asia-southeast1 asia-southeast1-integrations.googleapis.com australia-southeast1 australia-southeast1-integrations.googleapis.com australia-southeast2 australia-southeast2-integrations.googleapis.com europe-north1 europe-north1-integrations.googleapis.com europe-west1 europe-west1-integrations.googleapis.com europe-west2 europe-west2-integrations.googleapis.com europe-west3 europe-west3-integrations.googleapis.com europe-west4 europe-west4-integrations.googleapis.com europe-west6 europe-west6-integrations.googleapis.com europe-west9 europe-west9-integrations.googleapis.com europe-southwest1 europe-southwest1-integrations.googleapis.com northamerica-northeast1 northamerica-northeast1-integrations.googleapis.com southamerica-east1 southamerica-east1-integrations.googleapis.com us-central1 us-central1-integrations.googleapis.com us-east1 us-east1-integrations.googleapis.com us-east4 us-east4-integrations.googleapis.com us-west1 us-west1-integrations.googleapis.com us-west2 us-west2-integrations.googleapis.com me-central1 me-central1-integrations.googleapis.com me-west1 me-west1-integrations.googleapis.com REST Resource: v1.projects.locations.products.authConfigs Methods create POST /v1/{parent=projects/ /locations/ /products/ }/authConfigs Creates an auth config record. delete DELETE /v1/{name=projects/ /locations/ /products/ /authConfigs/ } Deletes an auth config. get GET /v1/{name=projects/ /locations/ /products/ /authConfigs/ } Gets a complete auth config. list GET /v1/{parent=projects/ /locations/ /products/ }/authConfigs Lists all auth configs that match the filter. patch PATCH /v1/{authConfig.name=projects/ /locations/ /products/ /authConfigs/ } Updates an auth config.
- REST Resource: v1.projects.locations.products.integrations Methods delete DELETE /v1/{name=projects/ /locations/ /products/ /integrations/ } Deletes the selected integration, including all the versions of that integration. execute POST /v1/{name=projects/ /locations/ /products/ /integrations/ }:execute Executes integrations synchronously by passing the trigger id in the request body. list GET /v1/{parent=projects/ /locations/ /products/ }/integrations Returns the list of all integrations in the specified project. schedule POST /v1/{name=projects/ /locations/ /products/ /integrations/ }:schedule Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
- REST Resource: v1.projects.locations.products.authConfigs REST Resource: v1.projects.locations.products.certificates REST Resource: v1.projects.locations.products.integrations REST Resource: v1.projects.locations.products.integrations.executions REST Resource: v1.projects.locations.products.integrations.executions.suspensions REST Resource: v1.projects.locations.products.integrations.versions REST Resource: v1.projects.locations.products.sfdcInstances REST Resource: v1.projects.locations.products.sfdcInstances.sfdcChannels Service: integrations.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .

