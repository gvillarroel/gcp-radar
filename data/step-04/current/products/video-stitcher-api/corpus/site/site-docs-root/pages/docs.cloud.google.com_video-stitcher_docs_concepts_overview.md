---
title: "Video Stitcher API overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/concepts/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/concepts/overview
  title: "Video Stitcher API overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Guides
Send feedback
Video Stitcher API overview
Stay organized with collections
Save and categorize content based on your preferences.
The Video Stitcher API allows you to manipulate video content to dynamically
insert ads prior to delivery to client devices. Using the
Video Stitcher API, you can monetize your video-on-demand (VOD) and
livestream videos by inserting ads as described by metadata stored on ad
servers.
Data model
The Video Stitcher API relies on the following resources:
Video-on-demand manifests stored and distributed via a Content Delivery
Network (CDN).
Registered CDN keys that the Video Stitcher API requires to retrieve
videos prior to stitching.
Video Multiple Ad Playlist (VMAP) , SmartXML , or Video Ad Serving Template
(VAST) compliant ad servers to deliver ad metadata.
Video stitching entities
The following image shows the four entities involved in video stitching.
Each solid arrow denotes an explicit request from one entity to another. The
lighter-colored, dotted-line arrows denote possible requests from one entity to
another.
Content Provider
Wants to monetize content with ads
Serves source content using a CDN
Calls the Video Stitcher API to create a session in which to stitch ad and source content;
the content provider may supply information about the viewer for the session
Video Stitcher API
Calls the ad provider to get the ad metadata, which includes ad videos and ad tracking events
Encodes the ad content
Stitches ad content and source content (from the content provider) into a manifest
Serves ad segments using a CDN
Reports playback activity (for server-side ad tracking)
Ad Provider
Usually a third-party
Serves ad metadata
What ads should be shown to this user?
What ad events should be triggered for each ad?
Serves ad videos using a CDN
Tracks ad events from the viewer (for both client-side and server-side ad tracking)
Viewer
Consumes stitched source and ad content using a media player or SDK
Uses the manifest provided by the Video Stitcher API
Authenticated by the content provider and not Google Cloud
Reports playback activity (for client-side ad tracking)
Key Point: The Video Stitcher API does not store the content provider's source
content (media). The Video Stitcher API provides a manifest that references the
content provider's CDN for source content.
Features
This section describes the features that make up the Video Stitcher API
and the primary purpose of each feature.
Adaptive bitrate HTTP streaming
The Video Stitcher API supports the following formats:
Common Media Application Format (CMAF) compliant HTTP Live Streaming (HLS)
Dynamic Adaptive Streaming over HTTP (DASH) standard adaptive bitrate
streaming
For HLS, ads are stitched after the closest segment to the time offset as
specified by the VMAP or SmartXML metadata.
For DASH, ads are stitched after the closest period to the time offset as
specified by the VMAP or SmartXML data.
Ad server compliance
The Video Stitcher API complies with ad servers that support the following
formats:
IAB Tech Lab Digital Video Ad Serving Template (VAST) ,
up to version 4.0
IAB Tech Lab Digital Video Multiple Ad Playlist (VMAP)
FreeWheel SmartXML
VMAP and SmartXML provide a complete ad playlist, including time offsets, to
insert into a VOD asset. If you provide a VAST-only ad tag, the
Video Stitcher API treats the ad pod (a sequenced group of ads) as
pre-roll, and inserts them before the start of the VOD asset.
Server-side ad tracking
To support a variety of video players, the Video Stitcher API can trigger
ad tracking events on the server-side on behalf of the client. Server-side ad
tracking can help you to avoid loss of revenue due to client-side ad blocking.
CDN tokenization support
The Video Stitcher API supports retrieving raw videos distributed through
Media CDN and the ability to tokenize the segment
URLs.
Ad re-encoding
Ad videos provided from ad servers using adaptive bitrate (ABR) streaming might
not always be encoded correctly to support every type of client device. The
Video Stitcher API re-encodes ad videos to ensure the best quality ads are
delivered to a variety of client players. There is a limit of 1000 ads per
Google Cloud project.
Every new ad must be encoded before it can be stitched into either a live or VOD
session. Expect each ad to be encoded within five minutes. After the ad has been
encoded, it can be reused in any number of subsequent sessions. This encoding
happens asynchronously and does not require any action to enable or initiate.
Due to this encoding time, ads may not be stitched in the first ad break of a
live session or in the first VOD session created with the given ad tag.
What's next
See the Pricing page.
Complete the quickstart for livestreams .
Complete the quickstart for VOD assets .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
