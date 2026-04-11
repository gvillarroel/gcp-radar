---
title: "Sharing a catalog \_|\_ Service Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-catalog/docs/share-catalog
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-catalog/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-catalog/docs/share-catalog
  title: "Sharing a catalog \_|\_ Service Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Catalog
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Sharing a catalog
In this guide, you learn how to share a catalog with users in your
organization.
After you assign solutions to a catalog, you must share the catalog to a
Google Cloud resource ,
such as a project, folder, or organization. Users who have access to the
resource can then view and launch the catalog's solutions. When
users browse Service Catalog, they only see solutions from catalogs
that have been shared with them.
Before you begin
You must have the Catalog Admin
( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager
( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud
project where Service Catalog is enabled, and the folder, project, or
organization where you're sharing the catalog. If you don't have either role,
contact your Organization Administrator to request access.
Grant the following Identity and Access Management (IAM) roles
to users who will use the shared catalog:
Catalog Consumer
( roles/cloudprivatecatalog.consumer ) OR the IAM Viewer
( roles/viewer ) role for the relevant organization, project, or folder.
Most users access Service Catalog using the IAM
Viewer role.
If your catalog contains DM-based solutions, the Deployment Manager
Editor
( roles/deploymentmanager.editor ) role for the project where your users
deploy the solution.
For steps on granting IAM roles, see Granting, changing, and
revoking access to resources .
For details on Service Catalog's IAM roles and
permissions, see Access control .
Sharing a catalog
Make sure to share the catalog to a resource that your users can access. End
users can only see catalogs that are shared to a Google Cloud organization,
folder, or project that they have access to.
If you're sharing a catalog with a new project, users are prompted to
enable the Service Catalog API when launching a solution. If launching
a DM-based solution to a new project, they are also prompted to enable the
Cloud Deployment Manager API.
To share a catalog:
In the Google Cloud console, go to the Service Catalog Admin page .
Go to the Service Catalog Admin page
Click Select to choose the Google Cloud project.
Go to the Catalogs page.
From the list of catalogs, click the catalog name.
On the Catalog Details page, click SHARE .
Select a folder, organization, or project that you want to share the catalog
with, and then click Select .
Users who have access to the shared catalog can now view and launch its
solutions.
Unsharing a catalog
When you unshare a catalog, users who had access to the catalog can no longer
view or deploy its solutions. Unsharing a catalog doesn't affect your users'
existing deployments.
To unshare a catalog:
On the Catalog Details page, go to the SHARING tab.
In the Shared with table, click UNSHARE for any organization, folder,
or project from which you want to unshare the catalog.
Click CONFIRM .
Your catalog is no longer shared with the resource.
Next steps
Viewing and launching a solution .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
