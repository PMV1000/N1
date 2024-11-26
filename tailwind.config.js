// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx}', './index.html'],  // Bao gồm các tệp .js và .jsx
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans-serif'],  // Thêm font "Roboto"
      },
    },
  },
  important: true,  // Đảm bảo các lớp CSS của Tailwind có độ ưu tiên cao
  plugins: [],  // Bạn có thể thêm các plugin nếu cần
};
