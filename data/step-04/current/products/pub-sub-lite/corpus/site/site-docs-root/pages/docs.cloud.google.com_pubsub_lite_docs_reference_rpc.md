---
title: "Pub/Sub Lite API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rpc
  title: "Pub/Sub Lite API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Send feedback
Pub/Sub Lite API
Stay organized with collections
Save and categorize content based on your preferences.
Service: pubsublite.googleapis.com
A regional
service name, https:// REGION_NAME -pubsublite.googleapis.com , is
needed to create RPC client stubs.
google.cloud.pubsublite.v1.AdminService
Methods
CreateReservation
Creates a new reservation.
CreateSubscription
Creates a new subscription.
CreateTopic
Creates a new topic.
DeleteReservation
Deletes the specified reservation.
DeleteSubscription
Deletes the specified subscription.
DeleteTopic
Deletes the specified topic.
GetReservation
Returns the reservation configuration.
GetSubscription
Returns the subscription configuration.
GetTopic
Returns the topic configuration.
GetTopicPartitions
Returns the partition information for the requested topic.
ListReservationTopics
Lists the topics attached to the specified reservation.
ListReservations
Returns the list of reservations for the given project.
ListSubscriptions
Returns the list of subscriptions for the given project.
ListTopicSubscriptions
Lists the subscriptions attached to the specified topic.
ListTopics
Returns the list of topics for the given project.
SeekSubscription
Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog.
UpdateReservation
Updates properties of the specified reservation.
UpdateSubscription
Updates properties of the specified subscription.
UpdateTopic
Updates properties of the specified topic.
google.cloud.pubsublite.v1.CursorService
Methods
CommitCursor
Updates the committed cursor.
ListPartitionCursors
Returns all committed cursor information for a subscription.
StreamingCommitCursor
Establishes a stream with the server for managing committed cursors.
google.cloud.pubsublite.v1.KafkaService
Methods
OpenKafkaStream
Request made when opening a new kafka stream.
google.cloud.pubsublite.v1.PartitionAssignmentService
Methods
AssignPartitions
Assign partitions for this client to handle for the specified subscription.
google.cloud.pubsublite.v1.PublisherService
Methods
Publish
Establishes a stream with the server for publishing messages.
google.cloud.pubsublite.v1.SubscriberService
Methods
Subscribe
Establishes a stream with the server for receiving messages.
google.cloud.pubsublite.v1.TopicStatsService
Methods
ComputeHeadCursor
Compute the head cursor for the partition.
ComputeMessageStats
Compute statistics about a range of messages in a given topic and partition.
ComputeTimeCursor
Compute the corresponding cursor for a publish or event time in a topic partition.
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
