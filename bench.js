import shell from 'shelljs'
import { execa } from 'execa'
import simpleGit from 'simple-git'
import { Bench } from 'tinybench'
import pkg from 'lodash'

const { sample } = pkg
const dirname = 'docusaurus'
const options = {
  baseDir: dirname,
}

const git = simpleGit(options)

const fileList = [
  `website/src/data/users.tsx`,
  `packages/docusaurus-plugin-content-blog/package.json`,
  `packages/docusaurus-plugin-content-docs/package.json`,
  `packages/docusaurus-mdx-loader/package.json`,
  `website/package.json`,
  `website/docusaurus.config.js`,
  `packages/docusaurus-theme-classic/package.json`,
  `packages/docusaurus/package.json`,
  `package.json`,
  `yarn.lock`,
]

function shelljsTaskSync(filename) {
  const result = shell.exec(`git log -1 --format="%ai %an" -- ${filename}`, { silent: true, cwd: dirname })
  return result.stdout
}

function shelljsTaskAsync(filename) {
  return new Promise((resolve) => {
    shell.exec(`git log -1 --format="%ai %an" -- ${filename}`, { silent: true, cwd: dirname }, (code, stdout) => {
      resolve(stdout)
    })
  })
}

async function execaTask(filename) {
  const { stdout } = await execa('git', ['log', '-1', '--format="%ai %an"', '--', filename], { cwd: dirname })
  return stdout
}

async function simpleGitTask(filename) {
  const log = await git.log(['-1', '--format="%ai %an"', filename])
  return log.latest.date + ' ' + log.latest.author_name
}

async function runBenchmarks() {
  const bench = new Bench()

  for (let i = 0; i < fileList.length; i++) {
    const filename = sample(fileList)

    bench.add(`Shelljs Sync ${filename}`, () => {
      return shelljsTaskSync(filename)
    })

    bench.add(`Shelljs Async ${filename}`, async () => {
      return await shelljsTaskAsync(filename)
    })

    bench.add(`Execa ${filename}`, async () => {
      return await execaTask(filename)
    })

    bench.add(`Simple-git ${filename}`, async () => {
      return await simpleGitTask(filename)
    })
  }

  await bench.run()

  console.table(bench.table())
}

runBenchmarks().catch(console.error)
