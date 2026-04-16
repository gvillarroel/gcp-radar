---
title: "Quotas and usage limits \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/limits
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/limits
  title: "Quotas and usage limits \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Resources
Send feedback
Quotas and usage limits
Stay organized with collections
Save and categorize content based on your preferences.
Project limits
The number of projects any user or service account can create is limited. If you create a project
outside an organization, the quota on your account is used. If you are creating a project within
an organization, the quota on both your account and organization are checked, and if either one
has quota remaining, the project can be created.
Once your quota is reached,
you can request an increase. If you have less than 30 projects remaining in your quota, you can
see the number of projects you have remaining in your quota
on the New Project page. For more information, see
Managing project quotas .
The following usage limits apply per API consumer project.
Limit
Limit Description
Limit value per second
Limit value per minute
v1 API list
Includes list operations for projects.
Up to 4 requests
Up to 240 requests
v1 API search
Includes search operations for organizations.
Up to 10 requests
Up to 600 requests
v2 API list
Includes list operations for folders.
Up to 10 requests
Up to 600 requests
v2 API search
Includes search operations for folders.
Up to 10 requests
Up to 600 requests
v1 API read operations
Includes read operations for projects.
Up to 10 requests
Up to 600 requests
Other API read operations
Includes all other read operations for tags and other resources.
Up to 10 requests
Up to 600 requests
v3 API list
Includes list operations for projects, folders, and organizations.
Up to 10 requests
Up to 600 requests
v3 API search
Includes search operations for projects, folders, and organizations.
Up to 4 requests
Up to 240 requests
Write operations
Includes updating projects, tags, and other resources,
with the exception of moving or creating folders. The CreateProject operation
costs 10 requests per second.
Up to 10 requests
Up to 600 requests
Creating folders
Includes creation of folders.
Up to 0.1 requests
Up to 6 requests
Moving folders
Includes moving folders to other folders.
Up to 0.1 requests
Up to 6 requests
Note: Before you request a quota increase, evaluate the client-side throttling. For example, limit the number of requests sent to the server.
To view or change usage limits for your project, or to request an increase to
your quota, do the following:
If you don't already have a billing account
for your project, then create one.
Visit the Enabled APIs page of the
API library in the Google Cloud console, and select an API from the
list.
To view and change quota-related settings, select Quotas . To view
usage statistics, select Usage .
To view or change usage limits for your project, or to request an increase
to your quota, visit the Quotas page in the
API Console.
Tag limits
Each resource can have a maximum of 50 key-value pairs attached. There is a maximum of 1000 keys
allowed to be created under a given organization or project. Each key supports a maximum of 1000
values. For more information about the specifications for firewall secure tags,
see Specifications .
For more information about tags, see Creating and managing tags .
Folder limits
Following are some limits to consider when using folders in your resource hierarchy:
You can nest folders up to 10 levels deep.
A parent folder cannot contain more than 300 folders. This limit applies to direct child
folders only. Those child folders can, in turn, contain additional folders or projects.
For more information about folders, see Creating and managing folders .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
