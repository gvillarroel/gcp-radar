---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.427Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Apigee Security actions immutability messaging"
feature_slug: "apigee-security-actions-immutability-messaging"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "immutability"
  - "messaging"
  - "actions"
  - "security"
  - "action"
  - "creation"
  - "flow"
---

# Apigee Security actions immutability messaging

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The action creation flow for Apigee Security actions shows an informational message that actions cannot be edited or deleted.

## Extended Definition

The action creation flow for Apigee Security actions shows an informational message that actions cannot be edited or deleted.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### "Enrich API data with custom curation in API hub \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data](https://docs.cloud.google.com/apigee/docs/apihub/tutorials/enrich-api-data)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Find the Apigee X and Hybrid plugin instance, click more vert (Plugin instance actions) and then select See details .
- In the designer toolbar, click more vert (Actions menu) and select Upload .
- Set entities/actions: Select DownloadObject as the action.
- This API allows for the creation, retrieval, update, and deletion of product records.", "deploymentType": { "enumValues": { "values": [ { "id": "apigee" } ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/system-deployment-type" }, "resourceUri": "organizations/api-hub-demo-5/apis/Products-API/revisions/1/environments/test-env", "endpoints": [ "https://googleapis.com/products-api" ], "attributes": { "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment": { "stringValues": { "values": [ "test-env" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-environment" }, "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization": { "stringValues": { "values": [ "api-hub-demo-5" ] }, "attribute": "projects/api-hub-demo-5/locations/us-central1/attributes/plugin-system-apigee-x-and-hybrid-organization" } } }, "originalId": "apis/Products-API/revisions/1/environments/test-env", "originalCreateTime": "2025-07-07T05:23:51.617Z", "originalUpdateTime": "2025-07-07T05:23:51.617Z" } ], "originalId": "apis/Products-API/revisions/1", "originalCreateTime": "2025-07-07T05:23:47.982Z", "originalUpdateTime": "2025-07-07T05:23:47.982Z", "specs": [ { "originalModifiedTime": "2025-07-07T05:23:47.982Z", "spec": { "displayName": "open-api-spec", "specType": { "enumValues": { "values": [ { "id": "openapi" } ] } }, "contents": { "mimeType": "application/yaml", "contents": "b3BlbmFwaTogMy4wLjAKaW5mbzoKICB0aXRsZTogUHJvZHVjdHMgQVBJCiAgdmVyc2lvbjogMS4wLjAKICBkZXNjcmlwdGlvbjogQVBJIGZvciBtYW5hZ2luZyBwcm9kdWN0IGludmVudG9yeS4gVGhpcyBBUEkgYWxsb3dzIGZvciB0aGUgY3JlYXRpb24sIHJldHJpZXZhbCwgdXBkYXRlLCBhbmQgZGVsZXRpb24gb2YgcHJvZHVjdCByZWNvcmRzLgpzZXJ2ZXJzOgogIC0gdXJsOiBodHRwczovL2FwaS5leGFtcGxlLmNvbS9wcm9kdWN0cy92MQogICAgZGVzY3JpcHRpb246IFByb2R1Y3Rpb24gc2VydmVyIGZvciB0aGUgUHJvZHVjdHMgQVBJLgpwYXRoczoKICAvcHJvZHVjdHM6CiAgICBnZXQ6CiAgICAgIHN1bW1hcnk6IEdldCBhbGwgcHJvZHVjdHMKICAgICAgb3BlcmF0aW9uSWQ6IGdldEFsbFByb2R1Y3RzCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBBIGxpc3Qgb2YgcHJvZHVjdHMgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZC4KICAgICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICAgIGFwcGxpY2F0aW9uL2pzb246CiAgICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICAgdHlwZTogYXJyYXkKICAgICAgICAgICAgICAgIGl0ZW1zOgogICAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgIHBvc3Q6CiAgICAgIHN1bW1hcnk6IEFkZCBhIG5ldyBwcm9kdWN0CiAgICAgIG9wZXJhdGlvbklkOiBhZGRQcm9kdWN0CiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGF0YSB0byBiZSBhZGRlZC4KICAgICAgICBjb250ZW50OgogICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICAgICRyZWY6ICcjL2NvbXBvbmVudHMvc2NoZW1hcy9Qcm9kdWN0SW5wdXQnCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjAxJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBjcmVhdGVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDAwJzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbnZhbGlkIGlucHV0IHByb3ZpZGVkIGZvciBwcm9kdWN0IGNyZWF0aW9uLgogIC9wcm9kdWN0cy97cHJvZHVjdElkfToKICAgIGdldDoKICAgICAgc3VtbWFyeTogR2V0IGEgcHJvZHVjdCBieSBJRAogICAgICBvcGVyYXRpb25JZDogZ2V0UHJvZHVjdEJ5SWQKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gcmV0cmlldmUuCiAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgICBmb3JtYXQ6IHV1aWQKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3QgZGV0YWlscyBzdWNjZXNzZnVsbHkgcmV0cmlldmVkLgogICAgICAgICAgY29udGVudDoKICAgICAgICAgICAgYXBwbGljYXRpb24vanNvbjoKICAgICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgICAkcmVmOiAnIy9jb21wb25lbnRzL3NjaGVtYXMvUHJvZHVjdCcKICAgICAgICAnNDA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IG5vdCBmb3VuZCB3aXRoIHRoZSBnaXZlbiBJRC4KICAgIHB1dDoKICAgICAgc3VtbWFyeTogVXBkYXRlIGFuIGV4aXN0aW5nIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IHVwZGF0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gdXBkYXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlcXVlc3RCb2R5OgogICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgZGVzY3JpcHRpb246IFVwZGF0ZWQgcHJvZHVjdCBkYXRhLgogICAgICAgIGNvbnRlbnQ6CiAgICAgICAgICBhcHBsaWNhdGlvbi9qc29uOgogICAgICAgICAgICBzY2hlbWE6CiAgICAgICAgICAgICAgJHJlZjogJyMvY29tcG9uZW50cy9zY2hlbWFzL1Byb2R1Y3RJbnB1dCcKICAgICAgcmVzcG9uc2VzOgogICAgICAgICcyMDAnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuCiAgICAgICAgJzQwMCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogSW52YWxpZCBpbnB1dCBwcm92aWRlZCBmb3IgcHJvZHVjdCB1cGRhdGUuCiAgICAgICAgJzQwNCc6CiAgICAgICAgICBkZXNjcmlwdGlvbjogUHJvZHVjdCBub3QgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gSUQuCiAgICBkZWxldGU6CiAgICAgIHN1bW1hcnk6IERlbGV0ZSBhIHByb2R1Y3QKICAgICAgb3BlcmF0aW9uSWQ6IGRlbGV0ZVByb2R1Y3QKICAgICAgcGFyYW1ldGVyczoKICAgICAgICAtIG5hbWU6IHByb2R1Y3RJZAogICAgICAgICAgaW46IHBhdGgKICAgICAgICAgIHJlcXVpcmVkOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHByb2R1Y3QgdG8gZGVsZXRlLgogICAgICAgICAgc2NoZW1hOgogICAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgIHJlc3BvbnNlczoKICAgICAgICAnMjA0JzoKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcm9kdWN0IHN1Y2Nlc3NmdWxseSBkZWxldGVkLiBObyBjb250ZW50LgogICAgICAgICc0MDQnOgogICAgICAgICAgZGVzY3JpcHRpb246IFByb2R1Y3Qgbm90IGZvdW5kIHdpdGggdGhlIGdpdmVuIElELgpjb21wb25lbnRzOgogIHNjaGVtYXM6CiAgICBQcm9kdWN0OgogICAgICB0eXBlOiBvYmplY3QKICAgICAgcmVxdWlyZWQ6CiAgICAgICAgLSBpZAogICAgICAgIC0gbmFtZQogICAgICAgIC0gcHJpY2UKICAgICAgcHJvcGVydGllczoKICAgICAgICBpZDoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZm9ybWF0OiB1dWlkCiAgICAgICAgICBkZXNjcmlwdGlvbjogVW5pcXVlIHByb2R1Y3QgaWRlbnRpZmllci4KICAgICAgICBuYW1lOgogICAgICAgICAgdHlwZTogc3RyaW5nCiAgICAgICAgICBkZXNjcmlwdGlvbjogTmFtZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBkZXNjcmlwdGlvbjoKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgbnVsbGFibGU6IHRydWUKICAgICAgICAgIGRlc2NyaXB0aW9uOiBEZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBwcmljZToKICAgICAgICAgIHR5cGU6IG51bWJlcgogICAgICAgICAgZm9ybWF0OiBmbG9hdAogICAgICAgICAgZGVzY3JpcHRpb246IFByaWNlIG9mIHRoZSBwcm9kdWN0LgogICAgICAgIHN0b2NrOgogICAgICAgICAgdHlwZTogaW50ZWdlcgogICAgICAgICAgZm9ybWF0OiBpbnQzMgogICAgICAgICAgZGVzY3JpcHRpb246IEN1cnJlbnQgc3RvY2sgcXVhbnRpdHkuCiAgICAgICAgICBkZWZhdWx0OiAwCiAgICBQcm9kdWN0SW5wdXQ6CiAgICAgIHR5cGU6IG9iamVjdAogICAgICByZXF1aXJlZDoKICAgICAgICAtIG5hbWUKICAgICAgICAtIHByaWNlCiAgICAgIHByb3BlcnRpZXM6CiAgICAgICAgbmFtZToKICAgICAgICAgIHR5cGU6IHN0cmluZwogICAgICAgICAgZGVzY3JpcHRpb246IE5hbWUgb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgZGVzY3JpcHRpb246CiAgICAgICAgICB0eXBlOiBzdHJpbmcKICAgICAgICAgIG51bGxhYmxlOiB0cnVlCiAgICAgICAgICBkZXNjcmlwdGlvbjogRGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2R1Y3QuCiAgICAgICAgcHJpY2U6CiAgICAgICAgICB0eXBlOiBudW1iZXIKICAgICAgICAgIGZvcm1hdDogZmxvYXQKICAgICAgICAgIGRlc2NyaXB0aW9uOiBQcmljZSBvZiB0aGUgcHJvZHVjdC4KICAgICAgICBzdG9jazoKICAgICAgICAgIHR5cGU6IGludGVnZXIKICAgICAgICAgIGZvcm1hdDogaW50MzIKICAgICAgICAgIGRlc2NyaXB0aW9uOiBJbml0aWFsIHN0b2NrIHF1YW50aXR5LgogICAgICAgICAgZGVmYXVsdDogMA==" } } } ] } ], "originalId": "apis/Products-API", "originalUpdateTime": "2025-07-07T05:23:47.982Z" } ] } } Now that you have successfully tested the integration, lets publish it to make it active and available for use in API hub.

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- In the dialog: Select the Environment in which you want to run the debug session. (Optional) From the Filter list, select a filter to apply to all transactions in the debug session you are creating.
- Call the API proxy using curl (or with the URL in a web browser) several times until you see at least one 200 response and one 429 response in the Transactions pane.
- Note: The Debug Tool is available in the Apigee UI and some debug actions can be performed using the API as described in the following tabs.
- In the Transaction map pane, this displays a flow diagram including a SpikeArrest policy with an error icon.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- The target mcp.apigee.internal is also supported for backward compatibility. (Optional) Add a security policy to the MCP Discovery Proxy Before deploying your MCP Discovery Proxy, you can add security policies to enforce security requirements.
- To configure token verification, place an OAuthV2 policy with the VerifyAccessToken operation at the very beginning of the API proxy flow (the beginning of the ProxyEndpoint Preflow ).
- Create an MCP Discovery Proxy. (Optional) Add a security policy to the MCP Discovery Proxy.

