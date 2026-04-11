---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:36.639Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Get started with API hub page"
feature_slug: "get-started-with-api-hub-page"
latest_feature_date: "2024-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/quickstart-intro"
keywords:
  - "onboarding guidance"
  - "first steps"
  - "quick start"
  - "getting started"
  - "Get started with API hub"
  - "Get started page"
  - "quickstart"
  - "FAQ"
---

# Get started with API hub page

Product: Apigee API hub
Coverage: LOW

## Step 02 Summary

API hub added a dedicated Get started page in the interface with onboarding guidance and an FAQ.

## Extended Definition

Apigee API hub includes a quickstart-style onboarding documentation page (`quickstart-intro`) that groups initial setup guides for getting started. The listed quickstarts in this page cover first-step tasks such as creating Eventarc triggers, editing and creating attributes, and auto-registering Apigee API proxies, indicating the feature is primarily onboarding guidance for API hub setup. Evidence does not explicitly confirm an in-product dedicated "Get started" interface page with FAQ content.

## Evidence Summary

The cited page shows API hub quickstart/onboarding guidance topics, but does not provide direct proof of a specific UI Get started page or FAQ section.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-intro](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-intro)

## Supporting Pages

### Quickstarts \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/quickstart-intro](https://docs.cloud.google.com/apigee/docs/apihub/quickstart-intro)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback Quickstarts Stay organized with collections Save and categorize content based on your preferences.
- Create an Eventarc trigger Use this quickstart to learn how to trigger executions based on the events occurring in API hub.
- Edit and create attributes Use this quickstart to learn how to edit system attributes and add user-defined attributes.
- Auto-register Apigee API proxies Use this quickstart to add Apigee API proxies to API hub.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: The document is an onboarding-focused guide with prerequisite steps, useful for start-up context, but it does not specifically define a dedicated API hub interface page or its FAQ flow.

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- MCP in Apigee supports the following OpenAPI versions: 3.0.0 3.0.1 3.0.2 3.0.3 This quickstart uses a sample OpenAPI 3.0.x specification with three API operations: GET /artists : Returns a list of artists.
- To create the OpenAPI 3.0.x specification, do the following: Create a new mcp-quickstart-openapi.yaml file in the oas directory of your API proxy bundle.

### DNS setup quickstart \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/dns-quickstart](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/dns-quickstart)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application development Apigee Guides Send feedback DNS setup quickstart Stay organized with collections Save and categorize content based on your preferences.

