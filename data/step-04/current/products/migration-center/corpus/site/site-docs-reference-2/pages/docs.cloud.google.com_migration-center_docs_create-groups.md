---
title: "Group assets \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/create-groups
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/create-groups
  title: "Group assets \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Guides
Send feedback
Group assets
Stay organized with collections
Save and categorize content based on your preferences.
In Migration Center, a group is a set of assets, such as
servers and databases. You can include an asset in one or
more groups.
Groups let you organize your assets by functional characteristics or other
features. For example, you can group together all the servers and databases
that belong to the same application.
Create groups of assets
To create a group of assets, follow these steps:
Go to the Groups page.
Go to Groups
Click add Create group .
In the Group details page, enter the following information:
Name . The name of the group, for example the application
name. When you enter a name, an ID is automatically generated, which
you can choose to edit.
Description . Optionally, provide a short description of the group.
To confirm, click Next .
On the Add assets page, select all the
assets that you want to add to the group.
Tip: Use the Filter tab to select assets based on properties and values.
For example, filter assets based on the OS or contributing source.
To select more assets than those displayed on the page, select at least
one asset, then click
format_list_bulleted Select all .
To create the group with your selection, click Create .
Add and remove assets from a group
After you create a group of assets, you can add or remove assets.
To add assets to a group, follow these steps:
Go to the Groups page.
Go to Groups
From the list of groups, select the group to which you want to add assets.
To add assets to the group, click Add assets .
To select the type of asset that you want to add to the group, click an asset
type. For example, click Servers or S3 .
Select all the assets that you want to add to the group, then click Add .
To remove assets from a group, follow these steps:
Go to the Groups page.
Go to Groups
From the list of groups, select the group from which you want to remove
assets.
On the group details page, click an asset type to view the
assets of that type.
Select all the assets that you want to remove, click
do_not_disturb_on Remove
from group , then click Confirm .
Add or update asset group assignments in bulk
To add or update asset group assignments for multiple assets at once, follow
these steps:
Export asset group assignments
Modify asset group assignments
Import modified asset group assignments
Export asset group assignments
To export asset group assignments, follow these steps:
Go to the Groups page.
Go to Groups
Click Import groups from file .
To get the template with your current asset group data, click Export Template .
You can download this data as CSV files or export it to Google Sheets
for editing.
Modify asset group assignments
To modify asset group assignments, follow these steps:
Open the CSV file and edit the Groups column to modify or assign
groups to assets.
The group name must meet the following requirements:
Must be 3 to 63 characters long.
Must start with a lowercase letter ( a-z ).
Must end with a lowercase letter ( a-z ).
Must contain only lowercase letters ( a-z ), numbers ( 0-9 ), or dashes ( - ) between
the first and last characters.
Optional: To assign multiple groups to the same asset, use one of the following
methods:
List the asset on multiple rows, using the same asset name on each row
but a different group name for each row.
List multiple groups in one cell, keeping the assets on a single row. In
the groups column, enter each group name on a separate line in the cell.
Save and export the modified CSV file.
Import modified asset group assignments
To import the modified asset group assignments from a CSV file, follow these steps:
Go to the Groups page.
Go to Groups
For File import job name , provide a name.
From the File format list, select Asset group data (CSV) .
Click Select file to upload .
Select one CSV file of up to 100 MB to upload.
If your edited CSV file exceeds the 100 MB limit, you might need to split
it into smaller files and upload them in separate import jobs.
Click Upload files .
Keep the page open while the file upload is in
progress to make sure that the file upload does not fail.
Migration Center creates the import job and starts validating your
file. On the Data import page, check the job status for results and
any reported errors.
If you experience issues with your file upload, see troubleshooting file
import errors .
If the files are validated correctly, to import the modified group assignments,
click Import data, then click Confirm .
Out of scope assets
Marking assets as out of scope hides them from the groups.
When you put an out of scope asset back in scope, it keeps
its original group memberships.
What's next
Learn how to export data for your assets .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
