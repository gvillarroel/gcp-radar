# Recommender

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-04-30T16:03:32.052Z`
Product status: `PASS`

## Summary

- Feature cards: 17
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 11 explicit, 0 derived, 6 unknown

## Service Card

- Service card ID: `recommender:service`
- Latest feature date: 2024-03-08
- Official source links: 21
- Security capabilities: 25

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Recommendation Hub | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager)<br>[source](https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsPager)<br>[source](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq) |
| Change risk recommendations | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)<br>[source](https://docs.cloud.google.com/recommender/docs/deprecation-change-recommender)<br>[source](https://docs.cloud.google.com/recommender/docs/recent-change-recommendations) |
| Service limit (quota) recommender | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/recommender/docs/deprecation-change-recommender)<br>[source](https://docs.cloud.google.com/recommender/docs/recommenders)<br>[source](https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender) |
| BigQuery partitioning and clustering recommender | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/recommender)<br>[source](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq) |
| Idle VM recommender observation period configuration | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.RecommenderAsyncClient)<br>[source](https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.RecommenderClient) |
| Recommendation export to non-US regions | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq) |
| BigQuery export for custom pricing and non-project-scoped recommendations | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Recommendation dismissal via Recommender API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/python/docs/reference/recommender/latest/google.cloud.recommender_v1.services.recommender.pagers.ListRecommendationsAsyncPager)<br>[source](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq)<br>[source](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations) |
| Recommender Viewer role | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/recommender)<br>[source](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq) |
| Cloud Functions minimum instances recommendations | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/recommender/docs/quickstart-incontext) |
| Error Reporting notification recommender | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)<br>[source](https://docs.cloud.google.com/recommender/docs/error-reporting/notification-recommender) |
| Product suggestions | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Compute Engine idle resource recommendations | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/roles-permissions/recommender)<br>[source](https://docs.cloud.google.com/recommender/docs/unattended-project-recommender) |
| Billing account recommendation opt-out | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)<br>[source](https://docs.cloud.google.com/recommender/docs/bq-export/export-recommendations-to-bq) |
| Insights | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)<br>[source](https://docs.cloud.google.com/recommender/docs/error-reporting/notification-recommender)<br>[source](https://docs.cloud.google.com/recommender/docs/insights/insight-types) |
| Transparency and Control Center | MEDIUM | PASS | explicit | [source](https://docs.cloud.google.com/iam/docs/custom-roles-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/deny-permissions-support)<br>[source](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services) |
| Recommender API | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/recommender/docs/change-risk-recommendations)<br>[source](https://docs.cloud.google.com/recommender/docs/service-limit-quota-recommender)<br>[source](https://docs.cloud.google.com/recommender/docs/unattended-project-recommender) |
