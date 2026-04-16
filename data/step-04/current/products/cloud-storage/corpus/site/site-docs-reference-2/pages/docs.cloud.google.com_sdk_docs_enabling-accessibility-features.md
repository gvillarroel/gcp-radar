---
title: "Enabling accessibility features \_|\_ Google Cloud SDK \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sdk/docs/enabling-accessibility-features
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/enabling-accessibility-features
  title: "Enabling accessibility features \_|\_ Google Cloud SDK \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Enabling accessibility features
Stay organized with collections
Save and categorize content based on your preferences.
In order to provide a more streamlined screen reader experience, the gcloud
command-line tool comes with an accessibility/screen_reader property.
When this property is set to true, the following behaviour is enabled:
Status trackers instead of unicode spinners: The phrase
'working' is displayed on stderr while gcloud is
performing tasks.
Percentage progress bars: Progress is displayed as a
percentage, outputted to stderr.
Flattened tables : Boxed tables are the default output of many list
commands. Instead of the queried resources being displayed in tables
drawn in Unicode, results are rendered as a flattened list of items.
Also, consider using the --format flag to define your own format.
To enable these accessibility features, run:
gcloud config set accessibility/screen_reader true
Additional resources
Alternate documentation experiences
To search the gcloud CLI reference docs for a keyword or command, use
gcloud help . This runs a search for all
commands with help text matching the given argument or arguments.
Refining gcloud CLI output
To adjust the verbosity level of a command, you can set the
gcloud CLI flag --verbosity with either debug, info,
warning, error, critical, or none.
For list commands, you can further refine your output by using the --limit
flag to set a maximum number of resources to list. You can also use the
--page-size flag to define the number of resources per page if the service
lists output in pages. To sort, use the --sort-by flag with the relevant
field to sort.
To disable interactive prompting, use the
--quiet flag.
To structure and produce more meaningful output, you can use the
format, filter and projection flags to fine-tune your output.
If you'd like to define just the format of your output, use the
--format flag to produce a tabulated
or flattened version of your output (for interactive display) or a
machine-readable version of the output (json, csv, yaml, value).
To format a list of keys that select resource data values,
use projections .
To further refine your output to a criteria you'd like to define,
use the --filter flag.
Filing feedback
To file a bug, provide feedback, or send suggestions, use gcloud feedback to
help improve the gcloud CLI experience. This command will
open the public issue tracker in a browser window.
You can also directly log issues using
issue tracker .
Be sure to toggle the 'Type' field to reflect the nature of the issue you're
filing (Bug, Feature Request, etc.) to help make responses more efficient.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
