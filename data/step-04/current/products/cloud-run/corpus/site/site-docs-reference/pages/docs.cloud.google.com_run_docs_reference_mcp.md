---
title: "MCP Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/mcp
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/mcp
  title: "MCP Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
MCP Reference: run.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
An MCP server which operates on Cloud Run resources.
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The run.googleapis.com MCP server has the following MCP endpoint:
https://run.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The run.googleapis.com MCP server has the following tools:
MCP Tools
get_service
Get info about a Cloud Run service, such as its URI and whether the deploy succeeded.
list_services
List Cloud Run services in a given Google Cloud project and region.
deploy_service_from_image
Deploy a container image from Artifact Registry or Docker Hub as a Cloud Run service.
deploy_service_from_archive
Deploy a Cloud Run service directly from a self-contained source code archive (.tar.gz), skipping the container image build step for faster deployment.
The archive must include all dependencies:
For compiled languages (Go, Java), include pre-compiled binaries.
For scripting languages (Python, Node.js), include pre-installed libraries (e.g., vendor/, node_modules/).
Deployment steps:
Package source code and dependencies into a .tar.gz archive (max 250MiB). It's recommended to create archive from the root of the application's source directory.
Upload the archive to a Google Cloud Storage bucket, preferably in the same region as the service.
Deploy to Cloud Run using this tool, specifying:
source_code: Google Cloud Storage object path to the archive (e.g., gs://bucket/object) .
command: Command to start the application.
base_image_uri: Base image for the container (e.g., us-central1-docker.pkg.dev/serverless-runtimes/google-22-full/runtimes/go124). See https://docs.cloud.google.com/run/docs/configuring/services/runtime-base-images for options. The runtime picked should match the local environment.
args: (Optional) Arguments for the command.
env: (Optional) Environment variables (e.g., name: PYTHONPATH , value: ./vendor ).
ports: (Optional) Container ports to expose (defaults to 8080).
deploy_service_from_file_contents
Deploys a Cloud Run service directly from local source files. This method is suitable for scripting languages like Python and Node.js, of which the source code can be embedded in the request. This is ideal for quick tests and development feedback loops. You must include all necessary dependencies within the source files because it skips the build step for faster deployment.
Key Requirements:
source_code: Should set to sourceCode.inlinedSource.sources with array of source files, each having filename and content .
Size limit: you are subject to total request size limit of 50MiB.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://run.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
