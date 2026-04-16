---
title: "Build context sets using Gemini CLI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/quickstart/create-and-connect
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/build-context-gemini-cli
  title: "Build context sets using Gemini CLI \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
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
Build context sets using Gemini CLI
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
This document describes how to use the Gemini CLI and the MCP toolbox to build agent context files. These files contain templates, facets, and value searches that provide context for generating SQL queries from natural language. You will also use the DB Context Enrichment extension.
To learn about context sets, see Context sets overview .
To build an agent context file, perform the following high-level steps:
Prepare your environment
Generate targeted templates
Generate targeted facets
Generate targeted value searches
Optional. Generate bulk templates
Before you begin
Complete the following prerequisites before creating an agent.
Enable required services
Enable the following services for your project:
Data Analytics API with Gemini
Gemini for Google Cloud API
Knowledge Catalog API
Prepare an AlloyDB for PostgreSQL cluster, instance, and database
Make sure that you have access to an existing AlloyDB cluster and
instance or create a new one .
This tutorial requires you to have a database in your AlloyDB instance.
For more information, see Create a database .
Required roles and permissions
Add an Identity and Access Management (IAM) user or service account to the cluster at the database
level. For more information, see Manage
database users .
Grant the alloydb.databaseUser , the
serviceusage.serviceUsageConsumer , and the geminidataanalytics.queryDataUser
roles to the IAM user at the
project level. For more information, see Add
IAM policy binding for a project .
Grant executesql permission to AlloyDB for PostgreSQL instance
To grant the executesql permission to the AlloyDB for PostgreSQL instance and set
the data_api_access instance setting to the value ALLOW_DATA_API ,
use the following curl command :
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
https://alloydb.googleapis.com/v1alpha/projects/ PROJECT_ID /locations/ LOCATION /clusters/ CLUSTER_ID /instances/ INSTANCE_ID ?updateMask=dataApiAccess \
-d '{
"dataApiAccess": "ENABLED",
}'
Replace the following:
PROJECT_ID : The ID of your Google Cloud project.
LOCATION : The region where your AlloyDB cluster is located.
CLUSTER_ID : The ID of your AlloyDB cluster.
INSTANCE_ID : The ID of your AlloyDB instance.
To perform steps in this tutorial, sign in to Google Cloud , and then authenticate to the database
using IAM authentication.
Prepare your environment
You can build context set files from any local development environment or IDE. To prepare the environment, perform the following steps:
Install Gemini CLI
Install the DB Context Enrichment extension
Setup database connection
Install Gemini CLI
To install Gemini CLI, see Get Started with Gemini CLI .
Install the DB Context Enrichment MCP extension
The DB Context Enrichment extension provides a guided, interactive workflow to generate structured NL2SQL context from your database schemas.
For more information about installing the DB Context Enrichment extension, see DB Context Enrichment extension .
To install the DB Context Enrichment extension, follow these steps:
Install the DB Context Enrichment Gemini CLI extension:
gemini extensions install https://github.com/GoogleCloudPlatform/db-context-enrichment Note: The extension requires a Gemini API key at installation to authenticate with the Gemini API and enable context generation. For more information about how to find your API key, see Using Gemini API keys .
(Optional) Update the DB Context Enrichment extension.
To verify the installed version of the extension, run the following command:
gemini extensions list
Make sure that the version is 0.4.2 or higher. To update the DB Context Enrichment extension, run the following command:
gemini extensions update mcp-db-context-enrichment
To update the DB Context Enrichment extension or to replace the GEMINI_API_KEY , run the following command:
gemini extensions config mcp-db-context-enrichment GEMINI_API_KEY
Replace GEMINI_API_KEY with your Gemini API key.
Set up the DB Connection
The extension requires the database connection for context generation for fetching schemas, and executing SQL statements. To enable the extension to interact with your database, you must configure authentication credentials and define your database sources and tools.
Configure Application Default Credentials
You must configure Application Default Credentials (ADC) to provide user credentials for two main components:
Toolbox MCP server: uses credentials to connect to your database, fetch schemas, and run SQL for validation.
DB Context Enrichment extension: uses credentials to authenticate and call the Gemini API.
Run the following commands in your terminal to authenticate:
gcloud auth application-default login
Configure the tools.yaml file
The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.
The tools.yaml file specifies your database source and tools required to either fetch schemas or execute SQL. The extension comes with pre-installed Agent Skills to help you generate the configuration.
Note: If this connection is not established, the extension will return error messages, such as "Error Discovering tools from mcp_toolbox" and context generation won't work.
Start Gemini CLI:
gemini
Verify the skills are active by typing in the Gemini CLI:
/skills
Type a prompt such as help me setup the database connection . The skill guides you through creating the tools.yaml file in your current working directory.
Run the following command in Gemini CLI to apply the tools.yaml configuration to the Toolbox MCP server.
/mcp reload
For more information about manually configuring the tools.yaml file, see MCP Toolbox Configuration .
Generate Context
The extensions installed earlier empower Gemini CLI to help you author context in the form of a JSON file.
Note: Gemini CLI can access your local files to reduce overheads such as specifying exact locations of files in your local directories. For example, if a step in the Gemini CLI workflow asks you for information that you can find in your tools.yaml file, you can ask Gemini CLI to use tools.yaml or respond with a prompt such as look it up .
Generate targeted templates
If you want to add a specific query pair as a query template to the context set, then you can use the /generate_targeted_templates command. For more information about templates, see Context sets overview
To add a query template to the context set, perform the following steps:
In the same directory, start Gemini CLI:
gemini
Complete the Gemini CLI Authentication Setup .
Verify that the MCP toolbox and the database enrichment extension are ready to use:
/mcp reload
Run the /generate_targeted_templates command:
/generate_targeted_templates
Enter the natural language query that you want to add to the query template.
Enter the corresponding SQL query to the query template.
Review the generated query template. You can either save the query template as a context set file or append it to an existing context set file.
The context set file similar to my-cluster-psc-primary_postgres_templates_20251104111122.json is saved in the directory where you ran the commands.
For more information about the context set file and the query template, see Context sets overview .
Generate targeted facets
If you want to add a specific query pair as a facet to the context set file, then you can use the /generate_targeted_facets command.
To add a facet to the context set file, perform the following steps:
Run the /generate_targeted_facets command:
/generate_targeted_facets
Enter the natural language query that you want to add to the query template.
Enter the corresponding SQL query to the query template.
Review the generated facet. You can either save the facet to a context set file or append it to an existing context set file.
The context set file similar to my-cluster-psc-primary_postgres_templates_20251104111122.json is saved in the directory where you ran the commands.
For more information about the context set file and facets, see Context sets overview
Generate value search queries
If you want to generate value searches that specify how the system should search
for and match specific values within a concept type, then you can use the
/generate_targeted_value_searches command.
To generate a value index, perform the following steps:
Run the /generate_targeted_value_searches command:
/generate_targeted_value_searches
Enter postgresql to select AlloyDB as the database engine.
Enter the PostgreSQL version that you want to use. Select default to select PostgreSQL 16.
Enter the value search configuration as follows:
Table name: TABLE_NAME
Column name: COLUMN_NAME
Concept type: CONCEPT_TYPE
Match function: MATCH_FUNCTION
Description: DESCRIPTION
Replace the following:
TABLE_NAME : The table where the column associated with the concept type exists.
COLUMN_NAME : The column name associated with the concept type.
CONCEPT_TYPE : The concept type that you want to define—for example, City name .
MATCH_FUNCTION : The match function to use for value search. You can use one of the following functions:
EXACT_STRING_MATCH : For exact match of two string values. Best for unique IDs, codes, and primary keys.
TRIGRAM_STRING_MATCH : For fuzzy-matching that calculates normalized trigram distance. Best for user searches and name correction. To use TRIGRAM_STRING_MATCH , you must enable the pg_trgm extension.
SEMANTIC_SIMILARITY_MATCH : For semantic search on string values. Best for cross-lingual and synonym searches. For list of supported models, see Supported Google models . To use SEMANTIC_SIMILARITY_MATCH , you must enable the vector and the google_ml_integration extension.
DESCRIPTION : (Optional) The description of the value search query.
Add additional value searches as required. If you skip adding additional value indexes, the template-based SQL generation moves to the next step.
Review the generated value searches. You can either save the context set as a context set file or append it to an existing context set file.
The context set file similar to my-cluster-psc-primary_postgres_templates_20251104111122.json is saved in the directory where you ran the commands.
For more information about the value index, see Context sets overview
Optional: Generate bulk templates
If you want to auto-generate the context set file based on your database schema and data, then you can use the /generate_bulk_templates command.
To auto-generate bulk templates, perform the following steps:
Run the /generate_bulk_templates command:
/generate_bulk_templates
Based on your database schema, the template-based SQL generation takes you through a
series of questions related to verifying the database information and granting permissions to access the database schema.
Review the generated query template. You can either approve the template or update a query pair that you want to revise.
Enter the natural language query that you want to add to the query template.
Enter the corresponding SQL query to the query template.
Review the generated query template. You can either save the query template as a context set file or append it to an existing context file.
After you approve the query template, you can either create a new template file or append the query pairs to an existing template file. The query template is saved as a JSON file in your local directory.
The context set file similar to my-cluster-psc-primary_postgres_templates_20251104111122.json is saved in the directory where you ran the commands.
For more information about the context set file, see Context sets overview .
What's next
Learn more about context sets .
Learn how to create or delete a context set in AlloyDB Studio
Learn how to test a context set
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
