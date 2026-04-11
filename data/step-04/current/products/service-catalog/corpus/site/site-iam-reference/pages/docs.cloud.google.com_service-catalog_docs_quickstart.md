---
title: "Quickstart: Create and share solutions by using Service Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-catalog/docs/quickstart
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-catalog/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-catalog/docs/quickstart
  title: "Quickstart: Create and share solutions by using Service Catalog \_|\_ Google\
    \ Cloud Documentation"
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
Create and share solutions by using Service Catalog
This page shows you how to do basic tasks in Service Catalog using the
Google Cloud console.
What you learn
How to create a catalog and share a solution as a Service Catalog admin
How to view and launch a solution as a Service Catalog user
Before you begin
You must have a Google Cloud organization. If you don't have one, see
Creating and managing organizations .
You must have the following Identity and Access Management (IAM) roles
at the organization level:
Organization Administrator
( roles/resourcemanager.organizationAdmin )
Catalog Org Admin ( roles/cloudprivatecatalogproducer.orgAdmin )
As Organization Administrator, you can grant yourself the remaining
IAM roles. For steps on granting roles, see Access control .
Set up Service Catalog for your organization:
Go to the Service Catalog Admin page and click ENABLE .
Go to the Service Catalog Admin page
Select or create a Google Cloud project.
Verify that billing is enabled for your Google Cloud project .
Service Catalog is free to use, but we require billing information in case
your organization incurs costs while creating or deploying a solution, such
as using Cloud Build to deploy a Terraform solution.
Note: Third-Party Software: The Customer agrees not to
upload third-party software to Service Catalog, unless the customer has the
appropriate third-party software licenses to do so.
Create a catalog
A catalog is where you curate solutions that Service Catalog users can view and launch.
To create a catalog:
In the Google Cloud console, go to the Service Catalog Admin page .
Go to the Service Catalog Admin page
On the Catalogs page, click CREATE CATALOG .
Enter a name and description for the catalog.
Click Create .
The catalog now appears in the Catalogs table.
Create a link-based solution
In the following steps, you create a link-based solution, or reference link, to
Service Catalog and then assign the solution to your catalog.
Create solution in Service Catalog
Go to the Service Catalog Admin Solutions page in the Google Cloud console.
Go to the Solutions page
Click CREATE SOLUTION . In the drop-down
list, select Create a Link solution .
Enter a name, URL, description, and tagline for your solution. The tagline
is the short description shown on the tile in the end-user Service Catalog
view.
Optionally, upload an icon for the solution.
Optionally, add a link for getting support.
Optionally, add a link to documentation for the solution.
Click CREATE .
The following screenshot illustrates creating a link-based solution:
The solution now appears in the Solutions table.
Assign solution to your catalog
Go to the Service Catalog Admin Solutions page in the Google Cloud console.
Go to the Solutions page
In the list of solutions, find your link-based solution and click Assign to
Catalogs .
In the Assigned Catalogs window, check the box next to your catalog.
Click SAVE .
The solution now appears in your catalog.
Share your catalog
Share your catalog with a Google Cloud resource, such as your organization,
a folder, or a project, so that Service Catalog users who have access to that
resource can view and launch the link-based solution in your catalog.
To share your catalog:
Go to the Service Catalog Admin Catalogs page in the Google Cloud console.
Go to the Catalogs page
From the list of catalogs, click the catalog name.
On the Catalog Details page, click SHARE .
Select a folder, organization, or project that you want to share the catalog
with, and then click Select .
Your catalog is now shared with the folder, organization, or project you selected.
View and launch a solution
Service Catalog users can see solutions from all the catalogs that are shared
with them in their Google Cloud resource hierarchy.
To access and deploy a solution as a user:
Go to Service Catalog page in the Google Cloud console.
Go to the Service Catalog page
In the main panel, you see the link-based solution that has been shared
in your organization. Click the solution to go to its Details page.
Click Go to link .
This button takes you to a link outside of the Google domain where you can
download and launch the solution.
Clean up
To avoid unnecessary Google Cloud charges, use the Google Cloud console
to delete your project if you no longer need it.
What's next
Read the Service Catalog overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
