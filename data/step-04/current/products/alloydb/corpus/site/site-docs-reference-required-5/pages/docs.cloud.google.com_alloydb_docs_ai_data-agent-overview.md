---
title: "QueryData overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview
  title: "QueryData overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
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
QueryData overview
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
QueryData lets you to interact with the data in your database using conversational language and build data agents. QueryData writes queries for your database using context sets, which are collections of code that contain unique information about your database. This context allows QueryData to translate natural language questions into accurate queries for your target use cases.
When to use QueryData
QueryData is ideal for applications such as:
Customer service automation : Handle high-volume inquiries like "Where is
my order?" or "What is my current balance?".
E-commerce shopping assistants : Help users navigate large product
catalogs with natural language queries like "Show me running shoes under
$100."
Field operations tools : Allow mobile employees to query inventory
levels, part availability, or service ticket details in real-time.
How QueryData works
To build effective agentic applications, QueryData must understand your data
organization and business logic. You provide this information in the form of
context set.
You define context in files that contain JSON objects for each context type. You author these context files with the help of the Gemini CLI . You
then upload the context file to a context set that you create in the Google Cloud
console. This process enables QueryData to learn the specific schema of the
database and business logic of the application.
The context file looks similar to the following:
{
"templates" : [
{
"nl_query" : "Count Prague loan accounts" ,
"sql" : "SELECT COUNT(T1.account_id) FROM bird_dev_financial.account AS T1 INNER JOIN bird_dev_financial.loan AS T2 ON T1.account_id = T2.account_id INNER JOIN bird_dev_financial.district AS T3 ON T1.district_id = T3.district_id WHERE T3.\"A3\" ='Prague'" ,
"intent" : "How many accounts associated with loans are located in the Prague region?" ,
"manifest" : "How many accounts associated with loans are located in a given city?" ,
"parameterized" : {
"parameterized_intent" : "How many accounts associated with loans are located in $1" ,
"parameterized_sql" : "SELECT COUNT(T1.account_id) FROM bird_dev_financial.account AS T1 INNER JOIN bird_dev_financial.loan AS T2 ON T1.account_id = T2.account_id INNER JOIN bird_dev_financial.district AS T3 ON T1.district_id = T3.district_id WHERE T3.\"A3\" = $1"
}
}
],
"facets" : [
{
"sql_snippet" : "T.\"A11\" BETWEEN 6000 AND 10000" ,
"intent" : "Average salary between 6000 and 10000" ,
"manifest" : "Average salary between a given number and a given number" ,
"parameterized" : {
"parameterized_intent" : "Average salary between $1 and $2" ,
"parameterized_sql_snippet" : "T.\"A11\" BETWEEN $1 AND $2"
}
}
],
"value_searches" : [
{
"query" : "SELECT $value as value, 'accounts.account_type' as columns, 'Account Type' as concept_type, 0 as distance, '{}'::text as context FROM \"accounts\" T WHERE T.\"account_type\" = $value" ,
"concept_type" : "Account Type" ,
"description" : "Exact match for account types"
}
]
}
When an end user asks a natural language question, QueryData prioritizes
matching the question to the templates and facets that have been audited by
the developer curating the context. Once QueryData identifies a match, it uses
the selected query template and facets to synthesize a database query. The context set logic
then executes that query against the database to return accurate results.
A recommended step is to define value searches within your context. Value searches allow the agent to map value phrases to specific values stored in your database columns. This grounds the LLM in your actual data, helping it resolve ambiguities, such as whether a term refers to a District name or a City .
If the agent fails to find a matching template, then it uses value searches to map natural language phrases to specific values stored in your database columns. This grounds the LLM in your actual data, helping it resolve ambiguities, such as whether a term refers to a District , Name , or a City .
The QueryData endpoint in the Conversational Analytics
API is
an agentic tool that allows programmatic integration with your applications to
enable SQL query generation from natural language questions. In a conversational
application, the QueryData endpoint must be used within the framework that manages the conversation history and context.To enforce entity resolution while maintaining strict row-level security, you can use parameterized secure views (PSVs). For more information, see Secure and control access to application data using parameterized secure views .
What's next
Learn how to test QueryData in AlloyDB Studio .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
