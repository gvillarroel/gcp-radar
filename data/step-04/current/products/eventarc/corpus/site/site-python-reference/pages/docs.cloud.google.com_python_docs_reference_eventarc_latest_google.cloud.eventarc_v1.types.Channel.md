---
title: "Class Channel (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.types.Channel
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/eventarc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.types.Channel
  title: "Class Channel (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Channel (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.3
1.14.0
1.13.2
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.0
1.6.3
1.5.1
1.4.2
1.3.0
1.2.1
1.1.0
1.0.2
0.2.4
0.1.0
Channel ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A representation of the Channel resource.
A Channel is a resource on which event providers publish their
events. The published events are delivered through the transport
associated with the channel. Note that a channel is associated
with exactly one event provider.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
name
str
Required. The resource name of the channel. Must be unique
within the location on the project and must be in
projects/{project}/locations/{location}/channels/{channel_id}
format.
uid
str
Output only. Server assigned unique
identifier for the channel. The value is a UUID4
string and guaranteed to remain unchanged until
the resource is deleted.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The creation time.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The last-modified time.
provider
str
The name of the event provider (e.g. Eventarc SaaS partner)
associated with the channel. This provider will be granted
permissions to publish events to the channel. Format:
projects/{project}/locations/{location}/providers/{provider_id} .
pubsub_topic
str
Output only. The name of the Pub/Sub topic created and
managed by Eventarc system as a transport for the event
delivery. Format: projects/{project}/topics/{topic_id} .
This field is a member of oneof _ transport .
state
google.cloud.eventarc_v1.types.Channel.State
Output only. The state of a Channel.
activation_token
str
Output only. The activation token for the
channel. The token must be used by the provider
to register the channel for publishing.
crypto_key_name
str
Optional. Resource name of a KMS crypto key (managed by the
user) used to encrypt/decrypt their event data.
It must match the pattern
projects/*/locations/*/keyRings/*/cryptoKeys/* .
satisfies_pzs
bool
Output only. Whether or not this Channel
satisfies the requirements of physical zone
separation
labels
MutableMapping[str, str]
Optional. Resource labels.
Classes
LabelsEntry
LabelsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The abstract base class for a message.
Parameters
Name
Description
kwargs
dict
Keys and values corresponding to the fields of the message.
mapping
Union[dict, .Message ]
A dictionary or message to be used to determine the values for this message.
ignore_unknown_fields
Optional(bool)
If True, do not raise errors for unknown fields. Only applied if mapping is a mapping type or there are keyword parameters.
State
State ( value )
State lists all the possible states of a Channel
1. The SaaS provider disconnected from this
Channel.
2. The Channel activation token has expired but
the SaaS provider wasn't connected.
To re-establish a Connection with a provider,
the subscriber should create a new Channel and
give it to the provider.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
