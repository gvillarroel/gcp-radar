---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.063Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Web Security Scanner SQL_INJECTION finding type"
feature_slug: "web-security-scanner-sql-injection-finding-type"
latest_feature_date: "2022-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans"
keywords:
  - "web"
  - "security"
  - "scanner"
  - "sql"
  - "injection"
  - "finding"
  - "type"
  - "vulnerabilities"
---

# Web Security Scanner SQL_INJECTION finding type

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Web Security Scanner finding type for SQL injection vulnerabilities.

## Extended Definition

Web Security Scanner finding type for SQL injection vulnerabilities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings](https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans](https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans)

## Supporting Pages

### תיקון ממצאים של Web Security Scanner | Security Command Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings](https://docs.cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings)
- Source ID: `feature-recovery-direct-http`
- Final score: 358
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SQL injection שם הקטגוריה ב-API: SQL_INJECTION יכול להיות ש-Web Security Scanner ימצא פרצת אבטחה של הזרקת SQL. תוקפים יכולים ליצור קלט שמבצע מניפולציה במבנה השאילתה של שאילתת ה-SQL הבסיסית שפועלת בשרת. הקלט הזה מאפשר להם להעביר נתונים ממסד הנתונים, ובמקרים מסוימים גם לשנות את הנתונים. כדי לפתור את הממצא הזה, השתמשו בשאילתות עם פרמטרים כדי למנוע מקלט של משתמשים להשפיע על המבנה של שאילתת ה-SQL. מידע נוסף על נקודת חולשה זו זמין במאמר בנושא הזרקת SQL .
- Cross-site scripting : אחרי לחיצה על כתובת ה-URL להפעלה מחדש , מופיע חלון קופץ ריק בדפדפן, מה שמצביע על כך שהסריקה הצליחה להחדיר קוד לא מזיק לסקריפט. ספרייה לא עדכנית : אחרי שמזינים את כתובת ה-URL הפגיעה , מוצג דף עם הטקסט 'Exploited' (נוצלה), שמציין שהסריקה הצליחה להחדיר קוד לא מזיק לסקריפט. תוכן מעורב אחרי כתובת ה-URL של דף ה-HTTPS מוחזרת אזהרה לגבי פגיעות של תוכן מעורב. בדוח הממצאים מופיע המשאב הפגיע בקטע כתובת ה-URL של המשאב שמוצג באמצעות HTTP . החדרת Flash : יכול להיות ש-Web Security Scanner יחזיר ממצאים בקטגוריה הזו, אבל רוב הדפדפנים המודרניים מוגנים מפני החדרה של Flash. לא סביר שאפשר יהיה לנצל את הממצאים האלה. זיהום אב טיפוס : עוקבים אחרי כתובת ה-URL בשדה כתובת URL לשחזור ומחפשים שינויים באובייקט Object.prototype שהמטען הייעודי (payload) הציג, באמצעות קטעי ה-JavaScript הבאים. ({}).__secret_injected_property ({}).__defineGetter__.__secret_injected_property ({}).hasOwnProperty.__secret_injected_property יכול להיות שאכיפה של Content Security Policy‏ (CSP) עדיין תמנע את ההפעלה של קוד JavaScript. במצב הזה, קשה יותר לשחזר את ה-XSS. אם נתקלתם בבעיה הזו, כדאי לבדוק את מסוף יומן הדפדפן כדי לקבל פרטים על הפרת ה-CSP שהתרחשה. שליחת משוב אלא אם צוין אחרת, התוכן של דף זה הוא ברישיון Creative Commons Attribution 4.0 ודוגמאות הקוד הן ברישיון Apache 2.0 . לפרטים, ניתן לעיין ב מדיניות האתר Google Developers‏ .‏ Java הוא סימן מסחרי רשום של חברת Oracle ו/או של השותפים העצמאיים שלה. עדכון אחרון: 2026-03-10 (שעון UTC). רוצה לתת לנו משוב? [[["התוכן קל להבנה","easyToUnderstand","thumb-up"],["התוכן עזר לי לפתור בעיה","solvedMyProblem","thumb-up"],["סיבה אחרת","otherUp","thumb-up"]],[["התוכן קשה להבנה","hardToUnderstand","thumb-down"],["שגיאות בקוד לדוגמה או במידע","incorrectInformationOrSampleCode","thumb-down"],["חסרים לי פרטים או דוגמאות","missingTheInformationSamplesINeed","thumb-down"],["בעיה בתרגום","translationIssue","thumb-down"],["סיבה אחרת","otherDown","thumb-down"]],["עדכון אחרון: 2026-03-10 (שעון UTC)."],[],[]] מוצרים ותמחור להצגת כל המוצרים תוכניות תמחור ב-Google Cloud Google Cloud Marketplace ליצירת קשר עם צוות המכירות תמיכה פורומים של הקהילה תמיכה הערות מוצר סטטוס מערכת משאבים GitHub התחלת השימוש ב-Google Cloud דוגמאות קוד מרכז הארכיטקטורה של Cloud הדרכה והסמכה עניין בלוג אירועים ‫X (טוויטר) Google Cloud ב-YouTube Google Cloud Tech ב-YouTube הכול על Google פרטיות התנאים וההגבלות של האתר התנאים של Google Cloud Manage cookies העשור השלישי למאמצים להתמודד עם משבר האקלים: רוצה להצטרף אלינו? הרשמה לניוזלטר של Google Cloud הרשמה English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어
- Session ID leak שם הקטגוריה ב-API: SESSION_ID_LEAK יכול להיות ש-Web Security Scanner ימצא מזהה סשן בכותרת הבקשה Referer של בקשות חוצות-דומיין באפליקציית האינטרנט שלכם. דומיינים שמקבלים את Referer יכולים להשתמש במזהה הסשן כדי להתחזות למשתמש (באמצעות האסימון שלו) או כדי לזהות את המשתמש באופן ייחודי. כדי לתקן את הממצא הזה, צריך לאחסן את מזהי הביקורים בקובצי Cookie במקום בכתובת ה-URL. בנוסף, אפשר להגן על קובצי ה-Cookie באמצעות המאפיינים הבאים: ‫ HTTPOnly : מאפיין שמונע מסקריפטים בצד הלקוח לגשת לקובצי Cookie ‫ Secure : מאפיין שמאפשר להעביר קובצי Cookie רק דרך HTTPS Invalid content type שם הקטגוריה ב-API: INVALID_CONTENT_TYPE Web Security Scanner עשוי למצוא שמשאב נטען שאינו תואם לכותרת ה-HTTP של סוג התוכן בתגובה. בתרחיש הזה, האפליקציה מחזירה תוכן רגיש עם סוג תוכן לא תקין, או ללא כותרת X-Content-Type-Options: nosniff . כדי לתקן את הממצא הזה, צריך לוודא את הדברים הבאים: תגובות JSON מוצגות עם כותרת Content-Type‏ application/json תשובות רגישות אחרות מוצגות עם סוגי MIME מתאימים הצגת תוכן עם כותרת HTTP‏ X-Content-Type-Options: nosniff Invalid header שם הקטגוריה ב-API: INVALID_HEADER Web Security Scanner עשוי למצוא שכותרת אבטחה מכילה שגיאת תחביר, וכתוצאה מכך הכותרת תהיה בעלת ערך שגוי או לא חוקי. לכן, הדפדפן מתעלם מהכותרות האלה. הכותרות התקינות מתוארות בקטעים הבאים. כותרת Referrer-Policy מדיניות תקפה של דפדפן מפנה מכילה אחד מהערכים הבאים: מחרוזת ריקה no-referrer no-referrer-when-downgrade same-origin origin strict-origin origin-when-cross-origin strict-origin-when-cross-origin unsafe-url כותרת X-Frame-Options כותרת X-Frame-Options תקינה יכולה להכיל רק את הערכים הבאים: ‫ DENY : איסור של כל המסגרות ‫ SAMEORIGIN : מאפשר הצגת מסגרת אם כתובת ה-URL ברמה העליונה היא מאותו מקור ALLOW-FROM URL ‫Chrome לא תומך ב- ALLOW-FROM URL . אסור להשתמש בכמה ערכים של X-Frame-Options. כותרת X-Content-Type-Options כותרת X-Content-Type-Options תקינה יכולה להכיל רק ערך אחד: nosniff . כותרת X-XSS-Protection כותרת X-XSS-Protection תקינה חייבת להתחיל ב- 0 (disable) או ב- 1 (enable). רק אם מפעילים את ההגנה, אפשר להוסיף עד שתי אפשרויות: ‫ mode=block מציג דף ריק במקום לסנן את ה-XSS ‫ report=URL שולח דוחות אל URL מפרידים בין האפשרויות באמצעות נקודה-פסיק, לדוגמה 1; mode=block; report=URI . חשוב לוודא שאין נקודה-פסיק בסוף.
- Prototype pollution שם הקטגוריה ב-API: PROTOTYPE_POLLUTION יכול להיות ש-Web Security Scanner ימצא פרצת אבטחה מסוג prototype pollution באפליקציית אינטרנט שבה מאפייני האובייקט מקבלים ערכים שניתנים לשליטה על ידי התוקף. תוקפים יכולים ליצור קלט שגורם לאפליקציה להיות פגיעה לפרצת אבטחה XSS‏ (cross-site scripting) או לנקודות חולשה אחרות בצד הלקוח. כדי לפתור את הבעיה, צריך למחוק את המאפיין proto שהוצא משימוש ולהפוך את האובייקט Object.prototype לבלתי ניתן לשינוי. אם הפתרון הזה לא מתאים לקוד שלכם, צריך לשנות את החלק הפגיע בקוד כך שיעתיק רק ערכים צפויים מקלט שניתן לשליטה על ידי התוקף. תיקון ממצאים של טעויות בהגדרות של Web Security Scanner בקטע הזה מוסבר איך לטפל בבעיות שונות שזוהו על ידי Web Security Scanner בגלל הגדרות שגויות. הגדרה שגויה של HTTP Strict Transport Security שם הקטגוריה ב-API: HSTS_MISCONFIGURATION סורק אבטחת האתר מוודא שכותרת ה-HTTP Strict Transport Security נשלחת עם כל תגובת HTTP ומוגדרת בצורה נכונה. כדי להגביל את ההשפעה על יציבות האתר, צריך: מתחילים עם max-age קטן ורק עם includeSubDomains הכללה (בלי preload ). דוגמה: max-age =3600; includeSubDomains . אחרי תקופת צינון קצרה של כשבוע שבה לא דווחו בעיות, מגדילים את הערך של max-age. דוגמה: max-age =604800; includeSubDomains או max-age =2592000; includeSubDomains . אחרי כ-3 חודשים ללא בעיות מדווחות, מוסיפים את האתר ואת תתי-הדומיינים שלו אל hstspreload.org ומציינים את ההוראה לטעינה מראש. הדרישה ל-HSTS מוטמעת בדפדפן באמצעות ציון של הנחיית טעינה מראש, כך שגורמים זדוניים לא יכולים לשדרג לאחור את החיבור. הוראת טעינה מראש: max-age=63072000; includeSubDomains; preload. חסר כותר Content-Security-Policy שם הקטגוריה ב-API: CSP_MISSING Web Security Scanner מוודא שכותרת Content-Security-Policy מחמירה עם nonce בלבד נשלחת עם כל תגובת HTTP.

### "Setting up custom scans using Web Security Scanner \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans](https://docs.cloud.google.com/security-command-center/docs/how-to-web-security-scanner-custom-scans)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Learn how to remediate Web Security Scanner findings .
- The following image shows example scan results when no vulnerabilities are detected: If you've enabled Web Security Scanner as a Web Security Scanner security source , scan results are also displayed on the Google Cloud console.
- If you've enabled Web Security Scanner as a Security Command Center security source , scan results appear on the Findings page in the Google Cloud console.
- If Security Command Center is active , you can enable Web Security Scanner in the Google Cloud console on the Security Command Center Settings page Step 1: Deploying a test application To complete Web Security Scanner setup for custom scans, you need the URL of a Compute Engine, Google Kubernetes Engine (GKE), or App Engine application that is already deployed.

### "Web Security Scanner audit logging \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/audit-logging-web-security](https://docs.cloud.google.com/security-command-center/docs/audit-logging-web-security)
- Source ID: `site-iam-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanConfigs google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanRuns google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanConfigs google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRuns ADMIN WRITE google.cloud.websecurityscanner.v1.WebSecurityScanner.CreateScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.DeleteScanConfig google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRun google.cloud.websecurityscanner.v1.WebSecurityScanner.UpdateScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.CreateScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.DeleteScanConfig google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRun google.cloud.websecurityscanner.v1beta.WebSecurityScanner.UpdateScanConfig DATA READ google.cloud.websecurityscanner.v1.WebSecurityScanner.GetFinding google.cloud.websecurityscanner.v1.WebSecurityScanner.ListCrawledUrls google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStats google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindings google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetFinding google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrls google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindings API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Web Security Scanner. google.cloud.websecurityscanner.v1.WebSecurityScanner The following audit logs are associated with methods belonging to google.cloud.websecurityscanner.v1.WebSecurityScanner .
- Filter for this method : protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrls" ListFindingTypeStats Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats Audit log type : Data access Permissions : cloudsecurityscanner.scanruns.getSummary - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.websecurityscanner.v1.WebSecurityScanner.ListCrawledUrls" ListFindingTypeStats Method : google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStats Audit log type : Data access Permissions : cloudsecurityscanner.scanruns.getSummary - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStats" ListFindings Method : google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindings Audit log type : Data access Permissions : cloudsecurityscanner.results.list - DATA READ Method is a long-running or streaming operation : No.

