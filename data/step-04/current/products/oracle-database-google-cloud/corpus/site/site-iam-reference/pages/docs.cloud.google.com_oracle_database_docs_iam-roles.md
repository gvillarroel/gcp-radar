---
title: "Apply IAM roles \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/iam-roles
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/iam-overview
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/iam-roles
  title: "Apply IAM roles \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Apply IAM roles
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to grant Oracle Database@Google Cloud Identity and Access Management (IAM)
permissions to a user or account.
You can grant IAM permissions for an entire Google Cloud project
to a principal on the IAM page of the Google Cloud console.
Principals are users, groups, domains, or service accounts. For more
information on principals, see Principals .
Adding permissions at the project level grants the IAM permissions to
a principal for all the instances, clusters, or databases in the project.
For more information about how IAM works with Oracle Database@Google Cloud,
see IAM overview .
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
Grant roles to new principals
To grant a role to a principal, complete the following steps:
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
the new principal(s) from the drop-down. For more information on available
roles, see IAM overview .
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
What's next
Learn more about how IAM works in the
IAM overview .
Learn more about Oracle Database@Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
