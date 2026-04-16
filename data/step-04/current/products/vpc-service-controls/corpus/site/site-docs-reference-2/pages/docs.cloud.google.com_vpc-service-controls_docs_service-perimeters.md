---
title: "Service perimeter details and configuration \_|\_ VPC Service Controls \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/service-perimeters
  title: "Service perimeter details and configuration \_|\_ VPC Service Controls \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Service perimeter details and configuration
Stay organized with collections
Save and categorize content based on your preferences.
This page describes service perimeters and includes the
high-level steps for configuring perimeters .
About service perimeters
This section provides details about the way service perimeters function, and
the differences between enforced and dry run perimeters.
To protect Google Cloud services in your projects and mitigate the risk of data
exfiltration, you can specify service perimeters at the project or VPC network
level. For more information about the benefits of service perimeters, see
Overview of VPC Service Controls .
Also, the services that are accessible inside a perimeter, such as
from VMs in a VPC network that is hosted inside a perimeter, can be restricted
using the VPC accessible services feature.
You can configure VPC Service Controls perimeters in enforced or
dry run mode. The same configuration steps apply to both enforced and dry
run perimeters. The difference is that dry run perimeters log violations as
though the perimeters are enforced but don't prevent access to restricted
services.
Enforced mode
Enforced mode is the default mode for service perimeters. When a service
perimeter is enforced, requests that violate the perimeter policy, such as
requests to restricted services from outside a perimeter, are denied.
A perimeter in enforced mode protects Google Cloud resources by enforcing
the perimeter boundary for the services restricted in the perimeter configuration.
API requests to restricted services do not cross the perimeter boundary unless
the conditions of the necessary ingress and egress rules
of the perimeter are satisfied. An enforced perimeter protects against data
exfiltration risks, such as stolen credentials, misconfigured permissions, or
malicious insiders that have access to the projects.
Dry run mode
In dry run mode, requests that violate the perimeter policy are not denied but
only logged. Dry run service perimeters are used to test perimeter
configuration and to monitor usage of services without preventing access to
resources. The following are some of the common use cases:
Determining the impact when you change existing service perimeters.
Previewing the impact when you add new service perimeters.
Monitoring requests to restricted services that originate from outside a
service perimeter. For example, to identify from where requests to a given
service are coming from or to identify unexpected service usage in your
organization.
Creating a perimeter architecture in your development environment that is
analogous to your production environment. You can identify and mitigate any
issues caused by your service perimeters before submitting changes to your
production environment.
For more information, see Dry run mode .
Service perimeter configuration stages
To configure VPC Service Controls, you can use the Google Cloud console,
the gcloud command-line tool , and the Access Context Manager APIs .
You can configure VPC Service Controls as described in the following high-level steps:
Create an access policy.
Secure Google-managed resources with service perimeters.
Set up VPC accessible services to add additional restrictions to how
services can be used inside your perimeters (optional).
Set up private connectivity from a VPC network (optional).
Allow context-aware access from outside a service perimeter using ingress
rules (optional).
Configure secure data exchange using ingress and egress rules (optional).
Create an access policy
An access policy collects the service perimeters and access levels you create
for your organization. An organization can have one access policy for the entire
organization and multiple scoped access policies for the folders and projects.
You can use the Google Cloud console, the gcloud command-line tool , or the Access Context Manager APIs to create an access policy .
To learn more about Access Context Manager and access policies, read the
overview of Access Context Manager .
Secure Google-managed resources with service perimeters
Service perimeters are used to protect services used by projects in your
organization. After identifying the projects and services you want to protect,
create one or more service perimeters .
Note: If you're using Shared VPC , you must include the host
project in a service perimeter along with any
projects that belong to the Shared VPC.
To learn more about how service perimeters work and what services
VPC Service Controls can be used to secure, read the
Overview of VPC Service Controls .
Some services have limitations with how they can be used with
VPC Service Controls . If you encounter
issues with your projects after setting up your service perimeters, read
Troubleshooting .
Set up VPC accessible services
When you enable VPC accessible services for a perimeter, access from network
endpoints inside your perimeter is limited to a set of services that you
specify.
To learn more about how to limit access inside your perimeter to only a specific
set of services, read about VPC accessible services .
Set up private connectivity from a VPC network
To provide additional security for VPC networks and on-premises hosts that are
protected by a service perimeter, we recommend using Private Google Access.
For more information, see private connectivity from on-premises networks .
To learn about configuring private connectivity, read
Setting up private connectivity to Google APIs and services .
Restricting access to Google Cloud resources to only private access from
VPC networks means that access using interfaces such as the Google Cloud console
and the Cloud Monitoring console are denied. You can continue to use
the gcloud command-line tool or API clients from VPC networks that share a service perimeter
or perimeter bridge with the restricted resources.
Allow context-aware access from outside a service perimeter using ingress rules
You can allow context-aware access to resources restricted by a perimeter based
on client attributes. You can specify client attributes, such as identity type
(service account or user), identity, device data, and network origin (IP address or VPC network).
For example, you can set up ingress rules to allow internet access to resources
within a perimeter based on the range of IPv4 and IPv6 addresses. For more
information about using ingress rules to set up context-aware access, see
Context-aware access .
Configure secure data exchange using ingress and egress rules
You can include your project only in one service perimeter. If you want to allow
communication across the perimeter boundary, set up ingress and egress rules.
For example, you can specify ingress and egress rules to let projects from
multiple perimeters to share logs in a separate perimeter. To learn more about
secure data exchange use cases, read secure data exchange .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
