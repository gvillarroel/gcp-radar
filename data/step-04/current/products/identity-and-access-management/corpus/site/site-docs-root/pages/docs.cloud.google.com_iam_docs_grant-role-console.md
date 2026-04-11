---
title: "Quickstart: Grant roles in the Google Cloud console \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/grant-role-console
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/grant-role-console
  title: "Quickstart: Grant roles in the Google Cloud console \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Grant an IAM role by using the Google Cloud console
Learn how to use the Google Cloud console to grant
IAM roles to principals at the project level.
Note: If you're getting started with Google Cloud, you can grant the
appropriate IAM roles to your organization administrator groups
as part of the Google Cloud setup process .
See the following video for a quick walkthrough:
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Create a Google Cloud project
For this quickstart, you need a new Google Cloud project.
Warning: If you use an existing project, then completing this quickstart will
enable some users to access resources in that project.
Ensure that you have the Project Creator IAM role
( roles/resourcemanager.projectCreator ). Learn how to grant
roles .
In the Google Cloud console, go to the project selector page.
Go to project selector
Click Create project .
Name your project. Make a note of your generated project ID.
Edit the other fields as needed.
Click Create .
Ensure that you have the required roles
Make sure that you have the following role or roles on the project:
Project IAM Admin
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Enable the APIs
Enable the IAM and Resource Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Grant an IAM role
Grant a principal the Logs Viewer role on the project.
In the Google Cloud console, go to the IAM page.
Go to IAM
Select your new project.
Click person_add Grant access .
Enter an identifier for the principal. For example,
my-user@example.com .
From the Select a role drop-down menu, search for Logs Viewer ,
then click Logs Viewer .
Click Save .
Verify that the principal and the corresponding role are listed in the
IAM page.
You have successfully granted an IAM role to a principal.
Observe the effects of IAM roles
Verify that the principal you granted a role to can access the expected
Google Cloud console pages by doing the following:
Send the following URL to the principal to whom you granted the role in the
preceding step:
https://console.cloud.google.com/logs?project= PROJECT_ID
This URL takes the principal to the Logs Explorer page for your project.
Verify that the principal is able to access and view the URL.
If the principal tries to access a different Google Cloud console page that
they don't have access to, they see an error message.
Grant additional roles to the same principal
Grant the principal the Compute Viewer role in addition to their Logs Viewer
role.
In the Google Cloud console, go to the IAM page.
Go to IAM
Locate the row that contains the principal to whom you want to grant another
role, and click Edit principal edit
in that row.
In the Edit permissions pane, click Add another role .
From the Select a role drop-down menu, search for Compute Viewer ,
then click Compute Viewer . Click Save .
Click Save .
The principal now has a second IAM role.
Revoke IAM roles
Revoke the roles you granted to the principal in the preceding steps by doing
the following:
Locate the row that contains the principal that you granted roles to and
click Edit principal edit
in that row.
In the Edit permissions pane, click the delete icon next to the Logs
Viewer and Compute Viewer roles.
Click Save .
You have now removed the principal from both of the roles. If they try to view
the Logs Explorer page, they see the following error message:
You don't have permissions to view logs.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Clean up by deleting the project that you created for this quickstart.
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
Learn the basics of IAM.
Review the list of all IAM roles .
Find out how to manage access with IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
