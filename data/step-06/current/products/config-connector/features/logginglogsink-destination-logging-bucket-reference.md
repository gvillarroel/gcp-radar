---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.390Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "LoggingLogSink destination logging bucket reference"
feature_slug: "logginglogsink-destination-logging-bucket-reference"
latest_feature_date: "2022-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
  - "https://docs.cloud.google.com/config-connector/docs/reference/overview"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
keywords:
  - "logginglogsink"
  - "destination"
  - "logging"
  - "bucket"
  - "reference"
  - "the"
  - "resource"
  - "supports"
---

# LoggingLogSink destination logging bucket reference

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The LoggingLogSink resource supports referencing a log bucket destination through spec.destination.loggingLogBucketRef.

## Extended Definition

The LoggingLogSink resource supports referencing a log bucket destination through spec.destination.loggingLogBucketRef.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)

## Supporting Pages

### Creating resource references | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Creating resource references Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references You can find out what format the ... documentation.
- You can also go to an individual resource&#x27;s reference page (for example, PubSubTopic) and look at the value listed in the &quot;IAM External Reference Format&quot; row of the resource&#x27;s summary table.
- The formats are listed in the &quot;External Reference Formats&quot; column of the Supported Resources table.
- The IAMPolicy, IAMPartialPolicy and IAMPolicyMember pages list the accepted format for all supported resources.

### Config Connector resources | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Config Connector resources Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/overview Note: Config Connector reference documentation is based on the latest version.
- If you are using a different version, you can find each version&#x27;s Custom Resource Definitions in the GitHub repository.

### IAMPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-iam-reference`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy If you want finer-grained control over audit configs, use # IAMAuditConfig. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicy metadata: name: iampolicy-sample-project spec: resourceRef: kind: Project name: iampolicy-dep-project bindings: - members: # Replace ${GSA EMAIL?} with the Config Connector service account&#x27;s # email address.
- This ensures that the Config Connector service account # can continue to manage the referenced project. - &quot;serviceAccount:${GSA EMAIL?}&quot; role: roles/owner - members: - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com rol

