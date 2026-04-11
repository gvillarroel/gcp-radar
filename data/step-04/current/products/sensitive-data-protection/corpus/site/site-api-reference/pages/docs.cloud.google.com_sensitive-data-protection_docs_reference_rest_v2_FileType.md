---
title: "FileType \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/FileType
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/FileType
  title: "FileType \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Reference
Send feedback
FileType
Stay organized with collections
Save and categorize content based on your preferences.
Definitions of file type groups to scan. New types will be added to this list.
Enums
FILE_TYPE_UNSPECIFIED
Includes all files.
BINARY_FILE
Includes all file extensions not covered by another entry. Binary scanning attempts to convert the content of the file to utf_8 to scan the file. If you wish to avoid this fall back, specify one or more of the other file types in your storage scan.
TEXT_FILE
Included file extensions: asc,asp, aspx, brf, c, cc,cfm, cgi, cpp, csv, cxx, c++, cs, css, dart, dat, dot, eml,, epbub, ged, go, h, hh, hpp, hxx, h++, hs, html, htm, mkd, markdown, m, ml, mli, perl, pl, plist, pm, php, phtml, pht, properties, py, pyw, rb, rbw, rs, rss, rc, scala, sh, sql, swift, tex, shtml, shtm, xhtml, lhs, ics, ini, java, js, json, jsonl, kix, kml, ocaml, md, txt, text, tsv, vb, vcard, vcs, wml, xcodeproj, xml, xsl, xsd, yml, yaml.
IMAGE
Included file extensions: bmp, gif, jpg, jpeg, jpe, png. Setting bytesLimitPerFile or bytesLimitPerFilePercent has no effect on image files. Image inspection is restricted to the global , us , asia , and europe regions.
WORD
Microsoft Word files larger than 30 MB will be scanned as binary files. Included file extensions: docx, dotx, docm, dotm. Setting bytesLimitPerFile or bytesLimitPerFilePercent has no effect on Word files.
PDF
PDF files larger than 30 MB will be scanned as binary files. Included file extensions: pdf. Setting bytesLimitPerFile or bytesLimitPerFilePercent has no effect on PDF files.
AVRO
Included file extensions: avro
CSV
Included file extensions: csv
TSV
Included file extensions: tsv
POWERPOINT
Microsoft PowerPoint files larger than 30 MB will be scanned as binary files. Included file extensions: pptx, pptm, potx, potm, pot. Setting bytesLimitPerFile or bytesLimitPerFilePercent has no effect on PowerPoint files.
EXCEL
Microsoft Excel files larger than 30 MB will be scanned as binary files. Included file extensions: xlsx, xlsm, xltx, xltm. Setting bytesLimitPerFile or bytesLimitPerFilePercent has no effect on Excel files.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
