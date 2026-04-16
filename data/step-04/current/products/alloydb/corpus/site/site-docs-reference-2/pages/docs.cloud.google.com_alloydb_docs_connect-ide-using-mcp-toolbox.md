---
title: "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox
  title: "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\
    \ Google Cloud Documentation"
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
Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to connect your AlloyDB instance to various agents that support the Model Context Protocol (MCP) .
We recommend using the dedicated AlloyDB extension for Gemini CLI . The Gemini CLI integrates the underlying MCP server directly into the extension, so you don't need to perform a separate server setup. You can configure Gemini Code Assist to use the Gemini CLI, offering similar setup benefits in your IDE.
Alternatively, other IDEs and agents supporting the MCP can connect through
MCP Toolbox for Databases . Toolbox is an open-source MCP server designed to connect AI agents to your data. It handles tasks like authentication and connection pooling, letting you interact with your data with natural language directly from your IDE.
Before you begin
To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions:
Task
Role name
Required Identity and Access Management (IAM) role
Use read-only tools to list and get AlloyDB resources
AlloyDB Viewer
roles/alloydb.viewer
Connect to an instance and run queries
Cloud AlloyDB Client
roles/alloydb.client
Service Usage Consumer
roles/serviceusage.serviceUsageConsumer
Perform administrative tasks (such as creating or managing clusters, instances, and users)
AlloyDB Admin
roles/alloydb.admin
Use the observability extension
Monitoring Viewer
roles/monitoring.viewer
Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud APIs necessary to create and connect to AlloyDB.
Enable
the APIs
In the Confirm project step, click Next to confirm the name of the project you are going to make changes to.
In the Enable APIs step, click Enable to enable the following:
AlloyDB API
Compute Engine API
Cloud Resource Manager API
Service Networking API
The Service Networking API is required if you plan to configure
network connectivity to AlloyDB using a VPC network that
resides in the same Google Cloud project as AlloyDB.
The Compute Engine API and Cloud Resource Manager API are required if you plan to
configure network connectivity to AlloyDB using a VPC
network that resides in a different Google Cloud project.
Create or select a cluster and its primary instance .
Configure Application Default Credentials (ADC) for your environment.
Create or reuse a database user . Be ready to enter the username and password.
Use the Gemini CLI extensions for AlloyDB
Note: The AlloyDB Gemini CLI extension is based on MCP Toolbox for Databases. MCP Toolbox for Databases is currently in beta (pre-v1.0), and may see breaking changes until the first stable release (v1.0).
Gemini CLI is an open-source AI agent designed to assist with development workflows by assisting with coding, debugging, data exploration, and content creation. Its mission is to provide an agentic interface for interacting with Data Cloud services and popular open-source databases.
The integration with Gemini CLI is through dedicated extensions that offer additional capabilities compared to a standard MCP Toolbox connection. The following sections describe the alloydb and alloydb-observability extensions, which offer an installation process and a set of tools. The open-source extensions contains detailed information on installation, configuration, and usage examples. For more information, see the Gemini CLI Extension - AlloyDB for PostgreSQL .
AlloyDB extension
The alloydb extension includes tools for querying the database, managing AlloyDB resources, and monitoring database health.
The following examples use a sample ecommerce database with the following tables:
products : contains product information, including product_id , product_name , category , and price .
customers : stores customer data, such as customer_id , first_name , last_name , and email .
orders : holds order information, including order_id , customer_id , and order_date .
Category
Tools
Example natural language prompt
Database operations
database_overview
Give me an overview of the current database.
list_tables
Show me all the tables in the current database.
execute_sql
Show me the 10 most expensive products in the "Laptops" category.
list_active_queries
What queries are running on the database?
get_query_plan
Explain the query plan for a query that finds all customers who have not placed an order in the last 6 months.
list_available_extensions
What are the available extensions I can install?
list_installed_extensions
List all the extensions that are installed.
list_indexes
List all indexes in the products table.
list_locks
Show all active locks on the database.
list_schemas
List all schemas in the database.
list_sequences
Show all sequences in the current schema.
list_triggers
List all triggers for the orders table.
list_views
Show me all the views in the sales schema.
Resource management clusters, instances, users
create_cluster
Create an AlloyDB cluster named sales-quarterly-db in the us-east1 region.
get_cluster
Get the details for the cluster sales-quarterly-db .
list_clusters
List all of my AlloyDB clusters.
create_instance
Create a new read instance in the sales-quarterly-db cluster.
get_instance
Show me the information for the instance sales-quarterly-db-rp .
list_instances
List all instances in the sales-quarterly-db cluster.
create_user
Note: The create_user tool can create two types of database users:
Database users with built-in authentication : these users are managed within the database and authenticate with a password.
IAM users : these users are managed in IAM and authenticate using their IAM credentials.
When creating a database user with built-in authentication, you must provide a password. When creating an IAM user, you must provide the IAM principal.
Create a new database user named reporting_user with password report_password .
Create a new IAM database user for reporting_user@example.com .
get_user
Get the information for the user reporting_user .
list_users
List all database users.
wait_for_operation
What is the status of the operation operation-163562789 ?
Database health and maintenance
list_autovacuum_configurations
Show me the current autovacuum configuration.
list_memory_configurations
What are the current memory configurations for the primary instance?
list_top_bloated_tables
List the top five most bloated tables.
list_replication_slots
Display all active replication slots.
replication_stats
Show the current replication statistics.
list_invalid_indexes
Check for any invalid indexes in the ecommerce database.
long_running_transactions
Are there any long-running transactions?
AlloyDB Observability extension
The alloydb-observability extension provides a unified interface for managing and monitoring database performance and health directly from the Gemini CLI.
Category
Tools
Example natural language prompt
Observability
get_system_metrics
What are the system metrics, like CPU usage, for the last hour?
get_query_metrics
Show me the query performance metrics from the last 15 minutes.
You can use the Gemini CLI extension for AlloyDB in two ways:
A standalone command-line tool
Integrated into your IDE with Gemini Code Assist
Gemini CLI
Install the Gemini CLI .
Install the AlloyDB extension for Gemini CLI from the GitHub repository using the following command:
gemini extensions install https://github.com/gemini-cli-extensions/alloydb
Set environment variables to connect to your AlloyDB instance:
export ALLOYDB_POSTGRES_PROJECT=" PROJECT_ID "
export ALLOYDB_POSTGRES_REGION=" REGION "
export ALLOYDB_POSTGRES_CLUSTER=" CLUSTER_NAME "
export ALLOYDB_POSTGRES_INSTANCE=" INSTANCE_NAME "
export ALLOYDB_POSTGRES_DATABASE=" DATABASE_NAME "
The Gemini CLI extension for AlloyDB uses your [application default credentials (ADC)](/authentication/application-default-credentials) for authentication by default. If you want to connect as a database user instead, set the following optional environment variables:
#Optional: Set for database user authentication
export ALLOYDB_POSTGRES_USER=" USERNAME "
export ALLOYDB_POSTGRES_PASSWORD=" PASSWORD "
To connect using a private IP address, you must also set the following environment variable:
export ALLOYDB_POSTGRES_IP_TYPE="private"
Start the Gemini CLI in interactive mode:
gemini
The CLI automatically loads the AlloyDB extension for Gemini CLI extension and its tools, which you can use to interact with your database.
Gemini Code Assist
We recommend to configure Gemini Code Assist to use the Gemini CLI, this approach removes the need to manually configure an MCP server.
Make sure you have installed and configured the Gemini CLI and the alloydb extension .
Configure Gemini Code Assist to use the Gemini CLI .
Start interacting with your AlloyDB instance using natural language directly within the Gemini Code Assist chat.
Connect with Antigravity
You can connect AlloyDB to Antigravity in the following ways:
Using the MCP Store
Using a custom configuration
Note: You don't need to download the MCP Toolbox binary to use these methods.
MCP Store
The most recommended method to connect to AlloyDB in Antigravity is by using the built-in MCP Store.
Open Antigravity and open the editor's agent panel .
Click the "..." icon at the top of the panel and select MCP Servers .
Locate AlloyDB for PostgreSQL in the list of available servers and click Install .
Follow the on-screen prompts to securely link your accounts (where applicable).
After you install AlloyDB in the MCP Store, resources and tools from the server are automatically available to the editor.
Custom config
To connect to a custom MCP server, follow these steps:
Open Antigravity and open the editor's agent panel .
Click the "..." icon at the top of the panel and select MCP Servers .
Click Manage MCP Servers > View raw config to open the mcp_config.json file.
Add and save the following configuration to the mcp_config.json file.
{
"mcpServers": {
"alloydb-postgres": {
"command": "npx",
"args": ["-y","@toolbox-sdk/server","--prebuilt","alloydb-postgres","--stdio"],
"env": {
"ALLOYDB_POSTGRES_PROJECT": " PROJECT_ID ",
"ALLOYDB_POSTGRES_REGION": " REGION ",
"ALLOYDB_POSTGRES_CLUSTER": " CLUSTER_NAME ",
"ALLOYDB_POSTGRES_INSTANCE": " INSTANCE_NAME ",
"ALLOYDB_POSTGRES_DATABASE": " DATABASE_NAME ",
"ALLOYDB_POSTGRES_USER": " USERNAME ",
"ALLOYDB_POSTGRES_PASSWORD": " PASSWORD "
}
}
}
}
Note: To connect using a private IP address, add the "ALLOYDB_POSTGRES_IP_TYPE": "private" property to the env object. Make sure to add a comma to the preceding line to keep the JSON valid.
Replace the following:
PROJECT_ID : your Google Cloud project ID.
REGION : your AlloyDB region name.
CLUSTER_NAME : your AlloyDB cluster name.
INSTANCE_NAME : your AlloyDB instance name.
DATABASE_NAME : your AlloyDB database name.
USERNAME : your AlloyDB username for the ALLOYDB_POSTGRES_USER variable.
PASSWORD : your AlloyDB password for the ALLOYDB_POSTGRES_PASSWORD variable.
Connect with other IDEs using MCP Toolbox for Databases
This section describes how to connect to your AlloyDB instance from various agents using MCP Toolbox for Databases . Toolbox acts as an open-source Model Context Protocol (MCP) server that sits between your IDE and your database, providing a control plane for your AI tools. This section provides instructions for connecting to an AlloyDB instance using either a public or private IP address. By default, Toolbox uses a public IP address, but you can configure a private IP connection by setting the ALLOYDB_POSTGRES_IP_TYPE environment variable as shown in the configuration examples.
Install MCP Toolbox for Databases
To connect your IDE to AlloyDB, you must install MCP Toolbox for Databases, an open-source server that connects AI agents to your data.
Download the latest version of Toolbox as a binary. Select the binary corresponding to your operating system (OS) and CPU architecture. You must use Toolbox version v0.15.0 or later.
linux/amd64
curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/linux/amd64/toolbox
darwin/arm64
curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/darwin/arm64/toolbox
darwin/amd64
curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/darwin/amd64/toolbox
windows/amd64
curl -O https://storage.googleapis.com/genai-toolbox/v0.15.0/windows/amd64/toolbox
Make the binary an executable.
chmod +x toolbox
Verify the installation.
./toolbox --version
Configure your client
Select your agent tool from the following options:
Claude code
Install Claude Code .
Create the .mcp.json file in your project root, if it doesn't exist.
Add the configuration, replace the environment variables with your values, and save.
{
"mcpServers": {
"alloydb": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","alloydb-postgres","--stdio"],
"env": {
"ALLOYDB_POSTGRES_PROJECT": " PROJECT_ID ",
"ALLOYDB_POSTGRES_REGION": " REGION ",
"ALLOYDB_POSTGRES_CLUSTER": " CLUSTER_NAME ",
"ALLOYDB_POSTGRES_INSTANCE": " INSTANCE_NAME ",
"ALLOYDB_POSTGRES_DATABASE": " DATABASE_NAME ",
"ALLOYDB_POSTGRES_USER": " USERNAME ",
"ALLOYDB_POSTGRES_PASSWORD": " PASSWORD "
}
}
}
}
Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB_POSTGRES_IP_TYPE": "private"
Claude desktop
Open Claude Desktop and navigate to Settings .
In the Developer tab, click Edit Config to open the configuration file.
Add the configuration, replace the environment variables with your values, and save.
{
"mcpServers": {
"alloydb": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","alloydb-postgres","--stdio"],
"env": {
"ALLOYDB_POSTGRES_PROJECT": " PROJECT_ID ",
"ALLOYDB_POSTGRES_REGION": " REGION ",
"ALLOYDB_POSTGRES_CLUSTER": " CLUSTER_NAME ",
"ALLOYDB_POSTGRES_INSTANCE": " INSTANCE_NAME ",
"ALLOYDB_POSTGRES_DATABASE": " DATABASE_NAME ",
"ALLOYDB_POSTGRES_USER": " USERNAME ",
"ALLOYDB_POSTGRES_PASSWORD": " PASSWORD "
}
}
}
}
Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB_POSTGRES_IP_TYPE": "private"
Restart Claude Desktop.
The new chat screen displays a hammer (MCP) icon with the new MCP server.
Cline
Open the Cline extension in VS Code and tap MCP Servers icon.
Click Configure MCP Servers to open the configuration file.
Add the following configuration, replace the environment variables with your values, and save.
{
"mcpServers": {
"alloydb": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","alloydb-postgres","--stdio"],
"env": {
"ALLOYDB_POSTGRES_PROJECT": " PROJECT_ID ",
"ALLOYDB_POSTGRES_REGION": " REGION ",
"ALLOYDB_POSTGRES_CLUSTER": " CLUSTER_NAME ",
"ALLOYDB_POSTGRES_INSTANCE": " INSTANCE_NAME ",
"ALLOYDB_POSTGRES_DATABASE": " DATABASE_NAME ",
"ALLOYDB_POSTGRES_USER": " USERNAME ",
"ALLOYDB_POSTGRES_PASSWORD": " PASSWORD "
}
}
}
}
A green active status appears after the server connects successfully.
Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB_POSTGRES_IP_TYPE": "private"
Cursor
Create the .cursor directory in your project root if it doesn't exist.
Create the .cursor/mcp.json file if it doesn't exist, and open it.
Add the following configuration, replace the environment variables with your values, and save.
{
"mcpServers": {
"alloydb": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","alloydb-postgres","--stdio"],
"env": {
"ALLOYDB_POSTGRES_PROJECT": " PROJECT_ID ",
"ALLOYDB_POSTGRES_REGION": " REGION ",
"ALLOYDB_POSTGRES_CLUSTER": " CLUSTER_NAME ",
"ALLOYDB_POSTGRES_INSTANCE": " INSTANCE_NAME ",
"ALLOYDB_POSTGRES_DATABASE": " DATABASE_NAME ",
"ALLOYDB_POSTGRES_USER": " USERNAME ",
"ALLOYDB_POSTGRES_PASSWORD": " PASSWORD "
}
}
}
}
Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB_POSTGRES_IP_TYPE": "private"
Open Cursor and navigate to Settings > Cursor Settings > MCP . A green active status appears when the server connects.
Visual Studio Code (Copilot)
Open VS Code and create .vscode directory in your project root if it does not exist.
Create the .vscode/mcp.json file if it doesn't exist, and open it.
Add the following configuration, replace the environment variables with your values, and save.
{
"servers": {
"alloydb": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","alloydb-postgres","--stdio"],
"env": {
"ALLOYDB_POSTGRES_PROJECT": " PROJECT_ID ",
"ALLOYDB_POSTGRES_REGION": " REGION ",
"ALLOYDB_POSTGRES_CLUSTER": " CLUSTER_NAME ",
"ALLOYDB_POSTGRES_INSTANCE": " INSTANCE_NAME ",
"ALLOYDB_POSTGRES_DATABASE": " DATABASE_NAME ",
"ALLOYDB_POSTGRES_USER": " USERNAME ",
"ALLOYDB_POSTGRES_PASSWORD": " PASSWORD "
}
}
}
}
Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB_POSTGRES_IP_TYPE": "private"
Windsurf
Open Windsurf and navigate to Cascade assistant.
Click the MCP icon, then click Configure to open the configuration file.
Add the following configuration, replace the environment variables with your values, and save.
{
"mcpServers": {
"alloydb": {
"command": "./PATH/TO/toolbox",
"args": ["--prebuilt","alloydb-postgres","--stdio"],
"env": {
"ALLOYDB_POSTGRES_PROJECT": " PROJECT_ID ",
"ALLOYDB_POSTGRES_REGION": " REGION ",
"ALLOYDB_POSTGRES_CLUSTER": " CLUSTER_NAME ",
"ALLOYDB_POSTGRES_INSTANCE": " INSTANCE_NAME ",
"ALLOYDB_POSTGRES_DATABASE": " DATABASE_NAME ",
"ALLOYDB_POSTGRES_USER": " USERNAME ",
"ALLOYDB_POSTGRES_PASSWORD": " PASSWORD "
}
}
}
}
Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB_POSTGRES_IP_TYPE": "private"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
