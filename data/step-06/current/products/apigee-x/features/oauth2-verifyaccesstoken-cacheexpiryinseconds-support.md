---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.764Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "OAuth2 VerifyAccessToken CacheExpiryInSeconds support"
feature_slug: "oauth2-verifyaccesstoken-cacheexpiryinseconds-support"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
keywords:
  - "verifyaccesstoken"
  - "customize"
  - "oauth2"
  - "action"
  - "cacheexpiryinseconds"
  - "supports"
  - "policy"
---

# OAuth2 VerifyAccessToken CacheExpiryInSeconds support

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The VerifyAccessToken action of the OAuth2 policy now supports CacheExpiryInSeconds to customize cached token expiration duration.

## Extended Definition

The VerifyAccessToken action of the OAuth2 policy now supports CacheExpiryInSeconds to customize cached token expiration duration.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)

## Supporting Pages

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- To configure token verification, place an OAuthV2 policy with the VerifyAccessToken operation at the very beginning of the API proxy flow (the beginning of the ProxyEndpoint Preflow ).
- To add the VerifyAccessToken policy: In the proxy details page, click the Develop tab.
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- The target mcp.apigee.internal is also supported for backward compatibility. (Optional) Add a security policy to the MCP Discovery Proxy Before deploying your MCP Discovery Proxy, you can add security policies to enforce security requirements.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response like this: { "issued at" : "1466025769306" , "application name" : "716bbe61-f14a-4d85-9b56-a62ff8e0d347" , "scope" : "" , "status" : "approved" , "api product list" : "[helloworld oauth2-Product]" , "expires in" : "3599" , //--in seconds "developer.email" : "nigel@example.com" , "token type" : "BearerToken" , "client id" : "xNnREu1DNGfiwzQZ5HUN8IAUwZSW1GZW" , "access token" : "GTPY9VUHCqKVMRB0cHxnmAp0RXc0" , "organization name" : "myOrg" , "refresh token expires in" : "0" , //--in seconds "refresh count" : "0" } You got your OAuth 2.0 access token!
- Click the GenerateAccessTokenClient policy in the Request pane: The following XML configuration is displayed: < OAuthV2 name = "GenerateAccessTokenClient" > < ! -- This policy generates an OAuth 2.0 access token using the client credentials grant type -- > < Operation>GenerateAccessToken < / Operation > < ! -- This is in milliseconds , so expire in an hour -- > < ExpiresIn>3600000 < / ExpiresIn > < SupportedGrantTypes > < ! -- This part is very important : most real OAuth 2.0 apps will want to use other grant types .
- In this case it is important to NOT include the "client credentials" type because it allows a client to get access to a token with no user authentication -- > < GrantType>client credentials < / GrantType > < / SupportedGrantTypes > < GrantType>request . queryparam . grant type < / GrantType > < GenerateResponse / > < / OAuthV2 > The configuration includes the following: The <Operation> , which can be one of several predefined values, defines what the policy is going to do.
- Click the Verify OAuth v2.0 Access Token icon in the right-hand pane and look at the XML below it in the text editor. <OAuthV2 async="false" continueOnError="false" enabled="true" name="verify-oauth-v2-access-token"> <DisplayName>Verify OAuth v2.0 Access Token</DisplayName> <Operation>VerifyAccessToken</Operation> </OAuthV2> Notice that the <Operation> is VerifyAccessToken .

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference-2`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- Home Documentation Application development Apigee Guides Send feedback Step 6: Attach a policy Stay organized with collections Save and categorize content based on your preferences.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.

