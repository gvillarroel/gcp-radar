---
title: "Close or reopen your Cloud Billing account \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/close-or-reopen-billing-account
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/close-or-reopen-billing-account
  title: "Close or reopen your Cloud Billing account \_|\_ Google Cloud Documentation"
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
Close or reopen your Cloud Billing account
Stay organized with collections
Save and categorize content based on your preferences.
To use Google Cloud or Google Maps Platform services, you must have an active
Cloud Billing account linked to your projects to pay for your usage costs.
However, you might want to cancel your Google Cloud account or
stop accruing any charges for your Google Cloud or
Google Maps Platform usage. This document describes how to close a
Cloud Billing account, or how to reopen a Cloud Billing
account that was previously closed.
Close a Cloud Billing account
When you close a Cloud Billing account, all services are stopped in
all projects that are paid for by that billing account.
Permissions required for this task
To close a Cloud Billing account, you need a role that includes the
following
permission
on your Cloud Billing account:
billing.accounts.close
To gain this permission using a predefined role, ask your administrator to
grant you the following role on the Cloud Billing account:
Billing Account Administrator
Warning: Closing an active Cloud Billing account stops all billable
services in any
projects linked to the account , such as running
VM instances or storage buckets. For Google Cloud, Google Maps Platform,
Firebase, and Google AI Studio services, if your projects are linked
to a Cloud Billing account that is not in a billable state (such as
an account suspension or billing account closure), you can't use the products
and services enabled in your projects. This is true even if your projects only
use Google Cloud or other billing-eligible
services that are free .
Before you close a billing account
Before closing a Cloud Billing account, we recommend you do the
following:
Identify the
projects that are linked to the Cloud Billing account
that you intend to close.
If you want to keep services and resources running in any
associated projects ,
link those projects to a different active Cloud Billing account
before you close the current one.
Alternatively, you can
disable billing on each project
before closing the Cloud Billing account.
For Google Cloud and Google Maps Platform services, when
you disable billing on the project, your services are stopped and billing
on that project stops.
For Gemini API in AI Studio usage, when you disable billing on a
project, the project's billing tier is downgraded to the Free tier,
which allows
limited free usage .
For Firebase services, when you disable billing on a project,
the project is downgraded to the
no-cost Spark plan ,
which provides full usage of free services, plus limited usage and quota
for paid Firebase services.
For Gemini API in AI Studio users with projects on a paid tier:
If your projects are linked to a Cloud Billing account with a
Prepay charging cycle
and you have a positive credit balance in your
Prepay Google payments account ,
any remaining Prepay credits are forfeited when you close the
Cloud Billing account .
If you
meet the criteria
to upgrade your Prepay account to a Postpay billing tier, consider
upgrading to Postpay before you close the Cloud Billing account.
When you upgrade to a Postpay payments account, you'll
receive a refund for the balance of any unused Prepay credits.
Caution: Be aware that when a project is linked to a Cloud Billing
account that is not in a billable state (such as an account suspension or
billing account closure), the project might be shut down, or services within
the project might be degraded, stopped, or removed. To understand how your
data can be impacted, see
Data deletion on Google Cloud .
How to close an account
To close a Cloud Billing account, follow the steps for the
type of account (self-serve or
invoiced) you want to close.
Self-serve account
You can manage many settings for your
self-serve (online) Cloud Billing account
in the Google Cloud console,
including closing an account. Complete the following steps to close a
self-serve billing account:
In the Google Cloud console, go to the Account management page.
Go to Account management in the Cloud Billing console
At the prompt, choose the Cloud Billing account that you
want to close.
The Account management page opens for the selected
Cloud Billing account.
At the top of the page, click
cancel
Close billing account .
After you close your Cloud Billing account , we'll bill you
for the usage costs you accrued prior to canceling your account. This
bill is the last bill you receive, unless you reopen the account and
reactivate your services.
Why can't I see or access the
cancel Close
billing account button?
If you're on the Account management page of the Cloud Billing
account that you want to close and you don't see or can't access the
cancel Close
billing account button, the reasons could include the following:
You don't have the permissions needed to close this Cloud Billing
account. Contact your Cloud Billing account administrator.
Your Cloud Billing account has outstanding charges or outdated
payment information. You can't close a billing account until you
pay off any previous balance
or
fix payment information .
Your Cloud Billing account is configured as an
invoiced account .
To close an invoiced Cloud Billing account, contact your
Google Cloud sales specialist or
contact Cloud Billing Support .
Tip : To stop new charges from accruing in a Cloud Billing
account,
disable billing
on each
project linked to the Cloud Billing account
or
link those projects to a different, active Cloud Billing account .
Invoiced account
If your Cloud Billing account is configured as an
invoiced account ,
you can't close the billing account online, in the Google Cloud console. Rather,
we must perform this action for you.
To close an invoiced Cloud Billing account, contact your
Google Cloud sales specialist or
contact Cloud Billing Support .
Tip : To stop new charges from accruing in a Cloud Billing
account,
disable billing
on each
project linked to the Cloud Billing account
or
link those projects to a different, active Cloud Billing account .
Note: If your Cloud Billing account is configured as a
self-serve (online) Cloud Billing account ,
you can close the billing account online. Follow the instructions in the
Self-serve account tab.
Reopen a closed Cloud Billing account
When you reopen a closed a Cloud Billing account, all projects that
are linked to and paid by that billing account will start incurring charges
for the usage of any billable services in the projects.
Permissions required for this task
To reopen a Cloud Billing account, you need a role that includes the
following
permission
on your Cloud Billing account:
billing.accounts.reopen
To gain this permission using a predefined role, ask your administrator to
grant you the following role on the Cloud Billing account:
Billing Account Administrator
Before you reopen an account
Before a Cloud Billing account can be reactivated, you must resolve
any Google payments-related issues or suspensions. Follow the steps
in the resolving declined payments
troubleshooter for assistance.
To reopen a Cloud Billing account, make sure you have the
permissions required to reopen the account; typically, you must be a
Billing Account Administrator on the Cloud Billing account.
How to reopen a closed account:
To reopen a closed Cloud Billing account, follow the steps for the
type of account (self-serve or
invoiced) you want to reopen.
Self-serve account
You can manage many settings for your
self-serve (online) Cloud Billing account in the Google Cloud console,
including reopening a closed account. Complete the following steps to reopen a
self-serve billing account:
Sign in to the Manage billing accounts page in the Google Cloud console.
Sign in to Manage billing accounts
By default, when you first access the list of Cloud Billing
accounts, the account list is filtered to display Active accounts.
In the filter_list
Filter row, clear the Status: Active filter.
All Cloud Billing accounts are displayed. Look for
Cloud Billing accounts with a Closed status.
Click the name of the Cloud Billing account you want to
reopen.
The Overview page opens for the billing account.
In the Billing management section of the Billing navigation menu ,
click Account Management .
At the top of the page, click
replay
Reopen billing account .
Why can't I see or access the
replay
Reopen billing account button?
If you're on the Account Management page of the closed Cloud Billing
account and you don't see or can't access the
replay
Reopen billing account button, the reasons could include the
following:
This account has unresolved Google payments-related issues or
suspensions. You must resolve these issues before you can reopen the
account. You might need to
update the payment method
linked to this Cloud Billing account, or
resolve declined payments .
You don't have the permissions needed to reopen this Cloud Billing
account. Contact your Cloud Billing account administrator.
Your Cloud Billing account is configured as an
invoiced account .
To reopen an invoiced Cloud Billing account, contact your
Google Cloud sales specialist or
contact Cloud Billing Support .
Invoiced account
If your Cloud Billing account is configured as an
invoiced account ,
you can't reopen the closed billing account online, in the Google Cloud console.
Rather, we must perform this action for you.
To reopen an invoiced Cloud Billing account, contact your
Google Cloud sales specialist or
contact Cloud Billing Support .
Note: If your Cloud Billing account is configured as a
self-serve (online) Cloud Billing account ,
you can reopen the billing account online. Follow the instructions in the
Self-serve account tab.
Cancel or delete a Cloud Billing account
After creation, Cloud Billing accounts can't be canceled or
deleted. Even if you
close your Cloud Billing account ,
the Cloud Billing account information is retained for reporting and
auditing purposes.
Close a Google payments profile
In the Google payments center , you can
permanently close your Google payments profile .
Closing your Google payments profile stops payment for all Google
services associated with the profile, and removes your transaction and payment
information permanently. After 30 days have passed, you can't reopen a closed
payments profile .
Before you can close a payments profile, you must cancel any of
the following paid Google services or subscriptions that are associated with
that profile:
Google Workspace, including Google Workspace add-ons
Google Ads
Android Developer
In addition, you must
close the active Cloud Billing account
associated with the payments profile. Otherwise, attempting to
delete your payments profile will fail with the message, You have active
subscriptions or services .
If you or another administrator closes your payments profile,
you can reopen it within 30 days. To reopen a profile, contact
Google payments center support .
After 30 days, you can't reopen a payments profile or find past
transaction or payment method information. For steps on closing your
payments profile, go to
Permanently end your Google payments service .
Consider alternatives to canceling your account
If you want to prevent a Cloud Billing account from accruing charges,
you can
close the Cloud Billing account ,
or
disable billing
on the
associated projects .
If you want to change the form of payment associated with your self-serve
Cloud Billing account, you can
manage your payment methods
in the Google payments center .
Related topics
Create a new Cloud Billing account
Modify a Cloud Billing account
View projects linked to a Cloud Billing account
Enable, disable, or change billing for a project
Add, remove, or update a payment method
Resolve billing issues
View your cost and payment history
View your billing reports and cost trends
Split charging cycles for self-serve (online) Cloud Billing accounts .
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
