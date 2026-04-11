---
title: "Enable the quota adjuster \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster
  title: "Enable the quota adjuster \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Guides
Send feedback
Enable the quota adjuster
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document explains how to set up automatic request submissions for quota
increase for your project in Capacity Planner. To learn more about
Capacity Planner, see
Capacity Planner overview .
Capacity Planner lets you enable the
quota adjuster in your project. This
setting allows Google Cloud to automatically submit quota increase requests on
your behalf when your quota nears a limit.
You can enable the quota adjuster to do the following:
Proactively respond to planned or unplanned increases in usage.
Help prevent outages when reaching a quota.
Reduce the need to submit manual quota increase requests.
To disable the quota adjuster in your project, see instead
Disable the quota adjuster .
Limitations
Before you enable the quota adjuster in your project, consider the
following limitations:
You can enable the quota adjuster in your project only if
your project has sufficient usage data.
You can enable the quota adjuster only for specific
resources. For a complete list of supported resources, see
Availability .
Before you begin
If you can't access Capacity Planner in the Google Cloud console,
then your organization might not be eligible to access and use
Capacity Planner. To request access, contact your
Technical Account Manager (TAM) or the Sales team .
Required roles
To get the permissions that
you need to manage the quota adjuster in Capacity Planner,
ask your administrator to grant you the
following IAM roles on your project:
To access and view Capacity Planner:
Capacity Planner Viewer ( roles/capacityplanner.viewer )
To access and manage the quota adjuster in your project:
Quota Administrator ( roles/servicemanagement.quotaAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to manage the quota adjuster in Capacity Planner. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage the quota adjuster in Capacity Planner:
To view the forecasted usage of your Compute Engine resources:
capacityplanner.forecasts.list
on the project
To view the usage of your Compute Engine resources:
capacityplanner.usageHistories.list
on the project
To summarize the usage of your Compute Engine resources:
capacityplanner.usageHistories.summarize
on the project
To view the quota adjuster settings:
cloudquotas.quotas.get
on the project
To enable or disable the quota adjuster:
cloudquotas.quotas.update
on the project
To access your project's quota usage:
monitoring.timeseries.list
on the project
To view your project's quota:
serviceusage.quotas.get
on the project
serviceusage.services.get
on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Enable the quota adjuster
To enable the quota adjuster in your project, do the following:
In the Google Cloud console, go to the Capacity Planner page.
Go to Capacity Planner
Optional: To change project, in the project picker at the top of the page,
select another project.
In the navigation menu, click the Virtual machine tab.
In the Usage and forecast by machine family graph, click
Enable quota adjuster . The Quotas page appears and the
Configurations tab is selected.
To enable the quota adjuster, click Enable .
After you enable the quota adjuster, you can
create alert policies to monitor it .
What's next
Quotas and limits for Compute Engine
Audit logging information for Capacity Planner
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
