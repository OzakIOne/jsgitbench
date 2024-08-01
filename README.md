# Bench

┌─────────┬──────────────┬─────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name    │ ops/sec │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼──────────────┼─────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'Shelljs'    │ '29'    │ 34078247.26666668  │ '±2.11%' │ 15      │
│ 1       │ 'Execa'      │ '198'   │ 5028952.930000003  │ '±4.56%' │ 100     │
│ 2       │ 'Simple-git' │ '283'   │ 3530197.7464788766 │ '±2.16%' │ 142     │
└─────────┴──────────────┴─────────┴────────────────────┴──────────┴─────────┘

Starting Shelljs benchmark...
Shelljs: 33424.261249999996 ms
Starting Execa benchmark...
Execa: 3486.9847500000033 ms
Starting Simple-git benchmark...
Simple-git: 3513.821750000003 ms
Starting Simple-git raw benchmark...
Simple-git raw: 3493.05775 ms
