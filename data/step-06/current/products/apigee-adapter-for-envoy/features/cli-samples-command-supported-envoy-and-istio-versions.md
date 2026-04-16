---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:28.016Z"
product_name: "Apigee Adapter for Envoy"
product_slug: "apigee-adapter-for-envoy"
feature_name: "CLI samples command supported Envoy and Istio versions"
feature_slug: "cli-samples-command-supported-envoy-and-istio-versions"
latest_feature_date: "2021-12-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "versions"
  - "samples"
  - "command"
  - "updated"
  - "runtime"
  - "istio"
---

# CLI samples command supported Envoy and Istio versions

Product: Apigee Adapter for Envoy
Coverage: MEDIUM

## Step 02 Summary

The CLI samples command updated its supported runtime versions to Envoy 1.18–1.20 and Istio 1.10–1.12.

## Extended Definition

The CLI samples command updated its supported runtime versions to Envoy 1.18–1.20 and Istio 1.10–1.12.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/reference](https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/reference](https://docs.cloud.google.com/apigee/docs/api-platform/envoy-adapter/v1.0.x/reference)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- These options include: organization environment runtime management insecure namespace legacy opdk For example, you could execute the provision command like this: apigee-remote-service-cli provision --config='old-config.yaml' > new-config.yaml Configuration file This section shows an example configuration file with all of the available options. global: temp dir: /tmp/apigee-istio keep alive max connection age: 10m api address: :5000 metrics address: :5001 tls: cert file: tls.crt key file: tls.key tenant: internal api: https://istioservices.apigee.net/edgemicro remote service api: https://org-test.apigee.net/remote-service org name: org env name: env key: mykey secret: mysecret client timeout: 30s allow unverified ssl cert: false products: refresh rate: 2m analytics: legacy endpoint: false file limit: 1024 send channel size: 10 collection interval: 10s fluentd endpoint: apigee-udca-myorg-test.apigee.svc.cluster.local:20001 tls: ca file: /opt/apigee/tls/ca.crt cert file: /opt/apigee/tls/tls.crt key file: /opt/apigee/tls/tls.key allow unverified ssl cert: false auth: api key claim: claim api key cache duration: 30m api key header: x-api-key api target header: :authority reject unauthorized: true jwks poll interval: 0s Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- UPGRADE NOTE: If you are upgrading to v1.0-beta.4 or a later version, you must include the --force-proxy-install flag to replace the existing remote service proxy deployed on Apigee. -h, --help Displays help for the command parameters. -k, --key String Specifies the key returned from the apigee-remote-service-cli provision command. --legacy Apigee Edge (sets management and runtime URL) -m, --management String (Required if you are on Apigee Private Cloud) Your Apigee management base URL.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- See also Using .netrc for credentials . --rotate-int int If n > 0, generate new private key and keep n public keys (hybrid only) -r, --runtime String Apigee runtime base URL (required for hybrid or opdk) -s, --secret String Specifies the secret returned from the apigee-remote-service-cli provision command. --strength int (Optional) Specifies the encryption strength for SSL certificates used in provisioning the adapter.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview To expose your APIs as MCP tools using Apigee, you create and deploy a new Apigee proxy using the MCP Discovery Proxy template.
- Enable the API Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- MCP in Apigee supports the following OpenAPI versions: 3.0.0 3.0.1 3.0.2 3.0.3 This quickstart uses a sample OpenAPI 3.0.x specification with three API operations: GET /artists : Returns a list of artists.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Create the traffic extension using the following command to call the Extension Processor provisioning API: curl -X POST -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions?apimServiceExtensionId = TRAFFIC EXT NAME \ -H "Content-Type:application/json" -d \ '{ "extensionProcessor": " TARGET PROXY NAME " "lbForwardingRule": " LB FORWARDING RULE ", "network" : " NETWORK ", "networkConfigs": [ { "region": "$REGION", "subnet": "project/my-project/regions/$REGION/subnetworks/$SUBNET" } ], "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " CEL EXPRESSION ", "failOpen": FAIL OPEN , "hostname": " ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is is the name of the traffic extension you are creating.
- Update Multiple Attributes (Global LB) To update the extensions and extensionProcessor attributes simultaneously, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions,extensionProcessor \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN , "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ], "extensionProcessor": " NEW TARGET PROXY NAME " }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.
- Update extensions To update the extensions attributes, use the following command: curl -X PATCH -H "Authorization: Bearer $TOKEN " \ https://apigee.googleapis.com/v1/organizations/ $ORG NAME /apimServiceExtensions/ TRAFFIC EXT NAME ?updateMask = extensions \ -H "Content-Type:application/json" -d \ '{ "extensions": [ { "name": " TARGET PROXY NAME ", "matchCondition": " NEW CEL EXPRESSION ", "failOpen": NEW FAIL OPEN "hostname": " NEW ENV GROUP HOSTNAME ", "supportedEvents": [ "REQUEST HEADERS", "RESPONSE HEADERS" ] } ] }' Where: TRAFFIC EXT NAME is the name of the Extension Processor traffic extension to update.

