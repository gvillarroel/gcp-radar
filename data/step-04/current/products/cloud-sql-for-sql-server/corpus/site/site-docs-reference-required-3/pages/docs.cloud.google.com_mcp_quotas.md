---
title: "Quotas and system limits \_|\_ Google Cloud MCP servers \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/mcp/quotas
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/mcp/control-mcp-use-organization
source_metadata:
  url: https://docs.cloud.google.com/mcp/quotas
  title: "Quotas and system limits \_|\_ Google Cloud MCP servers \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Google Cloud MCP servers
Resources
Send feedback
Quotas and system limits
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
There are no quotas or system limits associated with Google Cloud MCP servers. Quotas
and system limits might apply to Google or Google Cloud products you use through
Google Cloud MCP servers.
This document lists the quotas and system limits that apply to
Google Cloud MCP servers.
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
Get quota and system limit metric names
Quotas and system limits have two types of names: display names and metric
names. Display names have spaces and capitalization that make them easier for
humans to read. Metric names are more likely to be lowercase and delimited by
underscores instead of spaces; the exact format depends on the service.
The following instructions show how to get metric names for quotas and system
limits by using either the Google Cloud console or the
gcloud CLI.
Console
In the Google Cloud console, go to the
IAM & Admin >
Quotas & System Limits page:
Go to Quotas & System Limits
The table on this page displays quotas and system limits that have usage or
have adjusted values, and a reference entry for other quotas. The reference
entry has the word "default" in parentheses at the end of the listing in
the Name column. For example, SetIAMPolicy requests per minute per
region (default) is the reference entry for the quota
SetIamPolicyRequestsPerMinutePerProject .
If you don't see the Metric column, take the following steps.
Click view_column
Column display options .
Select Metric .
Click OK . The Metric column appears in the table.
The Metric column shows the metric names. To filter the results, enter a
property name or value in the field next to
filter_list Filter .
gcloud
To get the metric names for a Google Cloud service by
using the gcloud CLI, run the quotas info list
command. To skip lines that don't list metric names, pass the output to a
command such as grep with metric: as the search term, or use the
gcloud CLI
--format flag:
gcloud beta quotas info list --project= PROJECT_ID_OR_NUMBER \
--service= SERVICE_NAME --format="value(metric)"
Replace the following:
PROJECT_ID_OR_NUMBER : the project ID or project
number.
SERVICE_NAME : the name of the service whose quota
metrics you want to see—for example, the service name for
Compute Engine is compute.googleapis.com . Include the
googleapis.com portion of the service name.
Request a quota adjustment
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
