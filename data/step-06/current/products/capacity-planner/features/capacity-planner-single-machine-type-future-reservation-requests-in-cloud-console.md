---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.764Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner single-machine-type future reservation requests in Cloud Console"
feature_slug: "capacity-planner-single-machine-type-future-reservation-requests-in-cloud-console"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
keywords:
  - "single machine type capacity request"
  - "single machine type request"
  - "Cloud Console reservation request"
  - "Cloud console workflow"
  - "console reservation request"
  - "single-machine-type reservation"
  - "create reservation in console"
  - "future reservation request"
---

# Capacity Planner single-machine-type future reservation requests in Cloud Console

Product: Capacity Planner
Coverage: MEDIUM

## Step 02 Summary

Capacity Planner preview enables creating future reservation requests in the Google Cloud console for a single VM machine type.

## Extended Definition

Capacity Planner in Google Cloud allows users to create future reservation requests from the Cloud Console by selecting a Compute Engine resource with usage data, then entering request details (name, name prefix, auto-delete option, instance count, and share type) and creating draft requests before submitting. The documented flow supports requests for one or more machine types and requires specific access (for example, compute.futureReservations.create on the owner project and the Compute Future Reservation User role to create requests). Evidence for a strict single-machine-type-only workflow is weak in these pages; they describe future reservation requests generally, including single or multiple machine types.

## Evidence Summary

These official Capacity Planner pages document the Cloud Console creation workflow, required permissions/roles, and that reservations and future reservation requests are viewable together when usage/forecast data is being viewed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)

## Supporting Pages

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: WEAK
- Re-rank rationale: The page is about creating future reservation requests in Capacity Planner, but does not mention machine-type-specific (single-type) console flows.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Create future reservation requests After you select a Compute Engine resource and its usage data in the previous section using the Google Cloud console, you can create future reservation requests for one or more machine types by completing the following steps: Specify the request name, name prefix, and auto-delete option Specify the number of instances to reserve Specify the share type Create draft requests and submit them Specify the request name, name prefix, and auto-delete option If you're creating multiple future reservation requests at once by generating gcloud CLI commands, then the following properties will have matching values across all requests: Auto-delete option Name prefix Reservation period You can optionally customize these values for individual requests by editing the generated gcloud CLI commands.
- Required roles To get the permissions that you need to create future reservation requests, ask your administrator to grant you the following IAM roles: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) on the project, folder, or organization To create future reservation requests: Compute Future Reservation User ( roles/compute.futureReservationUser ) on the owner project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Specifically, future reservation requests help ensure that your Google Cloud project, folder, or organization has sufficient capacity during expected growth in a specific zone, such as in the following scenarios: Peak scale events Large-scale migrations Compliance requirements When you create a future reservation request, and Google Cloud approves it, you commit to pay for the requested resources for the entire reservation period and regardless of usage.

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- You can also view your reservations, including current on-demand reservations as well as past and current future reservation requests, of compute resources.
- You can only view reservations and future reservation requests when you do both of the following: You view usage and forecast data for instances or GPUs.
- In the Reservations by CPU platform section, the existing reservations and future reservation requests grouped by CPU platform.
- For future reservation requests, usage data is only available for up to one year after the start of its reservation period.

### "Support levels for permissions in custom roles \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)
- Source ID: `site-iam-reference`
- Final score: 50
- Re-rank relevance: N/A

