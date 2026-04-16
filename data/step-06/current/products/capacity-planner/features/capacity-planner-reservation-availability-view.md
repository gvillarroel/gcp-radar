---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:46:27.768Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner reservation availability view"
feature_slug: "capacity-planner-reservation-availability-view"
latest_feature_date: "2024-09-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/overview"
keywords:
  - "reservation availability by region"
  - "available on-demand reservations"
  - "reservation availability planning"
  - "future reservation requests visibility"
  - "reservation availability view"
  - "reservation availability"
  - "availability view"
---

# Capacity Planner reservation availability view

Product: Capacity Planner
Coverage: HIGH

## Step 02 Summary

Capacity Planner preview adds a view of available on-demand reservations and future reservation requests for planning purposes.

## Extended Definition

In Capacity Planner, the reservation availability view is a usage-and-forecast workload view that lets users inspect reservations data for compute resources, including current on-demand reservations and past/current future reservation requests. For instances and GPUs, this view can be filtered by region, and it exposes both historical/forecasted context and reservation-related details together for capacity planning. The API representation for this planning surface also includes reservation aggregation plus future reservation request data (`usedReservationValues` and `futureReservations`) in `QueryReservationsResponse`.

## Evidence Summary

The overview and view-data pages describe what reservation and future reservation request data is shown (including on-demand and filtering behavior), while the REST reference page confirms those data elements are returned in the reservations query API response.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

### Capacity Planner overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: STRONG
- Re-rank rationale: The page includes on-demand reservations and past/future reservation requests for instances and GPUs, which directly supports planning with reservation availability.

### QueryReservationsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: The page defines the `QueryReservationsResponse` structure, including reservation and future reservation entities, which is foundational context for APIs that can drive an availability-style reservations view.

