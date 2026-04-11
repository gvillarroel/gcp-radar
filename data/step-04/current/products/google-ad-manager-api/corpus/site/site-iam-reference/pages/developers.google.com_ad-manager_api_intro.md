---
title: "Basic Concepts \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/intro
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/authentication
source_metadata:
  url: https://developers.google.com/ad-manager/api/intro
  title: "Basic Concepts \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
Send feedback
Basic Concepts
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page overviews the Google Ad Manager API architecture and general concepts.
Key concepts described include Order, LineItem, Creative, InventoryTargeting, Placement, and AdUnit.
An Order contains LineItems, which define ad showing requirements, and LineItems are linked to Creatives via LineItemCreativeAssociations.
InventoryTargeting and other Targeting subclasses determine where and to whom ads show.
Placements are collections of AdUnits, and AdUnits represent ad locations on pages.
This page provides an overview
of the architecture of the Google Ad Manager API and describes general concepts and terms in Ad Manager.
API Architecture
Here is a simplified diagram of the main classes in the Ad Manager API, and how they relate to each other:
Order
An Order object holds general information about the order such as the currency or salesperson, and contains one or more LineItem instances. In code, each LineItem holds the ID of its containing Order , rather than the Order holding a list of LineItem objects.
LineItem
A LineItem object describes a set of requirements for an ad to show, including how
and when the ads should be shown, the sizes of the creatives it should show and
the order in which to show them (in order, weighted, or according to their performance),
the priority of these ads, and many properties describing the cost structure. A
LineItem has one InventoryTargeting object that describes which AdUnit and Placement objects it can target, and optional additional Targeting subclass objects that represent geographical, custom, or other criteria.
LineItemCreativeAssociation
A LineItemCreativeAssociation (often called a LICA) links one LineItem to
one Creative . Line items can be linked to more than one creative, and depending on your account type, you might be able to link a creative to more than one line item. When you create a LineItemCreativeAssociation ,
Ad Manager first checks whether both the creative and the line item are compatible;
if the sizes differ, for instance, you'll get an error when you try to create
or update the association. This object also lets you override some values in the associated LineItem ,
such as start/end dates, or size (if you have a creative that doesn't
quite fit the size specified by the line item, but you are willing to let Ad Manager
adjust the size of the creative to fit the ad unit on the fly). LICAs are not exposed in the Ad Manager user interface; they are an API convention.
Creative
A Creative represents the actual ad. If the ad is hosted by Ad Manager,
this object holds the actual image bytes, flash files, or custom HTML tags stored
on Ad Manager's servers; if the creative is hosted on a
third-party site, the creative is a URL or HTML snippet that makes the
request from the third-party server.
InventoryTargeting and Targeting subclasses
The InventoryTargeting object lists which ad units are associated with a specific LineItem . You can specify additional, optional targeting criteria using additional instances of an appropriate subclass of Targeting .
Placement
A Placement object is a collection of one or more AdUnit objects.
AdUnit
An AdUnit represents an ad location on one or more pages. An AdUnit can be a target of either a LineItem 's InventoryTargeting object or a Placement object. An AdUnit object includes a size, an ID, and a unique name. The ID is used to identify other AdUnit objects within the API; the name is used as a unique identifier in the HTML tags to identify a specific AdUnit object, and is sent back to Ad Manager as part of the page request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The Google Ad Manager API's core components include `Order`, `LineItem`, `LineItemCreativeAssociation` (LICA), `Creative`, `InventoryTargeting`, `Placement`, and `AdUnit`. An `Order` contains `LineItem` instances, which define ad display requirements. A LICA links a `LineItem` to a `Creative`. `InventoryTargeting` links ad units to `LineItem`. `Placement` is a collection of `AdUnit`, representing ad locations. `Creative` is the actual ad content. AdUnits can be used to identify other adUnits.\n"]]
