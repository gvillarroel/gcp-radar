---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.356Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "Cloud Billing Budget API"
feature_slug: "cloud-billing-budget-api"
latest_feature_date: "2019-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/budget-api-setup"
  - "https://docs.cloud.google.com/billing/docs/how-to/budget-api-overview"
  - "https://docs.cloud.google.com/billing/docs/how-to/budget-api-prereqs"
keywords:
  - "billing"
  - "budget"
  - "api"
  - "provides"
  - "beta"
  - "for"
  - "programmatic"
  - "creation"
---

# Cloud Billing Budget API

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Provides a Beta API for programmatic creation, viewing, and management of budgets and budget alerts.

## Extended Definition

Provides a Beta API for programmatic creation, viewing, and management of budgets and budget alerts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/budget-api-setup](https://docs.cloud.google.com/billing/docs/how-to/budget-api-setup)
- [https://docs.cloud.google.com/billing/docs/how-to/budget-api-overview](https://docs.cloud.google.com/billing/docs/how-to/budget-api-overview)
- [https://docs.cloud.google.com/billing/docs/how-to/budget-api-prereqs](https://docs.cloud.google.com/billing/docs/how-to/budget-api-prereqs)

## Supporting Pages

### Cloud Billing Budget API Setup \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budget-api-setup](https://docs.cloud.google.com/billing/docs/how-to/budget-api-setup)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Recommendation about projects : We recommend that you create and use a separate Google Cloud project to contain all of your FinOps and billing administration needs for a Cloud Billing account, including your use of the Cloud Billing Budget API.
- That principal must have Identity and Access Management (IAM) roles that contain the required permissions for the Cloud Billing Budget API.
- Enable billing You need to make sure that billing is enabled on the project you are using for calling the Cloud Billing Budget API.
- Before you begin You should do the following before reading this guide: Read Cloud Billing Budget API Overview .

### Get started with the Cloud Billing Budget API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budget-api-overview](https://docs.cloud.google.com/billing/docs/how-to/budget-api-overview)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Using the Cloud Billing Budget API, you can view, create, and manage budgets programmatically at scale, up to 50,000 budgets for each Cloud Billing account.
- Examples for using the Cloud Billing Budget API include the following: Create a separate budget for each of your Google Cloud projects so you know which areas of your Google Cloud environment are spending more than expected.
- You can also use budgets to automate cost control responses using Pub/Sub topics for programmatic notifications (for example, to forward your budget messages to other mediums such as Slack, or to automate cost management tasks).
- Home Documentation Costs and usage management Cloud Billing APIs & Reference Send feedback Get started with the Cloud Billing Budget API Stay organized with collections Save and categorize content based on your preferences.

### Cloud Billing Budget API Prerequisites \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/budget-api-prereqs](https://docs.cloud.google.com/billing/docs/how-to/budget-api-prereqs)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- If you're not already familiar with concepts like Cloud Billing accounts, Google Cloud projects, Google Cloud products, and Cloud Billing budgets and alerts, read the following before starting to code: Overview of Cloud Billing concepts Manage your Cloud Billing account View the projects linked to a Cloud Billing account Budgets and budget alert rules Access control for the Cloud Billing Budget API After you are familiar with the Cloud Billing features and concepts, try out the Google Cloud console user interface .
- The specific formats for Cloud Billing Budget API URIs are: https://billingbudgets.googleapis.com/v1/ resourcePath ? parameters The full set of URIs used for each supported operation in the API is summarized in the Cloud Billing Budget API reference documents ( REST , RPC ).
- Learn JSON basics The Cloud Billing Budget API returns data in JSON format.
- Previous arrow back Get started with the Budget API Next Setup arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

