---
title: "ee.Algorithms.If \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-if
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-if
  title: "ee.Algorithms.If \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ee.Algorithms.If
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ee.Algorithms.If function selects one of its inputs based on a condition, similar to an if-then-else construct.
It takes three arguments: condition , trueCase , and falseCase .
The condition argument determines which result is returned, and is interpreted as a boolean with specific rules for non-boolean types.
The function returns the trueCase object if the condition is true and the falseCase object if the condition is false.
Selects one of its inputs based on a condition, similar to an if-then-else construct.
Usage Returns ee.Algorithms.If( condition , trueCase , falseCase ) Object Argument Type Details condition Object, default: null The condition that determines which result is returned. If this is not a boolean, it is interpreted as a boolean by the following rules:
Numbers that are equal to 0 or a NaN are false.
Empty strings, lists and dictionaries are false.
Null is false.
Everything else is true.
trueCase Object, default: null The result to return if the condition is true. falseCase Object, default: null The result to return if the condition is false.
Examples
Code Editor (JavaScript)
print ( ee . Algorithms . If ( false , '*true*' , '*false*' )); // The string "*false*"
print ( ee . Algorithms . If ( true , '*true*' , '*false*' )); // The string "*true*"
// Consider using remap rather than If for tasks like numbers for classes.
print ( ee . Algorithms . If ( ee . String ( 'Tree' ). compareTo ( 'Tree' ), 0 , 1 ));
print ( ee . Algorithms . If ( ee . String ( 'NotTree' ). compareTo ( 'Tree' ), 0 , 1 ));
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# The string "*false*"
display ( ee . Algorithms . If ( False , '*true*' , '*false*' ))
# The string "*true*"
display ( ee . Algorithms . If ( True , '*true*' , '*false*' ))
# Consider using remap rather than If for tasks like numbers for classes.
display ( ee . Algorithms . If ( ee . String ( 'Tree' ) . compareTo ( 'Tree' ), 0 , 1 ))
display ( ee . Algorithms . If ( ee . String ( 'NotTree' ) . compareTo ( 'Tree' ), 0 , 1 ))
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-09-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-09-19 UTC."],[],["The `ee.Algorithms.If` function selects one of two inputs based on a condition. It takes a `condition`, `trueCase`, and `falseCase`. If the `condition` is true, it returns `trueCase`; otherwise, it returns `falseCase`. Non-boolean conditions are evaluated: 0, NaN, empty collections, and null are false; everything else is true. Examples show using boolean values and string comparisons as conditions to determine the returned value. The `remap` function is suggested as an alternative for class-numbering tasks.\n"]]
