---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:24:06.822Z"
product_name: "Cloud Profiler"
product_slug: "cloud-profiler"
feature_name: "Color mode filter"
feature_slug: "color-mode-filter"
latest_feature_date: "2019-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/profiler/docs/concepts-flame"
  - "https://docs.cloud.google.com/profiler/docs/focusing-profiles"
  - "https://docs.cloud.google.com/profiler/docs/comparing-profiles"
keywords:
  - "color"
  - "mode"
  - "filter"
  - "the"
  - "colors"
  - "flame"
  - "graph"
  - "frames"
---

# Color mode filter

Product: Cloud Profiler
Coverage: LOW

## Step 02 Summary

The color mode filter colors flame graph frames by package name or by function metric consumption.

## Extended Definition

The color mode filter colors flame graph frames by package name or by function metric consumption.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/profiler/docs/concepts-flame](https://docs.cloud.google.com/profiler/docs/concepts-flame)
- [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles)
- [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles)

## Supporting Pages

### Flame graphs \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/concepts-flame](https://docs.cloud.google.com/profiler/docs/concepts-flame)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- After removing excess whitespace and coloring frames by the self CPU time, the flame graph now appears as follows: Notice that the call stacks for foo1 and foo2 have been preserved, even though the call stack starting with foo2 is now next to the frame for foo1 .
- What's next Select the profiles to analyze Interact with the flame graph Filter the flame graph Focus the flame graph Compare profiles Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Summary This simple example illustrates the following: Flame graphs are a compact representation of a tree and you can recreate a call stack by tracing frames from the top downwards.
- Creating a flame graph To create a flame graph from a tree, complete the steps illustrated in the following diagram: Remove from the tree the arrows that indicate function calls.

### Focus the flame graph \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/focusing-profiles](https://docs.cloud.google.com/profiler/docs/focusing-profiles)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The flame graphs on this page were constructed with the Color mode and Compare to set to the default values of Name and None respectively.
- In this situation, you would add a Hide stacks for quickSort to eliminate this function and its children, and then add Hide frames for Len and maxDepth : Using these filters, the approximation of the top half of the focused graph shows that the Sort function is reached through different call stacks.
- Focused graph explained The graph built by the Focus filter effectively creates two flame graphs for the specified function and joins them together: In the preceding graph, the frame corresponding to the Sort function is full width and highlighted.
- You can select another frame and further refine the call stacks being displayed: To restore a focused flame graph to its original state, select the frame that displays the value of the Focus filter.

### Compare profiles \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/profiler/docs/comparing-profiles](https://docs.cloud.google.com/profiler/docs/comparing-profiles)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Understanding a comparison graph The graph that results from a comparison differs from the standard graph in the following ways: Meaning of colors Meaning of function-block size Metric information displayed by the tooltip Contents of the focus list Meaning of colors In a standard flame graph, you can specify the color mode of the graph.
- In a comparison flame graph, the colors represent the difference between the total metric consumption of the function in the original profile and in the compared profile: Gray: There is little or no difference.
- By default, the color of the comparison flame graph is determined by the absolute differences between the original and compared profiles.
- In both clauses, the absolute value is displayed along with a percentage: total: 1.01 s, 28.8%; self: 1.01 s, 28.8% In a comparison flame graph, because there are two profiles being compared, the tooltip displays the metric values for both profiles: As shown in the figure, the total, and self clauses have the following form: [ABS ORIGINAL] vs. [ABS COMPARED] ([ABS DIFF]), [REL ORIGINAL] vs. [REL COMPARED] ([REL DIFF]) In this expression, ABS means the absolute value and REL means the relative percentage.

