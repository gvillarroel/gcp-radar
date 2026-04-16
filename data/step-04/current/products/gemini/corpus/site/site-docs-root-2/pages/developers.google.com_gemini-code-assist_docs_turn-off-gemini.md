---
title: "Turn off Gemini Code Assist \_|\_ Google for Developers"
url: https://developers.google.com/gemini-code-assist/docs/turn-off-gemini
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/gemini-code-assist/docs/overview
source_metadata:
  url: https://developers.google.com/gemini-code-assist/docs/turn-off-gemini
  title: "Turn off Gemini Code Assist \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Gemini Code Assist
Guides
Turn off Gemini Code Assist
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Turning off Gemini Code Assist requires the billing.subscriptions.update IAM permission, typically included in the roles/billing.admin role.
You can turn off Gemini Code Assist through the Admin for Gemini page in the Google API Console.
The process involves navigating to "Purchased products", selecting the Gemini Code Assist subscription, and managing the automatic renewal setting.
If auto-renewal is on, you need to select "No, don't automatically renew" and agree to the terms to turn it off.
This document explains how to turn off Gemini Code Assist.
Before you begin
To update a Gemini subscription, make sure you have the
billing.subscriptions.update Identity and Access Management permission. The
billing.subscriptions.update permission is included in the
roles/billing.admin
IAM role, or you can add the permission to a custom role.
Turn off Gemini Code Assist
To turn off Gemini Code Assist, do the following:
In the Google Cloud console, go to the Gemini Products page.
Go to Gemini Products
From the Gemini Products page, navigate to the Manage Subscription
page for the billing account associated with your project:
If you are prompted to select a billing account, select it and click
Continue to Admin for Gemini page . Then, from the navigation menu,
click Manage Subscription .
If you are not prompted to select a billing account, you are taken to the
Admin for Gemini page. From the navigation menu, click
Manage Subscription .
Click the Gemini Code Assist subscription. The name of the
subscription depends on the name given when
Gemini Code Assist was set up.
Review the subscription details and check the Auto renew setting.
If Auto renew is set to Off , then your subscription is already
set to end on the subscription end date. No further action is needed.
If Auto renew is set to On , the steps to disable it depend on whether
your subscription is in a trial period:
During a trial period: Click Disable Autorenew .
If you are not in a trial period:
Click Manage subscription .
To proceed to renewal settings, click Continue .
For Automatic subscription renewal , select
No, don't automatically renew , and then click Continue .
If you agree to the terms of purchase, select
I agree to the terms of this purchase , and then click
Save changes .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-11 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-11 UTC."],[],[]]
