# VPC Service Controls

Product: Datastore
Feature slug: `vpc-service-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC Service Controls provides service perimeter protection for Datastore resources; VPC Service Controls provides service perimeter protection for Datastore resources.

## Lifecycle

- Latest feature date: 2022-06-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- auth (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- authorization (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- encrypt (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- iam (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- identity (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- key (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- permission (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- role (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))
- token (evidence: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities), [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces), [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore), [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources))

## Official Evidence

- [https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore](https://docs.cloud.google.com/datastore/docs/articles/balancing-strong-and-eventual-consistency-with-google-cloud-datastore)
- [https://docs.cloud.google.com/datastore/docs/client-side-traces](https://docs.cloud.google.com/datastore/docs/client-side-traces)
- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/resources](https://docs.cloud.google.com/datastore/docs/resources)
