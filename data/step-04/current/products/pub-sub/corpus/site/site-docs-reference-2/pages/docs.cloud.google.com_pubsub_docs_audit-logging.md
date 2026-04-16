---
title: "Pub/Sub audit logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/audit-logging
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/audit-logging
  title: "Pub/Sub audit logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
Pub/Sub audit logging
Stay organized with collections
Save and categorize content based on your preferences.
This document describes audit logging for Pub/Sub. Google Cloud services
generate audit logs that record administrative and access activities within your Google Cloud resources.
For more information about Cloud Audit Logs, see the following:
Types of audit logs
Audit log entry structure
Storing and routing audit logs
Cloud Logging pricing summary
Enable Data Access audit logs
Notes
Pub/Sub does not currently write Data Access audit logs for message operations, such as Publish, Subscribe, and Acknowledge.
Service name
Pub/Sub audit logs use the service name pubsub.googleapis.com .
Filter for this service:
protoPayload . serviceName = "pubsub.googleapis.com"
Methods by permission type
Each IAM permission has a type property, whose value is an enum
that can be one of four values: ADMIN_READ , ADMIN_WRITE ,
DATA_READ , or DATA_WRITE . When you call a method,
Pub/Sub generates an audit log whose category is dependent on the
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
google.iam.v1.IAMPolicy.GetIamPolicy google.pubsub.v1.SchemaService.GetSchema google.pubsub.v1.SchemaService.ListSchemaRevisions google.pubsub.v1.SchemaService.ListSchemas google.pubsub.v1.SchemaService.ValidateMessage google.pubsub.v1.SchemaService.ValidateSchema google.pubsub.v1.Subscriber.GetSnapshot google.pubsub.v1.Subscriber.ListSnapshots google.pubsub.v1.Subscriber.Seek
ADMIN_WRITE
google.iam.v1.IAMPolicy.SetIamPolicy google.pubsub.v1.Publisher.CreateTopic google.pubsub.v1.Publisher.DeleteTopic google.pubsub.v1.Publisher.DetachSubscription google.pubsub.v1.Publisher.UpdateTopic google.pubsub.v1.SchemaService.CommitSchema google.pubsub.v1.SchemaService.CreateSchema google.pubsub.v1.SchemaService.DeleteSchema google.pubsub.v1.SchemaService.DeleteSchemaRevision google.pubsub.v1.SchemaService.RollbackSchema google.pubsub.v1.Subscriber.CreateSnapshot google.pubsub.v1.Subscriber.CreateSubscription google.pubsub.v1.Subscriber.DeleteSnapshot google.pubsub.v1.Subscriber.DeleteSubscription google.pubsub.v1.Subscriber.ModifyPushConfig google.pubsub.v1.Subscriber.UpdateSnapshot google.pubsub.v1.Subscriber.UpdateSubscription
DATA_READ
google.pubsub.v1.Publisher.GetTopic google.pubsub.v1.Publisher.ListTopicSnapshots google.pubsub.v1.Publisher.ListTopicSubscriptions google.pubsub.v1.Publisher.ListTopics google.pubsub.v1.Subscriber.GetSubscription google.pubsub.v1.Subscriber.ListSubscriptions
API interface audit logs
For information about how and which permissions are evaluated for each method,
see the Identity and Access Management documentation for Pub/Sub.
google.iam.v1.IAMPolicy
The following audit logs are associated with methods belonging to
google.iam.v1.IAMPolicy .
GetIamPolicy
Method : google.iam.v1.IAMPolicy.GetIamPolicy
Audit log type : Data access
Permissions : pubsub.subscriptions.getIamPolicy - ADMIN_READ
pubsub.topics.getIamPolicy - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.iam.v1.IAMPolicy.GetIamPolicy"
SetIamPolicy
Method : google.iam.v1.IAMPolicy.SetIamPolicy
Audit log type : Admin activity
Permissions : pubsub.subscriptions.setIamPolicy - ADMIN_WRITE
pubsub.topics.setIamPolicy - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.iam.v1.IAMPolicy.SetIamPolicy"
google.pubsub.v1.Publisher
The following audit logs are associated with methods belonging to
google.pubsub.v1.Publisher .
CreateTopic
Method : google.pubsub.v1.Publisher.CreateTopic
Audit log type : Admin activity
Permissions : pubsub.topics.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.CreateTopic"
DeleteTopic
Method : google.pubsub.v1.Publisher.DeleteTopic
Audit log type : Admin activity
Permissions : pubsub.topics.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.DeleteTopic"
DetachSubscription
Method : google.pubsub.v1.Publisher.DetachSubscription
Audit log type : Admin activity
Permissions : pubsub.topics.detachSubscription - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.DetachSubscription"
GetTopic
Method : google.pubsub.v1.Publisher.GetTopic
Audit log type : Data access
Permissions : pubsub.topics.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.GetTopic"
ListTopicSnapshots
Method : google.pubsub.v1.Publisher.ListTopicSnapshots
Audit log type : Data access
Permissions : pubsub.topics.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.ListTopicSnapshots"
ListTopicSubscriptions
Method : google.pubsub.v1.Publisher.ListTopicSubscriptions
Audit log type : Data access
Permissions : pubsub.topics.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.ListTopicSubscriptions"
ListTopics
Method : google.pubsub.v1.Publisher.ListTopics
Audit log type : Data access
Permissions : pubsub.topics.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.ListTopics"
UpdateTopic
Method : google.pubsub.v1.Publisher.UpdateTopic
Audit log type : Admin activity
Permissions : pubsub.topics.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Publisher.UpdateTopic"
google.pubsub.v1.SchemaService
The following audit logs are associated with methods belonging to
google.pubsub.v1.SchemaService .
CommitSchema
Method : google.pubsub.v1.SchemaService.CommitSchema
Audit log type : Admin activity
Permissions : pubsub.schemas.commit - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.CommitSchema"
CreateSchema
Method : google.pubsub.v1.SchemaService.CreateSchema
Audit log type : Admin activity
Permissions : pubsub.schemas.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.CreateSchema"
DeleteSchema
Method : google.pubsub.v1.SchemaService.DeleteSchema
Audit log type : Admin activity
Permissions : pubsub.schemas.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.DeleteSchema"
DeleteSchemaRevision
Method : google.pubsub.v1.SchemaService.DeleteSchemaRevision
Audit log type : Admin activity
Permissions : pubsub.schemas.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.DeleteSchemaRevision"
GetSchema
Method : google.pubsub.v1.SchemaService.GetSchema
Audit log type : Data access
Permissions : pubsub.schemas.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.GetSchema"
ListSchemaRevisions
Method : google.pubsub.v1.SchemaService.ListSchemaRevisions
Audit log type : Data access
Permissions : pubsub.schemas.listRevisions - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.ListSchemaRevisions"
ListSchemas
Method : google.pubsub.v1.SchemaService.ListSchemas
Audit log type : Data access
Permissions : pubsub.schemas.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.ListSchemas"
RollbackSchema
Method : google.pubsub.v1.SchemaService.RollbackSchema
Audit log type : Admin activity
Permissions : pubsub.schemas.rollback - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.RollbackSchema"
ValidateMessage
Method : google.pubsub.v1.SchemaService.ValidateMessage
Audit log type : Data access
Permissions : pubsub.schemas.get - ADMIN_READ
pubsub.schemas.validate - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.ValidateMessage"
ValidateSchema
Method : google.pubsub.v1.SchemaService.ValidateSchema
Audit log type : Data access
Permissions : pubsub.schemas.validate - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.SchemaService.ValidateSchema"
google.pubsub.v1.Subscriber
The following audit logs are associated with methods belonging to
google.pubsub.v1.Subscriber .
CreateSnapshot
Method : google.pubsub.v1.Subscriber.CreateSnapshot
Audit log type : Admin activity
Permissions : pubsub.snapshots.create - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.CreateSnapshot"
CreateSubscription
Method : google.pubsub.v1.Subscriber.CreateSubscription
Audit log type : Admin activity
Permissions : pubsub.subscriptions.create - ADMIN_WRITE
pubsub.topics.attachSubscription - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.CreateSubscription"
DeleteSnapshot
Method : google.pubsub.v1.Subscriber.DeleteSnapshot
Audit log type : Admin activity
Permissions : pubsub.snapshots.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.DeleteSnapshot"
DeleteSubscription
Method : google.pubsub.v1.Subscriber.DeleteSubscription
Audit log type : Admin activity
Permissions : pubsub.subscriptions.delete - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.DeleteSubscription"
GetSnapshot
Method : google.pubsub.v1.Subscriber.GetSnapshot
Audit log type : Data access
Permissions : pubsub.snapshots.get - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.GetSnapshot"
GetSubscription
Method : google.pubsub.v1.Subscriber.GetSubscription
Audit log type : Data access
Permissions : pubsub.subscriptions.get - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.GetSubscription"
ListSnapshots
Method : google.pubsub.v1.Subscriber.ListSnapshots
Audit log type : Data access
Permissions : pubsub.snapshots.list - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.ListSnapshots"
ListSubscriptions
Method : google.pubsub.v1.Subscriber.ListSubscriptions
Audit log type : Data access
Permissions : pubsub.subscriptions.list - DATA_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.ListSubscriptions"
ModifyPushConfig
Method : google.pubsub.v1.Subscriber.ModifyPushConfig
Audit log type : Admin activity
Permissions : pubsub.subscriptions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.ModifyPushConfig"
Seek
Method : google.pubsub.v1.Subscriber.Seek
Audit log type : Data access
Permissions : pubsub.snapshots.seek - ADMIN_READ
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.Seek"
UpdateSnapshot
Method : google.pubsub.v1.Subscriber.UpdateSnapshot
Audit log type : Admin activity
Permissions : pubsub.snapshots.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.UpdateSnapshot"
UpdateSubscription
Method : google.pubsub.v1.Subscriber.UpdateSubscription
Audit log type : Admin activity
Permissions : pubsub.subscriptions.update - ADMIN_WRITE
Method is a long-running or streaming operation :
No.
Filter for this method :
protoPayload.methodName="google.pubsub.v1.Subscriber.UpdateSubscription"
System events
System Event audit logs are generated by GCP systems, not
direct user action. For more information, see
System Event audit logs .
Method Name
Filter For This Event
Notes
Internal.DeletedProjectRemoveSubscription
protoPayload.methodName="Internal.DeletedProjectRemoveSubscription"
Internal.DeletedProjectRemoveTopic
protoPayload.methodName="Internal.DeletedProjectRemoveTopic"
Subscriber.InternalExpireInactiveSnapshot
protoPayload.methodName="Subscriber.InternalExpireInactiveSnapshot"
Subscriber.InternalExpireInactiveSubscription
protoPayload.methodName="Subscriber.InternalExpireInactiveSubscription"
Methods that don't produce audit logs
A method might not produce audit logs for one or more of the following
reasons:
It is a high volume method involving significant log generation and storage
costs.
It has low auditing value.
Another audit or platform log already provides method coverage.
The following methods don't produce audit logs:
google.pubsub.v1.Publisher.Publish
google.pubsub.v1.Subscriber.Acknowledge
google.pubsub.v1.Subscriber.ModifyAckDeadline
google.pubsub.v1.Subscriber.Pull
google.pubsub.v1.Subscriber.StreamingPull
tech.pubsub.PublisherService.CreateTopic
tech.pubsub.PublisherService.DeleteTopic
tech.pubsub.PublisherService.GetTopic
tech.pubsub.PublisherService.ListTopics
tech.pubsub.PublisherService.Publish
tech.pubsub.PublisherService.PublishBatch
tech.pubsub.SubscriberService.Acknowledge
tech.pubsub.SubscriberService.CreateSubscription
tech.pubsub.SubscriberService.DeleteSubscription
tech.pubsub.SubscriberService.GetSubscription
tech.pubsub.SubscriberService.ListSubscriptions
tech.pubsub.SubscriberService.ModifyAckDeadline
tech.pubsub.SubscriberService.ModifyPushConfig
tech.pubsub.SubscriberService.Pull
tech.pubsub.SubscriberService.PullBatch
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
