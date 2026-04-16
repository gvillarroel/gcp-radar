---
title: "Get started with Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise
  title: "Get started with Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Get started with Gemini Enterprise
To see an example of how to get started with Gemini Enterprise,
run the "Intro to Gemini Enterprise" notebook in one of the following
environments:
Open in Colab
|
View on GitHub
Gemini Enterprise brings together the power of deep information
retrieval, state-of-the-art natural language processing, and the latest in large
language processing to understand user intent and return the most relevant
results for the user.
Before following this tutorial, make sure you have done the steps in Before you begin .
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI, Gemini Enterprise (Discovery Engine), Cloud Storage, Identity and Access Management APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Discovery Engine Admin
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
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Vertex AI, Gemini Enterprise (Discovery Engine), Cloud Storage, Identity and Access Management APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Discovery Engine Admin
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
Create a Gemini Enterprise app
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
Under the Gemini Enterprise card, select Manage . This opens up
Gemini Enterprise in the Google Cloud console.
Click Create app .
Under Gemini Enterprise , click Create .
Under Your app name , enter a name for your app. Your app ID appears under the app name.
Under External name of your company or organization , enter the company or organization name. For this tutorial, you can use Cymbal Bank .
Select global (Global) as the location for your app.
Click Continue .
Create a data store
Click Create Data Store .
Under Cloud Storage , click Select .
Under What kind of data are you importing? , make sure Unstructured documents (PDF, HTML, TXT and more) is selected.
Under Synchronization frequency , make sure One time is selected.
Under Select a folder or a file you want to import , make sure Folder is selected.
Enter the following value in the gs:// field:
cloud-samples-data/gen-app-builder/search/cymbal-bank-employee
This Cloud Storage bucket contains PDF files for internal use by a fictional bank, Cymbal Bank.
Click Continue .
Under Your data store name , enter a name for your data store, and then click Create .
Select the data store that you just created, and then click Create at the bottom of the page.
Preview your app
Note: Because it takes a few minutes for the data stores to index and sync with the app, the preview isn't available immediately.
In the navigation menu, click
Preview
to test the search app.
Optional: Click the view icons to switch between mobile view and desktop view.
In the search bar, ask a question about the data that we imported; for example, ask How do I book business travel?
If the answer to this question doesn't specifically reference Cymbal Bank, wait a few more minutes and try again.
Ask additional questions such as: Who founded Cymbal Bank? or Where are the headquarters of Cymbal Bank?
Configure the search web app
In the navigation menu, click Configurations .
On the UI tab, configure settings for the search app.
Different UI configurations are available for different data types. For more information, see Configure results for the UI .
If you change configurations on the UI tab, click Save and publish .
Go to the Autocomplete tab to configure specific settings for autocomplete.
Make sure to set Enable autocomplete to Now and expect to wait a day or two before you see autocomplete suggestions.
Go to the Control tab to configure serving controls.
Go to the Assistant tab to configure settings for the search assistant.
View the search web app
To view your Gemini Enterprise web app, do the following:
In the navigation menu, click Integration .
Make sure that Enable the Web App is enabled.
In the The link to your web app section, click Copy and open the link
in your browser.
Optional: Share the search app with your users by copying the URL and
sending it to them. Users can bookmark the web app URL for access.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To avoid unnecessary Google Cloud charges, use the
Google Cloud console to delete your project if you don't need it.
If you created a new project to learn about Gemini Enterprise and you
no longer need the project, delete the project .
If you used an existing Google Cloud project, delete the resources you
created to avoid incurring charges to your account. For more information,
see Delete an app and delete a data store .
Follow the steps in Turn off Gemini Enterprise .
What's next
Learn more about Gemini Enterprise .
Learn more about apps and data stores .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
