---
title: "Increase certificate creation throughput using CA pools \_|\_ Certificate\
  \ Authority Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/higher-qps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/higher-qps
  title: "Increase certificate creation throughput using CA pools \_|\_ Certificate\
    \ Authority Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Increase certificate creation throughput using CA pools
This page describes how you can increase the certificate creation rate using a
certificate authority (CA) pool. For information about CA pools, see Overview
of CA pools .
Overview
The certificate creation throughput is measured in queries per second (QPS). In
a service mesh, the certificate creation throughput can be approximated using
the following formula:
THROUGHPUT = ( ACTIVE_WORKLOADS × ROTATION_FREQUENCY ) +
NEW_WORKLOADS_PER_SECOND
Replace the following:
ACTIVE_WORKLOADS : the total number of workloads that are running at any
given time
ROTATION_FREQUENCY : the frequency at which the certificates are rotated
per second
NEW_WORKLOADS_PER_SECOND : the rate at which new workloads are created
You can find the values for ACTIVE_WORKLOADS and NEW_WORKLOADS_PER_SECOND ,
in the Google Kubernetes Engine
dashboards in the
Google Cloud console. To determine the ROTATION_FREQUENCY for a service mesh, you
must refer to the service mesh product's documentation. The ROTATION_FREQUENCY
for Cloud Service Mesh defaults to once every 12 hours, which is 1/(12×60×60) or
1/43200 when converted into rotation frequency per second.
Example
Consider the example of a relatively stable cluster with long-lived workloads
and few ephemeral workloads.
Variable name
Value
Description
ACTIVE_WORKLOADS
10000
10,000 workloads are expected to be running at any given time.
NEW_WORKLOADS_PER_SECOND
1
1 new workload is created every second.
ROTATION_FREQUENCY
1/43200
The certificates rotate every 12 hours.
Substituting these values in the formula for calculating certificate-creation
rate gives a QPS value of 1.23.
Throughput = (10,000 / 43,200) + 1 = 1.23 QPS
A different cluster with more ephemeral workloads and shorter-lived workloads
might have a higher value for NEW_WORKLOADS_PER_SECOND . A high value of
ROTATION_FREQUENCY makes the value of the fraction (ACTIVE_WORKLOADS /
ROTATION_FREQUENCY) quite small, making NEW_WORKLOADS_PER_SECOND the most
important variable in the formula.
Before you begin
Set up a CA pool in your
required location. For the complete list of locations, see
Locations .
If you're expecting to issue certificates at a consistently high throughput, we
recommend that you create the CA pool in the DevOps tier, which allows for
improved performance and incurs lower costs. There is a maximum throughput for
each individual CA within a CA Pool, and there is a maximum achievable effective
throughput for any given project. For example, if the maximum throughput for the
DevOps tier is 25 QPS for a CA and 100 QPS for a project, then you must create 4
CAs within the CA pool to reach a total effective throughput of up to 100 QPS.
For specific QPS numbers and more information about quotas, see Quotas and
limits .
Note: Support for listing, describing, and revoking certificates is not
available for CA pools in the DevOps tier. For more information about tiers, see
Select the operation tiers .
Procedure
Create enough CAs within your CA pool to achieve the required QPS. The
required number of CAs is 4 for CA pools in the DevOps tiers, and 15 for CA
pools in the Enterprise tier. The following set of instructions is for a CA
pool in the DevOps tier:
To create a root CA with the name root-1 in your CA pool, use the
following gcloud command.
gcloud privateca roots create root-1 \
--location LOCATION \
--pool POOL_NAME \
--subject="CN=root-1,O=google"
The total effective QPS of the CA pool at this stage is 25 QPS. To
increase the total effective QPS of the CA pool to 100 QPS, you must
create 3 more CAs in your CA pool.
To create a root CA with the name root-2 , use the following gcloud
command.
gcloud privateca roots create root-2 \
--location LOCATION \
--pool POOL_NAME \
--subject="CN=root-2,O=google"
To create a root CA with the name root-3 , use the following gcloud
command.
gcloud privateca roots create root-3 \
--location LOCATION \
--pool POOL_NAME \
--subject="CN=root-3,O=google"
To create a root CA with the name root-4 , use the following gcloud
command.
gcloud privateca roots create root-4 \
--location LOCATION \
--pool POOL_NAME \
--subject="CN=root-4,O=google"
At this stage, the total effective QPS of your CA pool is 100 QPS.
While CAs are in the STAGED state, create and test certificates. Once that
is done, enable the CAs. For information on enabling CAs, see Enable a
CA . For information on testing CAs, see Test a
CA .
Verify the health of your CA pool by getting audit reports on load-balancing
across CAs. Ideally, there should be uniformity in the number of
certificates issued by each CA.
You can use Cloud Monitoring to monitor your CA pool's load-balancing
metrics, such as the number of certificates issued per CA in a given time
period. For more information, see Monitor resources using
Cloud Monitoring .
What's next
Learn more about quotas and limits .
Watch a YouTube video on increasing throughput for CAs with CA
pools .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
