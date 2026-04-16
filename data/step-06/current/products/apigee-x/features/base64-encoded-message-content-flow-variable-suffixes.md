---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.151Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Base64-encoded message content flow variable suffixes"
feature_slug: "base64-encoded-message-content-flow-variable-suffixes"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "suffixes"
  - "base64"
  - "read"
  - "variable"
  - "encoded"
  - "content"
  - "message"
  - "flow"
---

# Base64-encoded message content flow variable suffixes

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

New read-only flow variable suffixes expose request, response, and message content in base64 and URL-safe base64 form.

## Extended Definition

New read-only flow variable suffixes expose request, response, and message content in base64 and URL-safe base64 form.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro](https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Proxy request message.content.as.url.safe.base64 String Read only URL-safe base64-encoded payload content of the request, response, or error message.
- Target response response.content.as.url.safe.base64 String Read only URL-safe base64-encoded payload content of the response message.
- Proxy request message.content.as.base64 String Read only Base64-encoded payload content of the request, response, or error message.
- Proxy request request.content.as.url.safe.base64 String Read only URL-safe base64-encoded payload content of the request message.

### Message templates \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro](https://docs.cloud.google.com/apigee/docs/api-platform/reference/message-template-intro)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example For example, the AssignMessage policy lets you use a message template within in the <Payload> element: < AssignMessage name = "AM-set-payload-with-dynamic-content" > < Set > < Payload contentType = "application/json" > { "name" : "Alert" , "message" : "You entered an invalid username: {user.name}" } < / Payload > < / Set > < IgnoreUnresolvedVariables > false < / IgnoreUnresolvedVariables > < / AssignMessage > In the above example, the value of flow variable user.name (in curly braces) will be evaluated and substituted into the payload string at runtime.
- Quota - 1. available . count } < / Header > < / Headers > < Payload contentType = 'application/json' > { "error" : { "message" : "you have exceeded your quota" , "clientId" : "{request.queryparam.apikey}" } } < / Payload > < StatusCode > 429 < / StatusCode > < / Set > < / AssignMessage > In the AssignMessage policy , the following elements in the <Set> element support message templating: <Header> <QueryParam> <FormParam> <PayLoad> <Version> <Verb> <Path> <StatusCode> Again, note that flow variables in a message template must be enclosed in curly braces .
- Default: base64 Examples This example uses the AssignMessage policy to compute an HMAC-256 and assign it to a flow variable: <AssignMessage name='AM-HMAC-1'> <AssignVariable> <Name>valueToSign</Name> <Template>{request.header.apikey}.{request.header.date}</Template> </AssignVariable> <AssignVariable> <Name>hmac value</Name> <Template>{hmacSha256(private.secretkey,valueToSign)}</Template> </AssignVariable> </AssignMessage> This example illustrates how to generate a cascading HMAC that can be used with the AWS Signature v4 signing process.
- Here's the ExtractVariables policy that extracts the user message information into a variable called standard.systemMessage : < ExtractVariables name = "EV-BackendErrorResponse" > < DisplayName > EV - BackendErrorResponse < / DisplayName > < JSONPayload > < Variable name = "standard.systemMessage" > < JSONPath >$. user message < / JSONPath > < / Variable > < / JSONPayload > < / ExtractVariables > Now, here's a perfectly valid AssignMessage policy that adds the extracted variable to the response payload (the proxy response): < AssignMessage name = "AM-SetStandardFaultResponse" > < DisplayName > AM - SetStandardFaultResponse < / DisplayName > < Set > < Payload contentType = "application/json" > { "systemMessage" : "{standard.systemMessage}" } < / Payload > < / Set > < IgnoreUnresolvedVariables > true < / IgnoreUnresolvedVariables > < AssignTo > response < / AssignTo > < / AssignMessage > Unfortunately, there's a problem.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Assuming the Service Callout's response variable is the default calloutResponse , the following policy gets the second Set-Cookie header value. < AssignMessage name = "AM-Payload-from-SC-header" > < Set > < Payload contentType = "application/json" > { "Cookies from Service Callout" : " {calloutResponse.header.Set-Cookie.2}" } < / Payload > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo>response < / AssignTo > < / AssignMessage > To list all header values, use the following variable instead: {calloutResponse.header.Set-Cookie. values } 8: Store and remove form params, headers, query params If you want to use <Remove> to delete your headers, query parameters, or form parameters, but retain access to their values later in the policy flow, you can store their values using <AssignVariable> . < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "AM-StoreAndRemove" > < DisplayName>AM - StoreAndRemove < / DisplayName > < AssignVariable > < Name>var grant type < / Name > < Ref>request . formparam . grant type < / Ref > < / AssignVariable > < Remove > < Headers / > < FormParams / > < Payload / > < / Remove > < Set > < Headers > < Header name = "Content-Type" > application / x - www - form - urlencoded < / Header > < Header name = "Accept" > application / json < / Header > < Header name = "Grant-Type" > { var grant type } < / Header > < / Headers > < / Set > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "request" / > < / AssignMessage > Note : Form parameters, headers, and query parameters stripped using <Remove> in the Assign Message policy cannot be accessed after completion of the policy flow unless their values are stored in variables as described in this example.
- Required Type Complex object Parent Element N/A Child Elements <Add> <AssignTo> <AssignVariable> <Copy> <DisplayName> <IgnoreUnresolvedVariables> <Remove> <Set> The <AssignMessage> element uses the following syntax: Syntax The <AssignMessage> element uses the following syntax: < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < !-- All AssignMessage child elements are optional -- > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < / Add > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < AssignVariable > < Name> VARIABLE NAME < / Name > < PropertySetRef> SOURCE VARIABLE < / PropertySetRef > < Ref> SOURCE VARIABLE < / Ref > < ResourceURL> RESOURCE URL OR TEMPLATE < / ResourceURL > < Template> MESSAGE TEMPLATE < / Template > or < Template ref = ' TEMPLATE VARIABLE ' >< / Template > < Value> VARIABLE VALUE < / Value > < / AssignVariable > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < DisplayName> POLICY DISPLAY NAME < / DisplayName > < IgnoreUnresolvedVariables > [ true false ] < / IgnoreUnresolvedVariables > < !-- Can also be empty to remove everything from the message ( < Remove / > ) -- > < Remove > < !-- Remove all form parameters -- > < FormParams / > < !-- or , remove specific form parameters by name -- > < FormParams > < FormParam name = " FORMPARAM NAME " / > < !-- or -- > < FormParam name = " FORMPARAM NAME " > [ false true ] < / FormParam > ... < / FormParams > < !-- Remove all headers -- > < Headers / > < !-- or , remove specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Payload > [ false true ] < / Payload > < !-- Remove all query parameters -- > < QueryParams / > < !-- or , remove specific query parameters by name -- > < QueryParams > < QueryParam name = " QUERYPARAM NAME " / > < !-- or -- > < QueryParam name = " QUERYPARAM NAME " > [ false true ] < / QueryParam > ... < / QueryParams > < / Remove > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Default Policy The following example shows the default settings when you add an AssignMessage policy to your flow in the Apigee UI.
- The <Set> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Example 1 The following example sets a specific header.
- Any of these are valid: jsc : // my - js - file . js wsdl : // { variable - goes - here } { variable - goes - here } Example 1 The following example assigns the value of a JSON resource, loaded into the proxy in the jsc folder, into the flow variable assigned-variable : < AssignMessage name = 'AM-From-ResourceURL-Proxy-JSC' > < AssignVariable > < Name>assigned - variable < / Name > < ResourceURL>jsc : // settings . json < / ResourceURL > < / AssignVariable > < / AssignMessage > Example 2 The following example assigns the value of an OpenAPI Spec resource, loaded into the proxy in the oas folder, into the flow variable assigned-variable , and then sets that value as the Payload in the response body: < AssignMessage name = 'AM-Response' > < AssignVariable > < Name>assigned - variable < / Name > < ResourceURL>oas : // Fulfillment . yaml < / ResourceURL > < / AssignVariable > < Set > < Payload contentType = 'application/yaml' > { assigned - variable } < / Payload > < / Set > < / AssignMessage > <Template> (child of <AssignVariable> ) Specifies a message template .

