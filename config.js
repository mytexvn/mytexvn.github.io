/**
 * Tên file: config.js
 *
 * Mô tả: File cấu hình tập trung cho toàn bộ website MyTeX — định nghĩa
 *         thông tin ứng dụng, tác giả, liên kết video, URL tải xuống cho
 *         4 nền tảng và thông tin phiên bản. Chỉnh sửa tại đây để đồng
 *         bộ nội dung tự động trên tất cả các trang.
 *
 * Dự án: MyTeX
 * Tác giả: Nguyễn Hoàng Hải
 * Hỗ trợ lập trình: Claude, ChatGPT, Gemini
 * Ngày tạo: 15/04/2026
 *
 * Bản quyền: 2026 MyTeX · Nguyễn Hoàng Hải · nghai.math@gmail.com
 */
// ╔═══════════════════════════════════════════════════════╗
// ║  config.js — Chỉnh tại đây để đồng bộ toàn website    ║
// ╚═══════════════════════════════════════════════════════╝
const SITE = {
  app:    { name: 'MyTeX', tagline: 'Desktop suite · TeX · Word · AI · Google Form · Đấu trường' },
  author: { name: 'Nguyễn Hoàng Hải', email: 'nghai.math@gmail.com',
            facebook: 'https://www.facebook.com/nhhai.math',
            github:   'https://github.com/mytexvn' },
  video:  { id: 'F-5TN2JQ-nQ',
            url:   'https://www.youtube.com/watch?v=F-5TN2JQ-nQ',
            thumb: 'https://img.youtube.com/vi/F-5TN2JQ-nQ/maxresdefault.jpg' },
  dl:     { windows:     'https://github.com/mytexvn/mytexvn.github.io/releases/latest/download/mytex-windows-x64.zip',
            macos_arm64: 'https://github.com/mytexvn/mytexvn.github.io/releases/latest/download/mytex-macos-arm64.tar.gz',
            macos_intel: 'https://github.com/mytexvn/mytexvn.github.io/releases/latest/download/mytex-macos-intel.tar.gz',
            linux:       'https://github.com/mytexvn/mytexvn.github.io/releases/latest/download/mytex-linux-x64.tar.gz' },
  privacy: { updated: '28/04/2026' },
  year: '2026',
};

document.addEventListener('DOMContentLoaded', function () {
  // Icons
  document.querySelectorAll('.js-icon').forEach(function (el) { el.src = 'assets/iconMyTeX.png'; });
  var fav = document.querySelector('link[rel="icon"]');
  if (fav) fav.href = 'assets/iconMyTeX.png';

  // Author / contact
  document.querySelectorAll('.js-author').forEach(function (el) { el.textContent = SITE.author.name; });
  document.querySelectorAll('.js-email').forEach(function (el) {
    el.textContent = SITE.author.email;
    el.href = 'mailto:' + SITE.author.email;
  });
  document.querySelectorAll('.js-facebook').forEach(function (el) {
    el.textContent = 'facebook.com/' + SITE.author.facebook.split('/').pop();
    el.href = SITE.author.facebook;
  });
  document.querySelectorAll('.js-year').forEach(function (el) { el.textContent = SITE.year; });

  // Download links
  var dlMap = {
    'dl-windows':     SITE.dl.windows,
    'dl-macos':       SITE.dl.macos_arm64,
    'dl-macos-arm64': SITE.dl.macos_arm64,
    'dl-macos-intel': SITE.dl.macos_intel,
    'dl-linux':       SITE.dl.linux,
  };
  Object.keys(dlMap).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) { el.href = dlMap[id]; el.target = '_blank'; el.rel = 'noopener'; }
  });

  // Privacy date
  var pd = document.getElementById('privacy-date');
  if (pd) pd.textContent = SITE.privacy.updated;

  // Video embed
  var videoIframe = document.getElementById('heroVideo');
  if (videoIframe && SITE.video && SITE.video.id) {
    videoIframe.src = 'https://www.youtube.com/embed/' + SITE.video.id +
      '?rel=0&modestbranding=1&color=white';
  }
});
