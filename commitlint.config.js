// commitlint.config.js
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // Bug 修复
        'docs', // 文档更新
        'style', // 代码样式调整（不影响逻辑）
        'refactor', // 代码重构
        'test', // 测试相关
        'chore', // 构建/工具变更
        'revert', // 回滚提交
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'], // 首字母大写
  },
};
