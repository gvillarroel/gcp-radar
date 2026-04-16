---
title: "Array Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/arrays_intro
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/charts_style
source_metadata:
  url: https://developers.google.com/earth-engine/guides/arrays_intro
  title: "Array Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Array Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ee.Array type in Earth Engine is used to represent multi-dimensional data structures like vectors, matrices, and cubes.
Arrays offer flexibility and power but may not scale as efficiently as other Earth Engine data structures for problems solvable without them.
Use the ee.Array class when problems require higher dimension modeling, flexible linear algebra, or other functionalities unique to arrays.
An array's dimension is the number of axes, its shape is determined by axis lengths, and its size is the product of axis lengths, with all elements having the same type and no sparse or ragged arrays supported.
Earth Engine represents 1-D vectors, 2-D matrices, 3-D cubes, and higher dimensional
hypercubes with the ee.Array type. Arrays are a flexible data structure, but
in exchange for the power they offer, they do not scale as well as other data structures
in Earth Engine. If the problem can be solved without using arrays, the result will be
computed faster and more efficiently. But if the problem requires a higher dimension model,
flexible linear algebra, or anything else arrays are uniquely suited to, you can use
the Array class.
Array dimension, shape and size
The dimension of an array refers to the number of axes along which the underlying data
varies. For example, 0-D arrays are scalar numbers, 1-D arrays are vectors, 2-D arrays
are matrices, 3-D arrays are cubes, and >3-D arrays are hyper-cubes. For an
N-dimensional array, there are N axes from 0 to N-1. The shape of the array is
determined by the lengths of the axes. The length of an axis is the number of positions
along it. The array size, or number of total elements in the array, equals the product
of the axis lengths. Each value at every position on every axis must have a valid number,
since sparse or ragged arrays are not currently supported. The array’s element type
indicates what kind of number each element is; all elements of the array will have the
same type.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2021-05-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2021-05-26 UTC."],[],[]]
