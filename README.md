## This is a project to evaluate the merits of different React UI Libraries.

### I will be evaluating each library based on:
- Ease of use
- Size of compiled package
- Modularity and ability to include or un-include code
- Styles of components

### React UI Component Libraries to test:
1. [x] React Material-UI using `material-ui`
2. [ ] React Foundation 6 using `react-foundation`
3. [x] React Bootstrap 3 using `react-bootstrap`
4. [x] React Bootstrap 4 using `react-bootstrap@next`
5. [x] React Bootstrap 4 using `reactstrap`
6. [ ] React Toolbox?

### Test
1. [x] Buttons
2. [x] Tabs
3. [ ] Icons
4. [ ] Switches

## Comparison Chart
| ------------------------------------------------------------------ | Size (Develop) | Size (Production) |
|____________________________________________________________________|________________|___________________|
| Baseline React App compiled with Webpack                           |      737 KB    |        113 KB     |
|____________________________________________________________________|________________|___________________|
| Bootstrap 3 React App Compiled with Webpack (react-bootstrap)      |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag             |      1.8 MB    |        287 KB     |
| - Entire bootstrap.min.css file imported using Webpack             |      2.1 MB    |        545 KB     |
| - Selective bootstrap imported using SCSS                          |                |                   |
|____________________________________________________________________|________________|___________________|
| Bootstrap 4 React App Compiled with Webpack (react-bootstrap@next) |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag             |      1.6 MB    |        296 KB     |
| - Entire bootstrap.min.css file imported using Webpack             |      1.7 MB    |        302 KB     |
| - Selective bootstrap imported using SCSS                          |                |                   |
|____________________________________________________________________|________________|___________________|
| Bootstrap 4 React App Compiled with Webpack (reactstrap)           |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag             |      1.3 MB    |        379 KB     |
| - Entire bootstrap.min.css file imported using Webpack             |      1.3 MB    |        385 KB     |
| - Selective bootstrap imported using SCSS                          |                |                   |
|____________________________________________________________________|________________|___________________|
