---
title: "Explain code cells with Gemini assistance \_|\_ Colab Enterprise \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/explain-cells
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/explain-cells
  title: "Explain code cells with Gemini assistance \_|\_ Colab Enterprise \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Explain code cells with Gemini assistance
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how you can use
Gemini in Colab Enterprise, which is a product
in the Gemini for Google Cloud portfolio,
to help you explain code cells in a Colab Enterprise notebook.
Learn how and when Gemini
for Google Cloud uses your data .
This document is intended for data analysts, data scientists, and
data developers who work with Colab Enterprise. It assumes you have
knowledge of how to write code in a notebook environment.
Overview
Gemini in Colab Enterprise can help you explain code cells
in a Colab Enterprise notebook. You might want to do this when you're working
with someone else's notebook and want to get a quick understanding of what
the code does. Or you might need to remind yourself how parts of your notebook
work after a long period of time without working on it.
After you get an explanation of a code cell, you can browse any
included code snippets and review the sources. You can also use the
Explain code chat dialog to discuss the code and ask follow-up questions.
For more details, see Explain a code cell .
Before you begin
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
Ensure that
Gemini in Colab Enterprise is set up for your
Google Cloud user account and project.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Enable the Vertex AI, Gemini for Google Cloud, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Enable the Vertex AI, Gemini for Google Cloud, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to use Gemini in Colab Enterprise,
ask your administrator to grant you the
following IAM roles on the project:
Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser )
Gemini for Google Cloud User ( roles/cloudaicompanion.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
One or more of the required roles includes the dataform.repositories.list
permission. Users who are granted the dataform.repositories.list permission or the
Code Creator
( roles/dataform.codeCreator ) role in a project can list the
names of code assets in that project by using the Dataform API or the
Dataform command-line interface (CLI). Non-administrators using
BigQuery Studio can only see code assets that they created or that were
shared with them.
Explain a code cell
To explain a code cell using Gemini for Google Cloud,
do the following:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains your notebook.
Click the notebook that you want to open.
In your notebook, click a code cell that has code in it.
Click
pen_spark Available
AI features , and then click Explain code .
If you haven't already authorized the Data Science Agent, a brief dialog appears while
Colab Enterprise authenticates your Google Account to the Data Science Agent.
An Explain code chat dialog appears that includes
an explanation of your code.
Read through the explanation, browse the example code snippets,
and review the sources. Use this chat dialog to discuss the code and
ask follow-up questions.
To close the Explain code dialog, click
close Close .
Turn off Gemini in Colab Enterprise
To turn off Gemini in Colab Enterprise for a
Google Cloud project, an administrator must turn off the
Gemini for Google Cloud API. See
Disabling services .
To turn off Gemini in Colab Enterprise for a specific user, an
administrator needs to revoke the
Gemini for
Google Cloud User ( roles/cloudaicompanion.user ) role for that user. See
Revoke
a single IAM role .
What's next
Read the Gemini for Google Cloud
overview .
For more ways to write and edit code with Gemini
assistance, see the following:
Chat about your notebook with Gemini
Use code completion and code generation
Explain and fix errors
Use the Data Science Agent
Learn how Gemini for Google Cloud uses
your data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
