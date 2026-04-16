---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:04:10.358Z"
product_name: "Apigee Monetization"
product_slug: "apigee-monetization"
feature_name: "rateplans API paymentFundingModel Field"
feature_slug: "rateplans-api-paymentfundingmodel-field"
latest_feature_date: "2021-11-03"
deprecation_date: "2021-11-03"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint"
keywords:
  - "paymentfundingmodel"
  - "deprecated"
  - "rateplans"
  - "longer"
  - "field"
  - "2021"
  - "available"
---

# rateplans API paymentFundingModel Field

Product: Apigee Monetization
Coverage: MEDIUM

## Step 02 Summary

Support for the paymentFundingModel field in the rateplans API is no longer available; deprecated on 2021-11-03.

## Extended Definition

Support for the paymentFundingModel field in the rateplans API is no longer available; deprecated on 2021-11-03.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint)

## Supporting Pages

### Managing rate plans for API products \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans](https://docs.cloud.google.com/apigee/docs/api-platform/monetization/manage-rate-plans)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To publish the rate plan, issue a PUT request to the following API, passing the modified request body in your request: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME For example, the following changes the status of the rateplan1 rate plan to PUBLISHED and sets the activation time to April 1, 2021, specified as milliseconds since epoch: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "currencyCode":"USD", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"3", "nanos":0 } }], "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"5" }], "state":"PUBLISHED", "startTime": 1617302588000 }' For more information about the fields you can specify in the request body, see Resource: RatePlans .
- To update a rate plan, issue a PUT request to the following API, passing the modified request body in your request: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME For example, the following changes the consumption-based fee to 5 ; and the revenue share percentage to 6.5% all other configuration settings are included to ensure that they are maintained: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "currencyCode":"USD", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"5" , "nanos":0 } }], "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"6.5" }], "state":"DRAFT", "startTime": 1617302588000 }' For more information about the fields you can specify in the request body, see Resource: RatePlans .
- Required fields for draft rate plan Required fields for published rate plan apiproduct displayName state apiproduct billingPeriod currencyCode displayName startTime state Note: To publish a rate plan, see Publishing a rate plan For example, the following API call creates a draft rate plan named myrateplan5 associated with the HelloworldProduct API product: curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/HelloworldProduct/rateplans" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct":"HelloworldProduct", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"3", "nanos":0 } }], "currencyCode":"USD", "displayName":"myrateplan5", "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"1" }], "setupFee":{ "units":"10", "nanos":0 }, "state":"DRAFT" }' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .
- To update the rate plan with the new configuration, issue a PUT request to the following API, passing the modified request body in your request: https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME For example, the following sets the activation time to April 1, 2021 ( 1617302588000 epoch time): curl "https://apigee.googleapis.com/v1/organizations/ $ORG /apiproducts/ $APIPRODUCT /rateplans/ $RATEPLAN NAME " \ -X PUT \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "apiproduct": "HelloworldProduct", "displayName": "myrateplan3", "currencyCode":"USD", "billingPeriod":"MONTHLY", "consumptionPricingType":"FIXED PER UNIT", "consumptionPricingRates":[{ "fee":{ "units":"3", "nanos":0 } }], "revenueShareType":"FIXED", "revenueShareRates":[{ "sharePercentage":"5" }], "state":"DRAFT", "startTime": 1617302588000 }' Where $TOKEN is set to your OAuth 2.0 access token, as described in Obtaining an OAuth 2.0 access token .

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.
- OpenAPI Specification The value of the servers.url field of the OpenAPI specification must be an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed. https://cymbal.products.com If the servers.url host name does not match the hostname of the environment group corresponding to the Apigee environment where the MCP Discovery Proxy is deployed, you will get an error when deploying the proxy.
- After the proxy is deployed, confirm that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.

### Step 5: Change the target endpoint \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

