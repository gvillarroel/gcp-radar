---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.761Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Keystore support in Apigee Emulator"
feature_slug: "keystore-support-in-apigee-emulator"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
keywords:
  - "keystore"
  - "locally"
  - "gained"
  - "configuration"
  - "emulator"
  - "environment"
  - "level"
---

# Keystore support in Apigee Emulator

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee Emulator gained support for environment-level keystore configuration using locally available keys.

## Extended Definition

Apigee Emulator gained support for environment-level keystore configuration using locally available keys.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- The following example shows the configuration for the ExtractVariables policy: <ExtractVariables enabled="true" continueOnError="false" async="false" name="ExtractFieldFromMaResponse"> <FaultRules/> <Properties/> <IgnoreUnresolvedVariables>false</IgnoreUnresolvedVariables> <VariablePrefix>sdp</VariablePrefix> <JSONPayload> <Variable type="string" name="info type"> <JSONPath>$.sanitizationResult.filterResults[1].sdpFilterResult.inspectResult.findings[0].infoType</JSONPath> </Variable> </JSONPayload> <Source>SanitizeUserPrompt.sanitize-response.response.content</Source> </ExtractVariables> Add a Model Armor response error code and error message with the RaiseFault policy You can add Model Armor template metadata to customize the error code and error message that is raised by the Model Armor policy.
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT $LOCATION $RUNTIME HOSTNAME Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT Overview The following sections describe the steps required to create and configure the Model Armor policies: Enable Model Armor APIs.

### "Step 3: Configure and deploy an environment \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you create an environment, a set of configuration files are included by default in the dev environment folder for configuring your deployment and any required debug masks, flow hooks, or target servers.
- Note: Before deploying an environment, ensure that you have installed the Apigee Emulator .
- The file has been updated to include the helloworld API proxy in the proxies deployment array: { "proxies": [ { "name": "helloworld" } ], "sharedflows": [] } Deploy the dev environment: Position your cursor over the dev environment folder in the Apigee section and click .
- Home Documentation Application development Apigee Guides Send feedback Step 3: Configure and deploy an environment Stay organized with collections Save and categorize content based on your preferences.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Create API proxies in Apigee To get started, you'll first need to register the following sample API proxies in your Apigee project: API proxy name Configuration details Base config Revision config Orders API Proxy template: Reverse proxy Target: https://mocktarget.apigee.net Change target endpoint to: https://mocktarget.apigee.net/xml Products API Users API Note: Ensure that each proxy has at least one revision deployed to an environment, and the environment must be part of an environment group.
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z", "specs": [ { "originalModifiedTime": "2025-07-07T05:23:47.982Z", "spec": { "displayName": "open-api-spec", "specType": { "enumValues": { "values": [ { "id": "openapi" } ] } }, "contents": { "mimeType": "application/yaml", "contents": "b3BlbmFwaTogMy4wLjAKaW5mbzoKICB0aXRsZTogUHJvZHVjdHMgQVBJCiAgdmVyc2lvbjogMS4wLjAKICBkZXNjcmlwdGlvbjogQVBJIGZvciBtYW5hZ2luZyBwcm9kdWN0IGludmVudG9yeS4gVGhpcyBBUEkgYWxsb3dzIGZvciB0aGUgY3JlYXRpb24sIHJldHJpZXZhbCwgdXBkYXRlLCBhbmQgZGVsZXRpb24gb2YgcHJvZHVjdCByZWNvcmRzLgpzZXJ2ZXJzOgogIC0gdXJsOiBodHRwczovL2FwaS5leGFtcGxlLmNvbS9wcm9kdWN0cy92MQogICAgZGVzY3JpcHRpb246IFByb2R1Y3Rpb24gc2VydmVyIGZvciB0aGUgUHJvZHVjdHMgQVBJLgpwYXRoczoKICAvcHJvZHVjdHM6CiAgICBnZXQ6CiAgICAgIHN1bW1hcnk6IEdldCBhbGwgcHJvZHVjdHMKICAgICAgb3BlcmF0aW9uSWQ6IGdldEFsbFByb2R1Y3RzCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBBIGxpc3Qgb2YgcHJvZHVjdHMgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZC4KICAgICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICAgIGFwcGxpY2F0aW9uL2pzb246CiAgICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICAgdHlwZTogYXJyYXkKICAgICAgICAgICAgICAgIGl0ZW1zOgogICAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgIHBvc3Q6CiAgICAgIHN1bW1hcnk6IEFkZCBhIG5ldyBwcm9kdWN0CiAgICAgIG9wZXJhdGlvbklkOiBhZGRQcm9kdWN0CiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGF0YSB0byBiZSBhZGRlZC4KICAgICAgICBjb250ZW50OgogICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICRyZWY6ICcjL2NvbXBvbmVudHMvc2NoZW1hcy9Qcm9kdWN0SW5wdXQnCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAxJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBjcmVhdGVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbnZhbGlkIGlucHV0IHByb3ZpZGVkIGZvciBwcm9kdWN0IGNyZWF0aW9uLgogIC9wcm9kdWN0cy97cHJvZHVjdElkfToKICAgIGdldDoKICAgICAgc3VtbWFyeTogR2V0IGEgcHJvZHVjdCBieSBJRAogICAgICBvcGVyYXRpb25JZDogZ2V0UHJvZHVjdEJ5SWQKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gcmV0cmlldmUuCiAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgICBmb3JtYXQ6IHV1aWQKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGV0YWlscyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IG5vdCBmb3VuZCB3aXRoIHRoZSBnaXZlbiBJRC4KICAgIHB1dDoKICAgICAgc3VtbWFyeTogVXBkYXRlIGFuIGV4aXN0aW5nIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IHVwZGF0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gdXBkYXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFVwZGF0ZWQgcHJvZHVjdCBkYXRhLgogICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICBhcHBsaWNhdGlvbi9qc29uOgogICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgJHJlZjogJyMvY29tcG9uZW50cy9zY2hlbWFzL1Byb2R1Y3RJbnB1dCcKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuCiAgICAgICAgJzQwMCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogSW52YWxpZCBpbnB1dCBwcm92aWRlZCBmb3IgcHJvZHVjdCB1cGRhdGUuCiAgICAgICAgJzQwNCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogUHJvZHVjdCBub3QgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gSUQuCiAgICBkZWxldGU6CiAgICAgIHN1bW1hcnk6IERlbGV0ZSBhIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IGRlbGV0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gZGVsZXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBkZWxldGVkLiBObyBjb250ZW50LgogICAgICAgICc0MDQnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgbm90IGZvdW5kIHdpdGggdGhlIGdpdmVuIElELgpjb21wb25lbnRzOgogIHNjaGVtYXM6CiAgICBQcm9kdWN0OgogICAgICB0eXBlOiBvYmplY3QKICAgICAgcmVxdWlyZWQ6CiAgICAgICAgLSBpZAogICAgICAgIC0gbmFtZQogICAgICAgIC0gcHJpY2UKICAgICAgcHJvcGVydGllczoKICAgICAgICBpZDoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIHByb2R1Y3QgaWRlbnRpZmllci4KICAgICAgICBuYW1lOgogICAgICAgICAgdHlwZTogc3RyaW5nCiAgICAgICAgICBkZXNjcmlwdGlvbjogTmFtZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBkZXNjcmlwdGlvbjoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgbnVsbGFibGU6IHRydWUKICAgICAgICAgIGRlc2NyaXB0aW9uOiBEZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBwcmljZToKICAgICAgICAgIHR5cGU6IG51bWJlcgogICAgICAgICAgZm9ybWF0OiBmbG9hdAogICAgICAgICAgZGVzY3JpcHRpb246IFByaWNlIG9mIHRoZSBwcm9kdWN0LgogICAgICAgIHN0b2NrOgogICAgICAgICAgdHlwZTogaW50ZWdlcgogICAgICAgICAgZm9ybWF0OiBpbnQzMgogICAgICAgICAgZGVzY3JpcHRpb246IEN1cnJlbnQgc3RvY2sgcXVhbnRpdHkuCiAgICAgICAgICBkZWZhdWx0OiAwCiAgICBQcm9kdWN0SW5wdXQ6CiAgICAgIHR5cGU6IG9iamVjdAogICAgICByZXF1aXJlZDoKICAgICAgICAtIG5hbWUKICAgICAgICAtIHByaWNlCiAgICAgIHByb3BlcnRpZXM6CiAgICAgICAgbmFtZToKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZGVzY3JpcHRpb246IE5hbWUgb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgZGVzY3JpcHRpb246CiAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgIG51bGxhYmxlOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogRGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgcHJpY2U6CiAgICAgICAgICB0eXBlOiBudW1iZXIKICAgICAgICAgIGZvcm1hdDogZmxvYXQKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcmljZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBzdG9jazoKICAgICAgICAgIHR5cGU6IGludGVnZXIKICAgICAgICAgIGZvcm1hdDogaW50MzIKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbml0aWFsIHN0b2NrIHF1YW50aXR5LgogICAgICAgICAgZGVmYXVsdDogMA==" } } } ] } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Now that you have successfully tested the integration, lets publish it to make it active and available for use in API hub.
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Sample Output You should see the following test output: { "apiMetadataList": { "apiMetadata": [ { "api": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API", "displayName": "Products-API", "fingerprint": "products-api" }, "versions": [ { "version": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API/versions/version-1", "displayName": "version-1" }, "deployments": [ { "deployment": { "displayName": "Products-API", "description": "API for managing product inventory.
- A new version of the integration is created as shown in the following image: Configure connector task in the integration After uploading the integration, the next step is to configure the Connectors task to connect to your Cloud Storage bucket: Click the Connectors task named Fetch spec from GCS to view the connector configuration pane.

