---
title: "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/feature-label-detection
  title: "Analyze videos for labels \_|\_ Video Intelligence API \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Analyze videos for labels
Stay organized with collections
Save and categorize content based on your preferences.
The Video Intelligence API can identify entities shown in video footage
using the LABEL_DETECTION
feature and annotate these entities with labels (tags). This feature identifies
objects, locations, activities, animal species, products, and more.
Label detection differs from Object tracking .
Unlike object tracking, label detection provides labels for the entire frame
(without bounding boxes).
For example, for a video of a train at a crossing, the Video Intelligence API
returns labels such as "train", "transportation", "railroad crossing",
and so on. Each label includes a time segment with the time offset (timestamp)
for the entity's appearance from the beginning of the video.
Each annotation also contains additional information including an entity
id that you can use to find more information about the
entity in the Google Knowledge Graph Search API .
Each entity returned can also include associated
category entities in the categoryEntities field. For example the
"Terrier" entity label has a category of "Dog". Category entities have a
hierarchy. For example, the "Dog" category is a child of the "Mammal"
category in the hierarchy. For a list of the common category entities that the
Video Intelligence uses, see
entry-level-categories.json .
The analysis can be compartmentalized as follows:
Segment level: User-selected segments of a video can be specified
for analysis by stipulating beginning and ending timestamps for the purposes
of annotation (see VideoSegment ).
Entities are then identified and labeled within each segment. If no segments
are specified, the whole video is treated as one segment.
Shot level: Shots (also known as a scene ) are automatically detected within
every segment (or video). Entities are then identified and labeled within
each scene. For details, see Shot change detection
Frame level: Entities are identified and labeled within each frame
(with one frame per second sampling).
To detect labels in a video, call the
annotate
method and specify
LABEL_DETECTION
in the features field.
See
Analyzing Videos for Labels and
Label Detection Tutorial .
Video Intelligence API Visualizer
Check out the
Video Intelligence API visualizer to see this feature in action.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
