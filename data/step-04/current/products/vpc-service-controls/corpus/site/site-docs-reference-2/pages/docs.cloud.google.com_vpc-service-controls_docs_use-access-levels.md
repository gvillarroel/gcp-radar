---
title: "Allow access to protected resources from outside a perimeter \_|\_ VPC Service\
  \ Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/use-access-levels
  title: "Allow access to protected resources from outside a perimeter \_|\_ VPC Service\
    \ Controls \_|\_ Google Cloud Documentation"
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
Allow access to protected resources from outside a perimeter
Stay organized with collections
Save and categorize content based on your preferences.
To grant controlled access to protected Google Cloud resources in
service perimeters from outside a perimeter, use access levels .
An access level defines a set of attributes that a request must meet for the request
to be honored. Access levels can include various criteria, such as IP address and
user identity.
For a detailed overview of access levels, read the
Access Context Manager overview .
Before you use access levels in your perimeter, consider the following:
Access levels and ingress rules
work together to control incoming traffic to a perimeter.
VPC Service Controls allows a request if it satisfies the conditions of
either the access level or the ingress rule.
If you add multiple access levels to a service perimeter,
VPC Service Controls allows a request if it satisfies the conditions of
any one of the access levels.
Limitations of using access levels with VPC Service Controls
When using access levels with VPC Service Controls, certain limitations apply:
Access levels only allow requests from outside a perimeter for the
resources of a protected service inside a perimeter.
You cannot use access levels to allow requests from a protected resource
inside a perimeter to resources outside the perimeter. For example,
a Compute Engine client within a service perimeter calling a
Compute Engine create operation where the image resource is outside the
perimeter. To allow access from a protected resource inside a perimeter to
resources outside the perimeter, use an egress policy .
Even though access levels are used to allow requests from outside a service perimeter,
you cannot use access levels to allow requests from another perimeter to a protected resource in your
perimeter. To allow requests from another perimeter to protected resources in
your perimeter, the other perimeter must use an egress policy .
For more information, read about
requests between perimeters .
To allow perimeter access from private resources deployed in a
different project or organization, a Cloud NAT gateway is required
in the source project. Cloud NAT
has an integration with Private Google Access
that automatically enables Private Google Access on the resource's
subnet, and keeps the traffic to Google APIs and services internal,
as opposed to routing it to the internet using the Cloud NAT
gateway external IP address. As the traffic is routed within the internal
Google network, the RequestMetadata.caller_ip field of the AuditLog
object is redacted to gce-internal-ip . Instead of using the
Cloud NAT gateway external IP address in the access level for
IP-based allowlist ,
configure an ingress rule to allow access based on other attributes such as
the project or service account.
Create and manage access levels
Access levels are created and managed using Access Context Manager.
Create an access level
To create an access level, read about
creating an access level
in the Access Context Manager documentation.
The following examples explain how to create an access level using different
conditions:
IP address
User and service accounts (principals)
Device policy
Add access levels to service perimeters
You can add access levels to a service perimeter when creating the perimeter,
or to an existing perimeter:
Read about
adding access levels when you create a perimeter
Read about
adding access levels to an existing perimeter
Manage access levels
For information about listing, modifying, and deleting existing access levels,
read Managing access levels .
What's next
Creating an access level
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
