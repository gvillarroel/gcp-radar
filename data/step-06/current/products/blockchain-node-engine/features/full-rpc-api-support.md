---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.280Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Full RPC API support"
feature_slug: "full-rpc-api-support"
latest_feature_date: "2022-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/iam/docs/full-resource-names"
keywords:
  - "interactions"
  - "exposes"
  - "full"
---

# Full RPC API support

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

The service exposes a full RPC API for node interactions.

## Extended Definition

Blockchain Node Engine exposes both a gRPC API (`google.cloud.blockchainnodeengine.v1`) and a REST API (`projects.locations.blockchainNodes`) for blockchain node resources, which provides protocol-level access to node information and interaction endpoints (including `EndpointInfo` and service attachments). The API documentation shows node identifiers as fully qualified resource names (for example, `projects/{project}/locations/{location}/blockchainNodes/{node}`), indicating RPC/REST operations are scoped by full resource names. The evidence supports API availability and resource-level operations but does not explicitly confirm that every possible RPC method is fully implemented.

## Evidence Summary

The two Blockchain Node Engine reference pages provide gRPC and REST API definitions with node resource paths and endpoint metadata, while the IAM page explains the full resource name format used for those identifiers.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)

## Supporting Pages

### "Full resource names \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/full-resource-names](https://docs.cloud.google.com/iam/docs/full-resource-names)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource type Full resource name format BigQuery datasets //bigquery.googleapis.com/projects/ PROJECT ID /datasets/ DATASET ID Cloud Billing accounts //cloudbilling.googleapis.com/billingAccounts/ BILLING ACCOUNT ID Cloud Run services //run.googleapis.com/projects/ PROJECT ID /locations/ LOCATION ID /services/ SERVICE ID Spanner instances //spanner.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud SQL instances //sqladmin.googleapis.com/projects/ PROJECT ID /instances/ INSTANCE ID Cloud Storage buckets 1 //storage.googleapis.com/projects/ /buckets/ BUCKET ID Compute Engine instances //compute.googleapis.com/projects/ PROJECT ID /zones/ ZONE /instances/ INSTANCE ID Compute Engine networks //compute.googleapis.com/projects/ PROJECT ID /global/networks/ NETWORK Compute Engine subnetworks //compute.googleapis.com/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNETWORK Google Kubernetes Engine clusters //container.googleapis.com/projects/ PROJECT ID /clusters/ CLUSTER ID IAM service accounts //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL IAM service account keys //iam.googleapis.com/projects/ PROJECT ID / serviceAccounts/ SERVICE ACCOUNT EMAIL /keys/ KEY ID Identity-Aware Proxy App Engine app service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/appengine- PROJECT ID /services/ APP SERVICE ID Identity-Aware Proxy Compute Engine backend service //iap.googleapis.com/projects/ PROJECT NUMBER /iap web/compute/services/ BACKEND SERVICE ID OR NAME Pub/Sub topics //pubsub.googleapis.com/projects/ PROJECT ID /topics/ TOPIC ID Resource Manager organizations //cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION NUMBER Resource Manager folders //cloudresourcemanager.googleapis.com/folders/ FOLDER NUMBER Resource Manager projects //cloudresourcemanager.googleapis.com/projects/ PROJECT ID 1 The format shown here is compatible with IAM.
- Some Identity and Access Management (IAM) features, such as troubleshooting access issues and viewing the grantable roles on a resource , require you to provide a full resource name .
- Home Documentation Security IAM Reference Send feedback Full resource names Stay organized with collections Save and categorize content based on your preferences.
- To learn more about how full resource names are formatted, see the resource names section of the API design guide.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.
- Operations that have been cancelled successfully have [Operation.error][] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1 , corresponding to Code.CANCELLED . api version string Output only.
- The fully qualified name of the blockchain node to delete. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node . request id string Optional.
- The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node . create time Timestamp Output only.

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service attachment name} EndpointInfo Contains endpoint information through which to interact with a blockchain node.
- The fully qualified name of the blockchain node. e.g. projects/my-project/locations/us-central1/blockchainNodes/my-node . createTime string ( Timestamp format) Output only.
- FULL Keeps a complete copy of the blockchain data, and contributes to the network by receiving, validating, and forwarding transactions.
- ARCHIVE Holds the same data as full node as well as all of the blockchain's history state data dating back to the Genesis Block.

