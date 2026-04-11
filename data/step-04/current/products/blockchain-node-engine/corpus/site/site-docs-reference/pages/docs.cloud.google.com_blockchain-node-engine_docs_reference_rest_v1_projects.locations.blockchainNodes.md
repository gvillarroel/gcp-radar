---
title: "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-node-engine/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes
  title: "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\
    \ Engine \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.blockchainNodes
Stay organized with collections
Save and categorize content based on your preferences.
Resource: BlockchainNode
JSON representation
EthereumDetails
JSON representation
GethDetails
JSON representation
GarbageCollectionMode
Network
NodeType
ExecutionClient
ConsensusClient
EthereumEndpoints
JSON representation
ValidatorConfig
JSON representation
BlockchainType
ConnectionInfo
JSON representation
EndpointInfo
JSON representation
State
Methods
Resource: BlockchainNode
A representation of a blockchain node.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"connectionInfo" : {
object ( ConnectionInfo )
} ,
"state" : enum ( State ) ,
"privateServiceConnectEnabled" : boolean ,
// Union field blockchain_type_details can be only one of the following:
"ethereumDetails" : {
object ( EthereumDetails )
}
// End of list of possible types for union field blockchain_type_details .
"blockchainType" : enum ( BlockchainType )
}
Fields
name
string
Output only. The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node .
createTime
string ( Timestamp format)
Output only. The timestamp at which the blockchain node was first created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. The timestamp at which the blockchain node was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
labels
map (key: string, value: string)
User-provided key-value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
connectionInfo
object ( ConnectionInfo )
Output only. The connection information used to interact with a blockchain node.
state
enum ( State )
Output only. A status representing the state of the node.
privateServiceConnectEnabled
boolean
Optional. When true, the node is only accessible via Private Service Connect; no public endpoints are exposed. Otherwise, the node is only accessible via public endpoints.
See https://cloud.google.com/vpc/docs/private-service-connect .
Union field blockchain_type_details . Information that is specific to a particular blockchain type. blockchain_type_details can be only one of the following:
ethereumDetails
object ( EthereumDetails )
Ethereum-specific blockchain node details.
blockchainType
enum ( BlockchainType )
Immutable. The blockchain type of the node.
EthereumDetails
Ethereum-specific blockchain node details.
JSON representation
{
// Union field execution_client_details can be only one of the following:
"gethDetails" : {
object ( GethDetails )
}
// End of list of possible types for union field execution_client_details .
"network" : enum ( Network ) ,
"nodeType" : enum ( NodeType ) ,
"executionClient" : enum ( ExecutionClient ) ,
"consensusClient" : enum ( ConsensusClient ) ,
"apiEnableAdmin" : boolean ,
"apiEnableDebug" : boolean ,
"additionalEndpoints" : {
object ( EthereumEndpoints )
} ,
"validatorConfig" : {
object ( ValidatorConfig )
}
}
Fields
Union field execution_client_details . Options for the execution client. execution_client_details can be only one of the following:
gethDetails
object ( GethDetails )
Details for the Geth execution client.
network
enum ( Network )
Immutable. The Ethereum environment being accessed.
nodeType
enum ( NodeType )
Immutable. The type of Ethereum node.
executionClient
enum ( ExecutionClient )
Immutable. The execution client
consensusClient
enum ( ConsensusClient )
Immutable. The consensus client.
apiEnableAdmin
boolean
Immutable. Enables JSON-RPC access to functions in the admin namespace. Defaults to false .
apiEnableDebug
boolean
Immutable. Enables JSON-RPC access to functions in the debug namespace. Defaults to false .
additionalEndpoints
object ( EthereumEndpoints )
Output only. Ethereum-specific endpoint information.
validatorConfig
object ( ValidatorConfig )
Configuration for validator-related parameters on the beacon client, and for any managed validator client.
GethDetails
Options for the Geth execution client.
See Command-line Options for more details.
JSON representation
{
"garbageCollectionMode" : enum ( GarbageCollectionMode )
}
Fields
garbageCollectionMode
enum ( GarbageCollectionMode )
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
JSON representation
{
"beaconApiEndpoint" : string ,
"beaconPrometheusMetricsApiEndpoint" : string ,
"executionClientPrometheusMetricsApiEndpoint" : string
}
Fields
beaconApiEndpoint
string
Output only. The assigned URL for the node's Beacon API endpoint.
beaconPrometheusMetricsApiEndpoint
string
Output only. The assigned URL for the node's Beacon Prometheus metrics endpoint. See Prometheus Metrics for more details.
executionClientPrometheusMetricsApiEndpoint
string
Output only. The assigned URL for the node's execution client's Prometheus metrics endpoint.
ValidatorConfig
Configuration for validator-related parameters on the beacon client, and for any managed validator client.
JSON representation
{
"mevRelayUrls" : [
string
]
}
Fields
mevRelayUrls[]
string
URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.
BlockchainType
The blockchain type of the node.
Enums
BLOCKCHAIN_TYPE_UNSPECIFIED
Blockchain type has not been specified, but should be.
ETHEREUM
The blockchain type is Ethereum.
ConnectionInfo
The connection information through which to interact with a blockchain node.
JSON representation
{
"endpointInfo" : {
object ( EndpointInfo )
} ,
"serviceAttachment" : string
}
Fields
endpointInfo
object ( EndpointInfo )
Output only. The endpoint information through which to interact with a blockchain node.
serviceAttachment
string
Output only. A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name}
EndpointInfo
Contains endpoint information through which to interact with a blockchain node.
JSON representation
{
"jsonRpcApiEndpoint" : string ,
"websocketsApiEndpoint" : string
}
Fields
jsonRpcApiEndpoint
string
Output only. The assigned URL for the node JSON-RPC API endpoint.
websocketsApiEndpoint
string
Output only. The assigned URL for the node WebSockets API endpoint.
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
Methods
create
Creates a new blockchain node in a given project and location.
delete
Deletes a single blockchain node.
get
Gets details of a single blockchain node.
list
Lists blockchain nodes in a given project and location.
patch
Updates the parameters of a single blockchain node.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
