---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.730Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "VerifyAPIKey policy new flow variables"
feature_slug: "verifyapikey-policy-new-flow-variables"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "exposes"
  - "verifyapikey"
  - "group"
  - "variables"
  - "flow"
  - "policy"
---

# VerifyAPIKey policy new flow variables

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The VerifyAPIKey policy now exposes the flow variables app_group_app and app_group_name.

## Extended Definition

The VerifyAPIKey policy now exposes the flow variables app_group_app and app_group_name.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The XML specification for the VerifyAPIKey policy included in the Extension Processor proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <VerifyAPIKey continueOnError="false" enabled="true" name="VA-verify-api-key"> <DisplayName>VA-verify-api-key</DisplayName> <Properties/> <APIKey ref="request.queryparam.x-api-key"/> </VerifyAPIKey> Deploy the new proxy revision.
- Add the VerifyAPIKey policy for API key validation The following sections describe how to use the VerifyAPIKey policy to validate API keys for calls to your backend service using the Extension Processor: Attach the VerifyAPIKey policy to the Extension Processor.
- Attach the VerifyAPIKey policy to the proxy To attach a VerifyAPIKey policy to the Extension Processor proxy: In the Google Cloud console, go to the Apigee > Proxy Development > API Proxies page.
- In the VerifyAPIKey pane, complete the required fields in the Name and Display name sections using the following values: Name : Enter a policy name.

### Secure an API by requiring API keys \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-api-key-validation)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Update the contents of the Assign Message policy to the following: Note: The policy name will change to Remove Query Param apikey once you make this edit. < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "remove-query-param-apikey" > < DisplayName>Remove Query Param apikey < / DisplayName > < Remove > < QueryParams > < QueryParam name = "apikey" / > < / QueryParams > < / Remove > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "request" / > < / AssignMessage > Add the VerifyApiKey and Remove Query Param apikey policies.
- Don't forget to substitute your organization name. curl -v -H "x-apikey: YOUR API KEY " http:// YOUR ENV GROUP HOSTNAME /helloapikey Note that to fully complete the change, you'd also need to configure the Assign Message policy to remove the header instead of the query parameter.
- At runtime, the Verify API Key policy checks that the supplied API key: Is valid Hasn't been revoked Matches the API key for the API product that exposes the requested resources If the key is valid, the request is allowed.
- YOUR API KEY "/> Related topics Here are some topics related to API products and keys: Managing API products API keys Registering app developers Register apps and manage API keys Verify API Key policy API protection often involves additional security such as OAuth , an open protocol that exchanges credentials (like username and password) for access tokens.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- To configure token verification, place an OAuthV2 policy with the VerifyAccessToken operation at the very beginning of the API proxy flow (the beginning of the ProxyEndpoint Preflow ).
- In the proxy flow editor, click control point Add policy step .
- OpenAPI Specification The value of the servers.url field of the OpenAPI specification must be an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed. https://cymbal.products.com If the servers.url host name does not match the hostname of the environment group corresponding to the Apigee environment where the MCP Discovery Proxy is deployed, you will get an error when deploying the proxy.

