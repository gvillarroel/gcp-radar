---
title: "Monitor a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/monitor-a-stream
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/monitor-a-stream
  title: "Monitor a stream \_|\_ Datastream \_|\_ Google Cloud Documentation"
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
Monitor a stream
Stay organized with collections
Save and categorize content based on your preferences.
You can use Datastream to monitor data and events that are processed by a stream. This information appears in the following graphs:
Throughput: The rate at which Datastream processes data or events. This rate can be:
The amount of data (in MB) that Datastream transfers from the source to the destination.
The number of events that are associated with the data being transferred. An event is a single change in the source, such as a new row added to a table
in a database.
You can also monitor any errors associated with a stream. See Troubleshoot a stream .
Unsupported events: The number of events that can't be processed from the source to the destination.
Data freshness: The time difference between when data is written to the source and when Datastream reads the event from the source. It is
calculated as the time elapsed between the source timestamp and the read timestamp for the oldest event being processed. If there are no new events to read from the source, the freshness is set to 0.
If there are events in the source that Datastream hasn't yet read, they aren't taken into account when Datastream calculates the data freshness metric. For example, if there is a spike in activity on source, it is reflected in the freshness metric only after Datastream starts reading the events causing the spike.
System latency: The time that Datastream takes to process an event. This interval is calculated as the time between when Datastream reads
the event and when the event is written to the destination.
Total latency: The time difference between when data is written to the source and the corresponding events are written to the destination. This represents the total end-to-end delay that you observe between the source and destination.
Monitor data or events processed
Go to the Streams page in the Google Cloud Console.
Go to the Streams page
Click the stream that you want to monitor.
Optional. Scroll until the Data freshness graph appears. For this graph,
click the Create alerting policy link to create an alerting policy for
it. An alerting policy describes a set of conditions that you want to
monitor for the graph.
After clicking the link, the Create alerting policy page appears in
Cloud Monitoring. On this page, you can define the alerting policy for
the graph. This includes specifying which criteria will trigger the policy,
who'll be notified if the criteria are met, and how they'll be notified.
For more information about alerting policies, including how to create them,
see Managing metric-based alerting
policies .
Click the MONITORING tab.
Scroll until the graph appears that represents the data or events that Datastream is monitoring.
Optionally, if you're looking at the Throughput graph, then select (bytes/sec) to see the amount of data that Datastream transfers from the source to the destination, or (event/sec) to see how many events are associated with the data being transferred.
To view how much data or how many events Datastream processed over a period of hours or days, click 1 hour , 6 hours , 12 hours , 1 day , 2 days , 4 days , 7 days , 14 days , or 30 days .
Or, to set a custom range, select the Custom menu, and then use the Calendar picker to specify a start date and time and end date and time for the amount of data or the number of events that you want to view.
Datastream updates the graph in the pane to reflect your selection and displays the interval that you specified.
For example, if today is October 31, 2021, and you click 30 days , the graph will show the amount of data or the number of events Datastream processed since October 01, 2021.
Hold the pointer over the line in the graph to display how much data or how many events Datastream processed for a particular date and time.
Tip: Drag your mouse to connect two points on the line in the graph to see how much data or how many events Datastream processed over a more-granular time interval.
For example, if today is October 31, 2021, and you click 30 days, then the graph shows how much data Datastream transferred or the number of events associated with the data being transferred since October 01, 2021.
If you click where the line begins at October 01, and drag your mouse until it touches where the line crosses October 05, then the line in the graph will be updated to reflect the interval that you specified (for this example, how much data or how many events Datastream processed from October 01 to October 05).
What's next
To learn more about streams, see Stream lifecycle .
To learn how to view information about your stream, see View a stream .
To learn how to modify a stream, see Modify a stream .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
