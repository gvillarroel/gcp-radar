---
title: "MCP Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/mcp
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/mcp
  title: "MCP Reference: datastream \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Reference
Send feedback
MCP Reference: datastream
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
Datastream MCP service
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The datastream MCP server has the following MCP endpoint:
https://datastream.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The datastream MCP server has the following tools:
MCP Tools
get_operation
Gets the status of a long-running operation.
Usage Some tools (for example, run_stream ) return a long-running operation. You can use this tool to get the status of the operation. It can be called repeatedly until the operation is complete.
Parameters
name : The name of the operation to get.
name should be the name returned by the tool that initiated the operation.
name should be in the format of: projects/{project}/locations/{location}/operations/{operation} .
Returns
An Operation object that contains the status of the operation.
If the operation is not complete, the response will be empty. Do not check more than every ten seconds.
If the operation is complete, the response will contain either:
A response field that contains the result of the operation and indicates that it was successful.
An error field that indicates any errors that occurred during the operation.
list_connection_profiles
Lists connection profiles in a given project and location.
For example: { parent: "projects/my-project/locations/us-central1" create_time_after: 2025-10-02T10:15:33Z create_time_before: 2025-10-03T00:00:00Z display_name: bookstore page_size: 100 } will return up to 100 connection profiles in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
list_streams
Lists streams in a given project and location.
For example: { parent: "projects/my-project/locations/us-central1" create_time_after: 2025-10-02T10:15:33Z create_time_before: 2025-10-03T00:00:00Z display_name: bookstore page_size: 100 running: true } will return up to 100 running streams in projects/my-project/locations/us-central1 that were created on or after 2025-10-02T10:15:33 UTC and before 2025-10-03T00:00:00 UTC, and have "bookstore" in their display name.
get_stream
Get details of the stream specified by the provided resource name parameter.
The resource name parameter is in the form: projects/{project name}/locations/{location}/streams/{stream name} , for example: projects/my-project/locations/us-central1/streams/my-streams .
run_stream
Starts an already created stream, specified by the provided resource name parameter.
Parameters
name : The resource name of the stream to start.
name should be in the format of: projects/{project name}/locations/{location}/streams/{stream name} , for example: projects/my-project/locations/us-central1/streams/my-streams .
force : Whether to run the stream without running prior configuration verification. The default is false .
Returns
This tool returns a long-running operation. Use the get_operation tool with the returned operation name to poll its status until it completes. Operation may take several minutes; do not check more often than every ten seconds.
delete_stream
Deletes a stream, specified by the provided resource name parameter.
The resource name parameter is in the form: projects/{project name}/locations/{location}/streams/{stream name} , for example: projects/my-project/locations/us-central1/streams/my-streams .
This tool returns a long-running operation. Use the get_operation tool with the returned operation name to poll its status until it completes. Operation may take several minutes; do not check more often than every ten seconds.
list_stream_objects
Lists stream objects in a given stream.
Parent parameter is in the form projects/{project name}/locations/{location}/streams/{stream name} , for example: projects/my-project/locations/us-central1/streams/my-stream .
Not all the details of the stream objects are returned.
To get the full details of a specific stream object, use the get_stream_object tool.
get_stream_object
Get details of the stream object specified by the provided resource name parameter.
The resource name parameter is in the form: projects/{project name}/locations/{location}/streams/{stream name}/objects/{stream object name} , for example: projects/my-project/locations/us-central1/streams/my-stream/objects/my-stream-object .
lookup_stream_object
Lookup a stream object by its source object identifier. Parameters:
The parent parameter is the name of the stream in the form: projects/{project name}/locations/{location}/streams/{stream name} , for example: projects/my-project/locations/us-central1/streams/my-stream .
The source_object_identifier parameter is the source database object identifier. Different source databases have different identifier formats. Examples:
Oracle, PostgreSQL, SQL Server and Spanner databases the identifier is schema and table .
MySQL databases the identifier is database and table .
list_static_ips
Lists static IP addresses of the provided resource name that need to be allowlisted by the customer when using the static-IP connectivity method. Returns up to 100 IP addresses.
The resource name parameter is in the form projects/{project name}/locations/{location} , for example: projects/my-project/locations/us-central1 .
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://datastream.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
