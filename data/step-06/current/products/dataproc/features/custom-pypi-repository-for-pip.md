---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.577Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Custom PyPI repository for pip"
feature_slug: "custom-pypi-repository-for-pip"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb"
keywords:
  - "custom"
  - "pypi"
  - "repository"
  - "pip"
  - "dataproc"
  - "supports"
  - "configuring"
  - "used"
---

# Custom PyPI repository for pip

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option; Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option.

## Extended Definition

Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option; Dataproc supports configuring the PyPI repository used by pip with the dataproc:pypi.repository property, including a Google-hosted cache option.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling)
- [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb)

## Supporting Pages

### "Interface AuthenticationConfigOrBuilder (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)
- Source ID: `site-java-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description AuthenticationConfig.AuthenticationType The userWorkloadAuthenticationType. getUserWorkloadAuthenticationTypeValue() public abstract int getUserWorkloadAuthenticationTypeValue () Optional.
- Authentication type for the user workload running in containers. .google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType user workload authentication type = 1 [(.google.api.field behavior) = OPTIONAL]; Returns Type Description int The enum numeric value on the wire for userWorkloadAuthenticationType.

### "JobScheduling \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/JobScheduling)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Note: This restartable job option is not supported in Dataproc workflow templates . maxFailuresTotal integer Optional.
- Note: Currently, this restartable job option is not supported in Dataproc workflow templates .

### Private Service Connect with Dataproc Metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb](https://docs.cloud.google.com/dataproc-metastore/docs/psc-ilb)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataproc Metastore requires the following configurations per region for each VPC network: 1 peering quota /17 and /20 CIDR blocks As a result, setting up VPC peering and IP address reservations can be difficult on crowded VPC networks.
- Verify the service's network configuration: In the Google Cloud console, open the Dataproc Metastore page: Go to Dataproc Metastore On the Dataproc Metastore page, click the service name of the service want like to view.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Private Service Connect with Dataproc Metastore Stay organized with collections Save and categorize content based on your preferences.
- Considerations Dataproc Metastore services that use Private Service Connect only support access from VPC networks of the subnetworks specified during the service creation.

