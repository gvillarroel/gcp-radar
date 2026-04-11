---
title: "Admin settings - Continuous Integration \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-ci
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/admin-panel-platform-ci
  title: "Admin settings - Continuous Integration \_|\_ Looker \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Guides
Send feedback
Admin settings - Continuous Integration
Stay organized with collections
Save and categorize content based on your preferences.
Preview: This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms. Pre-GA products and features are available "as is" and might have limited support. For more information, see the launch stage descriptions .
If you encounter an issue during the Public Preview of Continuous Integration, report it using the Looker Continuous Integration - Preview Issue Tracker form .
The Continuous Integration page in the Platform section of the Admin menu lets you configure settings for the Looker Continuous Integration (CI) feature.
Note: For Looker (Google Cloud core) instances , Continuous Integration is supported on instances that are configured with a Public IP network configuration. Continuous Integration is not supported on Looker (Google Cloud core) instances that are enabled for CMEK , or on instances that are configured with a private connections or hybrid connections network configuration. Warning: Don't enable Continuous Integration on a Looker instance that requires your data to reside in a specific location. Continuous Integration stores certain data in the United States.
Enable Continuous Integration
The Looker Continuous Integration (CI) feature lets you run tests on your LookML project to deliver more reliable, efficient, and user-friendly data experiences. You can use the CI validators to catch issues with SQL, data tests, content, and LookML before they hit production to verify your LookML and prevent query errors for your users. You can also configure the CI validators to run automatically when a pull request is submitted to your LookML repository.
A Looker admin can use the Enable Continuous Integration toggle to enable Continuous Integration on your instance.
Integrations
If you use GitHub as a remote repository for your LookML project, you can configure Continuous Integration to automatically run CI suites when LookML developers submit pull requests to your LookML repository . To automatically run CI suites on your repository, Continuous Integration needs the following permissions:
Read access to your repository's metadata and pull requests
Read and write access to your repository's commit statuses, repository hooks, and workflows
These permissions are not set up when you set up a Git connection for your LookML project in the Looker IDE. If you want to use pull request triggering for CI runs, your LookML project must be set up with a Git connection (as described on the Setting up and testing a Git connection page), and you must also configure the CI GitHub app as described in the Configuring the CI GitHub app section.
GitHub table
The GitHub table on the Continuous Integration Admin page lists the GitHub repositories that are configured for the LookML projects on your Looker instance. These GitHub repositories were configured by your LookML developers as described on the Setting up and testing a Git connection documentation page.
For each GitHub repository that's listed, the table shows whether the repository has been configured with the CI GitHub app:
Installed : The repository has been granted the Looker CI GitHub application which enables CI to be automatically run when LookML developers submit pull requests to your LookML repository .
Not Installed : The repository hasn't been set up for pull request integration with Looker CI. To configure the repository for CI pull request integration, see the Configuring the CI GitHub app section.
Configuring the CI GitHub app
To grant the CI GitHub application for a repository, follow these steps:
On the Continuous Integration Admin page in Looker, click the Configure GitHub App button.
This will open a browser window to the GitHub apps webpage.
Select the GitHub account where your LookML is stored.
In the Repository access section, select All repositories to allow CI integrations for all of the Git repositories owned by the resource owner, or select Only select repositories to choose the repositories with which you want to use Continuous Integration.
Click Save .
If the Looker CI GitHub application is successfully granted to the repository, Looker displays Installed for the repository in the GitHub table on the Continuous Integration Admin page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
