# Bench

## Basic for loop git log -v

```txt
bench.js
┌─────────┬─────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name       │ ops/sec │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼─────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'Shelljs Sync'  │ '29'    │ 33981866.599999994 │ '±0.83%' │ 15      │
│ 1       │ 'Shelljs Async' │ '201'   │ 4953639.009900987  │ '±1.07%' │ 101     │
│ 2       │ 'Execa'         │ '201'   │ 4973328.356435649  │ '±3.31%' │ 101     │
│ 3       │ 'Simple-git'    │ '276'   │ 3620113.625899248  │ '±1.40%' │ 139     │
└─────────┴─────────────────┴─────────┴────────────────────┴──────────┴─────────┘

bench.js new
┌─────────┬──────────────────────────────────────────────────────────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │                              Task Name                               │ ops/sec │ Average Time (ns)  │  Margin  │ Samples │
├─────────┼──────────────────────────────────────────────────────────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│    0    │ 'Shelljs Sync packages/docusaurus-plugin-content-docs/package.json'  │  '33'   │ 30042598.002097186 │ '±1.04%' │   17    │
│    1    │ 'Shelljs Async packages/docusaurus-plugin-content-docs/package.json' │  '179'  │ 5562449.9880605275 │ '±1.52%' │   90    │
│    2    │     'Execa packages/docusaurus-plugin-content-docs/package.json'     │  '229'  │ 4354853.998578113  │ '±1.43%' │   115   │
│    3    │  'Simple-git packages/docusaurus-plugin-content-docs/package.json'   │  '252'  │ 3966080.7254276876 │ '±1.26%' │   127   │
│    4    │      'Shelljs Sync packages/docusaurus-mdx-loader/package.json'      │  '32'   │ 30860460.766974617 │ '±1.77%' │   17    │
│    5    │     'Shelljs Async packages/docusaurus-mdx-loader/package.json'      │  '157'  │ 6340811.705664744  │ '±2.26%' │   79    │
│    6    │         'Execa packages/docusaurus-mdx-loader/package.json'          │  '206'  │ 4851184.691660679  │ '±1.08%' │   104   │
│    7    │       'Simple-git packages/docusaurus-mdx-loader/package.json'       │  '208'  │ 4804974.2275760295 │ '±1.10%' │   105   │
│    8    │           'Shelljs Sync packages/docusaurus/package.json'            │  '29'   │ 33408852.660655975 │ '±2.95%' │   15    │
│    9    │           'Shelljs Async packages/docusaurus/package.json'           │  '168'  │ 5922120.531516916  │ '±0.81%' │   85    │
│   10    │               'Execa packages/docusaurus/package.json'               │  '174'  │ 5722413.840619001  │ '±6.53%' │   88    │
│   11    │            'Simple-git packages/docusaurus/package.json'             │  '199'  │ 5002126.238942146  │ '±1.42%' │   100   │
│   12    │              'Shelljs Sync website/src/data/users.tsx'               │  '29'   │  34249102.9381752  │ '±2.09%' │   15    │
│   13    │              'Shelljs Async website/src/data/users.tsx'              │  '155'  │ 6448968.510597181  │ '±1.03%' │   78    │
│   14    │                  'Execa website/src/data/users.tsx'                  │  '199'  │ 5005379.607081413  │ '±3.15%' │   100   │
│   15    │               'Simple-git website/src/data/users.tsx'                │  '197'  │ 5076029.918711595  │ '±5.57%' │   99    │
│   16    │                     'Shelljs Sync package.json'                      │  '31'   │ 31693898.310884833 │ '±2.83%' │   16    │
│   17    │                     'Shelljs Async package.json'                     │  '185'  │ 5383740.140545752  │ '±1.59%' │   93    │
│   18    │                         'Execa package.json'                         │  '211'  │ 4726584.103872192  │ '±7.22%' │   106   │
│   19    │                      'Simple-git package.json'                       │  '243'  │ 4108942.623998299  │ '±1.53%' │   122   │
│   20    │                       'Shelljs Sync yarn.lock'                       │  '31'   │ 32247411.243617535 │ '±1.51%' │   16    │
│   21    │                      'Shelljs Async yarn.lock'                       │  '196'  │ 5089305.202768306  │ '±0.63%' │   99    │
│   22    │                          'Execa yarn.lock'                           │  '241'  │ 4136142.908049024  │ '±1.14%' │   121   │
│   23    │                        'Simple-git yarn.lock'                        │  '270'  │ 3700121.641816462  │ '±0.77%' │   136   │
└─────────┴──────────────────────────────────────────────────────────────────────┴─────────┴────────────────────┴──────────┴─────────┘

index.js
Starting Shelljs benchmark...
Shelljs: 33424.261249999996 ms
Starting Execa benchmark...
Execa: 3486.9847500000033 ms
Starting Simple-git benchmark...
Simple-git: 3513.821750000003 ms
Starting Simple-git raw benchmark...
Simple-git raw: 3493.05775 ms
```

## Perf hooks

Read last update data perf hooks:
<https://docs.google.com/spreadsheets/d/1gyu_nL2waVfY8jNm9gQKSOp7t4lnNAzEhZZrxrr14Ks/edit?usp=sharing>

![image](https://github.com/user-attachments/assets/5fcf254f-01bd-4bb8-b276-a540df59553b)

## Hyperfine

```
Hyperfine bench website:build:fast
Simple git 
Benchmark 1: yarn build:website:fast
  Time (mean ± σ):     15.065 s ±  1.353 s    [User: 22.374 s, System: 3.245 s]
  Range (min … max):   14.085 s … 17.427 s    5 runs

Execa
Benchmark 1: yarn build:website:fast
  Time (mean ± σ):     14.498 s ±  0.584 s    [User: 22.117 s, System: 3.500 s]
  Range (min … max):   14.135 s … 15.515 s    5 runs

Main
Benchmark 1: yarn build:website:fast
  Time (mean ± σ):     15.668 s ±  1.667 s    [User: 24.751 s, System: 3.658 s]
  Range (min … max):   14.257 s … 17.508 s    5 runs
```
