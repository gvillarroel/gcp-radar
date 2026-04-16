---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.423Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Debug session viewer transaction output"
feature_slug: "debug-session-viewer-transaction-output"
latest_feature_date: "2025-10-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "session"
  - "viewer"
  - "print"
  - "output"
  - "transaction"
  - "display"
  - "debug"
---

# Debug session viewer transaction output

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Debug session viewer can display print() output for all transactions or a selected transaction in a Transaction output window.

## Extended Definition

The Debug session viewer can display print() output for all transactions or a selected transaction in a Transaction output window.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the dialog: Select the Environment in which you want to run the debug session. (Optional) From the Filter list, select a filter to apply to all transactions in the debug session you are creating.
- A debug session is deleted within 24 hours of the time it is completed, so if you want to view the session after that time, you need to download it before then.
- In the Transaction map pane, this displays a flow diagram including a SpikeArrest policy with an error icon.
- The default is None (All transactions) , which includes all transactions in the debug data.

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Sample Output You should see the following test output: { "apiMetadataList": { "apiMetadata": [ { "api": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API", "displayName": "Products-API", "fingerprint": "products-api" }, "versions": [ { "version": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API/versions/version-1", "displayName": "version-1" }, "deployments": [ { "deployment": { "displayName": "Products-API", "description": "API for managing product inventory.
- Sample test input Use the following sample input: { "apiMetadataList": { "apiMetadata": [ { "api": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API", "displayName": "Products-API", "fingerprint": "products-api" }, "versions": [ { "version": { "name": "projects/api-hub-demo-5/locations/us-central1/apis/api-hub-demo-5-Products-API/versions/version-1", "displayName": "version-1" }, "deployments": [ { "deployment": { "displayName": "Products-API", "description": "API for managing product inventory.
- Data mapping task (Construct GCS request payload) Input: connectorInputPayload (Fetch spec from GCS) .SET PROPERTY( apiMetadata .GET PROPERTY("api") .GET PROPERTY("displayName") .TO STRING() .CONCAT(".yaml") .TO LOWERCASE() , "ObjectFilePath" ) Output: ConnectorInputPayload (Fetch spec from GCS) Constructs the input payload for ConnectorInputPayload .
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z", "specs": [ { "originalModifiedTime": "2025-07-07T05:23:47.982Z", "spec": { "displayName": "open-api-spec", "specType": { "enumValues": { "values": [ { "id": "openapi" } ] } }, "contents": { "mimeType": "application/yaml", "contents": "b3BlbmFwaTogMy4wLjAKaW5mbzoKICB0aXRsZTogUHJvZHVjdHMgQVBJCiAgdmVyc2lvbjogMS4wLjAKICBkZXNjcmlwdGlvbjogQVBJIGZvciBtYW5hZ2luZyBwcm9kdWN0IGludmVudG9yeS4gVGhpcyBBUEkgYWxsb3dzIGZvciB0aGUgY3JlYXRpb24sIHJldHJpZXZhbCwgdXBkYXRlLCBhbmQgZGVsZXRpb24gb2YgcHJvZHVjdCByZWNvcmRzLgpzZXJ2ZXJzOgogIC0gdXJsOiBodHRwczovL2FwaS5leGFtcGxlLmNvbS9wcm9kdWN0cy92MQogICAgZGVzY3JpcHRpb246IFByb2R1Y3Rpb24gc2VydmVyIGZvciB0aGUgUHJvZHVjdHMgQVBJLgpwYXRoczoKICAvcHJvZHVjdHM6CiAgICBnZXQ6CiAgICAgIHN1bW1hcnk6IEdldCBhbGwgcHJvZHVjdHMKICAgICAgb3BlcmF0aW9uSWQ6IGdldEFsbFByb2R1Y3RzCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBBIGxpc3Qgb2YgcHJvZHVjdHMgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZC4KICAgICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICAgIGFwcGxpY2F0aW9uL2pzb246CiAgICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICAgdHlwZTogYXJyYXkKICAgICAgICAgICAgICAgIGl0ZW1zOgogICAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgIHBvc3Q6CiAgICAgIHN1bW1hcnk6IEFkZCBhIG5ldyBwcm9kdWN0CiAgICAgIG9wZXJhdGlvbklkOiBhZGRQcm9kdWN0CiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGF0YSB0byBiZSBhZGRlZC4KICAgICAgICBjb250ZW50OgogICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICRyZWY6ICcjL2NvbXBvbmVudHMvc2NoZW1hcy9Qcm9kdWN0SW5wdXQnCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAxJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBjcmVhdGVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbnZhbGlkIGlucHV0IHByb3ZpZGVkIGZvciBwcm9kdWN0IGNyZWF0aW9uLgogIC9wcm9kdWN0cy97cHJvZHVjdElkfToKICAgIGdldDoKICAgICAgc3VtbWFyeTogR2V0IGEgcHJvZHVjdCBieSBJRAogICAgICBvcGVyYXRpb25JZDogZ2V0UHJvZHVjdEJ5SWQKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gcmV0cmlldmUuCiAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgICBmb3JtYXQ6IHV1aWQKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGV0YWlscyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IG5vdCBmb3VuZCB3aXRoIHRoZSBnaXZlbiBJRC4KICAgIHB1dDoKICAgICAgc3VtbWFyeTogVXBkYXRlIGFuIGV4aXN0aW5nIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IHVwZGF0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gdXBkYXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFVwZGF0ZWQgcHJvZHVjdCBkYXRhLgogICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICBhcHBsaWNhdGlvbi9qc29uOgogICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgJHJlZjogJyMvY29tcG9uZW50cy9zY2hlbWFzL1Byb2R1Y3RJbnB1dCcKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuCiAgICAgICAgJzQwMCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogSW52YWxpZCBpbnB1dCBwcm92aWRlZCBmb3IgcHJvZHVjdCB1cGRhdGUuCiAgICAgICAgJzQwNCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogUHJvZHVjdCBub3QgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gSUQuCiAgICBkZWxldGU6CiAgICAgIHN1bW1hcnk6IERlbGV0ZSBhIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IGRlbGV0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gZGVsZXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBkZWxldGVkLiBObyBjb250ZW50LgogICAgICAgICc0MDQnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgbm90IGZvdW5kIHdpdGggdGhlIGdpdmVuIElELgpjb21wb25lbnRzOgogIHNjaGVtYXM6CiAgICBQcm9kdWN0OgogICAgICB0eXBlOiBvYmplY3QKICAgICAgcmVxdWlyZWQ6CiAgICAgICAgLSBpZAogICAgICAgIC0gbmFtZQogICAgICAgIC0gcHJpY2UKICAgICAgcHJvcGVydGllczoKICAgICAgICBpZDoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIHByb2R1Y3QgaWRlbnRpZmllci4KICAgICAgICBuYW1lOgogICAgICAgICAgdHlwZTogc3RyaW5nCiAgICAgICAgICBkZXNjcmlwdGlvbjogTmFtZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBkZXNjcmlwdGlvbjoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgbnVsbGFibGU6IHRydWUKICAgICAgICAgIGRlc2NyaXB0aW9uOiBEZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBwcmljZToKICAgICAgICAgIHR5cGU6IG51bWJlcgogICAgICAgICAgZm9ybWF0OiBmbG9hdAogICAgICAgICAgZGVzY3JpcHRpb246IFByaWNlIG9mIHRoZSBwcm9kdWN0LgogICAgICAgIHN0b2NrOgogICAgICAgICAgdHlwZTogaW50ZWdlcgogICAgICAgICAgZm9ybWF0OiBpbnQzMgogICAgICAgICAgZGVzY3JpcHRpb246IEN1cnJlbnQgc3RvY2sgcXVhbnRpdHkuCiAgICAgICAgICBkZWZhdWx0OiAwCiAgICBQcm9kdWN0SW5wdXQ6CiAgICAgIHR5cGU6IG9iamVjdAogICAgICByZXF1aXJlZDoKICAgICAgICAtIG5hbWUKICAgICAgICAtIHByaWNlCiAgICAgIHByb3BlcnRpZXM6CiAgICAgICAgbmFtZToKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZGVzY3JpcHRpb246IE5hbWUgb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgZGVzY3JpcHRpb246CiAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgIG51bGxhYmxlOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogRGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgcHJpY2U6CiAgICAgICAgICB0eXBlOiBudW1iZXIKICAgICAgICAgIGZvcm1hdDogZmxvYXQKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcmljZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBzdG9jazoKICAgICAgICAgIHR5cGU6IGludGVnZXIKICAgICAgICAgIGZvcm1hdDogaW50MzIKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbml0aWFsIHN0b2NrIHF1YW50aXR5LgogICAgICAgICAgZGVmYXVsdDogMA==" } } } ] } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Now that you have successfully tested the integration, lets publish it to make it active and available for use in API hub.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $ORG NAME $REGION $INSTANCE $VPC NETWORK NAME $SUBNET Configure an authentication token To configure an authentication token, run the following command: export TOKEN = $( gcloud auth print-access-token ) echo $TOKEN Configure a load balancer for a backend service The following sections describe the steps to set up a global external Application Load Balancer for a backend service, using httpbin.org as an example: Create a global external Application Load Balancer .
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Configure the EventFlow in the proxy: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.

