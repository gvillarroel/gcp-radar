# Capacity Planner reservation availability view

Product: Capacity Planner
Feature slug: `capacity-planner-reservation-availability-view`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

In Capacity Planner, the reservation availability view is a usage-and-forecast workload view that lets users inspect reservations data for compute resources, including current on-demand reservations and past/current future reservation requests. For instances and GPUs, this view can be filtered by region, and it exposes both historical/forecasted context and reservation-related details together for capacity planning. The API representation for this planning surface also includes reservation aggregation plus future reservation request data (`usedReservationValues` and `futureReservations`) in `QueryReservationsResponse`.

## Lifecycle

- Latest feature date: 2024-09-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- identity
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/capacity-planner/docs/overview](https://docs.cloud.google.com/capacity-planner/docs/overview)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
