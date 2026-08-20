#include <bits/stdc++.h>
using namespace std;

void solution(int t)
{
    int n;
    cin >> n;

    int arr[n];

    int i = 0;
    while (n > i)
    {
        cin >> arr[i];
        i++;
    }

    double expected[n];

    expected[n - 1] = arr[n - 1];

    for (int x = n - 2; x >= 0; x--)
    {
        double sum = 0.0;
        int count = 0;

        int cycle = min(x + 6, n - 1);

        for (int y = x + 1; y <= cycle; y++)
        {
            sum += expected[y];
            count++;
        }

        expected[x] = arr[x] + sum / count;
    }

    cout << "Case " << t << ": " << expected[0] << endl;
}

int main()
{
    int t;
    cin >> t;

    for (int i = 1; i <= t; i++)
    {
        solution(i);
    }

    return 0;
}