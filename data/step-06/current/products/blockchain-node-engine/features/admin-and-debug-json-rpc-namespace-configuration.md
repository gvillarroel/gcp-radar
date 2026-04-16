---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:24:06.277Z"
product_name: "Blockchain Node Engine"
product_slug: "blockchain-node-engine"
feature_name: "Admin and debug JSON-RPC namespace configuration"
feature_slug: "admin-and-debug-json-rpc-namespace-configuration"
latest_feature_date: "2023-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes"
  - "https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval"
keywords:
  - "namespaces"
  - "namespace"
  - "admin"
  - "debug"
  - "configuration"
  - "access"
  - "json"
---

# Admin and debug JSON-RPC namespace configuration

Product: Blockchain Node Engine
Coverage: MEDIUM

## Step 02 Summary

Access to admin and debug JSON-RPC namespaces can be configured at node creation time.

## Extended Definition

Access to admin and debug JSON-RPC namespaces can be configured at node creation time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)

## Supporting Pages

### "REST Resource: projects.locations.blockchainNodes \_|\_ Blockchain Node\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rest/v1/projects.locations.blockchainNodes)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enables JSON-RPC access to functions in the admin namespace.
- Enables JSON-RPC access to functions in the debug namespace.
- JSON representation { // Union field execution client details can be only one of the following: "gethDetails" : { object ( GethDetails ) } // End of list of possible types for union field execution client details . "network" : enum ( Network ) , "nodeType" : enum ( NodeType ) , "executionClient" : enum ( ExecutionClient ) , "consensusClient" : enum ( ConsensusClient ) , "apiEnableAdmin" : boolean , "apiEnableDebug" : boolean , "additionalEndpoints" : { object ( EthereumEndpoints ) } , "validatorConfig" : { object ( ValidatorConfig ) } } Fields Union field execution client details .
- JSON representation { "name" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "connectionInfo" : { object ( ConnectionInfo ) } , "state" : enum ( State ) , "privateServiceConnectEnabled" : boolean , // Union field blockchain type details can be only one of the following: "ethereumDetails" : { object ( EthereumDetails ) } // End of list of possible types for union field blockchain type details . "blockchainType" : enum ( BlockchainType ) } Fields name string Output only.

### "Access Approval roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Access Approval roles Role Permissions Accessapproval Admin ( roles/ accessapproval.admin ) Admin role for accessapproval accessapproval. accessapproval. requests. approve accessapproval. requests. dismiss accessapproval.requests.get accessapproval. requests. invalidate accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.delete accessapproval.settings.get accessapproval.settings.update resourcemanager.projects.get resourcemanager.projects.list Accessapproval Editor ( roles/ accessapproval.editor ) Editor role for accessapproval accessapproval.requests.get accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval Viewer ( roles/ accessapproval.viewer ) Ability to view access approval requests and configuration accessapproval.requests.get accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval Approver ( roles/ accessapproval.approver ) Ability to view or act on access approval requests and view configuration. accessapproval.requests. accessapproval. requests. approve accessapproval. requests. dismiss accessapproval.requests.get accessapproval. requests. invalidate accessapproval.requests.list accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval Config Editor ( roles/ accessapproval.configEditor ) Ability to update the Access Approval configuration accessapproval. serviceAccounts. get accessapproval.settings. accessapproval.settings.delete accessapproval.settings.get accessapproval.settings.update resourcemanager.projects.get resourcemanager.projects.list Access Approval Invalidator ( roles/ accessapproval.invalidator ) Ability to invalidate existing approved approval requests accessapproval. requests. invalidate accessapproval. serviceAccounts. get accessapproval.settings.get resourcemanager.projects.get resourcemanager.projects.list Access Approval permissions Permission Included in roles accessapproval. requests. approve Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Approver ( roles/ accessapproval.approver ) accessapproval. requests. dismiss Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Approver ( roles/ accessapproval.approver ) accessapproval.requests.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Access Approval Approver ( roles/ accessapproval.approver ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Controls Partner Access Approval Service Agent ( roles/ cloudcontrolspartner.accessApprovalServiceAgent ) accessapproval. serviceAccounts. get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Access Approval Approver ( roles/ accessapproval.approver ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) Access Approval Invalidator ( roles/ accessapproval.invalidator ) Support User ( roles/ iam.supportUser ) accessapproval.settings.delete Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) accessapproval.settings.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Access Approval Approver ( roles/ accessapproval.approver ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) Access Approval Invalidator ( roles/ accessapproval.invalidator ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Controls Partner Access Approval Service Agent ( roles/ cloudcontrolspartner.accessApprovalServiceAgent ) accessapproval. requests. invalidate Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Approver ( roles/ accessapproval.approver ) Access Approval Invalidator ( roles/ accessapproval.invalidator ) accessapproval.requests.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Accessapproval Admin ( roles/ accessapproval.admin ) Accessapproval Editor ( roles/ accessapproval.editor ) Access Approval Viewer ( roles/ accessapproval.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Access Approval Approver ( roles/ accessapproval.approver ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Audit Manager Auditing Service Agent ( roles/ auditmanager.serviceAgent ) Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent ) accessapproval.settings.update Owner ( roles/ owner ) Accessapproval Admin ( roles/ accessapproval.admin ) Access Approval Config Editor ( roles/ accessapproval.configEditor ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Package google.cloud.blockchainnodeengine.v1 \_|\_ Blockchain Node Engine\

- URL: [https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1](https://docs.cloud.google.com/blockchain-node-engine/docs/reference/rpc/google.cloud.blockchainnodeengine.v1)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enables JSON-RPC access to functions in the admin namespace.
- Enables JSON-RPC access to functions in the debug namespace.
- Ethereum-specific endpoint information. validator config ValidatorConfig Configuration for validator-related parameters on the beacon client, and for any managed validator client.
- ValidatorConfig Configuration for validator-related parameters on the beacon client, and for any managed validator client.

