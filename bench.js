import shell from 'shelljs'
import { execa } from 'execa'
import simpleGit from 'simple-git'
import { Bench } from 'tinybench'

const git = simpleGit()

function shelljsTaskSync() {
  shell.exec('git log', { silent: true })
}

function shelljsTaskAsync() {
  return new Promise((resolve) => {
    shell.exec('git log', { silent: true }, () => resolve())
  })
}

async function execaTask() {
  const { stdout: gitPath } = await execa('which', ['git'])
  await execa(gitPath, ['log'])
}

async function simpleGitTask() {
  await git.log()
}

async function runBenchmarks() {
  const bench = new Bench()

  bench.add('Shelljs Sync', () => {
    shelljsTaskSync()
  })

  bench.add('Shelljs Async', async () => {
    await shelljsTaskAsync()
  })

  bench.add('Execa', async () => {
    await execaTask()
  })

  bench.add('Simple-git', async () => {
    await simpleGitTask()
  })

  await bench.run()

  console.table(bench.table())
}

runBenchmarks().catch(console.error)
