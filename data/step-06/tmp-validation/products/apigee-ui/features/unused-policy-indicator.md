---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:20:51.424Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Unused policy indicator"
feature_slug: "unused-policy-indicator"
latest_feature_date: "2025-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy"
keywords:
  - "indicator"
  - "unused"
  - "policy"
  - "icon"
  - "sharedflow"
  - "shows"
  - "editor"
  - "proxy"
---

# Unused policy indicator

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The proxy and sharedflow editor shows an icon next to policies that are not attached to any flow.

## Extended Definition

The proxy and sharedflow editor shows an icon next to policies that are not attached to any flow.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)

## Supporting Pages

### Add the SpikeArrest policy to your API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/add-spike-arrest)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The text editor displays the XML code for the proxy, including the Spike Arrest policy step in the Response element of the PreFlow. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <SpikeArrest continueOnError="false" enabled="true" name="SA-"> <DisplayName>SA-</DisplayName> <Properties/> <Identifier ref="request.header.some-header-name"/> <MessageWeight ref="request.header.weight"/> <Rate>30ps</Rate> </SpikeArrest> In the XML for the policy, change the value of the <Rate> element to 1pm (which translates into roughly two requests allowed every 60 seconds in the cloud).
- Select Proxy Endpoints > default > PreFlow in the left-hand pane: Note: You may need to expand the visual editor in the right-hand pane to see all the elements.
- Click the + button next to PreFlow in the Response pane at the bottom-right of the visual editor: In the Add policy step dialog, select the Spike Arrest policy.
- To add the SpikeArrest policy to an API proxy: In the Google Cloud console, go to the Apigee > Proxy development > API Proxies page.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics OAuth 2.0 home OAuthV2 policy Download API proxies (which shows how to bundle an API proxy into a ZIP file like the one you downloaded) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The text editor displays the XML code for the AccessTokenClientCredential conditional flow: <Flow name="AccessTokenClientCredential"> <Description/> <Request> <Step> <Name> GenerateAccessTokenClient </Name> </Step> </Request> <Response/> <Condition>(proxy.pathsuffix MatchesPath "/accesstoken") and (request.verb = "POST")</Condition> </Flow> A flow is a processing step in an API proxy.
- Click the Verify OAuth v2.0 Access Token icon in the right-hand pane and look at the XML below it in the text editor. <OAuthV2 async="false" continueOnError="false" enabled="true" name="verify-oauth-v2-access-token"> <DisplayName>Verify OAuth v2.0 Access Token</DisplayName> <Operation>VerifyAccessToken</Operation> </OAuthV2> Notice that the <Operation> is VerifyAccessToken .
- Because the API proxy has the Verify OAuth v2.0 Access Token policy checking for a valid OAuth 2.0 token in the request, the call should fail with the following message: {"fault":{"faultstring":"Invalid access token","detail":{"errorcode":"oauth.v2.InvalidAccessToken"}}} In this case, failure is good!

### Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy](https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The policy is added to the /policies folder for the API proxy and opened in the editor.
- Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> : <ProxyEndpoint name="default"> <PreFlow name="PreFlow"> <Request> <Step> <Name>verify-api-key</Name> </Step> <Step> <Name>remove-query-param-apikey</Name> </Step> <Step> <Name>impose-quota</Name> </Step> </Request> <Response> <Step> <Name>XMLtoJSON</Name> </Step> </Response> </PreFlow> ... </ProxyEndpoint> Save your changes to the file.
- Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step. <?xml version="1.0" encoding="UTF-8" standalone="yes"?> <XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON"> <DisplayName>XMLtoJSON</DisplayName> <Properties/> <Format>yahoo</Format> <OutputVariable> response </OutputVariable> <Source> response </Source> </XMLToJSON> Attach the policy to the default proxy endpoint.
- In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place.

