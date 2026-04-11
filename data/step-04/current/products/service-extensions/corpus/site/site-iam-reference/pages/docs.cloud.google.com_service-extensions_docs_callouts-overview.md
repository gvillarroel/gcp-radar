---
title: "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/callouts-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/callouts-overview
  title: "Cloud Load Balancing callouts overview \_|\_ Service Extensions \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Guides
Send feedback
Cloud Load Balancing callouts overview
Stay organized with collections
Save and categorize content based on your preferences.
Service Extensions lets you instruct
supported Application Load Balancers
to send a callout from the load balancing data path to user-managed callout
services or Google services.
Callouts data flow
A load balancer communicates with a callout by using one of the following
Envoy gRPC protocols:
The External Processing or ext_proc protocol.
This protocol is supported for route, traffic, and authorization extensions
and is used by default.
The ext_proc protocol lets the extension service respond to events in the
lifecycle of an HTTP request by examining and modifying the headers or the
body of the request.
The External Authorization or ext_authz protocol.
This protocol is supported only for
authorization extensions .
Support for ext_authz is in Preview .
The ext_authz protocol delegates authorization decisions for incoming
requests to an external, independent service. This API lets the extension
service respond to events in the lifecycle of an HTTP request for complex
authorization decision by examining the headers or metadata of the request.
You can specify this protocol with the wireFormat option when you
configure an authorization extension .
You can deploy these extension services on virtual machine (VM) instances or on
GKE and configure an instance group or network endpoint group
(NEG) to represent the endpoints for these services.
The following diagram shows how you can deploy the callout backend service
with a gRPC server on a user-managed compute resource, such as a VM instance or
Google Kubernetes Engine (GKE) cluster, and represent it to the load balancer as a
regular backend service.
Application Load Balancers send
Service Extensions callouts to callout backend services (click to enlarge).
How callouts work with ext_proc
An abbreviated version of the ext_proc gRPC API is as follows.
// The gRPC API to be implemented by the external processing server
service ExternalProcessor {
rpc Process ( stream ProcessingRequest ) returns ( stream ProcessingResponse ) {
}
}
// Envoy sets one of these fields depending on the processing stage.
message ProcessingRequest {
oneof request {
HttpHeaders request_headers = 2 ;
HttpHeaders response_headers = 3 ;
HttpBody request_body = 4 ;
HttpBody response_body = 5 ;
}
}
message ProcessingResponse {
oneof response {
HeadersResponse request_headers = 1 ;
HeadersResponse response_headers = 2 ;
BodyResponse request_body = 3 ;
BodyResponse response_body = 4 ;
ImmediateResponse immediate_response = 7 ;
}
}
After receiving the headers for an HTTP request, the load balancer sends the
ProcessingRequest message to the extension service with the request_headers
field set to the HTTP headers from the client.
The extension service must respond to the ProcessingRequest message with a
corresponding ProcessingResponse message that contains any configured changes
to the headers or body of the ProcessingRequest message. Alternatively, the
service can set the immediate_response field to make the load balancer end
request processing and send the specified response back to the client.
For REQUEST_HEADER and RESPONSE_HEADER events, the extension service can
manipulate the HTTP headers in the request or response. The service can add,
modify, or delete headers by setting the request_headers or response_headers
field in the ProcessingResponse message appropriately. Use the raw_value
field for headers.
Traffic extensions allow changing the headers and the body of both requests and
responses. The extension server can override the processing mode dynamically
and allow it to enable or disable the extension for subsequent phases of request
processing. Load balancers don't reevaluate route rules after calling a traffic
extension.
Edge, authorization, and route extensions support only HTTP headers. These
extensions can't inspect or mutate HTTP bodies.
For route and traffic extensions, callouts can execute asynchronously when
observabilityMode for the extension is set to true and the body processing mode
is STREAMED (default). Calls to the extension backend are performed
asynchronously, without pausing the processing of the ongoing request.
Responses, if any, are ignored.
How callouts work with ext_authz
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The ext_authz API supports only authorization callout extensions.
An abbreviated version of the API is as follows.
// A generic interface for performing authorization checks on incoming
// requests to a networked service.
service Authorization {
// Performs an authorization check based on the attributes associated with
// the incoming request and return status.
rpc Check ( CheckRequest ) returns ( CheckResponse ) {
}
}
message CheckRequest {
// The request attributes.
AttributeContext attributes = 1 ;
}
message CheckResponse {
google . rpc . Status status = 1 ;
oneof http_response {
DeniedHttpResponse denied_response = 2 ;
OkHttpResponse ok_response = 3 ;
}
google . protobuf . Struct dynamic_metadata = 4 ;
}
After receiving the headers for an HTTP request, the load balancer sends the
CheckRequest message to the extension service.
The extension service must respond to the CheckRequest message with a
corresponding CheckResponse message that contains the following information:
status : indicates the status. OK indicates that the
request is allowed. Any other status indicates that the request is denied.
denied_response or ok_response : indicates whether the response is
allowed or denied. This field is accompanied by the related HTTP response
attributes for an authorization check.
The ok_response field is used when the authorization service allows
the request. The service can modify, add, or remove any original request
headers and update HTTP response headers that are sent to the client.
Use the raw_value field for headers.
The denied_response field is used when the authorization service
denies the request. The service can update HTTP response headers that
are sent to the client.
If the extension service returns a disallowed header name or value through
the CheckResponse message, the request is rejected with the
500 Internal Error status code. For information about disallowed headers,
see Limitations with header manipulation .
dynamic_metadata : includes optional metadata for use by any extensions
that are called after the authorization extension, such as traffic
extensions.
Body processing modes
For extensions that support body processing, you can configure one of the
following two send modes for request and response body processing by setting
the value of the request_body_send_mode or response_body_send_mode fields,
respectively.
The default mode is STREAMED , which is recommended for most use cases.
Mode
Description
Supported events required
Extensions supported
STREAMED
Calls are executed in the streaming mode. This default setting is
also used if the mode isn't set.
The proxy sends body chunks to the extension service and expects a
single response per chunk. The extension can send modified chunks back,
acknowledge chunks without any changes, or delete chunks.
The proxy sends only a limited amount of data at a time. So, the
extension service must acknowledge chunks as soon as possible.
Although the body mode can't be changed dynamically, an advanced
extension server can dynamically select the future HTTP events to receive.
By returning the ext_proc mode_override option
during a headers request, a callout server can enable or disable
future headers, body, or trailers events.
Must include REQUEST_BODY for requests or
RESPONSE_BODY for responses.
Traffic extensions (for both requests and responses).
FULL_DUPLEX_STREAMED
Calls are executed in the full duplex mode.
The proxy sends chunks as they arrive and doesn't buffer them. Because
there is no buffering, the proxy is less sensitive to extension latency.
The proxy can receive as many reply chunks as needed. Reply chunks are
disconnected from the chunks that the proxy sends. Subsequent chunks are
sent for processing as they arrive at the proxy, without waiting for the
previous chunks and events to be fully processed.
The extension can freely buffer, modify, and rechunk the body
contents. If the extension doesn't send the body contents back, the
next extension in the chain receives an empty body.
The ext_proc mode_override option isn't
applicable, and the mode can't be changed dynamically.
Warning: The proxy fail-opens up to the first chunk of body
data being processed. That means that fail-open handles any issue that's
related to connecting to the extension or handling headers, but errors
after this point are fail-closed and propagated to the end user.
Must include REQUEST_BODY and REQUEST_TRAILERS
for requests or RESPONSE_BODY and RESPONSE_TRAILERS
for responses.
Traffic extensions (for both requests and responses).
Route extensions (for requests).
Supported backends for user-managed callout backend services
You can host user-managed callout extensions on a backend service that uses one
of the following types of backends that run Envoy gRPC services:
All managed and unmanaged instance group backends
All zonal NEGs
All hybrid connectivity NEGs
Private Service Connect NEGs pointing to VPC services
Serverless NEGs pointing to Cloud Run services
Note: When hosting the extension on Cloud Run, the
Cloud Run service must listen on a plaintext gRPC port. The
Cloud Run service must be
configured to accept HTTP/2 traffic and
must allow unauthenticated access .
Recommended optimizations for callouts
Integrating an extension into the load balancing processing path incurs
additional latency for requests and responses. Each type of data that the
extension service processes—including request headers, request body,
response headers, and response body, as applicable—adds latency.
Consider the following optimizations to minimize the latency:
Deploy callouts in the same zones as the regular destination backend service
for the load balancer. When using a cross-region internal Application Load Balancer, place
the extension service backends in the same region as the load balancer's
proxy-only subnets.
When using a global external Application Load Balancer, place the callout
service backends in the geographic regions where the regular load balancer's
destination VMs, GKE workloads, and
Cloud Run functions are located.
When possible, configure the extension to process only the data that you
need. For example, to modify only request headers for route and traffic
extensions, set the supported_events field in the extension to
REQUEST_HEADERS .
Limitations
This section lists some limitations with callouts.
Limitations with header manipulation
You can't change some headers. The following are the limitations with header
manipulation:
Header manipulation isn't supported for the following headers:
X-user-IP
CDN-Loop
Headers starting with X-Forwarded , X-Google , X-GFE , or X-Amz-
connection
keep-alive
transfer-encoding , te
upgrade
proxy-connection , proxy-authenticate , proxy-authorization
trailers
For traffic and authorization extensions, header manipulation is also not
supported for these: :method , :authority , :scheme , or host headers.
When a gRPC server specifies header values in
HeaderMutation ,
the load balancer ignores the value field.
Limitations with body processing
The following are the limitations with HTTP/1.1 clients and backends with
regard to the message body, which is applicable for ext_proc but not ext_authz .
When you configure either REQUEST_BODY or RESPONSE_BODY for an
extension, if the load balancer receives a matching request, it removes the
Content-Length header from the response and switches to chunked body
encoding.
While streaming a message body to the ext_proc server, at the end, the
load balancer might send a tailing ProcessingRequest message with an empty
body with end_stream set to true to indicate that the stream has ended.
Other limitations
The following are limitations with gRPC response messages:
The maximum size of a response message is 128 kB. If a message
received is over this limit, the stream is closed with a
RESOURCE_EXHAUSTED error.
The callout backend service can't use Cloud Armor,
IAP, or Cloud CDN policies.
The callout backend service must use HTTP/2 as the protocol.
For authorization extensions, the load balancer doesn't forward
any request body to the callout backend service.
For route extensions, the callout backend service can't override the
processing mode of the ext_proc stream.
What's next
Configure a user-managed callout backend service
A callout backend service is a prerequisite to configuring route,
authorization, and user-managed traffic extensions by using callouts.
Configure an authorization extension
Configure a route extension
Configure a traffic extension
Configure an extension to call a Google service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
