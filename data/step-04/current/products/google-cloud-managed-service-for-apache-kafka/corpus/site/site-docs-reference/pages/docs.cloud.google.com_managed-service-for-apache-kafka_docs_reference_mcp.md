---
title: "MCP Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\
  \ Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp
  title: "MCP Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\
    \ Kafka \_|\_ Google Cloud Documentation"
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
MCP Reference: managedkafka
Stay organized with collections
Save and categorize content based on your preferences.
A Model Context Protocol (MCP) server acts as a proxy between an external service that provides context, data, or capabilities to a Large Language Model (LLM) or AI application. MCP servers connect AI applications to external systems such as databases and web services, translating their responses into a format that the AI application can understand.
Server Setup
You must enable MCP servers and set up authentication before use. For more information about using Google and Google Cloud remote MCP servers, see Google Cloud MCP servers overview .
Google Cloud Managed service for Apache Kafka allows agents to provision and view Kafka resources. Managed Service for Apache Kafka is also known as Managed Kafka.
Server Endpoints
An MCP service endpoint is the network address and communication interface (usually a URL) of the MCP server that an AI application (the Host for the MCP client) uses to establish a secure, standardized connection. It is the point of contact for the LLM to request context, call a tool, or access a resource. Google MCP endpoints can be global or regional.
The managedkafka MCP server has the following MCP endpoint:
https://managedkafka.googleapis.com/mcp
MCP Tools
An MCP tool is a function or executable capability that an MCP server exposes to a LLM or AI application to perform an action in the real world.
The managedkafka MCP server has the following tools:
MCP Tools
create_cluster
Create a new cluster for Google Cloud Managed service for Apache Kafka. To create a cluster, the following parameters must be provided:
Project ID: The ID of the Google Cloud project (e.g., my-project ).
Location: The Google Cloud region for the cluster (e.g., us-central1 ).
Cluster ID: A unique identifier for your cluster (e.g., my-kafka-cluster ).
vCPU Count: The number of vCPUs to provision for the cluster (minimum 3). Please note that the vCPU count must be a string.
Memory Bytes: The memory to provision for the cluster in bytes (minimum 3 GiB, and the CPU:memory ratio must be between 1:1 and 1:8).
Subnet: The VPC subnet for Private Service Connect (PSC) endpoints. This must be a full resource path in the format projects/{project}/regions/{region}/subnetworks/{subnet_id} . The subnet's region must match the cluster's location, but the project can be different. Please provide the user with the option to select the default subnet, which has the format projects/{project}/regions/{region}/subnetworks/default , where the project and region are the same as the cluster.
Other parameters, like the TLS config, can also be set. The agent should also support these parameters.
This tool returns a long-running operation (LRO) that you can poll using the get_operation tool to track the cluster creation status. Cluster creation can take 30 minutes or longer.
Important Notes:
The CreateCluster request must include both capacity_config and gcp_config parameters.
Do not create the cluster without getting all of the required parameters from the user.
update_cluster
Update an existing Google Cloud Managed service for Apache Kafka cluster. To update a cluster, please provide the Project ID, Location, and Cluster ID.
The following common parameters can be updated:
vCPU Count: The number of vCPUs to provision for the cluster (minimum 3). Please note that the vCPU count must be a string.
Memory Bytes: The memory to provision for the cluster in bytes (minimum 3 GiB, and the CPU:memory ratio must be between 1:1 and 1:8).
Rebalance Mode: The rebalancing behavior for the cluster. The options are NO_REBALANCE and AUTO_REBALANCE_ON_SCALE_UP .
Labels: Key-value pairs to help you organize your clusters.
Update Options: Options that influence how a cluster update is applied, such as allowBrokerDownscaleOnClusterUpscale .
Other parameters, like the TLS config, can also be set. The agent should also support these parameters.
This tool returns a long-running operation (LRO) that you can poll using the get_operation tool to track the cluster update status. Cluster updates can take 20 minutes or longer.
Important Notes:
CRITICAL : When calling update_cluster, the cluster object in your request MUST contain the cluster's full name, capacityConfig, and gcpConfig, even if you are not updating fields within them. The API requires these objects for validation on every update call. You should first get_cluster to retrieve these values before attempting an update.
The UpdateCluster request requires the following parameters:
update_mask : A field mask used to specify the fields to be overwritten. For example, to update the cluster's memory and rebalance config, the mask would be "capacity_config.memory_bytes,rebalance_config.mode" . A value of * will overwrite all fields.
cluster : The cluster configuration, including the required capacity_config and gcp_config .
cluster.name : The name of the cluster to be updated in the format projects/{project}/locations/{location}/clusters/{cluster} .
Do not update the cluster without getting all of the required parameters from the user.
delete_cluster
Deletes a Google Cloud Managed Service for Apache Kafka cluster. Please provide the Project ID, Location, and Cluster ID.
A DeleteClusterRequest is used to delete a cluster.
name (required): The name of the cluster to delete. Structured like projects/{project}/locations/{location}/clusters/{cluster} .
This tool returns a long-running operation (LRO) that you can poll using the get_operation tool to track the cluster deletion status. Cluster deletions can take 10 minutes or longer.
get_cluster
Get the details of an existing Google Cloud Managed Service for Apache Kafka cluster. Please provide the Project ID, Location, and Cluster ID.
list_clusters
Lists all clusters for Google Cloud Managed service for Apache Kafka in a given project and location. Please provide the Project ID and Location.
get_operation
Get the status of a long-running operation (LRO).
Usage
Some tools ( create_cluster and update_cluster ) return a long-running operation. You can use this tool to get the status of the operation.
Parameters
name : The name of the operation to get. It corresponds to the name field in the long-running operation. It should be in the format of projects/{project}/locations/{location}/operations/{operation} .
Returns
An Operation object that contains the status of the operation.
If the operation is not complete, the response will be empty.
If the operation is complete, the response will contain either:
A response field that contains the result of the operation and indicates that it was successful.
A error field that indicates any errors that occurred during the operation.
create_topic
Create a new Google Cloud Managed Service for Apache Kafka topic. Please provide the Project ID, Location, Cluster ID, and a unique Topic ID.
You must also specify:
Partition Count: The number of partitions for the topic (default of 3). This can only be increased.
Replication Factor: The number of replicas for each partition. A replication factor of 3 is recommended for high availability.
update_topic
Update an existing Google Cloud Managed service for Apache Kafka topic. Please provide the Project ID, Location, Cluster ID, and Topic ID.
You can update the following fields:
Partition Count: The number of partitions for the topic (default of 3). This can only be increased.
Replication Factor: The number of replicas for each partition. A replication factor of 3 is recommended for high availability.
Important Notes:
The UpdateTopic request requires the following parameters:
update_mask : A field mask used to specify the fields to be overwritten. For example, to update the partition_count and replication_factor , the mask would be "partition_count,replication_factor" . A value of * will overwrite all fields.
topic : The topic configuration, including the required partition_count and replication_factor .
topic.name : The name of the topic to be updated in the format projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} .
delete_topic
Deletes a Google Cloud Managed Service for Apache Kafka topic. Please provide the Project ID, Location, Cluster ID, and Topic ID.
A DeleteTopicRequest is used to delete a topic.
name (required): The name of the topic to delete. Structured like projects/{project}/locations/{location}/clusters/{cluster}/topics/{topic} .
get_topic
Get the details of an existing Google Cloud Managed Service for Apache Kafka topic. Please provide the Project ID, Location, Cluster ID, and Topic ID.
list_topics
List all topics for Google Cloud Managed Service for Apache Kafka for a given project, location, and cluster. Please provide the Project ID, Location, and Cluster ID.
update_consumer_group
Update an existing Google Cloud Managed Service for Apache Kafka consumer group. To update a consumer group, please provide the Project ID, Location, Cluster ID, and Consumer Group ID.
Important Notes:
To update a consumer group's offsets, the consumer group must be inactive (i.e., there are no active consumers in the group).
Before making an update, the agent should call get_consumer_group to retrieve the current consumer group configuration, so that it can be included in the UpdateConsumerGroupRequest .
The UpdateConsumerGroup request requires the following parameters:
update_mask : The only supported update_mask is "topics", which will be used to completely overwrite the consumer group's topics field. Make this clear to the user if they are trying to update any offsets.
consumer_group : The consumer group configuration. The consumer_group.name field is required.
consumer_group.name : The name of the consumer group to be updated in the format projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup} .
delete_consumer_group
Deletes a Google Cloud Managed Service for Apache Kafka consumer group. Please provide the Project ID, Location, Cluster ID, and Consumer Group ID.
A DeleteConsumerGroupRequest is used to delete a consumer group.
name (required): The name of the consumer group to delete. Structured like projects/{project}/locations/{location}/clusters/{cluster}/consumerGroups/{consumerGroup} .
get_consumer_group
Get the details of an existing Google Cloud Managed Service for Apache Kafka consumer group. Please provide the Project ID, Location, Cluster ID, and Consumer Group ID.
list_consumer_groups
List all consumer groups for Google Cloud Managed Service for Apache Kafka for a given project, location, and cluster. Please provide the Project ID, Location, and Cluster ID.
create_acl
Create a new Google Cloud Managed Service for Apache Kafka ACL. Please provide the Project ID, Location, Cluster ID, and ACL ID.
A CreateAclRequest is used to create a new ACL.
parent (required): The parent cluster in which to create the ACL. Structured like projects/{project}/locations/{location}/clusters/{cluster} .
acl_id (required): The ID to use for the ACL, which will become the final component of the ACL's name. The structure of acl_id defines the Resource Pattern ( resource_type , resource_name , pattern_type ) of the ACL. acl_id is structured like one of the following:
For ACLs on the cluster: cluster
For ACLs on a single resource within the cluster: topic/{resource_name} , consumerGroup/{resource_name} , or transactionalId/{resource_name}
For ACLs on all resources that match a prefix: topicPrefixed/{resource_name} , consumerGroupPrefixed/{resource_name} , or transactionalIdPrefixed/{resource_name}
For ACLs on all resources of a given type (i.e. the wildcard literal "*"): allTopics (represents topic/* ), allConsumerGroups (represents consumerGroup/* ), or allTransactionalIds (represents transactionalId/* )
acl (required): The ACL configuration. Its name field is ignored.
acl_entries (required): The list of ACL entries that apply to the resource pattern. The maximum number of allowed entries is 100. Cannot be empty. Allow the user to specify one or more ACL entries. Each ACL entry contains the following fields:
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
update_acl
Update an existing Google Cloud Managed Service for Apache Kafka ACL. Please provide the Project ID, Location, Cluster ID, and ACL ID.
An UpdateAclRequest is used to update an existing ACL.
acl : The ACL configuration.
name (required): The name of the ACL to be updated in the format projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} . The structure of acl_id defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. acl_id is structured like one of the following:
For ACLs on the cluster: cluster
For ACLs on a single resource within the cluster: topic/{resource_name} , consumerGroup/{resource_name} , or transactionalId/{resource_name}
For ACLs on all resources that match a prefix: topicPrefixed/{resource_name} , consumerGroupPrefixed/{resource_name} , or transactionalIdPrefixed/{resource_name}
For ACLs on all resources of a given type (i.e. the wildcard literal "*"): allTopics (represents topic/* ), allConsumerGroups (represents consumerGroup/* ), or allTransactionalIds (represents transactionalId/* )
acl_entries (required): The list of ACL entries that apply to the resource pattern. The maximum number of allowed entries is 100. Cannot be empty; to remove all ACL entries, use delete_acl . Each ACL entry contains the following fields:
principal (required): The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com" . Can be the wildcard "User:*" to refer to all users.
permission_type (required): The permission type. Accepted values are (case insensitive): ALLOW, DENY.
operation (required): The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE.
host (required): The host. Must be set to "*" for Managed Service for Apache Kafka.
etag (required): The etag returned from GetAcl or CreateAcl . Used for concurrency control.
Callers are required to put that etag in the request to UpdateAcl to ensure that their change will be applied to the same version of the acl that exists in the Kafka Cluster.
A terminal 'T' character in the etag indicates that the AclEntries were truncated; more entries for the Acl exist on the Kafka Cluster, but can't be returned in the Acl due to repeated field limits.
update_mask : A field mask used to specify the fields to be overwritten. For example, to update acl_entries , use mask "acl_entries" . A value of * can be used to update all fields.
Important Notes:
The AI agent should use the get_acl tool to retrieve the details of the existing ACL, so that the etag can be put in the UpdateAclRequest and the required fields in each acl_entry ( principal , permission_type , operation , and host ) can be filled in the UpdateAclRequest .
Certain resource types only allow certain operations.
For the cluster resource type, only CREATE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, IDEMPOTENT_WRITE, ALTER, DESCRIBE, and ALL are allowed.
For the topic resource type, only READ, WRITE, CREATE, DESCRIBE, DELETE, ALTER, DESCRIBE_CONFIGS, ALTER_CONFIGS, and ALL are allowed.
For the consumerGroup resource type, only READ, DESCRIBE, DELETE, and ALL are allowed.
For the transactionalId resource type only DESCRIBE, WRITE, and ALL are allowed.
delete_acl
Deletes a Google Cloud Managed Service for Apache Kafka ACL. Please provide the Project ID, Location, Cluster ID, and ACL ID.
A DeleteAclRequest is used to delete an ACL.
name (required): The name of the ACL to delete. Structured like projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} . The structure of acl_id defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. acl_id is structured like one of the following:
For ACLs on the cluster: cluster
For ACLs on a single resource within the cluster: topic/{resource_name} , consumerGroup/{resource_name} , or transactionalId/{resource_name}
For ACLs on all resources that match a prefix: topicPrefixed/{resource_name} , consumerGroupPrefixed/{resource_name} , or transactionalIdPrefixed/{resource_name}
For ACLs on all resources of a given type (i.e. the wildcard literal "*"): allTopics (represents topic/* ), allConsumerGroups (represents consumerGroup/* ), or allTransactionalIds (represents transactionalId/* )
get_acl
Get the details of an existing Google Cloud Managed Service for Apache Kafka ACL. Please provide the Project ID, Location, Cluster ID, and ACL ID.
list_acls
List all ACLs for Google Cloud Managed Service for Apache Kafka for a given project, location, and cluster. Please provide the Project ID, Location, and Cluster ID.
add_acl_entry
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
remove_acl_entry
Removes an ACL entry from an existing Google Cloud Managed service for Apache Kafka ACL. If the removed entry was the last one in the ACL, the ACL will be deleted. Please provide the Project ID, Location, Cluster ID, and ACL ID.
A RemoveAclEntryRequest is used to remove an ACL entry.
acl (required): The name of the ACL to remove the ACL entry from. Structured like projects/{project}/locations/{location}/clusters/{cluster}/acls/{acl_id} . The structure of acl_id defines the Resource Pattern (resource_type, resource_name, pattern_type) of the ACL. acl_id is structured like one of the following:
For ACLs on the cluster: cluster
For ACLs on a single resource within the cluster: topic/{resource_name} , consumerGroup/{resource_name} , or transactionalId/{resource_name}
For ACLs on all resources that match a prefix: topicPrefixed/{resource_name} , consumerGroupPrefixed/{resource_name} , or transactionalIdPrefixed/{resource_name}
For ACLs on all resources of a given type (i.e. the wildcard literal "*"): allTopics (represents topic/* ), allConsumerGroups (represents consumerGroup/* ), or allTransactionalIds (represents transactionalId/* )
acl_entry (required): The ACL entry to remove. Each ACL entry contains the following fields:
principal (required): The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com" . Can be the wildcard "User:*" to refer to all users.
permission_type (required): The permission type. Accepted values are (case insensitive): ALLOW, DENY.
operation (required): The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE.
host (required): The host. Must be set to "*" for Managed Service for Apache Kafka.
Important Notes:
The AI agent should use the get_acl tool to retrieve the details of the acl_entry to be removed, so that the required fields ( principal , permission_type , operation , and host ) can be filled in the RemoveAclEntryRequest .
create_connect_cluster
Create a new Google Cloud Managed Service for Apache Kafka Connect cluster. To create a Connect cluster, the following parameters are required:
Project ID: The ID of the Google Cloud project (e.g., my-project ).
Location: The Google Cloud region for the Connect cluster (e.g., us-central1 ).
Connect Cluster ID: A unique identifier for your Connect cluster (e.g., my-connect-cluster ). The ID must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? .
You must also specify the connect_cluster configuration, including:
kafka_cluster (required): The full resource name of the Managed Service for Kafka cluster this Connect cluster will attach to. This field is immutable after creation. Format: projects/{project}/locations/{location}/clusters/{cluster} .
capacity_config (required):
vCPU Count: The number of vCPUs to provision for the Connect cluster workers (minimum 3). Please note that the vCPU count must be a string.
Memory Bytes: The memory to provision for the Connect cluster workers in bytes (minimum 3 GiB, and the CPU:memory ratio must be between 1:1 and 1:8).
gcp_config (required): Platform-specific configurations for Google Cloud.
access_config (required): Network access configuration.
network_configs (required): A list of VPC networks. Minimum 1, maximum 10.
primary_subnet (required): The VPC subnet for the Kafka Connect workers. This must be a full resource path in the format projects/{project}/regions/{region}/subnetworks/{subnet_id} . The subnet must be in the same region as the Connect cluster. The CIDR range must be within RFC 1918 and have a minimum size of /22.
dns_domain_names (optional): Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster.
secret_paths (optional): A list of Secret Manager SecretVersion resource names to load into workers. Up to 32 secrets are allowed. Format: projects/<project-id>/secrets/<secret-name>/versions/<version-id> .
config (optional): Key-value pairs for Kafka Connect worker configuration overrides.
labels (optional): Key-value pairs to help you organize your Connect clusters.
This tool returns a long-running operation (LRO) that you can poll using the get_operation tool to track the Connect cluster creation status. Connect cluster creation can take 20 minutes or longer.
Important Notes:
The CreateConnectClusterRequest must include kafka_cluster , capacity_config , and gcp_config parameters.
Do not create the connect cluster without getting all of the required parameters first.
update_connect_cluster
Update an existing Google Cloud Managed service for Apache Kafka Connect cluster. To update a Connect cluster, please provide the Project ID, Location, and Connect Cluster ID.
The following parameters can be updated:
vCPU Count: The number of vCPUs to provision for the Connect cluster workers. This is part of capacity_config.vcpu_count . Please note that the vCPU count must be a string.
Memory Bytes: The memory to provision for the Connect cluster workers in bytes. This is part of capacity_config.memory_bytes .
DNS Domain Names: Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. This is part of gcp_config.access_config.network_configs.dns_domain_names .
Secret Paths: A list of Secret Manager SecretVersion resource names to load into workers. This is part of gcp_config.secret_paths .
Config: Key-value pairs for Kafka Connect worker configuration overrides. This is the config field.
Labels: Key-value pairs to help you organize your Connect clusters. This is the labels field.
This tool returns a long-running operation (LRO) that you can poll using the get_operation tool to track the Connect cluster update status. Connect cluster updates can take 20 minutes or longer.
Important Notes:
The UpdateConnectClusterRequest requires the following parameters:
update_mask : A field mask used to specify the fields to be overwritten. For example, to update the vCPU count and labels, the mask would be "capacity_config.vcpu_count,labels" . A value of * will overwrite all fields.
connect_cluster : The Connect cluster configuration. This includes the required capacity_config and gcp_config parameters. If this information is not provided as part of the udpate, please use the get_connect_cluster tool to retrieve it.
connect_cluster.name : The name of the Connect cluster to be updated in the format projects/{project}/locations/{location}/connectClusters/{connect_cluster_id} .
The kafka_cluster and gcp_config.access_config.network_configs.primary_subnet fields are immutable and cannot be updated after creation.
delete_connect_cluster
Deletes a Google Cloud Managed service for Apache Kafka Connect cluster. Please provide the Project ID, Location, and Connect Cluster ID.
A DeleteConnectClusterRequest is used to delete a Connect cluster.
name (required): The name of the Connect cluster to delete. Structured like projects/{project}/locations/{location}/connectClusters/{connect_cluster_id} .
This tool returns a long-running operation (LRO) that you can poll using the get_operation tool to track the Connect cluster deletion status. Connect cluster deletions can take 10 minutes or longer.
get_connect_cluster
Get the details of an existing Google Cloud Managed service for Apache Kafka Connect cluster. Please provide the Project ID, Location, and Connect Cluster ID.
list_connect_clusters
List all Connect clusters for Google Cloud Managed Service for Apache Kafka Connect for a given project and location. Please provide the Project ID and Location.
create_connector
Create a new Google Cloud Managed service for Apache Kafka Connect connector. To create a connector, you'll need to provide the following required information:
Project ID: The ID of the Google Cloud project (e.g., my-project ).
Location: The Google Cloud region for the Connect cluster (e.g., us-central1 ).
Connect Cluster ID: The ID of the Connect cluster (e.g., my-connect-cluster ).
Connector ID: A unique identifier for your connector (e.g., my-connector ). The ID must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? .
You must also specify the connector configuration. The user should first be prompted on which connector type they want to create, and then provide the necessary properties for that connector type. Only use the example configuration for reference. The following connector types are supported:
configs (required): Key-value pairs for connector properties. The available connector types are:
MirrorMaker 2.0 Source connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorSourceConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
topics (required): "TOPIC_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
offset-syncs.topic.replication.factor : "1"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Source connector.
TOPIC_NAME : The name of the Kafka topic(s) to mirror.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
MirrorMaker 2.0 Checkpoint connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorCheckpointConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
consumer-groups (required): "CONSUMER_GROUP_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Source connector.
CONSUMER_GROUP_NAME : The name of the consumer group to use for the checkpoint connector.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
MirrorMaker 2.0 Heartbeat connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorHeartbeatConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
consumer-groups (required): "CONSUMER_GROUP_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Heartbeat connector.
CONSUMER_GROUP_NAME : The name of the consumer group to use for the heartbeat connector.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
BigQuery Sink connector
Example Configuration:
name : "BQ_SINK_CONNECTOR_ID"
project (required): "GCP_PROJECT_ID"
topics : "TOPIC_ID"
tasks.max : "3"
connector.class (required): "com.wepay.kafka.connect.bigquery.BigQuerySinkConnector"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
value.converter : "org.apache.kafka.connect.json.JsonConverter"
value.converter.schemas.enable : "false"
defaultDataset ( required ): "BQ_DATASET_ID"
Replace with these:
BQ_SINK_CONNECTOR_ID : The ID or name of the BigQuery Sink connector. The name of a connector is immutable.
GCP_PROJECT_ID : The ID of the Google Cloud project where your BigQuery dataset resides.
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the BigQuery Sink connector.
BQ_DATASET_ID : The ID of the BigQuery dataset that acts as the sink for the pipeline.
Cloud Storage Sink connector
Example Configuration:
name : "GCS_SINK_CONNECTOR_ID"
connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector"
tasks.max : "1"
topics (required): "TOPIC_ID"
gcs.bucket.name (required): "GCS_BUCKET_NAME"
gcs.credentials.default : "true"
format.output.type : "json"
value.converter : "org.apache.kafka.connect.json.JsonConverter"
value.converter.schemas.enable : "false"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
Replace with these:
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
GCS_BUCKET_NAME : The name of the Cloud Storage bucket that acts as a sink for the pipeline.
GCS_SINK_CONNECTOR_ID : The ID or name of the Cloud Storage Sink connector. The name of a connector is immutable.
Pub/Sub Source connector
Example Configuration:
connector.class (required): "com.google.pubsub.kafka.source.CloudPubSubSourceConnector"
cps.project (required): "PROJECT_ID"
cps.subscription (required): "PUBSUB_SUBSCRIPTION_ID"
kafka.topic (required): "KAFKA_TOPIC_ID"
value.converter : "org.apache.kafka.connect.converters.ByteArrayConverter"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
tasks.max : "3"
Replace with these:
PROJECT_ID : The ID of the Google Cloud project where the Pub/Sub subscription resides.
PUBSUB_SUBSCRIPTION_ID : The ID of the Pub/Sub subscription to pull data from.
KAFKA_TOPIC_ID : The ID of the Kafka topic where data is written.
Pub/Sub Sink connector
Example Configuration:
connector.class : "com.google.pubsub.kafka.sink.CloudPubSubSinkConnector"
name : "CPS_SINK_CONNECTOR_ID"
tasks.max : "1"
topics : "TOPIC_ID"
value.converter : "org.apache.kafka.connect.storage.StringConverter"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
cps.topic : "CPS_TOPIC_ID"
cps.project : "GCP_PROJECT_ID"
Replace with these:
CPS_SINK_CONNECTOR_ID : The ID or name of the Pub/Sub Sink connector. The name of a connector is immutable.
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which data is read by the Pub/Sub Sink connector.
CPS_TOPIC_ID : The ID of the Pub/Sub topic to which data is published.
GCP_PROJECT_ID : The ID of the Google Cloud project where your Pub/Sub topic resides.
task_restart_policy (optional): A policy that specifies how to restart failed connector tasks. If not set, failed tasks won't be restarted.
minimum_backoff (optional): The minimum amount of time to wait before retrying a failed task (e.g., "60s"). Defaults to 60 seconds.
maximum_backoff (optional): The maximum amount of time to wait before retrying a failed task (e.g., "43200s" for 12 hours). Defaults to 12 hours.
task_retry_disabled (optional): If true, task retry is disabled.
Important Notes:
The CreateConnectorRequest requires the following parameters:
parent : The parent Connect cluster in which to create the connector. Structured like projects/{project}/locations/{location}/connectClusters/{connect_cluster_id} .
connector_id : The ID to use for the connector.
connector : The connector configuration. Its name field is ignored.
The configs field should be formatted as a JSON object, for example: "configs":{"name":"my-connector","tasks.max":"1","gcs.bucket.name",...} . Do not add unnecessary quotes around the keys or values.
update_connector
Update an existing Google Cloud Managed Service for Apache Kafka Connect connector. To update a connector, please provide the Project ID, Location, Connect Cluster ID, and Connector ID.
The following connector fields can be updated. The agent can first use the get_connector method to get the current connector configuration, to provide a baseline configuration for the user to edit. Use the example configurations provided below for reference.
connector.configs: Key-value pairs for connector properties. The following connectors support configuration updates:
MirrorMaker 2.0 Source connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorSourceConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
topics (required): "TOPIC_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
offset-syncs.topic.replication.factor : "1"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Source connector.
TOPIC_NAME : The name of the Kafka topic(s) to mirror.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
MirrorMaker 2.0 Checkpoint connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorCheckpointConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
consumer-groups (required): "CONSUMER_GROUP_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Source connector.
CONSUMER_GROUP_NAME : The name of the consumer group to use for the checkpoint connector.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
MirrorMaker 2.0 Heartbeat connector
Example Configuration:
connector.class (required): "org.apache.kafka.connect.mirror.MirrorHeartbeatConnector"
name : "MM2_CONNECTOR_ID"
source.cluster.alias (required): "source"
target.cluster.alias (required): "target"
consumer-groups (required): "CONSUMER_GROUP_NAME"
source.cluster.bootstrap.servers (required): "SOURCE_CLUSTER_DNS"
target.cluster.bootstrap.servers (required): "TARGET_CLUSTER_DNS"
source.cluster.security.protocol : "SASL_SSL"
source.cluster.sasl.mechanism : "OAUTHBEARER"
source.cluster.sasl.login.callback.handler.class : com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler
source.cluster.sasl.jaas.config : org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;
target.cluster.security.protocol : "SASL_SSL"
target.cluster.sasl.mechanism : "OAUTHBEARER"
target.cluster.sasl.login.callback.handler.class : "com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler"
target.cluster.sasl.jaas.config : "org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required;"
Replace with these:
MM2_CONNECTOR_ID : The ID or name of the MirrorMaker 2.0 Heartbeat connector.
CONSUMER_GROUP_NAME : The name of the consumer group to use for the heartbeat connector.
SOURCE_CLUSTER_DNS : The DNS endpoint for the source Kafka cluster.
TARGET_CLUSTER_DNS : The DNS endpoint for the target Kafka cluster.
BigQuery Sink connector
Example Configuration:
name : "BQ_SINK_CONNECTOR_ID"
project (required): "GCP_PROJECT_ID"
topics : "TOPIC_ID"
tasks.max : "3"
connector.class (required): "com.wepay.kafka.connect.bigquery.BigQuerySinkConnector"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
value.converter : "org.apache.kafka.connect.json.JsonConverter"
value.converter.schemas.enable : "false"
defaultDataset ( required ): "BQ_DATASET_ID"
Replace with these:
BQ_SINK_CONNECTOR_ID : The ID or name of the BigQuery Sink connector. The name of a connector is immutable.
GCP_PROJECT_ID : The ID of the Google Cloud project where your BigQuery dataset resides.
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the BigQuery Sink connector.
BQ_DATASET_ID : The ID of the BigQuery dataset that acts as the sink for the pipeline.
Cloud Storage Sink connector
Example Configuration:
name : "GCS_SINK_CONNECTOR_ID"
connector.class (required): "io.aiven.kafka.connect.gcs.GcsSinkConnector"
tasks.max : "1"
topics (required): "TOPIC_ID"
gcs.bucket.name (required): "GCS_BUCKET_NAME"
gcs.credentials.default : "true"
format.output.type : "json"
value.converter : "org.apache.kafka.connect.json.JsonConverter"
value.converter.schemas.enable : "false"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
Replace with these:
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which the data flows to the Cloud Storage Sink connector.
GCS_BUCKET_NAME : The name of the Cloud Storage bucket that acts as a sink for the pipeline.
GCS_SINK_CONNECTOR_ID : The ID or name of the Cloud Storage Sink connector. The name of a connector is immutable.
Pub/Sub Source connector
Example Configuration:
connector.class (required): "com.google.pubsub.kafka.source.CloudPubSubSourceConnector"
cps.project (required): "PROJECT_ID"
cps.subscription (required): "PUBSUB_SUBSCRIPTION_ID"
kafka.topic (required): "KAFKA_TOPIC_ID"
value.converter : "org.apache.kafka.connect.converters.ByteArrayConverter"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
tasks.max : "3"
Replace with these:
PROJECT_ID : The ID of the Google Cloud project where the Pub/Sub subscription resides.
PUBSUB_SUBSCRIPTION_ID : The ID of the Pub/Sub subscription to pull data from.
KAFKA_TOPIC_ID : The ID of the Kafka topic where data is written.
Pub/Sub Sink connector
Example Configuration:
connector.class : "com.google.pubsub.kafka.sink.CloudPubSubSinkConnector"
name : "CPS_SINK_CONNECTOR_ID"
tasks.max : "1"
topics : "TOPIC_ID"
value.converter : "org.apache.kafka.connect.storage.StringConverter"
key.converter : "org.apache.kafka.connect.storage.StringConverter"
cps.topic : "CPS_TOPIC_ID"
cps.project : "GCP_PROJECT_ID"
Replace with these:
CPS_SINK_CONNECTOR_ID : The ID or name of the Pub/Sub Sink connector. The name of a connector is immutable.
TOPIC_ID : The ID of the Managed Service for Apache Kafka topic from which data is read by the Pub/Sub Sink connector.
CPS_TOPIC_ID : The ID of the Pub/Sub topic to which data is published.
GCP_PROJECT_ID : The ID of the Google Cloud project where your Pub/Sub topic resides.
connector.task_restart_policy: A policy that specifies how to restart failed connector tasks.
Minimum Backoff: The minimum amount of time to wait before retrying a failed task (e.g., "60s").
Maximum Backoff: The maximum amount of time to wait before retrying a failed task (e.g., "43200s" for 12 hours).
Task Retry Disabled: If true, task retry is disabled.
Important Notes:
The UpdateConnectorRequest requires the following parameters:
update_mask : A field mask used to specify the fields to be overwritten. For example, to update configs and task_restart_policy.minimum_backoff , the mask would be "configs,task_restart_policy.minimum_backoff" . A value of * will overwrite all fields.
connector : The connector configuration.
connector.name : The name of the connector to be updated in the format projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}/connectors/{connector_id} .
delete_connector
Deletes a Google Cloud Managed Service for Apache Kafka Connect connector. Please provide the Project ID, Location, Connect Cluster ID, and Connector ID.
A DeleteConnectorRequest is used to delete a connector.
name (required): The name of the connector to delete. Structured like projects/{project}/locations/{location}/connectClusters/{connect_cluster_id}/connectors/{connector_id} .
get_connector
Get the details of an existing Google Cloud Managed Service for Apache Kafka Connect connector. Please provide the Project ID, Location, Connect Cluster ID, and Connector ID.
A GetConnectorRequest is used to retrieve a connector.
name (required): The name of the connector to retrieve. Structured like projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} .
list_connectors
List all connectors for Google Cloud Managed Service for Apache Kafka Connect for a given project, location, and Connect cluster. Please provide the Project ID, Location, and Connect Cluster ID.
A ListConnectorsRequest is used to list connectors.
parent (required): The parent Connect cluster whose connectors are to be listed. Structured like projects/{project}/locations/{location}/connectClusters/{connect_cluster_id} .
page_size (optional): The maximum number of connectors to return. The service may return fewer than this value. If unspecified, the server will pick an appropriate default.
page_token (optional): A page token, received from a previous ListConnectors call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListConnectors must match the call that provided the page token.
pause_connector
Pauses a Google Cloud Managed service for Apache Kafka Connect connector and its tasks. Please provide the Project ID, Location, Connect Cluster ID, and Connector ID.
A PauseConnectorRequest is used to pause a connector.
name (required): The name of the connector to pause. Structured like projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} .
resume_connector
Resumes a Google Cloud Managed service for Apache Kafka Connect connector and its tasks. Please provide the Project ID, Location, Connect Cluster ID, and Connector ID.
A ResumeConnectorRequest is used to resume a connector.
name (required): The name of the connector to resume. Structured like projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} .
restart_connector
Restarts a Google Cloud Managed service for Apache Kafka Connect Connector. Please provide the Project ID, Location, Connect Cluster ID, and Connector ID.
A RestartConnectorRequest is used to restart a connector.
name (required): The name of the connector to restart. Structured like projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} .
stop_connector
Stops a Google Cloud Managed service for Apache Kafka Connect connector. Please provide the Project ID, Location, Connect Cluster ID, and Connector ID.
A StopConnectorRequest is used to stop a connector.
name (required): The name of the connector to stop. Structured like projects/{project}/locations/{location}/connectClusters/{connectCluster}/connectors/{connector} .
Get MCP tool specifications
To get the MCP tool specifications for all tools in an MCP server, use the tools/list method. The following example demonstrates how to use curl to list all tools and their specifications currently available within the MCP server.
Curl Request
curl --location 'https://managedkafka.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/list",
"jsonrpc": "2.0",
"id": 1
}'
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
