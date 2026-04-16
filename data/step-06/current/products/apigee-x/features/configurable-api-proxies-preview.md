---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.752Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Configurable API Proxies (preview)"
feature_slug: "configurable-api-proxies-preview"
latest_feature_date: "2023-11-10"
deprecation_date: "2023-11-10"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "discontinued"
  - "longer"
  - "version"
  - "configurable"
  - "proxies"
  - "preview"
---

# Configurable API Proxies (preview)

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The preview version of Configurable API Proxies was discontinued and is no longer available; deprecated on 2023-11-10.

## Extended Definition

The preview version of Configurable API Proxies was discontinued and is no longer available; deprecated on 2023-11-10.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Configure the EventFlow in the proxy: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <Policies></Policies> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- The XML specification for the VerifyAPIKey policy included in the Extension Processor proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <VerifyAPIKey continueOnError="false" enabled="true" name="VA-verify-api-key"> <DisplayName>VA-verify-api-key</DisplayName> <Properties/> <APIKey ref="request.queryparam.x-api-key"/> </VerifyAPIKey> Deploy the new proxy revision.
- Create a target proxy To create a target proxy for the load balancer to process service extension traffic, use the following command: gcloud compute target-https-proxies create TARGET PROXY NAME \ --global \ --ssl-certificates SSL CERT NAME \ --global-ssl-certificates \ --url-map URL MAP NAME \ --global-url-map Where: TARGET PROXY NAME is the name of the target proxy you want to create.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Sample Output You should see the following test output: { "apiMetadataList": { "apiMetadata": [ { "api": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API", "displayName": "Products-API", "fingerprint": "products-api" }, "versions": [ { "version": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API/versions/version-1", "displayName": "version-1" }, "deployments": [ { "deployment": { "displayName": "Products-API", "description": "API for managing product inventory.
- JavaScript task (Enrich API metadata with spec contents) Script: / Processes and curates API metadata with spec contents. @param {object} event The event object containing API data and spec content. / function executeScript(event) { let apiMetadata = event.getParameter('apiMetadata'); let specContent = event.getParameter('specContent'); // Initialize curatedAPIMetadata directly from apiMetadata const curatedAPIMetadata = { ...apiMetadata }; // Construct the 'spec' object efficiently const spec = { displayName: "open-api-spec", specType: { enumValues: { values: [{ id: "openapi" }] } }, contents: { mimeType: "application/yaml", contents: specContent, }, }; // Create the specMetadata object const specMetadata = { // Ensure originalUpdateTime exists before assigning // provide a fallback if needed originalModifiedTime: curatedAPIMetadata.originalUpdateTime new Date().toISOString(), spec: spec, }; // Initialize or update the specs array within the first version // This assumes versions[0] always exists.
- Sample test input Use the following sample input: { "apiMetadataList": { "apiMetadata": [ { "api": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API", "displayName": "Products-API", "fingerprint": "products-api" }, "versions": [ { "version": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API/versions/version-1", "displayName": "version-1" }, "deployments": [ { "deployment": { "displayName": "Products-API", "description": "API for managing product inventory.
- Add checks if it might not. if (!curatedAPIMetadata.versions curatedAPIMetadata.versions.length === 0) { curatedAPIMetadata.versions = [{ specs: [] }]; } else if (!curatedAPIMetadata.versions[0].specs) { curatedAPIMetadata.versions[0].specs = []; } curatedAPIMetadata.versions[0].specs.push(specMetadata); // Set the modified apiData parameter event.setParameter('curatedAPIMetadata', curatedAPIMetadata); } The script demonstrates how the API metadata is enriched using the parsed specContent output from the Data Mapping task.

### Auto-register Apigee proxies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-auto-register-apigee-proxies)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Auto-register Apigee proxies Stay organized with collections Save and categorize content based on your preferences.
- However, the actual process of registering the proxies will start after the next run of the scheduler which runs once every six hours.
- Auto-register Apigee proxies In the Google Cloud console, go to the API hub page.
- This quickstart shows you how to register Apigee proxies in API hub.

