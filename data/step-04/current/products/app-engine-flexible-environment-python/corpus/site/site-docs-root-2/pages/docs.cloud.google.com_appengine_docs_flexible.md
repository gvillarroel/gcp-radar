---
title: "App Engine flexible environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/python/runtime
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible
  title: "App Engine flexible environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
App Engine flexible environment
Stay organized with collections
Save and categorize content based on your preferences.
App Engine allows developers to focus on what they do best: writing code. Based
on Compute Engine , the App Engine flexible environment
automatically scales your app up and down while also balancing the load.
Runtimes
You can customize these runtimes or provide your own runtime by supplying a
custom Docker image or Dockerfile from the open source community.
Go
Java
Node.js
PHP
Python
Ruby
.NET
Custom runtimes
Features
Customizable infrastructure - App Engine flexible environment instances
are Compute Engine virtual machines, which means that you can take
advantage of custom libraries, use SSH for debugging, and deploy your own
Docker containers.
Performance options - Take advantage of a wide array of CPU and memory
configurations. You can specify how much CPU and memory each instance of your
application needs, and the App Engine flexible environment provisions the necessary
infrastructure for you.
Native feature support - Features such as microservices, authorization,
SQL and NoSQL databases, traffic splitting, logging, versioning, security
scanning, and content delivery networks are natively supported.
Managed virtual machines - App Engine manages your virtual machines,
ensuring that:
Instances are health-checked, healed as necessary, and co-located with other
services within the project.
Critical, backwards compatible updates are automatically applied to the
underlying operating system.
VM instances are automatically located by geographical region according to
the settings in your project. Google's management services ensure that all
of a project's VM instances are co-located for optimal performance.
All flexible instances may be restarted on a weekly basis if there are
updates available. This schedule is not guaranteed. During restarts,
Google's management services apply any necessary operating system and
security updates.
You always have root access to Compute Engine VM instances. SSH access to VM
instances in the App Engine flexible environment is disabled by default. If you choose,
you can enable root access to your app's VM instances.
Auto scaling - App Engine automatically scales your application
based on incoming load.
App Engine respects any Compute Engine VM reservations that you
already have in a region that match your configuration. Having a VM
reservation increases the likelihood that you will receive a resource
allocation during a
temporary resource shortage .
Learn about the
differences between the standard environment and the flexible environment .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
App Engine performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try App Engine free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
