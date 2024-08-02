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
  // `website/docusaurus.config.js`, // simpleGit doesn't like it /shrug
  `packages/docusaurus-theme-classic/package.json`,
  `packages/docusaurus/package.json`,
  `package.json`,
  `yarn.lock`,
]

function shelljsTaskSync(filename) {
  try {
    const result = shell.exec(`git log -1 --format="%ai %an" -- ${filename}`, { silent: true, cwd: dirname })
    return result.stdout
  } catch (error) {
    throw new Error('shelljsTaskSync:', error)
  }
}

function shelljsTaskAsync(filename) {
  try {
    return new Promise((resolve) => {
      shell.exec(`git log -1 --format="%ai %an" -- ${filename}`, { silent: true, cwd: dirname }, (code, stdout) => {
        resolve(stdout)
      })
    })
  } catch (error) {
    throw new Error('shelljsTaskAsync:', error)
  }
}

async function execaTask(filename) {
  try {
    const { stdout } = await execa('git', ['log', '-1', '--format="%ai %an"', '--', filename], { cwd: dirname })
    return stdout
  } catch (error) {
    throw new Error('execaTask:', error)
  }
}

async function simpleGitTask(filename) {
  try {
    const log = await git.log(['-1', '--format="%ai %an"', filename])
    return log.latest.date + ' ' + log.latest.author_name
  } catch (error) {
    throw new Error('simpleGitTask:', { cause: error })
  }
}

async function simpleGitRepeatedTask(filename, iterations) {
  try {
    let result
    for (let i = 0; i < iterations; i++) {
      const log = await git.log(['-1', '--format="%ai %an"', filename])
      result = log.latest.date + ' ' + log.latest.author_name
    }
    return result
  } catch (error) {
    throw new Error('simpleGitRepeatedTask:', { cause: error })
  }
}

async function runBenchmarks() {
  const bench = new Bench()
  const iterations = 10

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

    bench.add(`Simple-git Repeated ${filename}`, async () => {
      return await simpleGitRepeatedTask(filename, iterations)
    })
  }

  await bench.run()

  console.table(bench.table())
}

runBenchmarks().catch(console.error)
