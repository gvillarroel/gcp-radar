---
title: "Delete a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/delete-a-stream
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/delete-a-stream
  title: "Delete a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Guides
Send feedback
Delete a stream
Stay organized with collections
Save and categorize content based on your preferences.
If you no longer need a stream, then delete it. Also, by deleting a stream, it won't take up quota and you won't be billed for it in the future.
Note: If you want to make sure that all "in flight" data is transferred cleanly from the source database to the destination, make sure that you pause the stream (and wait for Datastream to indicate that it's paused) before deleting it.
Delete a stream
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Click the stream that you want to delete.
As a best practice, in the Stream status pane of the Stream details page, verify that the status of the stream isn't Running . If it is, then pause the stream .
Click DELETE .
In the dialog, enter Delete in the text field, and then click DELETE .
What's next
To learn more about streams, see Stream lifecycle .
To learn how to modify a stream, see Modify a stream .
To learn how to recover a failed stream, see Recover a stream .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
