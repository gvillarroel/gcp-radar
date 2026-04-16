---
title: "Organize code assets with folders \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/code-asset-folders
knowledge_key: corpus
source_id: site-docs-reference-5
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/code-asset-folders
  title: "Organize code assets with folders \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Organize code assets with folders
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To give feedback or request support for this feature, send an email to
bigquery-explorer-feedback@google.com .
The following document describes how BigQuery folders work. You can use
folders to organize code assets in a hierarchical structure, similar to that
used by operating systems. For example, you could create a folder to organize
code assets for sales analysis, with subfolders for each fiscal year. You
can also use folders to manage access to code assets. Folders offer
Identity and Access Management (IAM) policy inheritance, which you can use to control
access to code assets more efficiently. Policy inheritance lets subfolders
and files inherit the permissions of their parent folder.
BigQuery folders are powered by
Dataform .
For more information about working with folders in BigQuery, see
Create and manage folders .
Organize code assets with folders
You can access and organize your code assets by using folders in the
Files pane of BigQuery Studio:
A folder is the basic container for organizing code assets, similar to a
standard file system folder. You can create and organize subfolders within a
parent folder, and you can move code assets into and out of folders. When you
grant permissions on a folder, the permissions propagate to all of the folders
and files contained by that folder.
You can only use folders to organize single file code assets, such as notebooks,
saved queries, data canvases, and data preparation files.
Folder types
BigQuery supports the following types of folders:
User folders : Each user has a personal root folder, displayed as
User (user email address) . Your user folder contains all of the code
assets that you create in the given project and
location . You can create subfolders in your user
folder to organize these code assets. Files and folders in your user folder
are accessible only to you unless you choose to share them with other users.
Team folders : A team folder is designed for team collaboration, similar to
a shared drive in Google Drive. You can use team folders to organize code
assets that belong to a particular team. Only users who have owner
permissions on the root team folder can grant permissions to enable other
users to use the team folder.
Folder code regions
You can have folders and code assets in different code regions. For
example, you could have folderA and the code assets that it contains in the
us-west1 region, and folderB and the code assets that it contains in the
us-central1 region. The region that you are viewing is displayed
in the Files pane:
IAM policy inheritance
IAM access for file and folder resources uses a
hierarchical structure. This hierarchy ensures that access policies are
inherited from parent folders to their contents.
When an IAM policy is set on a folder, the permissions granted
by that policy also apply to all the files and nested subfolders in the
folder's subtree. This has the following consequences:
Permissions are inherited through the folder hierarchy. When a user is
granted a specific role on a high-level folder, they possess the permissions
included in that role for all the resources contained in that folder and its
subfolders.
The permissions that a user has on a resource consist of the policies set
directly on that resource and all the policies inherited from every folder in
its path up to the root.
As a result, you don't need project-level permissions to perform actions on
resources located deep in a folder structure. You only need the proper
permission on any folder in the path to that resource. For example, if you
want to create a file in a subfolder, you need the necessary permissions on
either the specific subfolder or any of its parent folders, which includes the
top-level folder.
The following are best practices for applying IAM policies to
files and folders:
Apply IAM policies to the highest folder in the hierarchy
where the permissions are uniformly needed. For example, if a team needs
access to all the data in their team's directory, grant the necessary roles at
the level of the team folder instead of at the level of individual project
subfolders.
Always grant the minimum set of permissions required for users or services
to perform their tasks. Avoid granting broad roles where you can use more
specific folder-level roles and permissions.
Note: Roles granted to individual files or folders are preserved during a move, but inherited roles update to match the new location.
Additionally, roles configured on the source and destination folders remain
unaffected by a move.
IAM roles granted on resource creation
When you create a folder, the following roles are granted automatically:
Users who create folders in their user root node automatically receive the
Dataform Admin role
( roles/dataform.admin ) on those folders.
The creator of a root team folder automatically receives the
Dataform Admin role
( roles/dataform.admin ) on that team folder.
You can
use the Config API to grant a specific role upon resource creation .
You don't automatically receive any roles when you create new files or folders
within a team folder's subtree.
Busy resources
A user folder or team folder is "busy" if it's actively involved in a
move operation, either as the object being moved or the destination of the
move. The system restricts busy resources from the following actions to ensure
data integrity during the move:
Being the object of another move operation.
Being the destination of another move operation.
Being an ancestor of a move object.
Being the object of a delete operation.
Limitations
BigQuery folders have the following limitations:
You can only nest folders up to 5 levels deep.
Having a very large number of folders (hundreds of thousands) slows
performance when working with folders. For example, when loading the
file explorer or expanding a folder.
You can't
move a folder
that contains more than 100 files or folders.
Locations
BigQuery folders are supported in all
Dataform locations .
What's next
Create and manage folders
Create notebooks
Create saved queries
Create data canvases
Create data preparations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
