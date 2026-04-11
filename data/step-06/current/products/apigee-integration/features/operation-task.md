---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:40.078Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Operation task"
feature_slug: "operation-task"
latest_feature_date: "2023-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote"
keywords:
  - "Long-running operation task"
  - "Async operation integration task"
  - "Operation polling task"
  - "Operation action task"
  - "Operation status"
  - "Poll Operation"
  - "Operation task"
  - "Operation"
---

# Operation task

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Adds an Operation integration task in preview.

## Extended Definition

In this documented Apigee workflow, an operation task is handled as a long-running operation: a command initiates an action and returns an operation ID with metadata such as state, and users poll that operation until it reaches completion. In the cited flow, deployment uses `gcloud beta apigee archives deploy` to start the operation and `gcloud beta apigee operations describe <OPERATION_ID>` to check status until the state indicates completion.

## Evidence Summary

The page shows asynchronous operation handling (start + operation ID + polling status) for Apigee archive deployment, which partially aligns with an Operation task pattern but is not a full feature specification.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote)

## Supporting Pages

### "Step 8: Promote an archive to production \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-promote)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a deployment guide that briefly references long-running operations, but it does not describe an Operation integration task feature.

Evidence snippets:
- Run the following command to view all archive deployments in the prod environment: gcloud beta apigee archives list --environment=prod The following provides an example of the response: Using Apigee organization 'prod' ARCHIVE ID ENVIRONMENT DEPLOYED AT LABELS OPERATION STATUS vrytwbhso558oil53m prod 2021-04-20 21:20:53 release=052021.1 Deployed Congratulations!
- Using Apigee organization 'prod' done: true metadata: '@type': type.googleapis.com/google.cloud.apigee.v1.OperationMetadata operationType: INSERT state: IN PROGRESS targetResourceName: uri name: organizations/prod/operations/ $OPERATION ID organization: prod response: '@type': type.googleapis.com/google.cloud.apigee.v1.CanaryEvaluation control: 1-5-0-20210319-071117-ghq74 endTime: '2021-03-20T06:15:44.329363950Z' metricLabels: env: test location: us-central1 name: uri startTime: '2021-03-20T06:14:44.306534584Z' treatment: 1-5-0-20210319-190954-if0wk verdict: NONE uuid: $OPERATION ID Repeat the previous step until state is set to FINISHED indicating that the archive depoloyment is complete.
- In the Terminal tab in Apigee VS Code, navigate to the myapigeeworkspace directory. cd myapigeeworkspace Run the following command: gcloud beta apigee archives deploy --environment=prod --labels=release=052021.1 The following provides an example of the response: Using Apigee organization dev Waiting for operation [ $OPERATION ID ] to complete...⠹ Run the following command to check the status of the operation, replacing $OPERATION ID with the operation ID returned in the previous call: gcloud beta apigee operations describe $OPERATION ID The following provides an example of the response.
- This triggers a long-running operation that can take several minutes to complete.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- Create an OpenAPI 3.0.x specification describing your API operations Before you create and deploy your MCP Discovery Proxy, you need to create an OpenAPI 3.0.x specification that describes the API operations that you want to expose as MCP tools.
- The following sections describe the steps to create and deploy an MCP Discovery Proxy, create an API product, and list available tools: Create an OpenAPI 3.0.x specification describing your API operations.
- MCP in Apigee supports the following OpenAPI versions: 3.0.0 3.0.1 3.0.2 3.0.3 This quickstart uses a sample OpenAPI 3.0.x specification with three API operations: GET /artists : Returns a list of artists.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-root`
- Final score: 25
- Re-rank relevance: N/A

Evidence snippets:
- Click the GenerateAccessTokenClient policy in the Request pane: The following XML configuration is displayed: < OAuthV2 name = "GenerateAccessTokenClient" > < ! -- This policy generates an OAuth 2.0 access token using the client credentials grant type -- > < Operation>GenerateAccessToken < / Operation > < ! -- This is in milliseconds , so expire in an hour -- > < ExpiresIn>3600000 < / ExpiresIn > < SupportedGrantTypes > < ! -- This part is very important : most real OAuth 2.0 apps will want to use other grant types .
- In this case it is important to NOT include the "client credentials" type because it allows a client to get access to a token with no user authentication -- > < GrantType>client credentials < / GrantType > < / SupportedGrantTypes > < GrantType>request . queryparam . grant type < / GrantType > < GenerateResponse / > < / OAuthV2 > The configuration includes the following: The <Operation> , which can be one of several predefined values, defines what the policy is going to do.
- Click the Verify OAuth v2.0 Access Token icon in the right-hand pane and look at the XML below it in the text editor. <OAuthV2 async="false" continueOnError="false" enabled="true" name="verify-oauth-v2-access-token"> <DisplayName>Verify OAuth v2.0 Access Token</DisplayName> <Operation>VerifyAccessToken</Operation> </OAuthV2> Notice that the <Operation> is VerifyAccessToken .
- The Operation defines what the policy is supposed to do.

