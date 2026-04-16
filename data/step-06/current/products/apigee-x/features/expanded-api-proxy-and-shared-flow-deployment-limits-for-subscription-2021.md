---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.749Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Expanded API proxy and shared-flow deployment limits for Subscription 2021"
feature_slug: "expanded-api-proxy-and-shared-flow-deployment-limits-for-subscription-2021"
latest_feature_date: "2024-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote"
keywords:
  - "deployment"
  - "shared"
  - "subscription"
  - "2021"
  - "expanded"
  - "limits"
  - "flow"
  - "proxy"
---

# Expanded API proxy and shared-flow deployment limits for Subscription 2021

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Subscription 2021 upgrade expanded deployment quotas, including 75 shared-flow deployments per environment and 4,250 total deployment units per organization.

## Extended Definition

The Subscription 2021 upgrade expanded deployment quotas, including 75 shared-flow deployments per environment and 4,250 total deployment units per organization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote)

## Supporting Pages

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to Apigee Entitlements and billing Whether the paid organization uses a Subscription or Pay-as-you-go pricing model, the items that are metered for billing purposes are: environments, API calls, and proxy deployments.
- Your total proxy deployment entitlement is the sum of the entitlement supplied in your Subscription tier plus additional entitlement obtained via Proxy Deployment Packs.
- Under a Subscription plan, Google does not limit proxy deployments to your entitlement.
- If you deploy more proxies than your entitlement allows, thus exceeding your proxy deployment entitlement, Apigee continues to allow you to deploy new proxies, and Apigee continues to serve API calls.

### "Step 8: Promote an archive to production \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The file has been updated to include the helloworld API proxy in the proxies deployment array, as shown below: { "proxies": [ "helloworld" ], "sharedflows": [] } Deploy an archive of your API proxy configuration to the prod environment in your Apigee organization.
- Run the following command to view all archive deployments in the prod environment: gcloud beta apigee archives list --environment=prod The following provides an example of the response: Using Apigee organization 'prod' ARCHIVE ID ENVIRONMENT DEPLOYED AT LABELS OPERATION STATUS vrytwbhso558oil53m prod 2021-04-20 21:20:53 release=052021.1 Deployed Congratulations!
- Select the helloworld API proxy to add it to the deployment and click OK .
- Using Apigee organization 'prod' done: true metadata: '@type': type.googleapis.com/google.cloud.apigee.v1.OperationMetadata operationType: INSERT state: IN PROGRESS targetResourceName: uri name: organizations/prod/operations/ $OPERATION ID organization: prod response: '@type': type.googleapis.com/google.cloud.apigee.v1.CanaryEvaluation control: 1-5-0-20210319-071117-ghq74 endTime: '2021-03-20T06:15:44.329363950Z' metricLabels: env: test location: us-central1 name: uri startTime: '2021-03-20T06:14:44.306534584Z' treatment: 1-5-0-20210319-190954-if0wk verdict: NONE uuid: $OPERATION ID Repeat the previous step until state is set to FINISHED indicating that the archive depoloyment is complete.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- To configure token verification, place an OAuthV2 policy with the VerifyAccessToken operation at the very beginning of the API proxy flow (the beginning of the ProxyEndpoint Preflow ).
- The MCP Discovery proxy is available for Subscription, Pay-as-you-go and evaluation organizations.
- In the Deploy (optional) section, you can skip the deployment of your proxy for now.

