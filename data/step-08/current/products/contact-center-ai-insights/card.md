# Contact Center AI Insights

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:48.375Z`
Product status: `PASS`

## Summary

- Feature cards: 24
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 23 explicit, 0 derived, 1 unknown

## Service Card

- Service card ID: `contact-center-ai-insights:service`
- Latest feature date: 2026-02-19
- Official source links: 18
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Autolabeling Rules | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Correlation Rules | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnnotatorSelector)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Analysis Rules for Follow-Up Analysis | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Configurable Dashboards | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Conversation Datasets | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Virtual Agent Platform | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Multiple Scorecards | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Agent Assessments | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/accessapproval) |
| Agent Engagement Platform | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Conversational Insights Devkit | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/contact-center/insights/docs/how-to)<br>[source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/contact-center/insights/docs/tutorials) |
| Sampling Rules | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/how-to)<br>[source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Sentiment Analysis | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/ConversationConfig)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Merged Analysis | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Fine-Grained Access Control | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Agent Assist Summarization Integration | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights)<br>[source](https://docs.cloud.google.com/contact-center/insights/docs/how-to)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Rule-Based Analysis | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Customer-Managed Encryption Keys | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/EncryptionSpec)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| LLM-Powered Topic Inference | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/how-to)<br>[source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnnotatorSelector)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Quality AI | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Bulk Audio Ingestion API | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Audio Conversation Upload API | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/reference/rest)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
| Topic Modeling | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights/docs/before-you-begin)<br>[source](https://docs.cloud.google.com/contact-center/insights/docs/how-to)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support) |
| Access Transparency | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| VPC Service Controls Integration | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/contact-center/insights)<br>[source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support) |
