---
title: "Interface AdminClient (1.16.2) \_|\_ Java client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.AdminClient
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-pubsublite/latest/com.google.cloud.pubsublite.AdminClient
  title: "Interface AdminClient (1.16.2) \_|\_ Java client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface AdminClient (1.16.2)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.2 (latest)
1.16.1
1.15.21
1.14.8
1.13.8
1.12.22
1.11.2
1.10.0
1.9.4
1.8.0
1.7.1
1.6.3
1.5.5
1.4.12
public interface AdminClient extends ApiBackgroundResource
A client for performing Pub/Sub Lite admin operations.
Implements
ApiBackgroundResource
Static Methods
create(AdminClientSettings settings)
public static AdminClient create ( AdminClientSettings settings )
Parameter
Name
Description
settings
AdminClientSettings
Returns
Type
Description
AdminClient
Exceptions
Type
Description
ApiException
Methods
createReservation(Reservation reservation)
public abstract ApiFuture<Reservation> createReservation ( Reservation reservation )
Create the provided reservation if it does not yet exist.
Parameter
Name
Description
reservation
Reservation The reservation to create.
Returns
Type
Description
ApiFuture < Reservation >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the reservation on success.
createSubscription(Subscription subscription)
public default ApiFuture<Subscription> createSubscription ( Subscription subscription )
Create the provided subscription if it does not yet exist.
By default, a new subscription will only receive messages published after the subscription
was created.
Parameter
Name
Description
subscription
Subscription The subscription to create.
Returns
Type
Description
ApiFuture < Subscription >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the subscription on success.
createSubscription(Subscription subscription, BacklogLocation startingOffset)
public abstract ApiFuture<Subscription> createSubscription ( Subscription subscription , BacklogLocation startingOffset )
Create the provided subscription at the given starting offset if it does not yet exist.
Parameters
Name
Description
subscription
Subscription The subscription to create.
startingOffset
BacklogLocation The offset at which the new subscription will start receiving messages.
Returns
Type
Description
ApiFuture < Subscription >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the subscription on success.
createSubscription(Subscription subscription, SeekTarget target)
public abstract ApiFuture<Subscription> createSubscription ( Subscription subscription , SeekTarget target )
Create the provided subscription at the given target location within the message backlog, if it
does not yet exist.
A seek is initiated if the target location is a publish or event time. If the seek fails,
the created subscription is not deleted.
Parameters
Name
Description
subscription
Subscription The subscription to create.
target
SeekTarget The target location that the subscription should be initialized to.
Returns
Type
Description
ApiFuture < Subscription >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the subscription on success.
createTopic(Topic topic)
public abstract ApiFuture<Topic> createTopic ( Topic topic )
Create the provided topic if it does not yet exist.
Parameter
Name
Description
topic
Topic The topic to create.
Returns
Type
Description
ApiFuture < Topic >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the topic on success.
deleteReservation(ReservationPath path)
public abstract ApiFuture<Void> deleteReservation ( ReservationPath path )
Delete the reservation with id id if it exists.
Parameter
Name
Description
path
ReservationPath The path of the reservation to retrieve.
Returns
Type
Description
ApiFuture < Void >
A future that will have either an error com.google.api.gax.rpc.ApiException or
void on success. Deleting nonexistent reservations will cause the future to have an
exception with status com.google.api.gax.rpc.StatusCode.Code#NOT_FOUND
deleteSubscription(SubscriptionPath path)
public abstract ApiFuture<Void> deleteSubscription ( SubscriptionPath path )
Delete the subscription with id id if it exists.
Parameter
Name
Description
path
SubscriptionPath The path of the subscription to retrieve.
Returns
Type
Description
ApiFuture < Void >
A future that will have either an error com.google.api.gax.rpc.ApiException or
void on success. Deleting nonexistent subscriptions will cause the future to have an
exception with status com.google.api.gax.rpc.StatusCode.Code#NOT_FOUND
deleteTopic(TopicPath path)
public abstract ApiFuture<Void> deleteTopic ( TopicPath path )
Delete the topic with id id if it exists.
Parameter
Name
Description
path
TopicPath The path of the topic to retrieve.
Returns
Type
Description
ApiFuture < Void >
A future that will have either an error com.google.api.gax.rpc.ApiException or
void on success. Deleting nonexistent topics will cause the future to have an exception
with status com.google.api.gax.rpc.StatusCode.Code#NOT_FOUND
getReservation(ReservationPath path)
public abstract ApiFuture<Reservation> getReservation ( ReservationPath path )
Get the reservation with id id if it exists.
Parameter
Name
Description
path
ReservationPath The path of the reservation to retrieve.
Returns
Type
Description
ApiFuture < Reservation >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the reservation on success.
getSubscription(SubscriptionPath path)
public abstract ApiFuture<Subscription> getSubscription ( SubscriptionPath path )
Get the subscription with id id if it exists.
Parameter
Name
Description
path
SubscriptionPath The path of the subscription to retrieve.
Returns
Type
Description
ApiFuture < Subscription >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the subscription on success.
getTopic(TopicPath path)
public abstract ApiFuture<Topic> getTopic ( TopicPath path )
Get the topic with id id if it exists.
Parameter
Name
Description
path
TopicPath The path of the topic to retrieve.
Returns
Type
Description
ApiFuture < Topic >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the topic on success.
getTopicPartitionCount(TopicPath path)
public abstract ApiFuture<Long> getTopicPartitionCount ( TopicPath path )
Get the partitioning info for the topic with id id if it exists.
Parameter
Name
Description
path
TopicPath The path of the topic to retrieve.
Returns
Type
Description
ApiFuture < Long >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the number of topic partitions on success.
listReservationTopics(ReservationPath path)
public abstract ApiFuture<List<TopicPath> > listReservationTopics ( ReservationPath path )
Get the list of topics for the reservation with id id if it exists.
Parameter
Name
Description
path
ReservationPath The path of the reservation to retrieve.
Returns
Type
Description
ApiFuture < List < TopicPath >>
A future that will have either an error com.google.api.gax.rpc.ApiException or
the list of topics on success.
listReservations(LocationPath path)
public abstract ApiFuture<List<Reservation> > listReservations ( LocationPath path )
List all reservations for the specified project.
Parameter
Name
Description
path
LocationPath The path of the project to list reservations for.
Returns
Type
Description
ApiFuture < List < Reservation >>
A future that will have either an error com.google.api.gax.rpc.ApiException or
the list of reservation paths on success.
listSubscriptions(LocationPath path)
public abstract ApiFuture<List<Subscription> > listSubscriptions ( LocationPath path )
List all subscriptions for the specified project.
Parameter
Name
Description
path
LocationPath The path of the project to list subscriptions for.
Returns
Type
Description
ApiFuture < List < Subscription >>
A future that will have either an error com.google.api.gax.rpc.ApiException or
the list of subscription paths on success.
listTopicSubscriptions(TopicPath path)
public abstract ApiFuture<List<SubscriptionPath> > listTopicSubscriptions ( TopicPath path )
Get the list of subscriptions for the topic with id id if it exists.
Parameter
Name
Description
path
TopicPath The path of the topic to retrieve.
Returns
Type
Description
ApiFuture < List < SubscriptionPath >>
A future that will have either an error com.google.api.gax.rpc.ApiException or
the list of subscriptions on success.
listTopics(LocationPath path)
public abstract ApiFuture<List<Topic> > listTopics ( LocationPath path )
List all topics for the specified project.
Parameter
Name
Description
path
LocationPath The path of the project to list topics for.
Returns
Type
Description
ApiFuture < List < Topic >>
A future that will have either an error com.google.api.gax.rpc.ApiException or
the list of topic paths on success.
region()
public abstract CloudRegion region ()
The Google Cloud region this client operates on.
Returns
Type
Description
CloudRegion
seekSubscription(SubscriptionPath path, SeekTarget target)
public abstract OperationFuture<SeekSubscriptionResponse , OperationMetadata > seekSubscription ( SubscriptionPath path , SeekTarget target )
Initiate an out-of-band seek for a subscription to a specified target, which may be timestamps
or named positions within the message backlog.
See https://cloud.google.com/pubsub/lite/docs/seek for more information.
Parameters
Name
Description
path
SubscriptionPath The path of the subscription to seek.
target
SeekTarget The location to seek to.
Returns
Type
Description
OperationFuture < SeekSubscriptionResponse , OperationMetadata >
A com.google.api.gax.longrunning.OperationFuture that returns an operation name
if the seek was successfully initiated, or otherwise throw an com.google.api.gax.rpc.ApiException . com.google.api.gax.longrunning.OperationFuture#get() will return a response if the seek
operation completes successfully, or otherwise throw an com.google.api.gax.rpc.ApiException .
updateReservation(Reservation reservation, FieldMask mask)
public abstract ApiFuture<Reservation> updateReservation ( Reservation reservation , FieldMask mask )
Update the reservation with path reservation.getPath() if it exists.
Parameters
Name
Description
reservation
Reservation The reservation to update.
mask
FieldMask The mask indicating which fields should be updated.
Returns
Type
Description
ApiFuture < Reservation >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the resulting reservation on success. Updating nonexistent reservations will cause the
future to have an exception with status com.google.api.gax.rpc.StatusCode.Code#NOT_FOUND
updateSubscription(Subscription subscription, FieldMask mask)
public abstract ApiFuture<Subscription> updateSubscription ( Subscription subscription , FieldMask mask )
Update the subscription with path subscription.getPath() if it exists.
Parameters
Name
Description
subscription
Subscription The subscription to update.
mask
FieldMask The mask indicating which fields should be updated.
Returns
Type
Description
ApiFuture < Subscription >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the resulting subscription on success. Updating nonexistent subscriptions will cause the
future to have an exception with status com.google.api.gax.rpc.StatusCode.Code#NOT_FOUND
updateTopic(Topic topic, FieldMask mask)
public abstract ApiFuture<Topic> updateTopic ( Topic topic , FieldMask mask )
Update the topic with path topic.getPath() if it exists.
Parameters
Name
Description
topic
Topic The topic to update.
mask
FieldMask The mask indicating which fields should be updated.
Returns
Type
Description
ApiFuture < Topic >
A future that will have either an error com.google.api.gax.rpc.ApiException or
the resulting topic on success. Updating nonexistent topics will cause the future to have
an exception with status com.google.api.gax.rpc.StatusCode.Code#NOT_FOUND
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-14 UTC."],[],[]]
