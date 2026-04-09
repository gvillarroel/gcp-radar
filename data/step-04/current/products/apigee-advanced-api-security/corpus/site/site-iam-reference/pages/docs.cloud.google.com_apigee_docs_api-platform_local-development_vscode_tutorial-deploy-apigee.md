---
title: "Step 7: Deploy to an Apigee environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/api-platform/local-development/vscode/tutorial-deploy-apigee
  title: "Step 7: Deploy to an Apigee environment \_|\_ Google Cloud Documentation"
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
Step 7: Deploy to an Apigee environment
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
View
Apigee Edge documentation.
After you complete local development and testing with Apigee in VS Code, you are ready to deploy your API as an archive to an Apigee
environment. In this step, you'll create an Apigee environment that supports archive deployment and deploy an archive of your API proxy configuration to the Apigee environment.
Before you begin :
Install Google Cloud SDK and the gcloud beta apigee component, as described in Getting started using gcloud with Apigee .
Follow the steps in Create an environment to perform the following:
Create a new dev environment in your Apigee organization, enabling Archive as the deployment type. Use the UI or
API .
Attach the environment to a runtime instance using the Instances attachment API .
This command triggers a long-running operation. Ensure that the environment has been attached to the runtime before continuing.
Create an environment group if you do not already have one using the
Create environment groups API .
Ensure that the environment group has been created before continuing. You can check the status of your new group using a
request like the following:
curl -i -H " $AUTH " -H "Content-Type:application/json" \
"https://apigee.googleapis.com/v1/organizations/ $PROJECT_ID /environments/ ENVIRONMENT_NAME "
Attach the new environment to the environment group using the Environment group attachment API .
Attaching an environment to the group makes the proxies in that environment
routable via the hostnames in the group. This triggers a long-running operation that can take several minutes to complete. We recommend that you wait a minute or two before continuing to the next step. In the meantime you can check the status of the operation as before.
Deploy an archive of your API proxy configuration to the Apigee environment.
In the Terminal tab in Apigee VS Code, navigate to the myapigeeworkspace directory.
cd myapigeeworkspace
When you run ls the directory should contain the src folder.
Run the following command:
gcloud beta apigee archives deploy --environment=dev --labels=release=052021
The following provides an example of the response:
Using Apigee organization dev
Waiting for operation [b64c2665-b5ac-43cc-9e2d-232e8895c2ed] to complete...done
Run the following command in the Terminal tab to test your API:
curl https:// INTERNAL_LOAD_BALANCER_IP /helloworld /
-H "Host: ENV_GROUP_HOSTNAME "
For more information about the variables in this example and how to set up API access, see Deploy a sample proxy .
The following error message is displayed:
{"fault":{"faultstring":"Failed to resolve API Key variable request.queryparam.apikey",
"detail":{"errorcode":"steps.oauth.v2.FailedToResolveAPIKey"}}}
You need to create an API product that includes the helloworld API, then create and register a developer with the API product in order to obtain an API key.
Obtain an API key.
Create an API product using the Apigee UI:
Go to the API products page:
In the Google Cloud console, go to the Distribution > API products page.
Go to API products
Click + Create .
Enter the Product Details for your API product.
Enter the following information in the fields:
Field
Setting
Name:
myproduct
Display name:
myproduct
Environment:
dev
Access:
Public
Quota:
Leave blank
Allowed OAuth scope:
Leave blank
In the Operations section, click + Add an Operation .
Under Source select helloworld from the API Proxy dropdown menu.
Under Operation , in the Path field, enter / .
Leave other fields set to their defaults.
Click Save to save the Operation.
Click Save to save the API product.
Create a developer in your organization:
In the Google Cloud console, go to the Distribution > Developers page.
Go to Developers
Click + Create .
Enter the following information in the fields:
Field
Setting
First Name:
Alex
Last Name:
Hamilton
Username:
ahamilton
Email:
ahamilton@example.com
Click Add .
Register an app:
Open the app editor.
In the Google Cloud console, go to the Distribution > Apps page.
Go to Apps
Click + Create .
Enter the following information in the fields:
Field
Setting
Name:
myapp
Display name:
myapp
Developer:
ahamilton@example.com
Callback URL:
Leave blank
Notes:
Leave blank
Expiry:
Never
Product:
Click Add product .
Select myproduct .
Click Add .
Custom attributes:
Leave blank
Click Create .
Copy the API key.
In the Google Cloud console, go to the Distribution > Apps page.
Go to Apps
Click myapp .
In the Credentials section, next to Key , click
visibility_off
Show .
Click
content_copy
Copy .
Run the curl call again passing the API key using the apikey query parameter, as follows:
curl -v https:// $PUBLIC_FACING_IP /helloworld?apikey=ZQA5euYtNeJ7ZCGCJMpvd6F2BZOmxOzY
The following response is returned:
{
"root": {
"city": "San Jose",
"firstName": "John",
"lastName": "Doe",
"state": "CA"
}
}
Congratulations! You've successfully deployed your API archive to an Apigee environment!
In the next step, you'll promote your API archive to an Apigee production environment.
1
2
3
4
5
6
7
(NEXT) Step 8: Promote an archive to production
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
