---
title: "Quickstart: Viewing notifications \_|\_ Advisory Notifications \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/advisory-notifications/docs/quickstart
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/advisory-notifications/docs
source_metadata:
  url: https://docs.cloud.google.com/advisory-notifications/docs/quickstart
  title: "Quickstart: Viewing notifications \_|\_ Advisory Notifications \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Advisory Notifications
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Viewing notifications
This document shows how to configure users for Advisory Notifications
and view notifications by using the Google Cloud console.
Before you begin
Ensure that you have the required roles
To view Advisory Notifications in the Google Cloud console, each user must be
granted a role that contains the following Identity and Access Management (IAM)
permissions. These permissions are included in the Advisory Notifications
Viewer ( roles/advisorynotifications.viewer ) IAM role.
advisorynotifications.notifications.get
advisorynotifications.notifications.list
resourcemanager.organizations.get , if you need to view notifications for your organization
resourcemanager.projects.get , if you need to view notifications for your project
Required roles for organizations
If you have an organization resource, you receive notifications through your organization.
Make sure that you have the following role or roles on the organization:
Advisory Notifications Viewer
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the organization.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the organization.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Required roles for projects without an organization
If you don't have an organization resource, you receive notifications through your project.
Make sure that you have the following role or roles on the project:
Advisory Notifications Viewer
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
Permission assistance in the Google Cloud console
Important: This feature is only available if you are using
Google Cloud with an organization.
It's possible for a user to receive notification emails from
Advisory Notifications but also be unable to view them in the
Google Cloud console. If you observe this, it can be because users don't have
sufficient permissions as described in the previous section .
To help users receive access, Advisory Notifications provides
recipients of each notification email a two-week voucher to request permissions
from a highly privileged grantor by using the following instructions:
Click View notification details in the
Advisory Notifications email you received.
Optional: If you don't have the required permissions to view the
notification, click Request access to gain those permissions. Clicking
this button automatically contacts one of your highly-privileged organization
administrators and informs them that they need to grant you the required
permissions.
After the administrator has granted you the required permissions, you can
view the current and future notifications. You receive an email when the
administrator grants you the required permissions.
Viewing Notifications
After Advisory Notifications has been enabled and all selected
users have been granted permissions to receive
notifications, authorized users can view the notifications in the
Google Cloud console.
In the Google Cloud console, select Security from the left navigation
menu, and then select Advisory Notifications . Alternatively, click the
following link:
Go to Advisory Notifications
From the list of notifications, click the notification title to see more
information. Note that unread notifications appear in bold.
From the Notification details page, you can see the title, date and time,
description, and possibly one or more file attachments associated with the
notification. Note that you can't delete a notification or change its status
from read to unread.
Based on your language preference in Google Cloud, you can receive an
email in hours or days after the initial notification email. This email
notifies you about the localization of your notifications.
Clean up
No additional steps are required to avoid incurring charges to your account.
What's next
Learn how to
respond to Sensitive Actions notifications .
Learn about audit logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
