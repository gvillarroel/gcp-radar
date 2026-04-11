---
title: "Use code completion and code generation \_|\_ Colab Enterprise \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/use-code-completion
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/use-code-completion
  title: "Use code completion and code generation \_|\_ Colab Enterprise \_|\_ Google\
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
Use code completion and code generation
This document describes how you can use
Gemini in Colab Enterprise, which is a product
in the Gemini for Google Cloud portfolio,
to help you write and generate code in a Colab Enterprise notebook.
Learn how and when Gemini
for Google Cloud uses your data .
This document is intended for data analysts, data scientists, and
data developers who work with Colab Enterprise. It assumes you have
knowledge of how to write code in a notebook environment.
Limitations
Colab 's Transform Code feature isn't
supported in Colab Enterprise. To learn about other ways to use
AI-powered features to help you edit code in Colab Enterprise,
see Use the Data Science Agent .
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
Enable code completion and code generation
To enable code completion and code generation, do the following:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the toolbar, click the
pen_spark Help
me code button and select the features that you want to use.
Code completion suggests code while you type.
Code generation generates code from a description of
what you want.
If the
pen_spark Help
me code button isn't active, or if you don't see a list of
features when you click the button, see
Set up Gemini
in Colab Enterprise for a project .
Use code completion
To use code completion in a Colab Enterprise notebook,
do the following:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains your notebook.
Click the notebook that you want to open.
In the toolbar, click the
pen_spark Help
me code button and select Code completion if it
isn't already selected.
In a code cell of your notebook, start entering code.
Colab Enterprise suggests a potential way to complete your
code in gray italic text.
For example, if you enter import p ,
Colab Enterprise might suggest a code completion that
imports pandas as pd followed by a line that reads a CSV file
and stores the contents in a pandas dataframe.
To accept the suggested code completion, press Tab .
Use code generation
To generate code using Gemini for Google Cloud:
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains your notebook.
Click the notebook that you want to open.
In the toolbar, click the
pen_spark Help
me code button and select Code generation if it
isn't already selected.
In your notebook, add a blank code cell, or click a code cell that
doesn't have any code in it.
Click
pen_spark Available
AI features , and then click Generate code .
In the
pen_spark Generate
field, type a description of the code that you want to generate,
and then press Enter .
To close the Generate panel, click Close .
Turn off code completion and code generation
To turn off code completion and code generation, do the
following:
In the Colab Enterprise toolbar, click the
pen_spark Help
me code button.
Clear the features that you want to turn off.
Troubleshoot
This section shows you how to resolve issues with using
Gemini in Colab Enterprise.
Gemini features not working
When you type in a Colab Enterprise notebook, code completion suggestions don't appear.
Or, the pen_spark Help me code button
doesn't appear above a code cell.
In your Colab Enterprise settings, you might have turned off the
Show context-powered code completions setting.
To resolve this issue, do the following:
Click
arrow_drop_down Toggle
header visibility .
On the Tools menu, click Settings .
Click Editor .
Select Show context-powered code completions .
Click Save .
What's next
Read the Gemini for Google Cloud
overview .
For more ways to write and edit code with Gemini
assistance, see the following:
Chat about your notebook with Gemini
Explain code cells
Explain and fix errors
Use the Data Science Agent
Learn how Gemini for Google Cloud uses
your data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
