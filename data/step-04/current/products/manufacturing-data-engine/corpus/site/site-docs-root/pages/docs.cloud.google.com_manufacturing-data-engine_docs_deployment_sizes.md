---
title: "Deployment sizes \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/manufacturing-data-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/manufacturing-data-engine/docs/deployment/sizes
  title: "Deployment sizes \_|\_ Manufacturing Data Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Manufacturing Data Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deployment sizes
Before deploying Manufacturing Data Engine (MDE), you need to select
a deployment size. This page outlines the available sizes and their
characteristics. These are general recommendations and may not fit every use
case. For production deployments, consider using a custom size tailored to your
specific needs.
Sizes
MDE provides four different sizes:
Pilot : For small tests and proof of concepts, the cheapest option. This
deployment size omits the following components (which are included in all
other sizes):
Bigtable
Bigtable Dataflow writer
Event Change Dataflow transformation
Window Dataflow transformation
Small : For small projects that expect up to 1k messages per second.
Medium : For medium projects that expect up to 20k messages per second.
Large : For large projects that expect up to 100k messages per second.
MDE supports higher throughput if needed
through custom sizes. If you need to handle a higher throughput than the
included sizes, contact the MDE team
for recommendations.
Sizes detail
The following table describes sizes details. This configuration is stored in the
mde_size_details variable in the files
terraform/modules/infrastructure/variables.tf and
terraform/modules/deployment/variables.tf and can be overwritten if needed.
Pilot
Small
Medium
Large
Max messages/second
300
1000
20000
100000
GKE
CIDR pods
/19 pods
/17 pods
/17 pods
/17 pods
CIDR services
/22 services
/22 services
/22 services
/22 services
compute-class
normal
normal
Scale-Out
Scale-Out
message-mapper max replicas
1
5
50
200
configuration manager max replicas
1
5
50
200
metadata-manager max replicas
1
5
50
200
bigquery-sink max replicas
1
5
50
200
federation-api max replicas
1
2
5
10
SQL
machineType
db-custom-1-3840
db-custom-2-7680
db-custom-16-30720
db-custom-32-61440
max_connections flag
500
500
1000
4000
Redis
tier
Basic
Standard
Standard
Standard
memory
1Gb
5Gn
20Gb
40Gb
read replicas
0
1
2
5
Dataflow
GCSWriter machine type
n1-standard-1
n1-standard-2
n1-standard-4
n1-highmem-4
GCSWriter max workers
1
1
5
10
Bigtable Writer machine type
N/A
n1-standard-2
n1-standard-4
n1-standard-4
Bigtable Writer max workers
N/A
1
3
5
GCSReader machine type
N/A
n1-standard-2
n1-standard-4
n1-standard-4
GCSReader max workers
N/A
1
1
2
EventChange machine type
N/A
n1-standard-2
n1-standard-4
n1-highmem-4
EventChange max workers
N/A
1
2
2
Window machine type
N/A
n1-standard-2
n1-standard-4
n1-highmem-4
Window max workers
N/A
1
2
2
Bigtable
max nodes
N/A
1
3
5
Important: Medium and Large sizes use the
scale-out compute class for GKE cluster ,
which uses T2D CPUs . Additionally, these deployments need at least 305
and 1210 vCPUs respectively when running at full capacity. Make sure to
request this quota extension before trying to deploy MDE.
For more information about how to increase CPU quotas, see the
CPU quotas documentation.
Limitations and recommendations
We recommend that you create no more than 100 types in the Pilot and
Small size deployment and no more than 500 types in the Medium and
Large sizes.
This is not a hard limit and MDE can
support a much higher number of types. If
you need support for a higher number of types reach out to the
MDE team for
assistance in making the necessary Terraform modifications.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
