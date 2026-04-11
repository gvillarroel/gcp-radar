---
title: "Connecting to a Shared VPC network \_|\_ App Engine standard environment \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/php-gen2/runtime
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/connecting-shared-vpc
  title: "Connecting to a Shared VPC network \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Connecting to a Shared VPC network
Stay organized with collections
Save and categorize content based on your preferences.
If your organization uses Shared VPC , you can
connect App Engine standard environment services directly to your Shared VPC network
by using Serverless VPC Access .
This allows a standard environment service to access resources in your
Shared VPC network, such as Compute Engine VM instances,
Memorystore instances, and any other resources with an internal IP
address.
Serverless VPC Access connectors incur a monthly charge. For more information, see Serverless VPC Access
pricing .
If your organization does not use Shared VPC, see
Connect to a VPC network .
Comparison of configuration methods
For Shared VPC, Serverless VPC Access connectors can be
configured in two different ways. You can either set up connectors in each
service project that has standard environment resources that need access
to your network, or you can set up shared connectors in the host project. There
are advantages to each method.
Service projects
Advantages of creating connectors in the service projects:
Isolation: Each connector has dedicated bandwidth and is unaffected by
bandwidth use of connectors in other service projects. This is good if you
have a service that experiences spikes in traffic, or if you need to ensure
that each service project is unaffected by connector use of other service
projects.
Chargebacks: Charges incurred by connectors are associated with the
service project containing the connector. This enables easier chargebacks.
Security: Allows you to follow the "principle of least privilege."
Connectors must be granted access to the resources in your Shared VPC
network that they need to reach. By creating a connector in the service
project, you can limit what the services in the project can access by using
firewall rules.
Team independence: Reduces dependency on the host project administrator.
Teams can create and manage the connectors associated with their service
project. A user with the Compute Engine
Security Admin role or a
custom Identity and Access Management (IAM) role with the
compute.firewalls.create
permission enabled for the host project must still manage firewall rules for
the connector.
To set up connectors in service projects, see
Configure connectors in service projects .
Host project
Advantages of creating connectors in the host project:
Centralized network management: Aligns with the Shared VPC model
of centralizing network configuration resources in the host project.
IP address space: Preserves more of your IP address space. Connectors
require an IP address for
each instance, so having fewer connectors (and fewer instances in each
connector) uses fewer IP addresses. This is good if you are concerned about
running out of IP addresses.
Maintenance: Reduces maintenance, because each connector you create may
be used by multiple service projects. This is good if you are concerned
about maintenance overhead.
Cost for idle time: Can reduce the amount of connector idle time and
associated cost. Connectors incur costs even when they are not serving
traffic (see pricing ). Having fewer
connectors may reduce the amount of resource you pay for when not serving
traffic, depending on your connector type and number of instances. This is
often cost effective if your use case involves a large number of services, and
the services are used infrequently.
To set up connectors in the host project, see
Configure connectors in the host project .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
