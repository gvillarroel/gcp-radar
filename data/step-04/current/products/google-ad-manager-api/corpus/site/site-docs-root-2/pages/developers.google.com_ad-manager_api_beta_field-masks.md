---
title: "Field Masks \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/field-masks
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/field-masks
  title: "Field Masks \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
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
Send feedback
Field Masks
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Ad Manager REST API uses field masks for partial reads and writes to improve performance by limiting data transfer.
Field masks are represented by a comma-separated list of field names and support both camelCase and snake_case .
Read masks control which fields are present in an API response and can be set using the fields query parameter or the X-Goog-FieldMask HTTP header.
Update masks control which fields are changed in a PATCH request and are set as query parameters using updateMask .
Field masks can specify fields within an entity using the . character for traversal and support the * wildcard for all fields.
The Ad Manager REST API uses field masks for partial reads and writes. This can
improve performance by limiting the amount of data transferred. Field masks
are represented by a comma separated list of field names. For example:
startTime,endTime,targeting.geoTargeting
Read masks
Read masks control which fields are present in an API response. You can set a
read mask on your request in two ways:
The fields query parameter:
curl https://admanager.googleapis.com/v1/networks/123456/adUnits?fields = adUnits,nextPageToken,totalSize
The X-Goog-FieldMask HTTP header:
curl -H "X-Goog-FieldMask: adUnits,nextPageToken,totalSize" \
https://admanager.googleapis.com/v1/networks/123456/adUnits
Note: Both camelCase and snake_case are supported in field mask strings.
Default read masks
Some API methods include a default field mask for fields that are expensive
to return. List methods are an example of this. By default, they don't include
the totalSize
field.
These fields must be explicitly requested in the field mask either by name or by
using the * wildcard.
Update masks
Update masks control which fields will be changed in an update ( PATCH )
request. When an update mask is set, only the fields in the mask will be updated
regardless of which fields are set in the request body.
Update masks are set as query parameters. For example:
curl -X PATCH https://admanager.googleapis.com/v1/networks/1234/order/4567?updateMask = displayName
Field traversal
Field masks can specify fields within an entity using the . character for
traversal. This is the same syntax used by
Filters .
Field masks are always relative to the response object. For example, a mask for
reading a LineItem might include primaryGoal.units . The corresponding mask
for listing
LineItems is lineItems.primaryGoal.units .
You can specify either a field as a whole, or one of its subfields. Both
primaryGoal and primaryGoal.units are valid.
This also applies to repeated fields. A LineItem field mask of
creativePlaceholders.size is valid and only includes the size field
for each CreativePlaceholder .
Note: Field masks don't permit accessing a particular element of a repeated
field by index. This results in an INVALID_ARGUMENT error.
Wildcards
Warning: Using a wildcard in an update mask is not forwards compatible. The
wildcard will clear any fields that are unknown to your client.
Field masks support the * character which indicates all fields in the message.
The following examples demonstrate wildcard usage when listing
Orders . This method has a default read mask that does
not include the total_size field.
Example
Meaning
*
Includes all fields, including total_size
orders
Includes only the orders field and all its subfields
orders.*
Includes only the orders field and all its subfields
Invalid fields
If a field mask refers to a value that doesn't exist, the API will respond
with an INVALID_ARGUMENT error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-28 UTC."],[],["The Ad Manager REST API uses field masks to specify data in API requests, improving performance. Read masks, set via `fields` query parameters or `X-Goog-FieldMask` headers, control which fields are returned in responses; some methods have default masks. Update masks, set as query parameters, dictate which fields are modified in `PATCH` requests. Field traversal uses `.` notation, and the `*` wildcard includes all fields. Invalid fields in masks will cause an error.\n"]]
