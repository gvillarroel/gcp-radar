---
title: "Set up notification preferences \_|\_ Resource Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/managing-notifications
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/managing-notifications
  title: "Set up notification preferences \_|\_ Resource Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Set up notification preferences
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to associate a domain with a project for verification
purposes, and also how to manage your notification preferences.
Associate a domain with a project
Domain verification ensures that push notifications delivered from
Pub/Sub and other Google APIs are sent only to
domains associated with the subscribing project. It serves as abuse prevention,
to stop anyone from sending messages to someone else's domain.
To associate a domain with a project, follow the steps for the API from which
you're receiving push notifications.
For Pub/Sub, see the Subscriber Guide .
For other APIs, see the following:
Google Drive Push Notifications
Google Calendar Push Notifications
Manage notification preferences
The Communication page in the Google Cloud console lets you opt into
product-specific notifications, such as upcoming maintenance windows, and
updates and offers, such as announcements of new features.
To control who receives other types of notifications, such as notifications for
billing issues, use
Essential Contacts .
To opt into, or out of, product notifications, updates, and offers:
Go to the Communication page in the Google Cloud console:
Go to the Communication Page
By default, any changes you make apply only to the current project. To
select additional projects, click the drop-down list of projects, and select
the projects you want to update.
A toggle indicates whether each type of notification is
check_circle On or
circle Off . Click the toggles to turn
each notification on or off.
Changes to notifications are automatically saved. When you're finished making
changes, you can navigate away from the page or close the browser window. To
receive mobile notifications, you must install the
Google Cloud console mobile app .
What's next
Use Essential Contacts
to control who in your organization receives essential notifications.
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
