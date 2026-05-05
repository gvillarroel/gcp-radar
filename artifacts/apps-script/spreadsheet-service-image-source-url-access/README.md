# Spreadsheet Service image source URL access

Product: Apps Script
Feature slug: `spreadsheet-service-image-source-url-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spreadsheet Service image source URL access exposes an image's source URL through getUrl() on CellImage, CellImageBuilder, and OverGridImage; deprecated on 2024-12-09.

## Lifecycle

- Latest feature date: 2024-12-09
- Deprecation date: 2024-12-09
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder](https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder))
- allow (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder](https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder))
- auth (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder](https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder))
- authorization (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder](https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder))
- key (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder](https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder))
- permission (evidence: [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image), [https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder](https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder))

## Official Evidence

- [https://developers.google.com/apps-script/reference/spreadsheet](https://developers.google.com/apps-script/reference/spreadsheet)
- [https://developers.google.com/apps-script/reference/spreadsheet/cell-image](https://developers.google.com/apps-script/reference/spreadsheet/cell-image)
- [https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder](https://developers.google.com/apps-script/reference/spreadsheet/cell-image-builder)
