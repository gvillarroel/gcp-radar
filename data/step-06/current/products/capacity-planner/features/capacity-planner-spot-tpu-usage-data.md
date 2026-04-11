---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:10:13.933Z"
product_name: "Capacity Planner"
product_slug: "capacity-planner"
feature_name: "Capacity Planner Spot TPU usage data"
feature_slug: "capacity-planner-spot-tpu-usage-data"
latest_feature_date: "2025-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/capacity-planner/docs/view-data"
  - "https://docs.cloud.google.com/capacity-planner/docs/release-notes"
  - "https://docs.cloud.google.com/capacity-planner/docs/reference/libraries"
keywords:
  - "spot"
  - "tpu"
  - "supports"
  - "capacity"
  - "preview"
  - "planner"
  - "usage"
  - "for"
---

# Capacity Planner Spot TPU usage data

Product: Capacity Planner
Coverage: LOW

## Step 02 Summary

Capacity Planner preview supports usage data for TPUs that are attached to Spot VMs.

## Extended Definition

Capacity Planner preview supports usage data for TPUs that are attached to Spot VMs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- [https://docs.cloud.google.com/capacity-planner/docs/reference/libraries](https://docs.cloud.google.com/capacity-planner/docs/reference/libraries)

## Supporting Pages

### View usage and forecast data \_|\_ Capacity Planner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/view-data](https://docs.cloud.google.com/capacity-planner/docs/view-data)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Limitations Before you view usage and forecast data in Capacity Planner, consider the following: Forecast data isn't supported for the following resources: Spot VMs (including the instances and any attached resources, such as GPUs and TPUs) Cloud Storage buckets Usage data for Spot VMs and preemptible quota is only available for instances, GPUs, and TPUs.
- View the forecast and usage of your resources View the usage and forecast data about the compute instances, Persistent Disk volumes, GPUs, and TPUs in your project, folder, or organization by using the following methods: View the forecast and usage of your resources using the Google Cloud console (Recommended) View the forecast and usage of your resources using the Capacity Planner API View the forecast and usage of your resources using the Google Cloud console To view the forecast and usage of your resources using the Google Cloud console, complete the following steps.
- Go to Capacity Planner In the Usage & forecast section of the Capacity Planner navigation menu, select one of the following resource types: Virtual Machines Disk GPU TPU On the Usage and forecast chart of the resource, click Forecast Options and then follow these steps: Click the Show Historical Forecast on chart toggle to the on position.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to view the usage and forecast data of your resources: To view forecast data: capacityplanner.forecasts.list on the project, folder, or organization To view historical usage data: capacityplanner.usageHistories.list on the project, folder, or organization To summarize the historical usage data: capacityplanner.usageHistories.summarize on the project, folder, or organization You might also be able to get these permissions with custom roles or other predefined roles .

### Capacity Planner release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/release-notes](https://docs.cloud.google.com/capacity-planner/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- October 03, 2025 Feature Preview: Capacity Planner supports the following: Usage and forecast data for Hyperdisk volumes Usage and forecast data for Persistent Disk and Hyperdisk volume IOPS and throughput Usage data for Spot VMs and TPUs that are attached to Spot VMs For more information, see View usage and forecast data .
- For more information, see the following pages: About Capacity Planner Export usage and forecast data in Capacity Planner View actual and forecasted usage in Capacity Planner March 28, 2024 Feature Preview : Capacity planner supports the following for data aggregated by organization ID: View and export the actual and forecasted usage data of the VMs and persistent disks in your organization.
- July 29, 2024 Feature Preview : Capacity planner supports the following for data aggregated by folder ID: View and export the actual and forecasted usage data of the VMs, Persistent Disk volumes, and GPUs in your folder.
- For more information, see the following: Capacity Planner overview View usage and forecast data in Capacity Planner Export usage and forecast with the Google Cloud console Export usage and forecast with the Capacity Planner API Reserve capacity in Capacity Planner December 19, 2024 Feature Preview : You can create future reservation requests for VMs of a single machine type using the Google Cloud console.

### Capacity Planner client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/capacity-planner/docs/reference/libraries](https://docs.cloud.google.com/capacity-planner/docs/reference/libraries)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To set request fields, pass in keyword arguments. request = Google :: Cloud :: CapacityPlanner :: V1beta :: QueryUsageHistoriesRequest . new Call the query usage histories method. result = client . query usage histories request The returned object is of type Google::Cloud::CapacityPlanner::V1beta::QueryUsageHistoriesResponse. p result end Additional resources C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-capacity-planner on Stack Overflow Source code Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Date ; public class SyncQueryUsageHistories { public static void main ( String [] args ) throws Exception { syncQueryUsageHistories (); } public static void syncQueryUsageHistories () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( UsageServiceClient usageServiceClient = UsageServiceClient . create ()) { QueryUsageHistoriesRequest request = QueryUsageHistoriesRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setIsSpot ( true ) . setMachineFamily ( "machineFamily419822219" ) . setMachineShape ( MachineShape . newBuilder (). build ()) . setDiskType ( "diskType279771767" ) . setConfidentialMode ( true ) . setGpuType ( "gpuType240737798" ) . setTpuType ( "tpuType-1106616237" ) . setCloudResourceType ( "cloudResourceType-1446274243" ) . setStartDate ( Date . newBuilder (). build ()) . setEndDate ( Date . newBuilder (). build ()) . build (); QueryUsageHistoriesResponse response = usageServiceClient . queryUsageHistories ( request ); } } } Node.js / This snippet has been automatically generated and should be regarded as a code template only.
- The end date of reservations usage. / // const endDate = {} // Imports the Capacityplanner library const { UsageServiceClient } = require ( ' @google-cloud/capacityplanner ' ). v1beta ; // Instantiates a client const capacityplannerClient = new UsageServiceClient (); async function callQueryUsageHistories () { // Construct request const request = { parent , }; // Run request const response = await capacityplannerClient . queryUsageHistories ( request ); console . log ( response ); } callQueryUsageHistories (); PHP use Google\ApiCore\ApiException; use Google\Cloud\CapacityPlanner\V1beta\Client\UsageServiceClient; use Google\Cloud\CapacityPlanner\V1beta\QueryUsageHistoriesRequest; use Google\Cloud\CapacityPlanner\V1beta\QueryUsageHistoriesResponse; / Returns a list of the usage histories that are in the parent parameter and match your specified filters. @param string $formattedParent The compute engine resource and location for the time series values to return.
- C# using Google.Api.Gax.ResourceNames ; using Google.Cloud.CapacityPlanner.V1Beta ; using Google.Type ; public sealed partial class GeneratedUsageServiceClientSnippets { /// <summary>Snippet for QueryUsageHistories</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void QueryUsageHistoriesRequestObject () { // Create client UsageServiceClient usageServiceClient = UsageServiceClient .

