---
title: "Step 3: Configure and deploy an environment \_|\_ Apigee \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/provision-terraform
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy
  title: "Step 3: Configure and deploy an environment \_|\_ Apigee \_|\_ Google Cloud\
    \ Documentation"
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
Step 3: Configure and deploy an environment
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
Configure and deploy an environment that includes the helloworld API proxy.
Note: Before deploying an environment, ensure that you have installed the Apigee Emulator .
Create an environment:
Position your cursor over the environments folder and click
.
The Create environment wizard opens.
Enter dev for the environment name and press Enter .
The environment is created.
Expand the dev environment folder to view its contents.
When you create an environment, a set of configuration files are
included by default in the dev environment folder for
configuring your deployment and any required debug masks, flow hooks,
or target servers.
Configure the deployment details for the helloworld API proxy in the environment:
Position your cursor over the deployments.json file and click .
The Deployments wizard opens.
Select the helloworld API proxy to add it to the deployment and click OK .
The deployments.json file is opened in the editor. The file has been updated to include the helloworld API proxy in the proxies deployment array:
{
"proxies": [
{
"name": "helloworld"
}
],
"sharedflows": []
}
Deploy the dev environment:
Position your cursor over the dev environment folder in the Apigee section and click .
Note: If prompted to select a test bundle to export, click Deploy without a test bundle . This prompt displays only if you have created a test bundle in your Apigee workspace. You'll create and export a test bundle in the next step.
The dev environment is deployed and the Output tab shows a success message.
The helloworld deployed application information is displayed in the emulators section:
Congratulations! You've deployed your first API proxy application. In the next step, you'll test the API proxy using curl.
1
2
3
(NEXT) Step 4: Test your API
5
6
7
8
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
