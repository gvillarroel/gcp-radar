---
title: "Media CDN extensions overview \_|\_ Service Extensions \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/create-plugin
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/media-cdn-extensions-overview
  title: "Media CDN extensions overview \_|\_ Service Extensions \_|\_ Google Cloud\
    \ Documentation"
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
Media CDN extensions overview
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Service Extensions lets you use extensions to insert custom
code in the Media CDN processing path.
This page provides an overview about Media CDN extensions.
Media CDN provides many built-in core capabilities to address
the most common use cases for content delivery networks (CDNs). You might have
requirements beyond these capabilities. For example, you might need to
normalize headers to improve caching, use a custom URL signing algorithm, or
port legacy behavior from an existing CDN to Media CDN.
Service Extensions helps you add
custom code for lightweight compute use cases in
the request and response processing paths by using plugins .
Plugins can access and manipulate HTTP request and response
headers and then serve synthetic responses. Plugins can also perform
additional actions such as HTTP redirects and URL rewrites.
As Figure 1 shows, with Service Extensions, you can use plugins
to place custom code that implements specific actions at the edge,
in front of the cache in the Media CDN processing path.
Figure 1. Media CDN uses plugins
to add custom code to the processing path (click to enlarge).
Important: To request access to Media CDN, contact your
Google Cloud sales representative or your account team.
How Media CDN plugins work
On the Media CDN request path, plugins run after route
matching and Google Cloud Armor edge security policies but before cache key
calculation and the addition of custom headers to the origin.
On the response path, plugins run after content is served from cache, allowing
for cached content to be manipulated.
Note: Media CDN doesn't support callouts or HTTP body callbacks.
What's next
Create a plugin
Attach a plugin to a Media CDN route
See the Service Extensions overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
