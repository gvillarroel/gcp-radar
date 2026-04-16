---
title: "Use VPC Service Controls with App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/using-vpc-service-controls
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/using-vpc-service-controls
  title: "Use VPC Service Controls with App Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
Use VPC Service Controls with App Hub
Stay organized with collections
Save and categorize content based on your preferences.
VPC Service Controls is a Google Cloud feature that lets you set up a
service perimeter that creates a data transfer boundary around
Google Cloud resources. VPC Service Controls provides more security for
your App Hub resources such as mitigating the risk of data
exfiltration. Using VPC Service Controls, you can add projects to service
perimeters that protect applications, services, and workloads from requests that
cross the perimeter.
App Hub resources are exposed on the
apphub.googleapis.com API, which lets you perform
operations, such as creation and deletion of applications, services, and
workloads. You can set up VPC Service Controls with App Hub
by restricting connectivity to this API surface.
We recommend that you protect all App Hub resources when creating a
service perimeter.
App Hub supports the following resource types:
Application
Discovered service
Discovered workload
Service
Service project attachment (only for applications managed by a host project)
Workload
Applications in an app-enabled folder
When you set up a folder-level boundary , the
following actions occur:
A Google Cloud project in the folder is configured as the
management project .
The system enables the required APIs for application management on that
project.
After the management project is created, you can also enable recommended APIs
that provide more application-centric features.
To include the management project in a service perimeter,
create or update your service perimeter
so that the management project and the enabled APIs are included in the
perimeter.
To learn about which APIs are required and recommended, see
Required and recommended APIs .
Applications managed by a host project
You must set up VPC Service Controls on the
host project and
service projects before you create
an application and register services and workloads to the application. For more
information, see Create a service perimeter .
What's next
To learn more about VPC Service Controls, see the
overview and
supported products and limitations .
For best practices for enabling VPC Service Controls, see
Best practices for enabling VPC Service Controls .
For best practices for designing service perimeters, see
Design and architect service perimeters .
To set up a service perimeter, see
Create a service perimeter .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
