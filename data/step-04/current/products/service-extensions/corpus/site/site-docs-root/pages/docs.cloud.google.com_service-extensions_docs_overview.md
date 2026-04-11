---
title: "Service Extensions overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/overview
  title: "Service Extensions overview \_|\_ Google Cloud Documentation"
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
Service Extensions overview
Stay organized with collections
Save and categorize content based on your preferences.
Service Extensions enables the users of Google Cloud products,
such as Cloud Load Balancing and Media CDN, to insert custom code
directly into the data path. This helps you customize the behavior of these
products to meet your business needs. This page provides a high-level overview
about Service Extensions.
Types of extensions
The data path in networking products, such as Cloud Load Balancing
and Media CDN, can be visualized as a pipeline of data processing
stages. Service Extensions lets you insert custom logic into one
or more of these stages.
Service Extensions offers two ways to insert custom logic:
plugins and callouts.
Plugins
Plugins let you insert custom code inline in the networking
data path. You build these plugins by using WebAssembly (Wasm)
and Proxy-Wasm ABI .
Plugins run as Wasm modules on a Google-managed sandbox infrastructure similar
to a serverless infrastructure. Plugins run on Google-managed compute. They
have restricted capability and strict runtime requirements .
They run close to the data plane, and latency optimization is managed.
The following figure shows how plugins work.
Plugins include custom logic inline (click to enlarge).
For more information about plugins, see Plugins overview .
Callouts
Callouts let you use Cloud Load Balancing to make Envoy gRPC calls to
Google services and user-managed services during data processing.
Callouts run as general-purpose gRPC servers on user-managed compute VMs,
on Google Kubernetes Engine (GKE) Pods on GKE Multi-Cloud,
or on on-premises environments. The following figure shows how callouts to
services work.
Callouts include custom logic from services
(click to enlarge).
Callouts have no runtime restrictions and can reuse existing software, as
required. With callouts, you can get the benefits of fully managed services
that are also customizable to meet the unique needs of specific workloads.
You only need to confirm the scalability and availability of your callout
service.
For more information about callouts, see Cloud Load Balancing callouts overview .
Cloud Load Balancing extensions
Service Extensions for Cloud Load Balancing
empowers users to add rich customization to the load balancing request and
response processing paths for supported Application Load Balancers .
For more information, see Cloud Load Balancing extensions overview .
Plugins
Service Extensions helps you use prepublished plugins for
your custom needs by adding them in the Cloud Load Balancing
processing path.
Use plugins with Cloud Load Balancing in the following sample scenarios:
Exception handling
Redirect clients to a custom error page for certain response classes.
Custom logging
Log user-defined headers or custom data into Cloud Logging.
Header addition
Create new headers relevant for your applications or specific customers.
Insert new headers for request and response.
Header manipulation
Rewrite existing request and response headers or override client headers
on their way to the backend or while responding to a client.
Security
Write custom security policies based on client request or response headers
and make enforcement decisions within your plugin.
Script injection
Rewrite HTML from the origin for Google reCAPTCHA integration or
Google Analytics tagging.
Influencing Cloud CDN
Manipulate HTTP request characteristics to influence custom caching dynamics
and determine which content gets served from the Cloud CDN cache.
Routing
Rewrite HTTP requests to influence backend service selection, allowing for
more advanced routing decisions at the edge.
Callouts to user-managed services
Service Extensions lets
supported Application Load Balancers
send a callout from the data processing path to backend services
managed by the user.
Use callouts with Cloud Load Balancing for the following:
When the amount of compute or storage is arbitrary
When you want to maintain state
When you want to use external services, such as
BigQuery or third-party applications hosted anywhere
Callouts are highly flexible and support a variety of customizations.
Some examples of everyday use cases follow:
Custom routing and traffic management
Perform HTTP or URL redirects.
Modify request attributes, such as headers or URLs, based on
application-specific logic to force the URL map to choose a different
backend service than originally targeted by the request.
Add, remove, or modify headers or rewrite URLs based on complex
application-specific logic before forwarding traffic to the backend service.
Implement custom session affinity or stickiness based on the specific
attributes of a request.
In Preview ,
implement dynamic forwarding ,
which maps tenants to endpoints programmatically.
Security and logging
Log custom information from payloads or custom headers to
Logging or a custom-made logging solution.
Use security tools or services, including custom user authentication and
authorization support.
Validate arbitrary headers and query parameters such as device IDs.
Log requests and responses to third-party logging solutions.
Implement custom user authentication and authorization.
Partner integration
Integrate security products, such as API Gateway security, BOT
management, or Web Application Firewall (WAF).
Authorization
Enrich the authorization decision-making process or further constrain the
authorization decisions from Google-provided built-in authorization engines.
Mix authorization decisions from multiple authorization systems.
Seamlessly integrate Google authorization engines with broader
authorization ecosystems and infrastructures, including external
policy engines.
For more information, see Cloud Load Balancing and Cloud CDN extensions overview .
Callouts to Google services
Service Extensions lets
supported Application Load Balancers
send a callout from the data processing path to selected Google services.
You can configure an extension to call Model Armor
to uniformly enforce security policies on inference traffic on application
load balancers, including GKE Inference Gateway .
For more information, see Integration with Google services .
GKE extensions
The Google Kubernetes Engine (GKE) Gateway supports using extensions to
add custom code into the load balancing processing path. You can use these
extensions to customize routing, modify request or response payloads, and
integrate with external services.
For more information, see
Customize GKE Gateway traffic routing using Service Extensions .
Media CDN extensions
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Media CDN provides many built-in
core capabilities to address the most common use cases for content delivery
networks (CDNs). Service Extensions helps you address
several requirements that are beyond these capabilities.
Important: To request access to Media CDN, contact your
Google Cloud sales representative or your account team.
For more information, see Media CDN extensions overview .
Plugins for Media CDN
Service Extensions helps you use prepublished plugins for
your custom needs by adding them in the Media CDN
processing path.
Some key use cases where you can use plugins with Media CDN
follow:
Customization
Rewrite request URLs.
Normalize header values to improve cache performance.
Security and logging
During live events, block users with pirated tokens.
Support custom user authentication and authorization.
Translate and implement custom URL signing.
Customize cache keys, application-specific headers, or device types.
Log custom variables to Cloud Logging.
Targeting and monetization
Improve conversions through A-B testing.
Implement custom ad targeting.
Offer trial usage models at no extra charge.
Partner integration
Implement video watermarking.
Optimize videos and images.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
