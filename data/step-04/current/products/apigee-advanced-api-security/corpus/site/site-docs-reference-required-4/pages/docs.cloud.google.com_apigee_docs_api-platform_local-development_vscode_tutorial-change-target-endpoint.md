---
title: "Step 5: Change the target endpoint \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-security/security-actions
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-change-target-endpoint
  title: "Step 5: Change the target endpoint \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Step 5: Change the target endpoint
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Change your proxy's target endpoint to one that returns more meaningful data.
Expand the helloworld API proxy bundle and click default.xml in the targets
folder to open the file in the editor.
Update the <URL> element to append xml to the existing URL:
<TargetEndpoint name="default">
<HTTPTargetConnection>
<URL>https://mocktarget.apigee.net/ xml </URL>
</HTTPTargetConnection>
</TargetEndpoint>
Select File > Save or ⌘S to save your edits.
To redeploy the environment, position your cursor over the dev environment folder and click .
When prompted to select a test bundle to export, click Deploy without a test bundle because the test bundle has already been exported.
Run your API in the Terminal tab.
curl 0:8998/helloworld?apikey=ZQA5euYtNeJ7ZCGCJMpvd6F2BZOmxOzY
The following response is returned:
<?xml version="1.0" encoding="UTF-8"?>
<root>
<city>San Jose</city>
<firstName>John</firstName>
<lastName>Doe</lastName>
<state>CA</state>
</root>
In the next step, you'll add a new policy to your API.
1
2
3
4
5
(NEXT) Step 6: Attach a policy
7
8
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
