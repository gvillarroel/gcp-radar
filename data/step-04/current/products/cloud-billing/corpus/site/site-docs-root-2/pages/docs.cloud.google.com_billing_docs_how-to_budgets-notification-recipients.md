---
title: "Customize budget alert email recipients \_|\_ Cloud Billing \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/budgets-notification-recipients
  title: "Customize budget alert email recipients \_|\_ Cloud Billing \_|\_ Google\
    \ Cloud Documentation"
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
Customize budget alert email recipients
Stay organized with collections
Save and categorize content based on your preferences.
Overview
You can specify the email recipients of budget alerts in these ways:
Figure 1 : Illustrates the default email feature
for budget alert notifications and the optional method to customize the
email recipients using Cloud Monitoring.
Role-based : For budgets scoped to a Cloud Billing account (or to
more than one project within the billing account), you can send email alerts
to Billing Account Administrators and Billing Account Users on the target
Cloud Billing account when the
budget alert threshold rules
trigger an email notification. Use this option if Billing Account
Administrators and Billing Account Users can take cost control actions based
on the alert emails.
For budgets scoped to a single project, you can also send email alerts to
Project Owners of the budget's project
( Preview ), when the
budget alert threshold rules
trigger an email notification. Use this option if Project Owners can take
cost control actions on their projects based on the alert emails.
Using Cloud Monitoring (described on this page) : You can specify other
people in your organization (for example, project managers) to receive budget
alert emails.
Use this option if your organization's Billing Account Administrators,
Billing Account Users, and Project Owners aren't the best recipients to
take cost control actions based on the alerts. For example, you want to
send an email alert to a developer or a system administrator who is not
a Project Owner or a Billing Account Administrator.
To customize who receives the budget alert emails for a
specific budget, link Monitoring email notifications to the
budget, and select up to five email notification channels.
Permissions required for this task
To set up Cloud Monitoring notification channels and link them to a
Cloud Billing budget, you need the following roles:
To
create
or
modify
a budget for your Cloud Billing account , you need the
Billing Account Costs Manager role
or the
Billing Account Administrator role
on the Cloud Billing account.
To
create
or
modify
a budget scoped for a project that you own (this feature is in
Preview ), you need the
Project Owner role
or the
Project Editor role
on the Google Cloud project.
To create or modify Cloud Monitoring notification channels, you must have
the Monitoring Editor role
on the project where you create the notification channel.
Permissions when using custom roles
If you're using custom roles to grant access, your role must have the following permissions to set up Cloud Monitoring notification channels and link them
to a Cloud Billing budget:
For billing-account-level access
To create a new Cloud Billing budget to link it to new
Cloud Monitoring notification channels, you need these specific
permissions:
billing.budgets.create
on the Cloud Billing account, to create
a new budget for a Cloud Billing account.
billing.budgets.get and billing.budgets.list
on the Cloud Billing account, to view all budgets for the
Cloud Billing account.
billing.budgets.update
on the Cloud Billing account, to modify an existing budget for a
Cloud Billing account.
roles/monitoring.editor
on the project where you want to create notification channels.
To edit an existing Cloud Billing budget to link it to existing
Cloud Monitoring notification channels, you need these specific
permissions:
billing.budgets.get and billing.budgets.list
on the Cloud Billing account, to view all budgets for the
Cloud Billing account.
billing.budgets.update
on the Cloud Billing account, to modify an existing budget.
roles/monitoring.viewer
on the project that stores the notification channels.
For project-level access to manage budgets
If you have limited or no access to a Cloud Billing account, you
can still create or modify a budget that is scoped only to the projects
that you own, one project at a time.
To manage budgets for a project and customize the email recipients of
budget alerts, you need a role that includes these specific permissions:
resourcemanager.projects.get
on your project, to view the projects associations (such as the linked
billing account) for your project.
billing.resourceCosts.get
on your project (optional), to view costs and usage for your project.
billing.resourcebudgets.read
on your project, to view a billing account's single-project budgets that
are scoped to your project.
billing.resourcebudgets.write
on your project, to create or modify single-project budgets that are
scoped to your project.
roles/monitoring.editor
on the project where you want to create notification channels, or
roles/monitoring.viewer
on the project that stores the notification channels.
Permissions required for the recipients of budget alert emails
When you select Cloud Monitoring email notification channels to customize
who receives alert emails (in addition to Billing Account Administrators,
Billing Account Users, or Project Owners), the email addresses you specify are
sent the budget alert emails when the
threshold rules
trigger an alert.
The budget alert emails contain helpful links to the budget, so that you can
quickly view it and take any appropriate actions. The people you specify to
receive alert emails using email notification channels might not have the
correct permissions to view the Cloud Billing budgets in the
Google Cloud console.
If you want the recipients of the alert emails to be able to view the budget,
email recipients need
permissions on the Cloud Billing account
(to view billing-account-level budgets) or on the
budget's project
(for single-project-scoped budgets).
For billing-account-level budgets, at a minimum, ensure email recipients are
added to the
Billing Account Viewer role
on the Cloud Billing account that owns the budget.
For single-project-scoped budgets, at a minimum, ensure email recipients are
added to the
Project Viewer role
on the budget's project ( Preview ).
See View a list of budgets
for additional information.
About Google Cloud permissions
For more information about Cloud Billing permissions, see:
Overview of Cloud Billing access control
Create custom roles for Cloud Billing
Understanding predefined Identity and Access Management roles for Cloud Billing
For more information about Google Cloud project permissions, see:
Access control for projects with IAM
IAM basic and predefined roles reference
Set up and enable Cloud Monitoring email notifications
To customize the email addresses that will receive budget alert notifications,
link notification channels to your budget.
Before you begin: create an email notification channel
You must create an email notification channel in Cloud Monitoring .
For Cloud Billing budget alerts, you must configure
Email notification channels. Other types of notification
channels aren't supported.
If you already set up email notification channels that you want to use,
skip this step and link the notification channel to your budget .
Tip: If you want to
send notifications to Slack ,
you can configure
programmatic notifications .
Link your budget to email notification channels
After you create an email notification channel, follow these steps to link
your budget to it:
Using the procedure that fits your level of access to
Cloud Billing accounts, sign in to the Budgets & alerts page
in the Billing section of the Google Cloud console:
Users with Cloud Billing account permissions
Users with project-level permissions only
( Preview )
If you have Cloud Billing account permissions, you
can select from a list of billing accounts that you have permissions to
access.
Sign in to the Budgets & alerts page in the Google Cloud console.
Open Budgets & alerts
At the prompt, choose the Cloud Billing account
for which you'd like to manage budgets.
The Budgets & alerts page opens for the selected billing
account.
If you only have project permissions, but don't have any permissions on
your project's Cloud Billing account, you need to select your
project before you navigate to the Billing section.
Sign in to the Google Cloud console dashboard and select a project.
Open Google Cloud console
Select the project for which you want to manage budgets.
Next, navigate to Billing : Open the Google Cloud console Navigation
menu menu , and
then select Billing .
If you're prompted to choose which billing account you want to view
and manage, click Go to linked billing account to view the
billing account that is linked to your selected project.
The Billing Overview page opens for the selected billing
account.
In the Cost management section of the Billing navigation
menu , select Budgets & alerts .
If necessary,
create a budget
and set
alert threshold rules .
Or, to edit an existing budget and alert rules,
click a budget name .
In the Actions section, under Manage notifications , select
Link Monitoring email notifications to this budget .
From the Select project menu, select the project that contains the
email notification channels.
Under Notification Channels , select up to five existing notification
channels, or click Manage notification channels to edit or create
email notification channels on demand.
If you're editing a budget, you can link new notification channels or
unlink previously selected email channels by using the checkboxes next
to the channel names.
While editing a budget, if you can no longer see an email notification
channel that you previously linked to the budget, this might be because
the notification channel was deleted from the project. To learn more about
viewing, editing, or deleting notification channels, visit
Notification options .
Click Save .
Delivery guarantees for Cloud Monitoring notifications
After you create a budget and link it to Cloud Monitoring email notification
channels, you can expect emails to be sent as described here:
It may take several hours before receiving the first alert email.
Email alerts are sent only when triggered by the threshold rules.
If the Cloud Billing account has no usage, no email notification is sent.
If delivery fails due to notification channel misconfiguration, you will not
be notified.
Delivery will fail if the notification channel no longer exists.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
