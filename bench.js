import shell from 'shelljs'
import { execa } from 'execa'
import simpleGit from 'simple-git'
import { Bench } from 'tinybench'

const git = simpleGit()

function shelljsTask() {
  shell.exec('git log', { silent: true })
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

  bench
    .add('Shelljs', () => {
      shelljsTask()
    })
    .add('Execa', async () => {
      await execaTask()
    })
    .add('Simple-git', async () => {
      await simpleGitTask()
    })

  await bench.run()

  console.table(bench.table())
}

runBenchmarks()
