---
title: "Set up Database Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/set-up-database-center
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/set-up-database-center
  title: "Set up Database Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Center
Guides
Send feedback
Set up Database Center
Stay organized with collections
Save and categorize content based on your preferences.
You can grant IAM permissions for an entire Google Cloud project
to a principal on the IAM page of the Google Cloud console.
Principals are users, groups, domains, or service accounts. For more
information on principals, see Principals .
Adding permissions at the project level grants the IAM permissions to
a principal for all the instances, clusters, or databases in the project.
To use Database Center, you need to grant specific Identity and Access Management
permissions to your principals. Permission levels determine the database resources that
Database Center principals can view. Permissions can be granted at
the organization, folder, or project level. To let principals access all
database resources for your organization, we recommend that you grant
organization-level permissions.
For more information about how IAM works at Google Cloud,
see IAM documentation .
The following permission are available for the Database Center:
roles/databasecenter.viewer : grants view access to all instances
in the Google Cloud project for which Database Center is enabled.
roles/recommender.viewer : grants view access to recommender-related
health issues in the Google Cloud project for which Database Center
is enabled. This permission is optional .
Additional IAM privileges might be required for recommendations
related to Gemini in Databases or Security Command Center. For more information,
see Enable Gemini Cloud Assist or
Enable Security Command Center .
Grant IAM permissions
To use Database Center, you must be granted Identity and Access Management
permissions for Database Center. Use the following topics to make
sure that you and your team have the correct IAM permissions.
Verify that you can add permissions
Before you attempt to apply project-level permissions, check that you have
sufficient permissions to apply roles to another account. You need either the
Owner or Admin role for the project you're trying to grant permissions for.
To confirm your permissions, complete the following steps:
Go to your project's IAM page.
Go to the IAM page
Select the View by Principals option.
Find your account in the list. If your account is listed as Owner or
Admin in the Role column, you have sufficient permissions.
If you don't have sufficient permissions at the project level, ask the project's
owner to grant you additional permissions.
Grant roles to new users
To grant a role to a user, complete the following steps:
Go to your project's IAM page.
Go to the IAM page
Select the View by Principals option.
Click GRANT ACCESS .
In the Grant access window, complete the following:
Confirm the Resource name.
In the Add principals section, add the new principal that you'd like
to grant permissions to in the New principals field.
You can add one principal or multiple principals.
In the Assign roles section, select the role you want to grant to
the new principal(s) from the drop-down.
To grant additional roles, click ADD ANOTHER ROLE .
Click Save to grant roles to your selected principals.
Modify roles of existing principals
To add or remove roles to an existing principal in your project, complete the
following steps:
Go to your project's IAM page.
Go to the IAM page
Select the View by Principals option.
Find the principal you want to update in the list and click Edit .
In the Edit access window, you can either add new roles or delete
existing roles.
To add a new role, click Add another role , then select the role from the
drop-down.
To delete an existing role, press Delete next to the role you want to
delete.
Click Save to update roles.
Remove access for existing principals
To remove access for an existing principal, complete the following steps:
Go to your project's IAM page.
Go to the IAM page
Select the View by Principals option.
Find the principal you want to remove in the list and select the checkbox
next to the name. To remove access for multiple principals, select
the checkboxes for all principals you want to remove.
Click REMOVE ACCESS .
In the Remove principal window, click Confirm to remove access for
the selected principals.
Enable Gemini Cloud Assist
You can use Gemini Cloud Assist to track health issues in
Database Center, and
Gemini Cloud Assist chat
to learn more about your database fleet and inventory. You can
access Gemini Cloud Assist chat at the Google Cloud project level and the folder
level.
To learn about data privacy in Gemini Cloud Assist, see
How Gemini for Google Cloud uses your data .
The
roles/databasecenter.viewer
IAM role grants access to the metadata of a managed database but
not to its data.
To enable Gemini Cloud Assist, complete all the steps in the
Before you begin using Gemini Cloud Assist .
Enable Security Command Center
To track security-related health issues in Database Center, you
need to activate Security Command Center (SCC). Security Command Center offers Built-in and
Premium tiers. To gain access to basic security issues, enable Security Command Center
Built-in . To gain access to all health issues supported by
Security Command Center, enable Security Command Center Premium .
For more information about Security Command Center tiers and pricing, see
Security Command Center pricing .
For more information about the security issues supported in
Database Center, see
Security issues supported by Security Command Center pricing tiers .
Once you have selected your preferred tier,
Activate Security Command Center to
use with Database Center.
What's next
Customize your database fleet health view .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
