---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:10:07.324Z"
product_name: "Cloud Billing"
product_slug: "cloud-billing"
feature_name: "PayPal payment method for Cloud Billing auto-pay"
feature_slug: "paypal-payment-method-for-cloud-billing-auto-pay"
latest_feature_date: "2021-02-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/billing/docs/how-to/payment-methods"
  - "https://docs.cloud.google.com/billing/docs/how-to/pay-invoice"
  - "https://docs.cloud.google.com/billing/docs/how-to/create-billing-account"
keywords:
  - "paypal"
  - "payment"
  - "method"
  - "for"
  - "billing"
  - "auto"
  - "pay"
  - "enabled"
---

# PayPal payment method for Cloud Billing auto-pay

Product: Cloud Billing
Coverage: LOW

## Step 02 Summary

Enabled PayPal as a payment method for eligible online auto-pay Cloud Billing accounts in supported countries.

## Extended Definition

Enabled PayPal as a payment method for eligible online auto-pay Cloud Billing accounts in supported countries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/billing/docs/how-to/payment-methods](https://docs.cloud.google.com/billing/docs/how-to/payment-methods)
- [https://docs.cloud.google.com/billing/docs/how-to/pay-invoice](https://docs.cloud.google.com/billing/docs/how-to/pay-invoice)
- [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)

## Supporting Pages

### "Add, remove, or update a payment method \_|\_ Cloud Billing \_|\_ Google\

- URL: [https://docs.cloud.google.com/billing/docs/how-to/payment-methods](https://docs.cloud.google.com/billing/docs/how-to/payment-methods)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Prepay payments accounts with auto-reload enabled require at least one valid payment method assigned as the Primary form of payment.
- Prepay payments accounts with auto-reload enabled require at least one valid payment method assigned as the Primary form of payment.
- Prepay payments accounts with auto-reload enabled require at least one valid payment method assigned as the Primary form of payment.
- Permissions to add, edit, or fix a payment method If you're working in the Cloud Billing console, to add, edit, or fix a form of payment that is used to pay for a self-service, online Cloud Billing account, you need a role on your Cloud Billing account that includes the following permissions : billing.accounts.getPaymentInfo billing.accounts.updatePaymentInfo To gain these permissions using a predefined billing IAM role , you must be a Billing Account Administrator on the Cloud Billing account.

### Make a Payment to an Invoiced Cloud Billing Account \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/pay-invoice](https://docs.cloud.google.com/billing/docs/how-to/pay-invoice)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- You can pay your invoice in any of the following ways: Automated Clearing House (ACH) Electronic Fund Transfer (EFT) Wire transfer (India only) Unified Payment Interface (UPI)-enabled apps Pay using an ACH, EFT, or wire transfer To pay electronically using an ACH, wire transfer, or other EFT, you must set up electronic payments with your bank.
- Example: 3360000000 / 3360000001 / 3360000002 / 1000000009 If the invoice numbers don't all fit in the electronic payment form, then do the following: Send the invoice numbers and credit memo numbers (if any) to the email address shown on your Google invoice on the same day as the payment transfer.
- In the email, use the subject heading "Remittance < your company name > < total amount >". (India only) Pay using a Unified Payment Interface (UPI)-enabled app As of July 1, 2021, when you download the PDF version of your invoice, it includes a UPI QR code.
- In the electronic payment, provide invoice numbers and credit memo numbers (if any) in the additional information field, in the following format (a space before and after a slash, but no spaces within the invoice numbers).

### Create a new self-serve Cloud Billing account \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/billing/docs/how-to/create-billing-account](https://docs.cloud.google.com/billing/docs/how-to/create-billing-account)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Related topics Modify your Cloud Billing account Close or re-open your Cloud Billing account View projects linked to a Cloud Billing account Enable, disable, or change billing for a project Add, remove, or update a payment method Resolve billing issues View your cost and payment history View your billing reports and cost trends Try it for yourself If you're new to Google Cloud, create an account to evaluate how our products perform in real-world scenarios.
- For more information about Cloud Billing permissions, see: Overview of access control Create custom roles for Cloud Billing Understanding predefined Identity and Access Management roles for Cloud Billing For more information about Google payments permissions, see Manage payments users, permissions, and notification settings .
- Access permissions for Cloud Billing and Google payments are configured in two different systems depending on what type of access you want to provide. monetization on Cloud Billing permissions payment Google payments settings & permissions Access permissions for a Cloud Billing account are managed using IAM roles .
- For example, a user with the Billing Account Viewer role on the Cloud Billing account and assigned as an Admin with all permissions on the associated Google payments profile will be able to fully manage the Google payments profile and accounts directly from the Cloud Billing console .

