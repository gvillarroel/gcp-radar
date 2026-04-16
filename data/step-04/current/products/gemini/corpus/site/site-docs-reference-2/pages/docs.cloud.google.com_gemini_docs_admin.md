---
title: "Add or change Gemini Code Assist subscriptions \_|\_ Gemini for Google Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/admin
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/admin
  title: "Add or change Gemini Code Assist subscriptions \_|\_ Gemini for Google Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Add or change Gemini Code Assist subscriptions
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to access and use the
Gemini Code Assist administrator controls.
Gemini Code Assist subscriptions are subject to
Google Cloud Service Specific Terms
regarding Pricing and Billing for Committed Units.
Grant IAM permissions
In order to get the required permissions for adding or editing
Gemini Code Assist subscriptions, ask your administrator to grant
you the roles/billing.admin IAM role
on the billing account.
Alternatively, ask your administrator to grant you the
roles/consumerprocurement.orderAdmin role
and the
roles/billing.viewer role .
These roles contain the permissions required to add or change
Gemini Code Assist subscriptions. To see the exact permissions
that are required, expand the Required permissions section.
Required permissions
consumerprocurement.orders.place
billing.billingAccountPrices.list
Access Gemini for Google Cloud admin controls in the Google Cloud console
To access Gemini for Google Cloud admin controls in the
Google Cloud console, select Admin for Gemini in the navigation menu.
Go to Admin for Gemini
Pick a billing account
To edit or purchase a Gemini Code Assist subscription, you must
pick a billing account. Your Gemini Code Assist subscription is
tied to a billing account and can be used with any project. You can only have
one Gemini Code Assist subscription per billing account.
The following list shows possible ways to pick a billing account:
Manage subscriptions with project access .
If you don't have a subscription yet, click Get Gemini Code Assist
to purchase one. Note that you must
set up a billing account
first.
If you have a subscription already but it's not associated with this
billing account, click Manage subscriptions and then select a
different billing account where you want to manage the subscription.
If you already have a subscription associated with your current billing
account, click Manage Gemini Code Assist to navigate to the settings
page. Then, click Manage Subscriptions to select and manage existing
subscriptions.
Manage subscriptions without project access . If you have permission to
manage subscriptions, select the product you want to edit or purchase. Then,
select Manage Subscription and select a billing account.
Manage subscriptions for projects in a folder . If you start from a folder,
you must select a billing account before you purchase a subscription, since
billing accounts can't be directly associated with a folder.
Edit a Gemini Code Assist subscription
Important: Changes to a subscription that decrease the number of licenses,
downgrade the edition, or reduce the subscription period don't take effect
immediately; instead, they take effect at the end of the current subscription
term. Similarly, you can't cancel a subscription during its term. If
you want to end your subscription, make sure that you have auto-renewal
disabled. For more information, see
Turn off Gemini Code Assist .
In the Google Cloud console, go to the Admin for Gemini page.
Go to Admin for Gemini
The Admin for Gemini page loads.
Use the project picker at the top of the page to ensure you are scoped to the
project or folder that has an existing Gemini Code Assist
subscription.
Locate the Gemini Code Assist product tile, and then click
Manage Gemini Code Assist .
Select Manage subscription .
The Manage subscription page appears.
Select Manage subscription to edit the subscription, including:
Manage edition - If you're editing your Gemini Code Assist
subscription, then you can upgrade from Standard edition to Enterprise
edition, which takes effect immediately. Alternatively, you can downgrade
from Enterprise edition to Standard edition, which takes effect at end of
the current subscription term. To see a list of features available in each
edition, see
Supported features .
Note: Gemini Code Assist Standard licenses obtained using the
Gemini Enterprise bundle cannot be upgraded in the
Google Cloud console because they are licenses, not a standalone
subscription. To obtain Enterprise features in this scenario, you must
purchase a separate Gemini Code Assist Enterprise
subscription.
Increase or decrease the number of licenses in the subscription -
Adding licenses makes them available to you almost immediately.
However, if you reduce the number of licenses, then the changes won't take
effect until the end of the subscription term. Additionally, the original
license count is still reflected in your bill until the changes are
applied.
Change the subscription period - You can set the subscription to bill
monthly or annually. With an annual subscription, you are given a
discounted rate that is charged on a monthly basis rather than a one-time
payment. If you change from an annual subscription to a monthly
subscription, then the change won't take effect until the end of the
annual term. Additionally, you cannot change the subscription period
unless you have enabled subscription auto-renewal.
Enable or disable auto-renewal - If you disable auto-renewal, the
subscription expires at the end of the subscription term and all the
licenses in the subscription become invalid. You cannot re-enable a
subscription after it expires. Instead, you'll need to purchase a new
subscription to re-assign those licenses. Additionally, if auto-renewal
is disabled, then you can't make the following changes:
Reduce number of licenses
Change from annual to monthly subscription period
Change from Enterprise edition to Standard edition
Select Continue , and then select Confirm changes .
What's next
Learn more about
Gemini for Google Cloud billing .
Manage your Gemini for Google Cloud licenses .
Turn off Gemini Code Assist .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
