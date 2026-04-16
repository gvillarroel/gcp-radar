---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.180Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "ReadPropertySet policy"
feature_slug: "readpropertyset-policy"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
keywords:
  - "readpropertyset"
  - "populates"
  - "reads"
  - "property"
  - "sets"
  - "variables"
  - "policy"
  - "flow"
---

# ReadPropertySet policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The ReadPropertySet policy reads property sets and populates flow variables with the results; The ReadPropertySet policy reads property sets and populates flow variables with the results.

## Extended Definition

The ReadPropertySet policy reads property sets and populates flow variables with the results; The ReadPropertySet policy reads property sets and populates flow variables with the results.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)

## Supporting Pages

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 165
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- PostClientFlow For more information, see the following: Enforcing monetization limits MonetizationLimitsCheckPolicy organization A container for the organization.name property.
- The AssignMessage policy lets you modify the variables in your API proxy flow. apigee A helper variable that provides information about execution time of the policy.
- Apigee sets these variables when a policy throws an error, and values are specific to each policy.
- This document does not include flow variables that are specific to a single policy.

### ExtractVariables policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/extract-variables-policy)
- Source ID: `site-api-reference`
- Final score: 161
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following AssignMessage policy copies it to a header named latitude in the response: < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "GetURIPath" > < DisplayName>GetJSONVar < / DisplayName > < Add > < Headers > < Header name = "latitude" > { geocoderesponse . latitude } < / Header > < / Headers > < / Add > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "response" / > < / AssignMessage > XML < ExtractVariables name = "ExtractVariables-4" > < Source>response < / Source > < XMLPayload > < Namespaces > < Namespace prefix = "dir" > urn : 43 BFF88D - D204 - 4427 - B6BA - 140 AF393142F < / Namespace > < / Namespaces > < Variable name = "travelmode" type = "string" > < XPath > / dir : Directions / dir : route / dir : leg / dir : step / @ mode < / XPath > < / Variable > < Variable name = "duration" type = "string" > < XPath > / dir : Directions / dir : route / dir : leg / dir : step / dir : duration / dir : value < / XPath > < / Variable > < Variable name = "timeunit" type = "string" > < XPath > / dir : Directions / dir : route / dir : leg / dir : step / dir : duration / dir : text < / XPath > < / Variable > < / XMLPayload > < VariablePrefix>directionsresponse < / VariablePrefix > < / ExtractVariables > Consider the following XML response payload: <Directions xmlns="urn:43BFF88D-D204-4427-B6BA-140AF393142F"> <status>OK</status> <route> <summary>I-40 W</summary> <leg> <step mode="DRIVING"> <start location> <lat>41.8507300</lat> <lng>-87.6512600</lng> </start location> <end location> <lat>41.8525800</lat> <lng>-87.6514100</lng> </end location> <duration> <value>19</value> <text>minutes</text> </duration> </step> </leg> </route> </Directions> When Apigee applies the ExtractVariables policy code above to this XML message, it sets three variables: directionsresponse.travelmode : Gets the value DRIVING directionsresponse.duration : Gets the value 19 directionsresponse.timeunit : Gets the value minutes All variables use the same variable prefix of directionsresponse .
- For example, the following AssignMessage policy copies it to the payload of the request: < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "GetURIPath" > < DisplayName>GetHeader < / DisplayName > < Set > < Payload contentType = "text/xml" > < ExtractHeader > { clientrequest . oauthtoken } < / ExtractHeader > < / Payload > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "request" / > < / AssignMessage > JSON < ExtractVariables name = "ExtractVariables-3" > < Source>response < / Source > < JSONPayload > < Variable name = "latitude" type = "float" > < JSONPath > $. results [ 0 ] . geometry . location . lat < / JSONPath > < / Variable > < Variable name = "longitude" type = "float" > < JSONPath > $. results [ 0 ] . geometry . location . lng < / JSONPath > < / Variable > < / JSONPayload > < VariablePrefix>geocoderesponse < / VariablePrefix > < / ExtractVariables > Consider the following JSON response payload: { "results" : [{ "geometry" : { "location" : { "lat" : 37.42291810 , "lng" : - 122.08542120 }, "location type" : "ROOFTOP" , "viewport" : { "northeast" : { "lat" : 37.42426708029149 , "lng" : - 122.0840722197085 }, "southwest" : { "lat" : 37.42156911970850 , "lng" : - 122.0867701802915 } } } }] } When Apigee applies the ExtractVariables policy code above to this JSON message, it sets two variables: geocoderesponse.latitude and geocoderesponse.longitude .
- For example, the following AssignMessage policy embeds the value of that variable into the payload of a new request message: < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "AssignPayload" > < DisplayName>AssignPayload < / DisplayName > < Set > < Payload contentType = "text/xml" > < IdExtractedFromURI > { urirequest . id } < / IdExtractedFromURI > < / Payload > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo createNew = "true" transport = "http" type = "request" > newRequest < / AssignTo > < / AssignMessage > Query params <ExtractVariables name="ExtractVariables-2"> <DisplayName>Extract a value from a query parameter</DisplayName> <Source>request</Source> <QueryParam name="code"> <Pattern ignoreCase="true">DBN{dbncode}</Pattern> </QueryParam> <VariablePrefix>queryinfo</VariablePrefix> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> </ExtractVariables> Consider the sample policy code above working with the following incoming request: GET http://example.com/accounts/12797282?code=DBN88271 When Apigee applies the ExtractVariables policy code above to this incoming request, it sets the variable queryinfo.dbncode to 88271 .
- The following example shows an ExtractVariables policy that populates two variables from the JSON body of a response: < ExtractVariables name = "ExtractVariables-3" > < Source>response < / Source > < JSONPayload > < Variable name = "latitude" type = "float" > < JSONPath > $. results [ 0 ] . geometry . location . lat < / JSONPath > < / Variable > < Variable name = "longitude" type = "float" > < JSONPath > $. results [ 0 ] . geometry . location . lng < / JSONPath > < / Variable > < / JSONPayload > < VariablePrefix>geocoderesponse < / VariablePrefix > < / ExtractVariables > Writing to the same variable in multiple places Take care when choosing the names of variables to set.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Required Type Complex object Parent Element N/A Child Elements <Add> <AssignTo> <AssignVariable> <Copy> <DisplayName> <IgnoreUnresolvedVariables> <Remove> <Set> The <AssignMessage> element uses the following syntax: Syntax The <AssignMessage> element uses the following syntax: < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < !-- All AssignMessage child elements are optional -- > < Add > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < / Add > < AssignTo createNew = "[true false]" transport = "http" type = "[request response]" > DESTINATION VARIABLE NAME < / AssignTo > < AssignVariable > < Name> VARIABLE NAME < / Name > < PropertySetRef> SOURCE VARIABLE < / PropertySetRef > < Ref> SOURCE VARIABLE < / Ref > < ResourceURL> RESOURCE URL OR TEMPLATE < / ResourceURL > < Template> MESSAGE TEMPLATE < / Template > or < Template ref = ' TEMPLATE VARIABLE ' >< / Template > < Value> VARIABLE VALUE < / Value > < / AssignVariable > < Copy source = " VARIABLE NAME " > < !-- Can also be an empty array ( < FormParams / > ) --> < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < !-- Copy all headers -- > < Headers / > < !-- or , copy specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Path > [ false true ] < / Path > < Payload > [ false true ] < / Payload > < !-- Can also be an empty array ( < QueryParams / > ) --> < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode > [ false true ] < / StatusCode > < Verb > [ false true ] < / Verb > < Version > [ false true ] < / Version > < / Copy > < DisplayName> POLICY DISPLAY NAME < / DisplayName > < IgnoreUnresolvedVariables > [ true false ] < / IgnoreUnresolvedVariables > < !-- Can also be empty to remove everything from the message ( < Remove / > ) -- > < Remove > < !-- Remove all form parameters -- > < FormParams / > < !-- or , remove specific form parameters by name -- > < FormParams > < FormParam name = " FORMPARAM NAME " / > < !-- or -- > < FormParam name = " FORMPARAM NAME " > [ false true ] < / FormParam > ... < / FormParams > < !-- Remove all headers -- > < Headers / > < !-- or , remove specific headers by name -- > < Headers > < Header name = " HEADER NAME " / > < !-- or -- > < Header name = " HEADER NAME " > [ false true ] < / Header > ... < / Headers > < Payload > [ false true ] < / Payload > < !-- Remove all query parameters -- > < QueryParams / > < !-- or , remove specific query parameters by name -- > < QueryParams > < QueryParam name = " QUERYPARAM NAME " / > < !-- or -- > < QueryParam name = " QUERYPARAM NAME " > [ false true ] < / QueryParam > ... < / QueryParams > < / Remove > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Default Policy The following example shows the default settings when you add an AssignMessage policy to your flow in the Apigee UI.
- The <Set> element uses the following syntax: Syntax < AssignMessage continueOnError = "[false true]" enabled = "[true false]" name = " POLICY NAME " > < Set > < Authentication > < HeaderName> HEADER NAME < / HeaderName > < !-- Use either GoogleAccessToken or GoogleIDToken -- > < GoogleAccessToken > < Scopes > < Scope> SCOPE < / Scope > ... < / Scopes > < / GoogleAccessToken > ----- or ----- < GoogleIDToken > < Audience ref = ' FLOW VARIABLE NAME > TARGET URL </Scope> < / GoogleAccessToken > < / Authentication > < FormParams > < FormParam name = " FORMPARAM NAME " > FORMPARAM VALUE < / FormParam > ... < / FormParams > < Headers > < Header name = " HEADER NAME " > HEADER VALUE < / Header > ... < / Headers > < Path> PATH < / Path > < Payload contentType = " CONTENT TYPE " variablePrefix = " PREFIX " variableSuffix = " SUFFIX " > NEW PAYLOAD < / Payload > < QueryParams > < QueryParam name = " QUERYPARAM NAME " > QUERYPARAM VALUE < / QueryParam > ... < / QueryParams > < StatusCode> HTTP STATUS CODE or { variable } < / StatusCode > < Verb > [ GET POST PUT PATCH DELETE { variable }] < / Verb > < Version > [ 1.0 1.1 { variable }] < / Verb > < / Set > < / AssignMessage > Example 1 The following example sets a specific header.
- 6: Set/get variables The following example uses three AssignMessage policies: Creates three flow variables in the request, with static values Gets the flow variables dynamically in a second policy in the request flow Sets them in the payload of the response < !-- Policy #1: Set variables in the request -- > < AssignMessage name = "AM-set-variables" > < !-- Create a variable named myAppSecret -- > < AssignVariable > < Name>myAppSecret < / Name > < Value>42 < / Value > < / AssignVariable > < !-- Create a variable named config . environment -- > < AssignVariable > < Name>config . environment < / Name > < Value>test < / Value > < / AssignVariable > < !-- Create a variable named config . protocol -- > < AssignVariable > < Name>config . protocol < / Name > < Value>gopher < / Value > < / AssignVariable > < / AssignMessage > In the first policy, the <AssignVariable> element creates and sets three variables in the request.
- Assuming the Service Callout's response variable is the default calloutResponse , the following policy gets the second Set-Cookie header value. < AssignMessage name = "AM-Payload-from-SC-header" > < Set > < Payload contentType = "application/json" > { "Cookies from Service Callout" : " {calloutResponse.header.Set-Cookie.2}" } < / Payload > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < AssignTo>response < / AssignTo > < / AssignMessage > To list all header values, use the following variable instead: {calloutResponse.header.Set-Cookie. values } 8: Store and remove form params, headers, query params If you want to use <Remove> to delete your headers, query parameters, or form parameters, but retain access to their values later in the policy flow, you can store their values using <AssignVariable> . < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "AM-StoreAndRemove" > < DisplayName>AM - StoreAndRemove < / DisplayName > < AssignVariable > < Name>var grant type < / Name > < Ref>request . formparam . grant type < / Ref > < / AssignVariable > < Remove > < Headers / > < FormParams / > < Payload / > < / Remove > < Set > < Headers > < Header name = "Content-Type" > application / x - www - form - urlencoded < / Header > < Header name = "Accept" > application / json < / Header > < Header name = "Grant-Type" > { var grant type } < / Header > < / Headers > < / Set > < IgnoreUnresolvedVariables>false < / IgnoreUnresolvedVariables > < AssignTo createNew = "false" transport = "http" type = "request" / > < / AssignMessage > Note : Form parameters, headers, and query parameters stripped using <Remove> in the Assign Message policy cannot be accessed after completion of the policy flow unless their values are stored in variables as described in this example.

