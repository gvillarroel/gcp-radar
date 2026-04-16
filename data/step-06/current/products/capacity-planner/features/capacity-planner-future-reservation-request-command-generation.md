---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.778Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner future reservation request command generation"
feature_slug: "capacity-planner-future-reservation-request-command-generation"
latest_feature_date: "2023-09-07"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
keywords:
  - "zonal reservation request"
  - "Compute Engine reservation request"
  - "zonal reservation commands"
  - "gcloud command generation"
  - "future reservation CLI"
  - "future reservation requests"
  - "forecasted VM usage"
  - "actual VM usage"
---

# Capacity Planner future reservation request command generation

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner can generate gcloud CLI commands to create future Compute Engine zonal reservation requests based on actual or forecasted VM usage.

## Extended Definition

Capacity Planner allows users to create future Compute Engine zonal reservation requests after selecting a resource and its usage data, and can generate gcloud CLI commands for multiple requests at once. The generated commands default to matching values (such as auto-delete option, name prefix, and reservation period) across requests, and users can edit the commands to customize individual requests. To perform this, users need access to actual or forecasted usage data and the required permissions/roles for creating future reservation requests.

## Evidence Summary

These pages provide direct coverage of future reservation request creation in Capacity Planner, including gcloud CLI generation behavior, required inputs/usage data conditions, and applicable IAM permissions and roles.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)

## Supporting Pages

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: STRONG
- Re-rank rationale: The document explicitly states that users can generate gcloud CLI commands for future reservation requests, directly defining the command-generation capability.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Create future reservation requests After you select a Compute Engine resource and its usage data in the previous section using the Google Cloud console, you can create future reservation requests for one or more machine types by completing the following steps: Specify the request name, name prefix, and auto-delete option Specify the number of instances to reserve Specify the share type Create draft requests and submit them Specify the request name, name prefix, and auto-delete option If you're creating multiple future reservation requests at once by generating gcloud CLI commands, then the following properties will have matching values across all requests: Auto-delete option Name prefix Reservation period You can optionally customize these values for individual requests by editing the generated gcloud CLI commands.
- Required roles To get the permissions that you need to create future reservation requests, ask your administrator to grant you the following IAM roles: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) on the project, folder, or organization To create future reservation requests: Compute Future Reservation User ( roles/compute.futureReservationUser ) on the owner project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Specifically, future reservation requests help ensure that your Google Cloud project, folder, or organization has sufficient capacity during expected growth in a specific zone, such as in the following scenarios: Peak scale events Large-scale migrations Compliance requirements When you create a future reservation request, and Google Cloud approves it, you commit to pay for the requested resources for the entire reservation period and regardless of usage.

### Capacity Planner client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/libraries](https://docs.cloud.google.com/capacity-planner/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: N/A

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- You can also view your reservations, including current on-demand reservations as well as past and current future reservation requests, of compute resources.
- You can only view reservations and future reservation requests when you do both of the following: You view usage and forecast data for instances or GPUs.
- In the Reservations by CPU platform section, the existing reservations and future reservation requests grouped by CPU platform.
- For future reservation requests, usage data is only available for up to one year after the start of its reservation period.

