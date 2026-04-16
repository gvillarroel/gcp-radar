---
title: "Run a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/run-a-stream
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/run-a-stream
  title: "Run a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
Run a stream
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the actions that you can take when you run a stream. The actions include:
Starting a stream
Pausing a stream
Resuming a stream
Start the stream
When you created a stream , you either created the stream and started it immediately, or created the stream without starting it.
If you created the stream, but you didn't start it, then you can do so now. By starting the stream, Datastream can transfer data, schemas, and tables from the source database to the destination.
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Select the checkbox to the left of the stream that you want to start.
Click START .
In the dialog, click START . The status of the stream changes from Not started to Starting to Running .
It takes about 30 seconds for the stream to start running. Background resources need to start so that the stream can start.
For more information about the states and transitions of a stream, see Stream lifecycle .
After starting a stream, you can monitor it
to verify that Datastream transferred data from the source database to
the destination.
Pause the stream
After starting a stream , you can pause it. When a stream is
paused, Datastream doesn't pull any new data from the source database
into the destination. However, some data may continue to be written to the
destination as data "in flight" continues to flow.
In some cases, if you pause a stream, then the source database must retain the
data until you resume the stream . The retention period for the
source database may be limited. If the stream is paused for longer than the
source retention period, and then the stream is resumed, this can cause the
stream to fail. If this occurs, delete the
stream , create a new
one , and then start it so that
Datastream can transfer data, schemas, and tables from the source
database to the destination.
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Select the checkbox to the left of the stream that you want to pause.
Click PAUSE .
In the dialog, click PAUSE . The status of the stream changes from Running to Draining . Draining a stream is the process of emptying the stream so that it doesn't contain any data.
After the stream is drained of all data, then the status of the stream changes from Draining to Paused .
For more information about the states and transitions of a stream, see Stream lifecycle .
After pausing a stream, you can resume it so that
Datastream can transfer new data from the source database to the
destination.
Resume the stream
You can resume a stream that you paused . By resuming the
stream, Datastream can transfer new data from the source database to
the destination.
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Select the checkbox to the left of the stream that you want to resume.
Click RESUME . The status of the stream changes from Paused to Running .
For more information about the states and transitions of a stream, see Stream lifecycle .
After resuming a stream, you can monitor it
to verify that Datastream transferred new data from the source database
to the destination.
What's next
To learn more about streams, see Stream lifecycle .
To learn how to modify your streams, see Modify a stream .
To learn how to recover a stream, see Recover a stream .
To learn how to delete an existing stream, see Delete a stream .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
