import shell from 'shelljs'
import { execa } from 'execa'
import simpleGit from 'simple-git'
import { performance } from 'perf_hooks'

const git = simpleGit()

const RUNS = 1000

async function benchmarkShelljs() {
  const start = performance.now()
  for (let i = 0; i < RUNS; i++) {
    const result = shell.exec('git log -1 --format="%an|%ad"', { silent: true }).stdout.trim()
    const [name, date] = result.split('|')
  }
  const end = performance.now()
  console.log(`Shelljs: ${end - start} ms`)
}

async function benchmarkExeca() {
  // Find the full path to git
  const { stdout: gitPath } = await execa('which', ['git'])

  const start = performance.now()
  for (let i = 0; i < RUNS; i++) {
    const { stdout } = await execa(gitPath, ['log', '-1', '--format=%an|%ad'])
    const [name, date] = stdout.trim().split('|')
  }
  const end = performance.now()
  console.log(`Execa: ${end - start} ms`)
}

async function benchmarkSimpleGit() {
  const start = performance.now()
  for (let i = 0; i < RUNS; i++) {
    const log = await git.log({ maxCount: 1, format: { authorName: '%an', authorDate: '%ad' } })
    const { authorName: name, authorDate: date } = log.latest
  }
  const end = performance.now()
  console.log(`Simple-git: ${end - start} ms`)
}

async function benchmarkSimpleGitRaw() {
  const start = performance.now()
  for (let i = 0; i < RUNS; i++) {
    const result = await git.raw(['log', '-1', '--format=%an|%ad'])
    const [name, date] = result.trim().split('|')
  }
  const end = performance.now()
  console.log(`Simple-git raw: ${end - start} ms`)
}

async function runBenchmarks() {
  console.log('Starting Shelljs benchmark...')
  await benchmarkShelljs()

  console.log('Starting Execa benchmark...')
  await benchmarkExeca()

  console.log('Starting Simple-git benchmark...')
  await benchmarkSimpleGit()

  console.log('Starting Simple-git raw benchmark...')
  await benchmarkSimpleGitRaw()
}

runBenchmarks()
