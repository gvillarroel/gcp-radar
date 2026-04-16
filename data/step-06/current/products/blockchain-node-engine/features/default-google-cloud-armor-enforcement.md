---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.273Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Default Google Cloud Armor enforcement"
feature_slug: "default-google-cloud-armor-enforcement"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/iam/docs/pab-blocked-permissions"
keywords:
  - "enforcement"
  - "default"
  - "enabled"
  - "armor"
  - "automatically"
---

# Default Google Cloud Armor enforcement

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Armor is automatically enabled for Blockchain Node Engine nodes.

## Extended Definition

Google Cloud Armor is automatically enabled for Blockchain Node Engine nodes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false . apiEnableDebug boolean Immutable.
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "connectionInfo" : { object ( ConnectionInfo ) } , "state" : enum ( State ) , "privateServiceConnectEnabled" : boolean , // Union field blockchain type details can be only one of the following: "ethereumDetails" : { object ( EthereumDetails ) } // End of list of possible types for union field blockchain type details . "blockchainType" : enum ( BlockchainType ) } Fields name string Output only.
- A status representing the state of the node. privateServiceConnectEnabled boolean Optional.

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- If unspecified, server will pick an appropriate default. page token string A token identifying a page of results the server should return. filter string Filtering results. order by string Hint for how to order the results.
- A status representing the state of the node. private service connect enabled bool Optional.
- Defaults to false . additional endpoints EthereumEndpoints Output only.
- This is the default mode when creating an archive node.

### "Permissions that principal access boundary policies block \_|\_ Identity\

- URL: [https://docs.cloud.google.com/iam/docs/pab-blocked-permissions](https://docs.cloud.google.com/iam/docs/pab-blocked-permissions)
- Source ID: `site-iam-reference`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Default enforcement version The default enforcement version is used for the following principal access boundary policies: New policies that don't specify a version number Policies that use the value latest for the version The current default enforcement version is version 3 .
- None Secure Source Manager securesourcemanager.googleapis.com/ branchRules. securesourcemanager.googleapis.com/ hooks. securesourcemanager.googleapis.com/ instances. access securesourcemanager.googleapis.com/ instances. create securesourcemanager.googleapis.com/ instances. delete securesourcemanager.googleapis.com/ instances. get securesourcemanager.googleapis.com/ instances. getIamPolicy securesourcemanager.googleapis.com/ instances. linkDeveloperConnect securesourcemanager.googleapis.com/ instances. list securesourcemanager.googleapis.com/ instances. setIamPolicy securesourcemanager.googleapis.com/ issuecomments. securesourcemanager.googleapis.com/ issues. securesourcemanager.googleapis.com/ locations. securesourcemanager.googleapis.com/ operations. securesourcemanager.googleapis.com/ prcomments. securesourcemanager.googleapis.com/ pullRequests. securesourcemanager.googleapis.com/ repositories. create securesourcemanager.googleapis.com/ repositories. delete securesourcemanager.googleapis.com/ repositories. fetch securesourcemanager.googleapis.com/ repositories. get securesourcemanager.googleapis.com/ repositories. getIamPolicy securesourcemanager.googleapis.com/ repositories. list securesourcemanager.googleapis.com/ repositories. setIamPolicy securesourcemanager.googleapis.com/ repositories. update None Connectors connectors.googleapis.com/ . connectors.googleapis.com/ connections. executeSqlQuery connectors.googleapis.com/ connections. generateOpenAPISpec connectors.googleapis.com/ connections. listenEvent Dataproc Metastore metastore.googleapis.com/ backups. metastore.googleapis.com/ databases. delete metastore.googleapis.com/ databases. getIamPolicy metastore.googleapis.com/ databases. setIamPolicy metastore.googleapis.com/ databases. update metastore.googleapis.com/ federations. metastore.googleapis.com/ imports. metastore.googleapis.com/ locations. metastore.googleapis.com/ operations. metastore.googleapis.com/ services. metastore.googleapis.com/ tables. delete metastore.googleapis.com/ tables. getIamPolicy metastore.googleapis.com/ tables. setIamPolicy metastore.googleapis.com/ tables. update metastore.googleapis.com/ federations. use metastore.googleapis.com/ services. use Enforcement version 3 Policies with enforcement version 3 can block all of the permissions listed in the following enforcement versions: Enforcement version 1 Enforcement version 2 Additionally, policies with the enforcement version 3 can also block all of the permissions listed in the following table.
- None reCAPTCHA recaptchaenterprise.googleapis.com/ None Resource Manager cloudresourcemanager.googleapis.com/ cloudresourcemanager.googleapis.com/ . createPolicyBinding cloudresourcemanager.googleapis.com/ . deletePolicyBinding cloudresourcemanager.googleapis.com/ . searchPolicyBindings cloudresourcemanager.googleapis.com/ . updatePolicyBinding Video Stitcher API videostitcher.googleapis.com/ None Enforcement version 1 The following table lists the permissions that principal access boundary policies with enforcement version 1 can block.
- Enforcement version 4 Policies with enforcement version 4 can block all of the permissions listed in the following enforcement versions: Enforcement version 1 Enforcement version 2 Enforcement version 3 Additionally, policies with the enforcement version 4 can also block all of the permissions listed in the following table.

