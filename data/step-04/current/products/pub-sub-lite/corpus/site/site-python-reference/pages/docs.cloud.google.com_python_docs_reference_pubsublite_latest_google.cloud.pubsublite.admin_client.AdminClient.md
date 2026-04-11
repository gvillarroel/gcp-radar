---
title: "Class AdminClient (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.admin_client.AdminClient
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsublite/latest/google.cloud.pubsublite.admin_client.AdminClient
  title: "Class AdminClient (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AdminClient (1.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.13.0 (latest)
1.12.0
1.11.1
1.10.0
1.9.0
1.8.3
1.7.0
1.6.0
1.5.0
1.4.3
1.3.0
1.2.0
1.1.4
1.0.2
0.6.1
0.5.0
0.4.1
0.3.0
0.2.0
0.1.0
AdminClient (
region : google . cloud . pubsublite . types . location . CloudRegion ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [ str ] = None ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
)
An admin client for Pub/Sub Lite. Only operates on a single region.
Methods
AdminClient
AdminClient (
region : google . cloud . pubsublite . types . location . CloudRegion ,
credentials : typing . Optional [ google . auth . credentials . Credentials ] = None ,
transport : typing . Optional [ str ] = None ,
client_options : typing . Optional [
google . api_core . client_options . ClientOptions
] = None ,
)
Create a new AdminClient.
create_reservation
create_reservation (
reservation : google . cloud . pubsublite_v1 . types . common . Reservation ,
) - > google . cloud . pubsublite_v1 . types . common . Reservation
Create a reservation, returns the created reservation.
create_subscription
create_subscription (
subscription : google . cloud . pubsublite_v1 . types . common . Subscription ,
target : typing . Union [
google . cloud . pubsublite . types . backlog_location . BacklogLocation ,
google . cloud . pubsublite . types . backlog_location . PublishTime ,
google . cloud . pubsublite . types . backlog_location . EventTime ,
] = BacklogLocation . END ,
starting_offset : typing . Optional [
google . cloud . pubsublite . types . backlog_location . BacklogLocation
] = None ,
) - > google . cloud . pubsublite_v1 . types . common . Subscription
Create a subscription, returns the created subscription. By default
a subscription will only receive messages published after the
subscription was created.
starting_offset is deprecated. Use target to initialize the
subscription to a target location within the message backlog instead.
starting_offset has higher precedence if target is also set.
A seek is initiated if the target location is a publish or event time.
If the seek fails, the created subscription is not deleted.
create_topic
create_topic (
topic : google . cloud . pubsublite_v1 . types . common . Topic ,
) - > google . cloud . pubsublite_v1 . types . common . Topic
Create a topic, returns the created topic.
delete_reservation
delete_reservation (
reservation_path : google . cloud . pubsublite . types . paths . ReservationPath ,
)
Delete a reservation and all associated messages.
delete_subscription
delete_subscription (
subscription_path : google . cloud . pubsublite . types . paths . SubscriptionPath ,
)
Delete a subscription and all associated messages.
delete_topic
delete_topic ( topic_path : google . cloud . pubsublite . types . paths . TopicPath )
Delete a topic and all associated messages.
get_reservation
get_reservation (
reservation_path : google . cloud . pubsublite . types . paths . ReservationPath ,
) - > google . cloud . pubsublite_v1 . types . common . Reservation
Get the reservation object from the server.
get_subscription
get_subscription (
subscription_path : google . cloud . pubsublite . types . paths . SubscriptionPath ,
) - > google . cloud . pubsublite_v1 . types . common . Subscription
Get the subscription object from the server.
get_topic
get_topic (
topic_path : google . cloud . pubsublite . types . paths . TopicPath ,
) - > google . cloud . pubsublite_v1 . types . common . Topic
Get the topic object from the server.
get_topic_partition_count
get_topic_partition_count (
topic_path : google . cloud . pubsublite . types . paths . TopicPath ,
) - > int
Get the number of partitions in the provided topic.
list_reservation_topics
list_reservation_topics (
reservation_path : google . cloud . pubsublite . types . paths . ReservationPath ,
) - > typing . List [ google . cloud . pubsublite . types . paths . TopicPath ]
List the subscriptions that exist for a given reservation.
list_reservations
list_reservations (
location_path : google . cloud . pubsublite . types . paths . LocationPath ,
) - > typing . List [ google . cloud . pubsublite_v1 . types . common . Reservation ]
List the Pub/Sub lite reservations that exist for a project in a given location.
list_subscriptions
list_subscriptions (
location_path : google . cloud . pubsublite . types . paths . LocationPath ,
) - > typing . List [ google . cloud . pubsublite_v1 . types . common . Subscription ]
List the Pub/Sub lite subscriptions that exist for a project in a given location.
list_topic_subscriptions
list_topic_subscriptions (
topic_path : google . cloud . pubsublite . types . paths . TopicPath ,
) - > typing . List [ google . cloud . pubsublite . types . paths . SubscriptionPath ]
List the subscriptions that exist for a given topic.
list_topics
list_topics (
location_path : google . cloud . pubsublite . types . paths . LocationPath ,
) - > typing . List [ google . cloud . pubsublite_v1 . types . common . Topic ]
List the Pub/Sub lite topics that exist for a project in a given location.
region
region () - > google . cloud . pubsublite . types . location . CloudRegion
The region this client is for.
seek_subscription
seek_subscription (
subscription_path : google . cloud . pubsublite . types . paths . SubscriptionPath ,
target : typing . Union [
google . cloud . pubsublite . types . backlog_location . BacklogLocation ,
google . cloud . pubsublite . types . backlog_location . PublishTime ,
google . cloud . pubsublite . types . backlog_location . EventTime ,
],
) - > google . api_core . operation . Operation
Initiate an out-of-band seek for a subscription to a specified target.
The seek target may be timestamps or named positions within the message
backlog See https://cloud.google.com/pubsub/lite/docs/seek for more
information.
Returns
Type
Description
google.api_core.operation.Operation with
result type: google.cloud.pubsublite.SeekSubscriptionResponse metadata type: google.cloud.pubsublite.OperationMetadata
update_reservation
update_reservation (
reservation : google . cloud . pubsublite_v1 . types . common . Reservation ,
update_mask : google . protobuf . field_mask_pb2 . FieldMask ,
) - > google . cloud . pubsublite_v1 . types . common . Reservation
Update the masked fields of the provided reservation.
update_subscription
update_subscription (
subscription : google . cloud . pubsublite_v1 . types . common . Subscription ,
update_mask : google . protobuf . field_mask_pb2 . FieldMask ,
) - > google . cloud . pubsublite_v1 . types . common . Subscription
Update the masked fields of the provided subscription.
update_topic
update_topic (
topic : google . cloud . pubsublite_v1 . types . common . Topic ,
update_mask : google . protobuf . field_mask_pb2 . FieldMask ,
) - > google . cloud . pubsublite_v1 . types . common . Topic
Update the masked fields of the provided topic.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
