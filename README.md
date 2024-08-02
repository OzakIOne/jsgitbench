# Bench

```txt
┌─────────┬─────────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name       │ ops/sec │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼─────────────────┼─────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'Shelljs Sync'  │ '29'    │ 33981866.599999994 │ '±0.83%' │ 15      │
│ 1       │ 'Shelljs Async' │ '201'   │ 4953639.009900987  │ '±1.07%' │ 101     │
│ 2       │ 'Execa'         │ '201'   │ 4973328.356435649  │ '±3.31%' │ 101     │
│ 3       │ 'Simple-git'    │ '276'   │ 3620113.625899248  │ '±1.40%' │ 139     │
└─────────┴─────────────────┴─────────┴────────────────────┴──────────┴─────────┘

Starting Shelljs benchmark...
Shelljs: 33424.261249999996 ms
Starting Execa benchmark...
Execa: 3486.9847500000033 ms
Starting Simple-git benchmark...
Simple-git: 3513.821750000003 ms
Starting Simple-git raw benchmark...
Simple-git raw: 3493.05775 ms
```
