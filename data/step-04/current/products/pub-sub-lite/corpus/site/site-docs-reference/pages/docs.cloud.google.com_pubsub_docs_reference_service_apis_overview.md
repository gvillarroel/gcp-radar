---
title: "Pub/Sub APIs overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/service_apis_overview
  title: "Pub/Sub APIs overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
Pub/Sub APIs overview
Stay organized with collections
Save and categorize content based on your preferences.
Pub/Sub surfaces JSON/HTTP interfaces (commonly associated with
RESTful systems) and gRPC interfaces.
If you don't want to use our
client libraries to access
the Pub/Sub API, you have
the option of writing your own client libraries that use its REST or gRPC API
surface. We recommend this approach only if your programming language or
other needs are not met by the provided client libraries.
gRPC interface
You can generate your own gRPC client libraries in any gRPC-supported language
for the Pub/Sub API from its .proto service definition using these
resources:
Pub/Sub service
definition :
The official Pub/Sub API .proto service definition.
gRPC documentation : Everything you need to
generate and use your own gRPC client code
RPC API Reference : Language-independent
overview of the RPC surface
JSON/HTTP interface
If you prefer working with the JSON/HTTP interface, you can use these resources:
Pub/Sub REST API reference : Provides a
detailed specification for available methods and resources.
Working with Google HTTP APIs :
Describes how Google APIs work with different HTTP versions and
implementations.
API Discovery
Service :
Exposes machine-readable metadata about the JSON/HTTP API surface, useful
for creating client libraries, tools, and plugins.
Directory of client samples
built with JSON/HTTP APIs and the Google API Discovery Service.
Caution: Resource names can contain some special
characters . Characters must be properly URL
encoded (and decoded) when
sent over HTTP.
About Pub/Sub endpoints
An endpoint, in the context of publish-subscribe messaging systems such as
Pub/Sub, refers to a location or address where a publisher client
can publish messages or where a subscriber client can receive messages.
Pub/Sub has three types of endpoints:
Global
Regional
Locational
Each of these endpoint types use a different value or pattern.
Note: In regions where quota increase requests have been
granted, shifting traffic among the different types of endpoints might result in
not immediately having access to all of the granted capacity.
Global endpoint
A global endpoint in Google Cloud provides a single access point for a service.
The global endpoint for Pub/Sub is https://pubsub.googleapis.com .
Note: When using a Message Storage Policy with enforce_in_transit set to
True , don't use the global endpoint ( pubsub.googleapis.com ). Requests to
the global endpoint are routed to the nearest Google Cloud region, which might
not be in your policy's allowed_persistence_regions , causing requests to fail
with a FAILED_PRECONDITION error.
Requests originating within Google Cloud
Examples of origins considered within Google Cloud include clients
running on Compute Engine or App Engine. Requests to the global endpoint
originating from within Google Cloud are routed to Pub/Sub
in the region where they originate.
In case Pub/Sub becomes unavailable in a region, requests
originating within the same Google Cloud region are not re-routed to a
different region.
Requests sent over Cloud Interconnect
Requests sent to the global endpoint over
Cloud Interconnect are routed just
like any other request originating in the region associated with the
interconnection.
Requests sent from outside of Google Cloud
Requests sent to the global endpoint from outside of Google Cloud are
routed to a nearby available region. The requests may be routed to a region
with insufficient project quota for the request type. The region is also not
guaranteed to be the closest geographically.
Regional endpoints
Requests sent to a regional endpoint are always routed to Pub/Sub
in the specified region.
Requests are never re-routed to other regions. The message storage policy must
include the target region to complete the request. This helps enforce strong
data residency.
For example, if you publish a Pub/Sub message to a topic through
an endpoint such as pubsub.us-central1.rep.googleapis.com , the publish
operation only succeeds if all of the following are true:
The topic has a message storage policy configured.
The message storage policy has enforce_in_transit set to true.
The message storage policy's allowed_persistence_regions list includes
us-central1 .
When to use regional endpoints
We recommend using regional endpoints as an alternative to the global one in the
following cases:
Applications that have strict data residency constraints, requiring data to
be processed in a specific region.
High volume applications running outside of Google Cloud that
require sufficient quota in all regions where traffic might be routed.
Applications where the publishers or subscribers run outside of
Google Cloud and are not geographically close to each other. In such
cases, you can reduce Google Cloud outbound message costs by
configuring the applications outside of Google Cloud to use the
regional endpoint corresponding to the region used by the application inside
of Google Cloud. If both publishers and subscribers are outside of
Google Cloud, configure them to use the same regional endpoint.
When publishing with ordering.
When subscribing with exactly-once delivery.
When the message storage policy has enforce_in_transit set to True .
Locational endpoints
Requests to a locational endpoint are almost always routed to
Pub/Sub in the specified region. However, it's important to
understand that locational endpoints don't provide strong data residency
(like regional endpoints do).
Although locational endpoints ensure the request enters Pub/Sub in
an allowed region, regional endpoints offer stricter assurance that all
processing remains within that region.
For example, a publish request to a locational endpoint might be routed to
Pub/Sub in another region if you have configured a message storage
policy that dictates that messages must be stored in a specific region.
If the region that corresponds to the locatational endpoint isn't allowed by
the message storage policy, but enforce_in_transit set to True , the
request fails with FAILED_PRECONDITION , rather than being routed to another
region.
When to use locational endpoints
We recommend using locational endpoints as an alternative to the global one in
the following cases:
High volume applications running outside of Google Cloud that
require sufficient quota in all regions where traffic might be routed.
Applications where the publishers or subscribers run outside of
Google Cloud and are not geographically close to each other. In such
cases, you can reduce Google Cloud outbound message costs by
configuring the applications outside of Google Cloud to use the
locational endpoint corresponding to the region used by the application
inside of Google Cloud. If both publishers and subscribers are outside
of Google Cloud, configure them to use the same locational endpoint.
When publishing with ordering.
When subscribing with exactly-once delivery.
When the message storage policy has enforce_in_transit set to True .
Choose an endpoint with data residency
If you need strict data residency and isolation ( enforceInTransit: True ), then
we recommended using a regional endpoint
( pubsub. REGION .rep.googleapis.com ) within
the allowed regions ( allowed_persistence_regions ).
Using endpoints
This section describes how to specify a Pub/Sub endpoint in your
client.
Set a locational endpoint override
You can set a locational endpoint override for any Pub/Sub
operation that calls a Pub/Sub endpoint (JSON/HTTP or gRPC).
gcloud
To set a locational endpoint override, use the
CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB environment variable with
the applicable gcloud pubsub ... command. The following example uses a
locational override to publish to a topic.
CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB = ENDPOINT_OVERRIDE \
gcloud pubsub topics publish TOPIC_ID \
-- message = ' MESSAGE_DATA '
Replace the following:
ENDPOINT_OVERRIDE : the locational endpoint override. Must
be an absolute URI that begins with https:// and ends with
a trailing / . For example, https://us-west1-pubsub.googleapis.com/ .
TOPIC_ID : the ID of the topic.
MESSAGE_DATA : a string with the message data.
You can also set the a global CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB
environment variable. If you do this, all your following Google Cloud CLI commands
use the override, without requiring you to prefix the command. For example:
export CLOUDSDK_API_ENDPOINT_OVERRIDES_PUBSUB = ENDPOINT_OVERRIDE
List of locational endpoints
To send requests directly to a locational endpoint, use the following
Pub/Sub endpoints:
Region
Endpoint
africa-south1
https://africa-south1-pubsub.googleapis.com
asia-east1
https://asia-east1-pubsub.googleapis.com
asia-east2
https://asia-east2-pubsub.googleapis.com
asia-northeast1
https://asia-northeast1-pubsub.googleapis.com
asia-northeast2
https://asia-northeast2-pubsub.googleapis.com
asia-northeast3
https://asia-northeast3-pubsub.googleapis.com
asia-south1
https://asia-south1-pubsub.googleapis.com
asia-south2
https://asia-south2-pubsub.googleapis.com
asia-southeast1
https://asia-southeast1-pubsub.googleapis.com
asia-southeast2
https://asia-southeast2-pubsub.googleapis.com
asia-southeast3
https://asia-southeast3-pubsub.googleapis.com
australia-southeast1
https://australia-southeast1-pubsub.googleapis.com
australia-southeast2
https://australia-southeast2-pubsub.googleapis.com
europe-central2
https://europe-central2-pubsub.googleapis.com
europe-north1
https://europe-north1-pubsub.googleapis.com
europe-north2
https://europe-north2-pubsub.googleapis.com
europe-southwest1
https://europe-southwest1-pubsub.googleapis.com
europe-west1
https://europe-west1-pubsub.googleapis.com
europe-west10
https://europe-west10-pubsub.googleapis.com
europe-west12
https://europe-west12-pubsub.googleapis.com
europe-west2
https://europe-west2-pubsub.googleapis.com
europe-west3
https://europe-west3-pubsub.googleapis.com
europe-west4
https://europe-west4-pubsub.googleapis.com
europe-west6
https://europe-west6-pubsub.googleapis.com
europe-west8
https://europe-west8-pubsub.googleapis.com
europe-west9
https://europe-west9-pubsub.googleapis.com
me-central1
https://me-central1-pubsub.googleapis.com
me-central2
https://me-central2-pubsub.googleapis.com
me-west1
https://me-west1-pubsub.googleapis.com
northamerica-northeast1
https://northamerica-northeast1-pubsub.googleapis.com
northamerica-northeast2
https://northamerica-northeast2-pubsub.googleapis.com
northamerica-south1
https://northamerica-south1-pubsub.googleapis.com
southamerica-east1
https://southamerica-east1-pubsub.googleapis.com
southamerica-west1
https://southamerica-west1-pubsub.googleapis.com
us-central1
https://us-central1-pubsub.googleapis.com
us-east1
https://us-east1-pubsub.googleapis.com
us-east4
https://us-east4-pubsub.googleapis.com
us-east5
https://us-east5-pubsub.googleapis.com
us-south1
https://us-south1-pubsub.googleapis.com
us-west1
https://us-west1-pubsub.googleapis.com
us-west2
https://us-west2-pubsub.googleapis.com
us-west3
https://us-west3-pubsub.googleapis.com
us-west4
https://us-west4-pubsub.googleapis.com
List of regional endpoints
To send requests directly to a regional endpoint, use the following
Pub/Sub endpoints:
Region
Endpoint
africa-south1
https://pubsub.africa-south1.rep.googleapis.com
asia-east1
https://pubsub.asia-east1.rep.googleapis.com
asia-east2
https://pubsub.asia-east2.rep.googleapis.com
asia-northeast1
https://pubsub.asia-northeast1.rep.googleapis.com
asia-northeast2
https://pubsub.asia-northeast2.rep.googleapis.com
asia-northeast3
https://pubsub.asia-northeast3.rep.googleapis.com
asia-south1
https://pubsub.asia-south1.rep.googleapis.com
asia-south2
https://pubsub.asia-south2.rep.googleapis.com
asia-southeast1
https://pubsub.asia-southeast1.rep.googleapis.com
asia-southeast2
https://pubsub.asia-southeast2.rep.googleapis.com
asia-southeast3
https://pubsub.asia-southeast3.rep.googleapis.com
australia-southeast1
https://pubsub.australia-southeast1.rep.googleapis.com
australia-southeast2
https://pubsub.australia-southeast2.rep.googleapis.com
europe-central2
https://pubsub.europe-central2.rep.googleapis.com
europe-north1
https://pubsub.europe-north1.rep.googleapis.com
europe-north2
https://pubsub.europe-north2.rep.googleapis.com
europe-southwest1
https://pubsub.europe-southwest1.rep.googleapis.com
europe-west1
https://pubsub.europe-west1.rep.googleapis.com
europe-west2
https://pubsub.europe-west2.rep.googleapis.com
europe-west3
https://pubsub.europe-west3.rep.googleapis.com
europe-west4
https://pubsub.europe-west4.rep.googleapis.com
europe-west6
https://pubsub.europe-west6.rep.googleapis.com
europe-west8
https://pubsub.europe-west8.rep.googleapis.com
europe-west9
https://pubsub.europe-west9.rep.googleapis.com
europe-west10
https://pubsub.europe-west10.rep.googleapis.com
europe-west12
https://pubsub.europe-west12.rep.googleapis.com
me-central1
https://pubsub.me-central1.rep.googleapis.com
me-central2
https://pubsub.me-central2.rep.googleapis.com
me-west1
https://pubsub.me-west1.rep.googleapis.com
northamerica-northeast1
https://pubsub.northamerica-northeast1.rep.googleapis.com
northamerica-northeast2
https://pubsub.northamerica-northeast2.rep.googleapis.com
northamerica-south1
https://pubsub.northamerica-south1.rep.googleapis.com
southamerica-east1
https://pubsub.southamerica-east1.rep.googleapis.com
southamerica-west1
https://pubsub.southamerica-west1.rep.googleapis.com
us-central1
https://pubsub.us-central1.rep.googleapis.com
us-east1
https://pubsub.us-east1.rep.googleapis.com
us-east4
https://pubsub.us-east4.rep.googleapis.com
us-east5
https://pubsub.us-east5.rep.googleapis.com
us-south1
https://pubsub.us-south1.rep.googleapis.com
us-west1
https://pubsub.us-west1.rep.googleapis.com
us-west2
https://pubsub.us-west2.rep.googleapis.com
us-west3
https://pubsub.us-west3.rep.googleapis.com
us-west4
https://pubsub.us-west4.rep.googleapis.com
us-west8
https://pubsub.us-west8.rep.googleapis.com
What's next
Pub/Sub REST reference
Pub/Sub RPC reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
