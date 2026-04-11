---
title: "Quickstart: Connect a source code repository \_|\_ Developer Connect \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/connect-repo
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/connect-repo
  title: "Quickstart: Connect a source code repository \_|\_ Developer Connect \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Connect a source code repository
Developer Connect lets you integrate with non-Google products and services
so you can use them in supported Google products.
This quickstart shows you how to connect to GitHub
using a
Git repository connection . This
type of connection is required for when you want to use
Gemini Code Assist code customization .
For a list of all the integrations that Developer Connect supports,
see Developer Connect overview .
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
Enable the Developer Connect and Secret Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Developer Connect Admin
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
Enable the Developer Connect and Secret Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you have the following role or roles on the project:
Developer Connect Admin
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
Make sure that you have a GitHub account and access to a repository hosted on GitHub.com. Or, follow the GitHub documentation to create new ones:
Create a GitHub account
Create a repository on GitHub.com
If you're using an existing repository and you aren't the owner, ask the owner to grant admin-level permissions to the repository. If the repository is in a GitHub organization, request admin-level permissions from the organization owner. To learn more about GitHub organizations, see GitHub account types .
Initiate a connection
Open the Developer Connect page in the Google Cloud console.
Go to Developer Connect
The Git Repositories page opens, displaying a list of source code
management providers.
Select a source code management provider by clicking Connect on the card
for that provider.
The Create connection page opens.
Choose us-central1 as the region.
Enter quickstart-connection as the name.
Click Continue .
The Google Developer Connect dialog appears requesting authorization to
use your GitHub OAuth token.
If you don't see a dialog, turn off any pop-up blocking browser plug-ins and
makes sure that your browser settings allow pop-ups. For example, in Chrome,
follow the instructions to allow pop-ups .
Click I understand and continue .
Complete the GitHub account sign-in steps if prompted to do so.
Click Authorize Developer Connect if prompted to do so. If you don't
see this prompt, authorization has already been granted on this account.
Configure the connection
Grant permissions on your GitHub account and repositories using the following
steps. The prompts depend on whether someone using the GitHub account has
already installed the Google Developer Connect app in GitHub.
If you see a list of GitHub accounts: You don't have the app installed
yet. Install and configure it by following these steps:
Choose the GitHub account that has access to the repository you want to
link.
Specify GitHub repository permissions and install the app. For
more information, see the GitHub instructions on installing apps .
If you see a prompt to re-use an existing installation: Choose where to
install and configure the app by following these steps:
Click GitHub Account to see accounts that have the app installed. If
you see the account you want to use, choose it.
Click Confirm .
If you don't see the account that you want to use, choose
Install the GitHub App on another GitHub account .
Click Confirm .
Choose the GitHub account you want to use.
Specify GitHub repository permissions and install the app. For
more information, see the GitHub instructions on installing apps .
In Repositories , choose the repository you want to link.
Click Link .
The connection is added to the connections list, and the linked repository is
added to the repository list.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
In the Google Cloud console, go to the Developer Connect page.
Go to Developer Connect
In the Repositories tab, in the row containing the name of the linked
repository, click more_vert
More options .
Choose Unlink .
Click Confirm .
Click the Connections tab.
In the row containing the name of your connection, click more_vert
More options .
Choose Delete .
Enter the name of your connection.
Click Confirm .
Deleting connections and links doesn't delete the repositories on GitHub.com.
If you created a new GitHub repository for this quickstart and you want to
delete the repository, follow the GitHub instructions to
delete a repository .
If you want to uninstall the Google Developer Connect app, follow
the GitHub instructions on modifying installed apps .
What's next
Learn about Gemini Code Assist code customization .
Build apps in Firebase App Hosting using GitHub repositories .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
