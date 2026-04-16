---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:55:46.930Z"
product_name: "Apigee Integrated Portal"
product_slug: "apigee-integrated-portal"
feature_name: "Portal catalog pagination"
feature_slug: "portal-catalog-pagination"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "pagination"
  - "requests"
  - "catalog"
  - "items"
  - "list"
  - "view"
  - "adds"
---

# Portal catalog pagination

Product: Apigee Integrated Portal
Coverage: MEDIUM

## Step 02 Summary

Adds pagination support to catalog items list view requests in the portals service API; Adds pagination to the catalog items list view when requesting data from the portals service.

## Extended Definition

Adds pagination support to catalog items list view requests in the portals service API; Adds pagination to the catalog items list view when requesting data from the portals service.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### Publishing your APIs \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis](https://docs.cloud.google.com/apigee/docs/api-platform/publish/portal/publish-apis)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Categories tab in the API catalog displays the list of the categories that have been defined for your portal The APIs page lets you View the categories and the APIs to which they are tagged Add a category Edit a category Delete a category Manage APIs published to your portal.
- Pagination notes: Page size: Use pageSize to specify the number of list items to return in one page.
- Response payload: { "status": "success", "message": "one page of apidocs returned", "requestId": "918815495", "data": [ { "siteId": "my-org-myportal", "title": "Hello New World", "description": "Simple hello new world example", "specId": "apigee", "modified": "1699146887000", "anonAllowed": true, "imageUrl": "/files/camper1.jpg?v=1695841491415", "id": "381054", "categoryIds": [ "e0518597-ece2-4d7d-ba7c-d1793df0f8db", "61c1014c-89c9-40e6-be3c-69cca3505620" ], "published": true, "apiProductName": "Hello New World" } ], "nextPageToken": "7zcqrin9l6xhi4nbrb9" } Page token: Use pageToken to retrieve subsequent pages when there are more than one: curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs ?pageSize= PAGE SIZE &pageToken= PAGE TOKEN " \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Replace: PAGE SIZE with the number of list items to return in one page.
- The APIs tab lets you: View the details of the APIs available on your portal Add an API to your portal Edit an API on your portal by performing one or more of the following tasks: Manage the API documentation Publish or unpublish an API Manage the visibility of an API Manage the callback URL for an API Manage the image for an API card Tag an API using categories Edit the API title and description Remove an API from your portal Manage the categories Quickly identify orphaned APIs whose associated API product has been removed from Google Cloud console , and re-create the API product or delete the API from your portal curl To list APIs using organizations.sites.apidocs/list : curl -X GET "https://apigee.googleapis.com/v1/organizations/ ORG NAME /sites/ SITE ID /apidocs" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" Replace the following: ORG NAME with the name of the organization.

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the dialog: Select the Environment in which you want to run the debug session. (Optional) From the Filter list, select a filter to apply to all transactions in the debug session you are creating.
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- Apigee Analytics allows you to filter metrics to distinguish between standard API traffic and MCP-specific traffic, and to see usage volume for tools/list versus tools/call requests.
- A successful response looks similar to the following: { "id" : 1 , "jsonrpc" : "2.0" , "result" : { "tools" : [ { "description" : "Returns a list of artists" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "listArtists" }, { "description" : "Create a new artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "createArtist" }, { "description" : "Info for a specific artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "showArtistByUsername" } ] } } Now that your endpoint is initialized, your MCP tools are discoverable by developers and agents using your API product.
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.

