# NINO Designer Portfolio V2

这是一个适合部署到 GitHub Pages 的多页面 UI 设计师作品集。

## 文件结构

- index.html：主页
- about.html：关于我
- contact.html：联系方式
- projects/：独立项目详情页
- assets/css/style.css：全站样式
- assets/js/app.js：公共脚本
- .nojekyll：关闭 Jekyll 处理，避免静态资源路径问题

## GitHub Pages 部署

1. 新建 GitHub 仓库，例如 `ui-portfolio`
2. 上传本项目全部文件，确保 `index.html` 位于仓库根目录
3. 打开仓库 `Settings`
4. 进入 `Pages`
5. Source 选择 `Deploy from a branch`
6. Branch 选择 `main`
7. Folder 选择 `/(root)`
8. 点击 `Save`

发布地址通常为：

`https://你的用户名.github.io/ui-portfolio/`

## 修改内容

- 网站名称：全局搜索 `NINO.DESIGN`
- 邮箱：全局搜索 `hello@example.com`
- 微信：修改 `contact.html`
- 项目详情：修改 `projects` 文件夹中的对应 HTML
- 配色和布局：修改 `assets/css/style.css`
