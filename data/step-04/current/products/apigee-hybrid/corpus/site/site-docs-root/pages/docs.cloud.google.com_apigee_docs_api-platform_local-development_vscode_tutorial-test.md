---
title: "Step 4: Test your API \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/hybrid/v1.9/what-is-hybrid
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-test
  title: "Step 4: Test your API \_|\_ Apigee \_|\_ Google Cloud Documentation"
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
Step 4: Test your API
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
To test the deployed helloworld API, click the Terminal tab
in Apigee in Cloud Code and enter the following curl call:
curl 0:8998/helloworld
The following error message is displayed:
Because you enabled API key-based authentication when creating the API proxy, you need to pass an API key using the apikey query parameter when calling the API.
To obtain an API key, you need to create a test bundle and configure the following test resources:
API product used to bundle the API and make it available to developers.
Developer that will create an app to access the API.
Developer app that will enable access to the API using an API key.
Note: The examples in this section use 0
for the host value and 8998 for the port value. You can configure
the port values, as described in
Manage the Apigee Emulator. If you get an error when using
0 , substitute localhost for the 0 :
curl localhost:8998/helloworld
Build and Export test resources
Create a test bundle:
Position your cursor over the test data folder and click .
The Create test bundle wizard opens.
Enter mytestbundle for the test bundle name and press Enter .
The test bundle is created.
Expand the mytestbundle folder to view its contents.
Configure the API product test resource:
Position your cursor over the products.json file and click .
The Create API product wizard opens.
Enter myproduct for the name of the API product and press Enter to confirm and proceed.
Enter myproduct for the description of the API product and press Enter to confirm and proceed.
Select helloworld to add the API proxy to the API product and click OK .
The products.json file is opened in the editor with the new API product configured:
[
{
"attributes": [
{
"name": "sample_attribute_0",
"value": "sample_attribute_value_0"
}
],
"scopes": [],
"environments": [],
"apiResources": [
"/",
"/*",
"/**"
],
"quota": "100",
"quotaInterval": "1",
"quotaTimeUnit": "minute",
"name": "myproduct",
"displayName": "myproduct",
"proxies": [
"helloworld"
]
}
]
Configure the developer test resource:
Position your cursor over the developers.json file and click .
The Create developer wizard opens.
Enter the following values at the prompts and press Enter to confirm and proceed:
Developer email: ahamilton@example.com
Username: ahamilton
First name: Alex
Last name: Hamilton
The developers.json file is opened in the editor with the new developer configured:
[
{
"attributes": [
{
"name": "sample_attribute_0",
"value": "sample_attribute_value_0"
}
],
"email": "ahamilton@example.com",
"userName": "ahamilton",
"firstName": "Alex",
"lastName": "Hamilton"
}
]
Configure the developer app test resource:
Position your cursor over the developerapps.json file and click .
The Create developer app wizard opens.
Select ahamilton@example.com as the owner of the app.
Enter the following values at the next set of prompts and press Enter to confirm and proceed:
App name: myapp
Description: myapp
Callback URL: Leave blank
Select myproduct to add it to the app and click OK .
Select never for the expiry value.
The developerapps.json file is opened in the editor with the new app configured:
[
{
"attributes": [
{
"name": "sample_attribute_0",
"value": "sample_attribute_value_0"
}
],
"developerEmail": "ahamilton@example.com",
"name": "myapp",
"displayName": "myapp",
"callbackUrl": "",
"apiProducts": [
"myproduct"
],
"expiryType": "never"
}
]
Export the test resources to the Apigee Emulator.
Position the cursor over the mytestbundle test bundle and click .
Note: If multiple containers for the Apigee Emulator are running,
you are prompted to select the container to which you want to deploy the environment.
The active test resources appears in the Apigee Emulators section, as shown in the following figure.
Obtain the API key
Obtain the API key credentials for your developer app:
In the emulators section, under Active test data , click Active developer apps .
The active developer apps configuration file is opened in the editor. The file contains credentials for myproduct , as highlighted in the following figure.
Copy the consumerKey value (without the quotes) for the myproduct API product.
Test your API
Test your API with the API key:
Pass the API key in your curl call using the apikey query parameter, as follows:
curl 0:8998/helloworld? apikey= API_KEY
The following response is returned:
Hello, Guest!
Congratulations! You've successfully run an API in your local environment.
In the next step, you'll learn how to change the target endpoint.
1
2
3
4
(NEXT) Step 5: Change the target endpoint
6
7
8
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
