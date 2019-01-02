## This is a project to evaluate the merits of different React UI Libraries.

### I will be evaluating each library based on:
- Ease of use
- Size of compiled package
- Modularity and ability to include or un-include code
- Styles of components

### React UI Component Libraries to test:
1. [x] React Bootstrap 3 using `react-bootstrap`
2. [x] React Bootstrap 4 using `react-bootstrap@next`
3. [x] React Bootstrap 4 using `reactstrap`
4. [x] React Foundation 6 using `react-foundation`
5. [x] React Material-UI using `material-ui`
6. [ ] Material Components for React `material-components-web-react`
7. [ ] PrimeReact
8. [ ] react-dropzone (not a comprehensive UI framework, only handles uploading files via drag and drop)
9. [ ] tcomb-form (not a comprehensive UI framework, only handles styling forms)
10. [ ] Mobiscroll
11. [ ] React Toolbox?

### Test
1. [x] Buttons
2. [x] Tabs
3. [ ] Icons
4. [ ] Switches

## Comparison Chart

| Framework Name and details                                           | Size (Develop) | Size (Production) |
| :-------------------------                                           | :------------- | :---------------- |
| Baseline React App compiled with Webpack                             |      737 KB    |        113 KB     |
|                                                                      |                |                   |
| Bootstrap 3 React App Compiled with Webpack (`react-bootstrap`)      |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag               |      1.8 MB    |        287 KB     |
| - Entire bootstrap.min.css file imported using Webpack               |      2.1 MB    |        545 KB     |
| - Selective bootstrap imported using LESS                            |      1.8 MB    |        237 KB     |
| - Selective bootstrap imported using LESS compiled into file         |      1.8 MB    |        228 KB     |
|                                                                      |                |                   |
| Bootstrap 4 React App Compiled with Webpack (`react-bootstrap@next`) |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag               |      1.6 MB    |        296 KB     |
| - Entire bootstrap.min.css file imported using Webpack               |      1.7 MB    |        302 KB     |
| - Selective bootstrap imported using SCSS                            |      1.6 MB    |        201 KB     |
| - Selective bootstrap imported using SCSS compiled into file         |      1.5 MB    |        193 KB     |
|                                                                      |                |                   |
| Bootstrap 4 React App Compiled with Webpack (`reactstrap`)           |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag               |      1.3 MB    |        379 KB     |
| - Entire bootstrap.min.css file imported using Webpack               |      1.3 MB    |        385 KB     |
| - Selective bootstrap imported using SCSS                            |      1.2 MB    |        284 KB     |
| - Selective bootstrap imported using SCSS compiled into file         |      1.2 MB    |        277 KB     |
|                                                                      |                |                   |
| Foundation 6 React App Compiled with Webpack (`react-foundation`)    |        -       |         -         |
| - Entire foundation.min.css file imported in <link> tag              |      1.0 MB    |        289 KB     |
| - Entire foundation.min.css file imported using Webpack              |      1.0 MB    |        167 KB     |
| - Selective foundation imported using SCSS                           |      927 KB    |        197 KB     |
| - Selective foundation imported using SCSS compiled into file        |      908 KB    |        191 KB     |
|                                                                      |                |                   |
| Foundation 6 React App Compiled with Webpack (`react-foundation`)    |        -       |         -         |
| - Entire foundation.min.css file imported in <link> tag              |      1.0 MB    |        289 KB     |
| - Entire foundation.min.css file imported using Webpack              |      1.0 MB    |        167 KB     |
| - Selective foundation imported using SCSS                           |      927 KB    |        197 KB     |
| - Selective foundation imported using SCSS compiled into file        |      908 KB    |        191 KB     |
|                                                                      |                |                   |
| Material UI React App Compiled with Webpack (`material-ui`)          |        -       |         -         |
| - Material UI Tabs and Buttons                                       |      2.4 MB    |        261 KB     |
| - Material UI Tabs and Buttons with custom styles                    |      2.4 MB    |        275 KB     |
| - Material UI Tabs, Icons, App Bar, and Buttons with custom styles   |      2.4 MB    |        276 KB     |
|                                                                      |                |                   |
