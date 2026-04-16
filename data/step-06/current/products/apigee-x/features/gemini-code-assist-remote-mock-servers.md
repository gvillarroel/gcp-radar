---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.167Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Gemini Code Assist remote mock servers"
feature_slug: "gemini-code-assist-remote-mock-servers"
latest_feature_date: "2024-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference"
keywords:
  - "remote"
  - "mock"
  - "servers"
  - "management"
  - "gemini"
  - "assist"
  - "code"
---

# Gemini Code Assist remote mock servers

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist API management can deploy Google Cloud-based remote mock servers for testing and validating designed APIs.

## Extended Definition

Gemini Code Assist API management can deploy Google Cloud-based remote mock servers for testing and validating designed APIs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)

## Supporting Pages

### API proxy configuration reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/api-proxy-configuration-reference)
- Source ID: `site-api-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- For example, in the following Flow configuration, any inbound request that does not include the path suffix /first or /second will cause the ThirdFlow to execute, enforcing the policy called Return404 . <Flows> <Flow name="FirstFlow"> <Condition>proxy.pathsuffix MatchesPath "/first"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> </Request> </Flow> <Flow name="SecondFlow"> <Condition>proxy.pathsuffix MatchesPath "/second"</Condition> <Request> <Step><Name>FirstPolicy</Name></Step> <Step><Name>SecondPolicy</Name></Step> </Request> </Flow> <Flow name="ThirdFlow"> <Request> <Step><Name>Return404</Name></Step> </Request> </Flow> </Flows> Resources "Resources" (resource files for use in API proxies) are scripts, code, and XSL transformations that can be attached to Flows using policies.
- Here's a sample TargetEndpoint configuration: <TargetEndpoint name="default"> <PreFlow/> <Flows/> <PostFlow/> <EventFlow/> <HTTPTargetConnection> <URL>http://mocktarget.apigee.net</URL> <SSLInfo/> <Authentication/> </HTTPTargetConnection> <FaultRules/> <DefaultFaultRule/> <ScriptTarget/> <LocalTargetConnection/> </TargetEndpoint> TargetEndpoint configuration elements A target endpoint can call a target in one of the following ways: HTTPTargetConnection for HTTP or HTTPS calls LocalTargetConnection for local proxy-to-proxy chaining Configure only one of these in a target endpoint.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-3`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see OpenAPI spec for the helloworld sample . openapi : 3.0.0 info : description : OpenAPI Specification for the Apigee mock target service endpoint . version : 1.0.0 title : Mock Target API paths : / : get : summary : View personalized greeting operationId : View a personalized greeting description : View a personalized greeting for the specified or guest user . parameters : - name : user in : query description : Your user name . required : false schema : type : string responses : "200" : description : Success / help : get : summary : Get help operationId : Get help description : View help information about available resources in HTML format . responses : "200" : description : Success ...
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Using mock APIs : You can create mock APIs to simulate API behavior before the backend implementation is complete to enable frontend development to progress independently.

### Flow variables reference \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference](https://docs.cloud.google.com/apigee/docs/api-platform/reference/variables-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For example, if you make a call to a sample proxy http://my org-test.apigee.net/my-mock-proxy/user?user=Dude , and the target endpoint is http://example.com:8080 , then the value is: Request: n/a Response: http://example.com/user?user=Dude Target response request.verb String Read only The HTTP verb used for the request.
- Request: request.uri = /my-mock-proxy/user?user=Dude Response: request.uri = /user?user=Dude Proxy request (differs in the response) request.url String Read only The complete URL of the request made to the target endpoint, including the query string parameters, but not including the port number (if specified).
- For example: <ProxyEndpoint> ... <BasePath>/my-mock-proxy</BasePath> Points to <TargetEndpoint> ... <HTTPTargetConnection> http://mocktarget.apigee.net </HTTPTargetConnection> In the request , request.uri is the proxy base path + the remainder of the address, including query parameters.

