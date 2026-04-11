---
title: "MCP Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/mcp
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/mcp
  title: "MCP Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
MCP Reference: pubsub.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
This is an MCP server that provides Cloud Pub/Sub tools
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The pubsub.googleapis.com MCP server has the following MCP endpoint:
https://pubsub.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The pubsub.googleapis.com MCP server has the following tools:
MCP Tools
create_topic
Create a new Cloud Pub/Sub topic.
Parameters
name : The name for the new topic in the format projects/{project_id}/topics/{name} .
Returns
The created topic configuration.
Important Notes
A topic is a named resource that represents a feed of messages.
A project ID and topic name must be provided.
update_topic
Update an existing Cloud Pub/Sub topic.
Parameters
topic : The topic object containing fields to update. The name field within the topic object must be set to the name of the topic to be updated, and must be in the format projects/{project_id}/topics/{topic_name} .
update_mask : The set of fields to update for the topic.
Returns
The updated topic configuration.
Important Notes
A topic is a named resource that represents a feed of messages.
A project ID and topic name must be provided.
Certain properties of a topic, such as its name, are not modifiable.
delete_topic
Delete an existing Cloud Pub/Sub topic.
Parameters
topic : The name of the topic to delete in the format projects/{project_id}/topics/{topic_name} .
Returns
google.protobuf.Empty if the topic exists.
A NOT_FOUND error if the topic does not exist.
Important Notes
A topic is a named resource that represents a feed of messages.
Existing subscriptions to this topic are not deleted, but their topic field is set to _deleted-topic_ .
A project ID and topic name must be provided.
get_topic
Get the configuration of a Cloud Pub/Sub topic.
Parameters
topic : The name of the topic to retrieve in the format projects/{project_id}/topics/{name} .
Returns
The topic configuration.
Important Notes
A topic is a named resource that represents a feed of messages.
A project ID and topic name must be provided.
list_topics
List all Cloud Pub/Sub topics in a given project.
Parameters
project : The ID of the Google Cloud project to list topics in, in the format projects/{project_id} .
Returns
A list of topics in the specified project.
Important Notes
A topic is a named resource that represents a feed of messages.
A project ID must be provided.
create_subscription
Create a new Cloud Pub/Sub subscription to a given topic.
Parameters
name : The name of the subscription in the format projects/{project_id}/subscriptions/{name} .
topic : The name of the topic to subscribe to in the format projects/{project_id}/topics/{topic_name} .
Returns
The created subscription configuration if successful.
An ALREADY_EXISTS error if the subscription already exists.
A NOT_FOUND error if the corresponding topic doesn't exist.
Important Notes
A subscription is a named resource that represents a stream of messages from a single, specific topic, to be delivered to the subscribing application.
A project ID, topic name, and subscription name must be provided.
update_subscription
Update an existing Cloud Pub/Sub subscription.
Parameters
subscription : The subscription object containing fields to update. The name field must be set to the name of the subscription to be updated, and must be in the format projects/{project_id}/subscriptions/{subscription_name} .
update_mask : The set of fields to update for the subscription.
Returns
The updated subscription configuration.
Important Notes
A subscription is a named resource that represents a stream of messages from a single, specific topic, to be delivered to the subscribing application.
A project ID and subscription name must be provided.
Certain properties of a subscription, such as its topic, are not modifiable.
delete_subscription
Delete an existing Cloud Pub/Sub subscription.
Parameters
subscription : The name of the subscription to delete in the format projects/{project_id}/subscriptions/{name} .
Returns
google.protobuf.Empty if the subscription exists.
A NOT_FOUND error if the subscription does not exist.
Important Notes
A subscription is a named resource that represents a stream of messages from a single, specific topic, to be delivered to the subscribing application.
A project ID and subscription name must be provided.
All messages retained in the subscription are immediately dropped.
Calls to Pull after deletion will return NOT_FOUND .
get_subscription
Get the configuration of a Cloud Pub/Sub subscription.
Parameters
subscription : The name of the subscription to retrieve in the format projects/{project_id}/subscriptions/{name} .
Returns
The subscription configuration.
Important Notes
A subscription is a named resource that represents a stream of messages from a single, specific topic, to be delivered to the subscribing application.
A project ID and subscription name must be provided.
list_subscriptions
List all Cloud Pub/Sub subscriptions in a given project.
Parameters
project : The ID of the Google Cloud project to list subscriptions in, in the format projects/{project_id} .
Returns
A list of subscriptions in the specified project.
Important Notes
A subscription is a named resource that represents a stream of messages from a single, specific topic, to be delivered to the subscribing application.
A project ID must be provided.
create_snapshot
Create a new Cloud Pub/Sub snapshot from a given subscription.
Parameters
name : The name of the snapshot in the format projects/{project_id}/snapshots/{name} .
subscription : The name of the subscription to create the snapshot from, in the format projects/{project_id}/subscriptions/{name} .
Returns
The created snapshot configuration if successful.
An ALREADY_EXISTS error if the snapshot already exists.
A NOT_FOUND error if the requested subscription doesn't exist.
A FAILED_PRECONDITION error if the backlog in the subscription is too old (snapshot would expire in less than 1 hour).
Important Notes
A snapshot is a named resource that captures the acknowledgment state of messages in an existing subscription to allow for managing acknowledgments in bulk.
A project ID, subscription name, and snapshot name must be provided.
Snapshots are used in Seek operations to manage message acknowledgments in bulk.
delete_snapshot
Delete an existing Cloud Pub/Sub snapshot.
Parameters
snapshot : The name of the snapshot to delete in the format projects/{project_id}/snapshots/{name} .
Returns
google.protobuf.Empty if the snapshot exists.
A NOT_FOUND error if the snapshot does not exist.
Important Notes
A snapshot is a named resource that captures the acknowledgment state of messages in an existing subscription to allow for managing acknowledgments in bulk.
A project ID and snapshot name must be provided.
When the snapshot is deleted, all messages retained in the snapshot are immediately dropped.
get_snapshot
Get the configuration of a Cloud Pub/Sub snapshot.
Parameters
snapshot : The name of the snapshot to retrieve in the format projects/{project_id}/snapshots/{name} .
Returns
The snapshot configuration.
Important Notes
A snapshot is a named resource that captures the acknowledgment state of messages in an existing subscription to allow for managing acknowledgments in bulk.
A project ID and snapshot name must be provided.
list_snapshots
List all Cloud Pub/Sub snapshots in a given project.
Parameters
project : The ID of the Google Cloud project to list snapshots in, in the format projects/{project_id} .
Returns
A list of snapshots in the specified project.
Important Notes
A snapshot is a named resource that captures the acknowledgment state of messages in an existing subscription to allow for managing acknowledgments in bulk.
A project ID must be provided.
publish
Publish a series of one or more messages to an existing topic.
Parameters
topic : The name of the topic to publish to in the format projects/{project_id}/topics/{topic_name} .
messages : A list of one or more messages to publish. Each message must be of type bytes . If you are given a string, you must first convert it to bytes.
Returns
A PublishResponse object containing the message IDs of the published messages, if successful.
A NOT_FOUND error if the topic does not exist.
Usage
Ensure that the topic exists by calling get_topic .
If the topic does not exist, return an error.
Create a new byte array to hold the message data.
Populate the byte array with the message data.
Call publish passing the topic name and the byte array.
Important Notes
A project ID, topic name, and message data must be provided.
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://pubsub.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-13 UTC."],[],[]]
