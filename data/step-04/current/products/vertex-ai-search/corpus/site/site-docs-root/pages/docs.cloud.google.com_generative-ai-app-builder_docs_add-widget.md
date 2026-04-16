---
title: "Add the search widget to a web page \_|\_ Vertex AI Search \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/generative-ai-app-builder/docs/add-widget
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/generative-ai-app-builder/docs
source_metadata:
  url: https://docs.cloud.google.com/generative-ai-app-builder/docs/add-widget
  title: "Add the search widget to a web page \_|\_ Vertex AI Search \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Search
Send feedback
Add the search widget to a web page
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to add search functionality to a website using the
search widget.
Before you begin
Before you add a search widget to your web page, be sure to configure your
search widget, starting with Configure results for the search
widget . Note that it's not possible to adjust the
styling of the search widget in your web page.
Procedures
The procedure for adding the search widget to your web page differs depending on
the authorization type you choose:
Authorization token : The widget uses a JWT or OAuth token provided by
your codebase. You must have your own server that you can use to generate a
token. The auth token is used to make an API call on behalf of the user or
service account. When generating the auth token, use the OAuth scope
https://www.googleapis.com/auth/cloud-platform .
For server-to-server interactions with service accounts: See Using OAuth
2.0 for Server to Server
Applications
in the authorization documentation.
For JavaScript web applications: See OAuth 2.0 for Client-side Web
Applications
in the authorization documentation.
Note: If you selected a workforce pool to control access to your app's data,
then obtain short-lived tokens for workforce identity
federation .
Public access : The widget won't restrict who can get results from a
search query.
Add a widget that uses an authorization token
In the Google Cloud console, go to the AI Applications page.
AI Applications
Click the name of the app that you want to edit.
Click Integration .
Click the Widget tab.
Select JWT or OAuth based as the widget authorization type.
Specify the domain name for the widget page:
Enter the domain name for the page where the widget will appear.
For example, if you are going to copy the widget to the pages
example.com/ai.html and cymbal.example.com/search.html , enter
example.com as the domain. If you only want the widget to work on a page
in the subdomain, enter cymbal.example.com .
If you want to test the widget on your localhost, enter localhost .
Click Add .
Repeat step 6 for each domain where the widget will appear.
Click Save .
Copy the code snippet provided in the Copy the following code to your
web application section.
Optional: Make the following changes to customize the search widget
behavior:
To open the results from the web in new tabs instead, add the following
to the copied code snippet. By default, results from unstructured
documents open in new tabs, while results from the web open in the same
page as the widget.
anchorsTarget="_blank"
For example:
<gen-search-widget configId="..." anchorsTarget="_blank"></gen-search-widget>
To customize the placeholder text inside the search bar, add the following
to the copied code snippet:
placeholder=" CUSTOM_PLACEHOLDER "
For example:
<gen-search-widget configId="..." placeholder="Start your search here"></gen-search-widget>
To always show the widget without a trigger, add the following
to the copied code snippet:
alwaysOpened
For example:
<gen-search-widget alwaysOpened></gen-search-widget>
In your codebase, generate an authorization token.
Note: If you selected a workforce pool to control access to your app's data,
then
obtain short-lived tokens for workforce identity federation .
To pass the authorization token to your widget, use the second code snippet,
" // Set authorization token ", provided in the Copy the following code
to your web application section and replace the text <JWT or OAuth token
provided by you backend> with your authorization token.
Periodically set a fresh token by repeating the previous step before the
current token expires.
Add a widget that has public access
Note: If your organization requires VPC Service Controls enforcement to protect
data, then don't use public access for widget authorization.
In the Google Cloud console, go to the AI Applications page.
AI Applications
Click the name of the app that you want to edit.
For public access, make sure that the search app isn't associated with any
data store under access control .
Click Integration .
Click the Widget tab.
Select Public Access as the widget authorization type.
Specify the domain name for the widget page:
Enter the domain name for the page where the widget will appear.
For example, if you are going to copy the widget to the pages
example.com/ai.html and cymbal.example.com/search.html , enter
example.com as the domain. If you only want the widget to work on pages
in the subdomain, enter cymbal.example.com .
If you want to test the widget on your localhost, enter localhost .
Click Add .
Repeat step 6 for each domain where the widget will appear.
Click Save .
Copy the code snippet provided in the Copy the following code to your
web application section.
Optional: Make the following changes to customize the search widget
behavior:
To open the results from the web in new tabs instead, add the following
to the copied code snippet. By default, results from unstructured
documents open in new tabs, while results from the web open in the same
page as the widget.
anchorsTarget="_blank"
For example:
<gen-search-widget configId="..." anchorsTarget="_blank"></gen-search-widget>
To customize the placeholder text inside the search bar, add the following
to the copied code snippet:
placeholder=" CUSTOM_PLACEHOLDER "
For example:
<gen-search-widget configId="..." placeholder="Start your search here"></gen-search-widget>
To always show the widget without a trigger, add the following
to the copied code snippet:
<gen-search-widget alwaysOpened></gen-search-widget>
Paste the code snippet into your web page.
Example of an embedded public-access widget
To see a search widget embedded in a public webpage, see
Try Vertex AI Search .
The Try Vertex AI Search search widget
This search widget works with the following configuration:
<gen-search-widget
configId="123456"
anchorsTarget="_blank"
placeholder="Search the Vertex AI Search documentation"
alwaysOpened>
</gen-search-widget>
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
