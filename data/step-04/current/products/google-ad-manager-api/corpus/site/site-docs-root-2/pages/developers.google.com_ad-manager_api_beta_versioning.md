---
title: "Versioning \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/versioning
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/versioning
  title: "Versioning \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
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
Versioning
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Ad Manager API uses both named Major version releases and backward compatible in-place releases.
Services, methods, and fields can be marked as deprecated but remain supported until the Major version is retired.
Major version releases involve backward incompatible changes and have different API endpoints.
Backward compatible changes, including new features and bug fixes, are released in-place to the current Major API version.
Backward compatibility within a Major version is defined by source, wire, and semantic compatibility.
The Ad Manager API has both named Major version releases and
backward compatible in-place releases to the current Major version.
Services, methods, and fields could be marked as deprecated at any time within a
Major version (e.g. v1), however, they will remain supported until that Major
version is retired.
Caution: While the Ad Manager API is in Beta, breaking changes could be
introduced. Google will endeavor to provide notice 30 days before making
breaking changes.
Major version releases
A Major version release is defined as a release with backward incompatible
API changes. These releases will be named and have different API endpoints.
Previous Major versions are supported for a migration period.
The Ad Manager API does not have a regular release cadence for Major
versions. New Major versions will only be released when necessary.
In-place releases
Backward compatible changes including new features and bug fixes are released
in-place to the current Major API version. Clients must handle unknown fields
in API responses.
Backward Compatibility
Backward compatibility is maintained for changes within a Major version.
Compatibility is defined as:
Source compatibility: Code written against a previous release compiles
against a newer release, and successfully runs with a newer version of the
client library.
Wire compatibility: Code written against a previous release
communicates correctly with a newer server. In other words, not only are inputs
and outputs compatible, but the serialization and deserialization expectations
continue to match.
Semantic compatibility: Code written against a previous version continues
to receive what most reasonable developers would expect.
The following tables enumerate types of API changes and if they are considered
backward compatible.
Services
Type of Change
Backward compatible
Add a new service
Yes
Remove a service
No
Methods
Type of Change
Backward compatible
Add a new method
Yes
Remove a method
No
Change a method's request or response type
No
Objects
Type of Change
Backward compatible
Add a required field
No
Add an optional field
Yes
Moving a field into or out of a submessage
No
Change a field from required to optional
Yes
Change a field from optional to required
No
Remove an immutable restriction
Yes
Add an immutable restriction
No
Enumerations
Type of Change
Backward compatible
Add an enum value
Yes
Remove an enum value
No
Deprecated field behavior
Replacement fields
For fields that have a replacement, both fields will be populated when feasible.
When updating, either field can be set. Including both fields in an update
request results in an INVALID_ARGUMENT error.
Consider the following schema:
{
// The cost of this Foo in micros.
// Deprecated: Use `cost` instead.
"costMicros" : number ,
// The cost of this Foo.
"cost" : {
object ( Money )
}
}
A read response populates both fields with equivalent values:
{
"costMicros" : 1250000 ,
"cost" : {
"currencyCode" : "USD" ,
"units" : "1" ,
"nanos" : 250000000
}
}
Update requests can set either value. Including both fields results in an
INVALID_ARGUMENT error:
costMicros
// Update payload
{
"costMicros" : 1500000
}
// Response payload
{
"costMicros" : 1500000 ,
"cost" : {
"currencyCode" : "USD" ,
"units" : "1" ,
"nanos" : 500000000
}
}
cost
// Update payload
{
"cost" : {
"currencyCode" : "USD" ,
"units" : "1" ,
"nanos" : 500000000
}
}
// Response payload
{
"costMicros" : 1500000 ,
"cost" : {
"currencyCode" : "USD" ,
"units" : "1" ,
"nanos" : 500000000
}
}
Both
// Update payload
{
"costMicros" : 1250000 ,
"cost" : {
"currencyCode" : "USD" ,
"units" : "1" ,
"nanos" : 500000000
}
}
// Response payload
{
"error" : {
"code" : 400 ,
"message" : "Request contains an invalid argument." ,
"status" : "INVALID_ARGUMENT" ,
"details" : [
{
"@type" : "type.googleapis.com/google.rpc.BadRequest" ,
"fieldViolations" : [
{
"field" : "costMicros" ,
"description" : "Cannot update both costMicros and cost."
}
]
}
]
}
}
Discontinued features
If a product feature is discontinued, corresponding fields will be marked as
deprecated and may return a semantically appropriate default value. Updates
can be ignored.
{
// The salesperson split amount in micros.
// Deprecated: The Sales Management feature has been deprecated. This field
// will always be `0`.
"salespersonSplitMicros" : number ,
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-28 UTC."],[],["The Ad Manager API has major version releases with backward-incompatible changes and in-place releases for backward-compatible changes. Within a major version, services, methods, and fields can be deprecated but remain supported until that version's retirement. Backward compatibility ensures code compiles, communicates correctly, and receives expected results. Adding new services, methods, or optional fields is backward compatible, while removing services, methods, adding required fields, or changing field types is not. Deprecated fields might be replaced, with both the old and new fields populated. Discontinued feature fields will return default values and updates may be ignored.\n"]]
