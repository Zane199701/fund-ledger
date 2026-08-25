// firebase-config.js — Firebase Web 应用配置（主页面与管理页共用这一份）
//
// 部署时只需两步：
// 1. 打开 Firebase 控制台 → 项目设置 → 你的应用 → Web 应用，
//    把 firebaseConfig 对象的各字段值粘贴到下面引号内（替换「在此粘贴…」字样）。
// 2. 把部署时创建的管理员邮箱（Authentication 里的那个账号）填到 ADMIN_EMAIL，
//    并把 firestore.rules 里的 ADMIN_EMAIL_PLACEHOLDER 替换成同一邮箱（两处须一致）。
//
// 说明：此配置是公开标识符，不是机密——它会随网页源码公开，Firebase 官方设计即如此。
// 数据安全由 Firestore 安全规则（firestore.rules）与管理员账号密码保障，与这份配置无关。

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyCDOVz_AHr8u4GXNvlQ4Z4klmaHq-HZDaY",
  authDomain: "fund-ledger-4608b.firebaseapp.com",
  projectId: "fund-ledger-4608b",
  storageBucket: "fund-ledger-4608b.firebasestorage.app",
  messagingSenderId: "215865779953",
  appId: "1:215865779953:web:9384bab8871eae542f6b50"
};

// 管理员邮箱（在 Firebase 控制台 → Authentication → Users 中创建的那个账号）。
// 管理页仅允许此邮箱登录；Firestore 规则以同一邮箱判定管理员写入权限。
var ADMIN_EMAIL = "1105755412@qq.com";
