---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.762Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner capacity requests"
feature_slug: "capacity-planner-capacity-requests"
latest_feature_date: "2025-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
keywords:
  - "capacity request by date and time"
  - "large future resource needs"
  - "multiple regions"
  - "multiple zones"
  - "future reservation request"
  - "future capacity request"
  - "capacity request"
  - "create capacity requests"
---

# Capacity Planner capacity requests

Product: Capacity Planner
Coverage: MEDIUM

## Step 02 Summary

Capacity Planner preview enables creating capacity requests for large future resource needs across specific dates, times, and multiple regions or zones.

## Extended Definition

Capacity Planner’s future reservation request feature lets users create capacity requests for Compute Engine resources from selected usage data, then define request properties (request name, name prefix, auto-delete option, instance count, and share type) and create and submit draft requests. It also supports creating multiple requests, including via generated gcloud commands with shared values, with optional per-request customization. If a future reservation request is approved, the requester commits to paying for the reserved resources for the full reservation period regardless of actual usage, and the documentation describes it in the context of zone-specific capacity needs.

## Evidence Summary

The cited page defines how to create future reservation requests, required permissions/roles for creation, optional batch creation behavior, and billing commitment, while mainly documenting zone-focused scenarios.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)

## Supporting Pages

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: The page defines creating future reservation requests for future dates/times in a specific zone and describes capacity-assurance scenarios, which supports the broader capacity-request concept.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Create future reservation requests After you select a Compute Engine resource and its usage data in the previous section using the Google Cloud console, you can create future reservation requests for one or more machine types by completing the following steps: Specify the request name, name prefix, and auto-delete option Specify the number of instances to reserve Specify the share type Create draft requests and submit them Specify the request name, name prefix, and auto-delete option If you're creating multiple future reservation requests at once by generating gcloud CLI commands, then the following properties will have matching values across all requests: Auto-delete option Name prefix Reservation period You can optionally customize these values for individual requests by editing the generated gcloud CLI commands.
- Required roles To get the permissions that you need to create future reservation requests, ask your administrator to grant you the following IAM roles: To access and view Capacity Planner: Capacity Planner Viewer ( roles/capacityplanner.viewer ) on the project, folder, or organization To create future reservation requests: Compute Future Reservation User ( roles/compute.futureReservationUser ) on the owner project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Specifically, future reservation requests help ensure that your Google Cloud project, folder, or organization has sufficient capacity during expected growth in a specific zone, such as in the following scenarios: Peak scale events Large-scale migrations Compliance requirements When you create a future reservation request, and Google Cloud approves it, you commit to pay for the requested resources for the entire reservation period and regardless of usage.

