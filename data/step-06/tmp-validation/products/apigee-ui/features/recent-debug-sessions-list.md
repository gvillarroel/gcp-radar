---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.426Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Recent debug sessions list"
feature_slug: "recent-debug-sessions-list"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
keywords:
  - "sessions"
  - "recent"
  - "show"
  - "list"
  - "debug"
---

# Recent debug sessions list

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The Apigee Debug UI can show recent debug sessions for a proxy across revisions, environments, and deployment states.

## Extended Definition

The Apigee Debug UI can show recent debug sessions for a proxy across revisions, environments, and deployment states.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)

## Supporting Pages

### View message data with the Debug view \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/view-with-trace)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- In the dialog: Select the Environment in which you want to run the debug session. (Optional) From the Filter list, select a filter to apply to all transactions in the debug session you are creating.
- Home Documentation Application development Apigee Guides Send feedback View message data with the Debug view Stay organized with collections Save and categorize content based on your preferences.
- View message data The Debug view in the Apigee Proxy Editor lets you view headers, variables, objects, and other details such as response time in the API proxy request and response flow.
- To use the Debug view in the Apigee UI to see what happens when the SpikeArrest policy rate is exceeded: In the Google Cloud console, go to the Proxy development > API Proxies page.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- A successful response looks similar to the following: { "id" : 1 , "jsonrpc" : "2.0" , "result" : { "tools" : [ { "description" : "Returns a list of artists" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "listArtists" }, { "description" : "Create a new artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "createArtist" }, { "description" : "Info for a specific artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "showArtistByUsername" } ] } } Now that your endpoint is initialized, your MCP tools are discoverable by developers and agents using your API product.
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.
- The following table shows the hostname configuration in the OpenAPI specification and the corresponding hostname configuration in the Apigee environment group: Component Required Configuration Example Value Supporting Information Apigee Environment Group Hostnames must be configured in the environment group. cymbal.products.com , internal.products.com Environment groups enable routing to a group of environments using a hostname.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource types k8s container Metric cassandra/clientrequest latency Filter By scope = Write and unit = 99thPercentile Group By scope , unit , and all k8s container resource type labels Aggregator sum Alert consideration If write requests latency SLI consistently shows 99th percentile latency trending upwards continuously.
- Resource types k8s container Metric cassandra/clientrequest latency Filter By scope = Read and unit = 99thPercentile Group By scope , unit , and all k8s container resource type labels Aggregator sum Alert consideration If read requests latency SLI consistently shows 99th percentile latency trending upwards continuously.
- Version 1.10 keyboard arrow down Supported versions: v1.16 (latest) v1.15 v1.14 List of supported versions Unsupported versions: v1.13 v1.12 v1.11 v1.10 v1.9 v1.8 v1.7 v1.6 v1.5 v1.4 v1.3 v1.2 v1.1 Overview This guide provides guidelines on what to monitor and how to monitor an Apigee Hybrid deployment.
- However, a request rate chart can provide useful information about any unusual abnormal traffic spikes or dips during debugging any issue related to traffic (read, write, response code, etc).

