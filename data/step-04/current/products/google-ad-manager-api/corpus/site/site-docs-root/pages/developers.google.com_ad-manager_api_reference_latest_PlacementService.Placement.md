---
title: "type Placement (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/reference/latest/PlacementService.Placement
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/reference/latest/PlacementService.Placement
  title: "type Placement (v202602) \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
type Placement (v202602)
Stay organized with collections
Save and categorize content based on your preferences.
Service
PlacementService
Dependencies
PlacementPage
createPlacements()
updatePlacements()
▼
Placement
Inheritance
SiteTargetingInfo
▼
Placement
A Placement groups related AdUnit objects.
Namespace
https://www.google.com/apis/ads/publisher/v202602
Field
SiteTargetingInfo (inherited)
Placement
id
xsd: long
Uniquely identifies the Placement . This attribute is read-only and is assigned by
Google when a placement is created.
name
xsd: string
The name of the Placement . This value is required and has a maximum length of 255
characters.
description
xsd: string
A description of the Placement . This value is optional and its maximum length is 65,535
characters.
placementCode
xsd: string
A string used to uniquely identify the Placement for purposes of serving the ad. This
attribute is read-only and is assigned by Google when a placement is created.
status
InventoryStatus
The status of the Placement . This attribute is read-only.
Enumerations
ACTIVE
The object is active.
INACTIVE
The object is no longer active.
ARCHIVED
The object has been archived.
targetedAdUnitIds
xsd: string[]
The collection of AdUnit object IDs that constitute the Placement .
lastModifiedDateTime
DateTime
The date and time this placement was last modified.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],[]]
