---
title: "Choose an AlloyDB machine type \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/choose-machine-type
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/choose-machine-type
  title: "Choose an AlloyDB machine type \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Choose an AlloyDB machine type
Stay organized with collections
Save and categorize content based on your preferences.
Choosing the right machine shape for your AlloyDB for PostgreSQL cluster is critical
for getting the best performance and cost efficiency for your database workload.
This document helps you choose the right machine type by describing the
AlloyDB machine series, their intended use cases, and how Google
determines where to launch the machine series.
Having a diverse set of machine types lets you customize your
AlloyDB instance for your use case, whether you have a massive
dataset that benefits from a huge cache, or you have a high-concurrency
transactional workload that benefits from the highest number of cores. This
flexibility ensures that AlloyDB can support everything from
massive, very large database workloads to standard, mission-critical
applications.
Machine series overview
AlloyDB offers the following machine series, each built on a
different underlying Google Cloud compute platform and optimized for specific
performance characteristics.
Machine series
Core platform and CPU
Primary workload focus
Key performance differentiator
N2
3rd Generation Intel x86 processors (Ice Lake)
Legacy, general purpose
Available in all regions.
C4A
Google Axion ARM
Price performance, high throughput
Provides the best transaction throughput for cache-fitting
workloads.
C4
6th generation Intel x86 processors (Granite Rapids) with Titanium SSD.
Low latency or very large database workloads
Provides the largest machine options with local SSDs for the fastest cache.
Z3
4th generation Intel x86 processors (Sapphire Rapids) with Titanium SSD
Large working dataset, storage intensive
Allows caching of more data per vCPU; optimized for storage-dense, I/O-intensive workloads
Machine series availability for AlloyDB clusters
You can choose one of the following machine series:
N2 : this machine series provides a balanced price-to-performance
ratio for a variety of AlloyDB workloads.
C4A Axion-based : this machine series provides optimized
price-performance and delivers predictable high performance for high demand
AlloyDB workloads.
C4 : this machine series provides excellent performance, and the largest vertical scale in AlloyDB.
Z3 : this machine series is optimized for storage-dense, I/O-intensive workloads.
N2
The following machine types are available for instances for the N2 machine
series. For more information, see N2 machine series .
Machine type
vCPUs
Memory (GB)
n2-highmem-2
2
16 GB RAM
n2-highmem-4
4
32 GB RAM
n2-highmem-8
8
64 GB RAM
n2-highmem-16
16
128 GB RAM
n2-highmem-32
32
256 GB RAM
n2-highmem-64
64
512 GB RAM
n2-highmem-96
96
768 GB RAM
n2-highmem-128
128
864 GB RAM
C4A Axion-based
The following machine types are available for instances for the C4A Axion-based
machine series. For more information, see C4A machine series .
Machine type
vCPUs
Memory (GB)
c4a-highmem-1
1
8 GB RAM
c4a-highmem-2-lssd
2
16 GB RAM
c4a-highmem-4-lssd
4
32 GB RAM
c4a-highmem-8-lssd
8
64 GB RAM
c4a-highmem-16-lssd
16
128 GB RAM
c4a-highmem-32-lssd
32
256 GB RAM
c4a-highmem-48-lssd
48
384 GB RAM
c4a-highmem-64-lssd
64
512 GB RAM
c4a-highmem-72-lssd
72
576 GB RAM
C4
The following machine types are available for instances for the C4 machine
series. For more information, see C4 machine series .
Machine type
vCPUs
Memory (GB)
c4-highmem-4-lssd
4
32 GB RAM
c4-highmem-8-lssd
8
64 GB RAM
c4-highmem-16-lssd
16
128 GB RAM
c4-highmem-24-lssd
24
192 GB RAM
c4-highmem-32-lssd
32
256 GB RAM
c4-highmem-48-lssd
48
384 GB RAM
c4-highmem-96-lssd
96
768 GB RAM
c4-highmem-144-lssd
144
1152 GB RAM
c4-highmem-192-lssd
192
1536 GB RAM
c4-highmem-288-lssd
288
2304 GB RAM
Z3 standardlssd
The following machine types are available for instances for the Z3 machine
series. For more information, see Z3 machine series .
Machine type
vCPUs
Memory (GB)
z3-highmem-14-standardlssd
14
112 GB RAM
z3-highmem-22-standardlssd
22
176 GB RAM
z3-highmem-44-standardlssd
44
352 GB RAM
z3-highmem-88-standardlssd
88
704 GB RAM
Z3 highlssd
The following machine types are available for instances for the Z3 highlssd
machine series. For more information, see Z3 machine series .
Machine type
vCPUs
Memory (GB)
z3-highmem-8-highlssd
8
64 GB RAM
z3-highmem-16-highlssd
16
128 GB RAM
z3-highmem-22-highlssd
22
176 GB RAM
z3-highmem-32-highlssd
32
256 GB RAM
z3-highmem-44-highlssd
44
352 GB RAM
Regional availability methodology
AlloyDB helps you deploy and scale
high-availability database solutions wherever you need them.
AlloyDB requires high availability (HA) to protect your
mission-critical data. This means that to launch any machine series in a given
Google Cloud region, the underlying Compute Engine platform supporting
that machine series must be available in all three zones within that region.
This requirement ensures that when you choose a region for your
AlloyDB cluster, the necessary infrastructure is redundant and
geographically distributed in that area, which provides the failover
capabilities that you need.
Machine series regional deployments
Use the following table to learn where you can find AlloyDB
platforms. N2 offers General Availability, and C4A Axion-based offers the widest
modern coverage.
Region
Machine series
N2
C4A
C4
Z3
africa-south1
✅
–
–
–
asia-east1
✅
✅
✅
–
asia-east2
✅
–
–
–
asia-northeast1
✅
–
✅
✅
asia-northeast2
✅
–
–
asia-northeast3
✅
–
✅
–
asia-south1
✅
–
–
–
asia-south2
✅
–
✅
–
asia-southeast1
✅
✅
✅
✅
asia-southeast2
✅
–
–
–
asia-southeast3
✅
–
–
–
australia-southeast1
✅
–
–
–
australia-southeast2
✅
–
–
–
europe-central2
✅
–
–
–
europe-southwest1
✅
–
–
–
europe-north1
✅
–
–
–
europe-north2
✅
–
–
–
europe-west1
✅
✅
✅
✅
europe-west2
✅
✅
✅
✅
europe-west3
✅
✅
–
✅
europe-west4
✅
✅
✅
✅
europe-west6
✅
–
–
–
europe-west8
✅
–
–
–
europe-west9
✅
–
–
–
europe-west10
✅
–
–
–
europe-west12
✅
–
–
–
me-central1
✅
–
–
–
me-central2
✅
–
–
–
me-west1
✅
–
–
–
northamerica-northeast1
✅
–
–
–
northamerica-northeast2
✅
–
✅
–
northamerica-south1
✅
–
✅
✅
southamerica-east1
✅
–
–
–
southamerica-west1
✅
–
–
–
us-central1
✅
✅
–
✅
us-east1
✅
✅
–
✅
us-east4
✅
✅
✅
✅
us-east5
✅
–
✅
✅
us-east7
✅
–
–
–
us-south1
✅
–
–
✅
us-west1
✅
–
✅
✅
us-west2
✅
–
–
–
us-west3
✅
–
✅
–
us-west4
✅
–
✅
–
What's next
Create a cluster and its primary instance .
Learn about AlloyDB locations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
