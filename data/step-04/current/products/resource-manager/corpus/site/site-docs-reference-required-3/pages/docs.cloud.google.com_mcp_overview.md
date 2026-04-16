---
title: "Google Cloud MCP servers overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/mcp/overview
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/mcp/overview
source_metadata:
  url: https://docs.cloud.google.com/mcp/overview
  title: "Google Cloud MCP servers overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Google Cloud MCP servers
Guides
Send feedback
Google Cloud MCP servers overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Google and Google Cloud services can be used in your AI applications with
enterprise-ready governance, security, and access control through our
remote Model Context Protocol (MCP) servers.
MCP is an open source protocol developed by Anthropic that
standardizes how AI applications connect to data sources.
In addition to offering remote MCP servers, Google Cloud
offers several solutions for publishing your own MCP servers. Users connect to
published MCP servers over HTTP and can authenticate and interact with them
according to the MCP specification. For more information, see
MCP server publishing .
How MCP works
MCP lets an AI application communicate with external services through a
standardized set of components:
MCP server
A program that exposes capabilities of a service, like an API or database, to
AI applications through standardized MCP interfaces.
MCP host
The main AI application that you're using or building—for example,
Claude, VS Code, Gemini CLI, or Cursor IDE.
MCP client
A software component within the MCP host that handles communication between
your AI application and the MCP server.
Local versus remote MCP servers
Local MCP servers typically run on your local machine and use the standard
input and output streams (stdio) for communication between services on the same
device.
Remote MCP servers run on the service's infrastructure and offer an HTTP
endpoint to AI applications for communication between the AI MCP client and the
MCP server.
For more information, see MCP architecture .
Google and Google Cloud remote MCP servers
Google and Google Cloud remote MCP servers have the following features and
benefits:
MCP discovery : Once a server is enabled in your project, AI applications
can discover the server's tools by using the MCP
tools/list method .
Administrative controls : Control MCP use with Identity and Access Management (IAM)
policies.
Toolsets : Select a specific toolset from an MCP server to prevent
overloading your agent's context with too many tools.
Authentication and Authorization : Google and Google Cloud remote MCP
servers are compliant with the
MCP authorization specification . Only agents,
MCP clients, and end-users with established identities can authenticate and
use MCP tools.
Fine-grained authorization policies : Use IAM to control
who can do what on which Google Cloud resources with MCP tools.
Model Armor : Scan prompts and responses to protect against
security risks and enforce your AI security policies.
For a list of Google and Google Cloud remote MCP servers, see
Supported products .
Authentication
To authenticate to Google and Google Cloud MCP servers that require
authentication, use your Google credentials or create an identity for your AI
application. For more information, see
Authenticate to MCP servers .
Control access with Identity and Access Management
Identity and Access Management (IAM) deny policies help you secure Google Cloud MCP
servers. For more information, see
Control MCP use with IAM .
Toolsets
Agents can become slow, confused, and expensive to run when you load too many
tools into context. To help you limit the tools available to your agent,
some Google and Google Cloud MCP servers offer logical groups of MCP tools
called toolsets . Each toolset has its own HTTP endpoint and functions as a
virtual MCP server. You can configure a toolset the same way you configure
an MCP server. For more information about configuring MCP servers, see
Configure MCP in an AI application .
To determine if an MCP server offers toolsets, review the server's MCP reference
documentation linked from our Supported products page.
Model Armor protection
Model Armor helps secure your agentic AI applications by
sanitizing MCP tool calls and responses. This process mitigates risks such as
prompt injection, sensitive data disclosure, and tool poisoning.
To enable Model Armor for MCP endpoints, see
Configure Model Armor protection for Google Cloud MCP servers .
MCP Publishing
If you want to create and publish your own MCP server for other people to use,
then you can use the following MCP publishing options, depending on your
needs:
Apigee
users with an existing API can publish their API as an MCP server.
Developers who want to create their own MCP server can
host it on Cloud Run .
What's next
Explore supported products .
Enable or disable MCP servers .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
