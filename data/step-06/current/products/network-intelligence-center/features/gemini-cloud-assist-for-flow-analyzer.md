---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:03.482Z"
product_name: "Network Intelligence Center"
product_slug: "network-intelligence-center"
feature_name: "Gemini Cloud Assist for Flow Analyzer"
feature_slug: "gemini-cloud-assist-for-flow-analyzer"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/overview"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/ListVpcFlowLogsConfigsResponse"
keywords:
  - "gemini"
  - "assist"
  - "for"
  - "flow"
  - "analyzer"
  - "generates"
  - "sql"
  - "queries"
---

# Gemini Cloud Assist for Flow Analyzer

Product: Network Intelligence Center
Coverage: MEDIUM

## Step 02 Summary

Gemini Cloud Assist for Flow Analyzer generates SQL queries for VPC Flow Logs with Gemini assistance.

## Extended Definition

Gemini Cloud Assist for Flow Analyzer generates SQL queries for VPC Flow Logs with Gemini assistance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/ListVpcFlowLogsConfigsResponse](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/ListVpcFlowLogsConfigsResponse)

## Supporting Pages

### "Flow Analyzer overview \_|\_ Network Intelligence Center - Flow Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/flow-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In Flow Analyzer, you can do the following: Query logs reported by VPC Flow Logs Use SQL filters to refine your queries Sort query results by total traffic, aggregate packets, or latency View traffic for a specific time period View the top five flows with the highest traffic or latency, for the selected time period View resources with the highest traffic or latency, for the selected time period View traffic details for specific source and destination pairs in your query results How it works VPC Flow Logs samples packets in your VPC network to generate flow logs, which can be stored in Cloud Logging or routed to supported destinations, such as BigQuery or a third-party platform through Pub/Sub.
- Flow Analyzer lets you quickly and efficiently understand your Virtual Private Cloud (VPC) traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
- For example, if you select 1 minute alignment for a 30 day period, Flow Analyzer generates more than 43,000 data points.
- Using complex queries, you can perform tasks such as the following: Comparing field values with each other Building complex boolean logic using AND/OR and nested OR operations Performing complex operations on IP addresses using BigQuery functions The SQL filter queries use BigQuery SQL syntax.

### "Network Analyzer overview \_|\_ Network Intelligence Center - Network Analyzer\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Shared VPC insights For Shared VPC cases, there are two scenarios: Host project: Network Analyzer provides relevant information for VPC networks in the host project, such as IP address utilization insights that display the IP address allocation percentage of subnets.
- Analysis schedule Network Analyzer generates insights whenever relevant configuration changes are made, as well as periodically.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Insights are grouped into the following categories: VPC network Network services Kubernetes engine Hybrid connectivity Managed services For more information about these groups and their related insight types, see Insight groups and types .

### Network Intelligence Center overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/overview](https://docs.cloud.google.com/network-intelligence-center/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Flow Analyzer Flow Analyzer lets you quickly and efficiently understand your Virtual Private Cloud (VPC) traffic flows without the need to write complex SQL queries for analyzing VPC Flow Logs.
- Flow Analyzer lets you perform opinionated network traffic analysis with 5-tuple granularity (source IP, destination IP, source port, destination port, and protocol).
- Flow Analyzer analyzes VPC Flow Logs data stored in a log bucket ( record format ).
- For more information, see the Flow Analyzer overview .

### "ListVpcFlowLogsConfigsResponse \_|\_ Network Intelligence Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/ListVpcFlowLogsConfigsResponse](https://docs.cloud.google.com/network-intelligence-center/docs/reference/networkmanagement/rest/v1/ListVpcFlowLogsConfigsResponse)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation Response for the ListVpcFlowLogsConfigs method.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-01 UTC."],[],[]]
- JSON representation { "vpcFlowLogsConfigs" : [ { object ( VpcFlowLogsConfig ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields vpcFlowLogsConfigs[] object ( VpcFlowLogsConfig ) List of VPC Flow Log configurations. nextPageToken string Page token to fetch the next set of configurations. unreachable[] string Locations that could not be reached (when querying all locations with - ).
- Home Documentation Networking Network Intelligence Center Reference Send feedback ListVpcFlowLogsConfigsResponse Stay organized with collections Save and categorize content based on your preferences.

