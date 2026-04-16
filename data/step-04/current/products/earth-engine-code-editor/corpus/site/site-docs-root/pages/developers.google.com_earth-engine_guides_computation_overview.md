---
title: "Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/computation_overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/playground
source_metadata:
  url: https://developers.google.com/earth-engine/guides/computation_overview
  title: "Computation Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
Computation Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Earth Engine abstracts computational power using Earth Engine Compute Units (EECUs) to provide a consistent metric for estimating processing requirements.
EECU usage tracks the computational footprint of tasks and does not directly correspond to CPU-seconds or wall clock time due to the managed nature of the service.
Computation costs can vary for similar requests due to factors like caching, data differences, algorithm changes, and client library updates.
The profiler tool provides detailed information on EECU-time and memory usage for different operations within a computation.
The profiler can be enabled in both the Code Editor and Python client libraries to analyze computation performance.
Earth Engine is built on top of Google's tools and services for performing
computations at a massive scale. To make it easy to run large geospatial
analyses, the Earth Engine platform and API hide much of the complexity of the
underlying parallel-processing infrastructure.
EECUs
Overview
Key Term: EECU - Earth Engine Compute Unit, an abstraction of computing power.
An Earth Engine Compute Unit (EECU) is a mechanism for representing an amount of
instantaneous processing power. Earth Engine tracks the total computational
footprint of tasks as a function of their EECU usage through time (EECU-seconds,
EECU-hours, etc.). Because Google has many different types of processor cores,
architectures, etc., EECUs are a useful abstraction for talking about
computational power.
Motivation
EE users often want to make estimates about the amount of processing power
required for their workflows, and EECUs provide a consistent metric for making
comparisons.
Comparison with CPU metrics
Note: While EECU-seconds measure the amount of work that Earth Engine is
performing, EECU-seconds don't correspond directly to CPU-seconds or wall clock
seconds due to the fully managed nature of the service.
The number, type and architecture of machines working on a particular result can
change over time. Because different physical cores can have different
performance characteristics, Earth Engine abstracts all processing using EECUs.
An EECU-hour (or any other unit of EECU-time) doesn't correspond to a wall clock
time, so a job which consumes 10 EECU-hours may have an observed runtime of just
a few minutes.
Stability and predictability
Sending the same (or similar) requests to Earth Engine can sometimes result in
very different amounts of computation. Common drivers of differences include:
caching , such as reusing the results of previous computations (including
partial or intermediate results)
different underlying data , such as varying numbers of satellite images,
geometries of different complexity, etc.
algorithm changes on the EE platform, including performance
optimizations, bugfixes, etc.
changes to client libraries , particularly if you depend on other users'
EE code or packages
Benchmarks
Explore sample Earth Engine computation benchmarks .
Metrics for failed requests
Earth Engine doesn't provide performance metrics for failed requests/tasks,
since these numbers would be inaccurate or misleading. As an example, if a job
fails because a worker task became unresponsive, that worker's processing
consumption wouldn't be able to factor into the total.
Profiler
The profiler provides information about EECU-time and memory usage (per
algorithm and asset) resulting from the computation performed while it's
enabled. Each row in the profiler output corresponds to an algorithm,
computation, asset load or overhead operation as described in the 'Description'
column. The columns in the profiler are:
Description
A textual description of the computation, algorithm, asset load or
overhead operation being profiled.
Count
An indicator proportional to the number of times the operation described
in 'Description' was invoked.
Compute
An indicator of EECU-time taken by the operation(s).
Current Mem
This column appears only if there was an error because the script
used too much memory. It shows the amount of memory in use on any single
compute node at the moment the error occurred.
Peak Mem
Maximum memory used on any single compute node for the operation.
Enabling the profiler
Code Editor
Use the "Run with Profiler" button, as described in the Code Editor
guide .
Python
Include the following code in your Python script to enable the profiler:
with ee . profilePrinting ():
print ( ee . Number ( 3.14 ) . add ( 0.00159 ) . getInfo ())
The profile will be printed when the context ends, whether or not any error
occurred within the context.
To capture the profile as a string, write the profile to a string buffer:
import io
out = io . StringIO ()
with ee . profilePrinting ( destination = out ) as p :
print ( ee . Number ( 3.14 ) . add ( 0.00159 ) . getInfo ())
print ( 'Output:' )
print ( out . getvalue ())
Here is a suggestion for turning the profile string into a table for easier
analysis in Colab and Jupyter Notebooks (note that this is just one approach
and may not be suitable for all cases):
import re
import pandas as pd
lines = out . getvalue () . split ( ' \n ' )
column_names = re . split ( r '\s{1,}' , lines [ 0 ])
column_names = [ name . strip () for name in column_names if name . strip ()]
data = [
[ element for element in re . split ( r '\s{2,}' , line ) if element . strip ()]
for line in lines [ 1 : - 1 ]
]
df = pd . DataFrame ( data , columns = column_names )
display ( df )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-01-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-01-21 UTC."],[],[]]
