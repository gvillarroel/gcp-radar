---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.068Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Web Security Scanner INSECURE_ALLOW_ORIGIN_STARTS_WITH_VALIDATION finding type"
feature_slug: "web-security-scanner-insecure-allow-origin-starts-with-validation-finding-type"
latest_feature_date: "2022-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans"
keywords:
  - "web"
  - "security"
  - "scanner"
  - "insecure"
  - "allow"
  - "origin"
  - "starts"
  - "validation"
---

# Web Security Scanner INSECURE_ALLOW_ORIGIN_STARTS_WITH_VALIDATION finding type

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Web Security Scanner finding type for insecure allow-origin validation that uses a prefix match.

## Extended Definition

Web Security Scanner finding type for insecure allow-origin validation that uses a prefix match.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings](https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans](https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans)

## Supporting Pages

### תיקון ממצאים של Web Security Scanner | Security Command Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings](https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings)
- Source ID: `feature-recovery-direct-http`
- Final score: 360
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Insecure allow origin starts with validation שם הקטגוריה ב-API: INSECURE_ALLOW_ORIGIN_STARTS_WITH_VALIDATION Web Security Scanner יכול למצוא שנקודת קצה (endpoint) של HTTP או HTTPS באתר מאמתת רק קידומת של כותרת הבקשה Origin לפני שהיא משקפת אותה בתוך כותרת התגובה Access-Control-Allow-Origin . אם האימות לא מוגדר בצורה נכונה, יכול להיות שנקודת הקצה תעניק גישה לדומיין זדוני שיש לו את אותו הקידומת כמו לדומיין שנכלל ברשימת ההיתרים. לדוגמה, אם מאמת נקודת הקצה בודק רק אם הדומיין ששולח את הבקשה מכיל את google.com , יכול להיות שהוא יאשר בטעות גישה ל- google.com.maliciousdomain.com . כדי לפתור את הבעיה הזו, צריך לוודא שהדומיין הצפוי תואם באופן מלא לערך הכותרת Origin לפני שמשקפים אותו בכותרת התגובה Access-Control-Allow-Origin – לדוגמה, .equals(".google.com") .
- Insecure allow origin ends with validation שם הקטגוריה ב-API: INSECURE_ALLOW_ORIGIN_ENDS_WITH_VALIDATION Web Security Scanner יכול למצוא שנקודת קצה (endpoint) של HTTP או HTTPS מאמתת רק סיומת של כותרת הבקשה Origin לפני שהיא משקפת אותה בתוך כותרת התגובה Access-Control-Allow-Origin . אם האימות לא מוגדר בצורה נכונה, יכול להיות שנקודת הקצה תעניק גישה לדומיין זדוני שיש לו את אותה סיומת כמו לדומיין שנכלל ברשימת ההיתרים. לדוגמה, אם מאמת נקודת הקצה תואם לדומיינים כמו *google.com , יכול להיות שהוא יאפשר גישה בטעות ל- maliciousdomaingoogle.com . כדי לפתור את הממצא הזה, צריך לוודא שהדומיין הבסיסי (root) הצפוי הוא חלק מהערך של הכותרת Origin לפני שמשקפים אותו בכותרת תגובה Access-Control-Allow-Origin . לגבי תווים כלליים של תת-דומיין, מוסיפים נקודה לפני דומיין הבסיס – לדוגמה, .endsWith(".google.com") .
- Session ID leak שם הקטגוריה ב-API: SESSION_ID_LEAK יכול להיות ש-Web Security Scanner ימצא מזהה סשן בכותרת הבקשה Referer של בקשות חוצות-דומיין באפליקציית האינטרנט שלכם. דומיינים שמקבלים את Referer יכולים להשתמש במזהה הסשן כדי להתחזות למשתמש (באמצעות האסימון שלו) או כדי לזהות את המשתמש באופן ייחודי. כדי לתקן את הממצא הזה, צריך לאחסן את מזהי הביקורים בקובצי Cookie במקום בכתובת ה-URL. בנוסף, אפשר להגן על קובצי ה-Cookie באמצעות המאפיינים הבאים: ‫ HTTPOnly : מאפיין שמונע מסקריפטים בצד הלקוח לגשת לקובצי Cookie ‫ Secure : מאפיין שמאפשר להעביר קובצי Cookie רק דרך HTTPS Invalid content type שם הקטגוריה ב-API: INVALID_CONTENT_TYPE Web Security Scanner עשוי למצוא שמשאב נטען שאינו תואם לכותרת ה-HTTP של סוג התוכן בתגובה. בתרחיש הזה, האפליקציה מחזירה תוכן רגיש עם סוג תוכן לא תקין, או ללא כותרת X-Content-Type-Options: nosniff . כדי לתקן את הממצא הזה, צריך לוודא את הדברים הבאים: תגובות JSON מוצגות עם כותרת Content-Type‏ application/json תשובות רגישות אחרות מוצגות עם סוגי MIME מתאימים הצגת תוכן עם כותרת HTTP‏ X-Content-Type-Options: nosniff Invalid header שם הקטגוריה ב-API: INVALID_HEADER Web Security Scanner עשוי למצוא שכותרת אבטחה מכילה שגיאת תחביר, וכתוצאה מכך הכותרת תהיה בעלת ערך שגוי או לא חוקי. לכן, הדפדפן מתעלם מהכותרות האלה. הכותרות התקינות מתוארות בקטעים הבאים. כותרת Referrer-Policy מדיניות תקפה של דפדפן מפנה מכילה אחד מהערכים הבאים: מחרוזת ריקה no-referrer no-referrer-when-downgrade same-origin origin strict-origin origin-when-cross-origin strict-origin-when-cross-origin unsafe-url כותרת X-Frame-Options כותרת X-Frame-Options תקינה יכולה להכיל רק את הערכים הבאים: ‫ DENY : איסור של כל המסגרות ‫ SAMEORIGIN : מאפשר הצגת מסגרת אם כתובת ה-URL ברמה העליונה היא מאותו מקור ALLOW-FROM URL ‫Chrome לא תומך ב- ALLOW-FROM URL . אסור להשתמש בכמה ערכים של X-Frame-Options. כותרת X-Content-Type-Options כותרת X-Content-Type-Options תקינה יכולה להכיל רק ערך אחד: nosniff . כותרת X-XSS-Protection כותרת X-XSS-Protection תקינה חייבת להתחיל ב- 0 (disable) או ב- 1 (enable). רק אם מפעילים את ההגנה, אפשר להוסיף עד שתי אפשרויות: ‫ mode=block מציג דף ריק במקום לסנן את ה-XSS ‫ report=URL שולח דוחות אל URL מפרידים בין האפשרויות באמצעות נקודה-פסיק, לדוגמה 1; mode=block; report=URI . חשוב לוודא שאין נקודה-פסיק בסוף.
- Content-Security-Policy: script-src 'nonce-{random}' 'report-sample'; object-src 'none'; base-uri 'none'; report-uri https://link-to-report-endpoint חסרה כותרת Cross-Origin-Opener-Policy שם הקטגוריה ב-API: COOP_MISSING Web Security Scanner מוודא שהכותרת Cross-Origin-Opener-Policy נשלחת עם כל תגובת HTTP, כולל אחת מההנחיות התקפות: unsafe-none same-origin-allow-popups same-origin חסרה הגנה מפני קליקג'אקינג שם הקטגוריה ב-API: CLICKJACKING_PROTECTION_MISSING כדי למנוע הונאת קליקים, Web Security Scanner מוודא שכותרת X-Frame-Options או Content-Security-Policy נשלחת עם כל תגובת HTTP: אם אתם משתמשים בכותרת X-Frame-Options, צריך להשתמש בהנחיה DENY או SAMEORIGIN . אם אתם משתמשים בכותרת Content-Security-Policy, צריך להגדיר את ההוראה frame-ancestors . אימות הבעיה חשוב: אם משביתים את אמצעי ההגנה בדפדפן לצורך בדיקה, אסור להשתמש בדפדפן לשום דבר אחר מלבד בדיקת בעיות אבטחה משלכם. כש-Web Security Scanner מדווח על בעיה, צריך לאמת את המיקום של הבעיה. בקטע הזה מוסבר איך להשתמש בדוחות על ממצאים כדי לשחזר ולבדוק פגיעויות. עוברים לדף Web Security Scanner במסוף Google Cloud . מעבר אל Web Security Scanner בוחרים פרויקט. יופיע דף עם רשימה של הסריקות המנוהלות והמותאמות אישית. בקטע Scan configs (הגדרות סריקה), בוחרים את הסריקה שמכילה את הממצא שרוצים לאמת. ייפתח דף עם פרטים על הסריקה. עוברים לכרטיסייה תוצאות , מרחיבים קטגוריה ובוחרים ממצא כדי לראות את הפרטים שלו. שיטת האימות משתנה בהתאם לקטגוריית הממצא. משתמשים בדפדפן בדיקה ופועלים לפי ההוראות שבהמשך.

### "Setting up custom scans using Web Security Scanner \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans](https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Learn how to remediate Web Security Scanner findings .
- Step 2: Configuring the scan After you configure your firewall to allow the Web Security Scanner predictable IP addresses, configure the scan to use predefined IPs: Go to the Web Security Scanner page in the Google Cloud console.
- For example: In a blog application that allows public comments, Web Security Scanner might post test strings as comments on all your blog articles.
- To modify your firewall rules to allow Web Security Scanner traffic, see Configuring the firewall later on this page.

### "Web Security Scanner audit logging \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/audit-logging-web-security](https://docs.cloud.google.com/security-command-center/docs/audit-logging-web-security)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanConfigs google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanRuns google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanConfigs google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRuns ADMIN WRITE google.cloud.websecurityscanner.v1.WebSecurityScanner.CreateScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.DeleteScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.UpdateScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.CreateScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.DeleteScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.UpdateScanConfig DATA READ google.cloud.websecurityscanner.v1.WebSecurityScanner.GetFinding google.cloud.websecurityscanner.v1.WebSecurityScanner.ListCrawledUrls google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStats google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindings google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetFinding google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrls google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindings API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Web Security Scanner. google.cloud.websecurityscanner.v1.WebSecurityScanner The following audit logs are associated with methods belonging to google.cloud.websecurityscanner.v1.WebSecurityScanner .
- Filter for this method : protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun" StopScanRun Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRun Audit log type : Admin activity Permissions : cloudsecurityscanner.scanruns.stop - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRuns" StartScanRun Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun Audit log type : Admin activity Permissions : cloudsecurityscanner.scans.run - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRun" StopScanRun Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRun Audit log type : Admin activity Permissions : cloudsecurityscanner.scanruns.stop - ADMIN WRITE Method is a long-running or streaming operation : No.

