---
title: "Extended properties \_|\_ Google Calendar \_|\_ Google for Developers"
url: https://developers.google.com/workspace/calendar/api/guides/extended-properties
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/calendar/api/auth
source_metadata:
  url: https://developers.google.com/workspace/calendar/api/guides/extended-properties
  title: "Extended properties \_|\_ Google Calendar \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Calendar
Guides
Send feedback
Extended properties
Stay organized with collections
Save and categorize content based on your preferences.
The fields of the Events resources
cover the most common data associated with an
event, such as location, start time, etc, but applications may want to store
additional metadata specific to their use case. The Calendar API provides the
ability to set hidden key-value pairs with an event, called
extended properties .
Extended properties make it easy to store application-specific data for an event
without having to utilize an external database.
Visibility
There are two types of extended properties available: private and shared.
Shared properties are visible and editable by all attendees of an event, while
private properties are set on one attendee's local "copy" of the event. More
concretely, private properties are specific to the calendarId and eventId
used in the request, while shared properties will be shown regardless of the
calendarId used in the request.
Add & update properties
Extended properties are set on the Events resource, and like other fields can be
set in insert ,
update , and
patch requests.
Using patch requests is the preferred
method, as it allows you to manipulate some properties while leaving others
untouched. Adding a new property with the same key will overwrite any existing
properties with the same key. The following example shows setting a private
property:
PATCH https://www.googleapis.com/calendar/v3/calendars/ calendarId /events/ eventId
{
"extendedProperties": {
"private": {
"petsAllowed": "yes"
}
}
}
Delete properties
Any properties not included in an update request will be deleted, but a better
approach is to make a patch request to set the value to null. The following
example shows deleting a private property:
PATCH https://www.googleapis.com/calendar/v3/calendars/ calendarId /events/ eventId
{
"extendedProperties": {
"private": {
"petsAllowed": null
}
}
}
Search properties
You can search events based on the values on their extended properties using an
Events.list request.
Set the field
privateExtendedProperty
or
sharedExtendedProperty
to a constraint in the format propertyName=value ,
which searches against private and shared properties respectively. The following
example returns events with the private property petsAllowed=yes :
GET https://www.googleapis.com/calendar/v3/calendars/ calendarId /events
?privateExtendedProperty=petsAllowed%3Dyes
You can repeat these fields multiple times and the constraints are OR'ed
together, so events only need to match one of the constraints to be returned.
The following example finds events with either the private property
petsAllowed=yes or isOutside=yes :
GET https://www.googleapis.com/calendar/v3/calendars/ calendarId /events
?privateExtendedProperty=petsAllowed%3Dyes
&privateExtendedProperty=isOutside%3Dyes
Be aware that constraints on private and shared properties are AND'ed together
however, so events must match both sets of constraints in order to be returned.
The following example finds events with the private property petsAllowed=yes
and the public property createdBy=myApp :
GET https://www.googleapis.com/calendar/v3/calendars/ calendarId /events
?privateExtendedProperty=petsAllowed%3Dyes
&sharedExtendedProperty=createdBy%3DmyApp
Limits
The maximum size of a property's key is 44 characters, and properties with
longer keys will be silently dropped.
The maximum size of a property's value is 1024 characters, and properties
with longer values will be silently truncated.
An event can have up to 300 properties totaling up to 32kB in size
(keys size + value size). These 300 properties include shared and private
properties, across all "copies" of the event.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
