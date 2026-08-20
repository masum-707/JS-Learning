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
    // cout << "Hello from solution";

    double expected = 0.0;
    for (int x = 1; x < n - 1; x += 6)
    {
        double sum = 0.0;
        int count = 0;
        int cycle = min((x + 6), n - 1);
        for (int y = x; cycle > y; y++)
        {
            sum += arr[y];
            count++;
        }

        // cout << sum << endl;
        // cout << count << endl;

        expected += sum / count;
        // cout << expected << endl;
    }
    if (n == 1)
    {
        cout << "Case " << t << ": " << expected + arr[n - 1];
    }
    else
    {
        cout << "Case " << t << ": " << expected + arr[n - 1] + arr[0];
    }
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
