---
title: "Quotas and limits \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/quotas
  title: "Quotas and limits \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Resources
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Quotas and limits
This document lists the quotas and system limits that apply to
Colab Enterprise.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
There are also system limits on Colab Enterprise resources.
System limits can't be changed.
Compute Engine quotas
Colab Enterprise runtimes use Compute Engine quotas, including quotas for
virtual machine (VM) instances, disks, CPUs, and GPUs. For more information,
see the Compute Engine Allocation quotas
page .
Note: To use GPUs, in addition to the specific GPU models and regions you intend
to use, you also need sufficient global quota for GPUs (all regions) (API
quota name: GPU_ALL_REGIONS ). This global quota covers the total number of all
GPUs of all types used by your project across all regions. If you exceed this
global limit, you won't be able to start new GPU runtimes, even if you have
available quota for a specific GPU type in a particular region. See
GPU quota .
Vertex AI request quotas
Colab Enterprise runtime and runtime template requests count
toward Vertex AI quotas. The relevant Vertex AI
quotas include the following:
Vertex AI quota
Colab Enterprise interaction
Limit
Resource management requests
Runtime and runtime template requests
600/minute
Job or long-running operation requests per minute
Runtime and runtime template requests
60/minute
Dataform request quotas
Colab Enterprise notebooks are stored in Dataform. When you
create or interact with a notebook, Colab Enterprise sends an API
request to Dataform. Dataform has the following
relevant API quotas:
Dataform quota
Colab Enterprise interaction
Limit
Total requests per project
Notebook (IPYNB file) operations
6,000/minute
Other Dataform quotas such as package installation
requests per project or workflow actions per execution don't apply to
Colab Enterprise.
Notebook operations
Notebook (IPYNB file) operations count toward the Dataform quota
for total requests per project. For example, notebook file operations include
the following:
Creating, saving, and renaming a notebook.
Opening, downloading, and importing a notebook.
Viewing each version of a notebook's revision history and
reinstating a previous version.
Note: Colab Enterprise regularly saves your notebook automatically when
you make changes. Each of these automatic saves counts toward the
Dataform quota.
Usage limits
Colab Enterprise enforces the following usage limits:
Usage limit
Value
File size per imported notebook
Approximately 20 MB
Working with a notebook that is near the size limit can impact
performance.
Request a quota increase
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
