---
title: "type Order (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/reference/latest/OrderService.Order
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/reference/latest/OrderService.Order
  title: "type Order (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
type Order (v202602)
Stay organized with collections
Save and categorize content based on your preferences.
Service
OrderService
Dependencies
OrderPage
createOrders()
updateOrders()
▼
Order
An Order represents a grouping of individual LineItem objects, each of which
fulfill an ad request from a particular advertiser.
Namespace
https://www.google.com/apis/ads/publisher/v202602
Field
id
xsd: long
The unique ID of the Order . This value is readonly and is assigned by Google.
name
xsd: string
The name of the Order . This value is required to create an order and has a maximum
length of 255 characters.
startDateTime
DateTime
The date and time at which the Order and its associated line items are eligible to
begin serving. This attribute is readonly and is derived from the line item of the order which
has the earliest LineItem.startDateTime .
endDateTime
DateTime
The date and time at which the Order and its associated line items stop being served.
This attribute is readonly and is derived from the line item of the order which has the latest
LineItem.endDateTime .
unlimitedEndDateTime
xsd: boolean
Specifies whether or not the Order has an unlimited end date. This attribute is
readonly and is true if any of the order's line items has LineItem.unlimitedEndDateTime set to true .
status
OrderStatus
The status of the Order . This attribute is read-only.
Enumerations
DRAFT
Indicates that the Order has just been created but no approval has
been requested yet.
PENDING_APPROVAL
Indicates that a request for approval for the Order has been made.
APPROVED
Indicates that the Order has been approved and is ready to serve.
DISAPPROVED
Indicates that the Order has been disapproved and is not eligible
to serve.
PAUSED
This is a legacy state. Paused status should be checked on LineItems s within the
order.
CANCELED
Indicates that the Order has been canceled and cannot serve.
DELETED
Indicates that the Order has been deleted by DSM.
UNKNOWN
The value returned if the actual value is not exposed by the requested API
version.
isArchived
xsd: boolean
The archival status of the Order . This attribute is readonly.
notes
xsd: string
Provides any additional notes that may annotate the Order . This attribute is optional
and has a maximum length of 65,535 characters.
externalOrderId
xsd: int
An arbitrary ID to associate to the Order , which can be used as a key to an external
system. This value is optional.
poNumber
xsd: string
The purchase order number for the Order . This value is optional and has a maximum
length of 63 characters.
currencyCode
xsd: string
The ISO currency code for the currency used by the Order . This value is read-only and
is the network's currency code.
advertiserId
xsd: long
The unique ID of the Company , which is of type Company.Type.ADVERTISER , to
which this order belongs. This attribute is required.
advertiserContactIds
xsd: long[]
List of IDs for advertiser contacts of the order.
agencyId
xsd: long
The unique ID of the Company , which is of type Company.Type.AGENCY , with which
this order is associated. This attribute is optional.
agencyContactIds
xsd: long[]
List of IDs for agency contacts of the order.
creatorId
xsd: long
The unique ID of the User who created the Order on behalf of the advertiser.
This value is readonly and is assigned by Google.
traffickerId
xsd: long
The unique ID of the User responsible for trafficking the Order . This value is
required for creating an order.
secondaryTraffickerIds
xsd: long[]
The IDs of the secondary traffickers associated with the order. This value is optional.
salespersonId
xsd: long
The unique ID of the User responsible for the sales of the Order . This value is
optional.
secondarySalespersonIds
xsd: long[]
The IDs of the secondary salespeople associated with the order. This value is optional.
totalImpressionsDelivered
xsd: long
Total impressions delivered for all line items of this Order . This value is read-only
and is assigned by Google.
totalClicksDelivered
xsd: long
Total clicks delivered for all line items of this Order . This value is read-only and is
assigned by Google.
totalViewableImpressionsDelivered
xsd: long
Total viewable impressions delivered for all line items of this Order . This value is
read-only and is assigned by Google. Starting in v201705, this will be null when the
order does not have line items trafficked against a viewable impressions goal.
totalBudget
Money
Total budget for all line items of this Order . This value is a readonly field assigned
by Google and is calculated from the associated LineItem.costPerUnit values.
appliedLabels
AppliedLabel []
The set of labels applied directly to this order.
effectiveAppliedLabels
AppliedLabel []
Contains the set of labels applied directly to the order as well as those inherited from the
company that owns the order. If a label has been negated, only the negated label is returned.
This field is readonly and is assigned by Google.
lastModifiedByApp
xsd: string
The application which modified this order. This attribute is read only and is assigned by
Google.
isProgrammatic
xsd: boolean
Specifies whether or not the Order is a programmatic order. This value is optional and
defaults to false.
appliedTeamIds
xsd: long[]
The IDs of all teams that this order is on directly.
lastModifiedDateTime
DateTime
The date and time this order was last modified.
customFieldValues
BaseCustomFieldValue []
CustomFieldValue
DropDownCustomFieldValue
The values of the custom fields associated with this order.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
