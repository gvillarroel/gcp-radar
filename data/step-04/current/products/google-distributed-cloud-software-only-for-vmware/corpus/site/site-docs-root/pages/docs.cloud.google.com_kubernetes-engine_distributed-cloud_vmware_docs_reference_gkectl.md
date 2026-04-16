---
title: "gkectl \_|\_ Google Distributed Cloud (software only) for VMware \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/reference/gkectl
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/reference/gkectl
  title: "gkectl \_|\_ Google Distributed Cloud (software only) for VMware \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
gkectl
Stay organized with collections
Save and categorize content based on your preferences.
You can use the gkectl command line interface for a for a variety tasks,
including the following:
Generate a template for a cluster configuration file.
Validate a cluster configuration file.
Prepare a vSphere environment.
Create a cluster.
Upgrade a cluster.
Update a cluster.
Resize a cluster.
Diagnose cluster issues.
Basic commands
To list all commands:
gkectl help
To get help for a specific command:
gkectl COMMAND --help
Environment variable for the admin cluster kubeconfig file
Several gkectl commands require the path of the admin cluster kubeconfig file.
You can specify the path by exporting a GKECTL_KUBECONFIG environment
variable. For example:
export GKECTL_KUBECONFIG=/path/to/my-admin-cluster-kubeconfig
If you do not export the GKECTL_KUBECONFIG environment variable, then you must
use the --kubeconfig flag when you run the command.
Download gkectl
For information on downloading gkectl , see
Downloads .
Default logging behavior for gkectl
For gkectl it's sufficient to use the default logging settings. For gkectl ,
the default log file is
/home/ubuntu/.config/gke-on-prem/logs/gkectl-$(date).log , and the file is
symlinked with the logs/gkectl-$(date).log file in the local directory where
you run gkectl .
The default -v5 verbosity level covers all the log entries needed by the
support team. The log file includes the command executed and the failure message.
We recommend that you send the log file to the support team when you need help.
Specifying a non-default locations for log files
To specify a non-default location for the gkectl log file, use the
--log_file flag. The log file that you specify will not be symlinked with the
local directory.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
