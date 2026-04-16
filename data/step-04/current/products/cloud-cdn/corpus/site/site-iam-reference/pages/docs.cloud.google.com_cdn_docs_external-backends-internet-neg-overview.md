---
title: "External backends specified by using internet NEGs \_|\_ Cloud CDN \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/external-backends-internet-neg-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/invalidating-cached-content
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/external-backends-internet-neg-overview
  title: "External backends specified by using internet NEGs \_|\_ Cloud CDN \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud CDN
Guides
Send feedback
External backends specified by using internet NEGs
Stay organized with collections
Save and categorize content based on your preferences.
Use external backends (also called custom origins ) for Cloud CDN
(Content Delivery Network) when content is hosted on-premises or in another
cloud, and you want to deliver the content over Google's high
performance ,
distributed edge caching infrastructure.
Terminology
The following terms are sometimes used interchangeably because they have
the same or similar meanings:
external backend: A backend that resides outside of Google Cloud and is
reachable across the internet. The endpoint in an internet NEG.
internet network endpoint group (NEG): The Google Cloud API resource that you
use to specify an external backend.
external endpoint: Same as an external backend .
To maintain consistency with the load balancing
documentation ,
this document uses the term external backend except when referring to the
internet NEG API resource.
Supported backend types for Cloud CDN
Cloud CDN works with an external Application Load Balancer
to deliver content to your users. The external Application Load Balancer provides the frontend
IP addresses and ports that receive requests. Cloud CDN content can
be sourced from various types of backends:
Instance groups
Zonal network endpoint groups
(NEGs)
Serverless NEGs : One or
more App Engine , Cloud Run ,
or Cloud Run functions services
Internet NEGs for
external backends
Buckets in Cloud Storage
External backends can be hosted within an on-premises infrastructure or origins
provided by third-party providers. The following sections discuss external
backends in more detail.
Hybrid and multi-cloud architectures
As you move your services to Google Cloud, you might need to do so in
phases. Sometimes certain content can't immediately be moved to a cloud
environment and might need to stay on-premises. In other cases, the content
might be hosted in another cloud. Cloud CDN support
for external backends lets you use Google's
globally distributed edge caching infrastructure for such
content.
Hybrid and multi-cloud architecture
In the diagram, images content resides in Google Cloud, while video
resides in a Tokyo data center, which could be on-premises or in another cloud.
With external backends, origins in the Tokyo data center can be
the backend source of the video content with Cloud CDN and the
external Application Load Balancer delivering the content to users.
Using URL maps , this deployment can
direct origin pull requests for video traffic to the external backend in Tokyo.
This mapping is determined based on request URL: /video .
For images (determined based on request URL: /images ), content is sourced
from Google Cloud and is delivered by the Cloud CDN edge
infrastructure.
Note: Cloud CDN supports fetching content from a single external backend for
a service. It does not provide load balancing among multiple external backends for
a service, nor does it load balance between an external backend and a
Google Cloud backend.
Specifying an external backend
Similar to configuring Cloud CDN with your endpoints deployed in
Google Cloud, you can use the network endpoint groups (NEGs)
API to add your
server as the external backend for Cloud CDN.
To specify the external backend, use an internet NEG. An internet NEG
has one of the endpoint types shown in the following table.
Endpoint address
Type
Definition
When to use
Hostname and an optional port
INTERNET_FQDN_PORT
A publicly resolvable fully qualified domain name (FQDN), and an
optional port, for example backend.example.com:443 (default ports:
80 for HTTP and 443 for HTTPS)
Use this endpoint when your external backend can be resolved
by using an FQDN with public DNS.
IP address and an optional port
INTERNET_IP_PORT
A publicly accessible IP address and an optional port, for example
192.0.2.8 or 192.0.2.8:443 (default ports:
80 for HTTP and 443 for HTTPS)
Use this endpoint to specify a publicly accessible IP address and
a port to connect to.
The best practice is to create the internet NEG with the INTERNET_FQDN_PORT
endpoint type and an FQDN value as an origin hostname value. This insulates the
Cloud CDN configuration from IP address changes in the origin
infrastructure. Network endpoints that are defined by using FQDNs are resolved
through public DNS. Make sure that the configured FQDN is resolvable through
Google Public DNS .
After you create the internet NEG, the type cannot be changed between
INTERNET_FQDN_PORT and INTERNET_IP_PORT . You need to create a new internet
NEG and change your backend service to use the new internet NEG.
When using an external backend that expects a particular value for the HTTP
request's Host header, you must configure the backend service to set the
Host header to that expected value. If you don't configure a user-defined
request header, a backend service preserves the Host header that the client
used to connect to the Google Cloud external Application Load Balancer. For general
information about custom headers, see
Create custom headers in backend services .
For a specific example, see Setting up Cloud CDN with an external
backend .
Using external backends and Google Cloud-based origins
The following figure shows an internet NEG used to deploy an external backend
with an external Application Load Balancer and Cloud CDN.
Cloud CDN with external backends
What's next
To set up an external backend, see Set up an external backend with an internet NEG .
To learn about what content is cached, see Caching overview .
To resolve issues, see Troubleshooting external backend and internet NEG
issues .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
