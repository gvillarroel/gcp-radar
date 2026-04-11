---
title: "Cloud Source Repositories migration details \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/migration-guides
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/migration-guides
  title: "Cloud Source Repositories migration details \_|\_ Google Cloud Documentation"
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
Cloud Source Repositories migration details
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Source Repositories is End of Sale. In preparation for the deprecation
of this service, this page outlines migration options for multiple use cases. A
shutdown date will be communicated at least one year before the shutdown occurs to provide time for you to successfully migrate to an alternative product.
All users must migrate their repositories before the shutdown date. Review the
following migration options to begin planning your migration.
Migration guides
Migrate to Secure Source Manager
This guide provides the necessary steps to successfully migrate a Git repository, including all repository information, from Cloud Source Repositories to Secure Source Manager.
Translate Cloud Source Repositories roles and permissions to Secure Source Manager
This guide explains how roles and permissions in Cloud Source Repositories map to those in Secure Source Manager.
Determine your repository usage
To plan your migration, first identify all of your Cloud Source Repositories.
You can view your repositories by going to the Source Repositories page and using the project selector to search for projects that contain repositories. To access a repository, you need the
appropriate Identity and Access Management (IAM) permissions, such as Project Owner or
Source Repository Administrator.
After you identify a repository, determine if it is still in use or connected to
a build system. If a repository is not in use, delete it. Deleting unused
repositories helps with the deprecation process and stops future notifications.
Migration paths by use case
The following table maps common Cloud Source Repositories use cases to
recommended migration paths.
Use case
Migration path
Software development
Secure Source Manager or a third-party source code management system.
Integrating with Cloud Build
If your Cloud Source Repositories are a mirror of an external repository used to trigger Cloud Build, see Connect Cloud Build to your source code management system or set up a webhook trigger .
Kubernetes config sync and other infrastructure as code use cases
Artifact Registry OCI / Helm , Secure Source Manager or other source code management systems.
Backing up source code repositories
A third-party backup solution. For an example, see Configuring backups on your instance in the GitHub documentation.
Private network connectivity
For use cases, see Developer Connect and Service Directory .
If you need manual triggers, Pub/Sub, webhook, or terraform support, see Cloud Build Repositories .
If you are using Cloud Source Repositories to connect Cloud Build Repositories to GitHub Enterprise in a private network, see Build repositories from GitHub Enterprise in a private network .
For infrastructure as code and private network support see Artifact Registry OCI and Helm .
Using Cloud Debugger or Error Reporting
Connect to another Git provider.
What's next
Secure Source Manager overview
Use Git with Secure Source Manager
Create an instance
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
