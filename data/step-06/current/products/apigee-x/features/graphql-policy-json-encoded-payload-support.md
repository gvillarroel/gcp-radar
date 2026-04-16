---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.190Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "GraphQL policy JSON-encoded payload support"
feature_slug: "graphql-policy-json-encoded-payload-support"
latest_feature_date: "2022-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/graphql-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jws-policy"
keywords:
  - "graphql"
  - "json"
  - "payloads"
  - "encoded"
  - "payload"
  - "supports"
  - "policy"
---

# GraphQL policy JSON-encoded payload support

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The GraphQL policy supports JSON-encoded payloads.

## Extended Definition

The GraphQL policy supports JSON-encoded payloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/graphql-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/graphql-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jws-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jws-policy)

## Supporting Pages

### GraphQL policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/graphql-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/graphql-policy)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GraphQL supports the following types of payloads: POST of graphQL payloads with Content-Type : application/graphql POST of graphQL payloads with Content-Type: applcation/json GET of graphQL payloads where the payload is a query parameter Note: For application/json payloads of the form { "query": "...", "operationName": "...", "variables": { "myVariable": "someValue", ... } } Apigee currently ignores the optional operationName and variables fields.
- Required Type TYPE Parent Element n/a Child Elements <Action> <MaxDepth> <MaxCount> <MaxPayloadSizeInBytes> <OperationType> <Source> <ResourceURL> Syntax The <GraphQL> element uses the following syntax: < GraphQL continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Source>request < / Source > < OperationType > [ query mutuation all ] < / OperationType > < MaxDepth> MAX DEPTH < / MaxDepth > < MaxCount> MAX NUMBER OF QUERIES < / MaxCount > // [Start maxpayloadsize] < MaxPayloadSizeInBytes> MAX PAYLOAD SIZE IN BYTES & lt / MaxPayloadSizeInBytes > < Action>parse < / Action > < ResourceURL> PATH / TO / SCHEMA . xsd < / ResourceURL > < / GraphQL > Default Policy The following example shows the default settings when you add a <GraphQL> policy to your flow in the Apigee UI: < ? xml version = "1.0" encoding = "UTF-8" standalone = "yes" ? > < GraphQL name = "GraphQLParser" > < Source>request < / Source > < OperationType>query < / OperationType > < MaxDepth>10 < / MaxDepth > < MaxCount>10 < / MaxCount > < MaxPayloadSizeInBytes >< / MaxPayloadSizeInBytes > < Action>parse < / Action > < ResourceURL >< / ResourceURL > < / GraphQL > This element has the following attributes that are common to all policies: Attribute Default Required?
- Optional Type String Parent Element <GraphQL> Child Elements none The <MaxPayloadSizeInBytes> element uses the following syntax: Syntax < GraphQL continueOnError = "[false true]" enabled = "[true false]" name = "POLICY NAME" > < MaxPayloadSizeInBytes>MAX PAYLOAD SIZE IN BYTES < / MaxPayloadSizeInBytes > < / GraphQL > <OperationType> Indicates the type of request that can be parsed: query : A GraphQL query. mutation : A GraphQL mutation query mutation : A GraphQL query or a mutation.
- Optional Type Integer Parent Element <GraphQL> Child Elements none The <MaxDepth> element uses the following syntax: Syntax <GraphQL continueOnError="[false true]" enabled="[true false]" name="POLICY NAME" > <MaxDepth>MAX DEPTH</MaxDepth> </GraphQL> <MaxPayloadSizeInBytes> The maximum size of a payload in kilobytes.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Assuming the Service Callout's response variable is the default calloutResponse , the following policy gets the second Set-Cookie header value. < AssignMessage name = "AM-Payload-from-SC-header" > < Set > < Payload contentType = "application/json" > { "Cookies from Service Callout" : " {calloutResponse.header.Set-Cookie.2}" } < / Payload > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo>response < / AssignTo > < / AssignMessage > To list all header values, use the following variable instead: {calloutResponse.header.Set-Cookie. values } 8: Store and remove form params, headers, query params If you want to use <Remove> to delete your headers, query parameters, or form parameters, but retain access to their values later in the policy flow, you can store their values using <AssignVariable> . < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "AM-StoreAndRemove" > < DisplayName>AM - StoreAndRemove < / DisplayName > < AssignVariable > < Name>var grant type < / Name > < Ref>request . formparam . grant type < / Ref > < / AssignVariable > < Remove > < Headers / > < FormParams / > < Payload / > < / Remove > < Set > < Headers > < Header name = "Content-Type" > application / x - www - form - urlencoded < / Header > < Header name = "Accept" > application / json < / Header > < Header name = "Grant-Type" > { var grant type } < / Header > < / Headers > < / Set > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "request" / > < / AssignMessage > Note : Form parameters, headers, and query parameters stripped using <Remove> in the Assign Message policy cannot be accessed after completion of the policy flow unless their values are stored in variables as described in this example.
- Optional Type String Parent Element <Set> Child Elements None The <Payload> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Set > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < / Set > < / AssignMessage > Example 1 The following example sets a plain text payload: < AssignMessage name = "AM-set-payload-1" > < Set > < Payload contentType = "text/plain" > 42 < / Payload > < / Set > < / AssignMessage > Example 2 The following example sets a JSON payload: < AssignMessage name = "AM-set-payload-2" > < Set > < Payload contentType = "application/json" > { "name" : "foo" , "type" : "bar" } < / Payload > < / Set > < / AssignMessage > Example 3 The following example inserts variable values into the payload by wrapping variable names in curly braces: < AssignMessage name = "AM-set-payload-3" > < Set > < Payload contentType = "application/json" > { "name" : "foo" , "type" : "{variable name}" } < / Payload > < / Set > < / AssignMessage > In older versions of Apigee—for example, prior to cloud release 16.08.17—you could not use curly braces to denote variable references within JSON payloads.
- The following example embeds the value of the user-agent HTTP header flow variable in an XML element called User-agent : < AssignMessage name = "AM-set-dynamic-content" > < AssignTo>response < / AssignTo > < Set > < Payload contentType = "text/xml" > < User - agent > { request . header . user - agent } < / User - agent > < / Payload > < / Set > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < / AssignMessage > For JSON payloads, you can insert variables using the variablePrefix and variableSuffix attributes with delimiter characters as shown in the following example: < AssignMessage name = "AM-set-payload" > < Payload contentType = "application/json" variablePrefix = "@" variableSuffix = "#" > { "user-agent" : "@request.header.user-agent#" } < / Payload > < / AssignMessage > For a complete list of flow variables, see Flow variables reference .
- When this policy is attached in the Request flow, it will allow the upstream system to receive an additional header that was not included in the original inbound request. <AssignMessage name="AM-Set-Header"> <Set> <Headers> <Header name="authenticated-developer">{verifyapikey.VAK-1.developer.id}</Header> </Headers> </Set> <AssignTo>request</AssignTo> </AssignMessage> Example 2 The following example overwrites the payload for a response, as well as the Content-Type header. < AssignMessage name = "AM-Overwrite-Payload" > < Set > < Payload contentType = "application/json" > { "status" : 42 } < / Payload > < / Set > < AssignTo>response < / AssignTo > < / AssignMessage > In general, you should not use <Set> and <Add> in the same policy to modify the same properties.

### GenerateJWS policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jws-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/generate-jws-policy)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Fault code reference for a complete list of all fault codes that you can handle with API Monitoring. --> Fault code HTTP status Occurs when steps.jws.GenerationFailed 401 The policy was unable to generate the JWS. steps.jws.InsufficientKeyLength 401 For a key less than 32 bytes for the HS256 algorithm steps.jws.InvalidClaim 401 For a missing claim or claim mismatch, or a missing header or header mismatch. steps.jws.InvalidCurve 401 The curve specified by the key is not valid for the Elliptic Curve algorithm. steps.jws.InvalidJsonFormat 401 Invalid JSON found in the JWS header. steps.jws.InvalidPayload 401 The JWS payload is invalid. steps.jws.InvalidSignature 401 <DetachedContent> is omitted and the JWS has a detached content payload. steps.jws.KeyIdMissing 401 The Verify policy uses a JWKS as a source for public keys, but the signed JWS does not include a kid property in the header. steps.jws.KeyParsingFailed 401 The public key could not be parsed from the given key information. steps.jws.MissingPayload 401 The JWS payload is missing. steps.jws.NoAlgorithmFoundInHeader 401 Occurs when the JWS omits the algorithm header. steps.jws.SigningFailed 401 In GenerateJWS, for a key less than the minimum size for the HS384 or HS512 algorithms steps.jws.UnknownException 401 An unknown exception occurred. steps.jws.WrongKeyType 401 Wrong type of key specified.
- Consult IETF RFC7519 for details on the valid values for JWT claims. < GenerateJWS name = "JWS-Generate-HS256-JWT" > < Algorithm>HS256 < / Algorithm > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < SecretKey > < Value ref = "private.secretkey" / > < / SecretKey > < Payload ref = "json-content" / > < AdditionalHeaders > < Claim name = "typ" > JWT < / Claim > < / AdditionalHeaders > < OutputVariable>output - variable < / OutputVariable > < / GenerateJWS > Generate a detached JWS This example policy generates a JWS with detached content, signed using the RS256 algorithm.
- Setting the typ header to JWT results in a signed JWS that is also a signed JWT. ( reference ) The policy configuration below creates a JWS from a payload contained in the variable json-content , and stores the resulting JWS in the variable output-variable .
- POLICYNAME .generated jws Presence Optional Type String (a flow variable name) <Payload> < Payload ref = "flow-variable-name-here" / > or < Payload> payload - value < / Payload > Specifies the raw, unencoded JWS payload.

