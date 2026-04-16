---
title: "Action \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/types/Action
knowledge_key: corpus
source_id: site-docs-reference-required-11
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/order
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/types/Action
  title: "Action \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
Action
Stay organized with collections
Save and categorize content based on your preferences.
Type name: Action
Extends Event or Thing
Name
Type
Description
actionStatus
ActionStatusType
Indicates the current disposition of the Action.
agent
Organization or Person
The direct performer or driver of the action (animate or inanimate). e.g. John wrote a book.
endTime
DateTime
The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December . Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
error
Thing
For failed actions, more information on the cause of the failure.
handler
HttpActionHandler
Handlers supported by RSVP action.
instrument
Thing
The object that helped the agent perform the action. e.g. John wrote a book with a pen .
location
Place or PostalAddress
The location of the event, organization or action.
name
Text
The string shown to the user on the UI element tied to the action.
object
Thing
The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read a book .
participant
Organization or Person
Other co-agents that participated in the action indirectly. e.g. John wrote a book with Steve .
result
Thing
The result produced in the action. e.g. John wrote a book .
startTime
DateTime
The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December. Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
target
EntryPoint
Indicates a target EntryPoint for an Action.
url
URL
Target url to fetch in order to complete the action.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
