---
title: "Class Message (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.message.Message
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.subscriber.message.Message
  title: "Class Message (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Message (2.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
2.27.3
2.26.1
2.25.2
2.23.1
2.22.0
2.21.5
2.20.3
2.19.8
2.18.4
2.17.1
2.16.1
2.15.2
2.14.1
2.13.12
2.12.1
2.11.1
2.10.0
2.9.0
2.8.0
2.7.1
2.6.1
2.5.0
2.4.2
2.3.0
2.2.0
2.1.0
2.0.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.1
1.2.0
1.1.0
1.0.2
0.45.0
0.44.0
0.43.0
Message ( message : types . PubsubMessage . _meta . _pb , ack_id : str , delivery_attempt : int , request_queue : queue . Queue , exactly_once_delivery_enabled_func : typing . Callable [[], bool ] = < function Message . < lambda >> )
A representation of a single Pub/Sub message.
The common way to interact with
.pubsub_v1.subscriber.message.Message objects is to receive
them in callbacks on subscriptions; most users should never have a need
to instantiate them by hand. (The exception to this is if you are
implementing a custom subclass to
.pubsub_v1.subscriber._consumer.Consumer .)
Attributes
Name
Description
message_id
:noindex:
str
The message ID. In general, you should not need to use this directly.
data
:noindex:
bytes
The data in the message. Note that this will be a bytes ,
not a text string.
attributes
:noindex:
MutableMapping[str, str]
The attributes sent along with the message. See attributes for more
information on this type.
publish_time
:noindex:
google.protobuf.timestamp_pb2.Timestamp
The time that this message was originally published.
opentelemetry_data
:noindex:
google.cloud.pubsub_v1.open_telemetry.subscribe_opentelemetry.SubscribeOpenTelemetry
Open Telemetry data associated with this message. None if Open Telemetry is not enabled.
Properties
ack_id
the ID used to ack the message.
attributes
Return the attributes of the underlying Pub/Sub Message.
Warning:
A ScalarMap behaves slightly differently than a
dict . For a Pub / Sub message this is a string->string map.
When trying to access a value via map['key'] , if the key is
not in the map, then the default value for the string type will
be returned, which is an empty string. It may be more intuitive
to just cast the map to a dict or to one use map.get .
Returns
Type
Description
containers.ScalarMap
The message's attributes. This is a dict -like object provided by google.protobuf .
data
Return the data for the underlying Pub/Sub Message.
Returns
Type
Description
bytes
The message data. This is always a bytestring; if you want a text string, call bytes.decode .
delivery_attempt
The delivery attempt counter is 1 + (the sum of number of NACKs
and number of ack_deadline exceeds) for this message. It is set to None
if a DeadLetterPolicy is not set on the subscription.
A NACK is any call to ModifyAckDeadline with a 0 deadline. An ack_deadline
exceeds event is whenever a message is not acknowledged within
ack_deadline. Note that ack_deadline is initially
Subscription.ackDeadlineSeconds, but may get extended automatically by
the client library.
The first delivery of a given message will have this value as 1. The value
is calculated at best effort and is approximate.
Returns
Type
Description
Optional[int]
The delivery attempt counter or None .
ordering_key
The ordering key used to publish the message.
publish_time
Return the time that the message was originally published.
Returns
Type
Description
datetime.datetime
The date and time that the message was published.
size
Return the size of the underlying message, in bytes.
Methods
Message
Message ( message : types . PubsubMessage . _meta . _pb , ack_id : str , delivery_attempt : int , request_queue : queue . Queue , exactly_once_delivery_enabled_func : typing . Callable [[], bool ] = < function Message . < lambda >> )
Construct the Message.
Note:
This class should not be constructed directly; it is the
responsibility of BasePolicy subclasses to do so.
Parameters
Name
Description
message
types.PubsubMessage._meta._pb
The message received from Pub/Sub. For performance reasons it should be the raw protobuf message normally wrapped by pubsub_v1.types.PubsubMessage . A raw message can be obtained from a pubsub_v1.types.PubsubMessage instance through the latter's ._pb attribute.
ack_id
str
The ack_id received from Pub/Sub.
delivery_attempt
int
The delivery attempt counter received from Pub/Sub if a DeadLetterPolicy is set on the subscription, and zero otherwise.
request_queue
queue.Queue
A queue provided by the policy that can accept requests; the policy is responsible for handling those requests.
exactly_once_delivery_enabled_func
Callable[[], bool]
A Callable that returns whether exactly-once delivery is currently-enabled. Defaults to a lambda that always returns False.
ack
ack () - > None
Acknowledge the given message.
Acknowledging a message in Pub/Sub means that you are done
with it, and it will not be delivered to this subscription again.
You should avoid acknowledging messages until you have
finished processing them, so that in the event of a failure,
you receive the message again.
Warning:
Acks in Pub/Sub are best effort. You should always
ensure that your processing code is idempotent, as you may
receive any given message more than once. If you need strong
guarantees about acks and re-deliveres, enable exactly-once
delivery on your subscription and use the ack_with_response
method instead. Exactly once delivery is a preview feature.
For more details, see:
https://cloud.google.com/pubsub/docs/exactly-once-delivery ."
ack_with_response
ack_with_response () - > google . cloud . pubsub_v1 . subscriber . futures . Future
Acknowledge the given message.
Acknowledging a message in Pub/Sub means that you are done
with it, and it will not be delivered to this subscription again.
You should avoid acknowledging messages until you have
finished processing them, so that in the event of a failure,
you receive the message again.
If exactly-once delivery is NOT enabled on the subscription, the
future returns immediately with an AcknowledgeStatus.SUCCESS.
Since acks in Cloud Pub/Sub are best effort when exactly-once
delivery is disabled, the message may be re-delivered. Because
re-deliveries are possible, you should ensure that your processing
code is idempotent, as you may receive any given message more than
once.
If exactly-once delivery is enabled on the subscription, the
future returned by this method tracks the state of acknowledgement
operation. If the future completes successfully, the message is
guaranteed NOT to be re-delivered. Otherwise, the future will
contain an exception with more details about the failure and the
message may be re-delivered.
Exactly once delivery is a preview feature. For more details,
see https://cloud.google.com/pubsub/docs/exactly-once-delivery ."
Returns
Type
Description
futures.Future
A Future instance that conforms to Python Standard library's concurrent.futures.Future interface (but not an instance of that class). Call result() to get the result of the operation; upon success, a pubsub_v1.subscriber.exceptions.AcknowledgeStatus.SUCCESS will be returned and upon an error, an pubsub_v1.subscriber.exceptions.AcknowledgeError exception will be thrown.
drop
drop () - > None
Release the message from lease management.
This informs the policy to no longer hold on to the lease for this
message. Pub/Sub will re-deliver the message if it is not acknowledged
before the existing lease expires.
Warning:
For most use cases, the only reason to drop a message from
lease management is on ack or nack ; this library
automatically drop()s the message on ack or nack . You probably
do not want to call this method directly.
modify_ack_deadline
modify_ack_deadline ( seconds : int ) - > None
Resets the deadline for acknowledgement.
New deadline will be the given value of seconds from now.
The default implementation handles automatically modacking received messages for you;
you should not need to manually deal with setting ack deadlines. The exception case is
if you are implementing your own custom subclass of
.pubsub_v1.subcriber._consumer.Consumer .
Parameter
Name
Description
seconds
int
The number of seconds to set the lease deadline to. This should be between 0 and 600. Due to network latency, values below 10 are advised against.
modify_ack_deadline_with_response
modify_ack_deadline_with_response (
seconds : int ,
) - > google . cloud . pubsub_v1 . subscriber . futures . Future
Resets the deadline for acknowledgement and returns the response
status via a future.
New deadline will be the given value of seconds from now.
The default implementation handles automatically modacking received messages for you;
you should not need to manually deal with setting ack deadlines. The exception case is
if you are implementing your own custom subclass of
.pubsub_v1.subcriber._consumer.Consumer .
If exactly-once delivery is NOT enabled on the subscription, the
future returns immediately with an AcknowledgeStatus.SUCCESS.
Since modify-ack-deadline operations in Cloud Pub/Sub are best effort
when exactly-once delivery is disabled, the message may be re-delivered
within the set deadline.
If exactly-once delivery is enabled on the subscription, the
future returned by this method tracks the state of the
modify-ack-deadline operation. If the future completes successfully,
the message is guaranteed NOT to be re-delivered within the new deadline.
Otherwise, the future will contain an exception with more details about
the failure and the message will be redelivered according to its
currently-set ack deadline.
Exactly once delivery is a preview feature. For more details,
see https://cloud.google.com/pubsub/docs/exactly-once-delivery ."
Parameter
Name
Description
seconds
int
The number of seconds to set the lease deadline to. This should be between 0 and 600. Due to network latency, values below 10 are advised against.
Returns
Type
Description
futures.Future
A Future instance that conforms to Python Standard library's concurrent.futures.Future interface (but not an instance of that class). Call result() to get the result of the operation; upon success, a pubsub_v1.subscriber.exceptions.AcknowledgeStatus.SUCCESS will be returned and upon an error, an pubsub_v1.subscriber.exceptions.AcknowledgeError exception will be thrown.
nack
nack () - > None
Decline to acknowledge the given message.
This will cause the message to be re-delivered to subscribers. Re-deliveries
may take place immediately or after a delay, and may arrive at this subscriber
or another.
nack_with_response
nack_with_response () - > google . cloud . pubsub_v1 . subscriber . futures . Future
Decline to acknowledge the given message, returning the response status via
a future.
This will cause the message to be re-delivered to subscribers. Re-deliveries
may take place immediately or after a delay, and may arrive at this subscriber
or another.
If exactly-once delivery is NOT enabled on the subscription, the
future returns immediately with an AcknowledgeStatus.SUCCESS.
If exactly-once delivery is enabled on the subscription, the
future returned by this method tracks the state of the
nack operation. If the future completes successfully,
the future's result will be an AcknowledgeStatus.SUCCESS.
Otherwise, the future will contain an exception with more details about
the failure.
Exactly once delivery is a preview feature. For more details,
see https://cloud.google.com/pubsub/docs/exactly-once-delivery ."
Returns
Type
Description
futures.Future
A Future instance that conforms to Python Standard library's concurrent.futures.Future interface (but not an instance of that class). Call result() to get the result of the operation; upon success, a pubsub_v1.subscriber.exceptions.AcknowledgeStatus.SUCCESS will be returned and upon an error, an pubsub_v1.subscriber.exceptions.AcknowledgeError exception will be thrown.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
