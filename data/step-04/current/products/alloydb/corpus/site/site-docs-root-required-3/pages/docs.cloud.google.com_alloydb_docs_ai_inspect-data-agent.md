---
title: "Test QueryData \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/inspect-data-agent
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/inspect-data-agent
  title: "Test QueryData \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Test QueryData
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms , and the
Additional Terms for Generative AI
Preview Products .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For information about access to this release, see the access
request page .
This document describes how to test QueryData and update the context set file. You can test QueryData's ability to generate SQL queries from natural language questions. If a generated query is not accurate, you can update the context set file.
To learn about context sets, see Context sets overview .
Before you begin
Make sure that a context set is already created and the context set file is uploaded to the QueryData agent. For more information, see Manage context sets in AlloyDB Studio
Test QueryData
To test a QueryData, perform the following steps:
In the Google Cloud console, go to the AlloyDB page.
Go to AlloyDB
Select a cluster from the list.
In the navigation menu, click AlloyDB Studio .
Sign in to Studio using Identity and Access Management authentication.
In the Explorer pane , click View actions next to the context set you're using.
Click Test context set .
In the query editor, click Generate SQL to open the Help me code panel.
Enter a natural language question in the editor to generate a SQL query, and click Generate .
Review the SQL query for accuracy.
Download and update a context set
If you are not satisfied with the generated SQL query for a natural language question, download the existing context set file. You can then review and update the query template, and reupload the updated context file to the agent.
To download and update a context set, perform the following steps:
In the Explorer pane , click View actions .
Click Download context file .
Follow steps in Build contexts using Gemini CLI to update context with additional query pairs.
In the Explorer pane , click View actions next to the context set you're using.
Click Edit context set .
Click Browse in the Upload context set file section, and select the updated context set file.
Click Save to update the context set.
After you are satisfied with the accuracy of your responses, you can use the QueryData endpoint to connect your application to the context set.
Note: After you upload the updated context set file, it overwrites the existing context set.
Find the context set ID
To connect a data application to the QueryData agent, you need the context set's ID.
In the Google Cloud console, go to the AlloyDB page.
Go to AlloyDB
Select a cluster from the list.
In the navigation menu, click AlloyDB Studio .
Sign into Studio using Identity and Access Management authentication.
In the Explorer pane , click View actions next to the context set you're using.
Click Edit context set .
Note the context ID in Context set ID . The context set ID format is similar to projects/data-agents-project/locations/us-east1/contextSets/bdf_pg_all_templates .
Connect QueryData to application
Set the context set ID in the QueryData method call to provide authored context for database data sources such as AlloyDB, Spanner, Cloud SQL, and Cloud SQL for PostgreSQL. For more information, see Define data agent context for database data sources
After testing the context set, you can reference the database data source in your QueryData call.
Example QueryData request with authored context
The following example shows a QueryData request using alloydb database data source. The agent_context_reference.context_set_id field is used to link to pre-authored context stored in the database.
{
"parent" : "projects/context-set-project/locations/us-central1" ,
"prompt" : "How many accounts in the Prague region are eligible for loans? A3 contains the data of region." ,
"context" : {
"datasource_references" : [
{
"alloydb" : {
"database_reference" : {
"project_id" : "context-set-project" ,
"region" : "us-central1" ,
"cluster_id" : "sqlgen-magic" ,
"instance_id" : "context-set-primary" ,
"database_id" : "financial"
},
"agent_context_reference" : {
"context_set_id" : "projects/context-set-project/locations/us-east1/contextSets/bdf_pg_all_templates"
}
}
}
]
},
"generation_options" : {
"generate_query_result" : true ,
"generate_natural_language_answer" : true ,
"generate_disambiguation_question" : true ,
"generate_explanation" : true
}
}
The request body contains the following fields:
prompt : The natural language question from the end user.
context : Contains information about the data sources.
datasource_references : Specifies the data source type.
alloydb : Required when querying the database. This field changes based on the database you are querying.
database_reference : Specifies information related to your database instance.
cluster_id : The cluster ID of the database instance.
project_id : The project ID of the database instance.
region : The region of the AlloyDB instance.
instance_id : The instance ID of the AlloyDB instance.
database_id : The ID of the database.
agent_context_reference : Links to authored context in the database.
context_set_id : The complete context set ID of the context stored in the database. For example, projects/context-set-project/locations/us-east1/contextSets/bdf_gsql_gemini_all_templates .
generationOptions : Configures the type of output to generate.
generate_query_result : Set to true to generate and return the query results.
generate_natural_language_answer : Optional. If set to true, generates a natural language answer.
generate_explanation : Optional. If set to true, generates an explanation of the SQL query.
generate_disambiguation_question : Optional. If set to true, generates disambiguation questions if the query is ambiguous.
Example QueryData response
Here is an example of a successful response from a QueryData call:
{
"generated_query" : "-- Count the number of accounts in Prague that are eligible for loans\nSELECT\n COUNT(DISTINCT \"loans\".\"account_id\")\nFROM \"loans\"\nJOIN \"district\" -- Join based on district ID\n ON \"loans\".\"district_id\" = \"district\".\"district_id\"\nWHERE\n \"district\".\"A3\" = 'Prague'; -- Filter for the Prague region" ,
"intent_explanation" : "The question asks for the number of accounts eligible for loans in the Prague region. I need to join the `district` table with the `loans` table to filter by region and count the distinct accounts. The `A3` column in the `district` table contains the region information, and I'll filter for 'Prague'. The `loans` table contains information about loans, including the `account_id` and `district_id`. I will join these two tables on their respective district IDs." ,
"query_result" : {
"columns" : [
{
"name" : "count"
}
],
"rows" : [
{
"values" : [
{
"value" : "2"
}
]
}
],
"total_row_count" : 1
},
"natural_language_answer" : "There are 2 accounts in Prague that are eligible for loans."
}
What's next
Learn more about context sets .
Learn how to build contexts using Gemini CLI
Learn how to Manage context sets in AlloyDB Studio
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
