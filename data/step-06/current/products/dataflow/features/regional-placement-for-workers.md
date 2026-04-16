---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.785Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Regional placement for workers"
feature_slug: "regional-placement-for-workers"
latest_feature_date: "2022-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints"
  - "https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "regional"
  - "placement"
  - "workers"
  - "lets"
  - "dataflow"
  - "place"
  - "worker"
  - "vms"
---

# Regional placement for workers

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Regional placement for workers lets Dataflow place worker VMs within a specified region.

## Extended Definition

Regional placement for workers lets Dataflow place worker VMs within a specified region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### Dataflow regions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints](https://docs.cloud.google.com/dataflow/docs/concepts/regional-endpoints)
- Source ID: `site-docs-reference-required-3`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Regional placement offers benefits such as: Improved resource availability: Dataflow jobs are more resilient to zonal resource availability errors, because workers can continue to be created in other zones with remaining availability.
- Regional placement By default, the region that you select configures the Dataflow worker pool to utilize all available zones within the region.
- The following limitations apply: Regional placement is supported only for jobs using Streaming Engine or Dataflow Shuffle.
- Jobs that have opted out of Streaming Engine or Dataflow Shuffle cannot use regional placement.

### "Configure internet access and firewall rules \_|\_ Cloud Dataflow \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall](https://docs.cloud.google.com/dataflow/docs/guides/routes-firewall)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A project owner, editor, or security administrator can use the following gcloud command to create an egress allow rule that permits traffic from TCP ports 12345 and 12346 on VMs with the network tag dataflow to other VMs with the same tag: gcloud compute firewall-rules create FIREWALL RULE NAME EGRESS \ --network = NETWORK \ --action = allow \ --direction = egress \ --target-tags = CUSTOM TAG \ --source-tags = CUSTOM TAG \ --destination-ranges = DESTINATION-RANGES \ --priority = PRIORITY NUM \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME EGRESS : a name for the firewall rule NETWORK : the name of the network that your worker VMs use CUSTOM TAG : a comma-delimited list of network tags The following is a list of guidelines for using network tags: If you omit --target-tags , the rule applies to all VMs in the VPC network.
- A project owner, editor, or security admin can use the following gcloud command to create an ingress allow rule that permits traffic on TCP ports 12345 and 12346 from VMs with the network tag dataflow to other VMs with the same tag: gcloud compute firewall-rules create FIREWALL RULE NAME INGRESS \ --action = allow \ --direction = ingress \ --network = NETWORK \ --target-tags = CUSTOM TAG \ --source-tags = CUSTOM TAG \ --priority = PRIORITY NUM \ --rules tcp:12345-12346 Replace the following: FIREWALL RULE NAME INGRESS : a name for the firewall rule NETWORK : the name of the network that your worker VMs use CUSTOM TAG : a comma-delimited list of network tags The following is a list of guidelines for using network tags: If you omit --target-tags , the rule applies to all VMs in the VPC network.
- Turn off external IP address By default, Dataflow assigns both external and internal IP addresses to workers.
- However, the pipeline cannot access the internet, and internet hosts cannot access your Dataflow workers.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- Connection timed out When you run a Dataflow job, you might see the following error in the log files: org.springframework.web.client.ResourceAccessException: I/O error on GET request for CONNECTION PATH : Connection timed out (Connection timed out); nested exception is java.net.ConnectException: Connection timed out (Connection timed out) This issue occurs when the Dataflow workers fail to establish or maintain a connection with the data source or destination.
- Runner v2 harness update The following info message appears in the job logs of a Runner v2 job The Dataflow RunnerV2 container image of this job's workers will be ready for update in 7 days.
- When you run a Dataflow job that doesn't use Dataflow Shuffle or Streaming Engine, workers need to communicate with each other using TCP ports 12345 and 12346 within the VPC network.

