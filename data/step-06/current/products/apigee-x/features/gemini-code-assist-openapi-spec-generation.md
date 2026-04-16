---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.168Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Gemini Code Assist OpenAPI spec generation"
feature_slug: "gemini-code-assist-openapi-spec-generation"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "generation"
  - "spec"
  - "openapi"
  - "management"
  - "gemini"
  - "assist"
  - "code"
---

# Gemini Code Assist OpenAPI spec generation

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist API management can generate OpenAPI specifications from natural language prompts using enterprise context and a visual API designer.

## Extended Definition

Gemini Code Assist API management can generate OpenAPI specifications from natural language prompts using enterprise context and a visual API designer.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### "Creating an API proxy from an OpenAPI Specification \_|\_ Apigee \_|\_ Google\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/create-api-proxy-openapi-spec)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: http://mocktarget.apigee.net servers property from the OpenAPI Specification The following provides an excerpt from the OpenAPI Specification showing the properties that are used to pre-populate the fields. openapi: 3.0.0 info: description : OpenAPI Specification for the Apigee mock target service endpoint. version: 1.0.0 title : Mock Target API paths: /: get: summary: View personalized greeting operationId: View a personalized greeting description: View a personalized greeting for the specified or guest user. parameters: - name: user in: query description: Your user name. required: false schema: type: string responses: "200": description: Success ... servers : - url: http://mocktarget.apigee.net - url: https://mocktarget.apigee.net ...
- About the Open API Initiative "The Open API Initiative (OAI) is focused on creating, evolving and promoting a vendor neutral API Description Format based on the Swagger Specification." For more information about the Open API Initiative, see The OpenAPI Specification .
- For example: http://apitest.acme.com/mock-target-api Name field content converted to all lower case Description Description of the API proxy. description property from the OpenAPI Specification Target (Existing API) Target URL invoked on behalf of this API proxy.
- Navigate to the following URL in your web browser: https://raw.githubusercontent.com/apigee/api-platform-samples/master/default-proxies/helloworld/openapi/mocktarget3.0.yaml Right-click on the displayed code and select Save As .

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-3`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see OpenAPI spec for the helloworld sample . openapi : 3.0.0 info : description : OpenAPI Specification for the Apigee mock target service endpoint . version : 1.0.0 title : Mock Target API paths : / : get : summary : View personalized greeting operationId : View a personalized greeting description : View a personalized greeting for the specified or guest user . parameters : - name : user in : query description : Your user name . required : false schema : type : string responses : "200" : description : Success / help : get : summary : Get help operationId : Get help description : View help information about available resources in HTML format . responses : "200" : description : Success ...
- See Quotas . (Not available if Pass-through authorization is selected.) Using OpenAPI Specifications to generate proxies This section discusses the Use OpenAPI option that is available for generating from an OpenAPI Specification the following types of API proxies: reverse or no target.
- What is an OpenAPI Specification? "The Open API Initiative (OAI) is focused on creating, evolving and promoting a vendor neutral API description format based on the Swagger Specification." For more information, see OpenAPI Initiative .
- In the Create Proxy wizard, click Use OpenAPI Spec and follow the wizard to create a reverse or no target proxy from an OpenAPI Specification.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Required Type Complex object Parent Element N/A Child Elements <Add> <AssignTo> <AssignVariable> <Copy> <DisplayName> <IgnoreUnresolvedVariables> <Remove> <Set> The <AssignMessage> element uses the following syntax: Syntax The <AssignMessage> element uses the following syntax: < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < !-- All AssignMessage child elements are optional -- > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < / Add > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < AssignVariable > < Name> VARIABLE NAME < / Name > < PropertySetRef> SOURCE VARIABLE < / PropertySetRef > < Ref> SOURCE VARIABLE < / Ref > < ResourceURL> RESOURCE URL OR TEMPLATE < / ResourceURL > < Template> MESSAGE TEMPLATE < / Template > or < Template ref = ' TEMPLATE VARIABLE ' >< / Template > < Value> VARIABLE VALUE < / Value > < / AssignVariable > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < DisplayName> POLICY DISPLAY NAME < / DisplayName > < IgnoreUnresolvedVariables > [ true false ] < / IgnoreUnresolvedVariables > < !-- Can also be empty to remove everything from the message ( < Remove / > ) -- > < Remove > < !-- Remove all form parameters -- > < FormParams / > < !-- or , remove specific form parameters by name -- > < FormParams > < FormParam name = " FORMPARAM NAME " / > < !-- or -- > < FormParam name = " FORMPARAM NAME " > [ false true ] < / FormParam > ... < / FormParams > < !-- Remove all headers -- > < Headers / > < !-- or , remove specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Payload > [ false true ] < / Payload > < !-- Remove all query parameters -- > < QueryParams / > < !-- or , remove specific query parameters by name -- > < QueryParams > < QueryParam name = " QUERYPARAM NAME " / > < !-- or -- > < QueryParam name = " QUERYPARAM NAME " > [ false true ] < / QueryParam > ... < / QueryParams > < / Remove > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Default Policy The following example shows the default settings when you add an AssignMessage policy to your flow in the Apigee UI.
- The <Copy> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < !-- Used as the destination for the < Copy > values -- > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < / AssignMessage > Example 1 The following example copies a header, three form parameters, the path, and all query parameters from the request message to a new, custom request named newRequest : < AssignMessage name = "AM-copy-1" > < AssignTo createNew = "true" transport = "http" type = "request" > newRequest < / AssignTo > < Copy source = "request" > < Headers > < Header name = "Header Name 1" / > < / Headers > < FormParams > < FormParam name = "Form Param Name 1" / > < FormParam name = "Form Param Name 2" / > < FormParam name = "Form Param Name 3" / > < / FormParams > < Path>true < / Path > < QueryParams / > < / Copy > < / AssignMessage > Because elements like <Payload> and <Verb> are not present, the policy does not copy those parts of the message.
- The <Set> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Example 1 The following example sets a specific header.
- Any of these are valid: jsc : // my - js - file . js wsdl : // { variable - goes - here } { variable - goes - here } Example 1 The following example assigns the value of a JSON resource, loaded into the proxy in the jsc folder, into the flow variable assigned-variable : < AssignMessage name = 'AM-From-ResourceURL-Proxy-JSC' > < AssignVariable > < Name>assigned - variable < / Name > < ResourceURL>jsc : // settings . json < / ResourceURL > < / AssignVariable > < / AssignMessage > Example 2 The following example assigns the value of an OpenAPI Spec resource, loaded into the proxy in the oas folder, into the flow variable assigned-variable , and then sets that value as the Payload in the response body: < AssignMessage name = 'AM-Response' > < AssignVariable > < Name>assigned - variable < / Name > < ResourceURL>oas : // Fulfillment . yaml < / ResourceURL > < / AssignVariable > < Set > < Payload contentType = 'application/yaml' > { assigned - variable } < / Payload > < / Set > < / AssignMessage > <Template> (child of <AssignVariable> ) Specifies a message template .

