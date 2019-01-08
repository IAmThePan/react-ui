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
6. [x] Material Components for React `material-components-web-react`
7. [x] React Material Components Web `react-material-components-web`
        - Don't use:
        - The documentation was wrong in places.
        - Limited Components (no Tabs).
        - Giant package size.
8. [x] RMWC `rmwc`
9. [x] PrimeReact
10. [ ] react-dropzone (not a comprehensive UI framework, only handles uploading files via drag and drop)
11. [ ] tcomb-form (not a comprehensive UI framework, only handles styling forms)
12. [ ] Mobiscroll
13. [x] React Toolbox?

### Test
1. [x] Buttons
2. [x] Tabs
3. [ ] Icons
4. [ ] Switches

## Comparison Chart

| Framework Name and details                                                    | Size (Develop) | Size (Production) |
| :-------------------------                                                    | :------------- | :---------------- |
| Baseline React App compiled with Webpack                                      |      756 KB    |        114 KB     |
|                                                                               |                |                   |
| Bootstrap 3 React App Compiled with Webpack (`react-bootstrap`)               |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag                        |      1.8 MB    |        291 KB     |
| - Entire bootstrap.min.css file imported using Webpack                        |      2.0 MB    |        440 KB     |
| - Selective bootstrap imported using LESS                                     |      1.8 MB    |        241 KB     |
| - Selective bootstrap imported using LESS compiled into file                  |      1.8 MB    |        232 KB     |
|                                                                               |                |                   |
| Bootstrap 4 React App Compiled with Webpack (`react-bootstrap@next`)          |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag                        |      1.1 MB    |        317 KB     |
| - Entire bootstrap.min.css file imported using Webpack                        |      1.1 MB    |        323 KB     |
| - Selective bootstrap imported using SCSS                                     |      1.0 MB    |        208 KB     |
| - Selective bootstrap imported using SCSS compiled into file                  |      988 KB    |        201 KB     |
|                                                                               |                |                   |
| Bootstrap 4 React App Compiled with Webpack (`reactstrap`)                    |        -       |         -         |
| - Entire bootstrap.min.css file imported in <link> tag                        |      1.3 MB    |        395 KB     |
| - Entire bootstrap.min.css file imported using Webpack                        |      1.3 MB    |        401 KB     |
| - Selective bootstrap imported using SCSS                                     |      1.2 MB    |        287 KB     |
| - Selective bootstrap imported using SCSS compiled into file                  |      1.2 MB    |        279 KB     |
|                                                                               |                |                   |
| Foundation 6 React App Compiled with Webpack (`react-foundation`)             |        -       |         -         |
| - Entire foundation.min.css file imported in <link> tag                       |      1.1 MB    |        393 KB     |
| - Entire foundation.min.css file imported using Webpack                       |      1.2 MB    |        173 KB     |
| - Selective foundation imported using SCSS                                    |      984 KB    |        228 KB     |
| - Selective foundation imported using SCSS compiled into file                 |      964 KB    |        221 KB     |
|                                                                               |                |                   |
| Material UI React App Compiled with Webpack (`material-ui`)                   |        -       |         -         |
| - Material UI Tabs and Buttons                                                |      1.3 MB    |        254 KB     |
| - Material UI Buttons                                                         |      1.2 MB    |        228 KB     |
| - Material UI Tabs and Buttons with custom styles                             |      1.3 MB    |        259 KB     |
| - Material UI Tabs, Icons, App Bar, and Buttons with custom styles            |      1.3 MB    |        270 KB     |
|                                                                               |                |                   |
| Material UI React App Compiled with Webpack ('material-web-components-react') |        -       |         -         |
| - Selected Material UI imported CSS in <link> tag                             |      1.6 MB    |        438 KB     |
| - Selected Material UI imported CSS using JavaScript                          |      1.6 MB    |        444 KB     |
| - Selected Material UI imported SCSS using JavaScript                         |      1.6 MB    |        461 KB     |
| - Selected Material UI imported SCSS compiled into file                       |      1.6 MB    |        454 KB     |
|                                                                               |                |                   |
| Material UI React App Compiled with Webpack ('react-material-web-components') |        -       |         -         |
| - Selected Material UI imported CSS in <link> tag                             |      2.0 MB    |        582 KB     |
| - Selected Material UI imported CSS using JavaScript                          |      2.0 MB    |        602 KB     |
|                                                                               |                |                   |
| Material UI React App Compiled with Webpack (`rmwc`)                          |        -       |         -         |
| - Material UI imported CSS in <link> tag                                      |      1.5 MB    |        547 KB     |
| - Material UI imported CSS using JavaScript                                   |      1.5 MB    |        553 KB     |
| - Selective Material UI imported SCSS using JavaScript                        |      1.3 MB    |        350 KB     |
| - Selective Material UI Imported SCSS compiled into file                      |      1.3 MB    |        343 KB     |
|                                                                               |                |                   |
| Prime-React App Compiled with Webpack (`prime-react`)                         |        -       |         -         |
| - Material UI and Themes imported CSS in <link> tag                           |      1.0 MB    |        340 KB     |
| - Material UI and Themes imported CSS using JavaScript                        |      1.4 MB    |        654 KB     |
|                                                                               |                |                   |
| React-Toolbox App Compiled with Webpack (`react-toolbox`)                     |        -       |         -         |
| - Material UI Buttons only                                                    |      940 KB    |        196 KB     |
| - Material UI Buttons and Tabs                                                |      x.x MB    |        xxx KB     |
| - Material UI Buttons and Tabs with customizations                            |      x.x MB    |        xxx KB     |
|                                                                               |                |                   |
