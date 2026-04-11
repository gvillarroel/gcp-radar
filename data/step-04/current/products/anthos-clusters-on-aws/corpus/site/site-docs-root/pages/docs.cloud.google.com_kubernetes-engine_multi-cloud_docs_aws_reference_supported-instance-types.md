---
title: "Supported instance types \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/supported-instance-types
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/supported-instance-types
  title: "Supported instance types \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Reference
Send feedback
Supported instance types
Stay organized with collections
Save and categorize content based on your preferences.
This page is for Admins and architects and Operators who want to
define IT solutions and system architecture in accordance with company strategy
and requirements. To learn more about common roles and example tasks that we
reference in Google Cloud content, see
Common GKE user roles and tasks .
Minimum supported cluster configuration
Clusters managed by GKE on AWS must meet the following
minimum requirements. Your clusters might need more powerful control
plane and node pool instances depending on the demands of your workloads.
Cluster size (nodes)
Control plane instances
Node pool instances
Demo
3 x t3.medium
2 x t3.medium
1-10 nodes
3 x m5.large
workload dependent
11-100 nodes
3 x m5.xlarge
workload dependent
101-200 nodes
3 x m5.2xlarge
workload dependent
Supported AWS instance types
GKE on AWS supports x86 instance types for control planes. For node
pools, GKE on AWS supports both x86 and Arm instance types. For both
control planes and node pools, GKE on AWS supports only
Nitro-based instance types. GKE on AWS expands the list of supported
instance types as AWS launches new ones. For more information, see
Instance types in the
AWS documentation.
To learn how to use instances that have Arm architectures, see Run Arm
workloads in GKE on AWS .
Instance Type
Model
Architecture
Minimum Supported Cluster Version
Minimum Supported Node Pool Version
C5 Instances
c5.12xlarge
X86_64
1.21
1.21
C5 Instances
c5.18xlarge
X86_64
1.21
1.21
C5 Instances
c5.24xlarge
X86_64
1.21
1.21
C5 Instances
c5.2xlarge
X86_64
1.21
1.21
C5 Instances
c5.4xlarge
X86_64
1.21
1.21
C5 Instances
c5.9xlarge
X86_64
1.21
1.21
C5 Instances
c5.large
X86_64
1.21
1.21
C5 Instances
c5.xlarge
X86_64
1.21
1.21
C5a Instances
c5a.12xlarge
X86_64
1.21
1.21
C5a Instances
c5a.16xlarge
X86_64
1.21
1.21
C5a Instances
c5a.24xlarge
X86_64
1.21
1.21
C5a Instances
c5a.2xlarge
X86_64
1.21
1.21
C5a Instances
c5a.4xlarge
X86_64
1.21
1.21
C5a Instances
c5a.8xlarge
X86_64
1.21
1.21
C5a Instances
c5a.large
X86_64
1.21
1.21
C5a Instances
c5a.xlarge
X86_64
1.21
1.21
C5ad Instances
c5ad.12xlarge
X86_64
1.21
1.21
C5ad Instances
c5ad.16xlarge
X86_64
1.21
1.21
C5ad Instances
c5ad.24xlarge
X86_64
1.21
1.21
C5ad Instances
c5ad.2xlarge
X86_64
1.21
1.21
C5ad Instances
c5ad.4xlarge
X86_64
1.21
1.21
C5ad Instances
c5ad.8xlarge
X86_64
1.21
1.21
C5ad Instances
c5ad.large
X86_64
1.21
1.21
C5ad Instances
c5ad.xlarge
X86_64
1.21
1.21
C5d Instances
c5d.12xlarge
X86_64
1.21
1.21
C5d Instances
c5d.18xlarge
X86_64
1.21
1.21
C5d Instances
c5d.24xlarge
X86_64
1.21
1.21
C5d Instances
c5d.2xlarge
X86_64
1.21
1.21
C5d Instances
c5d.4xlarge
X86_64
1.21
1.21
C5d Instances
c5d.9xlarge
X86_64
1.21
1.21
C5d Instances
c5d.large
X86_64
1.21
1.21
C5d Instances
c5d.xlarge
X86_64
1.21
1.21
C6g Instances
c6g.12xlarge
ARM64
Not Supported
1.25
C6g Instances
c6g.16xlarge
ARM64
Not Supported
1.25
C6g Instances
c6g.2xlarge
ARM64
Not Supported
1.25
C6g Instances
c6g.4xlarge
ARM64
Not Supported
1.25
C6g Instances
c6g.8xlarge
ARM64
Not Supported
1.25
C6g Instances
c6g.large
ARM64
Not Supported
1.25
C6g Instances
c6g.medium
ARM64
Not Supported
1.25
C6g Instances
c6g.xlarge
ARM64
Not Supported
1.25
C6gd Instances
c6gd.12xlarge
ARM64
Not Supported
1.25
C6gd Instances
c6gd.16xlarge
ARM64
Not Supported
1.25
C6gd Instances
c6gd.2xlarge
ARM64
Not Supported
1.25
C6gd Instances
c6gd.4xlarge
ARM64
Not Supported
1.25
C6gd Instances
c6gd.8xlarge
ARM64
Not Supported
1.25
C6gd Instances
c6gd.large
ARM64
Not Supported
1.25
C6gd Instances
c6gd.medium
ARM64
Not Supported
1.25
C6gd Instances
c6gd.xlarge
ARM64
Not Supported
1.25
C6gn Instances
c6gn.12xlarge
ARM64
Not Supported
1.25
C6gn Instances
c6gn.16xlarge
ARM64
Not Supported
1.25
C6gn Instances
c6gn.2xlarge
ARM64
Not Supported
1.25
C6gn Instances
c6gn.4xlarge
ARM64
Not Supported
1.25
C6gn Instances
c6gn.8xlarge
ARM64
Not Supported
1.25
C6gn Instances
c6gn.large
ARM64
Not Supported
1.25
C6gn Instances
c6gn.medium
ARM64
Not Supported
1.25
C6gn Instances
c6gn.xlarge
ARM64
Not Supported
1.25
C6i Instances
c6i.12xlarge
X86_64
Not Supported
1.26
C6i Instances
c6i.16xlarge
X86_64
Not Supported
1.26
C6i Instances
c6i.24xlarge
X86_64
Not Supported
1.26
C6i Instances
c6i.2xlarge
X86_64
Not Supported
1.26
C6i Instances
c6i.32xlarge
X86_64
Not Supported
1.26
C6i Instances
c6i.4xlarge
X86_64
Not Supported
1.26
C6i Instances
c6i.8xlarge
X86_64
Not Supported
1.26
C6i Instances
c6i.large
X86_64
Not Supported
1.26
C6i Instances
c6i.xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.12xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.16xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.24xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.2xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.32xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.4xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.8xlarge
X86_64
Not Supported
1.26
C6id Instances
c6id.large
X86_64
Not Supported
1.26
C6id Instances
c6id.xlarge
X86_64
Not Supported
1.26
C7g Instances
c7g.12xlarge
ARM64
Not Supported
1.25
C7g Instances
c7g.16xlarge
ARM64
Not Supported
1.25
C7g Instances
c7g.2xlarge
ARM64
Not Supported
1.25
C7g Instances
c7g.4xlarge
ARM64
Not Supported
1.25
C7g Instances
c7g.8xlarge
ARM64
Not Supported
1.25
C7g Instances
c7g.large
ARM64
Not Supported
1.25
C7g Instances
c7g.medium
ARM64
Not Supported
1.25
C7g Instances
c7g.xlarge
ARM64
Not Supported
1.25
C7gn Instances
c7gn.12xlarge
ARM64
Not Supported
1.25
C7gn Instances
c7gn.16xlarge
ARM64
Not Supported
1.25
C7gn Instances
c7gn.2xlarge
ARM64
Not Supported
1.25
C7gn Instances
c7gn.4xlarge
ARM64
Not Supported
1.25
C7gn Instances
c7gn.8xlarge
ARM64
Not Supported
1.25
C7gn Instances
c7gn.large
ARM64
Not Supported
1.25
C7gn Instances
c7gn.medium
ARM64
Not Supported
1.25
C7gn Instances
c7gn.xlarge
ARM64
Not Supported
1.25
G5 Instances
g5.12xlarge
X86_64
Not Supported
1.26
G5 Instances
g5.16xlarge
X86_64
Not Supported
1.26
G5 Instances
g5.24xlarge
X86_64
Not Supported
1.26
G5 Instances
g5.2xlarge
X86_64
Not Supported
1.26
G5 Instances
g5.48xlarge
X86_64
Not Supported
1.26
G5 Instances
g5.4xlarge
X86_64
Not Supported
1.26
G5 Instances
g5.8xlarge
X86_64
Not Supported
1.26
G5 Instances
g5.xlarge
X86_64
Not Supported
1.26
G5g Instances
g5g.16xlarge
ARM64
Not Supported
1.25
G5g Instances
g5g.2xlarge
ARM64
Not Supported
1.25
G5g Instances
g5g.4xlarge
ARM64
Not Supported
1.25
G5g Instances
g5g.8xlarge
ARM64
Not Supported
1.25
G5g Instances
g5g.xlarge
ARM64
Not Supported
1.25
I3en Instances
i3en.12xlarge
X86_64
1.21
1.21
I3en Instances
i3en.24xlarge
X86_64
1.21
1.21
I3en Instances
i3en.2xlarge
X86_64
1.21
1.21
I3en Instances
i3en.3xlarge
X86_64
1.21
1.21
I3en Instances
i3en.6xlarge
X86_64
1.21
1.21
I3en Instances
i3en.large
X86_64
1.21
1.21
I3en Instances
i3en.metal
X86_64
Not Supported
1.26
I3en Instances
i3en.xlarge
X86_64
1.21
1.21
I4g Instances
i4g.16xlarge
ARM64
Not Supported
1.28
I4g Instances
i4g.2xlarge
ARM64
Not Supported
1.28
I4g Instances
i4g.4xlarge
ARM64
Not Supported
1.28
I4g Instances
i4g.8xlarge
ARM64
Not Supported
1.28
I4g Instances
i4g.large
ARM64
Not Supported
1.28
I4g Instances
i4g.xlarge
ARM64
Not Supported
1.28
I4i Instances
i4i.16xlarge
X86_64
Not Supported
1.26
I4i Instances
i4i.2xlarge
X86_64
Not Supported
1.26
I4i Instances
i4i.32xlarge
X86_64
Not Supported
1.26
I4i Instances
i4i.4xlarge
X86_64
Not Supported
1.26
I4i Instances
i4i.8xlarge
X86_64
Not Supported
1.26
I4i Instances
i4i.large
X86_64
Not Supported
1.26
I4i Instances
i4i.xlarge
X86_64
Not Supported
1.26
Im4gn Instances
im4gn.16xlarge
ARM64
Not Supported
1.25
Im4gn Instances
im4gn.2xlarge
ARM64
Not Supported
1.25
Im4gn Instances
im4gn.4xlarge
ARM64
Not Supported
1.25
Im4gn Instances
im4gn.8xlarge
ARM64
Not Supported
1.25
Im4gn Instances
im4gn.large
ARM64
Not Supported
1.25
Im4gn Instances
im4gn.xlarge
ARM64
Not Supported
1.25
Is4gen Instances
is4gen.2xlarge
ARM64
Not Supported
1.25
Is4gen Instances
is4gen.4xlarge
ARM64
Not Supported
1.25
Is4gen Instances
is4gen.8xlarge
ARM64
Not Supported
1.25
Is4gen Instances
is4gen.large
ARM64
Not Supported
1.25
Is4gen Instances
is4gen.medium
ARM64
Not Supported
1.25
Is4gen Instances
is4gen.xlarge
ARM64
Not Supported
1.25
M5 Instances
m5.12xlarge
X86_64
1.21
1.21
M5 Instances
m5.16xlarge
X86_64
1.21
1.21
M5 Instances
m5.24xlarge
X86_64
1.21
1.21
M5 Instances
m5.2xlarge
X86_64
1.21
1.21
M5 Instances
m5.4xlarge
X86_64
1.21
1.21
M5 Instances
m5.8xlarge
X86_64
1.21
1.21
M5 Instances
m5.large
X86_64
1.21
1.21
M5 Instances
m5.xlarge
X86_64
1.21
1.21
M5a Instances
m5a.12xlarge
X86_64
1.21
1.21
M5a Instances
m5a.16xlarge
X86_64
1.21
1.21
M5a Instances
m5a.24xlarge
X86_64
1.21
1.21
M5a Instances
m5a.2xlarge
X86_64
1.21
1.21
M5a Instances
m5a.4xlarge
X86_64
1.21
1.21
M5a Instances
m5a.8xlarge
X86_64
1.21
1.21
M5a Instances
m5a.large
X86_64
1.21
1.21
M5a Instances
m5a.xlarge
X86_64
1.21
1.21
M5ad Instances
m5ad.12xlarge
X86_64
1.21
1.21
M5ad Instances
m5ad.16xlarge
X86_64
1.21
1.21
M5ad Instances
m5ad.24xlarge
X86_64
1.21
1.21
M5ad Instances
m5ad.2xlarge
X86_64
1.21
1.21
M5ad Instances
m5ad.4xlarge
X86_64
1.21
1.21
M5ad Instances
m5ad.8xlarge
X86_64
1.21
1.21
M5ad Instances
m5ad.large
X86_64
1.21
1.21
M5ad Instances
m5ad.xlarge
X86_64
1.21
1.21
M5d Instances
m5d.12xlarge
X86_64
1.21
1.21
M5d Instances
m5d.16xlarge
X86_64
1.21
1.21
M5d Instances
m5d.24xlarge
X86_64
1.21
1.21
M5d Instances
m5d.2xlarge
X86_64
1.21
1.21
M5d Instances
m5d.4xlarge
X86_64
1.21
1.21
M5d Instances
m5d.8xlarge
X86_64
1.21
1.21
M5d Instances
m5d.large
X86_64
1.21
1.21
M5d Instances
m5d.xlarge
X86_64
1.21
1.21
M6g Instances
m6g.12xlarge
ARM64
Not Supported
1.24
M6g Instances
m6g.16xlarge
ARM64
Not Supported
1.24
M6g Instances
m6g.2xlarge
ARM64
Not Supported
1.24
M6g Instances
m6g.4xlarge
ARM64
Not Supported
1.24
M6g Instances
m6g.8xlarge
ARM64
Not Supported
1.24
M6g Instances
m6g.large
ARM64
Not Supported
1.24
M6g Instances
m6g.medium
ARM64
Not Supported
1.24
M6g Instances
m6g.xlarge
ARM64
Not Supported
1.24
M6gd Instances
m6gd.12xlarge
ARM64
Not Supported
1.24
M6gd Instances
m6gd.16xlarge
ARM64
Not Supported
1.24
M6gd Instances
m6gd.2xlarge
ARM64
Not Supported
1.24
M6gd Instances
m6gd.4xlarge
ARM64
Not Supported
1.24
M6gd Instances
m6gd.8xlarge
ARM64
Not Supported
1.24
M6gd Instances
m6gd.large
ARM64
Not Supported
1.24
M6gd Instances
m6gd.medium
ARM64
Not Supported
1.24
M6gd Instances
m6gd.xlarge
ARM64
Not Supported
1.24
M6i Instances
m6i.12xlarge
X86_64
1.26
1.26
M6i Instances
m6i.16xlarge
X86_64
1.26
1.26
M6i Instances
m6i.24xlarge
X86_64
1.26
1.26
M6i Instances
m6i.2xlarge
X86_64
1.26
1.26
M6i Instances
m6i.32xlarge
X86_64
1.26
1.26
M6i Instances
m6i.4xlarge
X86_64
1.26
1.26
M6i Instances
m6i.8xlarge
X86_64
1.26
1.26
M6i Instances
m6i.large
X86_64
1.26
1.26
M6i Instances
m6i.xlarge
X86_64
1.26
1.26
M6id Instances
m6id.12xlarge
X86_64
1.26
1.26
M6id Instances
m6id.16xlarge
X86_64
1.26
1.26
M6id Instances
m6id.24xlarge
X86_64
1.26
1.26
M6id Instances
m6id.2xlarge
X86_64
1.26
1.26
M6id Instances
m6id.32xlarge
X86_64
1.26
1.26
M6id Instances
m6id.4xlarge
X86_64
1.26
1.26
M6id Instances
m6id.8xlarge
X86_64
1.26
1.26
M6id Instances
m6id.large
X86_64
1.26
1.26
M6id Instances
m6id.xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.12xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.16xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.24xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.2xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.32xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.4xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.8xlarge
X86_64
1.26
1.26
M6idn Instances
m6idn.large
X86_64
1.26
1.26
M6idn Instances
m6idn.xlarge
X86_64
1.26
1.26
M6in Instances
m6in.12xlarge
X86_64
1.26
1.26
M6in Instances
m6in.16xlarge
X86_64
1.26
1.26
M6in Instances
m6in.24xlarge
X86_64
1.26
1.26
M6in Instances
m6in.2xlarge
X86_64
1.26
1.26
M6in Instances
m6in.32xlarge
X86_64
1.26
1.26
M6in Instances
m6in.4xlarge
X86_64
1.26
1.26
M6in Instances
m6in.8xlarge
X86_64
1.26
1.26
M6in Instances
m6in.large
X86_64
1.26
1.26
M6in Instances
m6in.xlarge
X86_64
1.26
1.26
M7a Instances
m7a.12xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.16xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.24xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.2xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.32xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.48xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.4xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.8xlarge
X86_64
Not Supported
1.28
M7a Instances
m7a.large
X86_64
Not Supported
1.28
M7a Instances
m7a.medium
X86_64
Not Supported
1.28
M7a Instances
m7a.xlarge
X86_64
Not Supported
1.28
M7g Instances
m7g.12xlarge
ARM64
Not Supported
1.28
M7g Instances
m7g.16xlarge
ARM64
Not Supported
1.28
M7g Instances
m7g.2xlarge
ARM64
Not Supported
1.28
M7g Instances
m7g.4xlarge
ARM64
Not Supported
1.28
M7g Instances
m7g.8xlarge
ARM64
Not Supported
1.28
M7g Instances
m7g.large
ARM64
Not Supported
1.28
M7g Instances
m7g.medium
ARM64
Not Supported
1.28
M7g Instances
m7g.xlarge
ARM64
Not Supported
1.28
M7gd Instances
m7gd.12xlarge
ARM64
Not Supported
1.28
M7gd Instances
m7gd.16xlarge
ARM64
Not Supported
1.28
M7gd Instances
m7gd.2xlarge
ARM64
Not Supported
1.28
M7gd Instances
m7gd.4xlarge
ARM64
Not Supported
1.28
M7gd Instances
m7gd.8xlarge
ARM64
Not Supported
1.28
M7gd Instances
m7gd.large
ARM64
Not Supported
1.28
M7gd Instances
m7gd.medium
ARM64
Not Supported
1.28
M7gd Instances
m7gd.xlarge
ARM64
Not Supported
1.28
M7i-Flex Instances
m7i-flex.2xlarge
X86_64
1.26
1.26
M7i-Flex Instances
m7i-flex.4xlarge
X86_64
1.26
1.26
M7i-Flex Instances
m7i-flex.8xlarge
X86_64
1.26
1.26
M7i-Flex Instances
m7i-flex.large
X86_64
1.26
1.26
M7i-Flex Instances
m7i-flex.xlarge
X86_64
1.26
1.26
M7i Instances
m7i.12xlarge
X86_64
1.26
1.26
M7i Instances
m7i.16xlarge
X86_64
1.26
1.26
M7i Instances
m7i.24xlarge
X86_64
1.26
1.26
M7i Instances
m7i.2xlarge
X86_64
1.26
1.26
M7i Instances
m7i.48xlarge
X86_64
1.26
1.26
M7i Instances
m7i.4xlarge
X86_64
1.26
1.26
M7i Instances
m7i.8xlarge
X86_64
1.26
1.26
M7i Instances
m7i.large
X86_64
1.26
1.26
M7i Instances
m7i.xlarge
X86_64
1.26
1.26
R5 Instances
r5.12xlarge
X86_64
1.21
1.21
R5 Instances
r5.16xlarge
X86_64
1.21
1.21
R5 Instances
r5.24xlarge
X86_64
1.21
1.21
R5 Instances
r5.2xlarge
X86_64
1.21
1.21
R5 Instances
r5.4xlarge
X86_64
1.21
1.21
R5 Instances
r5.8xlarge
X86_64
1.21
1.21
R5 Instances
r5.large
X86_64
1.21
1.21
R5 Instances
r5.xlarge
X86_64
1.21
1.21
R5a Instances
r5a.12xlarge
X86_64
1.21
1.21
R5a Instances
r5a.16xlarge
X86_64
1.21
1.21
R5a Instances
r5a.24xlarge
X86_64
1.21
1.21
R5a Instances
r5a.2xlarge
X86_64
1.21
1.21
R5a Instances
r5a.4xlarge
X86_64
1.21
1.21
R5a Instances
r5a.8xlarge
X86_64
1.21
1.21
R5a Instances
r5a.large
X86_64
1.21
1.21
R5a Instances
r5a.xlarge
X86_64
1.21
1.21
R5ad Instances
r5ad.12xlarge
X86_64
1.21
1.21
R5ad Instances
r5ad.16xlarge
X86_64
1.21
1.21
R5ad Instances
r5ad.24xlarge
X86_64
1.21
1.21
R5ad Instances
r5ad.2xlarge
X86_64
1.21
1.21
R5ad Instances
r5ad.4xlarge
X86_64
1.21
1.21
R5ad Instances
r5ad.8xlarge
X86_64
1.21
1.21
R5ad Instances
r5ad.large
X86_64
1.21
1.21
R5ad Instances
r5ad.xlarge
X86_64
1.21
1.21
R5d Instances
r5d.12xlarge
X86_64
1.21
1.21
R5d Instances
r5d.16xlarge
X86_64
1.21
1.21
R5d Instances
r5d.24xlarge
X86_64
1.21
1.21
R5d Instances
r5d.2xlarge
X86_64
1.21
1.21
R5d Instances
r5d.4xlarge
X86_64
1.21
1.21
R5d Instances
r5d.8xlarge
X86_64
1.21
1.21
R5d Instances
r5d.large
X86_64
1.21
1.21
R5d Instances
r5d.xlarge
X86_64
1.21
1.21
R6a Instances
r6a.12xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.16xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.24xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.2xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.32xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.48xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.4xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.8xlarge
X86_64
Not Supported
1.26
R6a Instances
r6a.large
X86_64
Not Supported
1.26
R6a Instances
r6a.xlarge
X86_64
Not Supported
1.26
R6g Instances
r6g.12xlarge
ARM64
Not Supported
1.24
R6g Instances
r6g.16xlarge
ARM64
Not Supported
1.24
R6g Instances
r6g.2xlarge
ARM64
Not Supported
1.24
R6g Instances
r6g.4xlarge
ARM64
Not Supported
1.24
R6g Instances
r6g.8xlarge
ARM64
Not Supported
1.24
R6g Instances
r6g.large
ARM64
Not Supported
1.24
R6g Instances
r6g.medium
ARM64
Not Supported
1.24
R6g Instances
r6g.xlarge
ARM64
Not Supported
1.24
R6gd Instances
r6gd.12xlarge
ARM64
Not Supported
1.24
R6gd Instances
r6gd.16xlarge
ARM64
Not Supported
1.24
R6gd Instances
r6gd.2xlarge
ARM64
Not Supported
1.24
R6gd Instances
r6gd.4xlarge
ARM64
Not Supported
1.24
R6gd Instances
r6gd.8xlarge
ARM64
Not Supported
1.24
R6gd Instances
r6gd.large
ARM64
Not Supported
1.24
R6gd Instances
r6gd.medium
ARM64
Not Supported
1.24
R6gd Instances
r6gd.xlarge
ARM64
Not Supported
1.24
R6i Instances
r6i.12xlarge
X86_64
Not Supported
1.26
R6i Instances
r6i.16xlarge
X86_64
Not Supported
1.26
R6i Instances
r6i.24xlarge
X86_64
Not Supported
1.26
R6i Instances
r6i.2xlarge
X86_64
Not Supported
1.26
R6i Instances
r6i.32xlarge
X86_64
Not Supported
1.26
R6i Instances
r6i.4xlarge
X86_64
Not Supported
1.26
R6i Instances
r6i.8xlarge
X86_64
Not Supported
1.26
R6i Instances
r6i.large
X86_64
Not Supported
1.26
R6i Instances
r6i.xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.12xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.16xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.24xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.2xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.32xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.4xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.8xlarge
X86_64
Not Supported
1.26
R6id Instances
r6id.large
X86_64
Not Supported
1.26
R6id Instances
r6id.xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.12xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.16xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.24xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.2xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.32xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.4xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.8xlarge
X86_64
Not Supported
1.26
R6idn Instances
r6idn.large
X86_64
Not Supported
1.26
R6idn Instances
r6idn.xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.12xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.16xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.24xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.2xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.32xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.4xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.8xlarge
X86_64
Not Supported
1.26
R6in Instances
r6in.large
X86_64
Not Supported
1.26
R6in Instances
r6in.xlarge
X86_64
Not Supported
1.26
R7g Instances
r7g.12xlarge
ARM64
Not Supported
1.28
R7g Instances
r7g.16xlarge
ARM64
Not Supported
1.28
R7g Instances
r7g.2xlarge
ARM64
Not Supported
1.28
R7g Instances
r7g.4xlarge
ARM64
Not Supported
1.28
R7g Instances
r7g.8xlarge
ARM64
Not Supported
1.28
R7g Instances
r7g.large
ARM64
Not Supported
1.28
R7g Instances
r7g.medium
ARM64
Not Supported
1.28
R7g Instances
r7g.xlarge
ARM64
Not Supported
1.28
R7gd Instances
r7gd.12xlarge
ARM64
Not Supported
1.28
R7gd Instances
r7gd.16xlarge
ARM64
Not Supported
1.28
R7gd Instances
r7gd.2xlarge
ARM64
Not Supported
1.28
R7gd Instances
r7gd.4xlarge
ARM64
Not Supported
1.28
R7gd Instances
r7gd.8xlarge
ARM64
Not Supported
1.28
R7gd Instances
r7gd.large
ARM64
Not Supported
1.28
R7gd Instances
r7gd.medium
ARM64
Not Supported
1.28
R7gd Instances
r7gd.xlarge
ARM64
Not Supported
1.28
R7i Instances
r7i.12xlarge
X86_64
Not Supported
1.28
R7i Instances
r7i.16xlarge
X86_64
Not Supported
1.28
R7i Instances
r7i.24xlarge
X86_64
Not Supported
1.28
R7i Instances
r7i.2xlarge
X86_64
Not Supported
1.28
R7i Instances
r7i.48xlarge
X86_64
Not Supported
1.28
R7i Instances
r7i.4xlarge
X86_64
Not Supported
1.28
R7i Instances
r7i.8xlarge
X86_64
Not Supported
1.28
R7i Instances
r7i.large
X86_64
Not Supported
1.28
R7i Instances
r7i.xlarge
X86_64
Not Supported
1.28
R7iz Instances
r7iz.12xlarge
X86_64
Not Supported
1.28
R7iz Instances
r7iz.16xlarge
X86_64
Not Supported
1.28
R7iz Instances
r7iz.2xlarge
X86_64
Not Supported
1.28
R7iz Instances
r7iz.32xlarge
X86_64
Not Supported
1.28
R7iz Instances
r7iz.4xlarge
X86_64
Not Supported
1.28
R7iz Instances
r7iz.8xlarge
X86_64
Not Supported
1.28
R7iz Instances
r7iz.large
X86_64
Not Supported
1.28
R7iz Instances
r7iz.xlarge
X86_64
Not Supported
1.28
T3 Instances
t3.2xlarge
X86_64
1.21
1.21
T3 Instances
t3.large
X86_64
1.21
1.21
T3 Instances
t3.medium
X86_64
1.21
1.21
T3 Instances
t3.xlarge
X86_64
1.21
1.21
T3a Instances
t3a.2xlarge
X86_64
1.21
1.21
T3a Instances
t3a.large
X86_64
1.21
1.21
T3a Instances
t3a.medium
X86_64
1.21
1.21
T3a Instances
t3a.xlarge
X86_64
1.21
1.21
T4g Instances
t4g.2xlarge
ARM64
Not Supported
1.24
T4g Instances
t4g.large
ARM64
Not Supported
1.24
T4g Instances
t4g.medium
ARM64
Not Supported
1.24
T4g Instances
t4g.xlarge
ARM64
Not Supported
1.24
X2gd Instances
x2gd.12xlarge
ARM64
Not Supported
1.25
X2gd Instances
x2gd.16xlarge
ARM64
Not Supported
1.25
X2gd Instances
x2gd.2xlarge
ARM64
Not Supported
1.25
X2gd Instances
x2gd.4xlarge
ARM64
Not Supported
1.25
X2gd Instances
x2gd.8xlarge
ARM64
Not Supported
1.25
X2gd Instances
x2gd.large
ARM64
Not Supported
1.25
X2gd Instances
x2gd.medium
ARM64
Not Supported
1.25
X2gd Instances
x2gd.xlarge
ARM64
Not Supported
1.25
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
