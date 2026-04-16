---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.752Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee gRPC proxy passthrough"
feature_slug: "apigee-grpc-proxy-passthrough"
latest_feature_date: "2023-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "passthrough"
  - "grpc"
  - "provides"
  - "creating"
  - "proxies"
  - "proxy"
---

# Apigee gRPC proxy passthrough

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Provides GA support for creating API proxies that pass gRPC client requests through to a gRPC target server; A public-preview gRPC proxy passthrough capability allows proxies to accept gRPC client requests and forward them to gRPC target servers.

## Extended Definition

Provides GA support for creating API proxies that pass gRPC client requests through to a gRPC target server; A public-preview gRPC proxy passthrough capability allows proxies to accept gRPC client requests and forward them to gRPC target servers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Creating an API proxy from an OpenAPI Specification Stay organized with collections Save and categorize content based on your preferences.
- Create the API proxy To create the API proxy from an OpenAPI Specification: In the Google Cloud console, go to the Apigee > Proxy development > API proxies page.
- For example: http://mocktarget.apigee.net servers property from the OpenAPI Specification The following provides an excerpt from the OpenAPI Specification showing the properties that are used to pre-populate the fields. openapi: 3.0.0 info: description : OpenAPI Specification for the Apigee mock target service endpoint. version: 1.0.0 title : Mock Target API paths: /: get: summary: View personalized greeting operationId: View a personalized greeting description: View a personalized greeting for the specified or guest user. parameters: - name: user in: query description: Your user name. required: false schema: type: string responses: "200": description: Success ... servers : - url: http://mocktarget.apigee.net - url: https://mocktarget.apigee.net ...
- About the Open API Initiative "The Open API Initiative (OAI) is focused on creating, evolving and promoting a vendor neutral API Description Format based on the Swagger Specification." For more information about the Open API Initiative, see The OpenAPI Specification .

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.
- Create a target proxy To create a target proxy for the load balancer to process service extension traffic, use the following command: gcloud compute target-https-proxies create TARGET PROXY NAME \ --global \ --ssl-certificates SSL CERT NAME \ --global-ssl-certificates \ --url-map URL MAP NAME \ --global-url-map Where: TARGET PROXY NAME is the name of the target proxy you want to create.
- Create an Apigee environment Note: Before creating a new environment and environment group, or using existing resources for the step, review the limitations on environments, environment groups, and API proxies in the Extension Processor configuration.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Create API proxies in Apigee To get started, you'll first need to register the following sample API proxies in your Apigee project: API proxy name Configuration details Base config Revision config Orders API Proxy template: Reverse proxy Target: https://mocktarget.apigee.net Change target endpoint to: https://mocktarget.apigee.net/xml Products API Users API Note: Ensure that each proxy has at least one revision deployed to an environment, and the environment must be part of an environment group.
- This involves creating the necessary API proxies in Apigee and setting up Cloud Storage with your API specification files.
- The following table provides details about each element to help you understand how the curation logic works: Component Configuration Description API trigger API Trigger ID: api trigger/test-custom-curation API 1 Receives data from the API hub plugin instance to invoke the integration for custom curation.
- You'll use API hub's custom curation features to automatically fetch API specifications from a Cloud Storage bucket and associate them with their corresponding Apigee API proxies.

