---
title: "Trying Out the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/trying-the-api
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/trying-the-api
  title: "Trying Out the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
Trying Out the Admin API
Stay organized with collections
Save and categorize content based on your preferences.
There are two options for trying out the Admin API, either the
OAuth 2.0 Playground or the APIs Explorer .
OAuth 2.0 Playground
Use the OAuth 2.0 Playground to preview an authentication flow, obtain
access tokens, and also send HTTP requests. To use the OAuth 2.0 Playground:
Open the OAuth 2.0 Playground .
In Step 1, the https://www.googleapis.com/auth/cloud-platform scope is
pre-selected for you. Click Authorize APIs to start the authentication flow.
Follow the "implicit authentication flow" by clicking Allow to
authorize the Google OAuth 2.0 Playground access to your
Google Cloud services.
In Step 2, click Exchange authorization code for tokens to receive an
access token.
Note: You can use these access tokens in HTTP requests that you want to
run from the command line, as long as you do so prior to their
expiration time. For example, use these access tokens to run cURL
commands.
In Step 3, the Request URI field is pre-populated with the example URI:
https://appengine.googleapis.com/v1/apps/{appsId}/services/default
You must replace {appsId} with your Google Cloud Platform project ID
and then click Send the request to view the details about the
default service of your project.
Use this URI field to send HTTP requests against the resources that you
specify in your project. For more information about specifying resources in
request URIs, see
REST in the Admin API .
Tip: You can also click List possible operations and then scroll to the
App Engine Admin API section to view a list of HTTP request. If
you select an operation, it will populate the Request URI field with a
template URI, in which you must specify the IDs of your resources before
sending the request.
APIs Explorer
Use the APIs Explorer to view a list of all the Admin API
methods, fields, and their descriptions. You can then click the items in the
list to generate URIs and send HTTP requests against the resources that you
specify.
Tip: You can also use the APIs Explorer widgets in
each of the API methods, for example
apps.get .
To use the APIs Explorer:
Open the APIs Explorer .
Select the method that you want to try out.
Specify the IDs of the resources in your project as well as any supported
fields.
Click Execute to send the HTTP request against your project and then
view both the generated request URI and HTTP response.
What's next
Accessing the API
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
