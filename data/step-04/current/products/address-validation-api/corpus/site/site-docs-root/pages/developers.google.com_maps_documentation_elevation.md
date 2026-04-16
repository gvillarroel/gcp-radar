---
title: "Elevation API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/elevation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/address-validation
source_metadata:
  url: https://developers.google.com/maps/documentation/elevation
  title: "Elevation API overview \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Elevation API
Guides
Send feedback
Elevation API overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Elevation API provides elevation data for locations on Earth, enabling applications with elevation-sensitive features.
You can retrieve elevation for single points or calculate elevation differences along paths, useful for activities like hiking or biking.
The API accepts latitude/longitude coordinates and returns elevation data in meters relative to local mean sea level, with resolution information.
Developers can access the Elevation API through various client libraries (Java, Python, Go, Node.js) and integrate it into their applications.
To get started, set up a Google Cloud project, try sample requests, and explore the documentation for detailed usage instructions.
The Elevation API is a service that returns elevation data for
a location on the earth, or sampled elevation data along paths.
Why use the Elevation API
With the Elevation API, you can develop applications to support your
customers with elevation-sensitive activities, positioning applications, or low-surveying
applications that include elevations and elevation changes along routes. For example,
you can provide elevation gain and loss data to enhance a sports application for activities such
as hiking, biking, or scuba diving.
What you can do with the Elevation API
With the Elevation API, you can include elevation data in your
applications or on a map. For example:
Get the elevation for a particular place.
Calculate the differences in elevation along a route or between two
points.
How the Elevation API works
The Elevation API accepts a request as an encoded URL with latitude/longitude coordinates
provided as either discrete locations, or as a series of locations along a path. This request,
for example, queries elevation for the center of Denver, Colorado, specifying a return in JSON format.
https://maps.googleapis.com/maps/api/elevation/json
?locations=39.7391536%2C-104.9847034
&key= YOUR_API_KEY
The service derives the elevation for the provided coordinates. It also interpolates
elevation for a location without elevation, providing an average returned from the four
nearest locations that do provide elevation data. Finally, it determines the overall
resolution for the location.
Resources
The following table summarizes the resources available through the
Elevation API along with the data it returns.
Data resources
Data returned
Return format
Latitude/longitude coordinates
You can provide data as a set of one or more locations, or as a series along a path. You
can also provide encoded coordinates. Pass up to 512 coordinates.
The Elevation API provides elevation in meters relative
to the local mean sea level (LMSL). Elevation can be returned as positive
or negative values as indicated below:
Positive values indicate locations above LMSL,
including surface locations or the bottom of high-altitude lakes.
Negative values indicate locations that are below LMSL, including
locations on the surface or the ocean floor.
Resolution indicates the distance between the data point and the
elevation, in meters.
JSON
XML
How to use the Elevation API
1
Get set up.
Start with Set up your
Google Cloud project
and complete the setup
instructions that follow.
2
Try an elevation request
Once you have an API key, you can start testing out the Elevation API directly from
your browser. See Sample requests
in the Getting started guide for details.
3
Compose a more complex request
Once you are set up with a project, try a request that supplies a location data along a
path. See Specifying paths
for details.
4
Understand response basics
Explore the elevation data responses to prepare to use elevation data for your app. See
Elevation responses
for details.
5
Incorporate elevation data into your own app!
You can use elevation data to enhance location-based apps, such as apps for sports
activities or for survey data.
Available client libraries
Call this API in the language of
your choice through one of the following client libraries:
Java
Client for Google Maps Services
Python
Client for Google Maps Services
Go Client
for Google Maps Services
Node.js
Client for Google Maps Services
The Java Client, Python Client, Go Client and Node.js Client for Google Maps
Services are community-supported client libraries, open sourced under the
Apache 2.0 License .
Download them from GitHub, where you can also find installation instructions and sample code.
What's next
Start using the Elevation API : Go to
Set up your
Google Cloud project .
Try getting path-based elevation data : Go to
Specifying paths
Follow best practices : Go to Web Service
Best Practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
