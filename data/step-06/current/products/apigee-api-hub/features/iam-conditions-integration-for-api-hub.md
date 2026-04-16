---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.543Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "IAM Conditions integration for API hub"
feature_slug: "iam-conditions-integration-for-api-hub"
latest_feature_date: "2025-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub"
keywords:
  - "grained"
  - "fine"
  - "conditions"
  - "integrates"
  - "integration"
---

# IAM Conditions integration for API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

API hub now integrates with IAM Conditions to support fine-grained, attribute-based conditional access control over API hub resources.

## Extended Definition

API hub now integrates with IAM Conditions to support fine-grained, attribute-based conditional access control over API hub resources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)

## Supporting Pages

### Add IAM conditions \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions](https://docs.cloud.google.com/apigee/docs/apihub/add-iam-conditions)
- Source ID: `site-docs-reference-2`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Identity and Access Management (IAM) Conditions lets you to define and enforce conditional access control for Google Cloud resources, including API hub resources.
- Home Documentation Application development Apigee Guides Send feedback Add IAM conditions Stay organized with collections Save and categorize content based on your preferences.
- Examples of using IAM conditions for API hub Example 1: Access control for all API resources starting with a prefix or based on a Tag .
- The following condition expression defines access control as follows: Access to the API hub API resources starting with prefix.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Download the following prebuilt integration JSON file and use it for the purpose of this tutorial: Integration file Download link enrich-with-spec-yaml.json Click to download Create and upload an integration To begin, you'll create a new integration in Application Integration and then upload the downloaded JSON file to define the curation logic: In the Google Cloud console, go to the Application Integration page.
- Step 1: Create an integration for custom curation With the environment ready, you can now define the custom curation logic using Application Integration, which will handle the process of identifying, enriching, and transforming the API metadata.
- The logic for this custom curation is defined using an integration in Application Integration.
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z", "specs": [ { "originalModifiedTime": "2025-07-07T05:23:47.982Z", "spec": { "displayName": "open-api-spec", "specType": { "enumValues": { "values": [ { "id": "openapi" } ] } }, "contents": { "mimeType": "application/yaml", "contents": "b3BlbmFwaTogMy4wLjAKaW5mbzoKICB0aXRsZTogUHJvZHVjdHMgQVBJCiAgdmVyc2lvbjogMS4wLjAKICBkZXNjcmlwdGlvbjogQVBJIGZvciBtYW5hZ2luZyBwcm9kdWN0IGludmVudG9yeS4gVGhpcyBBUEkgYWxsb3dzIGZvciB0aGUgY3JlYXRpb24sIHJldHJpZXZhbCwgdXBkYXRlLCBhbmQgZGVsZXRpb24gb2YgcHJvZHVjdCByZWNvcmRzLgpzZXJ2ZXJzOgogIC0gdXJsOiBodHRwczovL2FwaS5leGFtcGxlLmNvbS9wcm9kdWN0cy92MQogICAgZGVzY3JpcHRpb246IFByb2R1Y3Rpb24gc2VydmVyIGZvciB0aGUgUHJvZHVjdHMgQVBJLgpwYXRoczoKICAvcHJvZHVjdHM6CiAgICBnZXQ6CiAgICAgIHN1bW1hcnk6IEdldCBhbGwgcHJvZHVjdHMKICAgICAgb3BlcmF0aW9uSWQ6IGdldEFsbFByb2R1Y3RzCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBBIGxpc3Qgb2YgcHJvZHVjdHMgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZC4KICAgICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICAgIGFwcGxpY2F0aW9uL2pzb246CiAgICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICAgdHlwZTogYXJyYXkKICAgICAgICAgICAgICAgIGl0ZW1zOgogICAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgIHBvc3Q6CiAgICAgIHN1bW1hcnk6IEFkZCBhIG5ldyBwcm9kdWN0CiAgICAgIG9wZXJhdGlvbklkOiBhZGRQcm9kdWN0CiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGF0YSB0byBiZSBhZGRlZC4KICAgICAgICBjb250ZW50OgogICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICRyZWY6ICcjL2NvbXBvbmVudHMvc2NoZW1hcy9Qcm9kdWN0SW5wdXQnCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAxJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBjcmVhdGVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbnZhbGlkIGlucHV0IHByb3ZpZGVkIGZvciBwcm9kdWN0IGNyZWF0aW9uLgogIC9wcm9kdWN0cy97cHJvZHVjdElkfToKICAgIGdldDoKICAgICAgc3VtbWFyeTogR2V0IGEgcHJvZHVjdCBieSBJRAogICAgICBvcGVyYXRpb25JZDogZ2V0UHJvZHVjdEJ5SWQKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gcmV0cmlldmUuCiAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgICBmb3JtYXQ6IHV1aWQKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGV0YWlscyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IG5vdCBmb3VuZCB3aXRoIHRoZSBnaXZlbiBJRC4KICAgIHB1dDoKICAgICAgc3VtbWFyeTogVXBkYXRlIGFuIGV4aXN0aW5nIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IHVwZGF0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gdXBkYXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFVwZGF0ZWQgcHJvZHVjdCBkYXRhLgogICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICBhcHBsaWNhdGlvbi9qc29uOgogICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgJHJlZjogJyMvY29tcG9uZW50cy9zY2hlbWFzL1Byb2R1Y3RJbnB1dCcKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuCiAgICAgICAgJzQwMCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogSW52YWxpZCBpbnB1dCBwcm92aWRlZCBmb3IgcHJvZHVjdCB1cGRhdGUuCiAgICAgICAgJzQwNCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogUHJvZHVjdCBub3QgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gSUQuCiAgICBkZWxldGU6CiAgICAgIHN1bW1hcnk6IERlbGV0ZSBhIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IGRlbGV0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gZGVsZXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBkZWxldGVkLiBObyBjb250ZW50LgogICAgICAgICc0MDQnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgbm90IGZvdW5kIHdpdGggdGhlIGdpdmVuIElELgpjb21wb25lbnRzOgogIHNjaGVtYXM6CiAgICBQcm9kdWN0OgogICAgICB0eXBlOiBvYmplY3QKICAgICAgcmVxdWlyZWQ6CiAgICAgICAgLSBpZAogICAgICAgIC0gbmFtZQogICAgICAgIC0gcHJpY2UKICAgICAgcHJvcGVydGllczoKICAgICAgICBpZDoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIHByb2R1Y3QgaWRlbnRpZmllci4KICAgICAgICBuYW1lOgogICAgICAgICAgdHlwZTogc3RyaW5nCiAgICAgICAgICBkZXNjcmlwdGlvbjogTmFtZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBkZXNjcmlwdGlvbjoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgbnVsbGFibGU6IHRydWUKICAgICAgICAgIGRlc2NyaXB0aW9uOiBEZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBwcmljZToKICAgICAgICAgIHR5cGU6IG51bWJlcgogICAgICAgICAgZm9ybWF0OiBmbG9hdAogICAgICAgICAgZGVzY3JpcHRpb246IFByaWNlIG9mIHRoZSBwcm9kdWN0LgogICAgICAgIHN0b2NrOgogICAgICAgICAgdHlwZTogaW50ZWdlcgogICAgICAgICAgZm9ybWF0OiBpbnQzMgogICAgICAgICAgZGVzY3JpcHRpb246IEN1cnJlbnQgc3RvY2sgcXVhbnRpdHkuCiAgICAgICAgICBkZWZhdWx0OiAwCiAgICBQcm9kdWN0SW5wdXQ6CiAgICAgIHR5cGU6IG9iamVjdAogICAgICByZXF1aXJlZDoKICAgICAgICAtIG5hbWUKICAgICAgICAtIHByaWNlCiAgICAgIHByb3BlcnRpZXM6CiAgICAgICAgbmFtZToKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZGVzY3JpcHRpb246IE5hbWUgb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgZGVzY3JpcHRpb246CiAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgIG51bGxhYmxlOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogRGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgcHJpY2U6CiAgICAgICAgICB0eXBlOiBudW1iZXIKICAgICAgICAgIGZvcm1hdDogZmxvYXQKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcmljZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBzdG9jazoKICAgICAgICAgIHR5cGU6IGludGVnZXIKICAgICAgICAgIGZvcm1hdDogaW50MzIKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbml0aWFsIHN0b2NrIHF1YW50aXR5LgogICAgICAgICAgZGVmYXVsdDogMA==" } } } ] } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Now that you have successfully tested the integration, lets publish it to make it active and available for use in API hub.

### "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- The following diagram illustrates the workflow you'll be setting up: Objectives In this tutorial, you will complete the following steps: Step 1: Create an Azure App Step 2: Configure Google Cloud resources Step 3: Create and publish an integration in Application Integration Step 4: Execute the integration to ingest API data from Azure APIM to API hub Step 5: Verify and view the ingested API data in API hub Costs In this document, you use the following billable components of Google Cloud: Application Integration To generate a cost estimate based on your projected usage, use the pricing calculator .
- Make sure that you have the following role or roles on the project: API hub Admin ( roles/apihub.admin ) Application Integration Admin ( roles/integrations.admin ) Service Account Admin ( roles/iam.serviceAccountAdmin ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Check for the roles In the Google Cloud console, go to the IAM page.
- Replace the following: <GCP PROJECT ID> : the ID of your Google Cloud project. <GCP REGION> : the region where API hub is provisioned. <AZURE SUBSCRIPTION ID> : your Azure subscription ID. <AZURE TENANT ID> : your Azure tenant ID. <AZURE RESOURCE GROUP> : the name of the Azure resource group that contains your Azure APIM instance. <AZURE APP NAME> : apihub-integration .
- File Description env.sh Main configuration file for the scripts. azure setup.sh Script to configure Azure resources. gcp setup.sh Script to configure Google Cloud resources. azure ip template.json The prebuilt integration JSON file. deploy integration.sh Script to deploy and publish the integration. execute integration.sh Script to trigger the integration.

