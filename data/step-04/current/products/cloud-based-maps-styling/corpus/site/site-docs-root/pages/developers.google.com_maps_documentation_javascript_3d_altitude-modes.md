---
title: "Understand and use altitude modes \_|\_ Maps JavaScript API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/javascript/3d/altitude-modes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/3d/altitude-modes
  title: "Understand and use altitude modes \_|\_ Maps JavaScript API \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

reviews Get a Maps Demo Key : Try out select Maps JavaScript API and Places UI Kit features at no cost with a Maps Demo Key—no billing information required.
Home
Products
Google Maps Platform
Documentation
Web
Maps JavaScript API
Send feedback
Understand and use altitude modes
Stay organized with collections
Save and categorize content based on your preferences.
AltitudeMode is the property that defines a map element's vertical placement.
It determines if an object is rendered relative to the terrain, relative to
above-ground features (like buildings), or at an absolute height above sea
level.
AltitudeMode is the property that determines where elements that you add to
the 3D map, such as markers, polylines, polygons, and models, are rendered
relative to the earth's surface. Additionally, AltitudeMode controls where
the camera is positioned during flyTo and flyAround animations.
The following guide provides information on using AltitudeMode effectively,
and considerations for factors that impact how elements are rendered.
Digital elevation models
Feature placement is governed by two underlying Digital Elevation Models (DEMs)
accessible in the API:
Digital Terrain Model (DTM) / "Ground" : A "bare-earth" view showing the
elevation of the underlying terrain, with above-ground objects removed.
Digital Surface Model (DSM) / "Mesh" : A surface representation that
includes terrain elevation plus above-ground features like buildings and
trees.
The following image shows the difference between the DTM and DSM renderings of
an urban area:
AltitudeMode options
The choice of AltitudeMode determines how the feature's altitude value (if
supplied) is interpreted relative to the digital elevation models.
ABSOLUTE : Renders the object relative to the mean sea level,
calculated using
EGM96 .
CLAMP_TO_GROUND : Renders the object directly on the DTM (Ground),
ignoring any provided altitude and following the terrain.
RELATIVE_TO_GROUND : Renders the object relative to the DTM (Ground)
surface.
RELATIVE_TO_MESH : Renders the object relative to the
DSM (Mesh)—the highest surface, including ground, buildings, and water.
The following sample lets you change the a polyline's AltitudeMode to observe
how various modes impact the polyline's rendering on complex geometry in a
semi-urban setting:
Altitude values in relative modes
When using relative modes ( RELATIVE_TO_GROUND or RELATIVE_TO_MESH ), the
supplied altitude value is an offset from the chosen base surface, not a fixed
height above sea level. For example, an altitude of 100 will place the feature
100 meters above the DTM or DSM.
If the feature data doesn't include an altitude, a relative mode like
RELATIVE_TO_MESH will place the feature directly on top of the mesh/surface.
However, for polylines and polygons, the connections between points will be
straight lines, which might cause the line to pass through the mesh between
points if you don't use interpolation.
Next steps
Read the Architecture Center
topic for a more in-depth
overview of AltitudeMode , including information on AltitudeMode and
markers.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
