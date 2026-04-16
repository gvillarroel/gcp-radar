---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.745Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Pay-as-you-go environment type updates in Cloud Console"
feature_slug: "pay-as-you-go-environment-type-updates-in-cloud-console"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
keywords:
  - "environment"
  - "type"
  - "updates"
  - "console"
---

# Pay-as-you-go environment type updates in Cloud Console

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee Pay-as-you-go customers can now modify an existing environment type from the Google Cloud console to add or remove environment capabilities.

## Extended Definition

Apigee Pay-as-you-go customers can now modify an existing environment type from the Google Cloud console to add or remove environment capabilities.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)

## Supporting Pages

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- The XML specification for the proxy should appear similar to the following: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> </ProxyEndpoints> </APIProxy> Configure the EventFlow in the proxy: <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <APIProxy revision="1" name="extproc-sample"> <DisplayName/> <Description/> <CreatedAt>1739581781912</CreatedAt> <LastModifiedAt>1739582447868</LastModifiedAt> <BasePaths>/</BasePaths> <ProxyEndpoints> <ProxyEndpoint>default</ProxyEndpoint> <EventFlow name="EventFlow" content-type="text/event-stream"> <Response/> </EventFlow> <HTTPProxyConnection> <Properties/> <URL>https://httpbin.org/sse</URL> </HTTPProxyConnection> </ProxyEndpoints> </APIProxy> Follow the steps in Deploy an API proxy to deploy the proxy to the environment you created earlier.
- Create an Apigee environment using the following command: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /environments" -H "Content-Type:application/json" -d \ '{ "name": " ENV NAME ", "displayName": " ENV NAME ", "state": "ACTIVE", "deploymentType": "PROXY", "apiProxyType": "PROGRAMMABLE", "type": "COMPREHENSIVE", "properties": {"property": [ { "name": "apigee-service-extension-enabled", "value": "true" } ] } }' Where ENV NAME is the name of the environment you are creating.
- Attach the new environment to the new environment group: curl -H "Authorization: Bearer $TOKEN " -X POST \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /envgroups/ ENV GROUP NAME /attachments" -H "content-type:application/json" -d \ '{ "name": " ENV GROUP NAME ", "environment": " ENV NAME " }' Where: ENV GROUP NAME is the name of the environment group you are creating.
- Attach the newly created environment to your Apigee instance: curl -i -X POST -H "Authorization: Bearer $TOKEN " \ "https://apigee.googleapis.com/v1/organizations/ $ORG NAME /instances/ $INSTANCE /attachments" -H "Content-Type:application/json" -d \ '{ "environment": " ENV NAME " }' Where ENV NAME is the name of the environment you created in the previous step.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Create and deploy a Vector Search index To create and deploy a Vector Search index: Create a Vector Search index that allows streaming updates: ACCESS TOKEN = $( gcloud auth print-access-token ) && curl --location --request POST \ "https:// $REGION -aiplatform.googleapis.com/v1/projects/ $PROJECT ID /locations/ $REGION /indexes" \ --header "Authorization: Bearer $ACCESS TOKEN " \ --header 'Content-Type: application/json' \ --data-raw \ '{ "displayName": "semantic-cache-index", "description": "semantic-cache-index", "metadata": { "config": { "dimensions": "768", "approximateNeighborsCount": 150, "distanceMeasureType": "DOT PRODUCT DISTANCE", "featureNormType": "NONE", "algorithmConfig": { "treeAhConfig": { "leafNodeEmbeddingCount": "10000", "fractionLeafNodesToSearch": 0.05 } }, "shardSize": "SHARD SIZE MEDIUM" }, }, "indexUpdateMethod": "STREAM UPDATE" }' The $REGION defines the region where the Vector Search index deploys.
- Before creating the API proxy, set the following environment variable: export PUBLIC DOMAIN NAME = $( gcloud ai index-endpoints describe $INDEX ENDPOINT ID --region = $REGION --project = $PROJECT ID grep "publicEndpointDomainName" awk '{print $2}' ) To create a proxy for use with semantic caching: Go to the API proxies page in the Google Cloud console.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- When this operation completes, you should see a response similar to the following: { "name" : "projects/976063410430/locations/us-west1/indexes/5695338290484346880/operations/9084564741162008576" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.aiplatform.v1.CreateIndexOperationMetadata" , "genericMetadata" : { "createTime" : "2025-04-25T18:45:27.996136Z" , "updateTime" : "2025-04-25T18:45:27.996136Z" } } } For more information on creating Vector Search indexes, see Create an index .

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Add the following content to the file: mcp-quickstart-openapi.yaml --- openapi : 3.0.3 info : title : Cymbal Group Products API description : This is the official API for managing the artists for Cymbal Group Products. version : 1.0.0 servers : - url : https://cymbal.products.com description : Cymbal Group Production Server - url : https://internal.products.com description : Cymbal Group internal Server paths : /artists : get : description : Returns a list of artists operationId : listArtists parameters : - name : limit in : query description : Limits the number of items on a page schema : type : integer - name : offset in : query description : Specifies the page number of the artists to be displayed schema : type : integer responses : "200" : description : An array of artists content : application/json : schema : type : array items : $ref : "#/components/schemas/Artist" post : summary : Create a new artist operationId : createArtist tags : - artists requestBody : description : The artist to create. required : true content : application/json : schema : $ref : "#/components/schemas/Artist" responses : "201" : description : The newly created artist profile content : application/json : schema : $ref : "#/components/schemas/Artist" "400" : description : Invalid username supplied /artists/{username} : get : summary : Info for a specific artist operationId : showArtistByUsername tags : - artists parameters : - name : username in : path required : true description : The username of the artist to retrieve schema : type : string responses : "200" : description : Expected response to a valid request content : application/json : schema : $ref : "#/components/schemas/Artist" "404" : description : Artist not found components : securitySchemes : bearerAuth : type : http scheme : bearer oauth2 : type : oauth2 flows : authorizationCode : authorizationUrl : /oauth/authorize tokenUrl : /oauth/token scopes : artists.read : Grants read access artists.write : Grants write access schemas : Artist : type : object required : - id properties : id : type : string format : uuid description : Unique identifier for the artist Hostname matching requirement It is critical that the value of the hostname in the servers.url field of the OpenAPI specification is an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed.
- A successful response looks similar to the following: { "id" : 1 , "jsonrpc" : "2.0" , "result" : { "tools" : [ { "description" : "Returns a list of artists" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "listArtists" }, { "description" : "Create a new artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "createArtist" }, { "description" : "Info for a specific artist" , "inputSchema" : { "properties" : { "id" : { "description" : "Unique identifier for the artist" , "format" : "uuid" , "type" : "string" } }, "type" : "object" }, "name" : "showArtistByUsername" } ] } } Now that your endpoint is initialized, your MCP tools are discoverable by developers and agents using your API product.
- OpenAPI Specification The value of the servers.url field of the OpenAPI specification must be an exact match for the environment group hostname of the Apigee environment where the MCP Discovery Proxy is deployed. https://cymbal.products.com If the servers.url host name does not match the hostname of the environment group corresponding to the Apigee environment where the MCP Discovery Proxy is deployed, you will get an error when deploying the proxy.
- The following table shows the hostname configuration in the OpenAPI specification and the corresponding hostname configuration in the Apigee environment group: Component Required Configuration Example Value Supporting Information Apigee Environment Group Hostnames must be configured in the environment group. cymbal.products.com , internal.products.com Environment groups enable routing to a group of environments using a hostname.

