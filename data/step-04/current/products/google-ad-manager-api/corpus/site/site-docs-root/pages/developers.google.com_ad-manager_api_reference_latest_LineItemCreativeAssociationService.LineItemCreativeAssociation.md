---
title: "type LineItemCreativeAssociation (v202602) \_|\_ Ad Manager SOAP API \_|\_\
  \ Google for Developers"
url: https://developers.google.com/ad-manager/api/reference/latest/LineItemCreativeAssociationService.LineItemCreativeAssociation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/reference/latest/LineItemCreativeAssociationService.LineItemCreativeAssociation
  title: "type LineItemCreativeAssociation (v202602) \_|\_ Ad Manager SOAP API \_\
    |\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Reference
Send feedback
type LineItemCreativeAssociation (v202602)
Stay organized with collections
Save and categorize content based on your preferences.
Service
LineItemCreativeAssociation...
Dependencies
LineItemCreativeAssociation...
createLineItemCreativeAssoc...
updateLineItemCreativeAssoc...
▼
LineItemCreativeAssociation
A LineItemCreativeAssociation associates a Creative or CreativeSet with a
LineItem so that the creative can be served in ad units targeted by the line item.
Namespace
https://www.google.com/apis/ads/publisher/v202602
Field
lineItemId
xsd: long
The ID of the LineItem to which the Creative should be associated. This
attribute is required.
creativeId
xsd: long
The ID of the Creative being associated with a LineItem .
This attribute is required if this is an association between a
line item and a creative.
This attribute is ignored if this is an association between a line
item and a creative set.
If this is an association between a line item and a creative,
when retrieving the line item creative association, the
creativeId
will be the creative's ID.
If this is an association between a line item and a creative set,
when retrieving the line item creative association, the
creativeId
will be the ID of the master creative .
creativeSetId
xsd: long
The ID of the CreativeSet being associated with a LineItem . This attribute is
required if this is an association between a line item and a
creative set.
This field will be null when
retrieving associations between line items and creatives not
belonging to a set.
manualCreativeRotationWeight
xsd: double
The weight of the Creative . This value is only used if the line item's creativeRotationType is set to CreativeRotationType.MANUAL . This attribute is optional
and defaults to 10.
sequentialCreativeRotationIndex
xsd: int
The sequential rotation index of the Creative . This value is used only if the
associated line item's LineItem.creativeRotationType is set to CreativeRotationType.SEQUENTIAL . This attribute is optional and defaults to 1.
startDateTime
DateTime
Overrides the value set for LineItem.startDateTime . This value is optional and is only
valid for Ad Manager 360 networks. If unset, the LineItem.startDateTime will be used.
startDateTimeType
StartDateTimeType
Specifies whether to start serving to the LineItemCreativeAssociation right away, in an
hour, etc. This attribute is optional and defaults to StartDateTimeType.USE_START_DATE_TIME .
Enumerations
USE_START_DATE_TIME
Use the value in startDateTime .
IMMEDIATELY
The entity will start serving immediately. startDateTime in the
request is ignored and will be set to the current time. Additionally,
startDateTimeType will be set to
StartDateTimeType.USE_START_DATE_TIME .
ONE_HOUR_FROM_NOW
The entity will start serving one hour from now. startDateTime
in the request is ignored and will be set to one hour from the current
time. Additionally, startDateTimeType will be set to
StartDateTimeType.USE_START_DATE_TIME .
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
endDateTime
DateTime
Overrides LineItem.endDateTime . This value is optional and is only valid for Ad Manager
360 networks. If unset, the LineItem.endDateTime will be used.
destinationUrl
xsd: string
Overrides the value set for HasDestinationUrlCreative.destinationUrl . This value is
optional and is only valid for Ad Manager 360 networks.
sizes
Size []
Overrides the value set for Creative.size , which allows the creative to be served to ad
units that would otherwise not be compatible for its actual size. This value is optional.
status
LineItemCreativeAssociation...
The status of the association. This attribute is read-only.
Enumerations
ACTIVE
The association is active and the associated Creative can be served.
INACTIVE
The association is inactive and the associated Creative is ineligible for being
served.
UNKNOWN
The value returned if the actual value is not exposed by the requested API version.
stats
LineItemCreativeAssociation...
Contains trafficking statistics for the association. This attribute is readonly and is
populated by Google. This will be null in case there are no statistics for the
association yet.
lastModifiedDateTime
DateTime
The date and time this association was last modified.
targetingName
xsd: string
Specifies CreativeTargeting for this line item creative association.
This attribute is optional. It should match the creative
targeting specified on the corresponding CreativePlaceholder in the
LineItem that
is being associated with the Creative .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
