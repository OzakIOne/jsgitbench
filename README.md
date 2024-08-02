# Bench

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

Read last update data perf hooks:
https://docs.google.com/spreadsheets/d/1gyu_nL2waVfY8jNm9gQKSOp7t4lnNAzEhZZrxrr14Ks/edit?usp=sharing

![image](https://github.com/user-attachments/assets/5fcf254f-01bd-4bb8-b276-a540df59553b)

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
