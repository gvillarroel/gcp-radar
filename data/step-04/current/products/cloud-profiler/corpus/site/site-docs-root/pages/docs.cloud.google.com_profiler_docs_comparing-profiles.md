---
title: "Compare profiles \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/profiler/docs/comparing-profiles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/profiler/docs
source_metadata:
  url: https://docs.cloud.google.com/profiler/docs/comparing-profiles
  title: "Compare profiles \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Profiler
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Compare profiles
Cloud Profiler lets you visually compare two profiles of the same type,
taken from the same service within a project. You can compare profiles that
differ by:
Ending times: Does the service run faster at certain times? Has there been
a gradual improvement or decline over time?
Zones: Does the service run faster in some zones than in others?
Service versions: Do newer versions differ markedly from older ones? How?
Weight: How do profiles captured during high consumption periods
differ from average profiles?
Setting up a comparison
When you set up a comparison, you specify the parameters for
an original profile and a compared profile. These two profiles share all
configuration parameters except the one defined by the Compare to
field.
To configure a comparison, do the following:
Set the comparison type by selecting an option from the Compare to
menu:
End date/time
Zone
Version
Weight
Selecting one of these
options results in a new configuration field. The field name
begins with Compared and ends with the comparison type.
For example, if you select Version , a Compared version field is
displayed next to the Compare to field.
Specify the compared profile by selecting an option from the
Compared menu.
For example, the screenshot illustrates the settings to compare two versions
of docdemo-service :
The settings for the following fields apply to the original profile and the
compared profile:
Timespan : 7 days
End time : 10/24/19, 8:35 AM
Service : docdemo-service
Profile type : CPU time
Zone : All zones
Weight : All
For the original profile, the Version is 1.75.0 . For the compared
profile, the Version is 1.25.0 .
Understanding a comparison graph
The graph that results from a comparison differs from the standard graph
in the following ways:
Meaning of colors
Meaning of function-block size
Metric information displayed by the tooltip
Contents of the focus list
Meaning of colors
In a standard flame graph, you can specify the color mode of the graph.
For more details, see Color mode .
In a comparison flame graph, the colors represent the difference
between the total metric consumption of the function in the original profile
and in the compared profile:
Gray: There is little or no difference.
Red: The difference is positive.
Blue: The difference is negative.
The larger the difference in consumption values between the two profiles
being compared, the more saturated the color.
For example, in the previous figure, the
foo1 call stack is blue, indicating
that the original profile consumed less CPU than the compared profile.
The frame foo1 is a brighter blue than its child frame bar , indicating that
there is a larger difference in metric consumption for the function foo1
than for the function bar .
Lastly, the foo2 call stack is red, indicating that the
original profile consumed more CPU than the compared profile.
Meaning of block size
In a standard flame graph, the size of the function blocks illustrates
the relative consumption of the metric being analyzed.
In a comparison flame graph, the size of the function blocks illustrates
the relative average consumption of the metric being analyzed.
By averaging the values for the two profiles, a block that exists only in
one profile still appears in the comparison graph, at half its pre-comparison
size.
Displayed metric values
In a standard flame graph, the metrics displayed by the tooltip are composed
of two clauses, total and self. In both clauses, the absolute value is
displayed along with a percentage:
total: 1.01 s, 28.8%; self: 1.01 s, 28.8%
In a comparison flame graph, because there are two profiles being compared,
the tooltip displays the metric values for both profiles:
As shown in the figure, the total, and self clauses have the following form:
[ABS_ORIGINAL] vs. [ABS_COMPARED] ([ABS_DIFF]), [REL_ORIGINAL] vs. [REL_COMPARED] ([REL_DIFF])
In this expression, ABS_ means the absolute value and
REL_ means the relative percentage. Therefore, [ABS_ORIGINAL] is the
absolute value for
the original profile and [ABS_COMPARED] is the absolute value for the compared
profile. The field [ABS_DIFF] , defined as [ABS_ORIGINAL] - [ABS_COMPARED] ,
is the absolute difference between the two profiles. When
the absolute difference is zero, no change is displayed.
The percentage is computed for each profile as the ratio of a function's raw
value to root's raw value. For example, in the original profile,
foo1 for took 4.67 seconds and root took 10.03 seconds. Therefore
[REL_ORIGINAL] is about 46.0%. A similar computation is performed for the
compared profile. Lastly, the field [REL_DIFF] , defined as the difference of
these percentages, is the relative difference between the two profiles.
When this difference is zero, no change is displayed.
For the preceding example, the total clause shows that the function foo1 in
the original profile executes in 4.67 seconds. The absolute difference of
-2.24 seconds indicates that foo1 executes about 2.41 seconds
faster in the original profile than in the compared profile:
total: 4.67 s vs. 6.91 s (-2.24 s), 46.6% vs 69% (-22.4%)
Focusing a comparison
In a standard flame graph, each row in the Focus list
contains a function name, the self and total metric consumption values, and
the count of call stacks into that function.
In the comparison flame graph, each row in the Focus list
contains a function name, the self and total metric consumption values, and
the count of call stacks into that function for the original profile .profiler
For a comparison flame graph, the focus list also includes
two columns labeled Diff , a button labeled Relative Diff , and a
button labeled Absolute Diff . For information on the relative difference
and absolute difference, see Displayed metric values .
By default, the color of the comparison flame graph is determined by the absolute
differences between the original and compared profiles. In contrast, by default,
the focus list displays the relative differences between the two profiles
being compared:
The table in the example shows that the function foo1 takes about
4.67 seconds to run in the original profile. The time 4.67 seconds corresponds
to about 46.6% of the runtime. The Diff column, which displays the
relative difference, contains the value of -22.4% .
To view the absolute difference between metric values, click Absolute Diff .
Whether you have a standard flame graph or a comparison flame graph,
you can sort the table rows in ascending arrow_upward or
descending arrow_downward
order by selecting a table header element.
Turning off comparison mode
To turn off comparison mode, set the Compare to field to None .
What's next
View historical trends .
Download profile data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
