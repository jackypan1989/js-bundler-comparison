const { writeFile } = require('fs').promises

async function codegen(folder) {
  const arr = Array.from({ length: 1000 }, (x, i) => i)

  await Promise.all(
    arr.map(x => {
      return writeFile(`${folder}/src/${x}.js`, 'export default example = 0')
    })
  )

  await writeFile(`${folder}/src/index.js`, arr.reduce((acc, cur) => {
    return acc + `import './${cur}'\n`
  }, ''))
}

codegen('babel')
codegen('esbuild')
codegen('swc')