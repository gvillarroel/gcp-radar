---
title: "Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-security/security-actions
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-attach-policy
  title: "Step 6: Attach a policy \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Step 6: Attach a policy
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Apigee policies can transform message formats, enforce access control, call remote services, authorize users, examine message content for potential threats, and do much more. For more information, see What's a policy?
Proxy and target endpoints define a pipeline for request and response message processing referred to as request and response flows . Flows are sequential stages along the API request processing path. Policies are attached at different points in the request and response message flows as processing steps .
In the following steps, you create a new policy and attach it to your API proxy in the PreFlow response flow to ensure the policy is applied before any other processing takes place. The XMLtoJSON policy used in this tutorial converts the payload of the API's response message from XML to JSON.
Create an XMLtoJSON policy.
Expand the helloworld API proxy bundle, position your cursor over the policies folder, and click .
The Create policy wizard opens.
Select Mediation as the policy category.
Select XML to JSON as the policy type.
Enter XMLtoJSON as the policy name and click Enter .
The policy is added to the /policies folder for the API proxy and opened in the editor.
Click XMLtoJSON.xml to edit the policy. Set the <OutputVariable> and <Source> elements to response and save your changes.
Note : You'll attach the policy to the response flow in the API proxy PreFlow in the next step.
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<XMLToJSON async="false" continueOnError="false" enabled="true" name="XMLtoJSON">
<DisplayName>XMLtoJSON</DisplayName>
<Properties/>
<Format>yahoo</Format>
<OutputVariable> response </OutputVariable>
<Source> response </Source>
</XMLToJSON>
Attach the policy to the default proxy endpoint.
Expand the proxies folder in the helloworld API proxy bundle and click default.xml to open the file in the editor.
Add a <Step> element that references the XMLtoJSON policy to the <Response> flow in the API proxy <PreFlow> :
<ProxyEndpoint name="default">
<PreFlow name="PreFlow">
<Request>
<Step>
<Name>verify-api-key</Name>
</Step>
<Step>
<Name>remove-query-param-apikey</Name>
</Step>
<Step>
<Name>impose-quota</Name>
</Step>
</Request>
<Response>
<Step>
<Name>XMLtoJSON</Name>
</Step>
</Response>
</PreFlow>
...
</ProxyEndpoint>
Save your changes to the file.
To redeploy the environment, position your cursor over the dev environment folder and click .
When prompted to select a test bundle to export, click Deploy without a test bundle because the test bundle has already been exported.
Call your API in the Terminal tab.
curl 0:8998/helloworld?apikey=ZQA5euYtNeJ7ZCGCJMpvd6F2BZOmxOzY
The XML response is converted to JSON, as follows:
{
"root": {
"city": "San Jose",
"firstName": "John",
"lastName": "Doe",
"state": "CA"
}
}
Congratulations! You've successfully attached the XMLtoJSON policy to your API proxy!
Next, you will deploy your API as an archive to an Apigee environment for integration testing and production release.
1
2
3
4
5
6
(NEXT) Step 7: Deploy to an Apigee environment
8
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
