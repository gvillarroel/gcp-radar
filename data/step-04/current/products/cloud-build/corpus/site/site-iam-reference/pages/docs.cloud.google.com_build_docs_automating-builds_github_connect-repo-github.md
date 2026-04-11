---
title: "Connect to a GitHub repository \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github
  title: "Connect to a GitHub repository \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Connect to a GitHub repository
Stay organized with collections
Save and categorize content based on your preferences.
1st gen
2nd gen
This page explains how to connect a GitHub repository
to Cloud Build. To learn more about Cloud Build repositories, see Cloud Build repositories .
Before you begin
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Have your source code ready in a GitHub repository.
Have either a Dockerfile or a
Cloud Build config file in
your GitHub source repository.
If you're initially connecting your repository to Cloud Build,
make sure you have admin-level permissions on your repository. To learn more about GitHub repository permissions, see Repository permission levels for an organization .
To use gcloud commands on this page, install the Google Cloud CLI .
Note: If you've installed gcloud CLI previously, make sure you have the
latest available version by running gcloud components update .
Connect to a GitHub repository
To connect your GitHub repository to your
Cloud Build:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
In the project selector in the top bar, select your Google Cloud project.
At the top of the page, select the 1st gen tab.
Click Connect repository .
You will see the Connect repository panel.
Under Select source code management provider , select GitHub
Cloud Build GitHub App .
Click Continue .
You may be asked to authenticate your connection to GitHub or install
the GitHub App. If you have not already done so, complete the following
steps:
If you have not signed into GitHub before, do so now.
The Authorization page appears, where you authorize the
Google Cloud Build App to connect to Google Cloud.
Click Authorize Google Cloud Build by GoogleCloudBuild .
Click Install Google Cloud Build .
In the dialog that appears, select your GitHub username or organization.
Select one of the following options based on your business need:
All repositories - enable current and future GitHub repositories
for access using the Cloud Build app
Only select repositories - use the Select repositories drop-down
to enable only specific repositories for access using
the Cloud Build app.
You can enable additional repositories at a later time. If
you select All repositories as your option, the Cloud Build
app is authorized to access all your repositories. However, you
need to connect each new repository through Cloud Build
following the steps outlined in this section.
Click Install to install the Cloud Build app.
The dialog closes and the Repositories page appears.
In the Select repository section, select the following
fields:
GitHub account : The GitHub account used to install the
Cloud Build GitHub App. This field may be
pre-selected for you.
Repository : The repositories you want to connect to
Cloud Build.
If you don't see one or more of your target repositories, click Edit
repositories on GitHub to enable additional repositories in the
Cloud Build GitHub App. You can then select your new
target repository in the Select Repository section.
Once you have selected your GitHub account and repositories,
read the consent disclaimer and select the checkbox next to it to indicate
that you accept the presented terms.
Click Connect .
(Optional) In the Create a trigger section, select the repositories
you want to create a trigger for in the Create a sample trigger for
these repositories field. Once you have selected your repositories, click Create a trigger .
Click Done .
(Optional) Updating the authenticated GitHub account
If you need to update the GitHub account associated with your Google Account,
you can navigate to the
Authenticate with GitHub page .
You might need to do this if you notice that the
Cloud Build Connect repository page
indicates that the GitHub app is not installed on any repositories after
installing the Cloud Build app on GitHub.
What's next
Learn how to build repositories from GitHub .
Learn how to perform blue-green deployments on Compute Engine .
Learn how to specify additional repositories as dependencies to your build.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
