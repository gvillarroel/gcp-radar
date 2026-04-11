---
title: "Google Ad Manager API release notes \_|\_ Ad Manager API (Beta) \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/ad-manager/api/beta/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/docs/release-notes
  title: "Google Ad Manager API release notes \_|\_ Ad Manager API (Beta) \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
Google Ad Manager API release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Report dimensions and metrics will be renamed, with deprecated values removed after October 1st, 2025.
Report messages will be restructured in an upcoming release, altering import paths in client libraries but remaining wire compatible.
The canonical resource name for CustomTargetingValue has changed, and clients must migrate from the old format before July 28th, 2025.
Several resources including AdBreak , AdUnit , CustomField , Placement , and Role now include fields with default values in responses.
The Ad Manager API is in Open Beta, with support added for Private Auctions, Ad Breaks, Interactive Reporting, and publisher provided signals, while some Closed Beta services were temporarily removed.
This page documents production updates to Google Ad Manager API.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated features.
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the feed URL directly: https://developers.google.com/feeds/ad-manager-release-notes.xml .
January 12, 2026
Announcement
The Report Dimensions UNIFIED_PRICING_RULE_ID and UNIFIED_PRICING_RULE_NAME
have been deprecated. The replacement dimensions PRICING_RULE_ID and
PRICING_RULE_NAME have been added as an alias to the deprecated dimensions.
On or after January 30, 2026 the server will return the new
PRICING_RULE_ID and PRICING_RULE_NAME dimensions. The deprecated dimensions
will be removed and requests to create or update reports using the deprecated
dimensions will fail.
This change only impacts clients reading and writing report resources that
use UNIFIED_PRICING_RULE_ID and UNIFIED_PRICING_RULE_NAME . There is no
change to ReportService.runReport and ReportService.fetchReportResultRows .
Clients must migrate to using PRICING_RULE_ID and PRICING_RULE_NAME
by January 30, 2026 .
December 04, 2025
Announcement
Upcoming changes to draft reports
On or after January 5, 2026 :
Requests using SAVED visibility value will normalize to the alias value
VISIBLE .
Reports with a DRAFT visibility will be automatically migrated:
* The Report.visibility field will be set to VISIBLE
* The current Report.reportDefinition value will be copied to a new
draftReportDefinition field
* The Report.reportDefinition field will be unset
Reports must have a reportDefinition to run:
draftReportDefinition
reportDefinition
RunReport Behavior
Unset
Set
Runs reportDefinition
Set
Set
Runs reportDefinition
Set
Unset
Error
Clients running or writing reports with Visibility.DRAFT must update the
report to Visibility.VISIBLE using the API or by naming the report in the UI
before January 5, 2026.
On or after January 30, 2026 :
The DRAFT and SAVED values will be removed.
Requests using DRAFT and SAVED values will fail.
Clients must migrate to using Visibility.VISIBLE
by January 30, 2026 .
Announcement
On or after January 30, 2026, errors will no longer include AdManagerError
objects in the error.details field. The same error information is provided
in the google.rpc.BadRequest object.
Before January 5, 2026 :
{
"error" : {
"code" : 400 ,
"message" : "Field foo is not supported for filtering." ,
"status" : "INVALID_ARGUMENT" ,
"details" : [
{
"@type" : "type.googleapis.com/google.ads.admanager.v1.AdManagerError" ,
"errorCode" : "PARSE_ERROR_UNPARSABLE" ,
"message" : "Field foo is not supported for filtering."
},
{
"@type" : "type.googleapis.com/google.rpc.BadRequest" ,
"fieldViolations" : [
{
"description" : "Field foo is not supported for filtering." ,
"reason" : "PARSE_ERROR_UNPARSABLE" ,
"localizedMessage" : {
"message" : "Field foo is not supported for filtering."
}
}
]
},
{
"@type" : "type.googleapis.com/google.rpc.RequestInfo" ,
"requestId" : "8897430220173363092"
}
]
}
}
On or after January 5, 2026 :
{
"error" : {
"code" : 400 ,
"message" : "Field foo is not supported for filtering." ,
"status" : "INVALID_ARGUMENT" ,
"details" : [
{
"@type" : "type.googleapis.com/google.rpc.BadRequest" ,
"fieldViolations" : [
{
"description" : "Field foo is not supported for filtering." ,
"reason" : "PARSE_ERROR_UNPARSABLE" ,
"localizedMessage" : {
"message" : "Field foo is not supported for filtering."
}
}
]
},
{
"@type" : "type.googleapis.com/google.rpc.RequestInfo" ,
"requestId" : "8897430220173363092"
}
]
}
}
Clients that rely on AdManagerError must migrate to use BadRequest before
January 5, 2026 .
Breaking
Renamed Report metric USER_MESSAGES_CCPA_MESSAGES_SHOWN to USER_MESSAGES_US_STATES_MESSAGES_SHOWN .
Feature
Added LineItem resource.
Feature
Added support for creating and updating customTargetingKeys .
Feature
Added support for creating and updating adUnits .
Feature
Added support for creating and updating customFields .
Feature
Added support for creating and updating placements .
Feature
Added support for reading, allowing, and blocking adReviewCenterAds .
Feature
Added additional report dimensions, metrics, types, and date ranges.
Feature
Added AudienceSegment resource.
Feature
Added BandwidthGroup resource.
Feature
Added Contact resource.
Feature
Added ContentLabel resource.
Feature
Added CreativeTemplate resource.
Feature
Added Team resource.
August 29, 2025
Announcement
In an upcoming release, the following Report dimensions and metrics will be renamed:
Current value
New value
PROGRAMMATIC_BUYER_ID
DEAL_BUYER_ID
PROGRAMMATIC_BUYER_NAME
DEAL_BUYER_NAME
AD_SERVER_UNFILTERED_IMPRESSIONS
AD_SERVER_UNFILTERED_DOWNLOADED_IMPRESSIONS
The current values will be marked as deprecated but will be supported as an alias to the new value until October 1st, 2025 . The server will normalize usage to the new values. For example, if a client uses PROGRAMMATIC_BUYER_ID when creating a Report, the response from the server will contain DEAL_BUYER_ID .
On or after October 1st, 2025 the deprecated values will be removed and requests using these values will fail. Clients must migrate to the new values before October 1st, 2025 .
August 12, 2025
Announcement
In an upcoming release, Report messages will be restructured. These changes are wire compatible, but this change will alter the import paths in client libraries.
Current Type Path
New Type Path
Report.Field
ReportDefinition.Field
Report.DateRange
ReportDefinition.DateRange
Report.Sort
ReportDefinition.Sort
Report.Filter
ReportDefinition.Filter
Report.Slice
ReportDefinition.Slice
Report.Flag
ReportDefinition.Flag
Report.ReportType
ReportDefinition.ReportType
Report.Dimension
ReportDefinition.Dimension
Report.Metric
ReportDefinition.Metric
Report.MetricValueType
ReportDefinition.MetricValueType
Report.TimePeriodColumn
ReportDefinition.TimePeriodColumn
Report.TimeZoneSource
ReportDefinition.TimeZoneSource
Report.Value
ReportValue
Report.DataTable
ReportDataTable
Schedule
ScheduleOptions.Schedule
Feature
Added BrowserLanguage resource.
Feature
Added MobileDevice resource.
Feature
Added Browser resource.
Feature
Added DeviceCapability resource.
Feature
Added additional Report dimensions and metrics.
Feature
Added ContentBundle resource.
Feature
Added methods for reading and writing Contact resources.
Feature
Added MobileDeviceSubmodel resource.
Feature
Added Content resource.
Feature
Added Application resource.
Feature
Added MobileCarrier resource.
Feature
Added DeviceManufacturer resource.
Feature
Added CmsMetadataKey resource.
Feature
Added CmsMetadataValue resource.
June 26, 2025
Breaking
The canonical resource name for CustomTargetingValue has been changed from
networks/{networkCode}/customTargetingKeys/{customTargetingKeyId}/customTargetingValues/{customTargetingValueId}
to
networks/{networkCode}/customTargetingValues/{customTargetingValueId} .
To retrieve custom targeting values for a specific key, use the method
networks.customTargetingValues.list with a filter on customTargetingKey .
Clients using the old format should migrate before July 28th, 2025 . Requests using the old format will fail on or after July 28th, 2025.
Change
AdBreak , AdUnit , CustomField , Placement , and Role resources now include fields with default values in responses. Previously, fields with default values like 0 or an empty string were omitted from the response.
Old behavior
{
"name" : "/networks/123/exampleResource/1"
}
New behavior
{
"name" : "/networks/123/exampleResource/1" ,
"stringField" : "" ,
"intField" : 0
}
Feature
Added OperatingSystem and OperatingSystemVersion resources.
Feature
Added GeoTarget resource.
Feature
Added support for Targeting on Private Auction deals.
Feature
Added BandwidthGroup resource.
Feature
Added DeviceCategory resource.
Feature
Added ProgrammaticBuyer resource.
May 23, 2025
Announcement
On or after June 23, 2025 the canonical resource name for CustomTargetingValue will change formats from networks/{networkCode}/customTargetingKeys/{customTargetingKeyId}/customTargetingValues/{customTargetingValueId} to networks/{networkCode}/customTargetingValues/{customTargetingValueId} .
March 11, 2025
Feature
Added support for Ad Breaks .
Feature
Added support for Private Auctions .
Breaking
Refactored type paths for Companies and Reports. This change is wire compatible, but import paths will change for Python client library versions >0.2.4. Other client libraries are not affected.
Fixed
Corrected resource name patterns and grammar in documentation.
September 24, 2024
Announcement
Open Beta: The Ad Manager API is now available to all users.
Breaking
Temporarily removed Closed Beta services that had data discrepancies with the SOAP API:
LineItem
Creative
Contact
Label
Team
These will be added back when the discrepancies are resolved.
Feature
Added support for Interactive Reporting
Feature
Request ID is set in the HTTP header X-Goog-Correlation-Id for all responses and in the error body for API errors. This ID can be shared with support to assist with troubleshooting.
June 18, 2024
Breaking
All DateTime fields have been changed to use RFC3339 timestamp strings.
Breaking
Removed support for ReportService methods. These will be replaced by methods for running Interactive reports .
Feature
Added adUnitSizes resource to list the ad unit sizes available in a network.
Feature
Added support for publisher provided signals resources including entitySignalsMappings and taxonomyCategories .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-11 UTC."],[],["Google Ad Manager API updates include its open beta launch on September 24, 2024, along with support for Interactive Reporting. Request IDs are now in HTTP headers and error bodies for troubleshooting. Temporarily removed services (LineItem, Creative, Contact, Label, Team) due to data discrepancies. June 18th changes include removing ReportService methods, switching DateTime fields to RFC3339, and adding support for publisher-provided signals via new resources like `entitySignalsMappings` and `taxonomyCategories` and `adUnitSizes` resource.\n"]]
