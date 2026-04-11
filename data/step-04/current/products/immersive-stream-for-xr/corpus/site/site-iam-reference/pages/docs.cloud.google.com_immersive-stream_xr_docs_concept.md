---
title: "Immersive Stream for XR overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/concept
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/concept
  title: "Immersive Stream for XR overview \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Guides
Send feedback
Immersive Stream for XR overview
Stay organized with collections
Save and categorize content based on your preferences.
Immersive Stream for XR is a Google Cloud
service that lets you host and serve interactive 3D and augmented reality
(AR) experiences. You can target a variety of end-user devices by using the
expansive compute resources of Google Cloud.
Complex 3D scenes require large, multiple gigabyte downloads and demanding GPU
specifications to render. These complex, visually rich and interactive
experiences have been confined to desktop computers because of
mobile devices lack sufficient computing power, limiting your potential audience
size. Also, creating a consistent user experience is difficult for 3D content
because you rely on the client device to render code, and device capabilities
can vary.
Immersive Stream for XR lets you use Unreal® Engine
to interactively stream 3D and AR experiences that can render tens of millions
of polygons with photorealistic materials. Computing and rendering
are offloaded to Google Cloud and the experience
is streamed immediately to the client device. You can interact with the
experience in real time at low latency from Google Cloud networks.
The product is integrated into the Google app allowing you to launch
experiences from an intent URL.
Main features
Immersive Stream for XR delivers the following capabilities.
Render on Google Cloud and transcend mobile device limits
Render tens of millions of polygons.
Display photorealistic shading and lighting using server-class GPUs.
Create detailed 3D visualizations and experiences for use cases that
demand every detail.
Power AR and 3D experiences with real-time, low latency streaming
Stream experiences as video frames to the client device.
Send inputs from the device to Google Cloud for real time
processing.
Display content in 3D mode on a client device.
Project content into the real world in AR mode.
Provide a consistent user experience on a wide range of mobile devices,
including support for multiple operating systems, older devices,
and lower-cost devices.
Stream game engine projects
Host your project on Immersive Stream for XR to create a wide range of
experiences using real-time 3D creation platforms.
Automatically deploy experiences hosted on Immersive Stream for XR to the
optimal geographic locations to minimize latency.
Integrate into Google app and browsers
Launch experiences wherever the Google app is installed (1B+ devices)
with full support for 3D and AR modes.
Launch experiences in the web client (3D mode only).
Additional features
Immersive Stream for XR is an evolving product and we will update the
documentation regularly. Our documentation, including guidelines, downloads,
content specifications, and platform support reflect the latest
features and customization options we currently support and will
change as our offering expands.
Features for creators
Unreal Engine development
Template project with necessary structure and tools
Automated workflow from Unreal Editor to a URL that launches the experience
Automated builds hosted in Google Cloud
Launch using a URL
In-engine preview
Content guidelines
Quickstart guide and template
Features for consumers
3D and AR modes available in Android and iOS using the Google app.
3D mode available in Safari mobile browser.
Launch the experience through a link in a website, QR code, or social media.
VPC Service Controls
Because Immersive Stream for XR is designed to stream experiences from
Google Cloud to users on the public internet, it is not compliant
with VPC Service Controls, which establishes a secure communication
perimeter around your Google Cloud projects. While Immersive Stream for XR might
be configurable from a project that has VPC Service Controls enabled,
some functionality might be limited or unavailable. We strongly recommend
using Immersive Stream for XR only in projects with VPC Service Controls
disabled.
What's next
To get started with Immersive Stream for XR, see the
Quickstart .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
