---
title: "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\
  \ Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/add_acl_entry
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/add_acl_entry
  title: "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\
    \ Apache Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Reference
Send feedback
MCP Tools Reference: managedkafka
Stay organized with collections
Save and categorize content based on your preferences.
Tool: add_acl_entry
Adds an ACL entry to an existing Google Cloud Managed Service for Apache Kafka ACL. If the ACL does not exist, it will be created. Please provide the Project ID, Location, Cluster ID, and ACL ID.
An AddAclEntryRequest is used to add an ACL entry.
acl (required): The name of the ACL to add the ACL entry to. Structured like projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} . The structure of acl_id defines the Resource Pattern (resource_type, resource_name, pattern_type) of the ACL. acl_id is structured like one of the following:
For ACLs on the cluster: cluster
For ACLs on a single resource within the cluster: topic/{resource_name} , consumerGroup/{resource_name} , or transactionalId/{resource_name}
For ACLs on all resources that match a prefix: topicPrefixed/{resource_name} , consumerGroupPrefixed/{resource_name} , or transactionalIdPrefixed/{resource_name}
For ACLs on all resources of a given type (i.e. the wildcard literal "*"): allTopics (represents topic/* ), allConsumerGroups (represents consumerGroup/* ), or allTransactionalIds (represents transactionalId/* )
acl_entry (required): The ACL entry to add. Each ACL entry contains the following fields:
principal (required): The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com" . Can be the wildcard "User:*" to refer to all users.
permission_type (required): The permission type. Accepted values are (case insensitive): ALLOW, DENY.
operation (required): The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE.
host (required): The host. Must be set to "*" for Managed Service for Apache Kafka.
Important Notes:
Certain resource types only allow certain operations.
For the cluster resource type, only CREATE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, IDEMPOTENT_WRITE, ALTER, DESCRIBE, and ALL are allowed.
For the topic resource type, only READ, WRITE, CREATE, DESCRIBE, DELETE, ALTER, DESCRIBE_CONFIGS, ALTER_CONFIGS, and ALL are allowed.
For the consumerGroup resource type, only READ, DESCRIBE, DELETE, and ALL are allowed.
For the transactionalId resource type only DESCRIBE, WRITE, and ALL are allowed.
The following sample demonstrate how to use curl to invoke the add_acl_entry MCP tool.
Curl Request
curl --location 'https://managedkafka.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "add_acl_entry",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for AddAclEntry.
AddAclEntryRequest
JSON representation
{
"acl" : string ,
"aclEntry" : {
object ( AclEntry )
}
}
Fields
acl
string
Required. The name of the acl to add the acl entry to. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} .
The structure of acl_id defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See Acl.name for details.
aclEntry
object ( AclEntry )
Required. The acl entry to add.
AclEntry
JSON representation
{
"principal" : string ,
"permissionType" : string ,
"operation" : string ,
"host" : string
}
Fields
principal
string
Required. The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User: test-kafka-client@test-project.iam.gserviceaccount.com" . Can be the wildcard "User:*" to refer to all users.
permissionType
string
Required. The permission type. Accepted values are (case insensitive): ALLOW, DENY.
operation
string
Required. The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols for valid combinations of resource_type and operation for different Kafka API requests.
host
string
Required. The host. Must be set to "*" for Managed Service for Apache Kafka.
Output Schema
Response for AddAclEntry.
AddAclEntryResponse
JSON representation
{
"acl" : {
object ( Acl )
} ,
"aclCreated" : boolean
}
Fields
acl
object ( Acl )
The updated acl.
aclCreated
boolean
Whether the acl was created as a result of adding the acl entry.
Acl
JSON representation
{
"name" : string ,
"aclEntries" : [
{
object ( AclEntry )
}
] ,
"etag" : string ,
"resourceType" : string ,
"resourceName" : string ,
"patternType" : string
}
Fields
name
string
Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id}
The structure of acl_id defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. acl_id is structured like one of the following:
For acls on the cluster: cluster
For acls on a single resource within the cluster: topic/{resource_name} consumerGroup/{resource_name} transactionalId/{resource_name}
For acls on all resources that match a prefix: topicPrefixed/{resource_name} consumerGroupPrefixed/{resource_name} transactionalIdPrefixed/{resource_name}
For acls on all resources of a given type (i.e. the wildcard literal "*"): allTopics (represents topic/* ) allConsumerGroups (represents consumerGroup/* ) allTransactionalIds (represents transactionalId/* )
aclEntries[]
object ( AclEntry )
Required. The ACL entries that apply to the resource pattern. The maximum number of allowed entries 100.
etag
string
Optional. etag is used for concurrency control. An etag is returned in the response to GetAcl and CreateAcl . Callers are required to put that etag in the request to UpdateAcl to ensure that their change will be applied to the same version of the acl that exists in the Kafka Cluster.
A terminal 'T' character in the etag indicates that the AclEntries were truncated; more entries for the Acl exist on the Kafka Cluster, but can't be returned in the Acl due to repeated field limits.
resourceType
string
Output only. The ACL resource type derived from the name. One of: CLUSTER, TOPIC, GROUP, TRANSACTIONAL_ID.
resourceName
string
Output only. The ACL resource name derived from the name. For cluster resource_type, this is always "kafka-cluster". Can be the wildcard literal "*".
patternType
string
Output only. The ACL pattern type derived from the name. One of: LITERAL, PREFIXED.
AclEntry
JSON representation
{
"principal" : string ,
"permissionType" : string ,
"operation" : string ,
"host" : string
}
Fields
principal
string
Required. The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User: test-kafka-client@test-project.iam.gserviceaccount.com" . Can be the wildcard "User:*" to refer to all users.
permissionType
string
Required. The permission type. Accepted values are (case insensitive): ALLOW, DENY.
operation
string
Required. The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols for valid combinations of resource_type and operation for different Kafka API requests.
host
string
Required. The host. Must be set to "*" for Managed Service for Apache Kafka.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
