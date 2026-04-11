---
title: "Google Ad Manager report transformation \_|\_ BigQuery \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transformation
knowledge_key: corpus
source_id: site-docs-reference-5
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/api-uploads
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/doubleclick-publisher-transformation
  title: "Google Ad Manager report transformation \_|\_ BigQuery \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Google Ad Manager report transformation
When your Google Ad Manager (formerly known as DoubleClick for Publishers) data
transfer files are transferred to BigQuery, the files are
transformed into the following BigQuery tables and views.
When you view the tables and views in BigQuery, the value for
network_code is your Google Ad Manager network code.
Google Ad Manager file
BigQuery table(s)
BigQuery view(s)
Data Transfer files
NetworkRequests NetworkBackfillRequests
p_NetworkRequests_ network_code p_NetworkBackfillRequests_ network_code
NetworkRequests_ network_code NetworkBackfillRequests_ network_code
NetworkCodeServes NetworkBackfillCodeServes
p_NetworkCodeServes p_NetworkBackfillCodeServes_ network_code
NetworkCodeServes NetworkBackfillCodeServes_ network_code
NetworkImpressions NetworkBackfillImpressions
p_NetworkImpressions_ network_code p_NetworkBackfillImpressions_ network_code
NetworkImpressions_ network_code NetworkBackfillImpressions_ network_code
NetworkClicks NetworkBackfillClicks
p_NetworkClicks_ network_code p_NetworkBackfillClicks_ network_code
NetworkClicks_ network_code NetworkBackfillClicks_ network_code
NetworkActiveViews NetworkBackfillActiveViews
p_NetworkActiveViews_ network_code p_NetworkBackfillActiveViews_ network_code
NetworkActiveViews_ network_code NetworkBackfillActiveViews_ network_code
NetworkBackfillBids
p_NetworkBackfillBids_ network_code
NetworkBackfillBids_ network_code
NetworkVideoConversions NetworkBackfillVideoConversions
p_NetworkVideoConversions_ network_code p_NetworkBackfillVideoConversions_ network_code
NetworkVideoConversions_ network_code NetworkBackfillVideoConversions_ network_code
NetworkRichMediaConversions NetworkBackfillRichMediaConversions
p_NetworkRichMediaConversions_ network_code p_NetworkBackfillRichMediaConversions_ network_code
NetworkRichMediaConversions_ network_code NetworkBackfillRichMediaConversions_ network_code
NetworkActivities
p_NetworkActivities_ network_code
NetworkActivities_ network_code
Match Tables
AdCategory
p_MatchTableAdCategory_ network_code
MatchTableAdCategory_ network_code
AdUnit
p_MatchTableAdUnit_ network_code
MatchTableAdUnit_ network_code
AudienceSegment
p_MatchTableAudienceSegment_ network_code
MatchTableAudienceSegment_ network_code
AudienceSegmentCategory
p_MatchTableAudienceSegmentCategory_ network_code
MatchTableAudienceSegmentCategory_ network_code
BandwidthGroup
p_MatchTableBandwidthGroup_ network_code
MatchTableBandwidthGroup_ network_code
Browser
p_MatchTableBrowser_ network_code
MatchTableBrowser_ network_code
BrowserLanguage
p_MatchTableBrowserLanguage_ network_code
MatchTableBrowserLanguage_ network_code
Company
p_MatchTableCompany_ network_code
MatchTableCompany_ network_code
DeviceCapability
p_MatchTableDeviceCapability_ network_code
MatchTableDeviceCapability_ network_code
DeviceCategory
p_MatchTableDeviceCategory_ network_code
MatchTableDeviceCategory_ network_code
DeviceManufacturer
p_MatchTableDeviceManufacturer_ network_code
MatchTableDeviceManufacturer_ network_code
ExchangeRate (deprecated)
-
-
GeoTarget
p_MatchTableGeoTarget_ network_code
MatchTableGeoTarget_ network_code
LineItem
p_MatchTableLineItem_ network_code
MatchTableLineItem_ network_code
MobileCarrier
p_MatchTableMobileCarrier_ network_code
MatchTableMobileCarrier_ network_code
MobileDevice
p_MatchTableMobileDevice_ network_code
MatchTableMobileDevice_ network_code
MobileDeviceSubmodel
p_MatchTableMobileDeviceSubmodel_ network_code
MatchTableMobileDeviceSubmodel_ network_code
OperatingSystem
p_MatchTableOperatingSystem_ network_code
MatchTableOperatingSystem_ network_code
OperatingSystemVersion
p_MatchTableOperatingSystemVersion_ network_code
MatchTableOperatingSystemVersion_ network_code
Order
p_MatchTableOrder_ network_code
MatchTableOrder_ network_code
Placement
p_MatchTablePlacement_ network_code
MatchTablePlacement_ network_code
ProgrammaticBuyer
p_MatchTableProgrammaticBuyer_ network_code
MatchTableProgrammaticBuyer_ network_code
ProposalRetractionReason
p_MatchTableProposalRetractionReason_ network_code
MatchTableProposalRetractionReason_ network_code
ThirdPartyCompany
p_MatchTableThirdPartyCompany_ network_code
MatchTableThirdPartyCompany_ network_code
TimeZone
p_MatchTableTimeZone_ network_code
MatchTableTimeZone_ network_code
User
p_MatchTableUser_ network_code
MatchTableUser_ network_code
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
