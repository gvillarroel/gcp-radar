---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.496Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Structured Avro scanning"
feature_slug: "structured-avro-scanning"
latest_feature_date: "2019-06-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues"
keywords:
  - "surfaced"
  - "avro"
  - "structured"
  - "files"
  - "scanning"
  - "rows"
  - "scanned"
  - "findings"
---

# Structured Avro scanning

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Avro files are scanned as structured data with findings surfaced as rows and columns.

## Extended Definition

Avro files are scanned as structured data with findings surfaced as rows and columns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues](https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues)

## Supporting Pages

### "Supported file types and scanning modes \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types](https://docs.cloud.google.com/sensitive-data-protection/docs/supported-file-types)
- Source ID: `site-docs-reference-3`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- File cluster File extensions Limits Scanning mode Text asc, eml, htm, html, ini, json, jsonL, log, markdown, md, mkd, plist, shtm, shtml, sql, tex, text, txt, vcard, vcs, xsd, xsl Plain text Source Code bat, brf, c, c++, cc, cmd, cpp, cs, css, cxx, dart, go, h, hh, hpp, hs, hxx, java, js, lhs, m, ml, ocaml, php, phtm, phtml, pl, ps1, py, pyw, rb, rbw, rc, rs, scala, scpt, scr, script, sh, sql, vb, vbs, wml, xml, yaml, yml Plain text Structured Data avro, csv, tsv, proto Structured parsing for avro, csv, and tsv files.
- RecordLocation Scanning structured files in structured parsing mode When you scan a structured file—such as an Avro, CSV, or TSV file—Sensitive Data Protection attempts to scan the file in structured parsing scanning mode .
- OCR Image content detection Image content classification Executables ac, air, apk, app, appimage, bas, bin, bms, class, cls, com, command, ctl, ctx, dca, ddf, dep, dll, dob, dox, dsr, dsx, dws, exe, frm, frx, gadget, ipa, mpk, oca, ocx, pag, pgx, pif, pyc, res, run, scb, tlb, vbd, vbg, vbl, vbp, vbr, vbw, vbz, vlx, wct, widget, workflow, wsf, x86, x86 64, xap, xbe, xlm Not scanned at this time Archives 7z, a, ace, afa, alz, apk, ar, arc, arj, ark, b1, b6z, ba, bh, cab, car, cdx, cfs, cpio, cpt, dar, dd, dgc, dmg, ear, esd, gca, genozip, gz, ha, hki, ice, ima, img, iso, jar, kgb, lha, lpaq# , lzh, lzx, mou, pak, paq# , paq6, paq7, paq8 and variants, partimg, pea, phar, pim, pit, qda, rar, rk, run, s7z, sda, sea, sen, sfx, shar, shk, sit, sitx, sqx, swm, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, tgz, uc, uc0, uc2, uca, ucn, ue2, uha, ur2, war, wim, xar, xp3, yz1, zip, zipx, zoo, zpaq, zz Sensitive Data Protection scans files within archives that have these file extensions: bz2, cpio, gz, jar, lz4, lzma, tar, tar.bz2, tar.gz, tar.lz4, tar.lzma, tar.xz, tar.z, xz, z, zip The scanning mode used for each file depends on the type of the file.
- File type File extensions Limits Scanning mode Transformation support Apache Avro avro Avro limits Structured parsing Comma- or tab-separated values csv, tsv Note: To scan a CSV or TSV file in structured parsing mode, make sure that the file's delimiter matches its file extension.

### "Inspect Google Cloud storage and databases for sensitive data \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-storage)
- Source ID: `site-docs-reference-3`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON output: { "name" : "projects/[PROJECT-ID]/dlpJobs/[JOB-ID]" , "type" : "INSPECT JOB" , "state" : "PENDING" , "inspectDetails" :{ "requestedOptions" :{ "snapshotInspectTemplate" :{ } , "jobConfig" :{ "storageConfig" :{ "cloudStorageOptions" :{ "fileSet" :{ "url" : "gs://[BUCKET NAME]/ " } , "bytesLimitPerFile" : "200" , "fileTypes" : [ "TEXT FILE" ] , "sampleMethod" : "TOP" , "filesLimitPercent" : 90 } } , "inspectConfig" :{ "infoTypes" : [ { "name":"PERSON NAME" } ] , "minLikelihood" : "POSSIBLE" , "limits" :{ } , "includeQuote" : true , "excludeInfoTypes" : true } , "actions" : [ { "saveFindings":{ "outputConfig":{ "table":{ "projectId":"[PROJECT-ID ] ", " datasetId ":" [ DATASET-ID ] ", " tableId ":" [ TABLE-ID ] " }, " outputSchema ":" BASIC COLUMNS " } } } ] } } }, " createTime ":" 2018 - 05 - 30 T22 : 22 : 08.279 Z " } Limit BigQuery scans To enable sampling in BigQuery by limiting the amount of data that is scanned, specify the following optional fields within BigQueryOptions : rowsLimit : The maximum number of rows to scan.
- For more information, see Set up authentication for a local development environment . import threading from typing import List import google.cloud.dlp import google.cloud.pubsub def inspect gcs with sampling ( project : str , bucket : str , topic id : str , subscription id : str , info types : List [ str ] = None , file types : List [ str ] = None , min likelihood : str = None , max findings : int = None , timeout : int = 300 , ) - > None : """Uses the Data Loss Prevention API to analyze files in GCS by limiting the amount of data to be scanned.
- When scanning files in Cloud Storage locations, Sensitive Data Protection supports scanning of binary, text, image, Microsoft Word, Microsoft Excel, Microsoft Powerpoint, PDF, and Apache Avro files.
- Sensitive Data Protection relies on file extensions and media (MIME) types to identify the types of the files to be scanned and the scanning modes to apply.

### Known issues \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues](https://docs.cloud.google.com/sensitive-data-protection/docs/known-issues)
- Source ID: `site-docs-reference-3`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Structured files being scanned in binary mode In certain cases, files that are typically scanned in structured parsing mode might be scanned in binary mode, which doesn't include the enhancements of the structured parsing mode.
- For more information, see Scanning structured files in structured parsing mode .
- Exported findings do not have values for the row number field When you configure Sensitive Data Protection to save findings to BigQuery, the location.content locations.record location.record key.big query key.row number field in the generated BigQuery table is inferred at the time the input table is scanned.
- Limiting scans to new BigQuery content If you're limiting scans to only new content , and you use the BigQuery Storage Write API to populate the input table, Sensitive Data Protection might skip scanning some rows.

