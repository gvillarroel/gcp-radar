---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.566Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Regular expression queries"
feature_slug: "regular-expression-queries"
latest_feature_date: "2020-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logging-query-language"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
keywords:
  - "regular"
  - "expression"
  - "queries"
  - "logging"
  - "supports"
  - "using"
  - "expressions"
  - "in"
---

# Regular expression queries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports using regular expressions in log queries and filters.

## Extended Definition

Cloud Logging supports using regular expressions in log queries and filters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)

## Supporting Pages

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- Build queries To build queries by using the Google Cloud console, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .
- Home Documentation Observability Cloud Logging Guides Send feedback Build and save queries by using the Logging query language Stay organized with collections Save and categorize content based on your preferences.

### Logging query language \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logging-query-language](https://docs.cloud.google.com/logging/docs/view/logging-query-language)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using regular expressions You can use regular expressions to build queries and create filters for sinks, metrics, and wherever log filters are used.
- Examples querying logs using regular expressions Query type Example Standard query sourceLocation.file = "foo" Query with case-insensitive search labels.subnetwork name = "(?i)foo" Query containing quotation marks jsonPayload.message = "field1=\"bar. \"" Query using a boolean or labels.pod name = "(foo bar)" Query using anchors logName = "/my%2Flog$" Query not matching a pattern labels.pod name ! "foo" Query using boolean operator labels.env = ("^prod. server" OR "^staging. server") Query that begins with a value logName = "^foo" Query that ends with a value logName = "foo$" Note: For a detailed explanation of the RE2 syntax, see the RE2 wiki page .
- For details, see field path identifiers in this document. [OP] : is a comparison operator, one of the following: = -- equal != -- not equal = To learn how to search log entries using regular expressions, see Using regular expressions . [VALUE] : is a number, string, function, or parenthesized expression.
- The Logging query language is case-insensitive, with the exception of regular expressions and logical operators, like AND and OR .

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- This sets the http proxy and https proxy environment variables so that the agent can send data using outbound HTTPS: setx http proxy http:// proxy-ip : proxy-port /m setx https proxy http:// proxy-ip : proxy-port /m setx no proxy 169.254.169.254 /m Determine the agent version To determine the version of the Logging agent on your system, run the following commands on your VM instance: DEBIAN / UBUNTU Run the following command on Debian or Ubuntu: dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured SLES / SUSE Run the following command on SUSE: rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured WINDOWS Connect to your instance using RDP or a similar tool and login to Windows.
- Run the following PowerShell command: Restart-Service -Name StackdriverLogging Upgrade the agent To upgrade the Logging agent to the latest release, use the following instructions: Note: If you upgraded your instance's Linux operating system to a new major release, then you should first remove the agent and then re-install it using the procedures on this page, instead of completing these upgrade procedures.
- Download and run the agent-installation script by using the following commands: curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh sudo bash add-logging-agent-repo.sh --also-install After it is installed, the agent is started automatically.
- What's next Learn about what logs the agent sends to Cloud Logging using its default configuration .

