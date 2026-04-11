---
title: "IAM roles and permissions \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/roles-and-permissions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/roles-and-permissions
  title: "IAM roles and permissions \_|\_ Document AI Warehouse \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
IAM roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Caution : Document AI Warehouse is deprecated and will no longer be available on Google Cloud
after January 16, 2025. To safeguard your data, migrate any documents currently saved in Document AI Warehouse to an alternative like Cloud Storage.
Verify that your data migration is completed before the discontinuation date to prevent any data loss. See Deprecations for details.
Predefined roles
The following table describes Identity and Access Management (IAM)
roles that are
associated with Document AI Warehouse and lists the permissions that are contained in
each role. Unless otherwise noted, these roles can be applied either to entire
projects or specific documents.
Role
Permissions
contentwarehouse.documentCreator
resourcemanager.projects.get
resourcemanager.projects.list
contentwarehouse.documentSchemas.get
contentwarehouse.documentSchemas.list
contentwarehouse.documents.create
contentwarehouse.documentViewer
resourcemanager.projects.get
resourcemanager.projects.list
contentwarehouse.documentSchemas.get
contentwarehouse.documents.get
contentwarehouse.documents.getIamPolicy
contentwarehouse.documentEditor
Role
contentwarehouse.documentViewer
contentwarehouse.documents.update
contentwarehouse.documentAdmin
Role
contentwarehouse.documentEditor
contentwarehouse.documents.create
contentwarehouse.documents.delete
contentwarehouse.documents.setIamPolicy
contentwarehouse.admin
Role
contentwarehouse.documentAdmin
contentwarehouse.documentSchemas.create
contentwarehouse.documentSchemas.delete
contentwarehouse.ruleSets.create
contentwarehouse.ruleSets.get
contentwarehouse.ruleSets.list
contentwarehouse.ruleSets.update
contentwarehouse.ruleSets.delete
Note: The role roles/contentwarehouse.documentCreator is a parent level role.
Under Document AI Warehouse's current
resource hierarchy
setting (Organization -> Folders -> Projects -> [Locations] -> Documents), this
role will only be applied at the project level and not the document level. All
the other roles can be applied at both the project level and the document level.
Basic roles
Basic roles are roles that existed prior to IAM. These roles have unique
characteristics:
Basic roles can only be granted for an entire project, not for individual
objects within the project.
Basic roles contain additional permissions for other Google Cloud services
that are not covered in this section. For a general discussion of the
permissions that basic roles grant, see
basic roles .
In some cases, basic roles can be used as if they were groups, which causes
any principal that has the basic role to get additional access for some
resources.
Custom roles
You might want to define your own roles that contain bundles of permissions that
you specify. To support this, IAM offers
custom roles .
Note: Custom roles are not supported if you choose
Document-level access control
mode for your project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
