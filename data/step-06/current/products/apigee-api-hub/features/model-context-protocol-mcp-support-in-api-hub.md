---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.630Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Model Context Protocol (MCP) support in API hub"
feature_slug: "model-context-protocol-mcp-support-in-api-hub"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/apihub/apis-intro"
keywords:
  - "Model Context Protocol"
  - "MCP tool extraction"
  - "first-class MCP"
  - "MCP registration"
  - "Model Context"
  - "MCP API style"
  - "MCP API management"
  - "MCP"
---

# Model Context Protocol (MCP) support in API hub

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds MCP as a first-class API style in API hub, including registration, management, and tool extraction for MCP APIs.

## Extended Definition

Apigee API hub supports Model Context Protocol (MCP) as an API schema/type, allowing APIs to be registered as MCP APIs in the API hub workflow. In this integration, an API can be exposed through the Apigee Discovery proxy so its MCP operations are surfaced as MCP tools, which developers and agents can discover via MCP protocols (for example, tools listing and version negotiation). The quickstart also shows that successful MCP endpoint setup depends on correctly defined MCP API metadata (such as matching server hostname in the API specification).

## Evidence Summary

The overview page establishes MCP as a supported API schema and references MCP API registration, while the quickstart page provides operational evidence for exposing and discovering MCP tools from MCP APIs via the Apigee Discovery proxy.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)

## Supporting Pages

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically focused on enabling Apigee MCP integration by using the MCP Discovery proxy to expose APIs as MCP tools, which directly defines MCP support behavior.

Evidence snippets:
- This page describes how to use the Apigee Discovery proxy to make your APIs available to Model Context Protocol (MCP) clients in agentic applications as MCP tools.
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- A successful response looks similar to the following: { "id" : 1 , "jsonrpc" : "2.0" , "result" : { "tools" : [ { "description" : "Returns a list of artists" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "listArtists" }, { "description" : "Create a new artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "createArtist" }, { "description" : "Info for a specific artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "showArtistByUsername" } ] } } Now that your endpoint is initialized, your MCP tools are discoverable by developers and agents using your API product.
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.

### API resources overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/apis-intro](https://docs.cloud.google.com/apigee/docs/apihub/apis-intro)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- API hub supports various specification types, including: OpenAPI for REST APIs gRPC proto files for gRPC APIs MCP schema for Model Context Protocol (MCP) APIs For more information about specifications, see Specifications overview .
- What's next Register an API Register an MCP API Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- API operations and MCP tools : These are the individual functions or capabilities represented as distinct entities of your API.
- For more information about API operations and MCP tools, see API operations and MCP tools .

