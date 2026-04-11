---
title: "Adding a solution from Cloud Marketplace \_|\_ Service Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-catalog/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/service-catalog/docs/marketplace-solutions
  title: "Adding a solution from Cloud Marketplace \_|\_ Service Catalog \_|\_ Google\
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
Adding a solution from Cloud Marketplace
In this guide, you learn how to add Google Cloud Marketplace solutions for Service Catalog.
Adding solutions in Service Catalog allows you to approve and
share a curated list of Google Cloud solutions with users in your
organization. After creating the solution from Google Cloud Marketplace, you can
assign it to a catalog so that your users
can view and deploy the solution.
This guide explains how to add two types of Google Cloud Marketplace solutions for
your Service Catalog users: virtual machines (VMs) and
software as a service (SaaS) solutions .
Before you begin
You must have the Catalog Admin
( roles/cloudprivatecatalogproducer.admin ) OR
Catalog Manager
( roles/cloudprivatecatalogproducer.manager ) role for the Google Cloud
organization associated with the Google Cloud project which has
Service Catalog enabled. If you don't have this role, contact your
Organization Administrator to request access.
If you're adding a SaaS solution, go to the solution's description page in
Cloud Marketplace and subscribe to the solution.
Adding VMs
To add a VM solution in Service Catalog:
Go to
Cloud Marketplace
and filter by Virtual machines .
View VM solutions in Cloud Marketplace
Find the VM solution you want to add, and click on it to go to the
solution description page.
In the Add to Service Catalog section of the side navigation, click on
Deployment .zip file to download a zip file containing the
Deployment Manager configuration files for the solution.
Using the zip file, follow the steps to create a Deployment Manager-based solution to your catalog.
Adding SaaS solutions
To add a SaaS solution in Service Catalog:
Go to
Cloud Marketplace
and filter by APIs & services .
View APIs & services in Cloud Marketplace
Click on the SaaS solution you want to add.
On the solution description page, click Add to Service Catalog .
In the Add to Service Catalog pane, select a Google Cloud project for
the solution.
Verify the details that appear to users when they view the solution in
Service Catalog. Click Next .
Optionally, add links for getting support and documentation.
Optionally, assign the solution to one or more catalogs.
Click Add .
Next steps
Assign the solution to a catalog, so that users in
your organization can access and launch the solution.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
