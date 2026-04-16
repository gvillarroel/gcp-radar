---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.462Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress with dual-stack subnets and internal IPv6"
feature_slug: "direct-vpc-egress-with-dual-stack-subnets-and-internal-ipv6"
latest_feature_date: "2025-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "internal"
  - "subnets"
  - "stack"
  - "dual"
  - "ipv6"
  - "direct"
  - "egress"
---

# Direct VPC egress with dual-stack subnets and internal IPv6

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services and jobs can use dual-stack subnets with internal IPv6 to send IPv4 and internal IPv6 traffic through Direct VPC egress.

## Extended Definition

Cloud Run services and jobs can use dual-stack subnets with internal IPv6 to send IPv4 and internal IPv6 traffic through Direct VPC egress.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### "Tutorial: Local troubleshooting of a Cloud Run service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- NAME ) { // Plain error logs do not appear in Stackdriver Error Reporting. console . error ( 'Environment validation failed.' ); console . error ( new Error ( 'Missing required server parameter' )); return res . status ( 500 ). send ( 'Internal Server Error' ); } Python Find the source of the error message in the file main.py around the line number called out in the stack trace shown in the logs: NAME = os . getenv ( "NAME" ) if not NAME : print ( "Environment validation failed." ) raise Exception ( "Missing required service parameter." ) Go Find the source of the error message in the file main.go around the line number called out in the stack trace shown in the logs: name := os .
- System . err . println ( "Environment validation failed." ); String msg = "Missing required server parameter" ; logger . error ( msg , new Exception ( msg )); res . status ( 500 ); return "Internal Server Error" ; } res . status ( 200 ); return String . format ( "Hello %s!" , name ); }); } } Create a Dockerfile to define the container image used to deploy the service: Node.js Use the official lightweight Node . js image . https : //hub.docker.com/ /node FROM node : 20 - slim Create and change to the app directory .
- NAME ) { // Plain error logs do not appear in Stackdriver Error Reporting. console . error ( 'Environment validation failed.' ); console . error ( new Error ( 'Missing required server parameter' )); return res . status ( 500 ). send ( 'Internal Server Error' ); } Python NAME = os . getenv ( "NAME" ) if not NAME : print ( "Environment validation failed." ) raise Exception ( "Missing required service parameter." ) Go name := os .
- NAME ) { // Plain error logs do not appear in Stackdriver Error Reporting. console . error ( 'Environment validation failed.' ); console . error ( new Error ( 'Missing required server parameter' )); return res . status ( 500 ). send ( 'Internal Server Error' ); } res . send ( Hello ${ NAME } ! ); }); const port = parseInt ( process . env .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.

