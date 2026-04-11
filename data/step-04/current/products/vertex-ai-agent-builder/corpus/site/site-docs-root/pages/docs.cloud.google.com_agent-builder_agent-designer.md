---
title: "Agent Designer overview \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-designer
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/overview
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-designer
  title: "Agent Designer overview \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Agent Designer overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
Agent Designer is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific Terms .
Pre-GA features are available "as is" and might have limited support. For more information, see the
launch stage descriptions .
Additional Terms for Agent Designer in Vertex AI Agent Builder
Relationship to Other Terms. Agent Designer in Vertex AI Agent Builder helps Customers design "AI Agents" as defined in the Service Specific Terms and thus the "Agentic AI Services" Service Specific Terms apply. When using Google Search as Tool in Agent Designer, the section entitled "Grounding with Google Search" in the Service Specific Terms also apply, except that the first reference to 'Gemini Enterprise or Agentspace' in subsection (iii) of the "Agentic AI Services" section is replaced with 'Vertex AI'.
This page provides an overview of how to use Agent Designer in the Google Cloud console.
Agent Designer is a low-code visual designer that lets you design and test
agents in the Google Cloud console. You can experiment with your agent in Agent Designer before transitioning
development to code using Agent Development
Kit .
Set up your environment
Before using Agent Designer, get set up with Google Cloud .
Get the required roles
To get the permissions that
you need to use Agent Designer,
ask your administrator to grant you the
Vertex AI User ( roles/aiplatform.user )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Use Agent Designer
Use the following steps to design and test an agent in Agent Designer:
In the Google Cloud console, go to the Agent Designer page.
Go to Agent Designer
Click Create agent to open the Agent Designer canvas for a new agent.
Design your agent in the Agent Designer canvas. You can switch between the following tabs:
Flow: Create the main agent and subagents by using a visual
representation of your agent's workflow and control logic.
Click an agent to open the Details panel for that agent. You can also click Add a subagent (+) to add subagents.
Configure your main agent and subagents in the Details panel:
Name: Add a name to help identify the agent.
Description: A summary of your agent's purpose.
Instructions: Add instructions to guide your agent.
Model: Select the model to power your agent.
Tools: Click Add tools (+) to add tools that enable the agent to complete tasks. For more information, see Set up and add tools .
Preview: Test the agent's functionality and response as you build
your agent. Chat with your agent to test its capabilities.
Click Get code to see your agent code. Copy and paste the code to a
code editor of your choice. See Agent Development Kit
tutorials to
continue developing and deploying your agent.
Set up and add tools in Agent Designer
You can configure the following tools for your agent:
Google Search: Enables the agent to perform web searches using Google Search. Toggled on by default.
URL context: Enable the model to analyze URLs from prompts sent to the agent. Toggled on by default.
Vertex AI Search Data Store: Click Add (+) to enable your agent to access information that has been indexed in your Vertex AI Search data store.
Project Number: The Google Cloud project number associated with your
Vertex AI Search data store. View your project number .
Location: The
location
of your data store.
Data Store ID: Data store ID of the data to include. View a list of your data stores and IDs .
Collection ID : Collection ID of the data to include. View a list of your data stores and collection IDs . If your data store doesn't have a Collection ID, enter default_collection .
If you don't have an existing data store, see Get started with custom search to create one. Then grant service account access to Vertex AI Search:
In the Google Cloud console, go to the IAM page.
Go to IAM
Click Grant access .
In the New principals field, enter the following service account information:
service- PROJECT_NUMBER @gcp-sa-aiplatform-re.iam.gserviceaccount.com .
Select + Add roles . Search for and select Discovery Engine User . Click Apply and then Save .
MCP Server: Click Add (+) to add MCP tools by connecting to an MCP server.
MCP display name: Enter a name for your MCP server.
Endpoint URL: Enter an endpoint URL for the MCP server.
Authentication: Autofilled as None . Agent Designer only supports
MCP servers that don't require authentication.
All tools in your connected MCP server are made available for your agent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
