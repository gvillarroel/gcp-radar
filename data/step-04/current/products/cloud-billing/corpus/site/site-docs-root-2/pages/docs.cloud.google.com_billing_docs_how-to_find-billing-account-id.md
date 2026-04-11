---
title: "Find a Cloud Billing account ID \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-id
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/billing/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/billing/docs/how-to/find-billing-account-id
  title: "Find a Cloud Billing account ID \_|\_ Google Cloud Documentation"
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
Find a Cloud Billing account ID
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to locate your billing account ID, which is a
system-generated, immutable, alphanumeric value assigned to your
Cloud Billing account. You typically need to provide your billing account
ID when you are communicating with
Cloud Billing Support
or when you are
automating billing tasks using an API
or
programmatic cost management .
The billing account ID is an 18-character alphanumeric value. For example:
010101-F0FFF0-10XX01
About Cloud Billing accounts
Cloud Billing accounts pay for usage costs in Google Cloud projects and
Google Maps Platform projects.To use Google Cloud resources in a project,
billing must be enabled on the project. Billing is enabled when the project is
linked to an active Cloud Billing account.
How to locate a billing account ID
A Cloud Billing account has a user-assigned name and a
system-generated billing account ID. The billing account ID is displayed on
multiple pages in the Billing section of the Google Cloud console.
If you have limited permissions to view billing information, you might not be
able to view all the different pages in the Billing section.
The method you use to find the billing account ID depends on your
Cloud Billing access permissions :
Users with basic Cloud Billing account permissions
Users with project-level permissions only
(no billing account permissions)
If you have basic Billing Account permissions
If you are granted the
billing.accounts.get
permission on a Cloud Billing account, you can access the Billing
section in the Google Cloud console to view the billing account ID. Most
predefined billing account roles
(such as Billing Account User, Billing Account Viewer, or Billing Account
Administrator) include the billing.accounts.get permission.
With basic billing account permissions, you have two methods to locate a
billing account ID.
Method 1: Open the Account Management page for a selected billing account
This method works well when you want to find the billing account ID of a
single, active billing account that you know by name. If the billing account
is closed or you are unsure of its name, use
method 2 .
In the Google Cloud console, go to the Account management page for the
Cloud Billing account.
Go to Account management in the Cloud Billing console
At the prompt, choose the Cloud Billing account that you
want to view.
The Account management page opens for the selected
Cloud Billing account.
On the Account management page, the alphanumeric Billing account ID
is displayed near the top of the page.
Method 2: View a list of all billing accounts you have permissions to access
This method is best when you have many billing accounts (active and closed)
and you want to view them all, including their billing account IDs, in a
dashboard.
In the Google Cloud console, go to the My Billing Accounts page in the
Billing section.
Go to My Billing Accounts in Cloud Billing console
If you have billing accounts for more than one organization, and you want
to view accounts across all of your organizations, expand the organization selector
and choose None Selected .
By default, your list of billing accounts is filtered to show only
Active accounts.
To view a complete list of your billing accounts, active and closed,
remove the Status : Active filter.
To view a list of accounts filtered by Closed accounts, remove the
Status : Active filter and add a Status : Closed filter.
In the list of your billing accounts, you can see the Billing account name ,
Billing account ID , and other information about the billing account,
such as Status , Account type , and Organization .
Tip : To view values in the Last 30 days'
spend column, you need the
billing.accounts.getSpendingInformation permission on the
Cloud Billing account. This permission isn't granted by the
Billing Account User role. Most other
predefined billing roles include this permission (such as
Billing Account Viewer, Billing Account Costs Manager, or
Billing Account Administrator).
You can download the list of accounts to a comma-separated values (CSV)
file using the get_app
Download CSV selector located above the table.
If you have Project-only permissions (no billing account permissions)
If you are a project owner, editor, viewer, or project billing manager, but
otherwise don't have any
billing account permissions ,
you can locate the ID of the billing account that is linked to the
projects that you can access.
To view a list of all projects you can access and their associated
Cloud Billing account, complete the following steps:
In the Google Cloud console, go to the My Projects page in the
Billing section.
Go to My Projects in Cloud Billing console
From the list of your projects, you can see the Billing account name and
Billing account ID .
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
