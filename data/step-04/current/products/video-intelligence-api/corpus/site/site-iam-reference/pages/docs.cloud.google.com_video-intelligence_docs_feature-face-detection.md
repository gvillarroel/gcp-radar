---
title: "Face detection \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/feature-face-detection
  title: "Face detection \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
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
Face detection
Stay organized with collections
Save and categorize content based on your preferences.
The Video Intelligence API Face detection feature looks for faces in a video and returns:
The video segment ,
or segments in which a face is detected, across all videos in the given request.
Optional: bounding boxes defining the area of the video frame in which
the face is detected. To enable this feature, set the
includeBoundingBoxes field in the FaceDetectionConfig to True .
Optional: the detected attributes of the face.
To enable attribute detection set the includeAttributes field within
FaceDetectionConfig
to True . (note: You must also set includeBoundingBoxes to True ). Also see
DetectedAttribute .
Possible boolean attributes:
Attribute
Description
headwear
The person is wearing a hat, cap, scarf and so on. Does not include small objects that hold the hair (e.g., hair pins).
frontal_gaze
Whether the person's eyes are looking directly into the camera as
opposed to simply have both eyes visible.
eyes_visible
The sclera (white of the eye) is visible for both eyes.
glasses
The person is wearing glasses on their face and over their eyes.
The glasses may be clear or colored.
Note: Worn in any other way (e.g., top of head, around the neck) the
glasses are ignored.
mouth_open
The person's mouth is open.
smiling
The person is smiling.
For an example, see
Face detection .
Video Intelligence API Visualizer
Check out the
Video Intelligence API visualizer to see this feature in action.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
