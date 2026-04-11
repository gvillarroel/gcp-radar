---
title: "Set up Gemini in BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/bigquery/set-up-gemini
  title: "Set up Gemini in BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up Gemini in BigQuery
Before you can use
Gemini in BigQuery , which
offers AI-powered assistance for your data analytics, your team must enable
required APIs and grant roles.
Some Gemini in BigQuery features are available at no
additional charge, while other features require quota
that is earned by using compute capacity. To learn more about using
Gemini in BigQuery features, see Gemini
in BigQuery pricing .
Note : Gemini in BigQuery is part
of Gemini for Google Cloud and doesn't support the
same compliance and security offerings as BigQuery.
You should only set up Gemini in BigQuery
for BigQuery projects that don't require
compliance offerings that aren't supported by Gemini for Google Cloud .
For information about how to turn off or prevent access to
Gemini in BigQuery, see
Turn off Gemini in BigQuery .
Enable required APIs and grant roles
To use Gemini in BigQuery,
you must enable required APIs and grant required Identity and Access Management (IAM)
roles. A service administrator or project
owner with the serviceusage.services.enable IAM permission
usually performs this step. For a list of APIs and services used by
BigQuery, see Manage BigQuery API dependencies .
In the the Google Cloud console, with your project selected, go to the
BigQuery Studio page.
Go to BigQuery Studio
View a Gemini in BigQuery feature in the
the Google Cloud console. For example, in BigQuery Studio hover
over the pen_spark arrow_drop_down
Gemini icon.
The console prompts you to enable additional Google Cloud APIs.
Click Continue to start enabling required
Google Cloud APIs. A side panel lists the APIs
required to use Gemini in BigQuery.
For each required API, click Enable to enable the API for the current
project, and then click Next .
To grant principals the IAM roles required to use
Gemini in BigQuery, enter the user names of the principals.
The following roles grant the permissions required to use Gemini:
BigQuery Studio User
BigQuery Studio Admin
Gemini in BigQuery requires the following
permissions:
cloudaicompanion.entitlements.get
cloudaicompanion.instances.completeCode
cloudaicompanion.instances.completeTask
cloudaicompanion.instances.generateCode
cloudaicompanion.operations.get
cloudaicompanion.topics.create
Click Done .
Turn on Gemini in BigQuery features
If you're a data analyst, data scientist, or developer who wants to use
specific Gemini in BigQuery features to write
SQL queries and Python code, then you can toggle certain Gemini
features in the Google Cloud console. To learn how to toggle features, see
Before you begin in
"Write queries with Gemini assistance." For more information, see
Gemini for Google Cloud overview .
Use data insights and automated metadata generation features
BigQuery data insights and automated metadata generation features
are available to customers using BigQuery on-demand compute,
Enterprise edition, or Enterprise Plus edition. The quota for
data insights scans and metadata generation is based on the use of these
compute models at the
organization level. For information about quotas for these features, see
Quotas for Gemini in BigQuery .
If your organization is using BigQuery Standard edition
for compute only, then you can use Gemini Code Assist Standard, which
includes data insights and automated metadata generation capabilities in
addition to features listed in Gemini Code Assist Standard and
Enterprise pricing
overview .
To learn how to purchase Gemini Code Assist Standard, see Purchase a
Gemini Code Assist Standard
subscription and
follow the instructions to purchase Standard edition.
Enable Gemini in BigQuery preview features
Certain Gemini in BigQuery features in
Preview
are part of the trusted tester program. To request access to these features,
an administrator must complete the
Gemini in BigQuery Pre-GA Sign-up form .
Gemini in BigQuery pre-GA feature access is
enabled periodically in batches.
Preview features that require Gemini in BigQuery
sign-up include the following:
Automated metadata generation for data insights (Preview)
Dataset insights with BigQuery knowledge engine (Preview)
Turn off Gemini in BigQuery
To prevent a user from using Gemini in BigQuery
features, revoke the specific cloudaicompanion IAM permissions
that grant access to these capabilities, as detailed in
Enable necessary APIs and grant roles .
To turn off specific Gemini in BigQuery
features:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the toolbar, click
pen_spark Gemini settings .
Clear the Gemini features that you want to turn off.
To turn off all Gemini for Google Cloud
products including BigQuery, see
Turn off the Gemini for Google Cloud API .
What's next
Learn more about the
types of generative AI assistance available in Gemini for Google Cloud .
Learn
where Gemini in BigQuery processes your data .
Learn
how to access and manage Gemini administrator controls .
Learn about security, privacy, and compliance for Gemini in BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
