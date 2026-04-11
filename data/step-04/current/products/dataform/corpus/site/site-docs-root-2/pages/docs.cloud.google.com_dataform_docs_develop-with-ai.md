---
title: "Create actions with Gemini assistance \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/develop-with-ai
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/develop-with-ai
  title: "Create actions with Gemini assistance \_|\_ Dataform \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Create actions with Gemini assistance
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Gemini in Dataform
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can use Gemini , an AI-powered
collaborator in Google Cloud, to generate SQL and Dataform core
code inside .sqlx files in Dataform.
Learn how and when Gemini
for Google Cloud uses your data .
Only English
language prompts are supported for Gemini in
Dataform.
This document is intended for data analysts, data scientists, and data
developers who work with
workflows in Dataform .
It assumes you have knowledge of Google SQL syntax and
how to create Dataform workflow actions.
Before you begin
In the Google Cloud console, go to the project selector page.
Go to project selector
Select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Activate Gemini in BigQuery .
Generate a query
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
You can provide Gemini with a natural language statement (or
prompt ) to generate a SQL or Dataform core query based on
workflow actions defined in your repository.
For example, you can use Gemini
to generate a SQL SELECT statement in a .sqlx table definition file.
To generate a SQL or Dataform core query, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select or create a repository ,
and then select or create a workspace .
In the Files pane, select or create a .sqlx file.
In the file tab, click
pen_spark
Gemini .
In the Gemini dialog, enter a natural language prompt.
If you know the SQL action that you want to use, then you can specify
the action name in backticks ( ` ) in your prompt.
Click Generate .
Gemini reviews the SQL actions defined in your repository
to find actions that might be relevant to your prompt and suggests a query.
Optional: To provide feedback, click
thumb_up Like suggestion ,
thumb_down Dislike suggestion , or
chat_info Give more feedback
To accept the suggestion, click Insert .
Tips for query generation
The following tips can improve suggestions that Gemini in
Dataform provides:
Provide the SQL action name
enclosed in backticks ( ` ), such as
` action_name ` .
If the column names or their semantic relationships are unclear or complex,
then you can provide context in the prompt to guide Gemini towards
the answer that you want. This technique is known as prompt engineering . For
example, to encourage a generated query to reference a column name, describe
the column name and its relevance to the answer that you want. To encourage
an answer that references complex terms like lifetime value or gross
margin , describe the concept and its relevance to your data to improve SQL
generation results.
Gemini and Dataform data
Gemini in Dataform can access the metadata of the
tables that you have permission to access. This can include the table names,
column names, data types, and column descriptions. Gemini in
Dataform cannot access the data in your tables, views, or
models. For more information on how Gemini uses your data, see
How Gemini for Google Cloud uses your
data .
What's next
For information about Gemini for Google Cloud, see
Gemini for Google Cloud overview .
For information about the Gemini data policy, see
How Gemini for Google Cloud uses your data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
