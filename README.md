# js-bundler-comparison
Comparison between three trending JS/TS bundlers.

- babel (https://babeljs.io/) <img src="https://img.shields.io/npm/dm/@babel/core.svg">
- esbuild (https://esbuild.github.io/) <img src="https://img.shields.io/npm/dm/esbuild.svg">
- swc (https://swc.rs/) <img src="https://img.shields.io/npm/dm/@swc/core.svg">

# example projects

- basic : single file project with cli (/basic)
- complex : 1000 files project with cli (/complex)
- cra : create-react-app (/cra)

# result

Machine : MacBook Pro (15 inches，2017)  
Experiments: 10 results of average

| project | bundler | avg speed(ms) |
| ---- | ---- | --- |
| basic | babel | 275 |
| basic | esbuild | 58 |
| basic | swc | 13 |
| complex | babel | 3277 |
| complex | esbuild | 232 |
| complex | swc | 285 |
| cra | babel | 4374 |
| cra | esbuild | 3858 |
| cra | swc | 3896 |

Thanks to effective languages with hefty parallelism like Go (esbuild) and Rust (swc), you can get 10x up speed increase on your mult-core machine.
