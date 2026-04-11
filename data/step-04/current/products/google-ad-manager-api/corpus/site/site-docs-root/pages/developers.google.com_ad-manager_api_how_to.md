---
title: "How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/how_to
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/intro
source_metadata:
  url: https://developers.google.com/ad-manager/api/how_to
  title: "How To Guide \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
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
How To Guide
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Users with administrator rights can create new users directly in their network using the UserService.
The effective root AdUnit, which is the topmost AdUnit that supports modifying its child nodes, can be retrieved using NetworkService.getCurrentNetwork().
Objects can be searched for by search criteria using the get Objects ByStatement() method with a PQL query.
Creating an order involves creating an Order object, setting required IDs and a name, and calling createOrders() .
Creating a line item requires creating LineItem and Targeting objects, and calling createLineItems() .
This page provides details on how to perform common tasks using the API.
Creating Users
The UserService allows
a user with Administrator rights to create
a user directly in their network. Any developer can do this without
having the new user sign up first. For example, if you are trying out the API for
the first time, instead of performing every API call as an Administrator (the default
for your email address), you may want to create a few users with roles such as
Salesperson, Trafficker, or Advertiser to test real-world workflows.
Create some new gmail addresses such as my.name.salesperson@gmail.com . Alternatively,
register an existing non-gmail address as a new
Google account .
Call createUsers with that new address and the chosen Role .
You can authenticate as that new user, using OAuth 2.0 to generate your access token.
Getting the Root AdUnit
Both the topmost AdUnit to which you can add child nodes and the permitted depth of your hierarchy depend on your account type (Small Business or Premium). The topmost AdUnit that supports modifying its child nodes is called the effective root AdUnit .
To retrieve the effective root, call NetworkService.getCurrentNetwork() , and examine the effectiveRootAdUnitId field on the returned Network object.
Note: Different account types support different hierarchy patterns.
Querying for an Object
You search for objects by search criteria using the get Objects ByStatement() method
exposed by many services, where Object is a specific object type. This
method takes a PQL query, which is similar to a SQL query in that it lets you specify
fields to search on (where field names map to properties on the object), sort,
limit, and offset your search results. See the PQL
Guide to learn more about PQL, and also to learn which object fields you can
filter by.
Creating an Order
To create an order, simply create an Order object and set the advertiser,
salesperson, and trafficker IDs to the appropriate users, assign a unique name,
and call createOrders() . The result will include the newly created Order ,
or an error.
Example
See example Java code for creating an order .
Creating a Line Item
Here are the steps for creating a new line item:
Create a new Order object or use an existing one.
Create a new LineItem object, and set the rotation type, creative size array,
start and end dates, and other properties.
Create a new InventoryTargeting object, and specify which Placement or AdUnit objects to target or exclude.
Wrap your InventoryTargeting object inside a new Targeting object, and assign
it to your LineItem 's targeting property.
Call the lineitem service method createLineItems() with your new object, and examine the result to see whether your object was created.
Example
See example Java code for creating a line item .
Creating a Creative
Different types of creatives support different components: for example, an image
creative supports a single source file for the image; a flash creative supports
two underlying asset files: a flash file and a backup image file, in case the flash
file cannot be served. For creatives hosted on third-party sites, you will upload
only an HTML snippet that references the file on the third-party server. See your
specific Creative subclass to learn what assets you'll have to upload in order
to create your creative.
Example
See example Java code for creating an image creative .
Modifying an Existing Object
To modify an existing object, query for your object by calling get Objects ByStatement() ,
update the values in the returned objects, and then call update Objects () .
Note: Updated objects will completely replace existing objects, so if you
neglect to set a property value in the object that you send, the saved object will
get the default value for that property, not the previous value.
Changing Object Status
Object status is changed by calling the perform Object Action() method
exposed by your service. This method takes two parameters:
An instance of the action object that describes what you want done. For
instance, the order service exposes several actions including ApproveOrders , PauseOrders ,
and ArchiveOrders . Action objects all derive from a base action
class appropriate for your service.
A PQL query describing which objects to change. You can change
the status of one or more objects at a time by specifying an appropriate PQL
statement.
Generating Ad Tags
You cannot generate ad tags using the API; instead you must use the Google Ad Manager website. See the Tagging
Help Center section for
more information.
More Examples
You can find many more examples in our client library sample code, in several
different programming languages. See the Client Libraries & Example Code
page for a link to examples in your programming language.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The API facilitates several core actions: creating users via `createUsers` with specified roles, and retrieving the effective root AdUnit using `NetworkService.getCurrentNetwork()`. Objects are queried using `get*Objects*ByStatement()`, and orders are created via `createOrders()`. Line items require order creation, then crafting `LineItem`, `InventoryTargeting`, and `Targeting` objects before utilizing `createLineItems()`. Creatives are created with the necessary asset uploads, while object modification involves querying, updating, and using `update*Objects*()`. Object status is changed with the `perform*Object*Action()` method. Ad tags are generated via the Google Ad Manager website.\n"]]
