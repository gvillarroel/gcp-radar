---
title: "Blockchain Node Engine audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/blockchain-node-engine/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/blockchain-node-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/blockchain-node-engine/docs/audit-logging
  title: "Blockchain Node Engine audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Blockchain Node Engine
Guides
Send feedback
Blockchain Node Engine audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Blockchain Node Engine. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Blockchain Node Engine audit logs use the service name blockchainnodeengine.googleapis.com .
Filter for this service:
protoPayload . serviceName = "blockchainnodeengine.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Blockchain Node Engine generates an audit log whose category is dependent on the
type property of the permission required to perform the method.
Methods that require an IAM permission with the type property value
of DATA_READ , DATA_WRITE , or ADMIN_READ generate
Data Access audit logs.
Methods that require an IAM permission with the type property value
of ADMIN_WRITE generate
Admin Activity audit logs.
API methods in the following list that are marked with (LRO) are long-running operations (LROs).
These methods usually generate two audit log entries: one when the operation starts and
another when it ends. For more information see Audit logs for long-running operations .
Permission type
Methods
ADMIN_READ
google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.GetBlockchainNode google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.ListBlockchainNodes google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.GetBlockchainNode google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.ListBlockchainNodes google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations
ADMIN_WRITE
google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.CreateBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.DeleteBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.UpdateBlockchainNode google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.CreateBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.DeleteBlockchainNode (LRO) google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.UpdateBlockchainNode google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Blockchain Node Engine.
google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine
The following audit logs are associated with methods belonging to
google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine .
CreateBlockchainNode
Method : google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.CreateBlockchainNode
Audit log type : Admin activity
Permissions : blockchainnodeengine.blockchainNodes.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.CreateBlockchainNode"
DeleteBlockchainNode
Method : google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.DeleteBlockchainNode
Audit log type : Admin activity
Permissions : blockchainnodeengine.blockchainNodes.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.DeleteBlockchainNode"
GetBlockchainNode
Method : google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.GetBlockchainNode
Audit log type : Data access
Permissions : blockchainnodeengine.blockchainNodes.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.GetBlockchainNode"
ListBlockchainNodes
Method : google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.ListBlockchainNodes
Audit log type : Data access
Permissions : blockchainnodeengine.blockchainNodes.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.ListBlockchainNodes"
UpdateBlockchainNode
Method : google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.UpdateBlockchainNode
Audit log type : Admin activity
Permissions : blockchainnodeengine.blockchainNodes.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1.BlockchainNodeEngine.UpdateBlockchainNode"
google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine
The following audit logs are associated with methods belonging to
google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine .
CreateBlockchainNode
Method : google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.CreateBlockchainNode
Audit log type : Admin activity
Permissions : blockchainnodeengine.blockchainNodes.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.CreateBlockchainNode"
DeleteBlockchainNode
Method : google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.DeleteBlockchainNode
Audit log type : Admin activity
Permissions : blockchainnodeengine.blockchainNodes.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.DeleteBlockchainNode"
GetBlockchainNode
Method : google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.GetBlockchainNode
Audit log type : Data access
Permissions : blockchainnodeengine.blockchainNodes.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.GetBlockchainNode"
ListBlockchainNodes
Method : google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.ListBlockchainNodes
Audit log type : Data access
Permissions : blockchainnodeengine.blockchainNodes.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.ListBlockchainNodes"
UpdateBlockchainNode
Method : google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.UpdateBlockchainNode
Audit log type : Admin activity
Permissions : blockchainnodeengine.blockchainNodes.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.blockchainnodeengine.v1alpha1.BlockchainNodeEngine.UpdateBlockchainNode"
google.longrunning.Operations
The following audit logs are associated with methods belonging to
google.longrunning.Operations .
CancelOperation
Method : google.longrunning.Operations.CancelOperation
Audit log type : Admin activity
Permissions : blockchainnodeengine.operations.cancel - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.CancelOperation"
DeleteOperation
Method : google.longrunning.Operations.DeleteOperation
Audit log type : Admin activity
Permissions : blockchainnodeengine.operations.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.DeleteOperation"
GetOperation
Method : google.longrunning.Operations.GetOperation
Audit log type : Data access
Permissions : blockchainnodeengine.operations.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.GetOperation"
ListOperations
Method : google.longrunning.Operations.ListOperations
Audit log type : Data access
Permissions : blockchainnodeengine.operations.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.longrunning.Operations.ListOperations"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.cloud.location.Locations.GetLocation
google.cloud.location.Locations.ListLocations
google.longrunning.Operations.WaitOperation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
