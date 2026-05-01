# Gmail API

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-01T19:03:55.687Z`
Product status: `PASS`

## Summary

- Feature cards: 36
- Step 07 failed features: 0
- Step 07 warned features: 1
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 36 unknown

## Service Card

- Service card ID: `gmail-api:service`
- Latest feature date: 2026-02-03
- Official source links: 49
- Security capabilities: 14

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Gmail Postmaster Tools API v2 | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/smime_certs)<br>[source](https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens) |
| Gmail Postmaster Tools API v2beta | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/smime_certs)<br>[source](https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens) |
| Deal Cards in the Promotions tab | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)<br>[source](https://developers.google.com/workspace/gmail/markup/highlights)<br>[source](https://developers.google.com/workspace/gmail/markup/overview) |
| Smart card support for Gmail client-side encryption | LOW | WARN | unknown | [source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels/delete)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages.attachments)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import) |
| history.list type filtering | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/push)<br>[source](https://developers.google.com/workspace/gmail/api/guides/sync)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) |
| messages.batchModify | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/reference/quota)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify) |
| Filters | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/filter_settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest) |
| Forwarding | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/forwarding_settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding) |
| POP and IMAP | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings) |
| Send-as aliases | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides)<br>[source](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings) |
| Signatures | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/alias_and_signature_settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/LanguageSettings) |
| Vacation responder | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/migrate-from-email-settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/vacation_settings)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings) |
| messages.batchDelete | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/reference/rest)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchDelete)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/batchModify) |
| drafts.list includeSpamTrash | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/list-messages)<br>[source](https://developers.google.com/workspace/gmail/api/reference/quota)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/list) |
| history.list message label details | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/push)<br>[source](https://developers.google.com/workspace/gmail/api/guides/sync)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) |
| Message.internalDate | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import) |
| Mailbox push notifications | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides)<br>[source](https://developers.google.com/workspace/gmail/api/guides/push)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest) |
| messages.insert deleted parameter | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/reference/quota)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert) |
| messages.insert label assignment | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/labels)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert) |
| History change-type enums | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/push)<br>[source](https://developers.google.com/workspace/gmail/api/guides/sync)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) |
| messages.import deleted parameter | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/drafts)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import) |
| messages.import neverMarkSpam parameter | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/sending)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import) |
| messages.import processForCalendar parameter | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/sending)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import) |
| messages.import labelIds parameter | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/list-messages)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import) |
| threads.get format parameter | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/threads)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/list) |
| getProfile method | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides/uploads)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.history/list) |
| IMPORTANT label | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides)<br>[source](https://developers.google.com/workspace/gmail/api/guides/filter_settings)<br>[source](https://developers.google.com/workspace/gmail/api/guides/labels) |
| Labels count fields | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/guides)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.labels)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages) |
| internalDateSource parameter | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/import)<br>[source](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/insert) |
| Review Action | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/markup/actions/actions-overview)<br>[source](https://developers.google.com/workspace/gmail/markup/actions/declaring-actions)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/one-click-action) |
| Email Markup Tester | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/markup/reference/bus-reservation)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/event-reservation)<br>[source](https://developers.google.com/workspace/gmail/markup/testing-your-schema) |
| Schema Validator tool | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/markup/reference/bus-reservation)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/event-reservation)<br>[source](https://developers.google.com/workspace/gmail/markup/testing-your-schema) |
| Order | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/markup/reference/order)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/schema-org-proposals) |
| Parcel Delivery | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/markup/highlights)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery) |
| TrackAction | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/markup/actions/declaring-actions)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/go-to-action)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/parcel-delivery) |
| RSVP Action | MEDIUM | PASS | unknown | [source](https://developers.google.com/workspace/gmail/markup/actions/actions-overview)<br>[source](https://developers.google.com/workspace/gmail/markup/reference/types/Action) |
