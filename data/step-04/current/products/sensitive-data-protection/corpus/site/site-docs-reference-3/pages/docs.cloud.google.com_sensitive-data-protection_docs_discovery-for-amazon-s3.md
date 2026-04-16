---
title: "Sensitive data discovery for Amazon S3 \_|\_ Sensitive Data Protection \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-amazon-s3
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/discovery-for-amazon-s3
  title: "Sensitive data discovery for Amazon S3 \_|\_ Sensitive Data Protection \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Sensitive data discovery for Amazon S3
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Sensitive Data Protection discovery for use with
Amazon S3. This feature is available only to customers who have
activated Security Command Center at the Enterprise
tier .
Sensitive Data Protection discovery helps you learn about the types
of data that you're storing in S3 and the sensitivity
levels of your data. When you profile your S3 data, you
generate file store data profiles , which provide insights and metadata about
your S3 buckets. For each S3 bucket,
a file store data profile includes the following information:
The types of files that you're storing in the bucket,
categorized into file
clusters
The sensitivity level of the data in the bucket
A summary about each detected file cluster, including the types of sensitive
information found
For a full list of insights and metadata in each file store data profile, see
File store data
profiles .
For more information about the discovery service, see Data
profiles .
Workflow
The high-level workflow for profiling Amazon S3 data is as follows:
In Security Command Center, create a connector for Amazon Web Services
(AWS) . Make sure that you
select the Grant permissions for Sensitive Data Protection discovery
checkbox and follow the instructions to configure the connector with
sensitive data discovery permissions.
If you already have a connector that doesn't have Grant permissions for
Sensitive Data Protection discovery selected, see Grant sensitive data
discovery permissions to an existing AWS
connector .
Create an inspection
template
in the global region or the region where you plan to store the discovery
scan configuration and all generated data profiles.
Create a discovery scan configuration for Amazon S3 .
Sensitive Data Protection profiles your data according to the schedule
that you specify.
Pricing
When you profile Amazon S3 data, AWS charges you for requests that
Sensitive Data Protection makes and for data transfers
from S3 to the internet .
When the discovery service profiles your data, it scans a sample of the data in
your S3 bucket. Discovery uses heuristic methods to
determine how much data to sample in each bucket and within specific files. In
this process, some data is transferred to Google Cloud and inspected using
the content inspection
service of
Sensitive Data Protection. In most cases, if there are no intermittent errors,
the data transferred and scanned for each bucket does not exceed 30 GB. The data
sampled for each bucket can be less than 30 GB.
Requests from Sensitive Data Protection
Sensitive Data Protection performs the following operations in the process of
profiling your S3 buckets:
Around 50 LIST requests per day per profiled S3 bucket.
Around 4 GET requests per file for up to 7,000
files in a profiled bucket.
Sensitive Data Protection generally makes under 100,000 GET calls. Don't
rely on this value when optimizing for cost;
this value might change in the future.
The price that AWS charges per 1,000 requests differs based on the region of the
S3 bucket. For more information, see Requests & data
retrievals in the Amazon S3 pricing
documentation .
Data transfers from S3 to the internet
When Sensitive Data Protection profiles S3 data, the
data is considered to be transferred from S3 to the
internet. AWS charges may apply. For more information, see Data Transfer OUT
From Amazon S3 To Internet in the Amazon S3 pricing
documentation .
Example calculations
Suppose that you want to profile 10 S3 Standard buckets in the US East (N.
Virginia) region. You can estimate the Amazon costs that are directly related to
the discovery operation as follows.
Important: These rates are provided for illustration purposes only. You are
responsible for calculating your Amazon costs using the latest rates and
pricing policies in the Amazon pricing documentation.
Example: Requests and data retrievals
Estimated number of requests per bucket
Estimated number of requests for 10 buckets
Amazon rate
Subtotal
LIST
50
500
$0.005 per 1,000 calls
0.005
GET
28,000
280,000
$0.0004 per 1,000 calls
0.112
Total
0.117
Example: Data transfer out from Amazon S3 to the internet
Data sampled
per bucket
Amazon rate
Price per bucket
Up to of 30 GB
$0.09 per GB
Up to $2.70
Data residency considerations
Consider the following when you plan to profile data from
other cloud providers:
The data profiles are stored alongside the discovery scan
configuration. In contrast, when you profile Google Cloud data, the
profiles are stored in the same region as the data to be
profiled.
If you store your inspection template in the global region,
an in-memory copy of that template is read in the region where you
store the discovery scan configuration.
Your data is not modified. An in-memory copy of your data is
read in the region where you store the discovery scan
configuration. However, Sensitive Data Protection makes no
guarantees about where the data passes through after it reaches
the public internet. The data is encrypted with SSL.
What's next
Profile Amazon S3 data
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
