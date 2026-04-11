---
title: "Quota and system limit terminology \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/terminology
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/api-overview
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/terminology
  title: "Quota and system limit terminology \_|\_ Cloud Quotas \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Guides
Send feedback
Quota and system limit terminology
Stay organized with collections
Save and categorize content based on your preferences.
Quotas and system limits restrict your use of Google Cloud resources to
support resource availability for all Google Cloud users. Quotas have default
values, and can typically be adjusted. System limits are fixed values that
cannot be changed.
The following table lists additional quota terminology and definitions.
Term
Description
Dimension
A dimension is an attribute that represents a region or a zone, or a service-specific dimension, such as gpu_family or network_id .
The Cloud Quotas API represents dimensions as key-value pairs, where the key is the dimension name, and the value is the value of the named dimension—for example, {" key" : "region", "value" : "us-central1 "}.
Quota
Usually, quota refers to a Google Cloud resource and its
unit of measurement. For example, the quota
CPUS-PER-VM-FAMILY-per-project-region defines the
number of Compute Engine virtual CPUs (vCPUs) available to your
project for a specific VM family in a particular region. Occasionally,
Google Cloud documentation uses the word quota in its more
general sense, meaning a limited allowance.
Quota adjustment
A request to increase or decrease a quota value. Quota adjustment
requests are subject to review by Google Cloud.
Quota adjuster settings ( Preview )
This resource represents your quota adjuster settings for a particular
project. When enabled, the quota adjuster monitors your usage for the
specified resources and issues quota adjustment requests when resource
usage approaches its quota value.
Quota info
QuotaInfo is a read-only resource that provides metadata and quota value information about a particular quota for a given project, folder or organization. The QuotaInfo resource contains:
Metadata such as name and dimension.
Quota values for different quota dimensions.
Cloud Quotas obtains information from the quotas defined by Google Cloud services and any fulfilled quota adjustments that you initiate.
Note : Because QuotaInfo is constructed by incorporating information from different sources, a default quota configuration exists even if you have not created a QuotaPreference resource. Until you express a preferred state through quotaPreference.create or quotaPreference.update , QuotaInfo relies on the default quota information available to determine what quota value to enforce.
Quota preference
A QuotaPreference resource represents your quota
preferences for a particular dimension combination. You can use this
resource to make quota adjustments requests and specify behavior for
adjustment requests. You can set quota preferences by using the
Google Cloud console, the Cloud Quotas API, or the
Google Cloud CLI.
Quota value
The maximum for a given quota. This value can be adjusted for most
quotas.
System limit
A fixed value; typically, an architectural constraint. System limits cannot be adjusted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
