---
title: "Explicit content detection \_|\_ Video Intelligence API \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/feature-explicit-content
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/feature-explicit-content
  title: "Explicit content detection \_|\_ Video Intelligence API \_|\_ Google Cloud\
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
Explicit content detection
Stay organized with collections
Save and categorize content based on your preferences.
Explicit Content Detection detects adult content within a video. Adult
content is generally inappropriate for those under 18 years of age and
includes, but is not limited to, nudity, sexual activities, and pornography.
Such content detected in cartoons or anime is also identified.
Explicit content detection annotates a video with explicit content
annotations (tags) for entities that are detected in the
video or video segments provided. The response returns
a video frame timestamp where the explicit content is detected.
To detect explicit content in a video, call the
annotate
method and specify
EXPLICIT_CONTENT_DETECTION
in the features field.
Check out the
Video Intelligence API visualizer to see this feature in action.
For an example, see
Analyzing Videos for Explicit Content .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
