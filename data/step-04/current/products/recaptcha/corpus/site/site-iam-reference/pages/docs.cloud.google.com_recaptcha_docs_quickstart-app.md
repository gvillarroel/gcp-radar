---
title: "Test reCAPTCHA in a demo website \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/quickstart-app
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/quickstart-app
  title: "Test reCAPTCHA in a demo website \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Test reCAPTCHA in a demo website
This document shows you how to deploy a demo website on Google Cloud, which is a
sample website integrated with reCAPTCHA, to
understand how reCAPTCHA works.
A demo website helps you do the following:
Understand your users' experience with reCAPTCHA.
Use as a reference to integrate reCAPTCHA in your
own application.
Experiment with different frontend and backend approaches by editing the
sample application source code.
You can deploy a demo website in one of the following languages: Java,
Node.js, or Python.
For a Google Cloud project, you can deploy only one demo website at
a time.
Note: When you deploy a demo website, it is deployed on your
Cloud Shell VM. The demo site is visible only to you and not to the other
members of the project.
Before you begin
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Enable the reCAPTCHA Enterprise API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
reCAPTCHA Enterprise Admin, reCAPTCHA Enterprise Agent
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
If you have previously deployed a demo website, delete the relevant
demo key.
Deploy a demo website
In the Google Cloud console, go to the demo website page.
Go to demo website
In the Language list, select a language.
The entire deployment process might take about 1 minute.
If prompted, authorize Cloud Shell to make calls using your
credentials.
To navigate to your new demo Key details page, click View site .
To view the demo website, in the Frontend card, click
View sample web page .
The demo website opens in a separate tab.
To learn the patterns for integrating
reCAPTCHA with your website, click through the examples.
If you want to make changes to the demo website, do the following:
In the Key details page, click Edit source .
In the Cloud Shell Editor, find the required files in the
Explorer and edit them as required.
The saved changes to the source code get reloaded into the demo
website.
Don't close the Cloud Shell Editor because it closes
Cloud Shell and stops the demo website.
Warning: Don't use the demo key in a production environment because its
configuration is specific to demo environments. For instructions to create
a new key, see Create reCAPTCHA keys for websites .
What's next
Get started with reCAPTCHA .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
