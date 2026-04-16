---
title: "Extended metadata schemas \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/metadata-schemas
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/metadata-schemas
  title: "Extended metadata schemas \_|\_ App Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Reference
Send feedback
Extended metadata schemas
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
This page provides a catalog of the supported schemas for the extended metadata
property on services and
workloads. Extended metadata adds rich, structured data to App Hub
application components, providing context for governance, operations, and
integration with other systems.
Each schema is identified by a unique key and defines the structure and fields
for a specific type of metadata.
To learn how to visualize this metadata, see
View extended metadata schemas .
apphub.googleapis.com/AgentProperties
This schema is used to describe the properties of an AI agent, letting other
systems find and understand it. It is typically applied to workloads that have a
functional type property of
AGENT . The schema is compatible with the
Agent2Agent (A2A) Agent Card .
Schema definition
The following is the schema for this metadata type in JSON format.
{
"$schema" : "http://json-schema.org/draft-07/schema#" ,
"title" : "apphub.googleapis.com/AgentProperties" ,
"description" : "The schema for apphub.googleapis.com/AgentProperties. Except for framework, the properties are derived from the A2A Agent Card." ,
"type" : "object" ,
"additionalProperties" : false ,
"properties" : {
"displayName" : {
"type" : "string" ,
"description" : "The display name of the agent."
},
"description" : {
"type" : "string" ,
"description" : "The description of the agent."
},
"version" : {
"type" : "string" ,
"description" : "Contains the version of the Agent."
},
"framework" : {
"type" : "string" ,
"description" : "The agent framework used to develop the agent."
},
"agentCardUri" : {
"type" : "string" ,
"description" : "The URI of the agent card for the agent."
},
"skills" : {
"type" : "array" ,
"description" : "A list of skills the agent possesses." ,
"items" : {
"type" : "object" ,
"title" : "Skills" ,
"description" : "Defines a skill for an agent." ,
"additionalProperties" : false ,
"properties" : {
"id" : {
"type" : "string" ,
"description" : "A unique identifier for the agent's skill."
},
"name" : {
"type" : "string" ,
"description" : "A human readable name for the agent's skill."
},
"description" : {
"type" : "string" ,
"description" : "A description of the agent's skill."
},
"tags" : {
"type" : "array" ,
"description" : "A set of keywords describing the skill's capabilities." ,
"items" : {
"type" : "string"
}
},
"examples" : {
"type" : "array" ,
"description" : "Example prompts or scenarios that this skill can handle." ,
"items" : {
"type" : "string"
}
}
}
}
}
}
}
Field descriptions
Field
Type
Description
displayName
string
The display name of the agent.
description
string
The description of the agent.
version
string
The version of the agent.
framework
string
The framework used to develop the agent.
agentCardUri
string
The URI of the agent card for the agent.
skills
array
A list of skills the agent possesses.
skills.id
string
A unique identifier for the agent's skill.
skills.name
string
A human readable name for the agent's skill.
skills.description
string
A description of the agent's skill.
skills.tags
array of string
A set of keywords describing the skill's capabilities.
skills.examples
array of string
Example prompts or scenarios that this skill can handle.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
