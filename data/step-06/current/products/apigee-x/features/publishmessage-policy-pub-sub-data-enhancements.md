---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.736Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "PublishMessage policy Pub/Sub data enhancements"
feature_slug: "publishmessage-policy-pub-sub-data-enhancements"
latest_feature_date: "2025-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "enhancements"
  - "publishmessage"
  - "request"
  - "supports"
  - "policy"
---

# PublishMessage policy Pub/Sub data enhancements

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The PublishMessage policy now supports using request or response message content as the Pub/Sub data source and supports string attributes for messages.

## Extended Definition

The PublishMessage policy now supports using request or response message content as the Pub/Sub data source and supports string attributes for messages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- Home Documentation Application development Apigee Guides Send feedback Step 6: Attach a policy Stay organized with collections Save and categorize content based on your preferences.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- What you'll learn Through this tutorial, you'll learn to: Add a policy that affects the request and response.
- Add the SpikeArrest policy In this tutorial, you'll add and configure the SpikeArrest policy to guard the target service against sudden traffic spikes that can be caused by an increase in usage, buggy clients, or malicious attacks.
- Home Documentation Application development Apigee Guides Send feedback Add the SpikeArrest policy to your API Stay organized with collections Save and categorize content based on your preferences.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.
- To initialize and test your MCP server, send the following request to your MCP endpoint: curl -X POST "https:// MCP ENDPOINT URL /mcp" \ -H "Content-Type: application/json" \ -d '{ "jsonrpc": "2.0", "id": 1, "method": "initialize", "params": { "protocolVersion": " MCP PROTOCOL VERSION " } }' \ -H "Authorization: Bearer TOKEN " Replace the following: MCP ENDPOINT URL : your MCP endpoint base URI.
- Send a request to the tools/list method for your Apigee proxy: curl - X POST "https:// MCP ENDPOINT URL /mcp" \ - H "Content-Type: application/json" \ - H "MCP-Protocol-Version: MCP PROTOCOL VERSION " \ - d '{ "jsonrpc" : "2.0" , "id" : 1 , "method" : "tools/list" , "params" : {} } ' \ -H "Authorization: Bearer TOKEN " Replace the following: MCP ENDPOINT URL : your MCP endpoint base URI.

