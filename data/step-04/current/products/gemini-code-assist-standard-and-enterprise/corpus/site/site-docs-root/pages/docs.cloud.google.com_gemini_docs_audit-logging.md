---
title: "Gemini for Google Cloud audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/codeassist/overview
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/audit-logging
  title: "Gemini for Google Cloud audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Gemini for Google Cloud audit logging
Stay organized with collections
Save and categorize content based on your preferences.
Important: This page covers audit logging information for the
cloudaicompanion API. If you use Gemini Cloud Assist, a product
within Gemini, that product also uses the geminicloudassist
API. For information about audit logging for the geminicloudassist API, see
Gemini Cloud Assist audit logging .
This document describes audit logging for Gemini for Google Cloud. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Service name
Gemini for Google Cloud audit logs use the service name cloudaicompanion.googleapis.com .
Filter for this service:
protoPayload . serviceName = "cloudaicompanion.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Gemini for Google Cloud generates an audit log whose category is dependent on the
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
google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.GetCodeRepositoryIndex google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.ListCodeRepositoryIndexes google.cloud.cloudaicompanion.v1.EntitlementService.CheckStatus
ADMIN_WRITE
google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.CreateCodeRepositoryIndex (LRO) google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.DeleteCodeRepositoryIndex (LRO) google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UpdateCodeRepositoryIndex (LRO)
DATA_READ
google.cloud.cloudaicompanion.v1.CodeGenerationService.CompleteCode google.cloud.cloudaicompanion.v1.CodeGenerationService.GenerateCode google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.GetRepositoryGroup google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.ListRepositoryGroups google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UseRepositoryGroup google.cloud.cloudaicompanion.v1.MessageService.EnumerateMessages google.cloud.cloudaicompanion.v1.TaskCompletionService.CompleteTask google.cloud.cloudaicompanion.v1.TextGenerationService.GenerateText google.cloud.cloudaicompanion.v1.TopicService.FindReadableTopics google.cloud.cloudaicompanion.v1.TopicService.GetTopic
DATA_WRITE
google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.CreateRepositoryGroup (LRO) google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.DeleteRepositoryGroup (LRO) google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UpdateRepositoryGroup (LRO) google.cloud.cloudaicompanion.v1.TopicService.CreateTopic (LRO) google.cloud.cloudaicompanion.v1.TopicService.DeleteTopic (LRO) google.cloud.cloudaicompanion.v1.TopicService.UpdateTopic (LRO)
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Gemini for Google Cloud.
google.cloud.cloudaicompanion.v1.CodeGenerationService
The following audit logs are associated with methods belonging to
google.cloud.cloudaicompanion.v1.CodeGenerationService .
CompleteCode
Method : google.cloud.cloudaicompanion.v1.CodeGenerationService.CompleteCode
Audit log type : Data access
Permissions : cloudaicompanion.instances.completeCode - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeGenerationService.CompleteCode"
GenerateCode
Method : google.cloud.cloudaicompanion.v1.CodeGenerationService.GenerateCode
Audit log type : Data access
Permissions : cloudaicompanion.instances.generateCode - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeGenerationService.GenerateCode"
google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService
The following audit logs are associated with methods belonging to
google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService .
CreateCodeRepositoryIndex
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.CreateCodeRepositoryIndex
Audit log type : Admin activity
Permissions : cloudaicompanion.codeRepositoryIndexes.create - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.CreateCodeRepositoryIndex"
CreateRepositoryGroup
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.CreateRepositoryGroup
Audit log type : Data access
Permissions : cloudaicompanion.repositoryGroups.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.CreateRepositoryGroup"
DeleteCodeRepositoryIndex
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.DeleteCodeRepositoryIndex
Audit log type : Admin activity
Permissions : cloudaicompanion.codeRepositoryIndexes.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.DeleteCodeRepositoryIndex"
DeleteRepositoryGroup
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.DeleteRepositoryGroup
Audit log type : Data access
Permissions : cloudaicompanion.repositoryGroups.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.DeleteRepositoryGroup"
GetCodeRepositoryIndex
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.GetCodeRepositoryIndex
Audit log type : Data access
Permissions : cloudaicompanion.codeRepositoryIndexes.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.GetCodeRepositoryIndex"
GetRepositoryGroup
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.GetRepositoryGroup
Audit log type : Data access
Permissions : cloudaicompanion.repositoryGroups.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.GetRepositoryGroup"
ListCodeRepositoryIndexes
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.ListCodeRepositoryIndexes
Audit log type : Data access
Permissions : cloudaicompanion.codeRepositoryIndexes.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.ListCodeRepositoryIndexes"
ListRepositoryGroups
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.ListRepositoryGroups
Audit log type : Data access
Permissions : cloudaicompanion.repositoryGroups.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.ListRepositoryGroups"
UpdateCodeRepositoryIndex
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UpdateCodeRepositoryIndex
Audit log type : Admin activity
Permissions : cloudaicompanion.codeRepositoryIndexes.update - ADMIN_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UpdateCodeRepositoryIndex"
UpdateRepositoryGroup
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UpdateRepositoryGroup
Audit log type : Data access
Permissions : cloudaicompanion.repositoryGroups.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UpdateRepositoryGroup"
UseRepositoryGroup
Method : google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UseRepositoryGroup
Audit log type : Data access
Permissions : cloudaicompanion.repositoryGroups.use - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.CodeRepositoryIndexManagementService.UseRepositoryGroup"
google.cloud.cloudaicompanion.v1.EntitlementService
The following audit logs are associated with methods belonging to
google.cloud.cloudaicompanion.v1.EntitlementService .
CheckStatus
Method : google.cloud.cloudaicompanion.v1.EntitlementService.CheckStatus
Audit log type : Data access
Permissions : cloudaicompanion.entitlements.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.EntitlementService.CheckStatus"
google.cloud.cloudaicompanion.v1.MessageService
The following audit logs are associated with methods belonging to
google.cloud.cloudaicompanion.v1.MessageService .
EnumerateMessages
Method : google.cloud.cloudaicompanion.v1.MessageService.EnumerateMessages
Audit log type : Data access
Permissions : cloudaicompanion.topics.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.MessageService.EnumerateMessages"
google.cloud.cloudaicompanion.v1.TaskCompletionService
The following audit logs are associated with methods belonging to
google.cloud.cloudaicompanion.v1.TaskCompletionService .
CompleteTask
Method : google.cloud.cloudaicompanion.v1.TaskCompletionService.CompleteTask
Audit log type : Data access
Permissions : cloudaicompanion.instances.completeTask - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.TaskCompletionService.CompleteTask"
google.cloud.cloudaicompanion.v1.TextGenerationService
The following audit logs are associated with methods belonging to
google.cloud.cloudaicompanion.v1.TextGenerationService .
GenerateText
Method : google.cloud.cloudaicompanion.v1.TextGenerationService.GenerateText
Audit log type : Data access
Permissions : cloudaicompanion.instances.generateText - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.TextGenerationService.GenerateText"
google.cloud.cloudaicompanion.v1.TopicService
The following audit logs are associated with methods belonging to
google.cloud.cloudaicompanion.v1.TopicService .
CreateTopic
Method : google.cloud.cloudaicompanion.v1.TopicService.CreateTopic
Audit log type : Data access
Permissions : cloudaicompanion.topics.create - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.TopicService.CreateTopic"
DeleteTopic
Method : google.cloud.cloudaicompanion.v1.TopicService.DeleteTopic
Audit log type : Data access
Permissions : cloudaicompanion.topics.delete - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.TopicService.DeleteTopic"
FindReadableTopics
Method : google.cloud.cloudaicompanion.v1.TopicService.FindReadableTopics
Audit log type : Data access
Permissions : cloudaicompanion.topics.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.TopicService.FindReadableTopics"
GetTopic
Method : google.cloud.cloudaicompanion.v1.TopicService.GetTopic
Audit log type : Data access
Permissions : cloudaicompanion.topics.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.TopicService.GetTopic"
UpdateTopic
Method : google.cloud.cloudaicompanion.v1.TopicService.UpdateTopic
Audit log type : Data access
Permissions : cloudaicompanion.topics.update - DATA_WRITE
Method is a long-running or streaming operation :
Long-running operation
Filter for this method :
protoPayload.methodName="google.cloud.cloudaicompanion.v1.TopicService.UpdateTopic"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
