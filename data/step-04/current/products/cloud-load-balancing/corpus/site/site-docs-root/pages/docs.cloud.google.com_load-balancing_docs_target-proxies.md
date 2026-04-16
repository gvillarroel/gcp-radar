---
title: "Target proxies overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/load-balancing/docs/target-proxies
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/load-balancing/docs
source_metadata:
  url: https://docs.cloud.google.com/load-balancing/docs/target-proxies
  title: "Target proxies overview \_|\_ Cloud Load Balancing \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Load Balancing
Guides
Send feedback
Target proxies overview
Stay organized with collections
Save and categorize content based on your preferences.
When you create an Application Load Balancer or a proxy Network Load Balancer, one of the
resources that you configure is the target proxy. Target proxies terminate
incoming connections from clients and create new connections from the load
balancer to the backends.
At a high-level, traffic is handled according to the following process:
A target proxy is referenced by one or more forwarding rules. The target
proxy listens on the IP address and port specified by the load balancer's
forwarding rule.
A client makes a connection to the IP address and port of the load balancer's
forwarding rule.
The target proxy receives the client request. It then compares the request's
destination IP address and port to the IP address and port configured in each
forwarding rule that references the target proxy. If a match is found, the
target proxy terminates the client's network connection.
Depending on the type of load balancer, target proxies terminate connections
by using either Google Front Ends
(GFEs) or
Envoy proxies .
The target proxy establishes a new connection to the appropriate backend VM
instance or endpoint, as determined by the load balancer's URL map
(applicable only to Application Load Balancers), TLS route (applicable only to
certain proxy Network Load Balancers), and backend service configuration.
Note: Target proxies are also used by
Cloud Service Mesh . This page only
discusses target proxies in the context of Cloud Load Balancing.
Target proxy types
Cloud Load Balancing uses different target proxies depending on the type
of load balancer that you configure.
Load balancer
Target proxy type
Target proxy scope
Target proxy reference
Global external Application Load Balancer
Target HTTP proxy
Target HTTPS proxy
Global
Target proxy references a URL map.
Classic Application Load Balancer
Target HTTP proxy
Target HTTPS proxy
Global
Target proxy references a URL map.
Regional external Application Load Balancer *
Target HTTP proxy Target HTTPS proxy
Regional
Target proxy references a URL map.
Cross-region internal Application Load Balancer *
Target HTTP proxy
Target HTTPS proxy
Global
Target proxy references a URL map.
Regional internal Application Load Balancer *
Target HTTP proxy
Target HTTPS proxy
Regional
Target proxy references a URL map.
Global external proxy Network Load Balancer
Target SSL proxy
Target TCP proxy
Global
Target proxy references a single backend service.
Classic proxy Network Load Balancer
Target SSL proxy
Target TCP proxy
Global
Target proxy references a single backend service.
Regional external proxy Network Load Balancer *
Target TCP proxy
Regional
Target proxy references either a single backend service or one or more
TLS routes.
Regional internal proxy Network Load Balancer *
Target TCP proxy
Regional
Target proxy references either a single backend service or one or more
TLS routes.
Cross-region internal proxy Network Load Balancer *
Target TCP proxy
Global
Target proxy references either a single backend service or one or more
TLS routes.
* This load balancer requires a proxy-only subnet in each
region of a VPC network in which you use an Envoy-based load
balancer. Connections to the backend originate from this proxy-only subnet.
Cloud Load Balancing supports the following resource combinations:
Forwarding rule > target HTTPS proxy > URL map >
one or more backend services
Forwarding rule > target HTTP proxy > URL map >
one or more backend services
Forwarding rule > target TCP proxy >
one backend service
Forwarding rule > target TCP proxy > one or more TLS routes >
one or more backend services
Forwarding rule > target SSL proxy >
one backend service
Health checks and backends are not shown in the preceding list.
SSL certificates
Google Cloud proxy load balancers whose forwarding rules reference a
target HTTPS proxy or target SSL proxy require a private key and SSL certificate
as part of the load balancer's target proxy configuration. Depending on the type
of load balancer you configure, you use either a Compute Engine SSL
certificate resource or Certificate Manager.
To learn about which SSL certificate is supported for your configuration, see
SSL certificates overview .
Optional features available
The following optional features can be configured on target proxies associated
with certain types of load balancers. See the topics for more details.
SSL policies
HTTP/3 support
Client HTTP keepalive timeout
Use target proxies
If you're using the Google Cloud console to set up a load balancer, the target proxy
is set up implicitly as part of your frontend configuration. If you're using the
Google Cloud CLI or the API, you need to configure the target proxy
explicitly.
You can't use the Google Cloud console to modify individual target proxies.
However, you can update certain settings for target proxies by editing the
frontend configuration of the load balancer they are associated with. Use either
the gcloud CLI or the API to make any other changes.
To delete a target proxy, make sure that you first delete any forwarding rules
that reference it.
APIs
For descriptions of the properties and methods available to you when
working with target proxies through the
REST API , see the following topics:
Target HTTPS proxy:
Global |
Regional
Target HTTP proxy:
Global |
Regional
Target TCP proxy:
Global |
Regional
Target SSL proxy:
Global
gcloud CLI
For the gcloud CLI reference
documentation, see the following topics:
gcloud compute target-https-proxies
gcloud compute target-http-proxies
gcloud compute target-tcp-proxies
gcloud compute target-ssl-proxies
What's next
To learn more about the proxy-only subnets used by Envoy-based load balancers,
see Proxy-only subnets for Envoy-based load
balancers .
To update the SSL certificate that your target proxy points to:
For self-managed SSL certificates: Replace or renew an SSL certificate
before it expires
For Google-managed SSL certificates: Replace an existing SSL
certificate
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
