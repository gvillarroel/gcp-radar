---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.135Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Model Context Protocol (MCP) in Apigee"
feature_slug: "model-context-protocol-mcp-in-apigee"
latest_feature_date: "2026-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "protocol"
  - "context"
  - "expose"
  - "model"
  - "lets"
---

# Model Context Protocol (MCP) in Apigee

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Model Context Protocol in Apigee lets you expose Apigee APIs as managed MCP tools accessible to remote MCP clients over HTTP/S.

## Extended Definition

Model Context Protocol in Apigee lets you expose Apigee APIs as managed MCP tools accessible to remote MCP clients over HTTP/S.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### JavaScript object model \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model](https://docs.cloud.google.com/apigee/docs/api-platform/reference/javascript-object-model)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The complete URL of the request is composed of the following properties: protocol: The protocol of the URL (for example, HTTP, HTTPS) port: The port (for example, :80, :443) host: The host of the URL (for example, www.example.com) path: The path of the URI (for example, /v1/mocktarget) When getting url , a URL is returned in the following format: protocol://host:port/path?queryParams Examples: context . targetRequest . url = 'http://www.example.com/path?q1=1' context . targetRequest . protocol = 'https' ; headers HTTP request headers as a mapping of String => List Examples: For this HTTP request: POST / v1 / blogs HTTP / 1.1 Host : api . example . com Content - Type : application / json Authorization : Bearer ylSkZIjbdWybfs4fUQe9BqP0LH5Z The following JavaScript: context . proxyRequest . headers [ 'Content-Type' ]; context . proxyRequest . headers [ 'Authorization' ]; will return the following values application / json Bearer ylSkZIjbdWybfs4fUQe9BqP0LH5Z queryParams The request message query parameters as a mapping of String => List .
- For example, the following specifies the "variable name" and the style of output that the JavaScript should emit information into: < Javascript name = 'JS-2' > < Properties > < Property name = "output" > my output variable < / Property > < Property name = "prettyPrint" > true < / Property > < / Properties > < ResourceURL>jsc : //emit-results.js</ResourceURL> < /Javascript > Then in emit-results.js , the code could do this: var result = { prop1 : "something" , prop2 : "something else" } ; if ( properties . prettyPrint == "true" ) { context . setVariable ( properties . output , JSON . stringify ( result , null , 2 )); } else { context . setVariable ( properties . output , JSON . stringify ( result )); } crypto object reference The crypto object lets you perform basic cryptographic hashing functions in JavaScript.
- About httpClient The httpClient object is exposed to custom JavaScript code running on Apigee through the JavaScript object model.
- The context object exposes methods to get, set, and remove variables related to each transaction.

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page describes how to use the Apigee Discovery proxy to make your APIs available to Model Context Protocol (MCP) clients in agentic applications as MCP tools.
- See Version Negotiation in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token A successful response looks similar to the following: { "id":1, "jsonrpc":"2.0", "result": { "capabilities": { "tools": { "listChanged":false } }, "protocolVersion":"2025-11-25", "serverInfo": { "name":"cymbal.products.com", "version":"1.0.0" } } } List available MCP tools In this step, you send a request to the tools/list method to confirm the list of tools available in your MCP endpoint.
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview To expose your APIs as MCP tools using Apigee, you create and deploy a new Apigee proxy using the MCP Discovery Proxy template.
- To initialize and test your MCP server, send the following request to your MCP endpoint: curl -X POST "https:// MCP ENDPOINT URL /mcp" \ -H "Content-Type: application/json" \ -d '{ "jsonrpc": "2.0", "id": 1, "method": "initialize", "params": { "protocolVersion": " MCP PROTOCOL VERSION " } }' \ -H "Authorization: Bearer TOKEN " Replace the following: MCP ENDPOINT URL : your MCP endpoint base URI.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- The second policy uses the <AssignVariable> element to read in the values and creates three new variables: < !-- Policy #2: Get variables from the request -- > < AssignMessage continueOnError = "false" enabled = "true" name = "get-variables" > < AssignTo createNew = "false" transport = "http" type = "request" / > < !-- Get the value of myAppSecret and create a new variable , secret -- > < AssignVariable > < Name>secret < / Name > < Ref>myAppSecret < / Ref > < Value>0 < / Value > < / AssignVariable > < !-- Get the value of config . environment and create a new variable , environment -- > < AssignVariable > < Name>environment < / Name > < Ref>config . environment < / Ref > < Value>default < / Value > < / AssignVariable > < !-- Get the value of config . protocol and create a new variable , protocol -- > < AssignVariable > < Name>protocol < / Name > < Ref>config . protocol < / Ref > < Value>default < / Value > < / AssignVariable > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < / AssignMessage > In the second policy, the <Ref> element references the source variable, and <Name> elements specify the names of the new variables.
- Optional Type String Parent Element <AssignVariable> Child Elements None The <Template> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <AssignVariable> <Template> MESSAGE TEMPLATE </Template> or <Template ref=' TEMPLATE VARIABLE '></Template> </AssignVariable> </AssignMessage> Example 1 The following example uses message templating syntax to concatenate two context variables with a literal string (a hyphen) between them: < AssignMessage name = 'AV-via-template-1' > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < AssignVariable > < Name>my destination variable < / Name > < Value>BADDBEEF < / Value > < Template > { system . uuid } - { messageid } < / Template > < / AssignVariable > < / AssignMessage > Example 2 The following example specifies a flow variable, where the value of the variable is a pre-defined message template.
- 6: Set/get variables The following example uses three AssignMessage policies: Creates three flow variables in the request, with static values Gets the flow variables dynamically in a second policy in the request flow Sets them in the payload of the response < !-- Policy #1: Set variables in the request -- > < AssignMessage name = "AM-set-variables" > < !-- Create a variable named myAppSecret -- > < AssignVariable > < Name>myAppSecret < / Name > < Value>42 < / Value > < / AssignVariable > < !-- Create a variable named config . environment -- > < AssignVariable > < Name>config . environment < / Name > < Value>test < / Value > < / AssignVariable > < !-- Create a variable named config . protocol -- > < AssignVariable > < Name>config . protocol < / Name > < Value>gopher < / Value > < / AssignVariable > < / AssignMessage > In the first policy, the <AssignVariable> element creates and sets three variables in the request.
- Example 3 The following example uses the <Template> child element to concatenate two context variables with a literal string (a hyphen) between them: < AssignMessage name = 'AV-via-template-1' > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < AssignVariable > < Name>my destination variable < / Name > < Value>BADDBEEF < / Value > < Template > { system . uuid } - { messageid } < / Template > < / AssignVariable > < / AssignMessage > Example 4 The following example uses <AssignVariable> to disable the default behavior of propagating the path suffix from the proxy request to the target request: <AssignMessage name='AM-PathSuffixFalse'> <AssignVariable> <Name>target.copy.pathsuffix</Name> <Value>false</Value> </AssignVariable> </AssignMessage> A common use for <AssignVariable> is to set a default value for a query parameter, header, or other value that can be passed in with the request.

