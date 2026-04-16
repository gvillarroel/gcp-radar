---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.757Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee environment type tiers"
feature_slug: "apigee-environment-type-tiers"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "tiers"
  - "comprehensive"
  - "intermediate"
  - "environment"
  - "type"
  - "base"
  - "types"
---

# Apigee environment type tiers

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

New environment types—Base, Intermediate, and Comprehensive—were introduced with differing capabilities and pricing profiles.

## Extended Definition

New environment types—Base, Intermediate, and Comprehensive—were introduced with differing capabilities and pricing profiles.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Test the semantic caching policies To test the semantic caching policies: Send a request to the proxy using the following command: curl https:// $RUNTIME HOSTNAME / PROXY NAME -H 'Content-Type: application/json' --data '{ "contents": [ { "role": "user", "parts": [ { "text": "Why is the sky blue?" } ] } ] }' Replace PROXY NAME with the basepath of the API proxy you deployed in the previous step.
- Confirm that you have a Comprehensive environment available in your Apigee instance.
- Semantic caching policies can only be deployed in Comprehensive environments.
- The environment must be a Comprehensive environment.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the Model Armor-specific considerations, note the following: The Model Armor policies do not support using .pdf or other files types as input for prompts.
- Confirm that you have a Comprehensive environment available in your Apigee instance.
- Model Armor policies can only be deployed in Comprehensive environments.
- The environment must be a Comprehensive environment.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- To initialize and test your MCP server, send the following request to your MCP endpoint: curl -X POST "https:// MCP ENDPOINT URL /mcp" \ -H "Content-Type: application/json" \ -d '{ "jsonrpc": "2.0", "id": 1, "method": "initialize", "params": { "protocolVersion": " MCP PROTOCOL VERSION " } }' \ -H "Authorization: Bearer TOKEN " Replace the following: MCP ENDPOINT URL : your MCP endpoint base URI.
- Send a request to the tools/list method for your Apigee proxy: curl - X POST "https:// MCP ENDPOINT URL /mcp" \ - H "Content-Type: application/json" \ - H "MCP-Protocol-Version: MCP PROTOCOL VERSION " \ - d '{ "jsonrpc" : "2.0" , "id" : 1 , "method" : "tools/list" , "params" : {} } ' \ -H "Authorization: Bearer TOKEN " Replace the following: MCP ENDPOINT URL : your MCP endpoint base URI.
- The environment must be a Comprehensive environment.

