# 题目0001-勾股数
勾股数
题目描述
如果三个正整数A、B、C ，A² + B² = C² 则为勾股数，
如果ABC之间两两互质，即A与B，A与C，B与C均互质没有公约数，则称其为勾股数元组。
请求出给定 n ~ m 范围内所有的勾股数元组。

输入描述
起始范围
1 < n < 10000
n < m < 10000

输出描述
ABC保证A < B < C
输出格式A B C
多组勾股数元组，按照A B C升序的排序方式输出。
若给定范围内，找不到勾股数元组时，输出Na。

示例一
输入
1
20
输出
3 4 5
5 12 13
8 15 17
示例二
输入
5
10
输出
Na
思路
遍历值域
判断三个数互质并且较小的两个数的平方和等于较大数的平方，即满足毕达哥拉斯定理
输出如何条件的值

参考解题 Python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created with IntelliJ IDEA.
File: main0001.py
Author: Amos
E-mail: amos@amoscloud.com
Date: 2023/2/8
Time: 9:18
Description:
"""

# 接收输入
s, e = int(input()), int(input())
# 计数器用于判断是否有解
count = 0


# 定义函数用于互质判断
def relatively_prime(x, y):
    if x == y and y == 1:
        return False
    min_value = min(x, y)
    for i in range(2, min_value):
        if x % i == 0 and y % i == 0:
            return False
    return True


# 遍历值域
for i in range(s, e - 2):
    for j in range(i + 1, e - 1):
        for k in range(j + 1, e):
            # 符合条件输出结果
            if (relatively_prime(i, j) and
                    relatively_prime(j, k) and
                    relatively_prime(i, k) and
                    i ** 2 + j ** 2 == k ** 2):
                count += 1
                print(f'{i} {j} {k}')


# 无解输出Na
if count == 0:
    print('Na')
