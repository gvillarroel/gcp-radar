---
title: "Mirroring a Bitbucket repository \_|\_ Cloud Source Repositories \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/mirroring-a-bitbucket-repository
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/mirroring-a-bitbucket-repository
  title: "Mirroring a Bitbucket repository \_|\_ Cloud Source Repositories \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Guides
Send feedback
Mirroring a Bitbucket repository
Stay organized with collections
Save and categorize content based on your preferences.
This topic describes how to mirror a Bitbucket repository to
Cloud Source Repositories. With this configuration, commits that you push to the
Bitbucket repository are copied, or mirrored , into a repository hosted in
Cloud Source Repositories.
Only Bitbucket Cloud and GitHub Cloud repositories can be mirrorred to
Cloud Source Repositories; self-hosted Bitbucket and GitHub mirroring are not
supported.
If you are mirroring your Bitbucket repository to Cloud Source Repositories to integrate
with Cloud Build and do not need any other Cloud Source Repositories features,
follow the Cloud Build instructions on
building repositories from Bitbucket Cloud
instead.
Before you begin
When you mirror a repository, you must provide Bitbucket authentication
credentials. These credentials let Cloud Source Repositories access the
contents of the Bitbucket repository.
It is recommended that you create a Bitbucket account
that is specifically dedicated to automated tasks, such as mirroring a
repository. This account must have administrative access to your repository.
Mirror a Bitbucket repository
This section shows how to mirror a Bitbucket repository to
Cloud Source Repositories.
Note: Make sure you're signed out of Bitbucket before you mirror a repository.
Signing out helps ensure you select the right Bitbucket account when you connect
the Bitbucket repository to Cloud Source Repositories.
Create a mirrored repository
In this process, you need your Bitbucket machine user credentials to grant
Google Cloud read access to the Bitbucket repository.
In the Google Cloud console, open Cloud Source Repositories.
Open Cloud Source Repositories
Click Add repository .
The Add a repository page opens.
Select Connect external repository and click Continue .
The Connect external repository page opens.
In the Project drop-down list, select the Google Cloud project to
which the mirrored repository belongs.
If you don't have a project, you can click Create project to
create a project .
In the Git provider drop-down list, select Bitbucket .
Select the checkbox to authorize Cloud Source Repositories to store your
credentials.
Click Connect to Bitbucket .
Sign in to Bitbucket with your machine user credentials.
Click Authorize GoogleCloudPlatform .
This option grants Google Cloud read access to your repository.
When authorization finishes, you're returned to the Connect external
repository page. A list of repositories opens.
From the list of repositories, select the repository you want to mirror.
Click Connect Selected Repository .
The main repository page opens. This page contains a list of the
repositories for this Google Cloud project, including the new
repository you just created.
Identify Bitbucket repositories
Cloud Source Repositories makes it clear which of your repositories are
mirrors of Bitbucket repositories:
Each Bitbucket repository is represented with the Bitbucket logo.
The name of the repository has bitbucket_ added to the beginning of its
name.
Upgrade a Bitbucket connection
If you mirrored a Bitbucket repository by using an earlier
Google Cloud console interface, Cloud Source Repositories prompts you to
upgrade when you access your mirrored repository in the current
Google Cloud console. Until the upgrade is completed, these prompts occur each
time you access the repository.
You must have the Source Repository Administrator role to upgrade the
connection. Upgrading the connection doesn't change the mirroring behavior of
the Bitbucket repository.
Note: Make sure you are signed out of Bitbucket before you upgrade the
connection. This helps ensure you can select the right account when you connect
the repository to Cloud Source Repositories.
In the Google Cloud console, open Cloud Source Repositories.
Open Cloud Source Repositories
Navigate to the mirrored Bitbucket repository.
When prompted, click Upgrade Credentials to upgrade your connection.
Force a repository sync
After you set up mirroring, Cloud Source Repositories automatically syncs
your repository with the mirrored repository when a user commits a change.
Cloud Source Repositories lets you to view the last time your mirrored
repository was synced and manually force a sync if necessary.
In the Google Cloud console, browse to the mirrored Bitbucket repository.
Click
Settings settings .
The sync status is displayed.
To manually force a sync of the repositories, click Sync from Bitbucket .
Note: Repositories connected using an older version of the connected repository
service may not have these options.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
