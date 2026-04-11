---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.955Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner quota adjuster for Compute Engine"
feature_slug: "capacity-planner-quota-adjuster-for-compute-engine"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/quotas"
keywords:
  - "adjuster"
  - "quota"
  - "compute"
  - "engine"
  - "can"
  - "capacity"
  - "planner"
  - "for"
---

# Capacity Planner quota adjuster for Compute Engine

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner can enable a quota adjuster for Compute Engine resources that automatically submits quota increase requests when usage nears quota limits.

## Extended Definition

Capacity Planner can enable a quota adjuster for Compute Engine resources that automatically submits quota increase requests when usage nears quota limits.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/quotas](https://docs.cloud.google.com/capacity-planner/docs/quotas)

## Supporting Pages

### Enable the quota adjuster \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster](https://docs.cloud.google.com/capacity-planner/docs/enable-quota-adjuster)
- Source ID: `site-docs-root`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage the quota adjuster in Capacity Planner: To view the forecasted usage of your Compute Engine resources: capacityplanner.forecasts.list on the project To view the usage of your Compute Engine resources: capacityplanner.usageHistories.list on the project To summarize the usage of your Compute Engine resources: capacityplanner.usageHistories.summarize on the project To view the quota adjuster settings: cloudquotas.quotas.get on the project To enable or disable the quota adjuster: cloudquotas.quotas.update on the project To access your project's quota usage: monitoring.timeseries.list on the project To view your project's quota: serviceusage.quotas.get on the project serviceusage.services.get on the project You might also be able to get these permissions with custom roles or other predefined roles .
- What's next Quotas and limits for Compute Engine Audit logging information for Capacity Planner Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Compute Compute Engine Capacity Planner Guides Send feedback Enable the quota adjuster Stay organized with collections Save and categorize content based on your preferences.
- Required roles To get the permissions that you need to manage the quota adjuster in Capacity Planner, ask your administrator to grant you the following IAM roles on your project: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) To access and manage the quota adjuster in your project: Quota Administrator ( roles/servicemanagement.quotaAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Capacity Planner Guides Send feedback View usage and forecast data Stay organized with collections Save and categorize content based on your preferences.
- You can use data about compute resources to help optimize your resource usage and plan for future capacity and quota needs in your project, folder, or organization.
- REST methods Query historical usage timeseries project-level query: v1beta projects.locations.usageHistories.query method folder-level query: v1beta folders.locations.usageHistories.query method organization-level query: v1beta organizations.locations.usageHistories.query method Query forecast timeseries project-level query: v1beta projects.locations.forecasts.query method folder-level query: v1beta folders.locations.forecasts.query method organization-level query: v1beta organizations.locations.forecasts.query method Query reservations timeseries project-level query: v1beta projects.locations.reservations.query method folder-level query: v1beta folders.locations.reservations.query method organization-level query: v1beta organizations.locations.reservations.query method What's next Export usage and forecast data Enable the quota adjuster Request capacity from actual or forecasted usage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.

### Quotas and limits \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/quotas](https://docs.cloud.google.com/capacity-planner/docs/quotas)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Capacity Planner Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Allocation quotas The following quotas don't reset over time and instead are released when you release the resource: Quotas Value Internal Load Balancer forwarding rules per VPC network 30 Rate quotas The following quotas apply to Capacity Planner requests: Quota Value Requests per second 10 Images per feature per day 700,000 Images per feature per month 20,000,000 Usage limits Capacity Planner enforces the following usage limits: Usage limit Value MB per image 4 MB MB per request 8 MB Images per request 16 Request a quota increase To increase or decrease quotas, select one of the following methods: Request a quota adjustment .
- For example, quotas can restrict the number of API calls to a service, the number of load balancers used concurrently by your project, or the number of projects that you can create.
- This document lists the quotas and system limits that apply to Capacity Planner.

