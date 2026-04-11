---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.941Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner single-machine-type future reservation requests in Cloud Console"
feature_slug: "capacity-planner-single-machine-type-future-reservation-requests-in-cloud-console"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/choose-request-method"
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse"
keywords:
  - "single"
  - "type"
  - "machine"
  - "reservation"
  - "requests"
  - "future"
  - "capacity"
  - "planner"
---

# Capacity Planner single-machine-type future reservation requests in Cloud Console

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview enables creating future reservation requests in the Google Cloud console for a single VM machine type.

## Extended Definition

Capacity Planner preview enables creating future reservation requests in the Google Cloud console for a single VM machine type.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse)

## Supporting Pages

### "Create future reservation requests \_|\_ Capacity Planner \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/capacity-planner/docs/choose-request-method](https://docs.cloud.google.com/capacity-planner/docs/choose-request-method)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose one of the following methods based on how many machine types you want to reserve capacity for at once, and whether you want to edit a future reservation request before creating it: Recommended: Generate gcloud CLI commands This method is useful for creating one or more future reservation requests at once for various machine types.
- After you select the Compute Engine resources, create a future reservation request using the Google Cloud console for a single machine type, or generate gcloud CLI commands to create future reservation requests for multiple machine types at once.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create future reservation requests: To create future reservation requests: compute.futureReservations.create on the owner project To let Compute Engine auto-create reservations: compute.reservations.create on the owner project To view the forecasted usage of your instances or GPUs: capacityplanner.forecasts.list on the project, folder, or organization To view the actual usage of your instances or GPUs: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the actual usage of your instances or GPUs: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .
- Create future reservation requests After you select a Compute Engine resource and its usage data in the previous section using the Google Cloud console, you can create future reservation requests for one or more machine types by completing the following steps: Specify the request name, name prefix, and auto-delete option Specify the number of instances to reserve Specify the share type Create draft requests and submit them Specify the request name, name prefix, and auto-delete option If you're creating multiple future reservation requests at once by generating gcloud CLI commands, then the following properties will have matching values across all requests: Auto-delete option Name prefix Reservation period You can optionally customize these values for individual requests by editing the generated gcloud CLI commands.

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- If there are reservations or future reservation requests for a specific machine type and zone, click the Details button .
- To view usage and forecast data for specific types of resources in specific regions and zones, review the pages in the Usage & forecast section as follows: In the Usage & forecast section of the Capacity Planner navigation menu, select a page based on the type of resource that you want to view data for: To view data for instances, open the Virtual machine page.
- Go to Capacity Planner In the Usage & forecast section of the Capacity Planner navigation menu, select one of the following resource types: Virtual Machines Disk GPU TPU On the Usage and forecast chart of the resource, click Forecast Options and then follow these steps: Click the Show Historical Forecast on chart toggle to the on position.
- Except for the percentage breakdown by machine type, Capacity Planner rounds all values to the nearest whole number.

### QueryReservationsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse](https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "id" : string , "createTime" : string , "zone" : string , "description" : string , "futureReservation" : string , "ownerProjectId" : string , "timeWindow" : { object ( TimeWindow ) } , "shareSettings" : { object ( ShareSettings ) } , "namePrefix" : string , "status" : { object ( Status ) } , "autoCreatedReservationsDeleteTime" : string , "autoDeleteAutoCreatedReservations" : boolean , // Union field type can be only one of the following: "specificSkuProperties" : { object ( SpecificSKUProperties ) } // End of list of possible types for union field type . } Fields id string ( int64 format) A unique identifier for this future reservation.
- JSON representation ReservationData JSON representation FutureReservation JSON representation SpecificSKUProperties JSON representation AllocatedInstanceProperties JSON representation AcceleratorConfig JSON representation AllocatedDisk JSON representation DiskInterface TimeWindow JSON representation ShareSettings JSON representation ShareType Status JSON representation ProcurementStatus Allocation JSON representation SpecificSKUAllocation JSON representation Status The QueryReservations response.
- This also includes specifying custom machine type following custom-NUMBER OF CPUS-AMOUNT OF MEMORY pattern. guestAccelerator[] object ( AcceleratorConfig ) Specifies accelerator type and count. minCpuPlatform string Minimum cpu platform the reservation. localSsd[] object ( AllocatedDisk ) Specifies amount of local ssd to reserve with each instance.
- The type of the future reservation which can only be for a specific SKU for now. type can be only one of the following: specificSkuProperties object ( SpecificSKUProperties ) Future Reservation configuration to indicate instance properties and total count.

