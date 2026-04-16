---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.144Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "VerifyAPIKey app group flow variables"
feature_slug: "verifyapikey-app-group-flow-variables"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/introduction-flow-variables"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy"
keywords:
  - "exposes"
  - "group"
  - "verifyapikey"
  - "variables"
  - "policy"
  - "flow"
---

# VerifyAPIKey app group flow variables

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The VerifyAPIKey policy now exposes app_group_app and app_group_name flow variables.

## Extended Definition

The VerifyAPIKey policy now exposes app_group_app and app_group_name flow variables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/introduction-flow-variables](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/introduction-flow-variables)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy)

## Supporting Pages

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The AssignMessage policy lets you modify the variables in your API proxy flow. apigee A helper variable that provides information about execution time of the policy.
- This flow variable is added by the VerifyAPIKey or VerifyAccessToken policy attached to the API proxy.
- This flow variable is added by the VerifyAPIKey or VerifyAccessToken policy attached to the API proxy.
- This flow variable is added by the VerifyAPIKey or VerifyAccessToken policy attached to the API proxy.

### FlowCallout policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/flow-callout-policy)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The shared flow can retrieve these variables for use in its own code. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <FlowCallout async="false" continueOnError="false" enabled="true" name="String-Handler"> <DisplayName>String Handler</DisplayName> <Parameters> <Parameter name="input">Gladys Kravitz</Parameter> <Parameter name="operations">concatenate tolowercase</Parameter> <Parameter name="outputVariable">string.handler.output</Parameter> </Parameters> <SharedFlowBundle>StringHandler</SharedFlowBundle> </FlowCallout> The following default shared flow includes a SharedStringFunctions JavaScript policy that executes when the shared flow is called from a FlowCallout policy. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SharedFlow name="default"> <Step> <Name>SharedStringFunctions</Name> </Step> </SharedFlow> In the shared flow, the following SharedStringFunctions JavaScript policy specifies the SharedStringFunctions.js JavaScript file with the code to execute. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <Javascript async="false" continueOnError="false" enabled="true" timeLimit="200" name="SharedStringFunctions"> <DisplayName>SharedStringFunctions</DisplayName> <Properties/> <ResourceURL>jsc://SharedStringFunctions.js</ResourceURL> </Javascript> The following JavaScript, SharedStringFunctions.js , executes from the SharedStringFunctions JavaScript policy.
- This script retrieves values from variables created from FlowCallout policy Parameter elements. // Input value from the calling API proxy . var handledString = context . getVariable ( "input" ); // Variable to use for output from this script . var outputVariable = context . getVariable ( "outputVariable" ); // A space - separated list of things to do to the input string . // Convert to lower case to handle unintentional capitals in configuration . var operation = context . getVariable ( "operations" ) . toLowerCase (); // If "lowercase" was given as an operation , convert the input to lowercase . if ( operation . includes ( "tolowercase" )) { handledString = handledString . toLowerCase (); } // If "concatenate" was given as an operation , concatenate the input . if ( operation . includes ( "concatenate" )) { handledString = handledString . replace ( / \ s +/ g , '' ); } // Assign the resulting string to the output variable specified by // the calling API proxy . context . setVariable ( outputVariable , handledString ); Execution flows back from the JavaScript policy, to the shared flow, then to the FlowCallout policy in the originating API proxy.
- The following shared flow definition includes a Verify-API-Key policy that executes when the shared flow is called from a FlowCallout policy in an API proxy. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SharedFlow name="default"> <Step> <Name>Verify-API-Key</Name> </Step> </SharedFlow> The VerifyAPIKey policy within the preceding shared flow retrieves the key value and verifies it. <VerifyAPIKey async="false" continueOnError="false" enabled="true" name="Verify-API-Key"> <DisplayName>Verify API Key</DisplayName> <APIKey ref="request.queryparam.apikey"/> </VerifyAPIKey> The following FlowCallout policy, used in an API proxy, calls the preceding shared flow to verify the API key.
- None Optional String <Parameters> element Specifies the set of <Parameter> elements to pass as variables into the shared flow called by this policy.

### Using flow variables \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/introduction-flow-variables](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/introduction-flow-variables)
- Source ID: `site-docs-reference-required-3`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following AssignMessage policy takes the value of the variable client.ip and puts it in a request header called Client-IP . < AssignMessage name = "set-ip-in-header" > < AssignTo createNew = "false" transport = "http" type = "request" > request < / AssignTo > < Set > < Headers > < Header name = "Client-IP" > { client . ip } < / Header > < / Headers > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < / AssignMessage > In conditional flows, the curly braces are not necessary.
- If set on the response flow, the header is sent back to the client app. < AssignMessage name = "set-ip-in-header" > < AssignTo createNew = "false" transport = "http" type = "request" > request < / AssignTo > < Set > < Headers > < Header name = "My-Client-IP" > { client . ip } < / Header > < / Headers > < / Set > < IgnoreUnresolvedVariables>true < / IgnoreUnresolvedVariables > < / AssignMessage > For another example, when a Quota policy executes, several flow variables are populated with policy-related values.
- For example, this code sets a response header with the value obtained from the flow variable target.name. context.setVariable("response.header.X-Apigee-Target", context.getVariable("target.name")); This technique of using JavaScript to read and set variables is similar to the work you can do with the AssignMessage policy (shown previously).
- This is a common pattern used in API proxy configurations. <PreFlow name="PreFlow"> <Request> <Step> <Condition>request.verb equals "POST"</Condition> <Name>VerifyApiKey</Name> </Step> </Request> </PreFlow> Now, you might wonder, where do variables like request.verb , client.ip , and system.time come from?

