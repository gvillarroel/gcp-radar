---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.739Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee environment-level client IP resolution"
feature_slug: "apigee-environment-level-client-ip-resolution"
latest_feature_date: "2024-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
keywords:
  - "configuring"
  - "resolution"
  - "client"
  - "environment"
  - "level"
  - "added"
---

# Apigee environment-level client IP resolution

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Added support for configuring client IP capture per environment from the X-Forwarded-For header for security actions, analytics, and flow variables.

## Extended Definition

Added support for configuring client IP capture per environment from the X-Forwarded-For header for security actions, analytics, and flow variables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)

## Supporting Pages

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Create a Model Armor template Create a Model Armor template for sanitizing user prompts and LLM responses: gcloud model-armor templates create --location $LOCATION TEMPLATE NAME --rai-settings-filters = '[{ "filterType":"HATE SPEECH", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "HARASSMENT", "confidenceLevel": "MEDIUM AND ABOVE" },{ "filterType": "SEXUALLY EXPLICIT", "confidenceLevel": "MEDIUM AND ABOVE" }]' --basic-config-filter-enforcement = enabled --pi-and-jailbreak-filter-settings-enforcement = enabled --pi-and-jailbreak-filter-settings-confidence-level = LOW AND ABOVE --malicious-uri-filter-settings-enforcement = enabled --template-metadata-custom-llm-response-safety-error-code = 798 --template-metadata-custom-llm-response-safety-error-message = "test template llm response evaluation failed" --template-metadata-custom-prompt-safety-error-code = 799 --template-metadata-custom-prompt-safety-error-message = "test template prompt evaluation failed" --template-metadata-ignore-partial-invocation-failures --template-metadata-log-operations --template-metadata-log-sanitize-operations Substitute TEMPLATE NAME with the name of the template you want to create.
- The following example shows the configuration for the RaiseFault policy: <RaiseFault name="ModelArmorTemplateErrorCodeHandler"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <FaultResponse> <Set> <Payload contentType="application/json"> <ErrorResponse> <Error> <Status>{sanitizationMetadata.errorCode}</Status> <Message>{sanitizationMetadata.errorMessage}</Message> </Error> </ErrorResponse> </Payload> <StatusCode>401</StatusCode> <ReasonPhrase>Invalid API Key</ReasonPhrase> </Set> </FaultResponse> </RaiseFault> Once the new policy is added and the API proxy is deployed, requests to the proxy that trigger the error specified in the Model Armor template metadata will raise a fault with the error code and error message defined in the RaiseFault policy.
- For example: gcloud iam service-accounts create ma-client \ --description = " model armor client " \ --display-name = " ma-client " Grant the service account the required roles: Grant the Model Armor User role to the service account: gcloud projects add-iam-policy-binding $PROJECT \ --member = "serviceAccount: SERVICE ACCOUNT NAME @ $PROJECT .iam.gserviceaccount.com" \ --role = "roles/modelarmor.user" Replace SERVICE ACCOUNT NAME with the name of the service account created in the previous step.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT $LOCATION $RUNTIME HOSTNAME Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT Overview The following sections describe the steps required to create and configure the Model Armor policies: Enable Model Armor APIs.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- You should get a response like this: { "issued at" : "1466025769306" , "application name" : "716bbe61-f14a-4d85-9b56-a62ff8e0d347" , "scope" : "" , "status" : "approved" , "api product list" : "[helloworld oauth2-Product]" , "expires in" : "3599" , //--in seconds "developer.email" : "nigel@example.com" , "token type" : "BearerToken" , "client id" : "xNnREu1DNGfiwzQZ5HUN8IAUwZSW1GZW" , "access token" : "GTPY9VUHCqKVMRB0cHxnmAp0RXc0" , "organization name" : "myOrg" , "refresh token expires in" : "0" , //--in seconds "refresh count" : "0" } You got your OAuth 2.0 access token!
- Click the GenerateAccessTokenClient policy in the Request pane: The following XML configuration is displayed: < OAuthV2 name = "GenerateAccessTokenClient" > < ! -- This policy generates an OAuth 2.0 access token using the client credentials grant type -- > < Operation>GenerateAccessToken < / Operation > < ! -- This is in milliseconds , so expire in an hour -- > < ExpiresIn>3600000 < / ExpiresIn > < SupportedGrantTypes > < ! -- This part is very important : most real OAuth 2.0 apps will want to use other grant types .
- Using that key and secret, make the following cURL call (note that the protocol is https ): curl - X POST - H "Content-Type: application/x-www-form-urlencoded" \ "https:// YOUR ENV GROUP HOSTNAME /oauth/client credential/accesstoken?grant type=client credentials" \ - d "client id= CLIENT KEY &client secret= CLIENT SECRET " Note that if you're using a client like Postman to make the call, the client id and client secret go in the Body of the request and must be x-www-form-urlencoded .
- In this case it is important to NOT include the "client credentials" type because it allows a client to get access to a token with no user authentication -- > < GrantType>client credentials < / GrantType > < / SupportedGrantTypes > < GrantType>request . queryparam . grant type < / GrantType > < GenerateResponse / > < / OAuthV2 > The configuration includes the following: The <Operation> , which can be one of several predefined values, defines what the policy is going to do.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- If additional hostnames or environment groups are added to the proxy, those will also display here.
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- OpenAPI Specification The value of the servers.url field of the OpenAPI specification must be an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed. https://cymbal.products.com If the servers.url host name does not match the hostname of the environment group corresponding to the Apigee environment where the MCP Discovery Proxy is deployed, you will get an error when deploying the proxy.
- The following table shows the hostname configuration in the OpenAPI specification and the corresponding hostname configuration in the Apigee environment group: Component Required Configuration Example Value Supporting Information Apigee Environment Group Hostnames must be configured in the environment group. cymbal.products.com , internal.products.com Environment groups enable routing to a group of environments using a hostname.

