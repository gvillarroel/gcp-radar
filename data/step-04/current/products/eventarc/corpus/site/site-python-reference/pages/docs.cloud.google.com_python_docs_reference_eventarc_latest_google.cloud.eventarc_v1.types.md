---
title: "Package types (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/eventarc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/google.cloud.eventarc_v1.types
  title: "Package types (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (1.20.0)
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
API documentation for eventarc_v1.types package.
Classes
Channel
A representation of the Channel resource.
A Channel is a resource on which event providers publish their
events. The published events are delivered through the transport
associated with the channel. Note that a channel is associated
with exactly one event provider.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ChannelConnection
A representation of the ChannelConnection resource.
A ChannelConnection is a resource which event providers create
during the activation process to establish a connection between
the provider and the subscriber channel.
CloudRun
Represents a Cloud Run destination.
CreateChannelConnectionRequest
The request message for the CreateChannelConnection method.
CreateChannelRequest
The request message for the CreateChannel method.
CreateEnrollmentRequest
The request message for the CreateEnrollment method.
CreateGoogleApiSourceRequest
The request message for the CreateGoogleApiSource method.
CreateMessageBusRequest
The request message for the CreateMessageBus method.
CreatePipelineRequest
The request message for the CreatePipeline method.
CreateTriggerRequest
The request message for the CreateTrigger method.
DeleteChannelConnectionRequest
The request message for the DeleteChannelConnection method.
DeleteChannelRequest
The request message for the DeleteChannel method.
DeleteEnrollmentRequest
The request message for the DeleteEnrollment method.
DeleteGoogleApiSourceRequest
The request message for the DeleteGoogleApiSource method.
DeleteMessageBusRequest
The request message for the DeleteMessageBus method.
DeletePipelineRequest
The request message for the DeletePipeline method.
DeleteTriggerRequest
The request message for the DeleteTrigger method.
Destination
Represents a target of an invocation over HTTP.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Enrollment
An enrollment represents a subscription for messages on a
particular message bus. It defines a matching criteria for
messages on the bus and the subscriber endpoint where matched
messages should be delivered.
EventFilter
Filters events based on exact matches on the CloudEvents
attributes.
EventType
A representation of the event type resource.
FilteringAttribute
A representation of the FilteringAttribute resource.
Filtering attributes are per event type.
GKE
Represents a GKE destination.
GetChannelConnectionRequest
The request message for the GetChannelConnection method.
GetChannelRequest
The request message for the GetChannel method.
GetEnrollmentRequest
The request message for the GetEnrollment method.
GetGoogleApiSourceRequest
The request message for the GetGoogleApiSource method.
GetGoogleChannelConfigRequest
The request message for the GetGoogleChannelConfig method.
GetMessageBusRequest
The request message for the GetMessageBus method.
GetPipelineRequest
The request message for the GetPipeline method.
GetProviderRequest
The request message for the GetProvider method.
GetTriggerRequest
The request message for the GetTrigger method.
GoogleApiSource
A GoogleApiSource represents a subscription of 1P events from
a MessageBus.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
GoogleChannelConfig
A GoogleChannelConfig is a resource that stores the custom
settings respected by Eventarc first-party triggers in the
matching region. Once configured, first-party event data will be
protected using the specified custom managed encryption key
instead of Google-managed encryption keys.
HttpEndpoint
Represents a HTTP endpoint destination.
ListChannelConnectionsRequest
The request message for the ListChannelConnections method.
ListChannelConnectionsResponse
The response message for the ListChannelConnections method.
ListChannelsRequest
The request message for the ListChannels method.
ListChannelsResponse
The response message for the ListChannels method.
ListEnrollmentsRequest
The request message for the ListEnrollments method.
ListEnrollmentsResponse
The response message for the ListEnrollments method.
ListGoogleApiSourcesRequest
The request message for the ListGoogleApiSources method.
ListGoogleApiSourcesResponse
The response message for the ListGoogleApiSources method.
ListMessageBusEnrollmentsRequest
The request message for the ListMessageBusEnrollments method.
ListMessageBusEnrollmentsResponse
The response message for the ListMessageBusEnrollments method.`
ListMessageBusesRequest
The request message for the ListMessageBuses method.
ListMessageBusesResponse
The response message for the ListMessageBuses method.
ListPipelinesRequest
The request message for the ListPipelines method.
ListPipelinesResponse
The response message for the ListPipelines method.
ListProvidersRequest
The request message for the ListProviders method.
ListProvidersResponse
The response message for the ListProviders method.
ListTriggersRequest
The request message for the ListTriggers method.
ListTriggersResponse
The response message for the ListTriggers method.
LoggingConfig
The configuration for Platform Telemetry logging for Eventarc
Advanced resources.
MessageBus
MessageBus for the messages flowing through the system. The
admin has visibility and control over the messages being
published and consumed and can restrict publishers and
subscribers to only a subset of data available in the system by
defining authorization policies.
NetworkConfig
Network Configuration that can be inherited by other protos.
OperationMetadata
Represents the metadata of the long-running operation.
Pipeline
A representation of the Pipeline resource.
Provider
A representation of the Provider resource.
Pubsub
Represents a Pub/Sub transport.
StateCondition
A condition that is part of the trigger state computation.
Transport
Represents the transport intermediaries created for the
trigger to deliver events.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Trigger
A representation of the trigger resource.
UpdateChannelRequest
The request message for the UpdateChannel method.
UpdateEnrollmentRequest
The request message for the UpdateEnrollment method.
UpdateGoogleApiSourceRequest
The request message for the UpdateGoogleApiSource method.
UpdateGoogleChannelConfigRequest
The request message for the UpdateGoogleChannelConfig method.
UpdateMessageBusRequest
The request message for the UpdateMessageBus method.
UpdatePipelineRequest
The request message for the UpdatePipeline method.
UpdateTriggerRequest
The request message for the UpdateTrigger method.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
