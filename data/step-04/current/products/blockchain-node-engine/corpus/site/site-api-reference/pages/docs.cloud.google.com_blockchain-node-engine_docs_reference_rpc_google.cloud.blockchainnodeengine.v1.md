---
title: "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1
  title: "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Blockchain Node Engine
Reference
Send feedback
Package google.cloud.blockchainnodeengine.v1
Stay organized with collections
Save and categorize content based on your preferences.
Index
BlockchainNodeEngine (interface)
BlockchainNode (message)
BlockchainNode.BlockchainType (enum)
BlockchainNode.ConnectionInfo (message)
BlockchainNode.ConnectionInfo.EndpointInfo (message)
BlockchainNode.EthereumDetails (message)
BlockchainNode.EthereumDetails.ConsensusClient (enum)
BlockchainNode.EthereumDetails.EthereumEndpoints (message)
BlockchainNode.EthereumDetails.ExecutionClient (enum)
BlockchainNode.EthereumDetails.GethDetails (message)
BlockchainNode.EthereumDetails.GethDetails.GarbageCollectionMode (enum)
BlockchainNode.EthereumDetails.Network (enum)
BlockchainNode.EthereumDetails.NodeType (enum)
BlockchainNode.EthereumDetails.ValidatorConfig (message)
BlockchainNode.State (enum)
CreateBlockchainNodeRequest (message)
DeleteBlockchainNodeRequest (message)
GetBlockchainNodeRequest (message)
ListBlockchainNodesRequest (message)
ListBlockchainNodesResponse (message)
OperationMetadata (message)
UpdateBlockchainNodeRequest (message)
BlockchainNodeEngine
This service is the control plane API for Blockchain Node Engine, and can be used to create, read, and delete blockchain nodes.
CreateBlockchainNode
rpc CreateBlockchainNode( CreateBlockchainNodeRequest ) returns ( Operation )
Creates a new blockchain node in a given project and location.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
blockchainnodeengine.blockchainNodes.create
For more information, see the IAM documentation .
DeleteBlockchainNode
rpc DeleteBlockchainNode( DeleteBlockchainNodeRequest ) returns ( Operation )
Deletes a single blockchain node.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
blockchainnodeengine.blockchainNodes.delete
For more information, see the IAM documentation .
GetBlockchainNode
rpc GetBlockchainNode( GetBlockchainNodeRequest ) returns ( BlockchainNode )
Gets details of a single blockchain node.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
blockchainnodeengine.blockchainNodes.get
For more information, see the IAM documentation .
ListBlockchainNodes
rpc ListBlockchainNodes( ListBlockchainNodesRequest ) returns ( ListBlockchainNodesResponse )
Lists blockchain nodes in a given project and location.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
blockchainnodeengine.blockchainNodes.list
For more information, see the IAM documentation .
UpdateBlockchainNode
rpc UpdateBlockchainNode( UpdateBlockchainNodeRequest ) returns ( Operation )
Updates the parameters of a single blockchain node.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
blockchainnodeengine.blockchainNodes.update
For more information, see the IAM documentation .
BlockchainNode
A representation of a blockchain node.
Fields
name
string
Output only. The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .
create_time
Timestamp
Output only. The timestamp at which the blockchain node was first created.
update_time
Timestamp
Output only. The timestamp at which the blockchain node was last updated.
labels
map<string, string>
User-provided key-value pairs.
connection_info
ConnectionInfo
Output only. The connection information used to interact with a blockchain node.
state
State
Output only. A status representing the state of the node.
private_service_connect_enabled
bool
Optional. When true, the node is only accessible via Private Service Connect; no public endpoints are exposed. Otherwise, the node is only accessible via public endpoints.
See https://cloud.google.com/vpc/docs/private-service-connect .
Union field blockchain_type_details . Information that is specific to a particular blockchain type. blockchain_type_details can be only one of the following:
ethereum_details
EthereumDetails
Ethereum-specific blockchain node details.
blockchain_type
BlockchainType
Immutable. The blockchain type of the node.
BlockchainType
The blockchain type of the node.
Enums
BLOCKCHAIN_TYPE_UNSPECIFIED
Blockchain type has not been specified, but should be.
ETHEREUM
The blockchain type is Ethereum.
ConnectionInfo
The connection information through which to interact with a blockchain node.
Fields
endpoint_info
EndpointInfo
Output only. The endpoint information through which to interact with a blockchain node.
service_attachment
string
Output only. A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}
EndpointInfo
Contains endpoint information through which to interact with a blockchain node.
Fields
json_rpc_api_endpoint
string
Output only. The assigned URL for the node JSON-RPC API endpoint.
websockets_api_endpoint
string
Output only. The assigned URL for the node WebSockets API endpoint.
EthereumDetails
Ethereum-specific blockchain node details.
Fields
Union field execution_client_details . Options for the execution client. execution_client_details can be only one of the following:
geth_details
GethDetails
Details for the Geth execution client.
network
Network
Immutable. The Ethereum environment being accessed.
node_type
NodeType
Immutable. The type of Ethereum node.
execution_client
ExecutionClient
Immutable. The execution client
consensus_client
ConsensusClient
Immutable. The consensus client.
api_enable_admin
bool
Immutable. Enables JSON-RPC access to functions in the admin namespace. Defaults to false .
api_enable_debug
bool
Immutable. Enables JSON-RPC access to functions in the debug namespace. Defaults to false .
additional_endpoints
EthereumEndpoints
Output only. Ethereum-specific endpoint information.
validator_config
ValidatorConfig
Configuration for validator-related parameters on the beacon client, and for any managed validator client.
ConsensusClient
The consensus client (also referred to as beacon node or CL client) implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.
See What are nodes and clients? for more details.
Enums
CONSENSUS_CLIENT_UNSPECIFIED
Consensus client has not been specified, but should be.
LIGHTHOUSE
Consensus client implementation written in Rust, maintained by Sigma Prime. See Lighthouse - Sigma Prime for details.
ERIGON_EMBEDDED_CONSENSUS_LAYER
Erigon's embedded consensus client embedded in the execution client. Note this option is not currently available when creating new blockchain nodes. See Erigon on GitHub for details.
This item is deprecated!
EthereumEndpoints
Contains endpoint information specific to Ethereum nodes.
Fields
beacon_api_endpoint
string
Output only. The assigned URL for the node's Beacon API endpoint.
beacon_prometheus_metrics_api_endpoint
string
Output only. The assigned URL for the node's Beacon Prometheus metrics endpoint. See Prometheus Metrics for more details.
execution_client_prometheus_metrics_api_endpoint
string
Output only. The assigned URL for the node's execution client's Prometheus metrics endpoint.
ExecutionClient
The execution client (i.e., Execution Engine or EL client) listens to new transactions broadcast in the network, executes them in EVM, and holds the latest state and database of all current Ethereum data.
See What are nodes and clients? for more details.
Enums
EXECUTION_CLIENT_UNSPECIFIED
Execution client has not been specified, but should be.
GETH
Official Go implementation of the Ethereum protocol. See go-ethereum for details.
ERIGON
An implementation of Ethereum (execution client), on the efficiency frontier, written in Go. See Erigon on GitHub for details.
GethDetails
Options for the Geth execution client.
See Command-line Options for more details.
Fields
garbage_collection_mode
GarbageCollectionMode
Immutable. Blockchain garbage collection mode.
GarbageCollectionMode
Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE .
Enums
GARBAGE_COLLECTION_MODE_UNSPECIFIED
The garbage collection has not been specified.
FULL
Configures Geth's garbage collection so that older data not needed for a full node is deleted. This is the default mode when creating a full node.
ARCHIVE
Configures Geth's garbage collection so that old data is never deleted. This is the default mode when creating an archive node. This value can also be chosen when creating a full node in order to create a partial/recent archive node. See Sync modes for more details.
Network
The Ethereum environment being accessed.
See Networks for more details.
Enums
NETWORK_UNSPECIFIED
The network has not been specified, but should be.
MAINNET
The Ethereum Mainnet.
TESTNET_GOERLI_PRATER
The Ethereum Testnet based on Goerli protocol.
TESTNET_SEPOLIA
The Ethereum Testnet based on Sepolia/Bepolia protocol. See https://github.com/eth-clients/sepolia .
TESTNET_HOLESKY
The Ethereum Testnet based on Holesky specification. See https://github.com/eth-clients/holesky .
NodeType
The type of Ethereum node.
See Node Types for more details.
Enums
NODE_TYPE_UNSPECIFIED
Node type has not been specified, but should be.
LIGHT
An Ethereum node that only downloads Ethereum block headers.
FULL
Keeps a complete copy of the blockchain data, and contributes to the network by receiving, validating, and forwarding transactions.
ARCHIVE
Holds the same data as full node as well as all of the blockchain's history state data dating back to the Genesis Block.
ValidatorConfig
Configuration for validator-related parameters on the beacon client, and for any managed validator client.
Fields
mev_relay_urls[]
string
URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.
State
All possible states for a given blockchain node.
Enums
STATE_UNSPECIFIED
The state has not been specified.
CREATING
The node has been requested and is in the process of being created.
DELETING
The existing node is undergoing deletion, but is not yet finished.
RUNNING
The node is running and ready for use.
ERROR
The node is in an unexpected or errored state.
UPDATING
The node is currently being updated.
REPAIRING
The node is currently being repaired.
RECONCILING
The node is currently being reconciled.
CreateBlockchainNodeRequest
Message for creating a blockchain node.
Fields
parent
string
Required. Value for parent.
blockchain_node_id
string
Required. ID of the requesting object.
blockchain_node
BlockchainNode
Required. The resource being created.
request_id
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
DeleteBlockchainNodeRequest
Message for deleting a blockchain node.
Fields
name
string
Required. The fully qualified name of the blockchain node to delete. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .
request_id
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
GetBlockchainNodeRequest
Message for getting a blockchain node.
Fields
name
string
Required. The fully qualified name of the blockchain node to fetch. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .
ListBlockchainNodesRequest
Message for requesting list of blockchain nodes.
Fields
parent
string
Required. Parent value for ListNodesRequest .
page_size
int32
Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
page_token
string
A token identifying a page of results the server should return.
filter
string
Filtering results.
order_by
string
Hint for how to order the results.
ListBlockchainNodesResponse
Message for response to listing blockchain nodes.
Fields
blockchain_nodes[]
BlockchainNode
The list of nodes
next_page_token
string
A token identifying a page of results the server should return.
unreachable[]
string
Locations that could not be reached.
OperationMetadata
Represents the metadata of the long-running operation.
Fields
create_time
Timestamp
Output only. The time the operation was created.
end_time
Timestamp
Output only. The time the operation finished running.
target
string
Output only. Server-defined resource path for the target of the operation.
verb
string
Output only. Name of the verb executed by the operation.
status_message
string
Output only. Human-readable status of the operation, if any.
requested_cancellation
bool
Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1 , corresponding to Code.CANCELLED .
api_version
string
Output only. API version used to start the operation.
UpdateBlockchainNodeRequest
Message for updating a blockchain node.
Fields
update_mask
FieldMask
Required. Field mask is used to specify the fields to be overwritten in the Blockchain node resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
blockchain_node
BlockchainNode
Required. The resource being updated.
request_id
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
