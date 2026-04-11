---
title: "Manage access to Cloud Billing accounts \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/grant-access-to-billing
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/grant-access-to-billing
  title: "Manage access to Cloud Billing accounts \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Cloud Billing
Guides
Send feedback
Manage access to Cloud Billing accounts
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to configure access permissions for
Cloud Billing accounts.
A Cloud Billing account is set up in Google Cloud and defines who
pays for a given set of Google Cloud resources and
Google Maps Platform APIs. A Cloud Billing account is connected to a
Google payments profile. Access permissions for Cloud Billing and
Google payments are configured in two different systems depending on what type
of access you want to provide.
If you need to configure access permissions
for a Google payments profile, see
Manage Google payments users, permissions, and notification settings .
Note:
Changing access permissions for Cloud Billing accounts
is considered a sensitive action; in some cases, you might need
to reauthenticate before you can initiate the action. For more information, see
Sensitive actions .
Cloud Billing account user permissions
Each Cloud Billing account needs at least one
Billing Account Administrator .
By default, the person who creates the Cloud Billing account is a
Billing Account Administrator for that billing account. For redundancy, we
recommend that you configure more than one administrator on each
Cloud Billing account.
You can grant your users different levels of access to billing accounts,
depending on what they need to do (for example, track spend, review cost
anomalies, manage budgets, optimize costs, or review and pay invoices).
You don't directly give users permissions; instead, you grant them roles ,
which have one or more permissions bundled within them. You can grant one or
more roles on the same resource.
If you have an organization associated with your Google Cloud account,
you can grant or limit access to Cloud Billing by setting an
IAM policy at the organization level. You can also set
Cloud Billing IAM policy on the Cloud Billing
account level or limit billing access to a folder or project level.
Before you begin
Familiarize yourself with the roles and permissions available in
Cloud Billing.
For information about predefined billing roles and their permissions, see
Cloud Billing access control & permissions .
If the permissions available in the
predefined roles
don't fit your needs, create and use custom roles that
grant more specific sets of permissions. For more information, see
Create custom roles for billing .
Permissions required for this task
To manage user permissions on a Cloud Billing account, you need a
role that includes the following
permissions
on your Cloud Billing account:
billing.accounts.getIamPolicy -
To view roles on account, including associated usernames.
billing.accounts.setIamPolicy -
To grant roles to principals on a Cloud Billing account.
To gain this permission using a predefined role, ask your administrator to
grant you the following role on the Cloud Billing account:
Billing Account Administrator
Update user permissions for a Cloud Billing account
In the Billing section of the Google Cloud console, you can review,
add, or remove Cloud Billing user permissions for each billing
account that you administer.
Access the Permissions panel for a Cloud Billing account
To manage permissions for a Cloud Billing account, access the account
from the list of Cloud Billing accounts in the Google Cloud console
Billing account management page:
Sign in to the Manage billing accounts page in the Google Cloud console.
Sign in to Manage billing accounts
Select the row of a Cloud Billing account to view the principals
and permissions for the billing account in the info panel. If
the panel isn't already visible, click Show info panel to open it.
Alternatively, you can access a Cloud Billing account's permissions
on its Account management page:
In the Google Cloud console, go to the Account management page for
the Cloud Billing account.
Go to Account management in Cloud Billing
At the prompt, choose the Cloud Billing account that
you want to view.
In the Info panel, review and edit the Principals and
Permissions for the selected Cloud Billing account. If
the panel isn't already visible, click Show info panel to open it.
Update roles and principals in the Permissions panel
The Permissions panel is organized by role, along with the number of
principals that have each role. For example, in your permissions panel, you
might see the following:
Billing Account Administrator (2 principals)
Billing Account User (6 principals)
Billing Account Viewer (10 principals)
You can grant multiple roles to the same principal.
To view the list of principals assigned to a role, expand the role
node .
To find a specific principal and see which roles are granted to that
principal, use the
filter_list Filter and enter the email address of the principal.
To update Cloud Billing permissions, in the Permissions panel,
do any of the following:
To add new principals and assign permissions:
Click Add principal .
In the New principals field, enter one or more email addresses for the
principals that you want to add. You can add individuals, service
accounts, or Google Groups as principals.
Select a permission for the principals from Select a role .
If needed, you can Add another role to grant additional permissions
to the principals.
When done, click Save .
To edit a principal's billing permissions:
Use the
filter_list Filter to locate a specific principal or role.
In the list, locate the principal that you want to edit.
In the principal's row, click Edit
edit .
The Edit permissions panel opens, specific to the selected principal
and resource (Cloud Billing account) that you're viewing.
In the Edit permissions panel, add, edit, and delete roles for the
selected principal and resource.
When done, click Save .
To revoke a role from a principal:
Use the
filter_list Filter to locate a specific principal or role.
In the list, locate the principal whose role you want to revoke.
In the principal's row, click Delete
delete .
Confirm your action.
Note: This action revokes only a single role. The principal retains their
other roles.
Google payments user permissions
Each Google payments account needs at least one
Admin with all permissions ,
and one
Primary Contact
(the person Google will contact with any payments-related
alerts or questions). By default, the person who creates the Google payments
account is both the Admin with all permissions and the Primary Contact .
For redundancy, we recommend that you set more than one Google payments
administrator.
You can add users to any
Google payments Organization profile
that you manage, and grant different levels of access to your users depending
on what they need to do (for example, manage payment methods or
payments profile details). You can also configure user email
preferences for receiving billing and payments emails.
Not all payments-related tasks require you to be a
Google payments user to gain the permissions required to access and edit
Google payments profile information. Certain Cloud Billing IAM permissions will grant equivalent payments
permissions. Specifically, Cloud Billing account users with the
billing.accounts.updatePaymentInfo permission on their billing account
can access and edit the associated Google payments profile and
payments account directly from the Cloud Billing
console, without needing additional permissions on the payments
profile itself. This includes users with the
Billing Account Administrator
role ( roles/billing.admin ) and users granted this permission using a
custom role .
For more information, see
Manage Google payments users, permissions, and notification settings .
Related topics
Manage Google payments users, permissions, and notification settings
Create custom roles for Cloud Billing
Cloud Billing API access control
Granting, changing, and revoking Access
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
