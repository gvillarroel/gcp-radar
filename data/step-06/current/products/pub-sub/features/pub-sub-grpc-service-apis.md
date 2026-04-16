---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:10.325Z"
product_name: "Pub/Sub"
product_slug: "pub-sub"
feature_name: "Pub/Sub gRPC service APIs"
feature_slug: "pub-sub-grpc-service-apis"
latest_feature_date: "2018-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription"
  - "https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview"
  - "https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription"
keywords:
  - "pub"
  - "sub"
  - "grpc"
  - "apis"
  - "including"
  - "streamingpull"
  - "reached"
  - "general"
---

# Pub/Sub gRPC service APIs

Product: Pub/Sub
Coverage: MEDIUM

## Step 02 Summary

Pub/Sub gRPC service APIs, including StreamingPull, reached general availability for production workloads; Pub/Sub gRPC service APIs were announced in beta.

## Extended Definition

Pub/Sub gRPC service APIs, including StreamingPull, reached general availability for production workloads; Pub/Sub gRPC service APIs were announced in beta.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- [https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview)
- [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)

## Supporting Pages

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_subscription)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "create subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema A subscription resource.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "update subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the UpdateSubscription method.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.

### Pub/Sub APIs overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview](https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: export CLOUDSDK API ENDPOINT OVERRIDES PUBSUB = ENDPOINT OVERRIDE List of locational endpoints To send requests directly to a locational endpoint, use the following Pub/Sub endpoints: Region Endpoint africa-south1 https://africa-south1-pubsub.googleapis.com asia-east1 https://asia-east1-pubsub.googleapis.com asia-east2 https://asia-east2-pubsub.googleapis.com asia-northeast1 https://asia-northeast1-pubsub.googleapis.com asia-northeast2 https://asia-northeast2-pubsub.googleapis.com asia-northeast3 https://asia-northeast3-pubsub.googleapis.com asia-south1 https://asia-south1-pubsub.googleapis.com asia-south2 https://asia-south2-pubsub.googleapis.com asia-southeast1 https://asia-southeast1-pubsub.googleapis.com asia-southeast2 https://asia-southeast2-pubsub.googleapis.com asia-southeast3 https://asia-southeast3-pubsub.googleapis.com australia-southeast1 https://australia-southeast1-pubsub.googleapis.com australia-southeast2 https://australia-southeast2-pubsub.googleapis.com europe-central2 https://europe-central2-pubsub.googleapis.com europe-north1 https://europe-north1-pubsub.googleapis.com europe-north2 https://europe-north2-pubsub.googleapis.com europe-southwest1 https://europe-southwest1-pubsub.googleapis.com europe-west1 https://europe-west1-pubsub.googleapis.com europe-west10 https://europe-west10-pubsub.googleapis.com europe-west12 https://europe-west12-pubsub.googleapis.com europe-west2 https://europe-west2-pubsub.googleapis.com europe-west3 https://europe-west3-pubsub.googleapis.com europe-west4 https://europe-west4-pubsub.googleapis.com europe-west6 https://europe-west6-pubsub.googleapis.com europe-west8 https://europe-west8-pubsub.googleapis.com europe-west9 https://europe-west9-pubsub.googleapis.com me-central1 https://me-central1-pubsub.googleapis.com me-central2 https://me-central2-pubsub.googleapis.com me-west1 https://me-west1-pubsub.googleapis.com northamerica-northeast1 https://northamerica-northeast1-pubsub.googleapis.com northamerica-northeast2 https://northamerica-northeast2-pubsub.googleapis.com northamerica-south1 https://northamerica-south1-pubsub.googleapis.com southamerica-east1 https://southamerica-east1-pubsub.googleapis.com southamerica-west1 https://southamerica-west1-pubsub.googleapis.com us-central1 https://us-central1-pubsub.googleapis.com us-east1 https://us-east1-pubsub.googleapis.com us-east4 https://us-east4-pubsub.googleapis.com us-east5 https://us-east5-pubsub.googleapis.com us-south1 https://us-south1-pubsub.googleapis.com us-west1 https://us-west1-pubsub.googleapis.com us-west2 https://us-west2-pubsub.googleapis.com us-west3 https://us-west3-pubsub.googleapis.com us-west4 https://us-west4-pubsub.googleapis.com List of regional endpoints To send requests directly to a regional endpoint, use the following Pub/Sub endpoints: Region Endpoint africa-south1 https://pubsub.africa-south1.rep.googleapis.com asia-east1 https://pubsub.asia-east1.rep.googleapis.com asia-east2 https://pubsub.asia-east2.rep.googleapis.com asia-northeast1 https://pubsub.asia-northeast1.rep.googleapis.com asia-northeast2 https://pubsub.asia-northeast2.rep.googleapis.com asia-northeast3 https://pubsub.asia-northeast3.rep.googleapis.com asia-south1 https://pubsub.asia-south1.rep.googleapis.com asia-south2 https://pubsub.asia-south2.rep.googleapis.com asia-southeast1 https://pubsub.asia-southeast1.rep.googleapis.com asia-southeast2 https://pubsub.asia-southeast2.rep.googleapis.com asia-southeast3 https://pubsub.asia-southeast3.rep.googleapis.com australia-southeast1 https://pubsub.australia-southeast1.rep.googleapis.com australia-southeast2 https://pubsub.australia-southeast2.rep.googleapis.com europe-central2 https://pubsub.europe-central2.rep.googleapis.com europe-north1 https://pubsub.europe-north1.rep.googleapis.com europe-north2 https://pubsub.europe-north2.rep.googleapis.com europe-southwest1 https://pubsub.europe-southwest1.rep.googleapis.com europe-west1 https://pubsub.europe-west1.rep.googleapis.com europe-west2 https://pubsub.europe-west2.rep.googleapis.com europe-west3 https://pubsub.europe-west3.rep.googleapis.com europe-west4 https://pubsub.europe-west4.rep.googleapis.com europe-west6 https://pubsub.europe-west6.rep.googleapis.com europe-west8 https://pubsub.europe-west8.rep.googleapis.com europe-west9 https://pubsub.europe-west9.rep.googleapis.com europe-west10 https://pubsub.europe-west10.rep.googleapis.com europe-west12 https://pubsub.europe-west12.rep.googleapis.com me-central1 https://pubsub.me-central1.rep.googleapis.com me-central2 https://pubsub.me-central2.rep.googleapis.com me-west1 https://pubsub.me-west1.rep.googleapis.com northamerica-northeast1 https://pubsub.northamerica-northeast1.rep.googleapis.com northamerica-northeast2 https://pubsub.northamerica-northeast2.rep.googleapis.com northamerica-south1 https://pubsub.northamerica-south1.rep.googleapis.com southamerica-east1 https://pubsub.southamerica-east1.rep.googleapis.com southamerica-west1 https://pubsub.southamerica-west1.rep.googleapis.com us-central1 https://pubsub.us-central1.rep.googleapis.com us-east1 https://pubsub.us-east1.rep.googleapis.com us-east4 https://pubsub.us-east4.rep.googleapis.com us-east5 https://pubsub.us-east5.rep.googleapis.com us-south1 https://pubsub.us-south1.rep.googleapis.com us-west1 https://pubsub.us-west1.rep.googleapis.com us-west2 https://pubsub.us-west2.rep.googleapis.com us-west3 https://pubsub.us-west3.rep.googleapis.com us-west4 https://pubsub.us-west4.rep.googleapis.com us-west8 https://pubsub.us-west8.rep.googleapis.com What's next Pub/Sub REST reference Pub/Sub RPC reference Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- We recommend this approach only if your programming language or other needs are not met by the provided client libraries. gRPC interface You can generate your own gRPC client libraries in any gRPC-supported language for the Pub/Sub API from its .proto service definition using these resources: Pub/Sub service definition : The official Pub/Sub API .proto service definition. gRPC documentation : Everything you need to generate and use your own gRPC client code RPC API Reference : Language-independent overview of the RPC surface JSON/HTTP interface If you prefer working with the JSON/HTTP interface, you can use these resources: Pub/Sub REST API reference : Provides a detailed specification for available methods and resources.
- Set a locational endpoint override You can set a locational endpoint override for any Pub/Sub operation that calls a Pub/Sub endpoint (JSON/HTTP or gRPC). gcloud To set a locational endpoint override, use the CLOUDSDK API ENDPOINT OVERRIDES PUBSUB environment variable with the applicable gcloud pubsub ... command.
- For example, if you publish a Pub/Sub message to a topic through an endpoint such as pubsub.us-central1.rep.googleapis.com , the publish operation only succeeds if all of the following are true: The topic has a message storage policy configured.

### "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription](https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/get_subscription)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Curl Request curl --location 'https://pubsub.googleapis.com/mcp' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "get subscription", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request for the GetSubscription method.
- Home Documentation Data analytics Pub/Sub Reference Send feedback MCP Tools Reference: pubsub.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- PushConfig JSON representation { "pushEndpoint" : string , "attributes" : { string : string , ... } , // Union field authentication method can be only one of the following: "oidcToken" : { object ( OidcToken ) } // End of list of possible types for union field authentication method . // Union field wrapper can be only one of the following: "pubsubWrapper" : { object ( PubsubWrapper ) } , "noWrapper" : { object ( NoWrapper ) } // End of list of possible types for union field wrapper . } Fields pushEndpoint string Optional.
- To transform a message return a map with the following keys: - (required) 'data' : {string} - (optional) 'attributes' : {Object<string, string>} Returning empty attributes will remove all attributes from the message. @param {(Object<string, (string Object<string, string>)>} Pub/Sub message.

