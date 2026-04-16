---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.142Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "SemanticCachePopulate policy"
feature_slug: "semanticcachepopulate-policy"
latest_feature_date: "2025-09-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assert-condition-policy"
keywords:
  - "semanticcachepopulate"
  - "semantically"
  - "intelligent"
  - "reusable"
  - "caching"
  - "stores"
  - "responses"
  - "policy"
---

# SemanticCachePopulate policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SemanticCachePopulate policy stores semantically reusable responses to support intelligent caching for LLM workloads; The SemanticCachePopulate policy stores semantically reusable responses to support intelligent caching for LLM workloads.

## Extended Definition

The SemanticCachePopulate policy stores semantically reusable responses to support intelligent caching for LLM workloads; The SemanticCachePopulate policy stores semantically reusable responses to support intelligent caching for LLM workloads.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assert-condition-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assert-condition-policy)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To confirm that the environment variables are set correctly, run the following command and review the output: echo $PROJECT ID $REGION $RUNTIME HOSTNAME Set the project Set the Google Cloud project in your development environment: gcloud auth login gcloud config set project $PROJECT ID Overview The semantic caching policies help Apigee users with LLM models to intelligently serve identical or semantically similar prompts efficiently, minimizing backend API calls and reducing resource consumption.
- If you wish, you can provide a variable in this element to hold the value of the URL, as shown in the following example: <URL>https://{URL VARIABLE}</URL> Configure the semantic caching policies View the XML configuration of each policy by clicking on the policy name in the Detail view of the API proxy's Develop tab.
- We recommend implementing predefined caching strategies similar to the following: Generic AI responses : Configure a long TTL (for example, one hour) for non-user-specific responses.
- User-specific responses : Do not implement caching, or set a short TTL (for example, five minutes) for responses that contain user-specific information.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Required Type Complex object Parent Element N/A Child Elements <Add> <AssignTo> <AssignVariable> <Copy> <DisplayName> <IgnoreUnresolvedVariables> <Remove> <Set> The <AssignMessage> element uses the following syntax: Syntax The <AssignMessage> element uses the following syntax: < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < !-- All AssignMessage child elements are optional -- > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < / Add > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < AssignVariable > < Name> VARIABLE NAME < / Name > < PropertySetRef> SOURCE VARIABLE < / PropertySetRef > < Ref> SOURCE VARIABLE < / Ref > < ResourceURL> RESOURCE URL OR TEMPLATE < / ResourceURL > < Template> MESSAGE TEMPLATE < / Template > or < Template ref = ' TEMPLATE VARIABLE ' >< / Template > < Value> VARIABLE VALUE < / Value > < / AssignVariable > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < DisplayName> POLICY DISPLAY NAME < / DisplayName > < IgnoreUnresolvedVariables > [ true false ] < / IgnoreUnresolvedVariables > < !-- Can also be empty to remove everything from the message ( < Remove / > ) -- > < Remove > < !-- Remove all form parameters -- > < FormParams / > < !-- or , remove specific form parameters by name -- > < FormParams > < FormParam name = " FORMPARAM NAME " / > < !-- or -- > < FormParam name = " FORMPARAM NAME " > [ false true ] < / FormParam > ... < / FormParams > < !-- Remove all headers -- > < Headers / > < !-- or , remove specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Payload > [ false true ] < / Payload > < !-- Remove all query parameters -- > < QueryParams / > < !-- or , remove specific query parameters by name -- > < QueryParams > < QueryParam name = " QUERYPARAM NAME " / > < !-- or -- > < QueryParam name = " QUERYPARAM NAME " > [ false true ] < / QueryParam > ... < / QueryParams > < / Remove > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Default Policy The following example shows the default settings when you add an AssignMessage policy to your flow in the Apigee UI.
- Optional Type Array of <FormParam> elements or an empty array Parent Element <Copy> Child Elements <FormParam> The <FormParams> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < / Copy > < / AssignMessage > Example 1 The following example copies a single form parameter from the request to the custom request MyCustomRequest : < AssignMessage name = "AM-copy-formparams-1" > < Copy source = "request" > < FormParams > < FormParam name = "paramName" > Form param value 1 < / FormParam > < / FormParams > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > Example 2 The following example copies all form parameters to the custom request MyCustomRequest : < AssignMessage name = "AM-copy-formparams-2" > < Copy source = "request" > < FormParams / > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > Example 3 The following example copies three form parameters to the custom request MyCustomRequest : < AssignMessage name = "AM-copy-formparams-3" > < Copy source = "request" > < FormParams > < FormParam name = "paramName1" / > < FormParam name = "paramName2" / > < FormParam name = "paramName3" / > < / FormParams > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > Example 4 If there are multiple form params with the same name, use the following syntax: < AssignMessage name = "AM-copy-formparams-4" > < Copy source = "request" > < FormParams > < FormParam name = "f1" / > < FormParam name = "f2" / > < FormParam name = "f3.2" / > < / FormParams > < / Copy > < AssignTo createNew = "true" transport = "http" type = "request" > MyCustomRequest < / AssignTo > < / AssignMessage > This example copies f1 , f2 , and the second value of f3 .
- The <Copy> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < !-- Used as the destination for the < Copy > values -- > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < / AssignMessage > Example 1 The following example copies a header, three form parameters, the path, and all query parameters from the request message to a new, custom request named newRequest : < AssignMessage name = "AM-copy-1" > < AssignTo createNew = "true" transport = "http" type = "request" > newRequest < / AssignTo > < Copy source = "request" > < Headers > < Header name = "Header Name 1" / > < / Headers > < FormParams > < FormParam name = "Form Param Name 1" / > < FormParam name = "Form Param Name 2" / > < FormParam name = "Form Param Name 3" / > < / FormParams > < Path>true < / Path > < QueryParams / > < / Copy > < / AssignMessage > Because elements like <Payload> and <Verb> are not present, the policy does not copy those parts of the message.
- Optional Type Complex type Parent Element <AssignMessage> Child Elements <FormParams> <Headers> <QueryParams> The <Add> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <Add> <FormParams> <FormParam name=" FORMPARAM NAME "> FORMPARAM VALUE </FormParam> ... </FormParams> <Headers> <Header name=" HEADER NAME "> HEADER VALUE </Header> ... </Headers> <QueryParams> <QueryParam name=" QUERYPARAM NAME "> QUERYPARAM VALUE </QueryParam> ... </QueryParams> </Add> </AssignMessage> Example 1 The following example modifies the request message by getting the values of three query string parameters from the initial request and setting them as form parameters on the target endpoint request, and then finally removing all of the original query string parameters: <AssignMessage name="AM-add-formparams-3"> <Add> <FormParams> <FormParam name="username">{request.queryparam.name}</FormParam> <FormParam name="zip code">{request.queryparam.zipCode}</FormParam> <FormParam name="default language">{request.queryparam.lang}</FormParam> </FormParams> </Add> <Remove> <QueryParams/> </Remove> <AssignTo>request</AssignTo> </AssignMessage> Example 2 The following example uses the <Headers> element to add a partner-id header to the request that will be sent to the target endpoint: <AssignMessage name="AM-add-headers-1"> <Add> <Headers> <Header name="partner-id">{verifyapikey.VAK-1.developer.app.partner-id}</Header> </Headers> </Add> <AssignTo>request</AssignTo> </AssignMessage> Example 3 The following example uses the <QueryParams> element to add a single query parameter with a static value to the request: <AssignMessage name="AM-add-queryparams-1"> <Add> <QueryParams> <QueryParam name="myParam">42</QueryParam> </QueryParams> </Add> <AssignTo>request</AssignTo> </AssignMessage> This example uses <Add> in the request preflow.

### AssertCondition policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assert-condition-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assert-condition-policy)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- After evaluating the condition, the AssertCondition policy stores the result of the evaluation in the assertcondition. policy-name .truthValue flow variable.
- The <AssertCondition> element uses the following syntax: Syntax <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AssertCondition"> <!-- Display name for this policy --> <DisplayName> DISPLAY NAME </DisplayName> <!-- Assertion's condition where operators are defined --> <Condition> CONDITIONAL STATEMENT </Condition> </AssertCondition> Example The following example checks if the google.dialogflow.my-prefix.claimAmount variable is greater than 0 and less than 1000. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <AssertCondition continueOnError="false" enabled="true" name="MyAssertCondition"> <DisplayName>Assert My Condition</DisplayName> <Condition>(google.dialogflow.my-prefix.claimAmount > 0) and (google.dialogflow.my-prefix.claimAmount LesserThan 1000)</Condition> </AssertCondition> In this example: If the value of google.dialogflow.my-prefix.claimAmount variable is 500, the condition evaluates to true and hence the assertcondition.MyAssertCondition.truthValue variable is set to true .
- Type String Parent Element < PolicyElement > Child Elements None The <DisplayName> element uses the following syntax: Syntax < PolicyElement > <DisplayName> POLICY DISPLAY NAME </DisplayName> ... </ PolicyElement > Example < PolicyElement > <DisplayName>My Validation Policy</DisplayName> </ PolicyElement > The <DisplayName> element has no attributes or child elements.
- Required Type String Parent Element <AssertCondition> Child Elements None <DisplayName> Use in addition to the name attribute to label the policy in the management UI proxy editor with a different, more natural-sounding name.

