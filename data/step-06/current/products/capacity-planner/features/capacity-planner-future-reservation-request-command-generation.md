---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.957Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner future reservation request command generation"
feature_slug: "capacity-planner-future-reservation-request-command-generation"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
  - "https://docs.cloud.google.com/capacity-planner/docs/release-notes"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
keywords:
  - "request"
  - "generation"
  - "command"
  - "reservation"
  - "can"
  - "future"
  - "capacity"
  - "planner"
---

# Capacity Planner future reservation request command generation

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner can generate gcloud CLI commands to create future Compute Engine zonal reservation requests based on actual or forecasted VM usage.

## Extended Definition

Capacity Planner can generate gcloud CLI commands to create future Compute Engine zonal reservation requests based on actual or forecasted VM usage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)

## Supporting Pages

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations Creating future reservation requests in Capacity Planner has the following limitations: You can only create requests by specifying properties directly .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Create future reservation requests After you select a Compute Engine resource and its usage data in the previous section using the Google Cloud console, you can create future reservation requests for one or more machine types by completing the following steps: Specify the request name, name prefix, and auto-delete option Specify the number of instances to reserve Specify the share type Create draft requests and submit them Specify the request name, name prefix, and auto-delete option If you're creating multiple future reservation requests at once by generating gcloud CLI commands, then the following properties will have matching values across all requests: Auto-delete option Name prefix Reservation period You can optionally customize these values for individual requests by editing the generated gcloud CLI commands.
- Required roles To get the permissions that you need to create future reservation requests, ask your administrator to grant you the following IAM roles: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) on the project, folder, or organization To create future reservation requests: Compute Future Reservation User ( roles/compute.futureReservationUser ) on the owner project For more information about granting roles, see Manage access to projects, folders, and organizations .

### Capacity Planner release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Capacity Planner overview View usage and forecast data in Capacity Planner Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API Reserve capacity in Capacity Planner December 19, 2024 Feature Preview : You can create future reservation requests for VMs of a single machine type using the Google Cloud console.
- Feature Preview : You can generate gcloud CLI commands to create future reservation requests of Compute Engine zonal resources based on the actual or forecasted usage of your VMs.
- August 25, 2025 Feature Preview : You can use capacity requests to request a large number of resources for a future date and time, and across multiple regions or zones.
- Feature Preview : You can view the on-demand reservations and future reservation requests available for consumption in your project, folder, or organization.

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- You can also view your reservations, including current on-demand reservations as well as past and current future reservation requests, of compute resources.
- You can only view reservations and future reservation requests when you do both of the following: You view usage and forecast data for instances or GPUs.
- Capacity Planner updates the calculated future reservations data every 60 minutes.
- REST methods Query historical usage timeseries project-level query: v1beta projects.locations.usageHistories.query method folder-level query: v1beta folders.locations.usageHistories.query method organization-level query: v1beta organizations.locations.usageHistories.query method Query forecast timeseries project-level query: v1beta projects.locations.forecasts.query method folder-level query: v1beta folders.locations.forecasts.query method organization-level query: v1beta organizations.locations.forecasts.query method Query reservations timeseries project-level query: v1beta projects.locations.reservations.query method folder-level query: v1beta folders.locations.reservations.query method organization-level query: v1beta organizations.locations.reservations.query method What's next Export usage and forecast data Enable the quota adjuster Request capacity from actual or forecasted usage Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

