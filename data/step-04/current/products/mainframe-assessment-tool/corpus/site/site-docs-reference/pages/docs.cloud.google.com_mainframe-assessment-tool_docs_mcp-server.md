---
title: "Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server
source_metadata:
  url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server
  title: "Mainframe Assessment Tool MCP server \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Assessment Tool
Guides
Send feedback
Mainframe Assessment Tool MCP server
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes how to set up and interact with Mainframe Assessment Tool assessments by
using MCP clients such as Gemini CLI or AI agents
through the Model Context Protocol (MCP). You can use
natural language prompts to get insights into your mainframe
assessments. With the MCP server, you can use AI agents to perform discovery and analysis
operations on your Mainframe Assessment Tool assessments. For example, you can do
the following:
List and view existing assessments.
Explore business domains discovered in your assessments.
Search and filter assets based on different criteria.
Retrieve asset specifications, including dependencies and complexity metrics.
For more information on MCP, see
What is the Model Context Protocol (MCP)? .
Before you begin
Make sure that you are familiar with Mainframe Assessment Tool, and that you have
already used it to run an assessment.
Enable the MCP server
To enable the MCP server on your Mainframe Assessment Tool VM instance, add
the MAT_ENABLE_MCP metadata key and set its value to true by running the
following gcloud command:
gcloud compute instances add-metadata INSTANCE_NAME \
--metadata=MAT_ENABLE_MCP=true \
--zone= ZONE
Replace the following:
INSTANCE_NAME : the name of your VM instance.
ZONE : the zone where your VM instance is located.
If you set the metadata key on a running VM, you must restart the VM for the
changes to take effect.
Connect to the MCP server
You can connect to the MCP server using standard AI agents that supports MCP connections over Streamable HTTP.
The MCP server is located under the /mcp/ route of the same port used to access the Mainframe Assessment Tool UI, see Access Mainframe Assessment Tool VM from your computer .
Configuration examples
The following sections provide examples of how to configure different AI agents to connect to the MCP server.
Replace LOCAL_PORT : with the local port used for accessing the Mainframe Assessment Tool UI.
Gemini CLI
To use Gemini CLI , configure the MCP server in the
Gemini CLI settings file as follows:
{
"mcpServers" : {
"mainframe-assessment-tool" : {
"httpUrl" : "http://localhost: LOCAL_PORT /mcp/"
}
}
}
For more information, see Configure the MCP server in settings.json .
Antigravity IDE
To use Antigravity IDE ,
configure custom MCP server in mcp_config.json as follows:
{
"mcpServers" : {
"mainframe-assessment-tool" : {
"serverUrl" : "http://localhost: LOCAL_PORT /mcp/"
}
}
}
MCP server tools
The Mainframe Assessment Tool MCP server provides tools that enable AI agents to
retrieve data from your assessments.
ListAssessments
Lists all the assessments that exist on the Mainframe Assessment Tool instance. Each assessment includes its name, ID, description,
and timestamps.
ListDomains
Lists the domains for a given Mainframe Assessment Tool assessment ID. Each domain
includes its name, description, and ID.
Arguments
Name
Type
Required
Description
AssessmentId
string
Yes
The ID of the Mainframe Assessment Tool assessment.
ListAssets
Lists the assets for a given Mainframe Assessment Tool assessment ID. Each asset
includes its ID, name, path, type, and assigned domain IDs.
Arguments
Name
Type
Required
Description
AssessmentId
string
Yes
The ID of the Mainframe Assessment Tool assessment.
FetchDomain
Fetches the domain details for a given domain ID and Mainframe Assessment Tool
assessment ID. Domain details include ID, name, description, and summary.
Arguments
Name
Type
Required
Description
AssessmentId
string
Yes
The ID of the Mainframe Assessment Tool assessment.
DomainId
string
Yes
The ID of the Mainframe Assessment Tool domain.
FetchAsset
Fetches the specification summary for an asset for a given Mainframe Assessment Tool
assessment ID. The asset specification includes its ID, name, usage,
description, ETL graph, and BMS maps.
Arguments
Name
Type
Required
Description
AssessmentId
string
Yes
The ID of the Mainframe Assessment Tool assessment.
AssetId
string
Yes
The ID of the Mainframe Assessment Tool asset.
DetailedSpec
boolean
No (default: false )
If is set to true, the response also includes method specifications with their test cases.
FetchAssetsCyclomaticComplexity
Fetches the cyclomatic complexity scores for a list of assets for a given
Mainframe Assessment Tool assessment ID.
Arguments
Name
Type
Required
Description
AssessmentId
string
Yes
The ID of the Mainframe Assessment Tool assessment.
AssetIds
string[]
Yes
List of Mainframe Assessment Tool assets IDs.
Usage Examples
The following are examples of natural language prompts that an AI agent can
answer by using the MCP server tools to retrieve and process assessment data:
Scenario: Find complex programs in an assessment.
User prompt: "List the 10 most complex COBOL programs in the assessment called AssessmentName ."
Scenario: Find and filter assets that belong to a business domain.
User prompt: "List all the JCL jobs related to the DomainName domain under the assessment called AssessmentName ."
Scenario: Get asset dependencies from an assessment.
User prompt: "What are the dependencies of the JCL job JCLJobName in the assessment called AssessmentName ?"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
