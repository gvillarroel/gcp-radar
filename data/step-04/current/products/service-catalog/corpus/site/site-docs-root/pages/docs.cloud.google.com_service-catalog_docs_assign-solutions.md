---
title: "Assigning solutions to a catalog \_|\_ Service Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-catalog/docs/assign-solutions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-catalog/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-catalog/docs/assign-solutions
  title: "Assigning solutions to a catalog \_|\_ Service Catalog \_|\_ Google Cloud\
    \ Documentation"
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
Assigning solutions to a catalog
In this guide, you learn how to assign Service Catalog solutions to a catalog.
By curating solutions into catalogs, you control which users can view and launch
approved solutions in your organization.
Note: Service Catalog users can only access solutions in shared catalogs. To
share a catalog, see Sharing a catalog .
You must create the solution in Service Catalog before you assign it to a
catalog. To create one, see Creating Solutions .
Before you begin
You must have Service Catalog enabled for your Google Cloud organization .
You must have the Catalog Admin
( roles/cloudprivatecatalogproducer.admin ) OR Catalog Manager ( roles/cloudprivatecatalogproducer.manager ) role for
the Google Cloud project where Service Catalog is enabled. If you
don't have either role, contact your Organization Administrator to
request access.
Create a catalog for your solutions.
Assigning solutions to a catalog
To assign solutions:
Go to the Service Catalog Admin Solutions page in the Google Cloud console.
Go to the Solutions page
Click Select to choose the Google Cloud project.
For each solution you want to assign, find the solution in the list and
click Assign to Catalogs .
In the Assigned Catalogs window, check the box for the catalog.
Click SAVE .
The solution now appears in the catalog. If you've already shared the
catalog to a Google Cloud resource, users who have access to the
resource can now view and launch the solution.
Removing a solution from a catalog
When you remove a solution, end users can no longer view or deploy
the solution in the catalog. Removing the solution doesn't delete it from
Service Catalog and doesn't affect your users' existing deployments. To remove
a solution from all associated catalogs and delete it from Service Catalog,
see deleting solutions from Service Catalog .
To remove a solution from a catalog:
Go to the Service Catalog Admin Solutions page in the Google Cloud console.
Go to the Solutions page
Find the solution and in the Assigned catalogs column, click the icon to
modify catalogs.
In the Assigned Catalogs window, uncheck the catalog.
Click SAVE .
Your solution no longer appears in the catalog.
Next steps
Share a catalog with users in your organization,
so that they can access and deploy your solution.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
