---
title: "GKE Multi-Cloud API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
  title: "GKE Multi-Cloud API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
Send feedback
GKE Multi-Cloud API
Stay organized with collections
Save and categorize content based on your preferences.
GKE Multi-Cloud provides a way to manage Kubernetes clusters that run on AWS and Azure infrastructure using the GKE Multi-Cloud API. Combined with Connect, you can manage Kubernetes clusters on Google Cloud, AWS, and Azure from the Google Cloud Console.
When you create a cluster with GKE Multi-Cloud, Google creates the resources needed and brings up a cluster on your behalf. You can deploy workloads with the GKE Multi-Cloud API or the gcloud and kubectl command-line tools.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.attachedClusters
REST Resource: v1.projects.locations.awsClusters
REST Resource: v1.projects.locations.awsClusters.awsNodePools
REST Resource: v1.projects.locations.awsClusters.well-known
REST Resource: v1.projects.locations.azureClients
REST Resource: v1.projects.locations.azureClusters
REST Resource: v1.projects.locations.azureClusters.azureNodePools
REST Resource: v1.projects.locations.azureClusters.well-known
REST Resource: v1.projects.locations.operations
Service: gkemulticloud.googleapis.com
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoints and all URIs below are relative to these service endpoints:
https://asia-east2-gkemulticloud.googleapis.com
https://asia-northeast2-gkemulticloud.googleapis.com
https://asia-south1-gkemulticloud.googleapis.com
https://asia-southeast1-gkemulticloud.googleapis.com
https://asia-southeast2-gkemulticloud.googleapis.com
https://australia-southeast1-gkemulticloud.googleapis.com
https://europe-north1-gkemulticloud.googleapis.com
https://europe-west1-gkemulticloud.googleapis.com
https://europe-west2-gkemulticloud.googleapis.com
https://europe-west3-gkemulticloud.googleapis.com
https://europe-west4-gkemulticloud.googleapis.com
https://europe-west6-gkemulticloud.googleapis.com
https://europe-west8-gkemulticloud.googleapis.com
https://europe-west9-gkemulticloud.googleapis.com
https://me-central2-gkemulticloud.googleapis.com
https://northamerica-northeast1-gkemulticloud.googleapis.com
https://southamerica-east1-gkemulticloud.googleapis.com
https://us-central1-gkemulticloud.googleapis.com
https://us-east4-gkemulticloud.googleapis.com
https://us-east7-gkemulticloud.googleapis.com
https://us-west1-gkemulticloud.googleapis.com
REST Resource: v1.projects.locations
Methods
generateAttachedClusterInstallManifest
GET /v1/{parent=projects/*/locations/*}:generateAttachedClusterInstallManifest
Generates the install manifest to be installed on the target cluster.
getAttachedServerConfig
GET /v1/{name=projects/*/locations/*/attachedServerConfig}
Returns information, such as supported Kubernetes versions, on a given Google Cloud location.
getAwsServerConfig (deprecated)
GET /v1/{name=projects/*/locations/*/awsServerConfig}
Returns information, such as supported AWS regions and Kubernetes versions, on a given Google Cloud location.
getAzureServerConfig (deprecated)
GET /v1/{name=projects/*/locations/*/azureServerConfig}
Returns information, such as supported Azure regions and Kubernetes versions, on a given Google Cloud location.
REST Resource: v1.projects.locations.attachedClusters
Methods
create
POST /v1/{parent=projects/*/locations/*}/attachedClusters
Creates a new AttachedCluster resource on a given Google Cloud Platform project and region.
delete
DELETE /v1/{name=projects/*/locations/*/attachedClusters/*}
Deletes a specific AttachedCluster resource.
generateAttachedClusterAgentToken
POST /v1/{attachedCluster=projects/*/locations/*/attachedClusters/*}:generateAttachedClusterAgentToken
Generates an access token for a cluster agent.
get
GET /v1/{name=projects/*/locations/*/attachedClusters/*}
Describes a specific AttachedCluster resource.
import
POST /v1/{parent=projects/*/locations/*}/attachedClusters:import
Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.
list
GET /v1/{parent=projects/*/locations/*}/attachedClusters
Lists all AttachedCluster resources on a given Google Cloud project and region.
patch
PATCH /v1/{attachedCluster.name=projects/*/locations/*/attachedClusters/*}
Updates an AttachedCluster .
REST Resource: v1.projects.locations.awsClusters
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*}/awsClusters
Creates a new AwsCluster resource on a given Google Cloud Platform project and region.
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/awsClusters/*}
Deletes a specific AwsCluster resource.
generateAwsAccessToken (deprecated)
GET /v1/{awsCluster=projects/*/locations/*/awsClusters/*}:generateAwsAccessToken
Generates a short-lived access token to authenticate to a given AwsCluster resource.
generateAwsClusterAgentToken (deprecated)
POST /v1/{awsCluster=projects/*/locations/*/awsClusters/*}:generateAwsClusterAgentToken
Generates an access token for a cluster agent.
get (deprecated)
GET /v1/{name=projects/*/locations/*/awsClusters/*}
Describes a specific AwsCluster resource.
getJwks (deprecated)
GET /v1/{awsCluster=projects/*/locations/*/awsClusters/*}/jwks
Gets the public component of the cluster signing keys in JSON Web Key format.
list (deprecated)
GET /v1/{parent=projects/*/locations/*}/awsClusters
Lists all AwsCluster resources on a given Google Cloud project and region.
patch (deprecated)
PATCH /v1/{awsCluster.name=projects/*/locations/*/awsClusters/*}
Updates an AwsCluster .
REST Resource: v1.projects.locations.awsClusters.awsNodePools
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*/awsClusters/*}/awsNodePools
Creates a new AwsNodePool , attached to a given AwsCluster .
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/awsClusters/*/awsNodePools/*}
Deletes a specific AwsNodePool resource.
get (deprecated)
GET /v1/{name=projects/*/locations/*/awsClusters/*/awsNodePools/*}
Describes a specific AwsNodePool resource.
list (deprecated)
GET /v1/{parent=projects/*/locations/*/awsClusters/*}/awsNodePools
Lists all AwsNodePool resources on a given AwsCluster .
patch (deprecated)
PATCH /v1/{awsNodePool.name=projects/*/locations/*/awsClusters/*/awsNodePools/*}
Updates an AwsNodePool .
rollback (deprecated)
POST /v1/{name=projects/*/locations/*/awsClusters/*/awsNodePools/*}:rollback
Rolls back a previously aborted or failed AwsNodePool update request.
REST Resource: v1.projects.locations.awsClusters.well-known
Methods
getOpenid-configuration (deprecated)
GET /v1/{awsCluster=projects/*/locations/*/awsClusters/*}/.well-known/openid-configuration
Gets the OIDC discovery document for the cluster.
REST Resource: v1.projects.locations.azureClients
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*}/azureClients
Creates a new AzureClient resource on a given Google Cloud project and region.
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/azureClients/*}
Deletes a specific AzureClient resource.
get (deprecated)
GET /v1/{name=projects/*/locations/*/azureClients/*}
Describes a specific AzureClient resource.
list (deprecated)
GET /v1/{parent=projects/*/locations/*}/azureClients
Lists all AzureClient resources on a given Google Cloud project and region.
REST Resource: v1.projects.locations.azureClusters
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*}/azureClusters
Creates a new AzureCluster resource on a given Google Cloud Platform project and region.
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/azureClusters/*}
Deletes a specific AzureCluster resource.
generateAzureAccessToken (deprecated)
GET /v1/{azureCluster=projects/*/locations/*/azureClusters/*}:generateAzureAccessToken
Generates a short-lived access token to authenticate to a given AzureCluster resource.
generateAzureClusterAgentToken (deprecated)
POST /v1/{azureCluster=projects/*/locations/*/azureClusters/*}:generateAzureClusterAgentToken
Generates an access token for a cluster agent.
get (deprecated)
GET /v1/{name=projects/*/locations/*/azureClusters/*}
Describes a specific AzureCluster resource.
getJwks (deprecated)
GET /v1/{azureCluster=projects/*/locations/*/azureClusters/*}/jwks
Gets the public component of the cluster signing keys in JSON Web Key format.
list (deprecated)
GET /v1/{parent=projects/*/locations/*}/azureClusters
Lists all AzureCluster resources on a given Google Cloud project and region.
patch (deprecated)
PATCH /v1/{azureCluster.name=projects/*/locations/*/azureClusters/*}
Updates an AzureCluster .
REST Resource: v1.projects.locations.azureClusters.azureNodePools
Methods
create (deprecated)
POST /v1/{parent=projects/*/locations/*/azureClusters/*}/azureNodePools
Creates a new AzureNodePool , attached to a given AzureCluster .
delete (deprecated)
DELETE /v1/{name=projects/*/locations/*/azureClusters/*/azureNodePools/*}
Deletes a specific AzureNodePool resource.
get (deprecated)
GET /v1/{name=projects/*/locations/*/azureClusters/*/azureNodePools/*}
Describes a specific AzureNodePool resource.
list (deprecated)
GET /v1/{parent=projects/*/locations/*/azureClusters/*}/azureNodePools
Lists all AzureNodePool resources on a given AzureCluster .
patch (deprecated)
PATCH /v1/{azureNodePool.name=projects/*/locations/*/azureClusters/*/azureNodePools/*}
Updates an AzureNodePool .
REST Resource: v1.projects.locations.azureClusters.well-known
Methods
getOpenid-configuration (deprecated)
GET /v1/{azureCluster=projects/*/locations/*/azureClusters/*}/.well-known/openid-configuration
Gets the OIDC discovery document for the cluster.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-20 UTC."],[],[]]
